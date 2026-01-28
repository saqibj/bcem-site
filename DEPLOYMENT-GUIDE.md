# LinkedIn Import Deployment Guide (VPS)

This guide describes a safe workflow for running the LinkedIn RSS import script and deploying updates to the BCEM Astro site on a VPS.

Target VPS: `77.42.46.7`

## GitHub Commit Workflow
1. Run the importer locally.
2. Review newly generated markdown files in `src/content/news/`.
3. Commit changes.
4. Push to `main`.

Example:
```bash
git status
git add src/content/news
git commit -m "chore(news): import LinkedIn posts"
git push origin main
```

## VPS Deployment Steps
```bash
ssh root@77.42.46.7
cd /path/to/bcem-site
git pull origin main
cd scripts
npm install
export RSS_FEED_URL="https://your-rss-feed-url"
npm run import
cd ..
npm install
npm run build
# restart your process manager or web server
```

## Automation Options
### Manual Schedule (Recommended)
Run the import manually (daily or weekly) to review content before publishing.

### Bash Wrapper
Create a simple script on the VPS:
```bash
#!/usr/bin/env bash
set -euo pipefail

cd /path/to/bcem-site
git pull origin main
cd scripts
export RSS_FEED_URL="https://your-rss-feed-url"
npm run import
cd ..
npm run build
```

### Cron Example
```bash
0 2 * * * /path/to/bcem-site/scripts/run-linkedin-import.sh >> /var/log/bcem-linkedin.log 2>&1
```

## Security Best Practices
- Store `RSS_FEED_URL` in environment variables.
- Never commit API keys, tokens, or RSS credentials.
- Limit server permissions for any scheduled job.
- Use read-only RSS URLs when possible.

## LinkedIn Marketing API Notes
If you obtain Marketing API access, use a backend service to fetch posts and cache results.
Do not store access tokens in the repository.
