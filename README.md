# BCEM Website - Burj Clean Energy Modaraba

A modern, static corporate website built with Astro for Pakistan's first Shariah-compliant green energy investment fund.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
bcem-starter/
├── public/
│   ├── images/           # Static images
│   └── favicon.svg       # Site favicon
├── src/
│   ├── components/       # Reusable UI components
│   ├── content/          # CMS content collections
│   │   ├── config.ts     # Collection schemas
│   │   ├── news/         # News articles
│   │   ├── projects/     # Energy projects
│   │   └── documents/    # Investor documents
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/            # Route pages
│   │   └── index.astro   # Home page
│   └── styles/
│       ├── tokens.css    # Design tokens
│       ├── reset.css     # CSS reset
│       └── global.css    # Global styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Design System

### Colors
- **Primary (Green):** `--color-primary-600` (#28a745) - Clean energy
- **Secondary (Gold):** `--color-secondary-500` (#d4a012) - Islamic finance trust
- **Neutral:** Gray scale for text and backgrounds

### Typography
- Font: Inter (Google Fonts)
- Scale: 12 sizes from 12px to 60px

### Spacing
- Based on 8px grid
- Use `--space-*` tokens (4px to 128px)

## Content Collections

### News (`src/content/news/`)
```yaml
title: "Article Title"
description: "Brief description"
pubDate: 2024-12-15
category: "corporate" | "projects" | "financial" | "media"
featured: true
image: "/images/news/article.jpg"
```

### Projects (`src/content/projects/`)
```yaml
title: "Project Name"
location: "City, Province"
type: "wind" | "solar" | "hydro"
capacity: "50 MW"
status: "operational" | "construction" | "planning"
stats:
  annualGeneration: "150 GWh"
  co2Avoided: "100,000 tons"
  homesEquivalent: "25,000"
```

### Documents (`src/content/documents/`)
```json
{
  "title": "Annual Report 2024",
  "type": "annual-report",
  "year": 2024,
  "fileUrl": "/documents/annual-report-2024.pdf"
}
```

## Pages to Build

- [x] Home (`/`)
- [ ] About (`/about`)
- [ ] Governance (`/governance`)
- [ ] Projects (`/projects`)
- [ ] Products (`/products`)
- [ ] Investor Relations (`/investors`)
- [ ] News (`/news`)
- [ ] Contact (`/contact`)

## Development Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build before deploy |
| `npm run astro` | Run Astro CLI commands |

## Deployment

Built for static hosting:
- **Netlify:** Push to GitHub, auto-deploys
- **Cloudflare Pages:** Connect repo, build command: `npm run build`
- **Vercel:** Import project, zero config needed

## License

© 2024 Burj Clean Energy Modaraba. All rights reserved.
