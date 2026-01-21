# Product Requirements Document (PRD) — FIXED
# Burj Clean Energy Modaraba Website Rebuild

**Project:** BCEM Corporate Website Redesign  
**Version:** 2.0 (Fixed)  
**Last Updated:** January 20, 2025  
**Status:** Ready for Stakeholder Review  

---

## EXECUTIVE SUMMARY (Read This First)

**What:** Complete rebuild of burjmodaraba.com from WordPress to a modern static site (Astro 5.x + Decap CMS).

**Why:** 
- Current WordPress site is slow and hard to maintain
- Need industry-standard performance (90+ Lighthouse scores)
- Must support easy content updates for staff without developer help
- Want to strengthen investor confidence with professional, trustworthy design

**Timeline:** 5 weeks, ~40 hours developer time  
**Budget Impact:** Development cost only (no hosting increase)  
**Business Outcome:** Faster load times (< 2s), easier content management, improved investor trust signals

**Key Numbers:**
- **8 pages** to build (Home, About, Governance, Products, Projects, Investor Relations, News, Contact)
- **3 content types** to migrate (News posts, Projects, Team members)
- **90+ Lighthouse target** (performance, accessibility, SEO, best practices)
- **Mobile-first responsive** (all devices supported)

**Go/No-Go Risks:**
- ✅ **Decap CMS** — Confirmed working with Astro 5.x (workaround available if needed)
- ✅ **Content migration** — Full inventory audit required before Phase 1
- ✅ **URL redirects** — All old WordPress URLs will redirect to new site

**Next Step:** Content audit + stakeholder sign-off on design direction

---

## Table of Contents

