---
name: Crimson Invitation
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#5c3f3f'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#916f6e'
  outline-variant: '#e6bdbc'
  surface-tint: '#bf0030'
  primary: '#b1002c'
  on-primary: '#ffffff'
  primary-container: '#dc143c'
  on-primary-container: '#fff1f0'
  inverse-primary: '#ffb3b3'
  secondary: '#b90140'
  on-secondary: '#ffffff'
  secondary-container: '#dc2a56'
  on-secondary-container: '#fffbff'
  tertiary: '#9a314b'
  on-tertiary: '#ffffff'
  tertiary-container: '#ba4963'
  on-tertiary-container: '#fff2f2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad9'
  primary-fixed-dim: '#ffb3b3'
  on-primary-fixed: '#40000a'
  on-primary-fixed-variant: '#920022'
  secondary-fixed: '#ffd9dc'
  secondary-fixed-dim: '#ffb2ba'
  on-secondary-fixed: '#400010'
  on-secondary-fixed-variant: '#910030'
  tertiary-fixed: '#ffd9de'
  tertiary-fixed-dim: '#ffb2be'
  on-tertiary-fixed: '#400014'
  on-tertiary-fixed-variant: '#841f3b'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is built to facilitate an intimate and premium date-booking experience. It moves away from generic romantic tropes in favor of a sophisticated, editorial aesthetic that feels like a high-end personal invitation. 

The visual language combines **Minimalism** with **Modern Corporate** precision, utilizing generous whitespace and a "warm-wash" color strategy. The emotional goal is to evoke confidence, charm, and clarity. Interaction should feel effortless, treating the booking process as a curated journey rather than a utility.

## Colors
The palette is centered on a "Blush & Crimson" hierarchy. 

- **Foundation:** Pure white is used for primary content cards to ensure a premium, clean look, while the `page_wash` provides a warm, inviting background context.
- **Action:** `Primary Crimson` is reserved for key calls-to-action and critical brand moments. `Deep Crimson` serves as the interactive state for these elements.
- **Accents:** `Cherry Accent` and `Deep Wine` are used sparingly for text emphasis, small iconography, or high-end decorative strokes to add depth without clutter.
- **Feedback:** Success and Error states use traditional greens and reds but are softened by background tints to maintain the warm aesthetic.

## Typography
The typography system pairs **Hanken Grotesk** for headlines with **Inter** for functional text. 

Headlines are tight, confident, and slightly tracked-in to give a modern editorial feel. Body text relies on Inter’s neutrality to ensure maximum legibility for logistics like dates, times, and descriptions. For "Label" roles, use semi-bold weights and slight tracking to differentiate metadata from body prose.

## Layout & Spacing
The design system utilizes a **12-column fluid grid** for desktop and a **single-column fluid layout** for mobile. 

- **Rhythm:** A strict 8px base unit governs all margins and paddings.
- **Verticality:** Use `xl` (40px) spacing between major sections to maintain a sense of "premium" breathing room.
- **Mobile:** Margins should reduce to 16px on devices smaller than 600px, but the `gutter` should remain consistent to keep the text blocks readable.

## Elevation & Depth
Depth is achieved through **Tonal Layers** rather than heavy shadows. 

- **Surface 0 (Background):** `Page Wash` (#FFF8F9).
- **Surface 1 (Content Cards):** Pure White (#FFFFFF) with a 1px border (#E5E7EB).
- **Interactive Depth:** When a card is hovered, apply a very soft, diffused shadow: `0px 4px 20px rgba(122, 23, 52, 0.05)`. Note the subtle wine-tinted shadow color, which keeps the elevation feeling warm and integrated with the brand.

## Shapes
The shape language is "Soft-Modern."

- **Standard Elements:** Buttons, input fields, and small tags use an 8px radius.
- **Container Elements:** Large cards (e.g., date selection or profile cards) use a 12px radius to feel more approachable and distinct from the UI buttons.
- **Icons:** Use 2px stroke weight with slightly rounded joins (Lucide-style) to match the typography's geometric nature.

## Components
- **Buttons:** 
  - *Primary:* Crimson background, white text. Bold, 8px radius.
  - *Secondary:* White background, Crimson border, Crimson text. 
  - *Ghost:* No background or border, Deep Wine text.
- **Input Fields:** 
  - Use a white background with an #E5E7EB border. On focus, transition border to Primary Crimson with a 2px soft outer glow in the same color (10% opacity).
- **Date/Time Slots:** 
  - Use "Chip" style selections. Unselected: Surface color (#FFF1F4) with Deep Wine text. Selected: Crimson background with white text.
- **Cards:** 
  - Always pure white (#FFFFFF) against the Page Wash background. Use a 12px radius and the soft wine-tinted shadow for the primary "Invitation" card.
- **Progress Indicator:** 
  - A thin, 4px Crimson bar at the very top of the viewport to indicate booking steps without taking up functional space.