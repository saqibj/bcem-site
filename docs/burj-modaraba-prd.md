# Product Requirements Document (PRD)
# Burj Clean Energy Modaraba Website Rebuild

**Project:** BCEM Corporate Website  
**Version:** 1.0  
**Last Updated:** January 2025  
**Target:** Cursor IDE / AI-Assisted Development  

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technical Stack](#2-technical-stack)
3. [Project Structure](#3-project-structure)
4. [Design System](#4-design-system)
5. [Components Specification](#5-components-specification)
6. [Page Templates](#6-page-templates)
7. [Content Schema](#7-content-schema)
8. [Implementation Phases](#8-implementation-phases)
9. [Acceptance Criteria](#9-acceptance-criteria)

---

## 1. Project Overview

### 1.1 Business Context

Burj Clean Energy Modaraba (BCEM) is Pakistan's first Shariah-compliant green energy fund. The website serves investors, stakeholders, and potential clients in the renewable energy sector.

### 1.2 Project Goals

- Rebuild WordPress site as a modern static site with CMS
- Improve performance (target: 90+ Lighthouse score)
- Maintain professional corporate identity
- Enable easy content updates for non-technical staff
- Ensure mobile-first responsive design

### 1.3 Target Audiences

| Audience | Primary Needs |
|----------|---------------|
| Investors | Financial reports, shareholder info, governance |
| Corporate Clients | Products/services, project portfolio |
| Media | Press releases, company news |
| Job Seekers | Company info, team, contact |

### 1.4 Success Metrics

- Page load time < 2 seconds
- Mobile usability score > 95
- All pages accessible (WCAG 2.1 AA)
- CMS content updates within 5 minutes

---

## 2. Technical Stack

### 2.1 Core Stack

```yaml
Framework: Astro 5.x
Styling: CSS with custom properties (no Tailwind)
CMS: Decap CMS (Git-based)
Hosting: Netlify or Vercel
Content: Markdown + YAML frontmatter
```

### 2.2 Dependencies

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

### 2.3 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari iOS 15+
- Chrome Android 100+

---

## 3. Project Structure

### 3.1 Directory Layout

```
burj-modaraba/
├── public/
│   ├── admin/
│   │   └── config.yml          # Decap CMS config
│   ├── images/
│   │   ├── logo/
│   │   ├── projects/
│   │   ├── team/
│   │   └── news/
│   ├── documents/              # PDFs for investor relations
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
│   │   ├── projects/
│   │   ├── news/
│   │   ├── team/
│   │   └── documents/
│   │
│   ├── styles/
│   │   ├── tokens.css          # Design tokens
│   │   ├── reset.css           # CSS reset
│   │   ├── global.css          # Global styles
│   │   ├── typography.css      # Type styles
│   │   └── utilities.css       # Utility classes
│   │
│   ├── utils/
│   │   ├── formatDate.ts
│   │   └── slugify.ts
│   │
│   └── data/
│       └── navigation.json
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## 4. Design System

### 4.1 Color Tokens

```css
/* src/styles/tokens.css */

:root {
  /* ===================
     BRAND COLORS
     =================== */
  
  /* Primary Green - Clean Energy */
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
  
  /* ===================
     APPLIED COLORS
     =================== */
  
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
  
  /* ===================
     TYPOGRAPHY
     =================== */
  
  --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-heading: 'Plus Jakarta Sans', var(--font-family-sans);
  --font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
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
  --font-size-6xl: 3.75rem;     /* 60px */
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;
  
  /* Letter Spacing */
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  --letter-spacing-wider: 0.05em;
  --letter-spacing-widest: 0.1em;
  
  /* ===================
     SPACING
     =================== */
  
  --space-0: 0;
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
  
  /* Section Spacing */
  --section-padding-y: var(--space-16);
  --section-padding-y-lg: var(--space-24);
  
  /* ===================
     LAYOUT
     =================== */
  
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1440px;
  
  --container-padding: var(--space-4);
  
  /* Grid */
  --grid-columns: 12;
  --grid-gap: var(--space-6);
  
  /* ===================
     BORDERS & RADIUS
     =================== */
  
  --radius-none: 0;
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  --radius-2xl: 1.5rem;   /* 24px */
  --radius-full: 9999px;
  
  --border-width-thin: 1px;
  --border-width-medium: 2px;
  --border-width-thick: 4px;
  
  /* ===================
     SHADOWS
     =================== */
  
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  
  /* ===================
     TRANSITIONS
     =================== */
  
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
  
  /* ===================
     Z-INDEX
     =================== */
  
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
}

/* ===================
   RESPONSIVE ADJUSTMENTS
   =================== */

@media (min-width: 768px) {
  :root {
    --container-padding: var(--space-6);
    --section-padding-y: var(--space-20);
    --section-padding-y-lg: var(--space-32);
  }
}

@media (min-width: 1024px) {
  :root {
    --container-padding: var(--space-8);
  }
}
```

### 4.2 Typography System

```css
/* src/styles/typography.css */

/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

/* Base Typography */
body {
  font-family: var(--font-family-sans);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  color: var(--color-text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}

h1, .text-h1 {
  font-size: var(--font-size-4xl);
  letter-spacing: var(--letter-spacing-tight);
}

h2, .text-h2 {
  font-size: var(--font-size-3xl);
  letter-spacing: var(--letter-spacing-tight);
}

h3, .text-h3 {
  font-size: var(--font-size-2xl);
}

h4, .text-h4 {
  font-size: var(--font-size-xl);
}

h5, .text-h5 {
  font-size: var(--font-size-lg);
}

h6, .text-h6 {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
}

/* Responsive Headings */
@media (min-width: 768px) {
  h1, .text-h1 { font-size: var(--font-size-5xl); }
  h2, .text-h2 { font-size: var(--font-size-4xl); }
  h3, .text-h3 { font-size: var(--font-size-3xl); }
}

@media (min-width: 1024px) {
  h1, .text-h1 { font-size: var(--font-size-6xl); }
}

/* Body Text */
p {
  margin-bottom: var(--space-4);
}

.text-lead {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
}

.text-small {
  font-size: var(--font-size-sm);
}

.text-xs {
  font-size: var(--font-size-xs);
}

/* Links */
a {
  color: var(--color-primary-600);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-primary-700);
}

/* Labels & Eyebrows */
.eyebrow {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wider);
  text-transform: uppercase;
  color: var(--color-primary-600);
  margin-bottom: var(--space-2);
}
```

### 4.3 Global Styles

```css
/* src/styles/global.css */

@import './reset.css';
@import './tokens.css';
@import './typography.css';
@import './utilities.css';

/* ===================
   LAYOUT COMPONENTS
   =================== */

.container {
  width: 100%;
  max-width: var(--container-xl);
  margin-inline: auto;
  padding-inline: var(--container-padding);
}

.container--narrow {
  max-width: var(--container-lg);
}

.container--wide {
  max-width: var(--container-2xl);
}

/* Sections */
.section {
  padding-block: var(--section-padding-y);
}

.section--lg {
  padding-block: var(--section-padding-y-lg);
}

.section--dark {
  background-color: var(--color-bg-dark);
  color: var(--color-text-inverse);
}

.section--gray {
  background-color: var(--color-bg-secondary);
}

/* Grid System */
.grid {
  display: grid;
  gap: var(--grid-gap);
}

.grid--2 { grid-template-columns: repeat(1, 1fr); }
.grid--3 { grid-template-columns: repeat(1, 1fr); }
.grid--4 { grid-template-columns: repeat(2, 1fr); }

@media (min-width: 768px) {
  .grid--2 { grid-template-columns: repeat(2, 1fr); }
  .grid--3 { grid-template-columns: repeat(2, 1fr); }
  .grid--4 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid--3 { grid-template-columns: repeat(3, 1fr); }
  .grid--4 { grid-template-columns: repeat(4, 1fr); }
}

/* ===================
   BUTTONS
   =================== */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  line-height: 1;
  text-decoration: none;
  border: var(--border-width-medium) solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Primary Button */
.btn--primary {
  background-color: var(--color-primary-600);
  color: var(--color-text-inverse);
  border-color: var(--color-primary-600);
}

.btn--primary:hover {
  background-color: var(--color-primary-700);
  border-color: var(--color-primary-700);
}

/* Secondary Button */
.btn--secondary {
  background-color: transparent;
  color: var(--color-primary-600);
  border-color: var(--color-primary-600);
}

.btn--secondary:hover {
  background-color: var(--color-primary-600);
  color: var(--color-text-inverse);
}

/* Ghost Button (for dark backgrounds) */
.btn--ghost {
  background-color: transparent;
  color: var(--color-text-inverse);
  border-color: var(--color-neutral-0);
}

.btn--ghost:hover {
  background-color: var(--color-neutral-0);
  color: var(--color-primary-700);
}

/* Button Sizes */
.btn--sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-sm);
}

.btn--lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--font-size-lg);
}

/* ===================
   CARDS
   =================== */

.card {
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-base), transform var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card__image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.card__content {
  padding: var(--space-6);
}

.card__title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-2);
}

.card__description {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-4);
}

