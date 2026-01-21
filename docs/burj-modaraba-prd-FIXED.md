# Product Requirements Document (PRD)
# Burj Clean Energy Modaraba Website Rebuild

**Project:** BCEM Corporate Website Modernization  
**Version:** 2.0 (Updated Jan 2025)  
**Status:** Ready for Development  
**Target:** Cursor IDE / AI-Assisted Development

---

## EXECUTIVE SUMMARY

**What:** Rebuild burjmodaraba.com from WordPress → modern Astro static site + Decap CMS  
**Why:** Better performance, security, maintainability for investor/stakeholder communications  
**Who:** Saqib (PM/Dev), Design, QA, Content Editor  
**When:** 5 weeks (Jan 20 – Feb 24, 2025)  
**Key Win:** 90+ Lighthouse score, mobile-first responsive, non-technical content editing

### Success Metrics
- Page load time < 2 seconds (90+ Lighthouse Performance)
- Mobile usability score > 95 (95+ Lighthouse Accessibility)
- WCAG 2.1 AA compliant (zero critical issues)
- CMS content updates within 5 minutes
- **100% of legacy content migrated** (pages, news, projects, team, investor docs)

### Scope: IN
- All 8 main pages (Home, About, Governance, Products, Projects, Investor Relations, News, Contact)
- Complete content migration from WordPress
- CMS setup for ongoing editorial workflow
- Performance & accessibility optimization
- 301 redirects from old URLs

