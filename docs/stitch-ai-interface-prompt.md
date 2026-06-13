# Stitch AI Interface Generation Prompt

Use this prompt to generate the redesigned portfolio interfaces in Stitch AI.

---

## Prompt

Design a complete mobile-first portfolio website for Benedicta Davour, a business-minded frontend engineer who builds useful web products for businesses and teams.

The website must shift away from a colorful project-gallery portfolio and toward a polished, professional, business-focused engineering portfolio. It should communicate: "Here is how I help businesses, here is the value I bring, and here is proof through case studies."

The design should feel like a modern product consultant meets frontend engineer: clean, sharp, credible, warm, and professional. It should not feel like a student portfolio, cute creative site, or generic freelancer landing page.

Design mobile-first. Start with a 360px to 390px mobile viewport and ensure every section is readable, tappable, and polished. Then provide responsive desktop layouts.

## Brand And Visual Theme

Use this design system:

- Background: white `#FFFFFF`
- Surface: soft gray `#F7F7F8`
- Elevated cards: white `#FFFFFF`
- Primary text: near black `#111111`
- Secondary text: gray `#4B5563`
- Muted text: `#6B7280`
- Border: `#E5E7EB`
- Strong border: `#D1D5DB`
- Primary accent red: `#DC143C`
- Deep red: `#A30F2D`
- Soft red background: `#FDECEF`
- Soft red border: `#F7C9D2`

Use red selectively for CTAs, active nav states, metrics, small highlights, and important labels. Do not make the whole site red or overly colorful.

Use a clean sans-serif font such as Inter or a similar modern UI font.

Typography:

- Mobile hero heading: around 36px, bold, tight line-height.
- Desktop hero heading: 56px to 64px, bold.
- Mobile section headings: around 28px, bold.
- Desktop section headings: 40px to 48px, bold.
- Body text: 15px to 18px, comfortable 1.6 line-height.
- Do not use viewport-based font sizing.
- Avoid negative letter spacing.

Component styling:

- Buttons: 8px radius, strong but not bubbly.
- Cards: 8px radius or less, subtle border, light shadow only if needed.
- Tags: compact 6px radius, not overly pill-shaped.
- Use simple professional icons.
- Use real product screenshots or clean screenshot placeholders, not abstract blobs.
- Avoid decorative gradient orbs, bokeh, or playful illustration backgrounds.

Motion direction:

- Minimal and professional.
- Keep a typing animation in the Experience section, but make it controlled and readable.
- Avoid layout shift during typing animation.

## Required Interfaces / Pages

Create the following interfaces:

1. Mobile homepage
2. Desktop homepage
3. Mobile case studies listing page
4. Desktop case studies listing page
5. Mobile case study detail page
6. Desktop case study detail page
7. Mobile technical writing listing page
8. Desktop technical writing listing page

No admin dashboard. No CMS interface. No in-browser editor.

The site is fullstack, but content is developer-managed. The public UI should display dynamic data from projects, case studies, posts, contact submissions, and analytics events, but do not design admin controls.

## Homepage Sections

### 1. Navigation

Design a fixed mobile-first navigation.

Mobile:

- Height around 64px.
- White background.
- Subtle bottom border.
- Left: `ami` wordmark, black text with red accent on the `i`.
- Right: menu icon.
- Mobile menu should open as a clean panel with large tap-friendly links.
- Include links: Home, Outcomes, Case Studies, Experience, Skills, Writing, Contact.
- Include Resume and Contact CTA in the mobile menu.

Desktop:

- Height around 72px.
- Centered max-width container.
- Logo left.
- Nav links center or right.
- CTA button on the right: `Start a Project` or `Contact`.

### 2. Hero Section

Mobile layout:

- Single column.
- Order: eyebrow, headline, supporting copy, CTA buttons, proof chips, visual.
- Use generous spacing but keep content tight enough for mobile.
- CTAs should stack full width on small screens.

Desktop layout:

- Two columns.
- Left: copy, CTAs, proof chips.
- Right: professional portrait or product/dashboard visual.

Hero eyebrow:

`FRONTEND ENGINEER + PRODUCT BUILDER`

Hero headline:

`Building business-critical web products that help teams launch, sell, and operate better.`

Supporting copy:

`I build AI tools, booking systems, ecommerce flows, and dashboards that turn complex business workflows into fast, responsive web experiences.`

Primary CTA:

`View Case Studies`

Secondary CTA:

`Download Resume`

Proof chips:

- `10+ shipped projects`
- `AI product interfaces`
- `Booking + ecommerce systems`
- `React / Next.js / Firebase`

Hero visual:

- Use a polished portrait area or product-dashboard composition.
- It should look professional and modern.
- Do not use decorative blobs or overly playful shapes.