.card__meta {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

/* ===================
   FOCUS STATES (A11Y)
   =================== */

:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Skip Link */
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-4);
  z-index: var(--z-tooltip);
  padding: var(--space-3) var(--space-4);
  background-color: var(--color-primary-600);
  color: var(--color-text-inverse);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-weight: var(--font-weight-semibold);
}

.skip-link:focus {
  top: var(--space-4);
}
```

---

## 5. Components Specification

### 5.1 Component Inventory

| Component | Location | Props | Description |
|-----------|----------|-------|-------------|
| Header | `global/Header.astro` | `transparent?: boolean` | Site header with logo and navigation |
| Footer | `global/Footer.astro` | - | Site footer with links and contact |
| Navigation | `global/Navigation.astro` | `items: NavItem[]` | Desktop navigation with dropdowns |
| MobileMenu | `global/MobileMenu.astro` | `items: NavItem[]` | Mobile slide-out menu |
| Button | `ui/Button.astro` | `variant, size, href?, type?` | Reusable button component |
| Card | `ui/Card.astro` | `variant?: 'default' \| 'horizontal'` | Content card container |
| SectionHeading | `ui/SectionHeading.astro` | `eyebrow?, title, description?, align?` | Section title block |
| StatCard | `ui/StatCard.astro` | `value, label, icon?` | Statistics display card |
| DocumentCard | `ui/DocumentCard.astro` | `title, type, date, fileUrl` | Downloadable document card |
| Hero | `sections/Hero.astro` | `title, subtitle, cta, backgroundImage` | Homepage hero section |
| ServicesGrid | `sections/ServicesGrid.astro` | `services: Service[]` | Services overview grid |
| ProjectsShowcase | `sections/ProjectsShowcase.astro` | `projects: Project[], limit?` | Featured projects display |
| StatsSection | `sections/StatsSection.astro` | `stats: Stat[]` | Impact metrics section |
| TeamPreview | `sections/TeamPreview.astro` | `members: TeamMember[], limit?` | Team members preview |
| NewsPreview | `sections/NewsPreview.astro` | `posts: NewsPost[], limit?` | Latest news preview |
| CTASection | `sections/CTASection.astro` | `title, description?, buttonText, buttonHref` | Call-to-action banner |
| TeamMemberCard | `blocks/TeamMemberCard.astro` | `member: TeamMember` | Individual team member card |
| ProjectCard | `blocks/ProjectCard.astro` | `project: Project` | Project portfolio card |
| NewsCard | `blocks/NewsCard.astro` | `post: NewsPost` | News article card |
| ServiceCard | `blocks/ServiceCard.astro` | `service: Service` | Service offering card |

### 5.2 Header Component

```astro
---
// src/components/global/Header.astro
import Navigation from './Navigation.astro';
import MobileMenu from './MobileMenu.astro';
import navigation from '../../data/navigation.json';

interface Props {
  transparent?: boolean;
}

const { transparent = false } = Astro.props;
---

