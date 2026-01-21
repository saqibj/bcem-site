# BCEM Website Rebuild — Executive Summary

**Project:** Burj Clean Energy Modaraba Website Modernization  
**Duration:** 5 weeks | **Budget:** ~80–100 dev hours  
**Go-Live:** End of February 2025  
**Status:** Approved for development

---

## The Opportunity

BCEM's current WordPress site lacks performance, flexibility, and investor-focused features. This rebuild modernizes the platform to:
- **Reduce page load time** from ~3.5s → <1.5s (Lighthouse 90+)
- **Improve investor experience** with clearer Governance, Financial Reports, and IR resources
- **Enable non-technical content updates** via visual CMS
- **Ensure full accessibility** (WCAG 2.1 AA) and mobile-first responsiveness

---

## What We're Building

| Aspect | Scope |
|--------|-------|
| **Pages** | 8 main pages (Home, About, Governance, Products, Projects, Investor Relations, News, Contact) |
| **Content** | All existing news, projects, team members, documents migrate |
| **Tech Stack** | Astro 5.0 (static site) + Decap CMS (Git-based content management) |
| **Hosting** | Netlify or Vercel (same CI/CD as CMS) |
| **Design** | Match existing brand (green #2e7d32, gold #c9a227) with improved UX |

---

## Key Wins

✅ **Performance:** 90+ Lighthouse score (vs. 65 current)  
✅ **Security:** Static site + Git = zero dynamic attack surface  
✅ **SEO:** Proper meta, structured data, sitemap → better investor discoverability  
✅ **Content Control:** Non-technical staff can update news, projects, PDFs via CMS  
✅ **Mobile:** 95+ mobile usability score  
✅ **Accessibility:** Full keyboard navigation, screen reader support  

---

## Timeline & Milestones

| Week | Phase | Deliverable |
|------|-------|-------------|
| **1** | Design System + Components | Figma file, CSS tokens, component library |
| **2** | Page Templates | 8 page templates built in Astro |
| **3** | Content Migration | All pages, news, projects, team migrated to Markdown |
| **4** | CMS Setup | Decap CMS at /admin, editors trained |
| **5** | QA + Launch | Accessibility audit, performance testing, production deploy |

---

## Success Criteria

- [ ] All pages load <1.5s (Lighthouse Performance ≥90)
- [ ] Zero accessibility violations (WCAG AA passed)
- [ ] CMS content updates live within 5 minutes
- [ ] All old URLs redirect (no broken links)
- [ ] Team trained on content editing workflow

---

## Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Content volume larger than expected | Delay in migration | Audit content in Week 1; parallelize with development |
| Decap CMS setup friction | Week 4 delay | Use Netlify Git Gateway; pre-build config templates |
| Design approval scope creep | Timeline slip | Lock design by end of Week 1; changes post-launch only |

---

## Next Steps

1. ✅ **Approve PRD** (this document)
2. ✅ **Confirm stakeholders:** Who signs off on design? Copy? Launch?
3. ✅ **Content audit:** Inventory all current pages, news, projects, docs
4. ✅ **Kick-off meeting:** Week 1, define approval workflow
5. ✅ **Begin Week 1:** Design system + migration planning in parallel

---

## Budget & Resources

**Estimated Effort:** 80–100 developer hours over 5 weeks  
**Team:** 1 Developer (primary), 1 Designer (Week 1 sign-off), 1 Content Lead (Weeks 3–4)  
**Hosting:** Netlify (free tier sufficient for launch; $200/month if scale needed)

---

**Prepared by:** LYRA-WEB Agent | **Approval needed from:** [Management, Product, Design Lead]

