# BCEM Website - Technical Specification for Development

## Project Overview

**Stack**: Astro 5.0 (SSG) + Decap CMS + Netlify  
**Design System**: Component-based with design tokens  
**Content**: 3 collections (News, Projects, Investor Documents)  
**Pages**: 8 static pages + dynamic collection pages

---

## 1. Technical Architecture

### Tech Stack
```
Frontend: Astro 5.0 (Static Site Generation)
CMS: Decap CMS v3.x (Git-based)
Hosting: Netlify
Build Tool: Vite (via Astro)
Styling: CSS with design tokens
Content: Markdown with frontmatter
```

### Project Structure
```
/
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Card.astro
│   │   └── Section.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro              # Home
│   │   ├── about.astro
│   │   ├── governance.astro
│   │   ├── products.astro
│   │   ├── projects/
│   │   │   ├── index.astro          # Projects listing
│   │   │   └── [slug].astro         # Individual project
│   │   ├── investors.astro
│   │   ├── news/
│   │   │   ├── index.astro          # News listing
│   │   │   └── [slug].astro         # Individual article
│   │   └── contact.astro
│   ├── content/
│   │   ├── config.ts                # Content collections schema
│   │   ├── news/
│   │   ├── projects/
│   │   └── documents/
│   └── styles/
│       └── tokens.css               # Design tokens
├── public/
│   ├── admin/
│   │   └── config.yml               # Decap CMS config
│   └── images/
└── astro.config.mjs
```

---

## 2. Design Tokens

### Color Palette (Match burjmodaraba.com)
```css
/* src/styles/tokens.css */
:root {
  /* Primary Colors - Green Energy Theme */
  --color-primary-green: #2d5016;      /* Dark forest green */
  --color-primary-light: #4a7c2c;     /* Medium green */
  --color-primary-accent: #6ba83e;    /* Bright green */
  
  /* Secondary Colors - Gold/Finance Theme */
  --color-secondary-gold: #c9a961;     /* Muted gold */
  --color-secondary-light: #e5d4a6;   /* Light gold */
  
  /* Neutrals */
  --color-neutral-900: #1a1a1a;       /* Almost black */
  --color-neutral-700: #4a4a4a;       /* Dark gray */
  --color-neutral-500: #757575;       /* Medium gray */
  --color-neutral-300: #d4d4d4;       /* Light gray */
  --color-neutral-100: #f5f5f5;       /* Off-white */
  --color-white: #ffffff;
  
  /* Semantic Colors */
  --color-success: #4a7c2c;
  --color-warning: #c9a961;
  --color-error: #c92c2c;
  --color-info: #2c5a7c;
  
  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-secondary: 'Merriweather', Georgia, serif;
  
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* Spacing Scale */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.5rem;    /* 24px */
  --space-6: 2rem;      /* 32px */
  --space-8: 3rem;      /* 48px */
  --space-10: 4rem;     /* 64px */
  --space-12: 6rem;     /* 96px */
  --space-16: 8rem;     /* 128px */
  
  /* Layout */
  --container-max-width: 1280px;
  --container-padding: var(--space-4);
  --section-padding-y: var(--space-12);
  
  /* Border Radius */
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 1rem;      /* 16px */
  --radius-full: 9999px;  /* Pill shape */
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
}

/* Dark mode support (optional) */
@media (prefers-color-scheme: dark) {
  :root {
    --color-neutral-900: #f5f5f5;
    --color-neutral-700: #d4d4d4;
    --color-neutral-500: #757575;
    --color-neutral-300: #4a4a4a;
    --color-neutral-100: #1a1a1a;
  }
}
```

---

## 3. Content Collections Schema

### Astro Content Collections Configuration
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string().max(200),
    author: z.string().default('BCEM Team'),
    featured_image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    capacity: z.string(), // e.g., "50 MW"
    location: z.string(),
    status: z.enum(['Planning', 'Under Construction', 'Operational']),
    completion_date: z.date().optional(),
    investment_amount: z.string().optional(),
    description: z.string(),
    images: z.array(z.string()).max(5).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0), // For manual sorting
  }),
});

const documentsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'Annual Report',
      'Financial Statement',
      'Prospectus',
      'Quarterly Report',
      'Other'
    ]),
    date: z.date(),
    file_url: z.string(), // Relative path or external URL
    description: z.string().max(300).optional(),
    file_size: z.string().optional(), // e.g., "2.3 MB"
    published: z.boolean().default(true),
  }),
});

export const collections = {
  news: newsCollection,
  projects: projectsCollection,
  documents: documentsCollection,
};
```

---

## 4. Component Specifications

### Nav Component
```astro
---
// src/components/Nav.astro
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Governance', href: '/governance' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'Investors', href: '/investors' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];
---

<nav class="nav">
  <div class="nav__container">
    <a href="/" class="nav__logo">
      <img src="/images/logo.svg" alt="BCEM Logo" width="120" height="40" />
    </a>
    
    <button class="nav__toggle" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    
    <ul class="nav__menu">
      {navItems.map((item) => (
        <li class="nav__item">
          <a href={item.href} class="nav__link">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
    
    <a href="/investors" class="nav__cta">
      Investor Portal
    </a>
  </div>
</nav>

<style>
  .nav {
    background: var(--color-white);
    border-bottom: 1px solid var(--color-neutral-300);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .nav__container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: var(--space-4);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .nav__logo {
    flex-shrink: 0;
  }
  
  .nav__toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .nav__menu {
    display: flex;
    gap: var(--space-6);
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav__link {
    color: var(--color-neutral-700);
    text-decoration: none;
    font-weight: var(--font-weight-medium);
    transition: color var(--transition-fast);
  }
  
  .nav__link:hover {
    color: var(--color-primary-green);
  }
  
  .nav__cta {
    background: var(--color-primary-green);
    color: var(--color-white);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-md);
    text-decoration: none;
    font-weight: var(--font-weight-semibold);
    transition: background var(--transition-fast);
  }
  
  .nav__cta:hover {
    background: var(--color-primary-light);
  }
  
  /* Mobile styles */
  @media (max-width: 768px) {
    .nav__toggle {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .nav__toggle span {
      width: 24px;
      height: 2px;
      background: var(--color-neutral-700);
      transition: all var(--transition-fast);
    }
    
    .nav__menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--color-white);
      flex-direction: column;
      padding: var(--space-4);
      box-shadow: var(--shadow-lg);
    }
    
    .nav__menu.is-open {
      display: flex;
    }
    
    .nav__cta {
      margin-top: var(--space-4);
    }
  }
</style>

<script>
  // Mobile menu toggle
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  
  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('is-open');
  });
</script>
```

### Footer Component
```astro
---
// src/components/Footer.astro
const currentYear = new Date().getFullYear();
---

<footer class="footer">
  <div class="footer__container">
    <div class="footer__grid">
      <!-- Company Info -->
      <div class="footer__section">
        <h3 class="footer__heading">Burj Clean Energy Modaraba</h3>
        <p class="footer__text">
          Pakistan's first Shariah-compliant green energy investment fund,
          promoting sustainable energy solutions.
        </p>
      </div>
      
      <!-- Quick Links -->
      <div class="footer__section">
        <h4 class="footer__heading">Quick Links</h4>
        <ul class="footer__links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/governance">Governance</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </div>
      
      <!-- Investors -->
      <div class="footer__section">
        <h4 class="footer__heading">For Investors</h4>
        <ul class="footer__links">
          <li><a href="/investors">Investor Relations</a></li>
          <li><a href="/investors#reports">Financial Reports</a></li>
          <li><a href="/investors#disclosures">Disclosures</a></li>
          <li><a href="/contact">Contact IR Team</a></li>
        </ul>
      </div>
      
      <!-- Contact -->
      <div class="footer__section">
        <h4 class="footer__heading">Contact</h4>
        <address class="footer__address">
          <p>Email: info@burjmodaraba.com</p>
          <p>Phone: +92 (21) XXXX-XXXX</p>
          <p>Address: [Office Address]</p>
        </address>
      </div>
    </div>
    
    <div class="footer__bottom">
      <p>&copy; {currentYear} Burj Clean Energy Modaraba. All rights reserved.</p>
      <div class="footer__legal">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--color-neutral-900);
    color: var(--color-neutral-100);
    padding: var(--space-12) 0 var(--space-6);
  }
  
  .footer__container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
  }
  
  .footer__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-8);
    margin-bottom: var(--space-8);
  }
  
  .footer__heading {
    color: var(--color-white);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    margin-bottom: var(--space-4);
  }
  
  .footer__text {
    color: var(--color-neutral-300);
    line-height: var(--line-height-relaxed);
  }
  
  .footer__links {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer__links li {
    margin-bottom: var(--space-2);
  }
  
  .footer__links a {
    color: var(--color-neutral-300);
    text-decoration: none;
    transition: color var(--transition-fast);
  }
  
  .footer__links a:hover {
    color: var(--color-primary-accent);
  }
  
  .footer__address {
    font-style: normal;
    color: var(--color-neutral-300);
  }
  
  .footer__address p {
    margin-bottom: var(--space-2);
  }
  
  .footer__bottom {
    border-top: 1px solid var(--color-neutral-700);
    padding-top: var(--space-6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-4);
  }
  
  .footer__legal {
    display: flex;
    gap: var(--space-4);
  }
  
  .footer__legal a {
    color: var(--color-neutral-300);
    text-decoration: none;
    transition: color var(--transition-fast);
  }
  
  .footer__legal a:hover {
    color: var(--color-primary-accent);
  }
  
  @media (max-width: 768px) {
    .footer__bottom {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
```

### Card Component
```astro
---
// src/components/Card.astro
interface Props {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  tag?: string;
  variant?: 'default' | 'horizontal' | 'minimal';
}

const { 
  title, 
  description, 
  image, 
  href, 
  tag,
  variant = 'default' 
} = Astro.props;

const Tag = href ? 'a' : 'div';
---

<Tag class={`card card--${variant}`} href={href}>
  {image && (
    <div class="card__image">
      <img src={image} alt={title} loading="lazy" />
    </div>
  )}
  
  <div class="card__content">
    {tag && <span class="card__tag">{tag}</span>}
    <h3 class="card__title">{title}</h3>
    {description && <p class="card__description">{description}</p>}
    
    <slot />
  </div>
</Tag>

<style>
  .card {
    background: var(--color-white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
    display: flex;
    flex-direction: column;
  }
  
  a.card {
    text-decoration: none;
    color: inherit;
  }
  
  a.card:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-4px);
  }
  
  .card__image {
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }
  
  .card__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }
  
  a.card:hover .card__image img {
    transform: scale(1.05);
  }
  
  .card__content {
    padding: var(--space-5);
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .card__tag {
    display: inline-block;
    padding: var(--space-1) var(--space-3);
    background: var(--color-primary-accent);
    color: var(--color-white);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    border-radius: var(--radius-full);
    margin-bottom: var(--space-3);
    width: fit-content;
  }
  
  .card__title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    color: var(--color-neutral-900);
    margin-bottom: var(--space-3);
    line-height: var(--line-height-tight);
  }
  
  .card__description {
    color: var(--color-neutral-700);
    line-height: var(--line-height-normal);
    flex: 1;
  }
  
  /* Horizontal variant */
  .card--horizontal {
    flex-direction: row;
  }
  
  .card--horizontal .card__image {
    width: 40%;
    aspect-ratio: 1 / 1;
  }
  
  .card--horizontal .card__content {
    width: 60%;
  }
  
  /* Minimal variant */
  .card--minimal {
    box-shadow: none;
    border: 1px solid var(--color-neutral-300);
  }
  
  .card--minimal:hover {
    box-shadow: var(--shadow-md);
  }
  
  @media (max-width: 768px) {
    .card--horizontal {
      flex-direction: column;
    }
    
    .card--horizontal .card__image {
      width: 100%;
      aspect-ratio: 16 / 9;
    }
    
    .card--horizontal .card__content {
      width: 100%;
    }
  }
</style>
```

### Hero Component
```astro
---
// src/components/Hero.astro
interface Props {
  title: string;
  subtitle?: string;
  image?: string;
  cta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

const { title, subtitle, image, cta, secondaryCta } = Astro.props;
---

<section class="hero" style={image ? `background-image: url(${image});` : ''}>
  <div class="hero__overlay"></div>
  
  <div class="hero__container">
    <div class="hero__content">
      <h1 class="hero__title">{title}</h1>
      
      {subtitle && <p class="hero__subtitle">{subtitle}</p>}
      
      {(cta || secondaryCta) && (
        <div class="hero__actions">
          {cta && (
            <a href={cta.href} class="hero__button hero__button--primary">
              {cta.text}
            </a>
          )}
          
          {secondaryCta && (
            <a href={secondaryCta.href} class="hero__button hero__button--secondary">
              {secondaryCta.text}
            </a>
          )}
        </div>
      )}
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-color: var(--color-primary-green);
  }
  
  .hero__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(45, 80, 22, 0.9) 0%,
      rgba(74, 124, 44, 0.7) 100%
    );
  }
  
  .hero__container {
    position: relative;
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: var(--space-12) var(--container-padding);
    width: 100%;
  }
  
  .hero__content {
    max-width: 700px;
  }
  
  .hero__title {
    color: var(--color-white);
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-4);
  }
  
  .hero__subtitle {
    color: var(--color-neutral-100);
    font-size: var(--font-size-xl);
    line-height: var(--line-height-relaxed);
    margin-bottom: var(--space-6);
  }
  
  .hero__actions {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
  }
  
  .hero__button {
    display: inline-block;
    padding: var(--space-4) var(--space-6);
    border-radius: var(--radius-md);
    font-weight: var(--font-weight-semibold);
    text-decoration: none;
    transition: all var(--transition-base);
  }
  
  .hero__button--primary {
    background: var(--color-secondary-gold);
    color: var(--color-neutral-900);
  }
  
  .hero__button--primary:hover {
    background: var(--color-secondary-light);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .hero__button--secondary {
    background: transparent;
    color: var(--color-white);
    border: 2px solid var(--color-white);
  }
  
  .hero__button--secondary:hover {
    background: var(--color-white);
    color: var(--color-primary-green);
  }
  
  @media (max-width: 768px) {
    .hero {
      min-height: 400px;
    }
    
    .hero__title {
      font-size: var(--font-size-3xl);
    }
    
    .hero__subtitle {
      font-size: var(--font-size-lg);
    }
    
    .hero__actions {
      flex-direction: column;
    }
    
    .hero__button {
      text-align: center;
    }
  }
</style>
```

### Section Component
```astro
---
// src/components/Section.astro
interface Props {
  variant?: 'default' | 'light' | 'dark';
  spacing?: 'default' | 'compact' | 'spacious';
}

const { 
  variant = 'default',
  spacing = 'default'
} = Astro.props;
---

<section class={`section section--${variant} section--${spacing}`}>
  <div class="section__container">
    <slot />
  </div>
</section>

<style>
  .section {
    padding: var(--section-padding-y) 0;
  }
  
  .section__container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
  }
  
  /* Variants */
  .section--default {
    background: var(--color-white);
  }
  
  .section--light {
    background: var(--color-neutral-100);
  }
  
  .section--dark {
    background: var(--color-neutral-900);
    color: var(--color-white);
  }
  
  /* Spacing */
  .section--compact {
    padding: var(--space-8) 0;
  }
  
  .section--spacious {
    padding: var(--space-16) 0;
  }
