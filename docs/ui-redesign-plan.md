# UI Redesign Plan

## Design Goal

The redesigned portfolio should feel like a serious product-focused engineering website, not a colorful project gallery.

Target impression:

> Benedicta is a business-minded frontend engineer who builds useful web products, understands workflows, and can communicate engineering value clearly.

The site should still feel personal and recognizable, but more mature, structured, and credible.

## Visual Direction

### Desired Feel

- Product consultant
- Frontend engineer
- Business operator
- Clear communicator
- Practical builder

### Avoid

- Student portfolio feel
- Overly playful or decorative layouts
- Too many rounded pill elements
- Animation-heavy sections
- Project catalogue presentation
- Generic "look what I built" messaging

### Brand Treatment

Keep:

- Red accent color
- Personal image
- Strong personal identity
- Warmth and confidence

Refine:

- Use red selectively for CTAs, active states, highlights, and key metrics.
- Use white, near-black, and soft gray as the main base.
- Use calmer spacing and cleaner hierarchy.
- Make screenshots and case studies the strongest visual evidence.

## Page Structure

## 1. Hero

### Layout

Use a clean two-column layout on desktop and a stacked layout on mobile.

Left side:

- Strong business-value headline
- Short explanation of what Benedicta builds
- CTA buttons
- Proof chips

Right side:

- Professional portrait or polished personal image treatment
- Optional subtle product/dashboard-style visual support
- No decorative blobs or overly playful illustration

### Suggested Headline

Frontend Engineer Building Business-Critical Web Products

### Suggested Supporting Copy

I build AI tools, booking systems, ecommerce flows, and dashboards that help businesses launch faster, reduce manual work, and create better customer experiences.

### CTAs

- View Case Studies
- Download Resume

### Proof Chips

- 10+ shipped projects
- AI product interfaces
- Booking + ecommerce systems
- React / Next.js / Firebase

## 2. Proof Bar

### Purpose

Give immediate credibility below the hero.

### Layout

A compact horizontal row on desktop and a two-column grid on mobile.

### Items

- 10+ shipped projects
- 3+ industries served
- AI + dashboard experience
- React, Next.js, Firebase

## 3. Outcomes Section

### Purpose

Show the business value before showing projects.

### Title

What I Help Businesses Improve

### Layout

Four clean cards in a responsive grid.

### Cards

**Increase conversions**  
Landing pages, ecommerce flows, booking journeys, and CTAs designed around user action.

**Reduce manual work**  
Dashboards, admin workflows, booking management, and AI-assisted tools.

**Launch faster**  
Reusable React and Next.js components, responsive layouts, and practical delivery.

**Improve customer experience**  
Clear navigation, accessible UI, mobile-first flows, and smoother forms.

## 4. Featured Case Studies

### Purpose

Replace the current catalogue feel with evidence-driven project presentation.

### Layout

Use 3 large case-study blocks instead of many equal cards.

Each block should include:

- Product screenshot
- Project name
- Business type
- Problem solved
- What Benedicta built
- Business value
- Stack
- Live demo button
- Read case study button

### Priority Projects

1. One-Click Portfolio Website Builder
2. AI Image Generation Tool
3. Hotel Management System
4. KIZO Ecommerce
5. BarkBoxGh

### Visual Treatment

- Screenshots should sit in clean frames.
- Cards should use subtle borders and shadows.
- Use red sparingly for tags and CTAs.
- Avoid hover effects that feel gimmicky.

## 5. Experience

### Purpose

Show professional responsibility, not just work history.

### Layout

Use compact stacked rows or a restrained timeline.

Each role should include:

- Role
- Company
- Period
- Business contribution
- 3 technical highlights

### Tone

Remove heavy animated text. Use clear impact-driven writing.

Example:

Built customer-facing travel tools including a portal, AI trip builder, chatbot support flow, and visa eligibility experience. Focused on reducing manual support load and simplifying complex travel planning workflows.

## 6. Capabilities

### Purpose

Replace the current skill-logo carousel with grouped expertise.

### Layout

Use grouped capability cards.

### Groups

**Frontend Engineering**  
React, Next.js, JavaScript, HTML, CSS, Tailwind

**Product UI**  
Responsive design, accessibility, forms, dashboards, user flows

**AI Integrations**  
Prompt-based tools, image generation, AI-assisted builders

**Business Workflows**  
Booking systems, ecommerce flows, admin panels, customer portals

**Delivery**  
GitHub, deployment, API integration, debugging, iteration

## 7. Technical Writing Preview

### Purpose

Bring the blog back later as technical credibility, not generic content.

### Layout

Use 2-3 clean article cards.

### Example Articles

- Building an AI CV-to-Portfolio Generator
- Designing Booking Workflows in React
- Turning Business Requirements into Dashboards

## 8. Trust / Working Style

### Purpose

Show how Benedicta thinks and works.

### Title

I build complete workflows, not just screens.

### Content

- I think through users, admins, edge cases, and business goals.
- I can work from vague business ideas and turn them into structured products.
- I care about responsive design, maintainable code, accessibility, and performance.
- I communicate clearly and build with practical business outcomes in mind.

## 9. Contact

### Purpose

Convert both clients and recruiters.

### Title

Have a product, website, or workflow you need built?

### Supporting Copy

Send a short note about your project, timeline, and the result you want. I can help with business websites, React web apps, AI-powered tools, booking systems, ecommerce flows, and dashboards.

### Form Fields

- Name
- Email
- Project type
- Timeline
- Budget range, optional
- Message

### CTAs / Links

- Start the Conversation
- Download Resume
- LinkedIn
- GitHub
- Upwork profile, if available

## Case Study Page Design

Each case study should look like a serious product writeup.

### Structure

1. Case study hero
   - Project name
   - Short value statement
   - Stack
   - Live demo link
   - GitHub link if available

2. Product screenshot
   - Large clean frame
   - Optional supporting screenshots below

3. Business problem
   - Who needed the product
   - What pain point existed
   - Why it mattered

4. Users
   - Customers
   - Admins
   - Vendors
   - Internal teams

5. My role
   - Frontend architecture
   - UI implementation
   - API integration
   - Responsive design
   - AI integration
   - Dashboard design

6. Technical decisions
   - Stack
   - State management
   - Routing
   - Data handling
   - Loading and error states
   - Security considerations
   - Performance considerations

7. Features shipped
   - Link each feature to user or business value.

8. Impact
   - Use real metrics where available.
   - Use credible expected outcomes where metrics are unavailable.

9. What I would improve next
   - Analytics
   - Testing
   - Accessibility audit
   - Performance optimization
   - More robust edge-case handling

## Component Style Rules

- Buttons: use 8px radius or similarly restrained rounding.
- Cards: use subtle border, light shadow, and 8px radius or less.
- Tags: small, compact, and not overly pill-shaped.
- Typography: clear hierarchy, no viewport-based font scaling.
- Spacing: generous but not oversized.
- Icons: use simple professional icons.
- Animations: subtle only; avoid distracting motion.
- Screenshots: make them large enough to inspect.
- Red accent: use intentionally, not everywhere.

## First Implementation Target

Build the new homepage first:

1. Hero
2. Proof bar
3. Outcomes
4. Featured case studies
5. Experience
6. Capabilities
7. Trust section
8. Contact

After the homepage is working, add deep case study routes and Firestore-backed content.