### 3. Proof Bar

Design a compact credibility bar directly after the hero.

Mobile:

- Two-column grid.
- Compact cards.

Desktop:

- Horizontal row.

Items:

- `10+` / `Shipped projects`
- `3+` / `Industries served`
- `AI + Dashboards` / `Product experience`
- `React + Firebase` / `Modern web stack`

### 4. Outcomes Section

Title:

`What I Help Businesses Improve`

Subtitle:

`I do not just build interfaces. I build workflows that help businesses convert users, save time, and operate with more clarity.`

Create four outcome cards:

1. `Increase conversions`
   - Landing pages, ecommerce flows, booking journeys, and CTAs designed around user action.

2. `Reduce manual work`
   - Dashboards, booking management, AI-assisted tools, and workflow automation.

3. `Launch faster`
   - Reusable React and Next.js components, responsive layouts, and practical delivery.

4. `Improve customer experience`
   - Clear navigation, accessible UI, mobile-first flows, and smoother forms.

Mobile:

- Stack cards vertically.
- Use icons, compact headings, and short body text.

Desktop:

- Four-card grid or two-by-two grid.

### 5. Featured Case Studies Section

This is the main proof section. It should not look like a simple project gallery.

Section eyebrow:

`CASE STUDIES`

Title:

`Products, workflows, and business tools I have built.`

Subtitle:

`Each case study shows the business problem, the product decision, the technical implementation, and the value created.`

Design 3 large featured case study blocks.

Each case study block must include:

- Product screenshot in a clean frame
- Business type label
- Project title
- Problem solved
- Solution summary
- Business value
- Stack tags
- CTA buttons: `Read Case Study`, `Live Demo`

Case study 1:

Title: `One-Click Portfolio Website Builder`
Business type: `AI automation / portfolio publishing`
Problem: `Professionals struggle to turn resumes into polished personal websites quickly.`
Solution: `AI-assisted CV parsing, editable profile flow, and a publishable portfolio output.`
Business value: `Reduces time from resume to live website and helps users present themselves professionally.`
Tags: `AI`, `CV Parsing`, `Publishing Workflow`, `React`

Case study 2:

Title: `Hotel Management System`
Business type: `Hospitality / bookings`
Problem: `Hotels need a clearer way for guests to book rooms and request services while staff manage operations.`
Solution: `Responsive booking website with concierge requests and a management dashboard.`
Business value: `Improves guest self-service and centralizes booking and room management workflows.`
Tags: `Booking`, `Dashboard`, `Forms`, `Responsive UI`

Case study 3:

Title: `KIZO Jewellery Ecommerce`
Business type: `Ecommerce / vendor operations`
Problem: `A jewellery vendor needed a storefront and product/order management workflow.`
Solution: `Customer-facing ecommerce experience with admin-facing product and order management.`
Business value: `Supports online sales, product visibility, and operational control.`
Tags: `Ecommerce`, `Product Management`, `Order Flow`, `React`

Mobile:

- Each case study card stacks screenshot first, then text.
- CTAs stack or wrap clearly.

Desktop:

- Use large editorial case-study blocks.
- Alternate image-left/text-right and text-left/image-right if it improves flow.

### 6. Experience Section

Design this section to feel credible and technical but not cluttered.

Section title:

`Experience built around useful products.`

Use compact experience cards.

Each card includes:

- Role
- Company
- Period
- Static business contribution paragraph
- 3 technical highlights
- Improved typing animation highlight line

Important typing animation requirement:

Maintain the typing animation concept, but make it more professional than a long animated paragraph.

For each experience card, show a fixed-height animated highlight line such as:

`Currently highlighting: AI trip builder interfaces`

The phrase after the label should animate through 2 to 4 concise phrases.

For Africon:

Static paragraph:

`Built customer-facing travel tools including a customer portal, AI trip builder, chatbot support flow, and visa eligibility experience. Focused on reducing manual support load and simplifying complex travel planning workflows.`

Typing phrases:

- `AI trip builder interfaces`
- `Customer portal workflows`
- `Chatbot support flows`
- `Visa eligibility UX`

For MEST Africa:

Static paragraph:

`Completed intensive frontend training focused on building production-style React applications, including appointment booking workflows and responsive business websites.`

Typing phrases:

- `React product builds`
- `Booking workflow practice`
- `Responsive business websites`

Mobile:

- Cards stack vertically.
- Typing line must not cause layout shift.
- Text must wrap cleanly.

Desktop:

- Use a restrained vertical timeline or stacked cards.
- No excessive animation.

### 7. Capabilities Section

Replace the old skill carousel with grouped capability cards.

Title:

`Capabilities that connect engineering to business outcomes.`

