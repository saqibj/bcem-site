# TASKMASTER-READY PRD
# Burj Clean Energy Modaraba Website Rebuild

**Project:** BCEM Website Redesign (WordPress → Astro 5.x + Decap CMS)  
**Timeline:** 5 weeks, ~40 hours  
**Target:** 90+ Lighthouse scores, mobile-first, CMS-editable  

---

## MUST-DO VS. NICE-TO-HAVE

### MUST-DO (Blocking)

- [x] Content audit complete + approved (Week 1)
- [x] All 8 pages built and responsive (Weeks 1–2)
- [x] All content migrated (Week 3)
- [x] CMS functional and tested (Week 3–4)
- [x] Lighthouse 90+ on all metrics (Week 4)
- [x] WCAG 2.1 AA accessibility (Week 4)
- [x] All old URLs redirect correctly (Week 5)
- [x] Production deployment live (Week 5)

### NICE-TO-HAVE (Optional, post-launch)

- [ ] Advanced analytics dashboard
- [ ] Email notification system for new news posts
- [ ] Social media feed integration
- [ ] Blog commenting system

---

## SCOPE

### What's Included

- 8 new pages (Home, About, Governance, Products, Projects, Investor Relations, News, Contact)
- 3 content collections (News, Projects, Team)
- Full CMS for content editing
- Mobile-responsive design
- Performance optimization (< 2s load time)
- All content migrated from WordPress
- All old URLs redirect to new site
- SEO-optimized (sitemap, robots.txt, meta tags)

### What's NOT Included

- Email notification system
- Advanced analytics dashboard
- Blog comments / social engagement features
- User login system
- Payment processing
- Third-party integrations (beyond contact form)

---

## STAKEHOLDERS & ROLES

| Role | Approval | Tasks |
|------|----------|-------|
| **Dev Lead** | Phase sign-offs, technical decisions | Build all phases, deploy |
| **Product Owner** | Design direction, launch go/no-go | Manage priorities, approvals |
| **Content Team** | Content audit, final proofing | Migrate content, populate CMS |
| **QA** | QA checklist, acceptance criteria | Test all pages, validate accessibility |
| **Management** | Budget, launch approval | Final sign-off |

---

## PHASE BREAKDOWN (Task-Ready)

### PHASE 0: Content Audit (1 day) — BLOCKING

**Owner:** Content Team  
**Approval Gate:** Management sign-off

**Tasks:**
- [ ] T0.1 Export all WordPress news posts (CSV format)
- [ ] T0.2 Export all WordPress projects (CSV format)
- [ ] T0.3 Export all team member data (CSV format)
- [ ] T0.4 List all investor PDFs (by year, type)
- [ ] T0.5 Verify all content is current and accurate
- [ ] T0.6 Management approves content audit

**Deliverable:** Content audit report + migration checklist

---

### PHASE 1: Project Setup & Environment (5 hours)

**Owner:** Dev Lead  
**Approval Gate:** Dev team confirms localhost running