<header class:list={['header', { 'header--transparent': transparent }]}>
  <div class="header__container container">
    <a href="/" class="header__logo" aria-label="Burj Clean Energy Modaraba - Home">
      <img 
        src="/images/logo/bcem-logo.png" 
        alt="Burj Clean Energy Modaraba" 
        width="180" 
        height="48"
      />
    </a>
    
    <Navigation items={navigation.main} />
    
    <button 
      class="header__menu-toggle" 
      aria-label="Open menu"
      aria-expanded="false"
      aria-controls="mobile-menu"
    >
      <span class="header__menu-icon"></span>
    </button>
  </div>
  
  <MobileMenu items={navigation.main} />
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: var(--z-sticky);
    background-color: var(--color-bg-primary);
    border-bottom: 1px solid var(--color-border-light);
  }
  
  .header--transparent {
    position: absolute;
    width: 100%;
    background-color: transparent;
    border-bottom: none;
  }
  
  .header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }
  
  .header__logo img {
    height: 48px;
    width: auto;
  }
  
  .header__menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .header__menu-icon {
    position: relative;
    width: 24px;
    height: 2px;
    background-color: currentColor;
  }
  
  .header__menu-icon::before,
  .header__menu-icon::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: currentColor;
  }
  
  .header__menu-icon::before { top: -8px; }
  .header__menu-icon::after { bottom: -8px; }
  
  @media (min-width: 1024px) {
    .header__menu-toggle {
      display: none;
    }
  }
</style>

<script>
  const menuToggle = document.querySelector('.header__menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuToggle?.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    mobileMenu?.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  });
</script>
```

### 5.3 Button Component

```astro
---
// src/components/ui/Button.astro
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  class?: string;
}

const { 
  variant = 'primary', 
  size = 'md', 
  href, 
  type = 'button',
  class: className 
} = Astro.props;

const Element = href ? 'a' : 'button';

const classes = [
  'btn',
  `btn--${variant}`,
  size !== 'md' && `btn--${size}`,
  className
].filter(Boolean).join(' ');
---

<Element 
  class={classes}
  href={href}
  type={!href ? type : undefined}
>
  <slot />
</Element>
```

### 5.4 Card Component

```astro
---
// src/components/ui/Card.astro
interface Props {
  variant?: 'default' | 'horizontal';
  href?: string;
  class?: string;
}

const { variant = 'default', href, class: className } = Astro.props;
const Element = href ? 'a' : 'div';
---

<Element 
  class:list={['card', `card--${variant}`, className]}
  href={href}
>
  <slot name="image" />
  <div class="card__content">
    <slot />
  </div>
</Element>

<style>
  .card--horizontal {
    display: grid;
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 768px) {
    .card--horizontal {
      grid-template-columns: 300px 1fr;
    }
    
    .card--horizontal .card__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
```

### 5.5 Section Heading Component

```astro
---
// src/components/ui/SectionHeading.astro
interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

const { eyebrow, title, description, align = 'left' } = Astro.props;
---

<div class:list={['section-heading', `section-heading--${align}`]}>
  {eyebrow && <p class="eyebrow">{eyebrow}</p>}
  <h2 class="section-heading__title">{title}</h2>
  {description && <p class="section-heading__description text-lead">{description}</p>}
</div>

<style>
  .section-heading {
    margin-bottom: var(--space-12);
  }
  
  .section-heading--center {
    text-align: center;
    max-width: 700px;
    margin-inline: auto;
  }
  
  .section-heading__title {
    margin-bottom: var(--space-4);
  }
  
  .section-heading__description {
    margin-bottom: 0;
  }
</style>
```

### 5.6 Hero Section

```astro
---
// src/components/sections/Hero.astro
import Button from '../ui/Button.astro';

interface Props {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

const { 
  title, 
  subtitle, 
  ctaText = 'Contact Us',
  ctaHref = '/contact',
  backgroundImage = '/images/hero-bg.jpg'
} = Astro.props;
---

<section class="hero">
  <div class="hero__background">
    <img src={backgroundImage} alt="" loading="eager" />
    <div class="hero__overlay"></div>
  </div>
  
  <div class="hero__content container">
    <div class="hero__text">
      <img 
        src="/images/logo/bcem-logo-white.png" 
        alt="Burj Clean Energy Modaraba" 
        class="hero__logo"
        width="300"
        height="80"
      />
      <h1 class="hero__title">{title}</h1>
      {subtitle && <p class="hero__subtitle">{subtitle}</p>}
      <Button variant="ghost" href={ctaHref} size="lg">
        {ctaText}
      </Button>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    color: var(--color-text-inverse);
  }
  
  .hero__background {
    position: absolute;
    inset: 0;
    z-index: -1;
  }
  
  .hero__background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .hero__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(13, 61, 18, 0.9) 0%,
      rgba(13, 61, 18, 0.7) 50%,
      rgba(13, 61, 18, 0.4) 100%
    );
  }
  
  .hero__content {
    position: relative;
    z-index: 1;
    padding-block: var(--space-24);
  }
  
  .hero__text {
    max-width: 650px;
  }
  
  .hero__logo {
    margin-bottom: var(--space-8);
  }
  
  .hero__title {
    font-size: var(--font-size-4xl);
    margin-bottom: var(--space-4);
    color: inherit;
  }
  
  .hero__subtitle {
    font-size: var(--font-size-xl);
    opacity: 0.9;
    margin-bottom: var(--space-8);
  }
  
  @media (min-width: 768px) {
    .hero__title {
      font-size: var(--font-size-5xl);
    }
  }
  
  @media (min-width: 1024px) {
    .hero__title {
      font-size: var(--font-size-6xl);
    }
  }
</style>
```

### 5.7 Stats Section

```astro
---
// src/components/sections/StatsSection.astro
import StatCard from '../ui/StatCard.astro';

interface Stat {
  value: string;
  label: string;
  icon?: string;
}

interface Props {
  stats: Stat[];
}

const { stats } = Astro.props;

const defaultStats: Stat[] = [
  { value: '733,100', label: 'tons of CO2 emission offset' },
  { value: '57+', label: 'Megawatt (MW) Installed Capacity' },
  { value: '100+', label: 'million units (kWh) Generated' }
];

const displayStats = stats || defaultStats;
---