</style>
```

---

## 5. Decap CMS Configuration

### CMS Config File
```yaml
# public/admin/config.yml
backend:
  name: git-gateway
  branch: main

media_folder: "public/images"
public_folder: "/images"

collections:
  - name: "news"
    label: "News Articles"
    folder: "src/content/news"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Publish Date", name: "date", widget: "datetime" }
      - { label: "Excerpt", name: "excerpt", widget: "text", required: false }
      - { label: "Author", name: "author", widget: "string", default: "BCEM Team" }
      - { label: "Featured Image", name: "featured_image", widget: "image", required: false }
      - { label: "Tags", name: "tags", widget: "list", required: false }
      - { label: "Published", name: "published", widget: "boolean", default: true }
      - { label: "Body", name: "body", widget: "markdown" }
  
  - name: "projects"
    label: "Projects"
    folder: "src/content/projects"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Capacity", name: "capacity", widget: "string", hint: "e.g., 50 MW" }
      - { label: "Location", name: "location", widget: "string" }
      - { label: "Status", name: "status", widget: "select", options: ["Planning", "Under Construction", "Operational"] }
      - { label: "Completion Date", name: "completion_date", widget: "datetime", required: false }
      - { label: "Investment Amount", name: "investment_amount", widget: "string", required: false }
      - { label: "Description", name: "description", widget: "markdown" }
      - { label: "Images", name: "images", widget: "list", field: { label: "Image", name: "image", widget: "image" }, max: 5 }
      - { label: "Featured", name: "featured", widget: "boolean", default: false }
      - { label: "Display Order", name: "order", widget: "number", default: 0 }
  
  - name: "documents"
    label: "Investor Documents"
    folder: "src/content/documents"
    create: true
    extension: "json"
    slug: "{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Category", name: "category", widget: "select", options: ["Annual Report", "Financial Statement", "Prospectus", "Quarterly Report", "Other"] }
      - { label: "Date", name: "date", widget: "datetime" }
      - { label: "File URL", name: "file_url", widget: "file" }
      - { label: "Description", name: "description", widget: "text", required: false }
      - { label: "File Size", name: "file_size", widget: "string", required: false, hint: "e.g., 2.3 MB" }
      - { label: "Published", name: "published", widget: "boolean", default: true }
