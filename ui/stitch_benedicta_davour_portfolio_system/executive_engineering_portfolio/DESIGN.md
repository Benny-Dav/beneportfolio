---
name: Executive Engineering Portfolio
colors:
  surface: '#f8f9ff'
  surface-dim: '#d1dbec'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dfe9fa'
  surface-container-highest: '#d9e3f4'
  on-surface: '#121c28'
  on-surface-variant: '#5c3f3f'
  inverse-surface: '#27313e'
  inverse-on-surface: '#eaf1ff'
  outline: '#916f6e'
  outline-variant: '#e6bdbc'
  surface-tint: '#bf0030'
  primary: '#b1002c'
  on-primary: '#ffffff'
  primary-container: '#dc143c'
  on-primary-container: '#fff1f0'
  inverse-primary: '#ffb3b3'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#ab1832'
  on-tertiary: '#ffffff'
  tertiary-container: '#ce3448'
  on-tertiary-container: '#fff1f1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad9'
  primary-fixed-dim: '#ffb3b3'
  on-primary-fixed: '#40000a'
  on-primary-fixed-variant: '#920022'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#ffdada'
  tertiary-fixed-dim: '#ffb3b4'
  on-tertiary-fixed: '#40000b'
  on-tertiary-fixed-variant: '#920024'
  background: '#f8f9ff'
  on-background: '#121c28'
  surface-variant: '#d9e3f4'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  section-title:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  section-title-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  body-large:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-base:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  metadata:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  nav-height-desktop: 72px
  nav-height-mobile: 64px
  container-max-width: 1200px
  gutter: 24px
  section-padding-lg: 120px
  section-padding-sm: 64px
---

## Brand & Style
The design system is engineered for a dual-role identity: Product Consultant and Frontend Engineer. The aesthetic is **Corporate Modern** with a lean toward **Minimalism**, emphasizing high-density information hierarchy and structural integrity.

The personality is credible and sharp. By stripping away decorative "fluff" like mesh gradients or organic shapes, the design system focuses on the technical precision of the work. The emotional response is one of trust, competence, and business maturity. Every element exists to serve the content, utilizing generous whitespace and a strict adherence to grid systems to communicate a high level of organization.

## Colors
The palette is rooted in a high-contrast monochromatic foundation, punctuated by a surgical use of **Crimson Red**. 

- **Primary Red (#DC143C):** Reserved for high-priority calls to action, active navigation states, and highlighting key performance metrics.
- **Grayscale Tiering:** A strict hierarchy of grays manages information density. `#111111` for technical headings, `#4B5563` for descriptive body copy, and `#E5E7EB` for structural containment.
- **Functional Accents:** Soft red backgrounds and borders are used exclusively for subtle highlights or categorized project tags to maintain a professional, rather than aggressive, tone.

## Typography
This design system utilizes **Inter** across all levels to leverage its systematic, utilitarian character. 

- **Hero Headings:** Utilize tight tracking and aggressive scaling on desktop to establish immediate authority.
- **Line Height:** Body text is set to 1.6 to ensure readability for long-form case studies and technical documentation.
- **Caps Labels:** Small uppercase labels should be used for category headers (e.g., "TECH STACK", "ROLE") to provide visual anchors without adding weight to the page.

## Layout & Spacing
The layout follows a **12-column fixed grid** on desktop, transitioning to a single-column fluid layout on mobile.

- **Grid Logic:** Elements should align strictly to grid lines. Use a 4px baseline grid for vertical rhythm.
- **Sectioning:** Large vertical gaps (120px) separate major sections to prevent information overload.
- **Safe Zones:** Content is centered with a max-width of 1200px. On mobile, maintain a minimum side margin of 20px.
- **Navigation:** The header remains sticky, using a subtle border-bottom (`#E5E7EB`) rather than a shadow to define its boundary.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and crisp outlines rather than heavy shadows.

- **Cards:** Use a flat `#FFFFFF` background with a 1px solid border in `#E5E7EB`. 
- **Interactive State:** On hover, a card should transition to a 1px solid border in `#D1D5DB` and a very subtle, diffused shadow: `0 4px 12px rgba(0, 0, 0, 0.05)`.
- **Primary Surface:** The main page background is `#FFFFFF`, while secondary utility areas (like code blocks or sidebars) use the `#F7F7F8` surface color to create a recessed effect.

## Shapes
The shape language is disciplined and geometric. 

- **Containers & Buttons:** A standard 8px radius is applied to maintain a modern but "engineered" look. 
- **Tags/Chips:** A slightly tighter 6px radius is used to keep these elements compact and distinct from larger interactive components.
- **Media:** Project screenshots and videos should always feature a 1px border (`#E5E7EB`) and the standard 8px corner radius to ensure they feel like integrated parts of the UI rather than external assets.

## Components

### Buttons
- **Primary:** Background `#DC143C`, Text `#FFFFFF`, 8px radius. No gradients.
- **Secondary:** Background `#FFFFFF`, Border 1px `#D1D5DB`, Text `#111111`.
- **State:** On hover, the primary button shifts to `#A30F2D`.

### Project Cards
- **Structure:** 1px border, 8px radius, white background. 
- **Content:** Title in `section-title-mobile` equivalent size, 15px body text for description, and a footer row for technology tags.

### Technology Tags
- **Style:** Background `#FDECEF`, Text `#A30F2D`, 6px radius.
- **Sizing:** Small padding (4px top/bottom, 10px left/right) to keep the focus on the label.

### Form Fields
- **Inputs:** 1px solid border `#E5E7EB`, 8px radius. 
- **Focus State:** 1px solid `#DC143C` with a soft red glow (2px spread).

### Navigation
- **Desktop:** 72px height, transparent or white background, bottom border only.
- **Links:** 14px Medium weight, `#4B5563`. Active state uses Primary Red.

### Icons
- Use 20px or 24px stroke-based icons (e.g., Lucide or Phosphor) with a "Regular" weight. Avoid filled icons unless they represent an active state.