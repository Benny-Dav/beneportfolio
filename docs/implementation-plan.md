# Portfolio Redesign Implementation Plan

## Implementation Strategy

Use a phased rebuild, not a one-shot replacement.

The current site will stay functional while the old section components are gradually rewritten around the new business-first strategy and the Stitch-generated UI direction.

The rebuild should merge:

- The strategic repositioning in `docs/portfolio-redesign-proposal.md`
- The mobile-first UI direction in `docs/ui-redesign-plan.md`
- The design tokens in `docs/design-system-spec.md`
- The generated Stitch UI in `ui/stitch_benedicta_davour_portfolio_system`

The Stitch output is a reference, not a source of truth. It contains useful layout and visual direction, but generated claims such as "Ex-Google," "10+ Years Eng," and fake trusted company logos must not be used.

## Phase 1: Static Redesign Foundation

Goal: Replace the old catalogue-style homepage with a credible mobile-first business and engineering portfolio.

Tasks:

1. Create structured local content files for projects, case studies, experience, outcomes, capabilities, and skills.
2. Create reusable UI primitives:
   - Button
   - Badge
   - SectionHeader
   - MetricCard
   - CaseStudyCard
3. Rewrite navigation for the new sections:
   - Home
   - Outcomes
   - Case Studies
   - Experience
   - Skills
   - Contact
4. Rewrite homepage sections:
   - Hero
   - Proof bar
   - Outcomes
   - About/value positioning
   - Featured case studies
   - Experience with improved typing animation
   - Capabilities and full skills list
   - Contact
5. Keep the site mobile-first and responsive.
6. Keep the full skills list, but present it more professionally.
7. Keep and improve the Experience typing animation.

Exit criteria:

- Homepage renders with the new visual direction.
- Blog remains hidden.
- Build passes.
- No false or exaggerated claims are introduced.

## Phase 2: Case Study Pages

Goal: Turn top projects into technical and business evidence.

Tasks:

1. Add `/case-studies` listing page.
2. Add `/case-studies/:slug` detail page.
3. Create deep case study content for:
   - One-Click Portfolio Website Builder
   - Hotel Management System
   - KIZO Jewellery Ecommerce
   - AI Image Generation Tool
4. Add live demo links and GitHub links where available.
5. Use clean screenshot frames and mobile-friendly long-form layout.

Exit criteria:

- Case studies are reachable by route.
- Each case study explains problem, role, architecture, decisions, value, and next improvements.

## Phase 3: Technical Writing

Goal: Bring the blog back as technical writing, not generic blog content.

Tasks:

1. Add `/writing` listing page.
2. Add `/writing/:slug` detail page.
3. Write initial technical articles:
   - Building an AI CV-to-Portfolio Generator
   - Designing Booking Workflows in React
   - Turning Business Requirements into Dashboards
4. Keep blog routes hidden until content is ready.

Exit criteria:

- Writing section improves technical credibility.
- Content is product and engineering focused.

## Phase 4: Fullstack Content Layer

Goal: Take the portfolio fullstack without building admin controls.

Tasks:

1. Move local content into developer-managed seed files.
2. Add Firestore collections:
   - projects
   - caseStudies
   - posts
   - contactSubmissions
   - events
3. Add seed scripts:
   - `npm run seed:projects`
   - `npm run seed:case-studies`
   - `npm run seed:posts`
   - `npm run seed:content`
4. Fetch published content from Firestore in public pages.
5. Store contact form submissions in Firestore.
6. Track key events:
   - resume downloads
   - case study views
   - CTA clicks
   - outbound links

No admin dashboard, CMS UI, or in-browser editor.

Exit criteria:

- Public site reads content from Firestore.
- Content updates happen through code and seed scripts.
- Firestore rules allow only public published reads and validated contact submissions.

## Phase 5: SEO, Performance, And Polish

Goal: Make the site more discoverable, faster, and more credible.

Tasks:

1. Add page titles and meta descriptions.
2. Add Open Graph metadata.
3. Add sitemap and robots file.
4. Optimize large project images.
5. Add lazy loading for below-the-fold images.
6. Audit mobile layout for overflow and tap targets.
7. Fix lint issues introduced by the redesign.
8. Replace default README with a portfolio-specific README.

Exit criteria:

- Build passes.
- Core pages are mobile-friendly.
- Metadata is in place.
- Project images are optimized enough for production.

## Build Order

Start with Phase 1. Do not build Firebase seed scripts or deep case study routes until the redesigned static experience is solid.