<section class="stats-section section section--dark">
  <div class="container">
    <div class="stats-section__header">
      <p class="eyebrow" style="color: var(--color-secondary-400);">
        Harvesting Nature, Nurturing Tomorrow
      </p>
      <h2>What Makes Us Green</h2>
    </div>
    
    <div class="stats-section__grid">
      {displayStats.map((stat) => (
        <StatCard value={stat.value} label={stat.label} icon={stat.icon} />
      ))}
    </div>
  </div>
</section>

<style>
  .stats-section__header {
    text-align: center;
    margin-bottom: var(--space-12);
  }
  
  .stats-section__header h2 {
    color: var(--color-text-inverse);
  }
  
  .stats-section__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--space-8);
  }
  
  @media (min-width: 768px) {
    .stats-section__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
```

---

## 6. Page Templates

### 6.1 Base Layout

```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
  description?: string;
  image?: string;
}

const { 
  title, 
  description = 'Burj Clean Energy Modaraba - Pakistan\'s First Shariah Compliant Green Energy Fund',
  image = '/images/og-image.jpg'
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content={description} />
  
  <!-- Canonical -->
  <link rel="canonical" href={canonicalURL} />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={new URL(image, Astro.site)} />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={new URL(image, Astro.site)} />
  
  <title>{title}</title>
  
  <!-- Preconnect to Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <slot name="header" />
  
  <main id="main-content">
    <slot />
  </main>
  
  <slot name="footer" />
</body>
</html>

<style is:global>
  @import '../styles/global.css';
</style>
```

### 6.2 Page Layout (Standard Pages)

```astro
---
// src/layouts/PageLayout.astro
import BaseLayout from './BaseLayout.astro';
import Header from '../components/global/Header.astro';
import Footer from '../components/global/Footer.astro';

interface Props {
  title: string;
  description?: string;
  heroTitle?: string;
  heroSubtitle?: string;
}

const { title, description, heroTitle, heroSubtitle } = Astro.props;
---

<BaseLayout title={`${title} | Burj Clean Energy Modaraba`} description={description}>
  <Header slot="header" />
  
  {heroTitle && (
    <section class="page-hero">
      <div class="container">
        <h1>{heroTitle}</h1>
        {heroSubtitle && <p class="text-lead">{heroSubtitle}</p>}
      </div>
    </section>
  )}
  
  <slot />
  
  <Footer slot="footer" />
</BaseLayout>

<style>
  .page-hero {
    background-color: var(--color-primary-900);
    color: var(--color-text-inverse);
    padding-block: var(--space-16) var(--space-12);
    text-align: center;
  }
  
  .page-hero h1 {
    color: inherit;
    margin-bottom: var(--space-4);
  }
  
  .page-hero .text-lead {
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin-inline: auto;
    margin-bottom: 0;
  }
</style>
```

### 6.3 Home Page

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/global/Header.astro';
import Footer from '../components/global/Footer.astro';
import Hero from '../components/sections/Hero.astro';
import ServicesGrid from '../components/sections/ServicesGrid.astro';
import ProjectsShowcase from '../components/sections/ProjectsShowcase.astro';
import StatsSection from '../components/sections/StatsSection.astro';
import TeamPreview from '../components/sections/TeamPreview.astro';
import NewsPreview from '../components/sections/NewsPreview.astro';
import CTASection from '../components/sections/CTASection.astro';

import { getCollection } from 'astro:content';

const projects = await getCollection('projects');
const news = await getCollection('news');
const team = await getCollection('team');

const featuredProjects = projects
  .filter(p => p.data.featured)
  .slice(0, 3);

const latestNews = news
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .slice(0, 3);

const featuredTeam = team
  .filter(t => t.data.featured)
  .sort((a, b) => a.data.order - b.data.order)
  .slice(0, 4);
---

<BaseLayout 
  title="Burj Clean Energy Modaraba | Pakistan's First Shariah Compliant Green Energy Fund"
>
  <Header slot="header" transparent />
  
  <Hero 
    title="Burj Clean Energy Modaraba"
    subtitle="Pakistan's First Shariah Compliant Green Energy Fund"
    ctaText="Contact Us"
    ctaHref="/contact"
  />
  
  <NewsPreview posts={latestNews} />
  
  <ServicesGrid />
  
  <ProjectsShowcase projects={featuredProjects} />
  
  <StatsSection />
  
  <TeamPreview members={featuredTeam} />
  
  <CTASection 
    title="Power Your Home and Business with Burj Clean Energy Modaraba"
    buttonText="Learn More"
    buttonHref="/about"
  />
  
  <Footer slot="footer" />
</BaseLayout>
```

### 6.4 About Page

```astro
---
// src/pages/about.astro
import PageLayout from '../layouts/PageLayout.astro';
import SectionHeading from '../components/ui/SectionHeading.astro';
---

<PageLayout 
  title="About Us"
  description="Learn about Burj Clean Energy Modaraba, Pakistan's first Shariah-compliant green energy fund."
  heroTitle="About Us"
  heroSubtitle="Pakistan's First Shariah Compliant Green Energy Fund"
>
  <!-- Corporate Information Section -->
  <section id="company" class="section">
    <div class="container">
      <SectionHeading 
        eyebrow="Who We Are"
        title="Corporate Information"
      />
      <div class="content-grid">
        <div class="content-text">
          <p>Burj Clean Energy Modaraba is a multipurpose, perpetual, and multi-dimensional Modaraba managed by Burj Modaraba Management Company Pvt. Ltd.</p>
          <p>The Modaraba is primarily engaged in renewable power development focusing on both utility-scale IPPs and Distributed Generation solutions for Industrial, Commercial, and Residential scale customers.</p>
        </div>
        <div class="content-image">
          <img src="/images/about/office.jpg" alt="BCEM Office" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
  
  <!-- Vision Section -->
  <section id="vision" class="section section--gray">
    <div class="container">
      <SectionHeading 
        eyebrow="Our Vision"
        title="Leading Pakistan's Green Energy Future"
        align="center"
      />
      <div class="vision-content">
        <p class="text-lead text-center">
          To be the leading Shariah-compliant renewable energy investment vehicle in Pakistan, driving sustainable development and providing ethical investment opportunities.
        </p>
      </div>
    </div>
  </section>
  
  <!-- Mission Section -->
  <section id="mission" class="section">
    <div class="container">
      <SectionHeading 
        eyebrow="Our Mission"
        title="Sustainable Energy for All"
      />
      <ul class="mission-list">
        <li>Develop and finance renewable energy projects across Pakistan</li>
        <li>Provide Shariah-compliant investment opportunities in clean energy</li>
        <li>Reduce carbon emissions through sustainable power generation</li>
        <li>Deliver reliable and affordable green energy solutions</li>
      </ul>
    </div>
  </section>
  
  <!-- Associated Companies Section -->
  <section id="companies" class="section section--gray">
    <div class="container">
      <SectionHeading 
        eyebrow="Our Network"
        title="Associated Companies"
        align="center"
      />
      <div class="logo-grid">
        <!-- Partner logos go here -->
      </div>
    </div>
  </section>
</PageLayout>

<style>
  .content-grid {
    display: grid;
    gap: var(--space-8);
  }
  
  @media (min-width: 1024px) {
    .content-grid {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
  
  .content-image img {
    width: 100%;
    border-radius: var(--radius-lg);
  }
  
  .vision-content {
    max-width: 800px;
    margin-inline: auto;
  }
  
  .mission-list {
    display: grid;
    gap: var(--space-4);
    list-style: none;
    padding: 0;
    max-width: 800px;
  }
  
  .mission-list li {
    position: relative;
    padding-left: var(--space-8);
  }
  
  .mission-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--color-primary-600);
    font-weight: var(--font-weight-bold);
  }
  
  .logo-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-8);
  }
</style>
```

### 6.5 Projects Archive Page

```astro
---
// src/pages/projects/index.astro
import PageLayout from '../../layouts/PageLayout.astro';
import ProjectCard from '../../components/blocks/ProjectCard.astro';
import SectionHeading from '../../components/ui/SectionHeading.astro';
import { getCollection } from 'astro:content';

const projects = await getCollection('projects');

// Group by category
const bcemProjects = projects.filter(p => p.data.category === 'Burj Modaraba');
const burjProjects = projects.filter(p => p.data.category === 'Burj Projects');
---

<PageLayout 
  title="Projects"
  description="Explore our portfolio of renewable energy projects including solar and wind installations across Pakistan."
  heroTitle="Our Projects"
  heroSubtitle="Powering Pakistan with Clean Energy"
>
  <!-- BCEM Projects -->
  <section class="section">
    <div class="container">
      <SectionHeading 
        eyebrow="Portfolio"
        title="Burj Modaraba Projects"
        description="Utility-scale renewable energy projects"
      />
      <div class="grid grid--3">
        {bcemProjects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  </section>
  
  <!-- Burj Projects -->
  {burjProjects.length > 0 && (
    <section class="section section--gray">
      <div class="container">
        <SectionHeading 
          eyebrow="Distributed Generation"
          title="Commercial & Industrial Projects"
          description="On-site solar solutions for businesses"
        />
        <div class="grid grid--3">
          {burjProjects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    </section>
  )}
</PageLayout>
```

### 6.6 Project Detail Page

```astro
---
// src/pages/projects/[slug].astro
import { getCollection } from 'astro:content';
import PageLayout from '../../layouts/PageLayout.astro';
import Button from '../../components/ui/Button.astro';

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
}

const { project } = Astro.props;
const { Content } = await project.render();
---

<PageLayout 
  title={project.data.title}
  description={project.data.description}
  heroTitle={project.data.title}
  heroSubtitle={`${project.data.capacity} | ${project.data.projectType}`}
>
  <article class="section">
    <div class="container container--narrow">
      <div class="project-meta">
        <div class="project-meta__item">
          <span class="label">Capacity</span>
          <span class="value">{project.data.capacity}</span>
        </div>
        <div class="project-meta__item">
          <span class="label">Type</span>
          <span class="value">{project.data.projectType}</span>
        </div>
        <div class="project-meta__item">
          <span class="label">Location</span>
          <span class="value">{project.data.location}</span>
        </div>
        <div class="project-meta__item">
          <span class="label">Status</span>
          <span class="value">{project.data.status}</span>
        </div>
      </div>
      
      {project.data.featuredImage && (
        <img 
          src={project.data.featuredImage} 
          alt={project.data.title}
          class="project-featured-image"
          loading="lazy"
        />
      )}
      
      <div class="prose">
        <Content />
      </div>
      
      <div class="project-actions">
        <Button href="/projects" variant="secondary">
          ← Back to Projects
        </Button>
        <Button href="/contact">
          Inquire About This Project
        </Button>
      </div>
    </div>
  </article>
</PageLayout>

<style>
  .project-meta {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
    padding: var(--space-6);
    background-color: var(--color-bg-secondary);
    border-radius: var(--radius-lg);
    margin-bottom: var(--space-8);
  }
  
  @media (min-width: 768px) {
    .project-meta {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  .project-meta__item {
    text-align: center;
  }
  
  .project-meta__item .label {
    display: block;
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    margin-bottom: var(--space-1);
  }
  
  .project-meta__item .value {
    font-weight: var(--font-weight-semibold);
    color: var(--color-primary-700);
  }
  
  .project-featured-image {
    width: 100%;
    border-radius: var(--radius-lg);
    margin-bottom: var(--space-8);
  }
  
  .prose {
    margin-bottom: var(--space-12);
  }
  
  .project-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    justify-content: space-between;
  }
</style>
```

---

## 7. Content Schema

### 7.1 Astro Content Collections Config

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Projects Collection
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featuredImage: z.string(),
    capacity: z.string(),
    category: z.enum(['Burj Modaraba', 'Burj Projects']),
    projectType: z.enum(['Solar', 'Wind', 'Hybrid']),
    location: z.string(),
    status: z.enum(['Active', 'Completed', 'In Development']),
    featured: z.boolean().default(false),
    gallery: z.array(z.string()).optional(),
    completionDate: z.date().optional(),
    client: z.string().optional(),
  }),
});

