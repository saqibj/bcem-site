# LinkedIn RSS Import (Astro News Collection)

This guide explains how to import LinkedIn posts into the BCEM Astro news collection using a Node.js script. The importer converts RSS feed items into markdown files stored in `src/content/news/`.

## Overview
- Script location: `scripts/import-linkedin.js`
- Output: `src/content/news/YYYY-MM-DD-slug.md`
- Max items per run: 20 (override with `--max <number>`)
- Frontmatter fields:
  - `title`
  - `description` (SEO-friendly 160 chars)
  - `excerpt` (same as description for site UI)
  - `publishDate`
- `pubDate` (duplicate for compatibility)
- `category` (`News`)
  - `featured` (`false`)
- `draft` (`false`) - set to `true` in a markdown file to hide it from the News page
  - `source` (`linkedin`)
  - `sourceUrl`

## Installation
```bash
cd scripts
npm install
```

## Configuration
Set the RSS feed URL via environment variable (defaults to the BCEM RSS.app feed if not provided):
```bash
set RSS_FEED_URL=https://your-rss-feed-url
```
On macOS/Linux:
```bash
export RSS_FEED_URL="https://your-rss-feed-url"
```

## Manual Execution
```bash
cd scripts
npm run import
cd ..
npm run build
```
To import more posts (including older items), pass `--max`:
```bash
npm run import -- --max 60
```

## Duplicate Detection
The script avoids re-importing content by:
- Skipping files whose `sourceUrl` already exists.
- Skipping files that already exist by filename (`YYYY-MM-DD-slug.md`).

## HTML Cleaning Rules
- Converts `<br>`, `</p>`, `</div>`, `</li>` to line breaks.
- Strips remaining HTML tags.
- Preserves line breaks and normalizes whitespace.

## SEO Slugs
Slugs are:
- Lowercase
- Hyphenated
- Max 50 characters

## Troubleshooting
### RSS feed returns no items
LinkedIn’s native RSS feeds are deprecated and often return empty results.

Recommended alternatives:
- RSS.app: https://rss.app/
- FetchRSS: https://fetchrss.com/

### Error: Failed to load RSS feed
If the feed endpoint is blocked or deprecated, use a third-party RSS provider or the LinkedIn Marketing API.

## LinkedIn API (Alternative)
If you have LinkedIn Marketing API access, you can build a server-side fetcher using OAuth. High-level steps:
1. Create a LinkedIn Developer App.
2. Request Marketing API access.
3. Authorize the app as a company page admin.
4. Use OAuth tokens to fetch organization posts.
5. Cache results and write Astro markdown files.

This requires a backend service and cannot run from the browser.

## Notes
- Prefer manual execution for review and content QA.
- Store any API keys or tokens in environment variables, not in committed code.
