import fs from 'fs/promises';
import http from 'http';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';
import Parser from 'rss-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const newsDir = path.join(projectRoot, 'src', 'content', 'news');
const newsImagesDir = path.join(projectRoot, 'public', 'images', 'news');

const getNumberArg = (flag, fallback) => {
  const index = process.argv.indexOf(flag);
  if (index === -1) return fallback;
  const value = Number(process.argv[index + 1]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
};

const MAX_ITEMS = getNumberArg('--max', 20);
const FEED_URL = process.env.RSS_FEED_URL || 'https://rss.app/feeds/NOUIyk91ohlHHN5Z.xml';
const REFRESH_IMAGES = process.argv.includes('--refresh-images');

const parser = new Parser({
  timeout: 15000,
  headers: {
    'User-Agent': 'bcem-linkedin-import/1.0 (+https://github.com/saqibj/bcem-site)',
  },
  customFields: {
    item: ['media:content', 'media:thumbnail', 'content:encoded', 'description'],
  },
});

const ALT_SERVICES_MESSAGE = [
  'LinkedIn RSS feeds are deprecated or unreliable.',
  'Use a third-party RSS provider such as:',
  '- https://rss.app/',
  '- https://fetchrss.com/',
  '',
  'If you have LinkedIn Marketing API access, consider using the API instead.',
].join('\n');

const ensureNewsDir = async () => {
  await fs.mkdir(newsDir, { recursive: true });
};

const ensureImagesDir = async () => {
  await fs.mkdir(newsImagesDir, { recursive: true });
};

const normalizeWhitespace = (value) =>
  value.replace(/\s+/g, ' ').replace(/\s+([.,!?:;])/g, '$1').trim();

const normalizeLines = (value) => {
  const lines = value.replace(/\r/g, '').split('\n');
  const cleaned = lines.map((line) => line.replace(/\s+/g, ' ').trim());
  const merged = cleaned.join('\n').replace(/\n{3,}/g, '\n\n');
  return merged.trim();
};

const decodeEntities = (value) =>
  value
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

const cleanHtml = (html = '') => {
  if (!html) return '';
  const withBreaks = html
    .replace(/<\s*br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<\/li>/gi, '\n');
  const stripped = withBreaks.replace(/<[^>]*>/g, '');
  const decoded = decodeEntities(stripped);
  return normalizeLines(decoded);
};

const truncate = (value, max = 160) => {
  const text = normalizeWhitespace(value);
  if (text.length <= max) return text;
  return `${text.slice(0, max - 3).trim()}...`;
};

const slugify = (value) => {
  const base = value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return base.slice(0, 50).replace(/-+$/g, '');
};

const formatDate = (date) => {
  const year = date.getUTCFullYear();
  const month = `${date.getUTCMonth() + 1}`.padStart(2, '0');
  const day = `${date.getUTCDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const escapeYaml = (value) =>
  value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

const updateFrontmatter = (content, updates) => {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return content;
  const frontmatterLines = match[1].split('\n');
  const existing = new Map();
  for (const line of frontmatterLines) {
    const [key, ...rest] = line.split(':');
    if (!key || rest.length === 0) continue;
    existing.set(key.trim(), rest.join(':').trim());
  }

  const mergedLines = [];
  const usedKeys = new Set();
  for (const line of frontmatterLines) {
    const [key, ...rest] = line.split(':');
    if (!key || rest.length === 0) {
      mergedLines.push(line);
      continue;
    }
    const trimmedKey = key.trim();
    if (updates[trimmedKey] !== undefined) {
      mergedLines.push(`${trimmedKey}: ${updates[trimmedKey]}`);
      usedKeys.add(trimmedKey);
    } else {
      mergedLines.push(line);
      usedKeys.add(trimmedKey);
    }
  }

  for (const [key, value] of Object.entries(updates)) {
    if (!usedKeys.has(key)) {
      mergedLines.push(`${key}: ${value}`);
    }
  }

  return content.replace(match[0], `---\n${mergedLines.join('\n')}\n---\n`);
};

const getExistingSourceUrls = async () => {
  const existing = new Set();
  const files = await fs.readdir(newsDir).catch(() => []);
  await Promise.all(
    files.map(async (file) => {
      if (!file.endsWith('.md')) return;
      const fullPath = path.join(newsDir, file);
      const content = await fs.readFile(fullPath, 'utf8');
      const match = content.match(/^sourceUrl:\s*"?(.+?)"?$/m);
      if (match?.[1]) {
        existing.add(match[1].trim());
      }
    })
  );
  return existing;
};

const buildMarkdown = ({ title, description, publishDate, sourceUrl, body, image, imageAlt }) => {
  const safeTitle = escapeYaml(title);
  const safeDescription = escapeYaml(description);
  const safeExcerpt = escapeYaml(description);
  const safeSourceUrl = escapeYaml(sourceUrl);
  const safeImage = image ? escapeYaml(image) : '';
  const safeImageAlt = imageAlt ? escapeYaml(imageAlt) : '';

  return [
    '---',
    `title: "${safeTitle}"`,
    `description: "${safeDescription}"`,
    `excerpt: "${safeExcerpt}"`,
    `publishDate: ${publishDate}`,
    `pubDate: ${publishDate}`,
    'category: "News"',
    'featured: false',
    'draft: false',
    'source: "linkedin"',
    `sourceUrl: "${safeSourceUrl}"`,
    ...(safeImage ? [`image: "${safeImage}"`] : []),
    ...(safeImageAlt ? [`imageAlt: "${safeImageAlt}"`] : []),
    '---',
    '',
    body,
    '',
  ].join('\n');
};

const extractImageUrl = (item, fallbackHtml) => {
  if (item?.enclosure?.url) return item.enclosure.url;
  if (item?.['media:content']?.url) return item['media:content'].url;
  if (item?.['media:content']?.['$']?.url) return item['media:content']['$'].url;
  if (Array.isArray(item?.['media:content']) && item['media:content'][0]?.url) {
    return item['media:content'][0].url;
  }
  if (item?.['media:thumbnail']?.url) return item['media:thumbnail'].url;
  if (item?.['media:thumbnail']?.['$']?.url) return item['media:thumbnail']['$'].url;
  if (Array.isArray(item?.['media:thumbnail']) && item['media:thumbnail'][0]?.url) {
    return item['media:thumbnail'][0].url;
  }
  if (item?.media?.content?.url) return item.media.content.url;
  const match = fallbackHtml?.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] || '';
};

const resolveImageExtension = (url) => {
  try {
    const parsed = new URL(url);
    const ext = path.extname(parsed.pathname);
    if (ext && ext.length <= 5) return ext;
  } catch {
    return '.jpg';
  }
  return '.jpg';
};

const downloadImage = (url, destination, redirects = 0) =>
  new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const request = client.get(url, (response) => {
      if ([301, 302, 303, 307, 308].includes(response.statusCode)) {
        if (redirects >= 3) {
          reject(new Error('Too many redirects while downloading image.'));
          return;
        }
        const location = response.headers.location;
        if (!location) {
          reject(new Error('Redirect without location header.'));
          return;
        }
        response.resume();
        const nextUrl = new URL(location, url).toString();
        resolve(downloadImage(nextUrl, destination, redirects + 1));
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Image download failed with status ${response.statusCode}.`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', async () => {
        try {
          await fs.writeFile(destination, Buffer.concat(chunks));
          resolve(true);
        } catch (error) {
          reject(error);
        }
      });
    });

    request.on('error', reject);
  });