// News Collection
const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    featuredImage: z.string(),
    excerpt: z.string(),
    category: z.string().optional(),
    author: z.string().optional(),
  }),
});

// Team Collection
const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    photo: z.string(),
    department: z.enum(['Board', 'Management', 'Advisory']),
    linkedinUrl: z.string().url().optional(),
    email: z.string().email().optional(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
  }),
});

// Documents Collection
const documentsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    documentType: z.enum([
      'Annual Report',
      'Quarterly Report',
      'Financial Highlights',
      'Shareholder Pattern',
      'Free Float',
      'Other'
    ]),
    year: z.number(),
    quarter: z.string().optional(),
    file: z.string(),
    publishedDate: z.date(),
  }),
});

export const collections = {
  projects: projectsCollection,
  news: newsCollection,
  team: teamCollection,
  documents: documentsCollection,
};
```

### 7.2 Sample Content Files

**Project Example:**
```markdown
---
# src/content/projects/jhimpir-power.md
title: "Jhimpir Power"
description: "50 MW wind power project located in the Jhimpir wind corridor, one of Pakistan's premier wind energy zones."
featuredImage: "/images/projects/jhimpir-power.jpg"
capacity: "50 MW"
category: "Burj Modaraba"
projectType: "Wind"
location: "Jhimpir, Sindh"
status: "Active"
featured: true
completionDate: 2023-06-15
---

