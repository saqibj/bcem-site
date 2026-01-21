# BCEM Website Rebuild PRD

## 1. Executive Summary

**Project**: Burj Clean Energy Modaraba corporate website rebuild  
**Timeline**: February 3 - March 9, 2026 (5 weeks)  
**Goal**: Migrate from WordPress to modern static architecture (Astro 5.0 + Decap CMS)  
**Success Metrics**: 
- 90+ Lighthouse performance score
- Zero broken URLs or missing content
- All 47 existing pages migrated with proper redirects
- CMS workflow operational for non-technical editors

**Key Constraint**: Preserve green/gold branding and Islamic finance trust signals

---

## 2. Technical Stack

**Frontend Framework**: Astro 5.0 (SSG mode)  
**CMS**: Decap CMS v3.x (Git-based, admin at `/admin`)  
**Hosting**: Netlify (static hosting + form handling)  
**Content Collections**: 3 (News, Projects, Investor Documents)  
**Design System**: Component library with design tokens  
**Development Environment**: Windows + Cursor IDE + local Ollama AI

**Build Pipeline**:
```
git push → Netlify build hook → Astro build → Deploy to CDN
```

**Current State**: ✅ Dev environment configured, site launches on localhost:4321

---

## 3. Content Architecture

### Site Structure (8 Core Pages)
```
Home (/)
├── About (/about)
├── Governance (/governance)
├── Products (/products)
├── Projects (/projects)          ← Dynamic collection
├── Investor Relations (/investors)
├── Media & News (/news)          ← Dynamic collection
└── Contact (/contact)
```

### Content Collections (3)
1. **News** (`src/content/news/`)
   - Fields: title, date, excerpt, body, featured_image
   - ~20 existing articles to migrate

2. **Projects** (`src/content/projects/`)
   - Fields: title, capacity, location, status, description, images[]
   - ~8 existing projects to migrate

3. **Investor Documents** (`src/content/documents/`)
   - Fields: title, category, date, file_url, description
   - ~15 PDFs to organize

### Content Migration Scope
- **WordPress posts** → News collection
- **WordPress pages** → Static Astro pages
- **Media library** → `/public/images/` with optimized WebP versions

---

## 4. Phase Breakdown

### **Phase 1: Foundation Setup** (Feb 3-9, 2026)
**Goal**: Production-ready development environment + core design system

**Tasks**:
- [x] Configure Astro 5.0 project with content collections *(COMPLETED)*
- [x] Set up design token system (colors, typography, spacing) *(COMPLETED)*
- [x] Build component library: Nav, Footer, Card, Section, Hero *(COMPLETED)*
- [ ] Resolve Decap CMS React 18 hydration errors
- [ ] Configure Decap CMS admin interface at `/admin`
- [ ] Set up Netlify deployment pipeline
- [ ] Create page templates for all 8 core pages

**Acceptance Criteria**:
- ✅ `npm run dev` launches without errors (localhost:4321)
- ✅ All 5 core components render correctly in browser
- ✅ Design tokens match burjmodaraba.com color scheme
- ⏳ `/admin` route loads Decap CMS without DOM errors
- ⏳ Test deploy succeeds on Netlify staging URL
- ⏳ All 8 page templates render with placeholder content

**Blockers**: 
- Decap CMS v3 React 18 compatibility issues (investigating Netlify CMS v2.10 as fallback)

**Dependencies**: Blocks Phase 2 (need working CMS before content migration)

---

### **Phase 2: Content Migration** (Feb 10-23, 2026)
**Goal**: All existing content migrated with proper structure and redirects

#### **Week 1: Content Extraction & Audit** (Feb 10-16)
**Tasks**:
- [ ] Export WordPress content (posts, pages, media) using WP export tool
- [ ] Audit all 47 existing URLs and create redirect mapping table
- [ ] Extract and organize media assets (optimize images → WebP)
- [ ] Create content models in Decap CMS config
- [ ] Set up 3 content collections with proper frontmatter schemas

**Acceptance Criteria**:
- ✅ WordPress export XML file downloaded successfully
- ✅ Redirect mapping CSV complete (old URL → new URL, 301 status)
- ✅ All images converted to WebP with <200KB file sizes
- ✅ Decap CMS collections defined in `config.yml`
- ✅ Test content entry created in each collection via admin UI

#### **Week 2: Content Population** (Feb 17-23)
**Tasks**:
- [ ] Migrate 20 news articles to News collection
- [ ] Migrate 8 projects to Projects collection
- [ ] Organize 15 investor PDFs in Documents collection
- [ ] Populate 8 core static pages with final copy
- [ ] Review all migrated content for formatting issues
- [ ] Implement URL redirects in `netlify.toml`

