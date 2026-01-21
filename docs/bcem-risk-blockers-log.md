# RISK & BLOCKERS LOG
**Burj Clean Energy Modaraba Website Rebuild** | Risk Management & Issue Tracking

**Last Updated:** January 20, 2026  
**Project Timeline:** Feb 3 – Mar 9, 2026 (5 weeks)

---

## RISK REGISTER (Priority Ordered)

### 1. 🔴 HIGH PRIORITY: Decap CMS React 18 Compatibility

| Attribute | Value |
|-----------|-------|
| **Risk ID** | R001 |
| **Category** | Technical / Environment |
| **Severity** | HIGH |
| **Probability** | MEDIUM (40%) |
| **Impact** | 4–6 hours dev delay + CMS workflow rework |
| **Phase Affected** | Phase 6 (CMS Integration) |
| **Owner** | Dev Lead |

**Description:**
Decap CMS has known compatibility issues with React 18 in local development environments. The CMS admin interface may fail to load at `localhost:4321/admin` during testing, blocking content team validation in Week 3.

**Root Cause:**
Decap CMS dependencies conflict with modern React versions when running in development mode. Production deployment via Netlify Git Gateway may work, but local CMS testing would fail.

**Early Warning Signs:**
- [ ] CMS admin page returns 404 or blank screen
- [ ] Console shows React hydration errors
- [ ] Decap CMS config not parsing correctly

**Mitigation Strategies (in order of preference):**

1. **Primary:** Test CMS early (Week 2, Day 2 before Phase 5 starts)
   - Do NOT wait until Phase 6 to discover issues
   - Allocate 4 hours for troubleshooting
   - Document any errors with screenshots & console logs

2. **Fallback 1:** Switch to Netlify CMS v2.10.0
   - Older version with proven React 18 compatibility
   - Install: `npm install netlify-cms-app@2.10.0`
   - Reconfigure all collection schemas (2–3 hours)
   - **Timeline Impact:** +2 hours

3. **Fallback 2:** Use Markdown-first workflow
   - Content Team edits `.md` files locally in Cursor IDE + Typora
   - Dev Lead reviews & merges via GitHub
   - Removes need for CMS interface entirely
   - **Pros:** Simpler, more robust
   - **Cons:** Requires developer involvement for all content changes
   - **Timeline Impact:** +1 hour setup, but saves Phase 6 testing time

**Decision Tree:**

```
Does CMS admin load in localhost Week 2?
├─ YES → Continue to Phase 5 & 6 normally
└─ NO → Pick Fallback Strategy
    ├─ Fallback 1 (Netlify CMS v2.10.0) → Reconfigure & retest (+2 hrs)
    ├─ Fallback 2 (Markdown workflow) → Onboard Content Team (+1 hr)
    └─ Last Resort: Investigate deeper (contact Astro/Decap support)
```

**Contingency Timeline Adjustment:**
- If triggered: +2 hours to Phase 6
- New Phase 6 duration: 10 hours (was 8)
- Overall project slack: 2 hours (within budget)

**Escalation Path:**
1. Dev Lead identifies issue → Product Owner notified immediately
2. If +4 hours needed → Management approves scope extension
3. If +6+ hours needed → Consider deferring "nice-to-have" features (analytics, advanced filtering)

---

### 2. 🔴 HIGH PRIORITY: WordPress Export Incompleteness

| Attribute | Value |
|-----------|-------|
| **Risk ID** | R002 |
| **Category** | Data Quality |
| **Severity** | HIGH |
| **Probability** | MEDIUM (35%) |
| **Impact** | 4–8 hours content remediation |
| **Phase Affected** | Phase 0 (Pre-migration audit), Phase 5 (Content migration) |
| **Owner** | Content Team Lead |

**Description:**
WordPress export may be incomplete: missing posts, broken image links, incomplete metadata, custom fields not exported, or encoding errors in post content.