## Project Overview

The Jhimpir Wind Power Project is a flagship 50 MW wind energy facility located in the renowned Jhimpir wind corridor in Sindh province.

## Key Features

- 25 wind turbines of 2 MW capacity each
- Annual generation capacity of approximately 140 GWh
- Connected to the national grid through HESCO
- Reduces CO2 emissions by approximately 100,000 tons annually

## Impact

This project demonstrates BCEM's commitment to large-scale renewable energy development while providing stable returns to our certificate holders through a long-term power purchase agreement.
```

**News Example:**
```markdown
---
# src/content/news/vis-rating-announcement.md
title: "VIS Assigns Initial Entity Ratings to Burj Clean Energy Modaraba"
date: 2025-04-29
featuredImage: "/images/news/vis-rating.jpg"
excerpt: "VIS Credit Rating Company has assigned initial entity ratings to Burj Clean Energy Modaraba, reflecting the company's strong financial position."
category: "Corporate"
author: "BCEM Communications"
---

VIS Credit Rating Company Limited has assigned initial entity ratings to Burj Clean Energy Modaraba (BCEM).

## Rating Details

The ratings reflect BCEM's:
- Strong governance framework
- Diversified renewable energy portfolio
- Experienced management team
- Sound financial position

This milestone underscores our commitment to transparency and corporate excellence.
```

**Team Example:**
```markdown
---
# src/content/team/nabeel-malik.md
name: "Nabeel Malik"
position: "Chief Executive"
photo: "/images/team/nabeel-malik.jpg"
department: "Management"
linkedinUrl: "https://www.linkedin.com/in/nabeelmalik-8491py/"
order: 1
featured: true
---

Nabeel Malik serves as the Chief Executive of Burj Clean Energy Modaraba, bringing extensive experience in renewable energy and Islamic finance to the organization.
```

### 7.3 Decap CMS Configuration

```yaml
# public/admin/config.yml
backend:
  name: git-gateway
  branch: main

media_folder: "public/images"
public_folder: "/images"

collections:
  # Projects
  - name: "projects"
    label: "Projects"
    folder: "src/content/projects"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Description", name: "description", widget: "text" }
      - { label: "Featured Image", name: "featuredImage", widget: "image" }
      - { label: "Capacity", name: "capacity", widget: "string", hint: "e.g., 50 MW, 501 KW" }
      - label: "Category"
        name: "category"
        widget: "select"
        options: ["Burj Modaraba", "Burj Projects"]
      - label: "Project Type"
        name: "projectType"
        widget: "select"
        options: ["Solar", "Wind", "Hybrid"]
      - { label: "Location", name: "location", widget: "string" }
      - label: "Status"
        name: "status"
        widget: "select"
        options: ["Active", "Completed", "In Development"]
      - { label: "Featured", name: "featured", widget: "boolean", default: false }
      - { label: "Gallery", name: "gallery", widget: "list", field: { label: "Image", name: "image", widget: "image" }, required: false }
      - { label: "Completion Date", name: "completionDate", widget: "date", required: false }
      - { label: "Client", name: "client", widget: "string", required: false }
      - { label: "Body", name: "body", widget: "markdown" }

  # News
  - name: "news"
    label: "News"
    folder: "src/content/news"
    create: true
    slug: "{{year}}-{{month}}-{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Date", name: "date", widget: "datetime" }
      - { label: "Featured Image", name: "featuredImage", widget: "image" }
      - { label: "Excerpt", name: "excerpt", widget: "text" }
      - { label: "Category", name: "category", widget: "string", required: false }
      - { label: "Author", name: "author", widget: "string", required: false }
      - { label: "Body", name: "body", widget: "markdown" }

  # Team
  - name: "team"
    label: "Team Members"
    folder: "src/content/team"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Name", name: "name", widget: "string" }
      - { label: "Position", name: "position", widget: "string" }
      - { label: "Photo", name: "photo", widget: "image" }
      - label: "Department"
        name: "department"
        widget: "select"
        options: ["Board", "Management", "Advisory"]
      - { label: "LinkedIn URL", name: "linkedinUrl", widget: "string", required: false }
      - { label: "Email", name: "email", widget: "string", required: false }
      - { label: "Display Order", name: "order", widget: "number", default: 99 }
      - { label: "Featured on Homepage", name: "featured", widget: "boolean", default: false }
      - { label: "Bio", name: "body", widget: "markdown" }

  # Documents (for Investor Relations)
  - name: "documents"
    label: "Investor Documents"
    folder: "src/content/documents"
    create: true
    slug: "{{year}}-{{slug}}"
    extension: "json"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - label: "Document Type"
        name: "documentType"
        widget: "select"
        options:
          - "Annual Report"
          - "Quarterly Report"
          - "Financial Highlights"
          - "Shareholder Pattern"
          - "Free Float"
          - "Other"
      - { label: "Year", name: "year", widget: "number" }
      - { label: "Quarter", name: "quarter", widget: "string", required: false, hint: "e.g., Q1, Q2, Q3, Q4" }
      - { label: "File", name: "file", widget: "file" }
      - { label: "Published Date", name: "publishedDate", widget: "date" }
