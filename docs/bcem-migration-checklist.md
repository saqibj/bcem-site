# MIGRATION CHECKLIST: WordPress → Astro
**Burj Clean Energy Modaraba** | Content & URL Migration Strategy

---

## PRE-MIGRATION AUDIT (Phase 0)

### Content Inventory Export

**Task:** Content Team exports all WordPress content to CSV format before development starts.

#### News Posts
- [ ] Total posts to migrate: _____ (expected: 40–80)
- [ ] Export CSV columns: `post_id`, `title`, `date`, `excerpt`, `content`, `category`, `author`, `featured_image_url`, `permalink`
- [ ] Sample export file: `wordpress-news-export.csv`
- [ ] Verify no posts have duplicate titles
- [ ] Remove draft/private posts (only published)
- [ ] Check all featured images are accessible URLs
- [ ] Management sign-off: _____ Date: _____

#### Projects
- [ ] Total projects to migrate: _____ (expected: 10–25)
- [ ] Export CSV columns: `project_id`, `title`, `description`, `category`, `location`, `status`, `image_urls` (comma-separated), `permalink`
- [ ] Sample export file: `wordpress-projects-export.csv`
- [ ] Verify all project images accessible
- [ ] Check for any broken image links (flag for manual fix)
- [ ] Management sign-off: _____ Date: _____

#### Team Members
- [ ] Total team members: _____ (expected: 5–15)
- [ ] Export CSV columns: `team_id`, `name`, `title`, `department`, `bio`, `photo_url`, `linkedin_url`
- [ ] Sample export file: `wordpress-team-export.csv`
- [ ] Verify all photos accessible
- [ ] Management sign-off: _____ Date: _____

#### Investor Documents
- [ ] Annual Reports: _____ files (list by year)
- [ ] Quarterly Reports: _____ files (list by year)
- [ ] Highlights Reports: _____ files (list by year)
- [ ] Other PDFs: _____ files (describe)
- [ ] Export CSV columns: `doc_id`, `title`, `type`, `year`, `file_url`, `file_size_mb`
- [ ] Sample export file: `wordpress-documents-export.csv`
- [ ] Verify all PDFs accessible & not corrupted
- [ ] Management sign-off: _____ Date: _____

#### Static Pages (About, Governance, Products, Contact)
- [ ] Export HTML content from About page
- [ ] Export HTML content from Governance page
- [ ] Export HTML content from Products page
- [ ] Export HTML content from Contact page
- [ ] Check for any embedded media (images, PDFs)
- [ ] Management sign-off: _____ Date: _____

---

## URL MAPPING & REDIRECT STRATEGY

### Current Site Structure
```
burjmodaraba.com/
├── / (home)
├── /about
├── /governance
├── /products
├── /projects
├── /investor-relations
├── /news
│   ├── /news/[post-slug]
├── /contact
├── /team
├── /blog (if exists)
└── [other custom URLs]
```

### New Site Structure
```
burjmodaraba.com/
├── / (home)
├── /about
├── /governance
├── /products
├── /projects
│   ├── /projects/[slug]
├── /investor-relations
├── /news
│   ├── /news/[slug]
├── /team
├── /contact
└── [no custom URLs]
```

### URL Redirect Mapping

**Instructions:** Fill in all old URLs and their new targets. Use Netlify `_redirects` file format.

| Old URL | New URL | Status Code | Notes |
|---------|---------|-------------|-------|
| `/` | `/` | 200 | No redirect needed (same) |
| `/about` | `/about` | 200 | No redirect needed |
| `/governance` | `/governance` | 200 | No redirect needed |
| `/products` | `/products` | 200 | No redirect needed |
| `/projects` | `/projects` | 200 | No redirect needed |
| `/investor-relations` | `/investor-relations` | 200 | No redirect needed |
| `/news` | `/news` | 200 | No redirect needed |
| `/team` | `/team` | 200 | No redirect needed |
| `/contact` | `/contact` | 200 | No redirect needed |
| `/blog` | `/news` | 301 | If blog section existed → redirect to news |
| `/news/post-1` | `/news/post-1-new-slug` | 301 | (fill in actual post slugs) |
| (add more rows as needed) | | | |