**Tasks:**
- [ ] T1.1 Init Astro 5.x project locally
- [ ] T1.2 Create GitHub repository
- [ ] T1.3 Install dependencies (astro, mdx, sitemap, sharp, decap-cms)
- [ ] T1.4 Set up TypeScript paths: @/*, @components/*, @layouts/*, @styles/*, @utils/*
- [ ] T1.5 Create full project structure (components, layouts, pages, content, styles)
- [ ] T1.6 Verify localhost dev server running at 4321

**Deliverable:** Working localhost; all project files in place

---

### PHASE 2: Design System & Base Styles (8 hours)

**Owner:** Dev Lead  
**Approval Gate:** Design review

**Tasks:**
- [ ] T2.1 Create CSS tokens file (colors, typography, spacing, grid)
- [ ] T2.2 Add color scale (primary green, secondary gold, neutral palette)
- [ ] T2.3 Add typography scale (Inter, Plus Jakarta Sans, sizes/weights)
- [ ] T2.4 Add spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px)
- [ ] T2.5 Create responsive grid (mobile 4-col, tablet 8-col, desktop 12-col)
- [ ] T2.6 Create CSS reset + global styles
- [ ] T2.7 Create utility classes (margin, padding, flex, grid helpers)
- [ ] T2.8 Document all tokens in README

**Deliverable:** Complete design system; all tokens in src/styles/tokens.css

---

### PHASE 3: Global Components (8 hours)

**Owner:** Dev Lead  
**Approval Gate:** Component review + accessibility audit

**Tasks:**
- [ ] T3.1 Build Header component (logo, nav area)
- [ ] T3.2 Build Navigation component (8-item main menu with dropdowns)
- [ ] T3.3 Build MobileMenu component (hamburger, full-screen nav, close button)
- [ ] T3.4 Build Footer component (links, contact, copyright)
- [ ] T3.5 Build Button component (primary, secondary, tertiary variants)
- [ ] T3.6 Build Card component (generic reusable card)
- [ ] T3.7 Build SectionHeading component (title + subtitle + accent line)
- [ ] T3.8 Test all components for accessibility (keyboard nav, screen reader, color contrast)

**Deliverable:** 7 global components; all accessible and responsive

---

### PHASE 4: Page Templates & Sections (12 hours)

**Owner:** Dev Lead  
**Approval Gate:** Design + product owner approval

**Tasks:**
- [ ] T4.1 Create BaseLayout wrapper (Header + Footer + page content)
- [ ] T4.2 Create PageLayout (for static pages like About, Products)
- [ ] T4.3 Create ArticleLayout (for news + project detail pages)
- [ ] T4.4 Build Home page (Hero + Stats + Services + Projects + News + CTA)
- [ ] T4.5 Build About page (Hero + Company + Vision/Mission + Associated Companies)
- [ ] T4.6 Build Governance page (Board + Management + Auditor + Shariah Advisor)
- [ ] T4.7 Build Products page (Service grid + features + CTA)
- [ ] T4.8 Build Projects archive page (grid + filter by category)
- [ ] T4.9 Build Investor Relations page (Reports + Highlights + Downloads)
- [ ] T4.10 Build News archive page (chronological list + filter)
- [ ] T4.11 Build Contact page (form + location + phone/email)
- [ ] T4.12 Create section components (Hero, StatsGrid, ProjectsShowcase, NewsPreview, CTASection)

**Deliverable:** 8 pages + section components; all responsive at 320px, 768px, 1024px, 1440px

---

### PHASE 5: Content Collections & Migration (10 hours)

**Owner:** Dev Lead + Content Team  
**Approval Gate:** Content Team sign-off on migration

**Tasks:**
- [ ] T5.1 Define Zod schema for News collection (title, date, excerpt, content, category, image)
- [ ] T5.2 Define Zod schema for Projects collection (title, description, category, images)
- [ ] T5.3 Define Zod schema for Team collection (name, title, department, bio, photo, linkedin)
- [ ] T5.4 Define Zod schema for Documents collection (title, type, year, url, description)
- [ ] T5.5 Set up Astro content collections (src/content/config.ts)
- [ ] T5.6 Export WordPress content → JSON format
- [ ] T5.7 Convert JSON → Markdown + YAML frontmatter for News
- [ ] T5.8 Convert JSON → Markdown + YAML frontmatter for Projects
- [ ] T5.9 Convert JSON → Markdown + YAML frontmatter for Team
- [ ] T5.10 Create dynamic routes: pages/news/[slug].astro, pages/projects/[slug].astro
- [ ] T5.11 Test all content collections display correctly
- [ ] T5.12 Implement content filtering (by date, category)

**Deliverable:** All content migrated; dynamic pages working

---

### PHASE 6: CMS Integration & Testing (8 hours)

**Owner:** Dev Lead + Content Team  
**Approval Gate:** Content Team confirms CMS workflow

**Tasks:**
- [ ] T6.1 Create Decap CMS config (collections, fields, media settings)
- [ ] T6.2 Create public/admin/index.html entry point
- [ ] T6.3 Set up GitHub authentication (Netlify Git Gateway)
- [ ] T6.4 Test content creation workflow (create new news post)
- [ ] T6.5 Test content editing workflow (edit existing post)
- [ ] T6.6 Test media upload (images for posts)
- [ ] T6.7 Test preview functionality
- [ ] T6.8 Create editorial documentation for content team

**Deliverable:** CMS functional at /admin; content team can publish content

**RISK:** If Decap CMS has compatibility issues → use Netlify CMS v2.10.0 fallback or markdown editing workflow

---

### PHASE 7: Accessibility & Performance (8 hours)

**Owner:** Dev Lead  
**Approval Gate:** Lighthouse 90+ on all metrics; axe DevTools zero critical issues

**Tasks:**
- [ ] T7.1 Add skip-to-content link on all pages
- [ ] T7.2 Verify semantic HTML (proper heading hierarchy h1 → h6)
- [ ] T7.3 Test keyboard navigation (Tab, Shift+Tab, Enter, Escape)
- [ ] T7.4 Test with screen reader (VoiceOver/NVDA)
- [ ] T7.5 Optimize all images to WebP/AVIF format
- [ ] T7.6 Implement lazy loading for images
- [ ] T7.7 Preload critical fonts (Inter, Plus Jakarta Sans)
- [ ] T7.8 Minimize CSS/JS payloads
- [ ] T7.9 Run axe DevTools audit (target: zero critical + serious issues)
- [ ] T7.10 Run Lighthouse audit (target: 90+ on Performance, Accessibility, Best Practices, SEO)

**Deliverable:** Lighthouse report 90+; axe DevTools report clean

---

### PHASE 8: QA, Testing & Launch (15 hours)

**Owner:** QA + Dev Lead  
**Approval Gate:** All QA checklists passed; management launch approval

**Tasks:**
- [ ] T8.1 Cross-browser testing (Chrome, Firefox, Safari, Edge — last 2 versions)
- [ ] T8.2 Mobile device testing (iOS Safari, Chrome Android)
- [ ] T8.3 Form validation testing (all required fields, error states)
- [ ] T8.4 PDF download testing (all investor documents)
- [ ] T8.5 Link integrity audit (no broken links, 404s)
- [ ] T8.6 Create _redirects file for all old WordPress URLs
- [ ] T8.7 Configure robots.txt + sitemap.xml
- [ ] T8.8 Final content proofing by Content Team
- [ ] T8.9 Deploy to Netlify production
- [ ] T8.10 Post-launch smoke test (all pages load, content visible)
- [ ] T8.11 Monitor production for errors (24 hours)

**Deliverable:** Production site live; all QA checklists passed

---

## KNOWN ISSUES & WORKAROUNDS

### Decap CMS React 18 Compatibility

**Issue:** Decap CMS has known compatibility issues with React 18 in local development.  
**Impact:** CMS interface may not load in localhost `/admin` during Phase 6.  
**Workaround:**
1. Test early in Phase 6 (don't wait until end)
2. If issues occur, switch to Netlify CMS v2.10.0 (alternative Git-based CMS)
3. Or use markdown-first workflow: developers edit content locally, commit to GitHub

**Timeline Impact:** +2 hours if workaround needed

---

## CONTENT AUDIT REQUIREMENTS

**Before Development Starts, Complete:**

1. **Export all news posts from WordPress**
   - Format: CSV with columns: Title, Date, Excerpt, Content, Category, Author, Featured Image URL
   - Expected volume: [TO BE FILLED]

2. **Export all projects from WordPress**
   - Format: CSV with columns: Title, Description, Category, Location, Status, Image URLs
   - Expected volume: [TO BE FILLED]

3. **Export all team member info**
   - Format: CSV with columns: Name, Title, Department, Bio, Photo URL, LinkedIn URL (optional)
   - Expected volume: [TO BE FILLED]

4. **List all investor PDFs**
   - Format: CSV with columns: Title, Type (Annual Report, Quarterly, Highlight), Year, File Name, File Size
   - Expected volume: [TO BE FILLED]

5. **Management sign-off**
   - All content verified for accuracy and completeness

---

## SUCCESS CRITERIA (Taskmaster-Parseable)

**Must Pass Before Launch:**

- [x] Lighthouse audit: Performance 90+, Accessibility 95+, SEO 90+, Best Practices 90+
- [x] Page load time: First Contentful Paint < 1.5s
- [x] All 8 pages responsive on 320px, 768px, 1024px, 1440px
- [x] Keyboard navigation works on all pages (Tab, Shift+Tab, Enter, Escape)
- [x] axe DevTools: zero critical issues
- [x] WCAG 2.1 AA color contrast passes
- [x] All links work (no 404s)
- [x] All forms submit correctly
- [x] All PDFs download correctly
- [x] CMS login works + content can be created/edited/deleted
- [x] All old WordPress URLs redirect to new site (301 permanent)
- [x] Production deployment successful
- [x] Post-launch monitoring 24+ hours with zero critical errors

---

## COMMUNICATION CADENCE

| Meeting | Frequency | Attendees | Duration |
|---------|-----------|-----------|----------|
| Standup | Daily | Dev + Product Owner | 15 min |
| Design Review | 1x per week | Dev + Product Owner + Design | 30 min |
| Content Review | 2x per week | Dev + Content Team + QA | 30 min |
| Launch Readiness | Week 5, Day 4 | All stakeholders | 30 min |

---

## SIGN-OFF CHECKLIST

### Phase Approvals Required

- [ ] **Phase 0:** Content Audit approved by Management
- [ ] **Phase 2:** Design System reviewed by Design
- [ ] **Phase 4:** Page Templates approved by Product Owner
- [ ] **Phase 6:** CMS workflow approved by Content Team
- [ ] **Phase 8:** QA sign-off + Launch approval by Management

---

**END OF TASKMASTER-READY PRD**

*This document is optimized for AI task parsing and Asana/linear integration. Each task has a unique ID (T#.#) for tracking and automation.*