```

---

## 8. Implementation Phases

### Phase 1: Foundation (Week 1)

**Objective:** Set up project structure, design system, and core layouts.

| Task | Priority | Estimated Time |
|------|----------|----------------|
| Initialize Astro project with TypeScript | High | 1 hour |
| Set up project directory structure | High | 1 hour |
| Create design tokens (tokens.css) | High | 2 hours |
| Create global styles and reset | High | 2 hours |
| Build BaseLayout component | High | 2 hours |
| Build PageLayout component | High | 1 hour |
| Create navigation data structure | Medium | 1 hour |
| **Total** | | **10 hours** |

**Deliverables:**
- [ ] Working Astro project
- [ ] Complete design token system
- [ ] Base and page layouts
- [ ] Navigation JSON structure

### Phase 2: Global Components (Week 1-2)

**Objective:** Build header, footer, and navigation components.

| Task | Priority | Estimated Time |
|------|----------|----------------|
| Build Header component | High | 3 hours |
| Build Navigation component (desktop) | High | 2 hours |
| Build MobileMenu component | High | 3 hours |
| Build Footer component | High | 2 hours |
| Add responsive behavior and animations | Medium | 2 hours |
| Test accessibility (keyboard nav, focus states) | High | 1 hour |
| **Total** | | **13 hours** |

**Deliverables:**
- [ ] Fully responsive header with dropdown navigation
- [ ] Mobile hamburger menu with slide animation
- [ ] Footer with all link sections
- [ ] Skip link functionality

### Phase 3: UI Components (Week 2)

**Objective:** Build reusable UI components.

| Task | Priority | Estimated Time |
|------|----------|----------------|
| Build Button component (all variants) | High | 1 hour |
| Build Card component | High | 2 hours |
| Build SectionHeading component | High | 1 hour |
| Build StatCard component | Medium | 1 hour |
| Build DocumentCard component | Medium | 1 hour |
| Create component documentation | Low | 1 hour |
| **Total** | | **7 hours** |

**Deliverables:**
- [ ] Button component (primary, secondary, ghost, sizes)
- [ ] Card component (default, horizontal variants)
- [ ] All UI primitives documented

### Phase 4: Section Components (Week 2-3)

**Objective:** Build page section components.

| Task | Priority | Estimated Time |
|------|----------|----------------|
| Build Hero section | High | 3 hours |
| Build ServicesGrid section | High | 2 hours |
| Build ProjectsShowcase section | High | 2 hours |
| Build StatsSection | High | 2 hours |
| Build TeamPreview section | Medium | 2 hours |
| Build NewsPreview section | Medium | 2 hours |
| Build CTASection | Medium | 1 hour |
| **Total** | | **14 hours** |

**Deliverables:**
- [ ] All homepage sections complete
- [ ] Responsive layouts verified
- [ ] Animations/transitions added

### Phase 5: Content Collections (Week 3)

**Objective:** Set up content schema and sample data.

| Task | Priority | Estimated Time |
|------|----------|----------------|
| Create content collection config | High | 2 hours |
| Create sample projects (3 items) | High | 1 hour |
| Create sample news posts (3 items) | High | 1 hour |
| Create sample team members (4 items) | Medium | 1 hour |
| Create sample documents (5 items) | Medium | 1 hour |
| Test content queries in pages | High | 1 hour |
| **Total** | | **7 hours** |

**Deliverables:**
- [ ] Content collections configured
- [ ] Sample content populated
- [ ] Content queries working

### Phase 6: Page Templates (Week 3-4)

**Objective:** Build all page templates.

| Task | Priority | Estimated Time |
|------|----------|----------------|
| Build Home page | High | 3 hours |
| Build About page | High | 3 hours |
| Build Governance page | High | 3 hours |
| Build Products page | High | 3 hours |
| Build Projects archive page | High | 2 hours |
| Build Project detail page | High | 2 hours |
| Build Investor Relations page | High | 4 hours |
| Build News archive page | Medium | 2 hours |
| Build News article page | Medium | 2 hours |
| Build Contact page | High | 2 hours |
| **Total** | | **26 hours** |

**Deliverables:**
- [ ] All 8+ pages built
- [ ] Dynamic routing for projects/news
- [ ] Content integration complete

### Phase 7: CMS Integration (Week 4)

**Objective:** Set up Decap CMS for content management.

| Task | Priority | Estimated Time |
|------|----------|----------------|
| Create Decap CMS config.yml | High | 2 hours |
| Set up admin/index.html | High | 1 hour |
| Configure Git Gateway (Netlify) | High | 1 hour |
| Test content editing workflow | High | 2 hours |
| Create editorial documentation | Medium | 2 hours |
| **Total** | | **8 hours** |

**Deliverables:**
- [ ] Working CMS at /admin
- [ ] All collections editable
- [ ] Documentation for editors

### Phase 8: Polish & QA (Week 5)

**Objective:** Final testing, optimization, and launch prep.

| Task | Priority | Estimated Time |
|------|----------|----------------|
| Cross-browser testing | High | 3 hours |
| Mobile device testing | High | 2 hours |
| Accessibility audit (axe, WAVE) | High | 2 hours |
| Performance optimization (images, fonts) | High | 3 hours |
| SEO audit (meta, sitemap, robots) | Medium | 2 hours |
| Create redirects from old URLs | Medium | 1 hour |
| Final content review | Medium | 2 hours |
| Deploy to production | High | 1 hour |
| **Total** | | **16 hours** |

**Deliverables:**
- [ ] All QA checklists passed
- [ ] Lighthouse score 90+
- [ ] Production deployment live

---

## 9. Acceptance Criteria

### 9.1 Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| F1 | Navigation | All menu items link to correct pages; dropdowns work on hover/click; mobile menu opens/closes correctly |
| F2 | Responsive Design | All pages render correctly on mobile (320px), tablet (768px), desktop (1280px) |
| F3 | Projects Display | Projects load from content collection; filter by category works; detail pages render |
| F4 | News Display | News posts sorted by date; excerpts display on archive; full content on detail page |
| F5 | Team Display | Team members grouped by department; LinkedIn links work when provided |
| F6 | Documents | All PDFs downloadable; grouped by type and year |
| F7 | Contact Form | Form submits successfully; validation works; success message displays |
| F8 | CMS | All content collections editable; changes reflect on site after rebuild |

### 9.2 Non-Functional Requirements

| ID | Requirement | Acceptance Criteria |
|----|-------------|---------------------|
| NF1 | Performance | Lighthouse Performance score ≥ 90 |
| NF2 | Accessibility | Lighthouse Accessibility score ≥ 95; no critical WCAG violations |
| NF3 | SEO | Lighthouse SEO score ≥ 90; all pages have unique titles and meta descriptions |
| NF4 | Best Practices | Lighthouse Best Practices score ≥ 90 |
| NF5 | Page Load | First Contentful Paint < 1.5s; Time to Interactive < 3s |
| NF6 | Image Optimization | All images in WebP/AVIF format; lazy loading implemented |
| NF7 | Browser Support | No visual bugs in Chrome, Firefox, Safari, Edge (last 2 versions) |

### 9.3 QA Checklist

**Before Launch:**

- [ ] **Navigation**
  - [ ] All links work (no 404s)
  - [ ] Dropdown menus accessible via keyboard
  - [ ] Mobile menu opens/closes correctly
  - [ ] Active state shows on current page

- [ ] **Content**
  - [ ] All text proofread and approved
  - [ ] All images have alt text
  - [ ] All PDFs open correctly
  - [ ] Team member photos display correctly

- [ ] **Forms**
  - [ ] Contact form submits successfully
  - [ ] Validation messages display
  - [ ] Required fields enforced
  - [ ] Success/error states work

- [ ] **Responsive**
  - [ ] Test at 320px, 768px, 1024px, 1440px
  - [ ] No horizontal scroll on any page
  - [ ] Text readable without zooming
  - [ ] Tap targets 44px minimum

- [ ] **Accessibility**
  - [ ] Run axe DevTools (no critical issues)
  - [ ] Keyboard navigation works throughout
  - [ ] Skip link works
  - [ ] Color contrast passes WCAG AA
  - [ ] Screen reader testing (VoiceOver/NVDA)

- [ ] **Performance**
  - [ ] Run Lighthouse audit
  - [ ] Images optimized
  - [ ] Fonts preloaded
  - [ ] No unused CSS/JS

- [ ] **SEO**
  - [ ] Unique title tags on all pages
  - [ ] Meta descriptions present
  - [ ] sitemap.xml generated
  - [ ] robots.txt configured
  - [ ] Canonical URLs set

- [ ] **CMS**
  - [ ] Admin login works
  - [ ] Can create/edit/delete content
  - [ ] Media uploads work
  - [ ] Preview works

---

## Appendix A: File Templates

### A.1 Astro Config

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://burjmodaraba.com',
  integrations: [
    mdx(),
    sitemap(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
```