**Root Cause:**
WordPress plugin export tools often have size limits, timeout issues, or don't capture all custom metadata. Manual posts may be missed if not in standard post table.

**Early Warning Signs:**
- [ ] CSV export file size < 1 MB (likely incomplete)
- [ ] Missing image URLs in exported data
- [ ] Duplicate titles in exported posts
- [ ] Content Team reports "posts missing from export"

**Mitigation Strategies:**

1. **Primary:** Conduct thorough content audit in Phase 0 (Week 1)
   - Content Team manually validates export against WordPress Admin
   - Spot-check: count posts in WordPress UI, verify count matches export
   - Flag any missing posts for manual export
   - **Task:** T0.5 in Taskmaster PRD
   - **Timeline:** 2–3 hours

2. **Secondary:** Use multiple export tools
   - Try WordPress built-in export tool first
   - If incomplete, try third-party plugin: Elementor Data Export, or All-in-One WP Migration
   - Compare exports, identify discrepancies
   - **Timeline:** +2 hours if needed

3. **Tertiary:** Manual database export
   - If plugin exports fail, export MySQL database directly
   - Dev Team queries database for posts + metadata
   - Convert SQL → CSV programmatically
   - **Timeline:** +3 hours

**Validation Checklist:**

- [ ] Total posts exported = Total posts in WordPress Admin (verified by count)
- [ ] Total projects exported = Total projects in WordPress
- [ ] All exported posts have: title, date, content, featured_image_url
- [ ] All image URLs are valid HTTP(S) links
- [ ] No duplicate post IDs
- [ ] No posts with empty content
- [ ] All categories/tags exported (if used)

**Contingency Timeline Adjustment:**
- If incomplete export discovered: +2–4 hours in Phase 0 for remediation
- New Phase 0 duration: 3–5 hours (was 1 day)
- This is BLOCKING for Phase 1, so discover early

**Escalation Path:**
1. Content Team discovers incompleteness → Report to Dev Lead immediately
2. Dev Lead & Content Team work together on additional export methods
3. If still incomplete after 4 hours → Consider manual data entry for critical content (news + projects only, skip less important items)

---

### 3. 🟡 MEDIUM PRIORITY: Image Optimization & URL Preservation

| Attribute | Value |
|-----------|-------|
| **Risk ID** | R003 |
| **Category** | Technical |
| **Severity** | MEDIUM |
| **Probability** | MEDIUM (50%) |
| **Impact** | 2–3 hours performance tuning |
| **Phase Affected** | Phase 7 (Performance), Phase 8 (QA) |
| **Owner** | Dev Lead |

**Description:**
Images from WordPress may not optimize correctly during Astro build, or old image URLs embedded in post content may break if not properly redirected.

**Root Cause:**
WordPress stores images in `/wp-content/uploads/` with versioning (e.g., `image-name-300x200.jpg`). New site uses `/assets/` structure. Old URLs embedded in markdown content will break.

**Early Warning Signs:**
- [ ] Lighthouse performance score < 85 (images not optimized)
- [ ] Build warnings: "Image not found" or Sharp optimization errors
- [ ] Old image URLs in news posts return 404

**Mitigation Strategies:**

1. **Primary:** Use Astro Sharp plugin (auto-optimization)
   - Already included in project stack
   - Automatically converts JPG → WebP/AVIF
   - Lazy loads all images
   - **Expected result:** 40–60% file size reduction
   - **Timeline:** 1 hour setup + testing

2. **Secondary:** Rewrite image URLs in markdown
   - During Phase 5 migration, update all image URLs from `/wp-content/uploads/` → `/assets/`
   - Use find-replace script in Node.js or Python
   - Verify all images load post-migration
   - **Timeline:** 1 hour scripting + 1 hour testing

3. **Tertiary:** Create redirect for old image URLs (if needed)
   - Add `public/_redirects` rule: `/wp-content/uploads/* /assets/uploads/:splat 301`
   - Preserves old links in content while redirecting to new location
   - **Timeline:** 30 minutes