---

## REDIRECT CONFIGURATION

### Netlify _redirects File Example

**File location:** `public/_redirects`

```
# Old WordPress URLs → New Astro URLs
# Permanent redirects (301) preserve SEO authority

# If WordPress used different slugs, map them:
/blog                    /news                      301
/blog/:slug              /news/:slug                301
/news/old-post-title     /news/new-post-title       301

# Catch any other old patterns:
/wp-content/*            :splat                     404
/wp-admin/*              :splat                     404

# Force HTTPS
/*  https://burjmodaraba.com:splat  200

# SPA fallback (if needed):
/* /index.html  200
```

**Validation:**
- [ ] All post URLs mapped (get list from WordPress export)
- [ ] All project URLs mapped (get list from WordPress export)
- [ ] _redirects file uploaded to `public/` directory
- [ ] Test 5 random old URLs → verify 301 redirect works
- [ ] Netlify deploy log shows _redirects file processed

---

## CONTENT STAGING & QA TIMELINE

### Week 1: Export & Audit
- [ ] Day 1–2: Content Team exports all CSV files
- [ ] Day 3: Dev Team validates CSV format & completeness
- [ ] Day 4: Management reviews & approves all exports
- [ ] **Gate:** All content approved before Phase 1 begins

### Week 2: Validation
- [ ] Dev Team converts CSV → Markdown + YAML frontmatter
- [ ] Content Team spot-checks 10% of converted content (sample 5 news posts, 3 projects, 2 team members)
- [ ] QA Team verifies all images are accessible
- [ ] **Gate:** Content Team signs off on conversion quality

### Week 3: Migration
- [ ] Dev Team uploads all Markdown files to `src/content/` collections
- [ ] CMS is configured and tested with sample content
- [ ] All dynamic pages (`news/[slug].astro`, etc.) render correctly
- [ ] **Gate:** Content Team can add 1 new news post via CMS

### Week 4: Pre-Launch
- [ ] Final content proofing: check all pages for typos, missing images
- [ ] Verify all PDFs/downloads are accessible
- [ ] Test all external links (email, phone, LinkedIn, investor resources)
- [ ] **Gate:** Content Team signs off for launch

---

## IMAGE ASSET MIGRATION

### Image Audit

| Image Category | Count | Current Location | New Location | CDN | Status |
|---|---|---|---|---|---|
| News featured images | _____ | `/wp-content/uploads/` | `src/assets/news/` | Netlify CDN | ☐ |
| Project images | _____ | `/wp-content/uploads/` | `src/assets/projects/` | Netlify CDN | ☐ |
| Team photos | _____ | `/wp-content/uploads/` | `src/assets/team/` | Netlify CDN | ☐ |
| Logo / branding | _____ | Root / theme folder | `src/assets/brand/` | Netlify CDN | ☐ |
| Background images | _____ | Theme CSS | `src/assets/backgrounds/` | Netlify CDN | ☐ |
| **Total** | **_____** | | | | |

### Image Optimization Process

- [ ] Download all images from WordPress
- [ ] Convert to WebP/AVIF format using Astro Sharp plugin
- [ ] Verify file sizes reduced by 40–60%
- [ ] Test on mobile (confirm lazy loading works)
- [ ] All alt-text preserved in Markdown frontmatter

---

## DATABASE & BACKUP STRATEGY

### Pre-Migration Backup

- [ ] Export WordPress database SQL dump: `burj-modaraba-backup-YYYY-MM-DD.sql`
- [ ] File size: _____ MB
- [ ] Stored in secure location: _____ (e.g., Google Drive, AWS S3)
- [ ] Backup verified restorable: ☐ Yes
- [ ] Backup signed off by IT: _____ Date: _____

### Rollback Plan (if needed)

If migration encounters critical data loss:
1. Restore WordPress from SQL dump
2. Revert Netlify deployment to previous commit
3. Notify stakeholders of delay (timeline: +3–5 days)
4. Timeline adjustment: _____

---

## POST-LAUNCH URL VERIFICATION

