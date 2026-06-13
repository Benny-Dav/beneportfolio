# Design System Specification

## Design Principle

Design mobile-first. Every section should work beautifully on a 360px wide phone screen before scaling up to tablet and desktop.

The portfolio should feel professional, business-focused, credible, and warm. It should show personality through confident copy, selective red accents, and polished details rather than playful decoration.

## Brand Personality

- Business-minded
- Product-focused
- Technically capable
- Clear and practical
- Warm but not cute
- Confident but not loud

## Visual Theme

Modern product consultant meets frontend engineer.

The design should feel like a serious software/product portfolio with case studies, business outcomes, technical credibility, and a clean conversion path for clients and recruiters.

## Color Palette

### Core Colors

- Background: `#FFFFFF`
- Surface: `#F7F7F8`
- Elevated Surface: `#FFFFFF`
- Text Primary: `#111111`
- Text Secondary: `#4B5563`
- Text Muted: `#6B7280`
- Border: `#E5E7EB`
- Strong Border: `#D1D5DB`

### Brand Accent

- Primary Red: `#DC143C`
- Deep Red: `#A30F2D`
- Soft Red Background: `#FDECEF`
- Red Border: `#F7C9D2`

### Supporting Colors

Use supporting colors sparingly for badges, charts, or status labels.

- Success Green: `#047857`
- Soft Green: `#ECFDF5`
- Technical Blue: `#1D4ED8`
- Soft Blue: `#EFF6FF`
- Warning Amber: `#B45309`
- Soft Amber: `#FFFBEB`

## Typography

Use a clean professional sans-serif.

Recommended font stack:

`Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

### Mobile Type Scale

- Hero eyebrow: 12px, uppercase, 600 weight
- Hero headline: 36px, 700 weight, 1.05 line-height
- Hero body: 16px, 400 weight, 1.6 line-height
- Section eyebrow: 12px, uppercase, 700 weight
- Section heading: 28px, 700 weight, 1.15 line-height
- Card heading: 18px, 700 weight
- Body: 15px or 16px, 400 weight, 1.6 line-height
- Small text: 13px or 14px, 500 weight

### Desktop Type Scale

- Hero headline: 56px to 64px, 700 weight, 1.0 to 1.08 line-height
- Hero body: 18px, 400 weight, 1.65 line-height
- Section heading: 40px to 48px, 700 weight
- Card heading: 20px to 24px, 700 weight

Do not use viewport-width font sizing. Letter spacing should be 0 except for small uppercase eyebrow labels, which may use `0.08em`.

## Layout

### Mobile

- Base padding: 20px
- Section vertical padding: 64px
- Hero top padding: 96px to account for fixed nav
- Single-column layouts by default
- Cards stack vertically
- Buttons stack full-width when there are two CTAs
- Screenshots should be full-width and easy to inspect

### Tablet

- Base padding: 32px
- Two-column layouts only where content remains readable
- Case study cards may use screenshot-first layouts

### Desktop

- Max content width: 1120px to 1200px
- Section vertical padding: 96px
- Hero can use two columns
- Case studies can alternate image/text layout

## Spacing

Use a consistent 8px scale:

- 4px: tight inline spacing
- 8px: compact gaps
- 12px: tag/card inner gaps
- 16px: card padding mobile
- 20px: page padding mobile
- 24px: card padding desktop
- 32px: section inner spacing
- 48px: major content grouping
- 64px: mobile section spacing
- 96px: desktop section spacing

## Buttons

### Shape

- Border radius: 8px
- Height mobile: 48px
- Height desktop: 48px to 52px
- Horizontal padding: 18px to 24px
- Font: 15px or 16px, 700 weight

### Primary Button

- Background: `#DC143C`
- Text: `#FFFFFF`
- Hover: `#A30F2D`
- Border: none

### Secondary Button

- Background: `#FFFFFF`
- Text: `#111111`
- Border: `1px solid #D1D5DB`
- Hover background: `#F7F7F8`

### Text Button

- Text: `#DC143C`
- Hover text: `#A30F2D`
- Optional arrow icon

## Cards

### Style

- Border radius: 8px
- Border: `1px solid #E5E7EB`
- Background: `#FFFFFF`
- Shadow: subtle only, avoid heavy drop shadows
- Mobile padding: 18px to 20px
- Desktop padding: 24px to 32px

### Case Study Cards

Case study cards should feel like product evidence.

Each card should include:

- Screenshot in a clean frame
- Business type label
- Problem solved
- Solution summary
- Business value
- Tech stack tags
- CTA links

## Tags / Badges

### Standard Tag

- Background: `#F7F7F8`
- Text: `#374151`
- Border: `1px solid #E5E7EB`
- Radius: 6px
- Padding: 6px 8px
- Font size: 12px or 13px

### Accent Tag

- Background: `#FDECEF`
- Text: `#A30F2D`
- Border: `1px solid #F7C9D2`

Do not overuse pill shapes.

## Navigation

### Mobile

- Fixed top nav
- Height: 64px
- White background with subtle bottom border
- Left: `ami` logo
- Right: menu icon
- Mobile menu should open as a full-height or near-full-height panel
- Menu links should be large enough to tap comfortably
- Include Resume and Contact CTA in the mobile menu

### Desktop

- Fixed or sticky top nav
- Height: 72px
- Centered max-width container
- Logo left
- Links center or right
- Primary CTA on right

## Hero

### Mobile

Order:

1. Eyebrow
2. Headline
3. Supporting copy
4. CTAs
5. Proof chips
6. Image or product visual

Hero should fit naturally on mobile without forcing everything above the fold.

### Desktop

Use a two-column layout:

- Left: copy and CTAs
- Right: portrait/product visual

## Experience Typing Animation

Maintain the typing animation, but make it more professional and readable.

### Current Problem

The current animation appears inside long paragraphs and can feel busy.

### Improved Direction

Use the typing animation as a controlled highlight element, not inside every sentence.

Recommended pattern:

- Each experience card has a short static description.
- Below the description, add a compact animated highlight line.
- The animated line cycles through 2 to 4 concise achievement phrases.

Example:

Static text:

Built customer-facing travel tools including a customer portal, AI trip builder, chatbot support flow, and visa eligibility experience.

Animated highlight:

`Currently highlighting: AI trip builder interfaces`

Typing sequence:

- AI trip builder interfaces
- Customer portal workflows
- Chatbot support flows
- Visa eligibility UX

### Animation Style

- Cursor should be subtle.
- Speed should be calm, not frantic.
- Text should not resize the card while typing.
- Reserve fixed height for the animated line.
- Use red only for the animated phrase or its small label.

## Images And Screenshots

- Use real screenshots wherever possible.
- Screenshots should be large, clear, and inspectable.
- Use clean browser or device frames.
- Avoid blurred, dark, cropped, or decorative-only images.
- Optimize images for mobile and desktop.

## Accessibility

- Text contrast must meet WCAG AA.
- Buttons and links must have visible focus states.
- Tap targets should be at least 44px high.
- Do not rely on color alone for meaning.
- Use semantic headings in order.
- Avoid excessive motion; respect reduced motion preferences.

## Motion

Use motion sparingly:

- Subtle fade/slide on section entry
- Button hover transitions
- Typing animation in Experience

Avoid:

- Continuous distracting motion
- Large scale hover effects
- Motion that shifts layout

## Page List

### Public Pages

- Home
- Case Studies Listing
- Case Study Detail
- Technical Writing Listing
- Technical Writing Detail
- Contact section on homepage

### No Admin Pages

There should be no admin dashboard, CMS, or in-browser editor.

Content is developer-managed through code and Firestore seed scripts.
