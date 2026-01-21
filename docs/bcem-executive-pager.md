# EXECUTIVE 1-PAGER: BCEM Website Rebuild
**Burj Clean Energy Modaraba** | January 20, 2026

---

## DECISION SUMMARY

**Project:** Rebuild BCEM website from WordPress to modern static architecture (Astro 5.x + Decap CMS).  
**Timeline:** 5 weeks (Feb 3 – Mar 9, 2026)  
**Investment:** ~40 dev hours + internal content resource  
**Go/No-Go Status:** ✅ **RECOMMENDED PROCEED**

---

## THE OPPORTUNITY

| Metric | Current (WordPress) | New (Astro + CMS) | Benefit |
|--------|---------------------|-------------------|---------|
| **Page Load Time** | 2.5–3.5s | <1.5s | Faster investor access, better trust signals |
| **Maintenance Risk** | High (plugin updates, vulnerabilities) | Low (static, secure) | Reduced IT burden; no server patches |
| **Content Workflow** | Manual WordPress UI | Streamlined CMS + Git | Faster news/project publishing |
| **Performance Score** | 60–70 Lighthouse | 90+ Lighthouse | Better SEO rank, improved investor confidence |
| **Mobile Experience** | Inconsistent | Mobile-first responsive | Optimal on all devices |

**Net Outcome:** Faster, more trustworthy investor platform with reduced ongoing IT burden.

---

## SCOPE AT A GLANCE

### What We're Building
- **8 pages:** Home, About, Governance, Products, Projects, Investor Relations, News, Contact
- **3 content collections:** News (auto-publish via CMS), Projects, Team roster
- **Full content migration:** All WordPress data preserved, redirects in place
- **Modern CMS:** Non-technical staff can publish news/projects via web interface
- **Accessibility:** WCAG 2.1 AA compliant (keyboard navigation, screen reader ready)

### What's NOT Included
- Email notification system, analytics dashboard, blog comments, payment processing, user login
- These can be added post-launch if deemed necessary

---

## RISKS & CONFIDENCE

| Risk | Impact | Mitigation | Confidence |
|------|--------|-----------|------------|
| Decap CMS compatibility with React 18 | Medium (2 hours) | Fallback to Netlify CMS v2.10.0 or markdown workflow | 95% |
| WordPress content export completeness | Medium (4 hours) | Manual audit pre-migration | 90% |
| Timeline slip (scope creep) | Medium | Strict phase-gate approvals | 92% |
| Image optimization & CDN setup | Low (1 hour) | Astro Sharp plugin handles automatically | 98% |

**Overall Project Confidence: 93%** (Green status)

---

## CRITICAL SUCCESS FACTORS

1. **Content Audit Approval (Week 1):** All WordPress posts, projects, PDFs exported and signed off by Content Team.  
   → **Go Gate:** Content Team confirms accuracy  
   
2. **Design System Finalization (Week 1):** Colors, typography, spacing locked.  
   → **Go Gate:** Product Owner approves design direction
   
3. **CMS Workflow (Week 3):** Content team can publish 1 news post via CMS without developer help.  
   → **Go Gate:** Content Team signs off on workflow
   
4. **Pre-Launch QA (Week 5):** All pages 90+ Lighthouse, zero accessibility issues.  
   → **Go Gate:** QA checklist 100% pass rate

---

## INVESTMENT & RESOURCES

| Item | Owner | Est. Hours | Cost |
|------|-------|-----------|------|
| Dev (setup, build, deploy) | Dev Lead | 30 hrs | ~$900 (@ $30/hr) |
| Content migration & audit | Content Team | 8 hrs | Salaried |
| QA & testing | QA | 4 hrs | Salaried |
| **Total** | — | **42 hrs** | **~$900 external** |

**Infrastructure:** Netlify hosting (~$0–19/month, Git-based CI/CD included).

---

## APPROVAL WORKFLOW

### Phase Gate Sign-Offs

| Phase | Gate | Owner | Approval |
|-------|------|-------|----------|
| **Phase 0** | Content Audit Complete | Content Team → Mgmt | ☐ Mgmt approval |
| **Phase 2** | Design System Locked | Dev → Product Owner | ☐ Product Owner approval |
| **Phase 4** | Pages Built & Reviewed | Dev → Product Owner | ☐ Product Owner approval |
| **Phase 6** | CMS Workflow Ready | Dev + Content Team | ☐ Content Team approval |
| **Phase 8** | QA Passed + Launch Ready | QA → Mgmt | ☐ **LAUNCH APPROVAL** |

**Final Go/No-Go Decision Point:** End of Week 5, Day 4 (contingency: Day 5).

---

## COMPETITIVE & STRATEGIC RATIONALE

✅ **Aligns with BCEM Mission:**
- Reflects clean energy commitment through modern, efficient platform
- Demonstrates innovation in digital investor relations
- Positions BCEM as tech-forward within Islamic finance space

✅ **Market Timing:**
- Investor relations platforms are increasingly expected to be fast, mobile-friendly, trustworthy
- Current WordPress setup sends signal of technical debt
- Modern platform improves investor confidence → potential capital advantage

✅ **Long-Term Ownership:**
- Reduced IT maintenance burden after launch
- Empowers content team (no developer dependency for news/projects)
- Scales efficiently: static site = unlimited traffic without additional server cost

---

## RECOMMENDED NEXT STEPS

1. **Week of Jan 27:** Confirm content audit schedule + dev resource availability
2. **Feb 3:** Phase 0 & Phase 1 kickoff (content export + local setup)
3. **Feb 10:** Design system review (Phase 2 gate)
4. **Feb 24:** CMS testing & content team onboarding (Phase 6)
5. **Mar 9:** Production launch + monitoring (24hr post-launch support)

---

## DECISION REQUEST

**Approve BCEM website rebuild project with timeline: Feb 3 – Mar 9, 2026?**

- [ ] **Yes, proceed** → Confirm resource availability this week
- [ ] **Yes, with conditions** → Specify conditions below
- [ ] **No, defer** → Specify deferral reason + timeline

**Approver:** _________________________  
**Date:** _________________________  
**Conditions / Notes:** ______________________________________________________________

---

## CONTACT & QUESTIONS

**Project Lead:** [Dev Lead Name]  
**Product Owner:** [Product Owner Name]  
**For questions:** [contact@burjmodaraba.com](mailto:contact@burjmodaraba.com)

---

**Document Version:** 1.0 | **Last Updated:** January 20, 2026