**Acceptance Criteria**:
- ✅ All news articles display correctly on `/news` page
- ✅ All projects show on `/projects` with proper filtering
- ✅ Investor documents organized by category (Annual Reports, Financials, etc.)
- ✅ Static pages match WordPress content 1:1 (no missing sections)
- ✅ Old URLs redirect properly (test with 10 sample URLs)
- ✅ No broken internal links (run link checker)

**Dependencies**: 
- Requires Phase 1 completion (working CMS)
- PDF organization structure from Investor Relations review

---

### **Phase 3: Polish & Testing** (Feb 24 - Mar 2, 2026)
**Goal**: Production-ready quality with full QA sign-off

**Tasks**:
- [ ] Run accessibility audit (WCAG 2.1 AA compliance)
- [ ] Test all forms (contact form, investor inquiry form)
- [ ] Verify mobile responsiveness on 3 device sizes
- [ ] Run Lighthouse audits (target: 90+ all categories)
- [ ] Test CMS workflow with non-technical user
- [ ] Fix any bugs identified in QA
- [ ] Optimize Core Web Vitals (LCP, FID, CLS)
- [ ] Set up monitoring (uptime, performance)

**Acceptance Criteria**:
- ✅ Zero critical accessibility violations (aXe/WAVE scan)
- ✅ All forms submit successfully and send notifications
- ✅ Site renders correctly on mobile (375px), tablet (768px), desktop (1440px)
- ✅ Lighthouse scores: Performance 90+, Accessibility 95+, Best Practices 100, SEO 100
- ✅ Non-technical user can create/edit/publish content via CMS
- ✅ All P1 and P2 bugs resolved (P3 bugs documented for post-launch)
- ✅ LCP <2.5s, FID <100ms, CLS <0.1
- ✅ Uptime monitoring configured with alerts

**Dependencies**: Requires Phase 2 completion (all content migrated)

---

### **Phase 4: Launch & Handoff** (Mar 3-9, 2026)
**Goal**: Live production site with smooth DNS cutover

**Tasks**:
- [ ] Final stakeholder review and approval
- [ ] Configure production domain DNS settings
- [ ] Set up SSL certificate on Netlify
- [ ] Update DNS records to point to Netlify
- [ ] Monitor site for 24 hours post-launch
- [ ] Submit sitemap to Google Search Console
- [ ] Create CMS user documentation (video + written guide)
- [ ] Schedule training session for content editors
- [ ] Archive old WordPress site (keep backup)