**Performance Validation:**

- [ ] Lighthouse Performance score ≥ 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] All images on home page load within 2 seconds
- [ ] Mobile performance score ≥ 90

**Contingency Timeline Adjustment:**
- If images not optimizing: +2 hours in Phase 7 for manual tuning
- New Phase 7 duration: 10 hours (was 8)

**Escalation Path:**
1. Dev Lead identifies performance issues during Phase 7 → Investigate image optimization
2. If Lighthouse < 85 after 2 hours → Consider lazy loading more aggressively or reducing hero image size
3. If still failing → Defer advanced image features (Art Direction, responsive crops)

---

### 4. 🟡 MEDIUM PRIORITY: Shariah Compliance Documentation

| Attribute | Value |
|-----------|-------|
| **Risk ID** | R004 |
| **Category** | Content / Compliance |
| **Severity** | MEDIUM |
| **Probability** | LOW (20%) |
| **Impact** | 3–4 hours content review + legal consultation |
| **Phase Affected** | Phase 4 (Governance page), Phase 8 (QA) |
| **Owner** | Governance Officer + Dev Team |

**Description:**
New governance page may not correctly represent BCEM's Shariah compliance framework, board structure, or auditor/advisor roles. If compliance messaging is inaccurate, could expose BCEM to investor misunderstanding or regulatory scrutiny.

**Root Cause:**
Governance & compliance information is highly specialized. Standard corporate website templates may not adequately represent Islamic finance governance structures (Shariah Board, Riba compliance, etc.).

**Early Warning Signs:**
- [ ] Shariah Board member information incomplete or outdated
- [ ] Auditor role or credentials not clearly explained
- [ ] Investment restrictions or compliance criteria unclear
- [ ] Governance Officer flags inaccuracy during Phase 4 review

**Mitigation Strategies:**

1. **Primary:** Involve Governance Officer early (Week 1)
   - Include in Phase 4 design review
   - Review all governance page copy before build
   - Ensure Shariah Board, management roles, auditor details are accurate
   - **Timeline:** 1 hour review in Phase 4

2. **Secondary:** Create governance content template
   - Document: "Governance Page Content Guidelines" (confidentiality: internal only)
   - Define required fields: Board member name/title/background, Shariah Board mandate, auditor credentials, compliance certifications
   - Share with Governance Officer for validation
   - **Timeline:** 2 hours

3. **Tertiary:** Legal/compliance review (if needed)
   - Before launch, have legal counsel review governance page for compliance accuracy
   - Cost: ~$500–1,000 for 1–2 hour review
   - **Timeline:** +1–2 hours in Phase 8

**Validation Checklist:**

- [ ] Shariah Board member names, titles, background accurate
- [ ] Auditor/advisor roles clearly explained
- [ ] Compliance framework (Islamic finance, Riba, etc.) accurately described
- [ ] Board meeting frequency & governance processes documented
- [ ] Governance Officer approves copy
- [ ] (Optional) Legal counsel reviews before launch

**Contingency Timeline Adjustment:**
- If governance page needs rework: +2–3 hours in Phase 4
- New Phase 4 duration: 15 hours (was 12)
- This does NOT block launch if caught early

**Escalation Path:**
1. Governance Officer identifies inaccuracy → Flag immediately to Dev Lead
2. Dev Lead & Governance Officer collaborate on corrected copy
3. If legal review needed → Allocate 1–2 hours in Phase 8 QA window
4. If major compliance issue discovered → Consider Phase 8 delay (max +1 day)

---

### 5. 🟡 MEDIUM PRIORITY: Timeline Slip (Scope Creep)

| Attribute | Value |
|-----------|-------|
| **Risk ID** | R005 |
| **Category** | Project Management |
| **Severity** | MEDIUM |
| **Probability** | MEDIUM (45%) |
| **Impact** | 1–3 week delay |
| **Phase Affected** | All phases (cumulative) |
| **Owner** | Product Owner |