### A.2 TypeScript Config

```json
// tsconfig.json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@styles/*": ["src/styles/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}
```

### A.3 Navigation Data

```json
// src/data/navigation.json
{
  "main": [
    {
      "label": "Home",
      "href": "/"
    },
    {
      "label": "About Us",
      "href": "/about",
      "children": [
        { "label": "Corporate Information", "href": "/about#company" },
        { "label": "Vision", "href": "/about#vision" },
        { "label": "Mission", "href": "/about#mission" },
        { "label": "Associated Companies", "href": "/about#companies" }
      ]
    },
    {
      "label": "Governance",
      "href": "/governance",
      "children": [
        { "label": "Board of Directors", "href": "/governance#board" },
        { "label": "Management Team", "href": "/governance#management" },
        { "label": "Auditor", "href": "/governance#auditor" },
        { "label": "Shariah Advisor", "href": "/governance#shariah" }
      ]
    },
    {
      "label": "Products",
      "href": "/products",
      "children": [
        { "label": "Commercial & Industrial", "href": "/products#commercial" },
        { "label": "Residential", "href": "/products#residential" }
      ]
    },
    {
      "label": "Projects",
      "href": "/projects"
    },
    {
      "label": "Investor Relations",
      "href": "/investor-relations",
      "children": [
        { "label": "Financial Reports", "href": "/investor-relations#annual-reports" },
        { "label": "Quarterly Reports", "href": "/investor-relations#quarterly" },
        { "label": "Financial Highlights", "href": "/investor-relations#highlights" },
        { "label": "Free Float of Share", "href": "/investor-relations#freefloat" },
        { "label": "Shareholder Pattern", "href": "/investor-relations#shareholders" },
        { "label": "Downloads", "href": "/investor-relations#downloads" }
      ]
    },
    {
      "label": "Media",
      "href": "/news"
    },
    {
      "label": "Contact Us",
      "href": "/contact"
    }
  ],
  "footer": {
    "quickLinks": [
      { "label": "Home", "href": "/" },
      { "label": "About Us", "href": "/about" },
      { "label": "Our Services", "href": "/products" },
      { "label": "Team", "href": "/governance" },
      { "label": "Contact", "href": "/contact" }
    ],
    "legal": [
      { "label": "Privacy Policy", "href": "/privacy" },
      { "label": "Terms of Service", "href": "/terms" }
    ]
  }
}
```

---

## Appendix B: Useful Commands

```bash
# Development
npm run dev           # Start dev server at localhost:4321
npm run build         # Build for production
npm run preview       # Preview production build

# Content
npm run astro sync    # Sync content collections

# Linting & Formatting
npm run format        # Format with Prettier
npm run lint          # Run ESLint

# Deployment
npm run deploy        # Deploy to Netlify (if configured)
```

---

## Appendix C: Resources

- **Astro Documentation:** https://docs.astro.build
- **Decap CMS Documentation:** https://decapcms.org/docs
- **Google Fonts (Inter, Plus Jakarta Sans):** https://fonts.google.com
- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/

---

**Document End**

*This PRD is designed to be used with Cursor IDE's AI features. Reference specific sections when asking for implementation help.*