### Link Audit (Week 5, Day 5)

**Task:** QA Team validates all old URLs → new URLs working correctly.

#### News Posts
- [ ] Test 5 random old news URLs: redirect works (301 to new URL)
- [ ] Test 5 new news URLs on Astro site: load correctly
- [ ] Verify all internal links within news posts work (no broken links)

#### Projects
- [ ] Test 3 random old project URLs: redirect works (301)
- [ ] Test 3 new project URLs on Astro site: load correctly

#### Static Pages
- [ ] Test home page loads at `/`
- [ ] Test all nav links work (8 main pages)
- [ ] Test all footer links work

#### PDFs & Downloads
- [ ] Test all investor PDF links download correctly
- [ ] Verify file names & sizes match original

#### External Links
- [ ] Test phone number links (tel:)
- [ ] Test email links (mailto:)
- [ ] Test LinkedIn profile links (if applicable)
- [ ] Test any external resource links

**Pass Criteria:** 100% of tested URLs work correctly (301 redirects for old URLs, live pages for new URLs).

---

## SEO & SEARCH ENGINE RESUBMISSION

### Pre-Launch SEO

- [ ] Create `robots.txt` file (allow all paths for Astro site)
- [ ] Create `sitemap.xml` (auto-generated by Astro Sitemap plugin)
- [ ] Add meta tags: title, description, og:image, og:url
- [ ] Verify Open Graph tags on all pages (Facebook, LinkedIn sharing)
- [ ] Test with Facebook Debugger: https://developers.facebook.com/tools/debug/

### Post-Launch Resubmission

- [ ] Submit sitemap to Google Search Console: `burjmodaraba.com/sitemap-index.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Request indexing of home page in GSC (force crawl)
- [ ] Monitor GSC for crawl errors over next 30 days
- [ ] Verify old URLs indexed in GSC show "Redirect (301)" status

---

## CONTENT TEAM TRAINING

### Decap CMS Workflow Training

**Attendees:** Content Team (editorial staff, community managers)  
**Duration:** 1.5 hours  
**Trainer:** Dev Lead  
**Date & Time:** _________

#### Training Checklist

- [ ] Walkthrough `/admin` login page
- [ ] Demo: Create new news post (fields, publishing, preview)
- [ ] Demo: Edit existing news post (save, schedule publish date)
- [ ] Demo: Upload images (drag & drop, file size limits)
- [ ] Demo: Delete old/archived content (soft delete only)
- [ ] Q&A: Common issues + troubleshooting
- [ ] Handoff: CMS documentation provided
- [ ] Sign-off: Content Team confirms they can use CMS independently

**Follow-up Support:** 
- [ ] Dev Lead available for questions during first 2 weeks post-launch
- [ ] Documentation: `docs/content-team-cms-guide.md` (provide to Content Team)

---

## FINAL MIGRATION SIGN-OFF

### Checklist for Launch Approval

- [ ] ✅ All content exported from WordPress
- [ ] ✅ All content migrated to Astro Markdown
- [ ] ✅ All URLs redirect correctly (301 redirects tested)
- [ ] ✅ All images optimized & accessible
- [ ] ✅ All PDFs downloadable
- [ ] ✅ CMS functional & tested by Content Team
- [ ] ✅ SEO setup complete (robots.txt, sitemap.xml, meta tags)
- [ ] ✅ Content Team trained on CMS workflow
- [ ] ✅ Backup taken & verified restorable
- [ ] ✅ QA link audit 100% pass rate
- [ ] ✅ Post-launch support plan confirmed

### Approvals

| Role | Sign-Off | Date | Notes |
|------|----------|------|-------|
| Content Team Lead | ☐ | _____ | Content audit approved |
| Dev Lead | ☐ | _____ | Migration completed, no errors |
| QA Lead | ☐ | _____ | All links verified, no 404s |
| Product Owner | ☐ | _____ | Design & functionality approved |
| Management | ☐ | _____ | **LAUNCH APPROVAL** |

---

**Document Version:** 1.0 | **Last Updated:** January 20, 2026  
**Responsible Party:** Dev Lead + Content Team Lead