**Description:**
During development, stakeholders may request new features or changes (e.g., "Can we add a blog search?", "Can we integrate email newsletter signup?"), causing scope creep and timeline slip.

**Root Cause:**
- Vague initial scope definition
- Stakeholder expectations not aligned with deliverables
- New business requirements emerge during development
- "Nice-to-have" features become "must-have"

**Early Warning Signs:**
- [ ] Requests for features not in PRD
- [ ] Daily standups mention "extra tasks"
- [ ] Phase gates delay for "just one more feature"
- [ ] Dev Lead reports more work discovered during implementation

**Mitigation Strategies:**

1. **Primary:** Strict scope boundary enforcement
   - Product Owner enforces "MUST-DO vs. NICE-TO-HAVE" distinction (from Taskmaster PRD)
   - All out-of-scope requests logged but deferred to **Post-Launch Wishlist**
   - Phase gates ONLY approve work within scope
   - **Timeline:** 0 hours (process overhead)

2. **Secondary:** Change Request Process
   - If stakeholder requests scope change:
     - Document in writing: What, Why, Impact on timeline
     - Product Owner determines: Include in scope, defer to Phase 9, or reject
     - If included: Identify what to remove to stay in 5-week budget
     - **Timeline:** 30 min per change request (approx)

3. **Tertiary:** Buffer & contingency hours
   - 2 hours project buffer already built into Taskmaster PRD
   - If scope creep < 2 hours: absorb with buffer
   - If scope creep > 2 hours: require trade-offs (remove other tasks)

**Scope Boundaries (Reminder):**

**MUST-DO (in PRD):**
- 8 pages built & responsive
- All content migrated
- CMS functional
- Lighthouse 90+
- All URLs redirect
- Accessibility WCAG 2.1 AA

**NICE-TO-HAVE (defer to Phase 9):**
- Email newsletter signup
- Blog search / advanced filtering
- Advanced analytics dashboard
- Social media feed integration
- User comments / engagement
- A/B testing framework

**Contingency Timeline Adjustment:**
- Scope creep 1–2 hours: absorb with buffer, no delay
- Scope creep 3–5 hours: +1 week delay (defer Phase 9 features)
- Scope creep 5+ hours: +2 week delay or reduce scope

**Escalation Path:**
1. Product Owner tracks all change requests weekly
2. Mid-project review (Week 3): assess cumulative scope creep
3. If > 3 hours: management decision on timeline extension or feature deferral
4. Final gate (Week 5, Day 4): confirm launch-ready status or request 1-week extension

---

### 6. 🟢 LOW PRIORITY: Font Loading & Typography

| Attribute | Value |
|-----------|-------|
| **Risk ID** | R006 |
| **Category** | Performance / Design |
| **Severity** | LOW |
| **Probability** | LOW (15%) |
| **Impact** | 1 hour font optimization |
| **Phase Affected** | Phase 7 (Performance) |
| **Owner** | Dev Lead |

**Description:**
Fonts (Inter, Plus Jakarta Sans) may not load optimally, causing Cumulative Layout Shift (CLS) or slow text rendering.

**Root Cause:**
Web fonts from Google Fonts can delay text rendering if not preloaded or self-hosted.

**Mitigation Strategies:**

1. **Primary:** Use `font-display: swap` in CSS
   ```css
   @font-face {
     font-family: 'Inter';
     src: url('/fonts/inter-var.woff2') format('woff2-variations');
     font-display: swap;  /* Show fallback text immediately */
   }
   ```
   - Shows system font until web font loads
   - Avoids "flash of invisible text" (FOIT)

2. **Secondary:** Preload critical fonts
   ```html
   <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
   ```

3. **Tertiary:** Self-host fonts from Google Fonts
   - Download font files locally to `/public/fonts/`
   - Reduces third-party network request
   - Improves Lighthouse score