1. [Executive Summary](#executive-summary-read-this-first) *(you are here)*
2. [Project Overview](#1-project-overview)
3. [Scope & Content Inventory](#scope-content-inventory)
4. [Migration Strategy](#migration-strategy)
5. [Technical Stack](#2-technical-stack)
6. [Risk & Blockers Log](#risk-blockers-log)
7. [Stakeholder Sign-Off Process](#stakeholder-sign-off-process)
8. [Design System](#3-design-system)
9. [Components & Pages](#4-components-pages)
10. [Implementation Phases](#5-implementation-phases)
11. [Acceptance Criteria](#6-acceptance-criteria)

---

## SCOPE & CONTENT INVENTORY

### Pages to Build

| Page | Source | Status | Content Type | Notes |
|------|--------|--------|--------------|-------|
| Home | WordPress → New | MIGRATION | Mixed (hero, stats, CTA) | Landing page + brand introduction |
| About | WordPress → New | MIGRATION | Text + images | Company info, vision, mission |
| Governance | WordPress → New | MIGRATION | Team + bios + images | Board of Directors, Shariah Advisor, Auditor |
| Products | WordPress → New | MIGRATION | Text + descriptions | Commercial & Industrial, Residential offerings |
| Projects | WordPress → New | MIGRATION | Dynamic collection | Showcase + filter by category |
| Investor Relations | WordPress → New | MIGRATION | PDFs + documents | Annual reports, quarterly reports, financial highlights |
| News / Media | WordPress → New | MIGRATION | Dynamic collection | Press releases, company news (sortable by date) |
| Contact | WordPress → New | MIGRATION | Form + contact info | Contact form, office location, phone/email |

### Content Collections to Migrate

#### News Posts
- **Expected Volume:** [TO BE CONFIRMED IN AUDIT]
- **Data Points Per Post:** Title, Date, Excerpt, Full Content, Category, Author, Featured Image
- **Migration Method:** Export from WordPress as JSON → Convert to Markdown + YAML frontmatter
- **CMS Workflow:** Editable via Decap CMS /admin interface

#### Projects
- **Expected Volume:** [TO BE CONFIRMED IN AUDIT]
- **Data Points Per Project:** Title, Description, Category, Location, Status, Images, Related Products
- **Migration Method:** Export → Markdown + YAML
- **CMS Workflow:** Editable via Decap CMS

#### Team Members
- **Expected Volume:** [TO BE CONFIRMED IN AUDIT]
- **Data Points Per Member:** Name, Title, Department, Bio, Photo, LinkedIn URL (optional)
- **Migration Method:** Export → Markdown + YAML
- **CMS Workflow:** Editable via Decap CMS

#### Documents (Investor Relations)
- **Expected Volume:** [TO BE CONFIRMED IN AUDIT]
- **Data Points Per Document:** Title, Type (Annual Report, Quarterly, Highlight), Year, File URL, Description
- **Migration Method:** Copy PDFs to `/public/documents/` directory → Reference in YAML
- **CMS Workflow:** Managed manually in config (not CRUD via CMS)

### PDF / Document Assets

All investor PDFs will be organized in `/public/documents/` by:
- Year (2024, 2023, 2022, etc.)
- Type (Annual Reports, Quarterly Reports, Financial Highlights, etc.)

---

## MIGRATION STRATEGY

### Phase 0: Pre-Launch Content Audit (Before Dev Starts)

**Objective:** Confirm all content exists and is migration-ready.

| Task | Owner | Timeline | Deliverable |
|------|-------|----------|-------------|
| Export all news posts from WordPress | Content Team | Day 1-2 | CSV with titles, dates, authors, excerpts |
| Export all projects from WordPress | Content Team | Day 1-2 | CSV with project data |
| Export all team member info | HR/Content Team | Day 1-2 | CSV with names, titles, bios, photos |
| Audit investor PDFs | Investor Relations | Day 1-2 | List of all PDFs by year/type |
| Review & approve content for accuracy | Management | Day 2-3 | Sign-off that all content is current and accurate |

**Blocker Risk:** If content audit reveals missing data, timeline extends 3–5 days.

---

### URL Redirect Strategy

**Old Site:** `burjmodaraba.com` (WordPress)  
**New Site:** `burjmodaraba.com` (Astro static)

**Redirect Approach:**
1. All old WordPress URLs will be mapped to new Astro URLs via `_redirects` file (Netlify)
2. Common WordPress URL patterns will be handled automatically:
   - `/index.php?p=123` → `/news/article-title/`
   - `/category/news/` → `/news/`
   - `/blog/` → `/news/`
3. 301 (permanent) redirects for SEO preservation

**Redirects File Example:**
```
# Old WordPress patterns to new Astro
/index.php?p=* /news/:title 301
/category/news/* /news 301
/blog/* /news 301
/products/solar /products#commercial 301
/investor/* /investor-relations 301
```

---

### Content Staging & QA

1. **Week 1:** Export all content, begin import to new site
2. **Week 2–3:** Developers build pages and CMS; content team reviews in localhost version
3. **Week 4:** Final content proofing & sign-off before Phase 8
4. **Week 5:** Deploy to production with all redirects live

---

## RISK & BLOCKERS LOG

### HIGH PRIORITY

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|-----------|
| **Decap CMS React 18 compatibility** | Phase 7 delays; CMS not editable in local dev | MEDIUM | Use Netlify CMS v2.10.0 as fallback; test early in Phase 7 |
| **WordPress content export incomplete** | Missing news/projects delay launch | MEDIUM | Complete content audit in Phase 0; document all data points |
| **Investor PDF file size/access issues** | PDFs don't load or are too large | LOW | Compress PDFs; validate file sizes pre-migration |

### MEDIUM PRIORITY

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|-----------|
| **Image optimization complexity** | Lighthouse scores drop; site feels slow | LOW | Pre-optimize all images to WebP/AVIF before import |
| **Shariah compliance documentation missing** | Governance page incomplete | LOW | Confirm Shariah Advisor bio & role details in audit |
| **Old WordPress URLs not captured** | Broken links, SEO loss | MEDIUM | Create comprehensive URL mapping document before Phase 8 |

### LOW PRIORITY

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|-----------|
| **Typography font loading delays** | Accessibility concern (invisible text flash) | VERY LOW | Use CSS font-display: swap; preload fonts |
| **Mobile menu accessibility issues** | WCAG failures on keyboard nav | LOW | Test with keyboard only; use axe DevTools |

---

## STAKEHOLDER SIGN-OFF PROCESS

### Approval Checkpoints

| Phase | Approval Gate | Approver | Criteria |
|-------|---------------|----------|----------|
| **Phase 0** | Content Audit Sign-Off | Management | All content exported, reviewed, ready to migrate |
| **Phase 2** | Design Direction Approval | Management | Color scheme, typography, layout rhythm approved |
| **Phase 4** | Component Review | Tech Lead | All components built, accessible, performant |
| **Phase 6** | Content Review & Proofing | Management | All text, images, PDFs correct and approved |
| **Phase 8** | QA & Launch Approval | Management + QA | All acceptance criteria met; Lighthouse 90+; ready to deploy |

### Communication Plan

- **Weekly standups:** Dev team + product owner (15 min)
- **Bi-weekly reviews:** Design + content + management (30 min)
- **Final launch checklist:** QA sign-off 48 hours before deploy

---

## 1. PROJECT OVERVIEW

### 1.1 Business Context

Burj Clean Energy Modaraba (BCEM) is Pakistan's first Shariah-compliant green energy fund. The website serves:
- **Investors** seeking financial transparency and governance
- **Corporate partners** evaluating renewable energy solutions
- **Media** looking for press releases and company information
- **Job seekers** researching the company and team
- **Regulators** reviewing compliance and governance

Current WordPress site is slow, difficult to update, and doesn't reflect BCEM's professional identity. Rebuilding as static site with CMS enables faster performance, easier maintenance, and stronger investor confidence.

### 1.2 Project Goals

✅ Rebuild WordPress site as a modern static site with Git-based CMS  
✅ Achieve 90+ Lighthouse scores across all metrics  
✅ Maintain BCEM's professional corporate identity (green + gold branding)  
✅ Enable content updates for non-technical staff (CMS admin interface)  
✅ Ensure mobile-first responsive design  
✅ Preserve SEO value (all URLs redirect correctly)  
✅ Support easy addition of news posts, projects, team members  

### 1.3 Target Audiences & Needs

| Audience | Primary Needs | Key Pages |
|----------|---------------|-----------|
| Investors | Financial reports, governance, compliance | Investor Relations, Governance, About |
| Corporate Clients | Product info, project portfolio, capabilities | Products, Projects, About |
| Media | Press releases, company news, leadership info | News, About, Governance, Contact |
| Job Seekers | Company info, culture, team | About, Governance, Contact |
| Regulators | Governance structure, Shariah compliance | Governance |

### 1.4 Success Metrics

| Metric | Target | How Measured |
|--------|--------|--------------|
| **Page Load Time** | < 2 seconds | Google PageSpeed Insights |
| **Lighthouse Performance** | 90+ | Lighthouse audit |
| **Lighthouse Accessibility** | 95+ | Lighthouse audit |
| **Lighthouse SEO** | 90+ | Lighthouse audit |
| **WCAG Compliance** | 2.1 AA (no critical issues) | axe DevTools + manual testing |
| **Mobile Usability** | 100% pages responsive | Chrome DevTools |
| **CMS Workflow** | < 5 min to publish content | User testing |
| **URL Redirect Success** | 100% old URLs → new URLs | Link audit tool |

---

## 2. TECHNICAL STACK

### Core Stack

```yaml
Framework:       Astro 5.x (static site generator)
Styling:         CSS custom properties (no Tailwind)
CMS:             Decap CMS (Git-based content management)
Hosting:         Netlify (recommended) or Vercel
Content Format:  Markdown + YAML frontmatter
Image Service:   Sharp (built-in Astro)
Deployment:      GitHub → Netlify automatic builds
```

### Dependencies

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

### Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari iOS 15+
- Chrome Android 100+

---

## 3. DESIGN SYSTEM

### Color Tokens (BCEM Brand)

**Primary Green** — Clean Energy Trust
```css
--color-primary-500: #2e7d32;    /* Main brand green */
--color-primary-700: #1b5e20;    /* Dark green (hover) */
```

**Secondary Gold** — Financial Trust
```css
--color-secondary-500: #c9a227;  /* Main gold accent */
--color-secondary-600: #b8860b;  /* Dark gold */
```

**Neutral Palette** — Text & Backgrounds
```css
--color-neutral-900: #212121;    /* Primary text */
--color-neutral-600: #757575;    /* Secondary text */
--color-neutral-0: #ffffff;      /* Backgrounds */
--color-neutral-50: #fafafa;     /* Secondary backgrounds */
```

### Typography

| Element | Font | Size (Desktop) | Size (Mobile) | Weight |
|---------|------|---------|----------|--------|
| **H1** | Plus Jakarta Sans | 3.75rem | 1.875rem | 700 |
| **H2** | Plus Jakarta Sans | 2.25rem | 1.5rem | 700 |
| **H3** | Plus Jakarta Sans | 1.875rem | 1.25rem | 600 |
| **Body** | Inter | 1rem | 0.875rem | 400 |
| **Small** | Inter | 0.875rem | 0.75rem | 400 |

### Spacing Scale

```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
```

### Grid & Breakpoints

- **Mobile:** 320px–767px (4-column grid, 16px margins)
- **Tablet:** 768px–1023px (8-column grid, 24px margins)
- **Desktop:** 1024px–1440px (12-column grid, 40px margins)
- **Ultra-wide:** 1441px+ (max-width container, centered)

---

## 4. COMPONENTS & PAGES

### Global Components

- **Header** — Logo, navigation menu with dropdowns, mobile toggle
- **Navigation** — Main menu with 8 links, nested dropdowns (About, Governance, Products, Investor Relations)
- **Mobile Menu** — Hamburger icon, full-screen slide-out, close button
- **Footer** — Links, contact info, social media, copyright
- **CTA Button** — Primary (green), Secondary (outline), Tertiary (text-only)
- **Card** — Generic content card with image, title, description, CTA
- **Section Heading** — Title + subtitle with visual accent line

### Page-Specific Components

**Home Page:**
- Hero section (image, headline, CTA)
- Statistics section (4 animated counters)
- Services grid (3 service cards)
- Projects preview (3 recent projects)
- News preview (3 recent posts)
- CTA section (call to action banner)

**About Page:**
- Hero section
- Company overview (text + image)
- Vision & Mission (side-by-side cards)
- Associated companies (logos + descriptions)
- Team preview (4 featured members)

**Governance Page:**
- Board of Directors (cards with photos, titles, bios)
- Management Team (grid, department grouped)
- Auditor info (company name + contact)
- Shariah Advisor (name, title, bio)

**Products Page:**
- Service grid (Commercial & Industrial vs. Residential)
- Feature lists
- CTA to contact or learn more

**Projects Page:**
- Project archive with filter by category
- Project showcase (card grid)
- Project detail page (full description, images, related projects)

**Investor Relations Page:**
- Annual reports section (table/list of PDFs)
- Quarterly reports section
- Financial highlights (section with stats)
- Free float information
- Shareholder pattern (visual)
- Downloads grouped by type/year

**News Page:**
- News archive (chronological, newest first)
- Article cards (excerpt + date + category)
- Article detail page (full content, related articles)

**Contact Page:**
- Contact form (name, email, message, submit)
- Office location (text + map)
- Phone / email / hours

---

## 5. IMPLEMENTATION PHASES

### Phase 0: Content Audit (Pre-Launch) — 1 day

**Objective:** Confirm all content is ready to migrate.

- [ ] Export all WordPress pages, posts, projects
- [ ] Audit content for completeness & accuracy
- [ ] Identify missing images, bios, or documents
- [ ] Management sign-off

**Deliverable:** Content audit report + migration checklist

---

### Phase 1: Project Setup & Environment (Week 1) — 5 hours

- [ ] Initialize Astro 5.x project locally
- [ ] Set up GitHub repository
- [ ] Configure TypeScript & path aliases
- [ ] Install dependencies (astro, mdx, sitemap, sharp, decap-cms)
- [ ] Create project structure (components, layouts, pages, content, styles)

**Deliverable:** Working localhost dev server at `localhost:4321`

---

### Phase 2: Design System & Base Styles (Week 1) — 8 hours

- [ ] Create CSS token file (colors, typography, spacing, grid)
- [ ] Build global reset & base styles
- [ ] Create responsive grid system
- [ ] Set up typography system with font preloading
- [ ] Create utility classes for common patterns

**Deliverable:** Complete design system; all tokens documented

---

### Phase 3: Global Components (Week 1–2) — 8 hours

- [ ] Header (logo, nav, mobile toggle)
- [ ] Navigation (main menu with dropdowns)
- [ ] Mobile Menu (hamburger, full-screen nav)
- [ ] Footer (links, contact, social, copyright)
- [ ] Button component (primary, secondary, tertiary)
- [ ] Card component (generic reusable card)
- [ ] Section Heading (title + subtitle + accent)

**Deliverable:** All global components built, accessible, responsive

---

### Phase 4: Page Templates & Sections (Week 2) — 12 hours

- [ ] Home page template (hero + sections)
- [ ] About page template
- [ ] Governance page template
- [ ] Products page template
- [ ] Projects archive + detail templates
- [ ] Investor Relations page template
- [ ] News archive + article detail templates
- [ ] Contact page template
- [ ] Section components (Hero, StatsGrid, NewsPreview, ProjectsShowcase, etc.)

**Deliverable:** All 8 pages built with placeholder content; responsive on all devices

---

### Phase 5: Content Collections & Migration (Week 3) — 10 hours

- [ ] Define Zod schemas for News, Projects, Team, Documents
- [ ] Set up Astro content collections
- [ ] Migrate WordPress content → Markdown + YAML
- [ ] Create dynamic routing for projects and news ([slug].astro)
- [ ] Test content loading on all pages
- [ ] Implement content filtering (by category, date, etc.)

**Deliverable:** All content migrated and displaying on site

---

### Phase 6: CMS Integration & Testing (Week 3–4) — 8 hours

- [ ] Create Decap CMS config.yml (collections, fields, preview)
- [ ] Set up admin/index.html for CMS access
- [ ] Configure GitHub authentication (Netlify Git Gateway)
- [ ] Test content creation/editing workflow
- [ ] Test media upload functionality
- [ ] Create editorial documentation for content team

**Deliverable:** Working CMS at `/admin`; content team can edit and publish

**Note:** If Decap CMS has compatibility issues, switch to Netlify CMS v2.10.0 or use markdown editing workflow.

---

### Phase 7: Accessibility & Performance (Week 4) — 8 hours

- [ ] Add skip link to all pages
- [ ] Ensure semantic HTML structure (proper heading hierarchy)
- [ ] Test keyboard navigation (Tab, Enter, Escape)
- [ ] Optimize all images (WebP/AVIF format, lazy loading)
- [ ] Preload critical fonts
- [ ] Minimize CSS/JS payloads
- [ ] Audit with axe DevTools (accessibility)
- [ ] Run Lighthouse audit (target 90+ across all metrics)

**Deliverable:** Lighthouse audit report 90+; axe DevTools report with zero critical issues

---

### Phase 8: QA, Testing & Launch (Week 5) — 15 hours

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS + Android)
- [ ] Form validation & submission testing
- [ ] PDF download testing
- [ ] Link integrity audit (no 404s)
- [ ] Create URL redirect rules (_redirects file)
- [ ] Configure robots.txt + sitemap.xml
- [ ] Final content proofing
- [ ] Deploy to production
- [ ] Post-launch monitoring

**Deliverable:** Live production site; all QA checklists passed

---

**Total Development Time:** ~40 hours over 5 weeks

---

## 6. ACCEPTANCE CRITERIA

### Functional Requirements

| ID | Feature | Acceptance Criteria | Owner |
|----|---------|-------------------|-------|
| F1 | Navigation | All 8 pages link correctly; dropdowns work (hover + click); mobile menu toggles; active state shows on current page | QA |
| F2 | Responsive Design | All pages render correctly at 320px, 768px, 1024px, 1440px; no horizontal scroll | QA |
| F3 | Projects Display | Projects load from content collection; can filter by category; detail pages render with full content | QA |
| F4 | News Display | News sorted by date (newest first); archive shows excerpts; detail page shows full content | QA |
| F5 | Governance Display | Team members grouped by role; bios display; LinkedIn links work | QA |
| F6 | Documents | All investor PDFs listed and downloadable; grouped by type and year | QA |
| F7 | Contact Form | Form validates required fields; submits successfully; success message displays | QA |
| F8 | CMS Workflow | All collections editable; changes reflected after site rebuild; media uploads work | Content Team |

### Non-Functional Requirements

| ID | Requirement | Target | Measured By |
|----|-------------|--------|-----------|
| NF1 | Performance | Lighthouse score ≥ 90 | Lighthouse audit |
| NF2 | Accessibility | Lighthouse score ≥ 95; no WCAG AA violations | Lighthouse + axe DevTools |
| NF3 | SEO | Lighthouse score ≥ 90; unique titles/meta on all pages | Lighthouse audit |
| NF4 | Best Practices | Lighthouse score ≥ 90 | Lighthouse audit |
| NF5 | Page Load | First Contentful Paint < 1.5s; Time to Interactive < 3s | Lighthouse audit |
| NF6 | Image Optimization | All images WebP/AVIF with lazy loading | Image audit |
| NF7 | Browser Support | No visual bugs in Chrome, Firefox, Safari, Edge (last 2 versions) | Cross-browser testing |

### QA Checklist (Before Launch)

- [ ] **Navigation:** All links work; no 404s; keyboard accessible; mobile menu works
- [ ] **Content:** All text proofread; all images have alt text; all PDFs open correctly
- [ ] **Forms:** Contact form validates & submits; error states show; success message displays
- [ ] **Responsive:** Tests at 320px, 768px, 1024px, 1440px; no horizontal scroll; readable without zoom
- [ ] **Accessibility:** axe DevTools passes (no critical/serious issues); keyboard nav works; skip link works; WCAG AA contrast passes; screen reader testing complete
- [ ] **Performance:** Lighthouse audit 90+ across all metrics; images optimized; fonts preloaded
- [ ] **SEO:** Unique titles on all pages; meta descriptions present; sitemap.xml generated; robots.txt configured
- [ ] **CMS:** Admin login works; can create/edit/delete content; media uploads work; preview works
- [ ] **URL Redirects:** All old WordPress URLs redirect to new site (301 permanent)

---

## Appendix: Files & Commands

### Setup Commands

```bash
# Create new Astro project
npm create astro@latest burj-modaraba

# Install dependencies
npm install

# Start dev server
npm run dev           # http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

### Important Paths

- **Design Tokens:** `src/styles/tokens.css`
- **Components:** `src/components/` (organized by type)
- **Content Collections:** `src/content/` (projects, news, team, documents)
- **Pages:** `src/pages/` (8 main pages + dynamic routes)
- **CMS Config:** `public/admin/config.yml`

---

**END OF FIXED PRD**

*This document has been restructured for clarity and includes new sections on Migration Strategy, Risk Logging, and Stakeholder Sign-Off. Ready for management approval.*