const loadFeed = async () => {
  if (!FEED_URL) {
    throw new Error(
      [
        'RSS_FEED_URL is required.',
        'Set it to a LinkedIn-compatible RSS feed URL.',
        '',
        ALT_SERVICES_MESSAGE,
      ].join('\n')
    );
  }

  try {
    return await parser.parseURL(FEED_URL);
  } catch (error) {
    const message = [
      'Failed to load RSS feed.',
      `URL: ${FEED_URL}`,
      `Error: ${error.message}`,
      '',
      ALT_SERVICES_MESSAGE,
    ].join('\n');
    throw new Error(message);
  }
};

const main = async () => {
  await ensureNewsDir();
  await ensureImagesDir();
  const existingSourceUrls = await getExistingSourceUrls();
  const feed = await loadFeed();

  if (!feed?.items?.length) {
    throw new Error(
      [
        'RSS feed returned no items.',
        `URL: ${FEED_URL}`,
        '',
        ALT_SERVICES_MESSAGE,
      ].join('\n')
    );
  }

  const items = feed.items.slice(0, MAX_ITEMS);
  let importedCount = 0;
  let skippedCount = 0;

  for (const item of items) {
    const sourceUrl = item.link || item.guid || '';
    if (sourceUrl && existingSourceUrls.has(sourceUrl) && !REFRESH_IMAGES) {
      skippedCount += 1;
      continue;
    }

    const rawTitle = item.title || 'LinkedIn Update';
    const rawHtml =
      item['content:encoded'] ||
      item.content ||
      item.description ||
      item.contentSnippet ||
      '';
    const cleanContent = cleanHtml(rawHtml);
    const description = truncate(cleanContent || rawTitle, 160);
    const publishDateValue = item.isoDate || item.pubDate || new Date().toISOString();
    const publishDate = new Date(publishDateValue);
    const formattedDate = formatDate(publishDate);
    const slug = slugify(rawTitle || cleanContent || 'linkedin-update');
    const filename = `${formattedDate}-${slug || 'linkedin-update'}.md`;
    const filePath = path.join(newsDir, filename);
    const imageUrl = extractImageUrl(item, rawHtml);
    let imagePath = '';

    try {
      await fs.access(filePath);
      if (!REFRESH_IMAGES) {
        skippedCount += 1;
        continue;
      }
    } catch {
      // File does not exist, continue.
    }

    const body = cleanContent || description;
    if (imageUrl) {
      const ext = resolveImageExtension(imageUrl);
      const imageFilename = `${formattedDate}-${slug || 'linkedin-update'}${ext}`;
      const imageDestination = path.join(newsImagesDir, imageFilename);
      const publicPath = `/images/news/${imageFilename}`;
      try {
        await fs.access(imageDestination);
        imagePath = publicPath;
      } catch {
        try {
          await downloadImage(imageUrl, imageDestination);
          imagePath = publicPath;
        } catch (error) {
          console.warn(`Image download failed for ${imageUrl}: ${error.message}`);
        }
      }
    }

    const imageAlt = normalizeWhitespace(rawTitle);

    try {
      await fs.access(filePath);
      const existingContent = await fs.readFile(filePath, 'utf8');
      const updates = {};
      if (imagePath) {
        updates.image = `"${escapeYaml(imagePath)}"`;
        updates.imageAlt = `"${escapeYaml(imageAlt)}"`;
      }
      if (Object.keys(updates).length > 0) {
        const updated = updateFrontmatter(existingContent, updates);
        await fs.writeFile(filePath, updated, 'utf8');
      }
      skippedCount += 1;
      continue;
    } catch {
      // File does not exist, continue with write.
    }

    const markdown = buildMarkdown({
      title: normalizeWhitespace(rawTitle),
      description,
      publishDate: formattedDate,
      sourceUrl: sourceUrl || FEED_URL,
      body,
      image: imagePath,
      imageAlt,
    });

    await fs.writeFile(filePath, markdown, 'utf8');
    if (sourceUrl) {
      existingSourceUrls.add(sourceUrl);
    }
    importedCount += 1;
  }

  console.log(
    `LinkedIn import complete. Imported: ${importedCount}, Skipped: ${skippedCount}.` +
      (REFRESH_IMAGES ? ' Images refreshed where available.' : '')
  );
};

main().catch((error) => {
  console.error('\nLinkedIn import failed.');
  console.error(error.message);
  process.exitCode = 1;
});