### Scope: OUT
- Brand redesign (match existing burjmodaraba.com style)
- E-commerce or transaction features
- Mobile app or native integrations
- Third-party integrations (HubSpot, Salesforce, etc.) — can add post-launch

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Stakeholders & Roles](#2-stakeholders--roles)
3. [Technical Stack](#3-technical-stack)
4. [Project Structure](#4-project-structure)
5. [Design System](#5-design-system)
6. [Components Specification](#6-components-specification)
7. [Page Templates](#7-page-templates)
8. [Content Schema](#8-content-schema)
9. [Content Migration Plan](#9-content-migration-plan)
10. [Implementation Phases](#10-implementation-phases)
11. [Risk Register](#11-risk-register)
12. [Acceptance Criteria](#12-acceptance-criteria)

---

## 1. Project Overview

### 1.1 Business Context

**Burj Clean Energy Modaraba (BCEM)** is Pakistan's first Shariah-compliant green energy fund. The website is critical for:
- Investor confidence and communication
- Regulatory/governance transparency
- Stakeholder engagement (partners, media, job seekers)
- Lead generation and brand authority

**Current State:** WordPress-based site, aging performance, hard to maintain for non-technical staff  
**Target State:** Lightweight static site with Git-based CMS, 90+ Lighthouse scores, frictionless content edits

### 1.2 Project Goals

1. ✅ **Rebuild WordPress → modern static site** (Astro 5 + Decap CMS)
2. ✅ **Improve performance** (target: 90+ Lighthouse, <2s load)
3. ✅ **Maintain brand identity** (green/gold, professional tone)
4. ✅ **Enable easy content updates** (non-technical staff, <5 min edits)
5. ✅ **Responsive & accessible** (mobile-first, WCAG 2.1 AA)
6. ✅ **Preserve all legacy content** (zero content loss, proper redirects)
7. ✅ **Establish repeatable CMS workflow** (news, projects, investor docs)

### 1.3 Target Audiences

| Audience | Primary Needs | Key Pages |
|----------|---------------|-----------|
| **Investors** | Financial reports, shareholder info, governance, trust signals | Investor Relations, Governance, About |
| **Corporate Clients** | Products/services, project portfolio, technical specs | Products, Projects, About |
| **Media** | Press releases, company news, contact info | News, Contact, About |
| **Job Seekers** | Company info, team, values, career opportunities | About, Governance, Contact |
| **General Public** | Mission, vision, what BCEM does, clean energy info | Home, About, Products |

### 1.4 Content Inventory (Pre-Migration)

| Content Type | Current Count | Target |
|--------------|---------------|--------|
| News/Press Releases | ~50 posts | Migrate all, organize by year |
| Projects | ~15 active | Migrate all with media |
| Team Members | ~20 staff | Migrate all with photos/bios |
| Investor Documents | ~30 PDFs | Organize by type & year, link from IR page |
| Pages | 8 core pages | Migrate + reorganize for clarity |
| Images | ~200+ assets | Optimize, convert to WebP/AVIF |

---

## 2. Stakeholders & Roles

| Role | Name | Responsibilities | Sign-Off Gates |
|------|------|------------------|-----------------|
| **Project Lead** | Saqib | Overall delivery, Astro/CMS setup, code quality | Phase 1, 3, 5, 8 |
| **Content Manager** | [TBD] | Content migration, editorial workflow, CMS training | Phase 4, 7, 8 |
| **Designer** | [TBD] | Design system refinement, Figma tokens, component review | Phase 2, 3 |
| **QA Lead** | [TBD] | Test plans, accessibility audit, launch checklist | Phase 6, 8 |
| **Executive Sponsor** | [BCEM Board] | Budget, timeline, strategic alignment | Phase 1, 8 |

### Gate Approvals Required

- **Phase 1 (Design):** Design system + sitemap approved by team
- **Phase 3 (Components):** UI components verified in Figma
- **Phase 5 (Content):** All migrated content proofread
- **Phase 7 (CMS):** Editorial workflow tested by non-technical staff
- **Phase 8 (Launch):** QA checklist 100% complete, board sign-off

---

## 3. Technical Stack

### 3.1 Core Stack

```yaml
Framework: Astro 5.x (SSG)
Styling: CSS custom properties (no Tailwind)
CMS: Decap CMS (Git-based, editable at /admin)
Hosting: Netlify or Vercel
Content: Markdown + YAML frontmatter
Build Time: ~30s
Performance Target: 90+ Lighthouse
```

### 3.2 Dependencies

```json
{
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/mdx": "^4.0.0",
    "@astrojs/sitemap": "^3.2.0",
    "sharp": "^0.33.0"
  },
  "devDependencies": {
    "decap-cms-app": "^3.3.0",
    "prettier": "^3.0.0",
    "prettier-plugin-astro": "^0.14.0"
  }
}
```

### 3.3 Browser Support

- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Mobile Safari iOS 15+
- ✅ Chrome Android 100+

### 3.4 Why This Stack?

| Choice | Rationale |
|--------|-----------|
| **Astro** | Static generation = fast, secure, ideal for corporate sites; minimal JS |
| **CSS tokens** | Full control, no framework lock-in, better for design system |
| **Decap CMS** | Git-based (no separate DB), works with Netlify, editors don't need GitHub skills |
| **Markdown** | Version-controllable, lightweight, future-proof content storage |
| **Netlify** | Built-in Git Gateway for CMS, 1-click deploys, edge caching |

---

## 4. Project Structure

```
burj-modaraba/
├── public/
│   ├── admin/
│   │   ├── config.yml          # Decap CMS config (CRITICAL)
│   │   └── index.html          # CMS entry point
│   ├── images/
│   │   ├── logo/
│   │   ├── projects/           # Project images
│   │   ├── team/               # Team photos
│   │   └── news/               # Article featured images
│   ├── documents/              # Investor PDFs (organized by year)
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── global/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navigation.astro
│   │   │   └── MobileMenu.astro
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── SectionHeading.astro
│   │   │   ├── StatCard.astro
│   │   │   └── DocumentCard.astro
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── ServicesGrid.astro
│   │   │   ├── ProjectsShowcase.astro
│   │   │   ├── StatsSection.astro
│   │   │   ├── TeamPreview.astro
│   │   │   ├── NewsPreview.astro
│   │   │   └── CTASection.astro
│   │   │
│   │   └── blocks/
│   │       ├── TeamMemberCard.astro
│   │       ├── ProjectCard.astro
│   │       ├── NewsCard.astro
│   │       └── ServiceCard.astro
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   └── ArticleLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── governance.astro
│   │   ├── products.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── investor-relations.astro
│   │   ├── news/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── contact.astro
│   │
│   ├── content/
│   │   ├── config.ts           # Content collection schemas
│   │   ├── projects/           # Project posts (.md files)
│   │   ├── news/               # News posts (.md files)
│   │   ├── team/               # Team member entries (.md files)
│   │   └── documents/          # Investor docs metadata (.md files)
│   │
│   ├── styles/
│   │   ├── tokens.css          # Design tokens (colors, spacing, typography)
│   │   ├── reset.css           # CSS reset
│   │   ├── global.css          # Global styles
│   │   ├── typography.css      # Type hierarchy
│   │   └── utilities.css       # Utility classes
│   │
│   ├── utils/
│   │   ├── formatDate.ts
│   │   ├── slugify.ts
│   │   └── seo.ts
│   │
│   └── data/
│       └── navigation.json
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── netlify.toml                # Deployment config
└── README.md
```

---

## 5. Design System

### 5.1 Color Tokens

```css
/* src/styles/tokens.css */

:root {
  /* BRAND COLORS */
  
  /* Primary Green - Clean Energy Signal */
  --color-primary-50: #e8f5e9;
  --color-primary-100: #c8e6c9;
  --color-primary-200: #a5d6a7;
  --color-primary-300: #81c784;
  --color-primary-400: #66bb6a;
  --color-primary-500: #2e7d32;      /* Main brand green */
  --color-primary-600: #2e7d32;
  --color-primary-700: #1b5e20;
  --color-primary-800: #1b5e20;
  --color-primary-900: #0d3d12;
  
  /* Secondary Gold - Trust/Finance */
  --color-secondary-50: #fff8e1;
  --color-secondary-100: #ffecb3;
  --color-secondary-200: #ffe082;
  --color-secondary-300: #ffd54f;
  --color-secondary-400: #ffca28;
  --color-secondary-500: #c9a227;     /* Main gold accent */
  --color-secondary-600: #b8860b;
  --color-secondary-700: #a67c00;
  --color-secondary-800: #8b6914;
  --color-secondary-900: #5d4e37;
  
  /* Neutral Palette */
  --color-neutral-0: #ffffff;
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f5;
  --color-neutral-200: #eeeeee;
  --color-neutral-300: #e0e0e0;
  --color-neutral-400: #bdbdbd;
  --color-neutral-500: #9e9e9e;
  --color-neutral-600: #757575;
  --color-neutral-700: #616161;
  --color-neutral-800: #424242;
  --color-neutral-900: #212121;
  --color-neutral-1000: #000000;
  
  /* Semantic Colors */
  --color-success: #2e7d32;
  --color-warning: #f9a825;
  --color-error: #c62828;
  --color-info: #1565c0;
  
  /* APPLIED COLORS */
  --color-text-primary: var(--color-neutral-900);
  --color-text-secondary: var(--color-neutral-600);
  --color-text-muted: var(--color-neutral-500);
  --color-text-inverse: var(--color-neutral-0);
  
  --color-bg-primary: var(--color-neutral-0);
  --color-bg-secondary: var(--color-neutral-50);
  --color-bg-tertiary: var(--color-neutral-100);
  --color-bg-dark: var(--color-primary-900);
  
  --color-border-light: var(--color-neutral-200);
  --color-border-medium: var(--color-neutral-300);
  --color-border-dark: var(--color-neutral-400);
}
```

### 5.2 Typography

```css
:root {
  --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-heading: 'Plus Jakarta Sans', var(--font-family-sans);
  
  /* Font Sizes - Mobile First */
  --font-size-xs: 0.75rem;      /* 12px */
  --font-size-sm: 0.875rem;     /* 14px */
  --font-size-base: 1rem;       /* 16px */
  --font-size-lg: 1.125rem;     /* 18px */
  --font-size-xl: 1.25rem;      /* 20px */
  --font-size-2xl: 1.5rem;      /* 24px */
  --font-size-3xl: 1.875rem;    /* 30px */
  --font-size-4xl: 2.25rem;     /* 36px */
  --font-size-5xl: 3rem;        /* 48px */
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Line Height */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

### 5.3 Spacing & Layout

```css
:root {
  /* Spacing Scale */
  --space-xs: 0.5rem;     /* 8px */
  --space-sm: 1rem;       /* 16px */
  --space-md: 1.5rem;     /* 24px */
  --space-lg: 2rem;       /* 32px */
  --space-xl: 3rem;       /* 48px */
  --space-2xl: 4rem;      /* 64px */
  
  /* Container */
  --max-width: 1200px;
  --container-padding: var(--space-md);
  
  /* Grid */
  --grid-columns: 12;
  --grid-gap: var(--space-md);
}

@media (min-width: 768px) {
  :root {
    --container-padding: var(--space-lg);
    --grid-gap: var(--space-lg);
  }
}
```

---

## 6. Components Specification

### Core Components

| Component | Purpose | Variants |
|-----------|---------|----------|
| **Button** | CTAs, form submission | Primary, Secondary, Ghost; sizes: sm/md/lg |
| **Card** | Content container | With image, with icon, flat |
| **SectionHeading** | Page section titles | H1–H3, with accent line |
| **StatCard** | Statistics display | Number + label + context |
| **DocumentCard** | Downloadable PDFs | With size, date, category tag |
| **Hero** | Page header/banner | With background image, overlay, CTA |
| **NewsCard** | Article preview | Title, excerpt, date, featured image |
| **ProjectCard** | Project summary | Title, category, image, description |
| **TeamMemberCard** | Staff profiles | Photo, name, title, LinkedIn link |
| **Navigation** | Main menu | Desktop (hover dropdowns), Mobile (slide menu) |
| **Footer** | Page footer | Logo, quick links, legal, contact |

---

## 7. Page Templates

### 7.1 Home (`/`)

**Blocks:**
1. Hero (tagline, CTA)
2. About teaser (mission, vision)
3. Key stats (AUM, projects, team)
4. Recent projects (3–5 cards)
5. Recent news (3–5 cards)
6. Contact CTA

**CMS Fields:** Hero image, tagline, featured projects (limit 5), featured news (limit 5)

### 7.2 About (`/about`)

**Blocks:**
1. Page hero (title, intro)
2. Company overview (mission, vision, values)
3. History/timeline
4. Associated companies (if applicable)
5. Contact CTA

**CMS Fields:** Long-form text, images, company info JSON

### 7.3 Governance (`/governance`)

**Blocks:**
1. Page hero
2. Board of Directors (team grid)
3. Management Team (team grid)
4. Auditor info
5. Shariah advisor info

**CMS Fields:** Team member collection (pulled from `/team` content)

### 7.4 Products (`/products`)

**Blocks:**
1. Page hero
2. Product category cards (Commercial, Residential)
3. Product specs/details (expandable)
4. Related projects
5. Contact for more info

**CMS Fields:** Product descriptions, specs, related project links

### 7.5 Projects (`/projects`)

**Blocks:**
1. Archive view (all projects, sortable by category/date)
2. Project detail page (`[slug].astro`): title, description, images, stats, status

**CMS Fields:** Project name, description, category, location, capacity, status, images

### 7.6 Investor Relations (`/investor-relations`)

**Blocks:**
1. Page hero
2. Annual reports (organized by year)
3. Quarterly reports (organized by year/Q)
4. Financial highlights (summary cards)
5. Free float info
6. Shareholder pattern (chart or table)
7. All downloadable documents

**CMS Fields:** Document upload, year, document type, file link, excerpt

### 7.7 News (`/news`)

**Blocks:**
1. Archive view (all posts, paginated, sorted by date)
2. News detail page (`[slug].astro`): title, featured image, content, author, date

**CMS Fields:** Title, excerpt, body (MDX), featured image, author, publish date

### 7.8 Contact (`/contact`)

**Blocks:**
1. Contact form (name, email, message, phone)
2. Address & map embed
3. Social media links

**CMS Fields:** Office address, phone, email, office hours

---

## 8. Content Schema

### 8.1 Content Collections (TypeScript)

```typescript
// src/content/config.ts

import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Solar', 'Wind', 'Hydro', 'Other']),
    location: z.string(),
    capacity: z.string(), // e.g., "5 MW"
    status: z.enum(['Active', 'In Progress', 'Planned']),
    startDate: z.date(),
    images: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    content: z.string(), // MDX body
    author: z.string(),
    publishedDate: z.date(),
    featuredImage: z.string(),
    category: z.enum(['Press Release', 'News', 'Blog', 'Update']),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    title: z.string(),
    department: z.enum(['Board', 'Management', 'Operations', 'Finance']),
    photo: z.string(),
    bio: z.string().optional(),
    linkedinUrl: z.string().optional(),
  }),
});

const documentCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    documentType: z.enum(['Annual Report', 'Quarterly Report', 'Financial Highlights', 'Prospectus']),
    year: z.number(),
    fileUrl: z.string(),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
  news: newsCollection,
  team: teamCollection,
  documents: documentCollection,
};
```

### 8.2 Example Content Files

**Project Example:** `src/content/projects/solar-farm-punjab.md`

```markdown
---
title: "Punjab Solar Farm"
description: "100 MW solar installation in Punjab, operational since 2023"
category: "Solar"
location: "Punjab, Pakistan"
capacity: "100 MW"
status: "Active"
startDate: 2022-01-15
images:
  - /images/projects/solar-farm-1.jpg
  - /images/projects/solar-farm-2.jpg
featured: true
---

## Project Overview

This 100 MW solar farm...

## Technical Specs

- **Capacity:** 100 MW
- **Location:** Punjab
- **Annual Generation:** 200+ GWh
```

**News Example:** `src/content/news/bcem-achieves-record.md`

```markdown
---
title: "BCEM Achieves Record Energy Generation"
excerpt: "Portfolio crosses 500 MW capacity milestone"
author: "Media Team"
publishedDate: 2025-01-20
featuredImage: /images/news/record-generation.jpg
category: "Press Release"
---

## Headline

BCEM's renewable energy portfolio...
```

---

## 9. Content Migration Plan

### 9.1 Pre-Migration Checklist

- [ ] **Audit WordPress site** — catalog all pages, posts, images, documents
- [ ] **Backup WordPress DB** — in case rollback needed
- [ ] **Identify old URLs** — map to new URL structure (for 301 redirects)
- [ ] **Organize PDFs** — sort investor documents by year/type in `/public/documents`
- [ ] **Resize/optimize images** — convert to WebP/AVIF, add alt text to all

### 9.2 Migration Tasks

| Content Type | Source | Destination | Effort | Owner |
|--------------|--------|-------------|--------|-------|
| **Pages** (8) | WP pages | `.astro` files | 4 hrs | Dev |
| **News posts** (~50) | WP posts | `/content/news/` `.md` files | 8 hrs | Content Manager |
| **Projects** (~15) | WP custom posts | `/content/projects/` `.md` files | 4 hrs | Content Manager |
| **Team members** (~20) | WP pages | `/content/team/` `.md` files | 3 hrs | Content Manager |
| **Images** (~200+) | WP uploads | `/public/images/` organized | 4 hrs | Dev |
| **PDFs** (~30) | WP uploads | `/public/documents/` organized | 1 hr | Content Manager |
| **Proofread & QA** | All migrated content | Review & validate | 3 hrs | QA Lead |

**Total Migration Effort:** ~27 hours

### 9.3 URL Redirect Strategy

**Old WordPress URLs → New Astro URLs**

```
/news/old-article-slug     → /news/old-article-slug
/project/old-project-slug  → /projects/old-project-slug
/team/old-member-slug      → /governance (no individual team pages)
/about-us                  → /about
/investor                  → /investor-relations
```

**Implementation:** Netlify `_redirects` file (handled by hosting provider)

```
/news/*                    /news/:splat              200
/project/:slug             /projects/:slug          301
/about-us                  /about                   301
/investor                  /investor-relations      301
```

---

## 10. Implementation Phases

### Phase 1: Planning & Design (Week 1 — 12 hrs)

**Objective:** Lock design system, finalize sitemap, get approvals

| Task | Priority | Time | Owner |
|------|----------|------|-------|
| Validate design tokens in Figma | High | 2 hrs | Designer |
| Create page wireframes | High | 3 hrs | Designer |
| Finalize component specs | High | 2 hrs | Designer |
| Set up dev environment (Astro, local CMS) | High | 2 hrs | Dev |
| Create content migration checklist | Medium | 1 hr | Content Manager |
| Get team/board approvals | High | 2 hrs | PM |

**Deliverables:**
- [ ] Figma file with design system + page wireframes
- [ ] Dev environment running locally
- [ ] Content migration plan finalized
- [ ] Team sign-off on scope & timeline

---

### Phase 2: Astro Setup & Base Layouts (Week 1–2 — 16 hrs)

**Objective:** Core site structure + layouts ready for components

| Task | Priority | Time |
|------|----------|------|
| Configure Astro 5 project | High | 2 hrs |
| Set up content collections (TypeScript schemas) | High | 3 hrs |
| Create base layouts (BaseLayout, PageLayout, ArticleLayout) | High | 4 hrs |
| Set up CSS token system | High | 3 hrs |
| Configure TypeScript paths & build | Medium | 2 hrs |
| Set up deployment (Netlify config) | Medium | 2 hrs |

**Deliverables:**
- [ ] `astro.config.mjs` configured
- [ ] `/src/content/config.ts` with all schemas
- [ ] `/src/layouts/` with 3 base layouts
- [ ] `/src/styles/tokens.css` complete
- [ ] Local dev server running at localhost:4321

---

### Phase 3: UI Components (Week 2 — 20 hrs)

**Objective:** Reusable component library ready for page building

| Task | Priority | Time |
|------|----------|------|
| Build Button, Card, SectionHeading | High | 4 hrs |
| Build StatCard, DocumentCard | High | 3 hrs |
| Build Hero, ServicesGrid sections | High | 4 hrs |
| Build Navigation (desktop + mobile menu) | High | 5 hrs |
| Build Footer with links + legal | Medium | 2 hrs |
| QA: Responsive, accessibility, cross-browser | High | 2 hrs |

**Deliverables:**
- [ ] `/src/components/ui/` complete
- [ ] `/src/components/sections/` complete
- [ ] Navigation works mobile/desktop
- [ ] All components tested at breakpoints (320px, 768px, 1280px)
- [ ] Accessibility: focus states, keyboard nav, color contrast ✓

---

### Phase 4: Page Templates (Week 2–3 — 24 hrs)

**Objective:** 8 main pages built, CMS fields ready

| Task | Priority | Time |
|------|----------|------|
| Home page template | High | 3 hrs |
| About page | High | 3 hrs |
| Governance page (team grid) | High | 2 hrs |
| Products page | Medium | 2 hrs |
| Projects page + [slug] detail | High | 4 hrs |
| Investor Relations page | High | 3 hrs |
| News archive + [slug] detail | High | 4 hrs |
| Contact page + form | Medium | 3 hrs |

**Deliverables:**
- [ ] All 8 pages built + linked in navigation
- [ ] Dynamic pages ([slug].astro) working locally
- [ ] Contact form works (static form or Formspree)
- [ ] All pages tested at mobile/tablet/desktop

---

### Phase 5: Content Migration (Week 3–4 — 27 hrs)

**Objective:** 100% of legacy WordPress content migrated to Astro + Markdown

| Task | Priority | Time | Owner |
|------|----------|------|-------|
| Audit & export WordPress content | High | 2 hrs | Dev |
| Migrate 8 core pages to `.astro` files | High | 4 hrs | Dev + Content Manager |
| Migrate ~50 news posts to `/content/news/` | High | 8 hrs | Content Manager |
| Migrate ~15 projects to `/content/projects/` | High | 4 hrs | Content Manager |
| Migrate ~20 team members to `/content/team/` | High | 3 hrs | Content Manager |
| Migrate ~30 PDFs to `/public/documents/` | High | 1 hr | Content Manager |
| Optimize + convert images (WebP/AVIF) | High | 4 hrs | Dev |
| Proofread all content + fix formatting | High | 3 hrs | QA Lead |

**Deliverables:**
- [ ] `/src/content/news/` populated with 50 posts
- [ ] `/src/content/projects/` populated with 15 projects
- [ ] `/src/content/team/` populated with 20 members
- [ ] `/public/documents/` organized by year/type
- [ ] `/public/images/` optimized & organized
- [ ] All content proofread ✓
- [ ] Images optimized (WebP, lazy loading)

---

### Phase 6: CMS Integration (Week 4 — 10 hrs)

**Objective:** Decap CMS at `/admin` working, editors trained

| Task | Priority | Time |
|------|----------|------|
| Create `/public/admin/config.yml` | High | 3 hrs |
| Configure Git Gateway (Netlify) | High | 2 hrs |
| Set up media folders | High | 1 hr |
| Test content editing workflow | High | 2 hrs |
| Create editor documentation (PDF/guide) | Medium | 2 hrs |

**Deliverables:**
- [ ] CMS accessible at `/admin` (localhost:4321/admin in dev)
- [ ] All collections editable (News, Projects, Team, Documents)
- [ ] Media upload working
- [ ] Preview works
- [ ] Editor documentation created + team trained

---

### Phase 7: Performance & SEO (Week 4–5 — 12 hrs)

**Objective:** 90+ Lighthouse score, SEO ready

| Task | Priority | Time |
|------|----------|------|
| Run Lighthouse audit | High | 1 hr |
| Optimize images (format, size, lazy load) | High | 3 hrs |
| Preload critical fonts | High | 1 hr |
| Minify CSS/JS | High | 1 hr |
| Set up sitemap.xml | High | 1 hr |
| Configure robots.txt | Medium | 0.5 hrs |
| Add meta tags (title, description, OG) | High | 2 hrs |
| Final Lighthouse audit | High | 1 hr |

**Deliverables:**
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse SEO ≥ 90
- [ ] sitemap.xml generated
- [ ] robots.txt configured
- [ ] Meta tags on all pages

---

### Phase 8: QA & Launch (Week 5 — 15 hrs)

**Objective:** Full QA pass, zero critical issues, live deployment

| Task | Priority | Time |
|------|----------|------|
| Cross-browser testing (Chrome, Firefox, Safari, Edge) | High | 2 hrs |
| Mobile device testing (iOS, Android) | High | 2 hrs |
| Accessibility audit (axe, WAVE) | High | 2 hrs |
| All QA checklist items verified | High | 4 hrs |
| Create 301 redirects from old URLs | High | 1 hr |
| Final content review & sign-off | High | 2 hrs |
| Deploy to production (Netlify) | High | 1 hr |
| Smoke test production | High | 1 hr |

**Deliverables:**
- [ ] All QA checklist items ✓
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 90, Best Practices ≥ 90
- [ ] No critical accessibility violations
- [ ] Production site live
- [ ] Old URLs redirect correctly
- [ ] Team trained on CMS

---

## 11. Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| **Decap CMS Git Gateway issues** | Medium | High | Have Netlify CMS v2.10.0 as fallback; test Git Gateway early in Phase 6 |
| **Content migration larger than estimated** | Medium | Medium | Start migration in Phase 4; use content audit to size accurately |
| **Images not optimized, affecting Lighthouse** | Low | Medium | Use Sharp + WebP conversion; automate in build pipeline |
| **Team unfamiliar with CMS workflow** | Medium | Low | Provide clear documentation + in-person training session |
| **Old URL redirects misconfigured** | Low | High | Create comprehensive URL map; test all redirects before launch |
| **Accessibility failures discovered late** | Low | Medium | Run accessibility audit in Phase 3 (components) + Phase 7 (full site) |
| **Hosting/DNS issues at launch** | Low | Medium | Test deployment on Netlify staging before production cutover |
| **Scope creep (requests for new features)** | High | Medium | Lock scope in Phase 1; document post-launch roadmap separately |

---

## 12. Acceptance Criteria

### 12.1 Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| F1 | **Navigation** | All menu items link correctly; dropdowns work on desktop; mobile menu opens/closes; active state shows |
| F2 | **Responsive Design** | All pages render correctly at 320px, 768px, 1024px, 1440px; no horizontal scroll |
| F3 | **Projects Display** | Projects load from content collection; can filter by category; detail pages load |
| F4 | **News Display** | News posts sorted by date (newest first); excerpts on archive; full content on detail |
| F5 | **Team Display** | Team members grouped by department; LinkedIn links work; photos display |
| F6 | **Documents** | All PDFs downloadable; organized by year/type; linked from IR page |
| F7 | **Contact Form** | Form submits successfully; validation works; success message displays; email notification sent |
| F8 | **CMS Content Editing** | All collections editable; changes reflect after rebuild; media upload works |
| F9 | **URL Redirects** | All old WordPress URLs redirect to new Astro URLs (301 redirects) |

### 12.2 Non-Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| NF1 | **Performance** | Lighthouse Performance ≥ 90 on all pages |
| NF2 | **Accessibility** | Lighthouse Accessibility ≥ 95; zero critical WCAG violations; axe audit passed |
| NF3 | **SEO** | Lighthouse SEO ≥ 90; unique titles/descriptions on all pages; sitemap generated |
| NF4 | **Best Practices** | Lighthouse Best Practices ≥ 90; security headers configured |
| NF5 | **Page Load** | First Contentful Paint < 1.5s; Time to Interactive < 3s |
| NF6 | **Image Optimization** | All images in WebP/AVIF format; lazy loading implemented |
| NF7 | **Browser Support** | No visual bugs in Chrome, Firefox, Safari, Edge (last 2 versions) |
| NF8 | **Mobile Usability** | Mobile usability score > 95; 44px minimum tap targets |

### 12.3 QA Checklist (Pre-Launch)

**Navigation:**
- [ ] All menu links work (no 404s)
- [ ] Dropdown menus accessible via keyboard (Tab, Enter)
- [ ] Mobile menu opens/closes correctly
- [ ] Active page state shows in navigation
- [ ] Footer links all work

**Content:**
- [ ] All text proofread and approved
- [ ] All images have alt text (descriptive, not "image.jpg")
- [ ] All PDFs open correctly in new tab
- [ ] Team member photos display correctly
- [ ] News post metadata (author, date) displays

**Forms:**
- [ ] Contact form submits successfully
- [ ] Form validation messages display
- [ ] Required fields enforced
- [ ] Success message displays after submission
- [ ] Form data received (email notification)

**Responsive:**
- [ ] Test at 320px (mobile), 768px (tablet), 1024px (desktop), 1440px (large)
- [ ] No horizontal scroll on any page
- [ ] Text readable without zooming
- [ ] Tap targets at least 44px
- [ ] Images scale properly

**Accessibility:**
- [ ] Run axe DevTools in browser (no critical issues)
- [ ] Keyboard navigation works throughout (Tab, Enter, Escape)
- [ ] Skip link works and reaches main content
- [ ] Color contrast passes WCAG AA (4.5:1 for text)
- [ ] Focus indicators visible on all interactive elements
- [ ] Screen reader testing (VoiceOver on Mac, NVDA on Windows)
- [ ] Headings in logical order (H1 → H2 → H3)

**Performance:**
- [ ] Run Lighthouse audit on all pages
- [ ] Performance score ≥ 90
- [ ] Accessibility score ≥ 95
- [ ] SEO score ≥ 90
- [ ] Best Practices score ≥ 90
- [ ] Images optimized (WebP/AVIF)
- [ ] Fonts preloaded
- [ ] No unused CSS/JS

**SEO:**
- [ ] Unique title tags on all pages (50–60 chars)
- [ ] Meta descriptions on all pages (150–160 chars)
- [ ] sitemap.xml generated and accessible
- [ ] robots.txt configured (allow crawlers, disallow /admin)
- [ ] Canonical URLs set
- [ ] Open Graph meta tags (og:title, og:description, og:image)

**CMS:**
- [ ] Admin login works at `/admin`
- [ ] Can create new news post → appears on site after rebuild
- [ ] Can edit existing content → changes reflect after rebuild
- [ ] Can delete content → removed from site
- [ ] Media upload works (images, PDFs)
- [ ] Preview works before publish

**Production:**
- [ ] Site accessible on production domain
- [ ] All old WordPress URLs redirect correctly (test 5+ URLs)
- [ ] Performance metrics match localhost (within 10%)
- [ ] CMS still works on production
- [ ] SSL certificate valid
- [ ] Analytics tracking (if applicable) working

---

## TIMELINE

```
Week 1:  Phase 1 (Planning) + Phase 2 (Astro Setup)
Week 2:  Phase 2 (continued) + Phase 3 (Components) + Phase 4 (Pages start)
Week 3:  Phase 4 (Pages finish) + Phase 5 (Content Migration start)
Week 4:  Phase 5 (Content Migration finish) + Phase 6 (CMS) + Phase 7 (Performance)
Week 5:  Phase 7 (continued) + Phase 8 (QA & Launch)

LAUNCH: End of Week 5 (Feb 24, 2025)
```

---

## DEFINITIONS

| Term | Meaning |
|------|---------|
| **SSG** | Static Site Generation — HTML pre-built at deploy time, served instantly |
| **CMS** | Content Management System — interface to edit/publish content without code |
| **Decap CMS** | Git-based CMS that stores content as Markdown in your repo |
| **Astro** | JavaScript framework for building fast static sites |
| **Markdown** | Plain-text format for writing content (converted to HTML) |
| **YAML** | Data format used for frontmatter (metadata) at top of Markdown files |
| **Lighthouse** | Google's tool for measuring performance, SEO, accessibility |
| **WCAG** | Web Content Accessibility Guidelines (standard for accessible web design) |
| **WebP/AVIF** | Modern image formats that are smaller than JPEG/PNG |
| **301 Redirect** | Permanent URL redirect (tells search engines to update their index) |
| **Lazy Loading** | Technique to load images only when they enter the viewport |
| **Meta Tags** | HTML tags that describe page content (title, description, og:image) |

---

## NEXT STEPS

**Immediate Actions (This Week):**

1. ✅ **Team sign-off** on scope, timeline, roles (get approvals from board/stakeholders)
2. ✅ **Content audit** — finalize count of posts/projects/documents to migrate
3. ✅ **Dev environment** — set up Astro locally, confirm dependencies work
4. ✅ **Design review** — finalize design tokens in Figma
5. ✅ **Content manager assignment** — confirm who owns editorial workflow

**Then Proceed:**

- Phase 1 (planning): Finalize design + wireframes (by Jan 27)
- Phase 2 (Astro setup): Core structure ready (by Feb 3)
- Phase 3 (components): UI library complete (by Feb 10)
- Phase 4+ (pages/content/launch): See timeline above

---

**Document Status:** ✅ APPROVED FOR DEVELOPMENT  
**Last Updated:** Jan 20, 2025  
**Owner:** Saqib (Project Lead)  
**Questions?** Contact Saqib or review Appendix C (Resources)