**Validation:**
- [ ] Lighthouse CLS score ≥ 0.1 (good)
- [ ] All text visible immediately (no FOIT)
- [ ] Google Fonts load time < 500ms

**Contingency Timeline Adjustment:**
- If typography issues discovered: +1 hour in Phase 7
- Low impact on overall timeline

---

### 7. 🟢 LOW PRIORITY: Mobile Menu Accessibility

| Attribute | Value |
|-----------|-------|
| **Risk ID** | R007 |
| **Category** | Accessibility / UX |
| **Severity** | LOW |
| **Probability** | MEDIUM (30%) |
| **Impact** | 1–2 hours accessibility fixes |
| **Phase Affected** | Phase 3 (Global Components), Phase 7 (Accessibility) |
| **Owner** | Dev Lead + QA |

**Description:**
Mobile menu (hamburger menu) may not be fully accessible: keyboard navigation broken, screen reader doesn't announce menu state, focus not properly managed when menu opens/closes.

**Root Cause:**
Mobile menu often implemented with custom JavaScript. Easy to miss accessibility patterns (ARIA attributes, focus management, keyboard shortcuts).

**Early Warning Signs:**
- [ ] Keyboard navigation fails on mobile menu (Tab doesn't move through menu items)
- [ ] Screen reader (VoiceOver/NVDA) doesn't announce "menu expanded" state
- [ ] Focus trap: user can't escape menu with Escape key
- [ ] axe DevTools reports critical issues on mobile menu

**Mitigation Strategies:**

1. **Primary:** Follow WAI-ARIA Menubutton pattern
   - Add `role="menubutton"` to hamburger button
   - Add `aria-expanded="true/false"` to track menu state
   - Add `aria-label="Navigation Menu"` to provide context
   - Keyboard handlers: Escape to close, Arrow keys to navigate items

2. **Secondary:** Implement focus management
   - When menu opens: focus moves to first menu item
   - When menu closes: focus returns to hamburger button
   - Use JavaScript: `element.focus()` to manage focus

3. **Tertiary:** Test with screen reader
   - VoiceOver (Mac): Cmd+F5 to enable, then Tab through menu
   - NVDA (Windows): Download free, Tab through menu items
   - All menu items should be announced clearly

**Validation Checklist:**

- [ ] Hamburger button has `aria-expanded` attribute
- [ ] Menu items are keyboard-navigable (Tab, Shift+Tab)
- [ ] Escape key closes menu
- [ ] Focus moves to first menu item when menu opens
- [ ] Focus returns to hamburger button when menu closes
- [ ] Screen reader announces all menu items clearly
- [ ] axe DevTools: zero critical issues on mobile menu

**Contingency Timeline Adjustment:**
- If accessibility issues discovered in Phase 7: +1–2 hours for fixes
- New Phase 7 duration: 9–10 hours (was 8)

---

## BLOCKER TRACKING

**Active Blockers:** None currently  
**Last Updated:** January 20, 2026

| Blocker ID | Title | Description | Owner | Status | Resolution Date |
|---|---|---|---|---|---|
| (none) | | | | | |

---

## RISK REVIEW CADENCE

| Meeting | Frequency | Attendees | Owner |
|---------|-----------|-----------|-------|
| **Risk Review** | Weekly (Mondays, 10 AM) | Dev Lead, Product Owner, QA | Dev Lead |
| **Blocker Escalation** | As-needed (same day) | Dev Lead, Product Owner, Management | Dev Lead |
| **Post-Mortem** | Week of Mar 9 (launch week) | All team members | Product Owner |

---

## HISTORICAL LOG (for reference)

No historical entries yet. This is the initial risk register for the BCEM website rebuild project.

---

**Document Version:** 1.0 | **Last Updated:** January 20, 2026  
**Maintained By:** Dev Lead  
**Escalation Contact:** Product Owner (escalate if severity changes or new blockers emerge)