**Acceptance Criteria**:
- ✅ Stakeholders approve final site in staging environment
- ✅ Production domain (burjmodaraba.com) resolves to new site
- ✅ SSL certificate active (https://) with no warnings
- ✅ DNS propagation complete (check from 3 global locations)
- ✅ Zero 4xx/5xx errors in first 24 hours (monitor logs)
- ✅ Site indexed by Google (check via site:burjmodaraba.com)
- ✅ CMS documentation includes: how to add news, edit pages, upload PDFs
- ✅ 2 content editors trained and can perform basic tasks independently
- ✅ WordPress backup stored securely with access instructions

**Go-Live Checklist**:
- [ ] Announce maintenance window to stakeholders
- [ ] Test staging site one final time
- [ ] Update DNS records (TTL set to 300 for quick rollback)
- [ ] Monitor traffic and error logs
- [ ] Send "site is live" notification to team

**Dependencies**: Requires Phase 3 sign-off (all QA passed)

---

## 5. Redirect Strategy

### Redirect Rules Format (Netlify)
```toml
# netlify.toml
[[redirects]]
  from = "/old-wordpress-url"
  to = "/new-astro-url"
  status = 301
  force = true
```

### High-Priority Redirects (Examples)
| Old WordPress URL | New Astro URL | Notes |
|-------------------|---------------|-------|
| `/blog/post-slug` | `/news/post-slug` | Category rename |
| `/category/news/` | `/news` | Archive page |
| `/wp-content/uploads/2024/report.pdf` | `/documents/2024-report.pdf` | Media migration |

**Full Mapping**: See `redirect-mapping.csv` (generated in Phase 2, Week 1)

**Testing**: Use redirect checker tool to verify all 47 old URLs return 301 status

---

## 6. CMS Requirements

### Decap CMS Configuration
**Admin Route**: `/admin` (public access, GitHub OAuth for authentication)  
**Backend**: Git Gateway (commits to repository on publish)  
**Media Storage**: `/public/images/` folder (relative path in frontmatter)

### Collection Schemas

#### **News Collection**
```yaml
# src/content/config.ts (simplified)
news:
  - title: string (required)
  - date: datetime (required)
  - excerpt: text (200 char max)
  - body: markdown (required)
  - featured_image: image (optional)
  - author: string (default: "BCEM Team")
```

#### **Projects Collection**
```yaml
projects:
  - title: string (required)
  - capacity: string (e.g., "50 MW")
  - location: string (required)
  - status: select (Planning | Under Construction | Operational)
  - description: markdown (required)
  - images: array[image] (max 5)
```

#### **Investor Documents Collection**
```yaml
documents:
  - title: string (required)
  - category: select (Annual Report | Financial Statement | Prospectus | Other)
  - date: date (required)
  - file_url: file (upload or external link)
  - description: text (optional, 300 char max)
```

### Editor Workflow
1. Login at `/admin` with GitHub account
2. Select collection (News, Projects, Documents)
3. Click "New Entry" → Fill form → Click "Publish"
4. Triggers Netlify build → Live in ~2 minutes

**Training Requirement**: 30-minute session covering these 3 workflows

---

## 7. Risk Log

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **Decap CMS React 18 hydration errors** | High | High | Evaluate Netlify CMS v2.10 as fallback; hybrid editing workflow (Cursor + markdown editor) |
| **Content migration data loss** | Medium | High | Create WordPress backup before export; validate all content post-migration |
| **DNS propagation delays** | Low | Medium | Schedule launch for low-traffic period; set low TTL 24h before cutover |
| **Broken redirects impacting SEO** | Medium | High | Test all redirects in staging; monitor Search Console for 404s post-launch |
| **CMS learning curve for editors** | Medium | Low | Create video tutorials; schedule hands-on training session |
| **Image optimization performance** | Low | Medium | Use automated WebP conversion; implement lazy loading |
| **Third-party form service downtime** | Low | Medium | Use Netlify Forms (built-in); add fallback email link |

**Risk Review Cadence**: Weekly during Phases 1-3, daily during Phase 4

---

## 8. Acceptance Criteria Summary

### **Must-Have (Launch Blockers)**
- ✅ All 8 core pages live and functional
- ✅ All 47 old URLs redirect properly (301)
- ✅ Zero P1/P2 bugs
- ✅ Lighthouse Performance score 90+
- ✅ CMS workflow operational for non-technical editors
- ✅ SSL certificate active on production domain

### **Should-Have (Post-Launch Priority)**
- ⏳ Mobile menu animations polished
- ⏳ Advanced search functionality on news/projects pages
- ⏳ Automated image optimization in CMS upload flow

### **Nice-to-Have (Backlog)**
- ⏳ Dark mode toggle
- ⏳ Multi-language support (English/Urdu)
- ⏳ Interactive project map

---

## 9. Definitions & Glossary

**SSG (Static Site Generation)**: Pre-building HTML pages at build time rather than on each request; improves performance and security.

**Content Collection**: Astro's structured way of organizing similar content types (like blog posts or products) with type-safe frontmatter schemas.

**Git-based CMS**: Content management system that stores content as files in a Git repository; edits trigger commits and deployments.

**Hydration Error**: JavaScript error when client-side React tries to attach to server-rendered HTML but finds mismatches; causes interactive components to fail.

**Core Web Vitals**: Google's key performance metrics (LCP = loading speed, FID = interactivity, CLS = visual stability).

**301 Redirect**: Permanent redirect that tells search engines the old URL has moved permanently to a new location; preserves SEO value.

**Frontmatter**: Metadata section at the top of markdown files (YAML format) that defines structured content fields like title, date, author.

**Design Tokens**: Reusable design values (colors, spacing, fonts) stored as variables; ensures consistency across all components.

---

## 10. What I Need From You Next

**Immediate Actions**:
1. **Review Phase 1 blockers**: Should we proceed with Decap CMS v3 fixes or switch to Netlify CMS v2.10.0? (Decision needed by Feb 4)
2. **Confirm redirect scope**: Are all 47 existing WordPress URLs documented, or do we need to run a crawl first?
3. **CMS editor access**: Who are the 2-3 people who need CMS training? (Schedule training before Phase 4)

**Parser Test**:
Try running Task Master CLI on this PRD and let me know:
- Did it correctly extract all 4 phases?
- Are task checkboxes properly identified?
- Does it recognize dependencies between phases?

**Next Steps if Parsing Works**:
- I'll help you refine acceptance criteria for any ambiguous tasks
- We can break down large tasks into subtasks if needed
- I can generate a Gantt chart or timeline visualization

---

**PRD Version**: 1.0 (Parsing-Optimized)  
**Last Updated**: January 21, 2026  
**Owner**: Saqib / LYRA-WEB Agent