Design five capability cards:

1. `Frontend Engineering`
   - React, Next.js, JavaScript, HTML, CSS, Tailwind

2. `Product UI`
   - Responsive design, accessibility, forms, dashboards, user flows

3. `AI Integrations`
   - Prompt-based tools, image generation, AI-assisted builders

4. `Business Workflows`
   - Booking systems, ecommerce flows, admin panels, customer portals

5. `Delivery`
   - GitHub, deployment, API integration, debugging, iteration

Mobile:

- One column.

Tablet:

- Two columns.

Desktop:

- Three-column or five-card responsive grid.

### 8. Technical Writing Preview

This section previews future blog/build notes and supports technical credibility.

Title:

`Build notes and technical writing.`

Subtitle:

`Short writeups on the product and engineering decisions behind my work.`

Article cards:

1. `Building an AI CV-to-Portfolio Generator`
2. `Designing Booking Workflows in React`
3. `Turning Business Requirements into Dashboards`

Each article card should include:

- Category
- Title
- Short excerpt
- Read link

### 9. Trust / Working Style Section

Title:

`I build complete workflows, not just screens.`

Use a clean two-column desktop layout and single-column mobile layout.

Include points:

- `I think through users, admins, edge cases, and business goals.`
- `I can work from vague business ideas and turn them into structured products.`
- `I care about responsive design, maintainable code, accessibility, and performance.`
- `I communicate clearly and build with practical business outcomes in mind.`

### 10. Contact Section

Title:

`Have a product, website, or workflow you need built?`

Supporting copy:

`Send a short note about your project, timeline, and the result you want. I can help with business websites, React web apps, AI-powered tools, booking systems, ecommerce flows, and dashboards.`

Design a contact area with:

- Contact form
- Recruiter/client link area
- Resume link
- LinkedIn
- GitHub
- Upwork profile placeholder

Form fields:

- Name
- Email
- Project type
- Timeline
- Budget range, optional
- Message

Primary CTA:

`Start the Conversation`

Mobile:

- Form fields stack.
- CTA full width.

Desktop:

- Two-column layout: form and contact/context panel.

## Case Studies Listing Page

Design a separate case studies listing page.

Mobile-first layout:

- Top page header
- Short explanation
- Filter chips by type: `All`, `AI Tools`, `Booking`, `Ecommerce`, `Dashboards`, `Web Apps`
- Case study cards stacked vertically

Desktop:

- Header with intro text
- Filter row
- Grid or large list layout

Each case study card includes:

- Screenshot
- Business type
- Title
- Problem
- Business value
- Stack tags
- `Read Case Study`
- `Live Demo`

The page should feel like a serious archive of evidence, not a visual gallery.

## Case Study Detail Page

Design a case study detail page for `One-Click Portfolio Website Builder`.

Mobile-first structure:

1. Back link to Case Studies
2. Case study hero
3. Large screenshot
4. Business problem
5. Users
6. My role
7. Architecture / technical decisions
8. Features shipped
9. Impact or expected impact
10. What I would improve next
11. CTA to contact or view another case study

Hero content:

Title:

`One-Click Portfolio Website Builder`

Value statement:

`An AI-assisted workflow that turns a resume into an editable, publishable portfolio website.`

Metadata:

- Role: `Frontend Engineer / Product Builder`
- Type: `AI automation`
- Stack: `React`, `AI extraction`, `Publishing workflow`
- Status: `Live demo available`

Section styling:

- Use editorial content blocks.
- Make technical notes easy to scan.
- Use callout boxes for key decisions.
- Use screenshots in clean frames.
- Keep mobile reading comfortable.

## Technical Writing Listing Page

Design a technical writing page.

Purpose:

This is not a lifestyle blog. It is a technical/product writing section that shows how Benedicta thinks.

Mobile:

- Header
- Topic filter chips
- Article cards stacked vertically

Desktop:

- Header left, featured article right or below
- Article grid

Article card fields:

- Category
- Title
- Excerpt
- Read time
- Read link

Example articles:

- `Building an AI CV-to-Portfolio Generator`
- `Designing Booking Workflows in React`
- `Turning Business Requirements into Dashboards`

## Responsive Requirements

Mobile is the priority.

Ensure:

- No text overflow.
- Buttons do not exceed container width.
- Cards do not nest inside cards.
- Screenshots maintain aspect ratio.
- Navigation is easy to tap.
- Typing animation does not shift layout.
- Contact form fields are comfortable to use.
- CTAs remain visible and easy to understand.

## Final Output Expectations

Generate polished interface designs for all requested pages. The result should be production-ready enough to implement in React and Tailwind.

The design should be confident, structured, business-focused, technically credible, and mobile-friendly.