```

---

## 6. Base Layout

```astro
---
// src/layouts/BaseLayout.astro
import Nav from '../components/Nav.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title: string;
  description?: string;
  image?: string;
}

const { 
  title, 
  description = 'Pakistan\'s first Shariah-compliant green energy investment fund',
  image = '/images/og-default.jpg'
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>{title} | BCEM</title>
  <meta name="description" content={description} />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={new URL(image, Astro.site)} />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={new URL(image, Astro.site)} />
  
  <!-- Canonical -->
  <link rel="canonical" href={canonicalURL} />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
  
  <!-- Styles -->
  <link rel="stylesheet" href="/styles/tokens.css" />
</head>
<body>
  <Nav />
  
  <main>
    <slot />
  </main>
  
  <Footer />
</body>
</html>

<style is:global>
  /* Global Resets */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: var(--font-primary);
    font-size: var(--font-size-base);
    line-height: var(--line-height-normal);
    color: var(--color-neutral-900);
    background: var(--color-white);
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  a {
    color: var(--color-primary-green);
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-4);
  }
  
  h1 {
    font-size: var(--font-size-4xl);
  }
  
  h2 {
    font-size: var(--font-size-3xl);
  }
  
  h3 {
    font-size: var(--font-size-2xl);
  }
  
  h4 {
    font-size: var(--font-size-xl);
  }
  
  p {
    margin-bottom: var(--space-4);
  }
  
  /* Utilities */
  .container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
