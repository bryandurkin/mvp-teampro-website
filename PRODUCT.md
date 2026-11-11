# Product

<!-- impeccable:product-schema 1 -->

This record covers the MVP Team Pro marketing site (`mvpteampro/`). The repo also holds sister sites (Referral Team Pro in `referralteampro/`, and Authority Hub, not built yet) that share `shared/`. They are separate products and are not described here.

## Platform

web

## Users

Established business owners and presidents who know what they should be doing for growth (following up with past customers, publishing what they know) and never get to it. The site serves three industries equally, and no one industry leads the home page:

- Home services, including franchise groups
- Industrial, manufacturing and B2B companies
- Professional services

Inferred from the site copy, not yet confirmed: visitors are busy and wary of having to manage yet another vendor, often after freelancers or task services left them doing exactly that.

## Product Purpose

MVP Team Pro is a marketing implementation firm. It gives owners a dedicated, trained and managed team that does the work for them: follow-up and reactivation outreach (calls, email and mail), customer support follow-up, content creation and publishing, and systems and automation inside the client's existing tools.

The site's job is to turn a visitor into a Leak Report request first. A fit call is the second path, mainly for visitors who already know the company. Success is a requested Leak Report, then a booked fit call.

## Positioning

In order of strength, the claims a competitor cannot truthfully copy:

1. **One team does both.** The same team follows up with customers and publishes the client's expertise. Every call ends with the buyer looking the company up, so there has to be something worth finding ("Every call ends with a search").
2. **Managed, not freelancers.** A dedicated team trained on the client's business, managed for quality, with backup coverage, working inside the client's own CRM and tools, with regular reporting.
3. **Bryan Durkin's track record.** He has built remote teams since 1997, grew an operation from 1,500 to 300,000+ transactions a day, and MVP Team Pro has been running this business since 2004.

## Operating Context

- **Offers:** 5x5 Outreach (five touches across calls, email and mail), Authority Hub (content: blogs, newsletters, short videos, posted and sent for the client), and the Full System (both together).
- **Front-door offer:** the free AI Visibility Leak Report. It shows what Google and AI answer engines say about the company, who they name instead, and whether AI can read the website. It is delivered by email within 2 to 3 business days and checked by a real person. Every Leak Report button uses `LEAK_REPORT_URL` in `shared/config.json`.
- **Engagement flow:** fit call, then setup (the tech lead connects to the CRM, email and website), then the team runs the work, then a monthly report.
- **Coverage models:** 5x8, 5x12 and 7x24.
- **Client systems:** the team works inside GoHighLevel, HubSpot, Jobber, ServiceMonster and most other CRMs.
- **Pages:** home, how it works, about, three industry pages, four service pages, results (not public yet), privacy and terms.

## Capabilities and Constraints

- The site is static HTML built from `shared/` partials and a section library (`shared/library/SECTIONS.md` and `components.html`), and deployed to a Cloudflare Worker. AGENTS.md is the binding rulebook for how pages are built.
- Pages are assembled from library sections only. A new section type needs Bryan's approval first.
- Every push to `main` deploys the live site. Redesigns are reviewed on the preview Worker from the `claude/mvp-redesign` branch.
- Prices are not shown on the site.
- The Results page is not public yet, and it stays out of the menus until it exists.

## Brand Commitments

- Name: MVP Team Pro. Category language: "marketing implementation firm."
- Team wording: a U.S.-based leadership team with trained team members in the Philippines. Never say the whole team is U.S.-based.
- Use the logo image and never recreate it as text.
- No em dashes in any page text or file.
- Voice: plain, direct and owner-to-owner. Honest offers ("If you're in good shape, we'll tell you that too"), with no hype or pitch attached.

## Evidence on Hand

- **Numbers and results:** only those in `mvpteampro/library/STATS.md`, including its qualifiers and wording. Never combine numbers from different clients.
- **Client names:** never on the site or in the repo, because the repo is public. Clients are described by industry only.
- **Testimonials:** `mvpteampro/library/TESTIMONIALS.md` is empty, so there are no approved testimonials yet. Use [TESTIMONIAL NEEDED] and never invent one. The count of testimonials collected (103+) may be cited, but the quotes may not.
- **Mockups:** design mockups for most pages are in `mvpteampro/library/mockups/`. They mix real and placeholder numbers, so confirm each number before using it.
- **Founder story:** Bryan Durkin's history (document management business, remote teams since 1997) is told on the About page and in his books.

## Product Principles

1. **Show, don't claim.** Lead with real data and a free audit over promises; every number traces to STATS.md.
2. **Capacity without more management.** Every page answers the owner's fear of having to manage yet another vendor.
3. **Both halves, one team.** Follow-up and content are presented as one system, even when a page sells only one of them.
4. **Industry-neutral core, industry-specific proof.** Shared pages speak to all three industries; industry pages carry that industry's results.
5. **Honest scope.** Never overstate team location, results or who the clients are.

## Accessibility & Inclusion

Body text is at least 16px, secondary text at least 14px, and only labels and fine print go down to 12px. (These are the AGENTS.md design rules.) No other accessibility standard has been set yet.