```

---

## 7. Development Tasks Checklist

### Current Status (Completed)
- [x] Astro 5.0 project initialized
- [x] Design token system created
- [x] Core components built (Nav, Footer, Card, Hero, Section)
- [x] Content collections schema defined
- [x] Base layout created

### In Progress
- [ ] Resolve Decap CMS React 18 hydration errors
- [ ] Configure `/admin` route with Decap CMS
- [ ] Test CMS admin interface functionality

### Next Steps
- [ ] Create all 8 page templates
- [ ] Set up Netlify deployment
- [ ] Implement image optimization
- [ ] Add form handling (contact form)
- [ ] Set up redirect rules in `netlify.toml`

---

## 8. Build & Deployment

### Local Development
```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build
```

### Netlify Configuration
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/old-url"
  to = "/new-url"
  status = 301
  force = true

[build.environment]
  NODE_VERSION = "18"
```

### Environment Variables (if needed)
```
# .env
PUBLIC_SITE_URL=https://burjmodaraba.com
```

---

## 9. Performance Requirements

- **Lighthouse Score**: Performance 90+, Accessibility 95+
- **Image Optimization**: WebP format, <200KB per image
- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1
- **Bundle Size**: Keep JS minimal (Astro ships zero JS by default)

---

## 10. Accessibility Requirements

- Semantic HTML (proper heading hierarchy)
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Alt text for all images
- Color contrast ratios 4.5:1 minimum (WCAG AA)

---

**Document Version**: 1.0 (Developer Handoff)  
**Last Updated**: January 21, 2026  
**For Use With**: Cursor IDE / AI-assisted development
