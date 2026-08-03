# Stitch AI Prompt — `/book-a-date`

## Copy this entire prompt into Stitch AI

Design a complete, polished, responsive booking experience for a new route, `/book-a-date`, on Benedicta Davour's personal portfolio website. This is not a professional consultation or work-booking flow. It is a tasteful, playful, casual, and romantic invitation for people who are personally interested in taking Benedicta on a date.

The experience should feel warm, charming, self-assured, feminine, and a little flirty, while still being safe, clear, trustworthy, and easy to use. It must feel like a special side of the existing portfolio brand—not a separate dating app, wedding website, escort service, restaurant booking tool, or corporate scheduling product.

Generate every interface and state listed below in both mobile and desktop layouts. Mobile is the priority: begin with a 390px-wide frame, then create a desktop version around 1440px wide. Use production-ready, realistic UI with exact copy, believable calendar data, pricing calculations, clear selection states, validation, and accessible controls.

---

## Existing Website Design Language

Preserve the visual DNA of the existing portfolio:

- Font: Inter or a similar clean modern sans-serif.
- Page background: `#FFFFFF`.
- Soft neutral surface: `#F7F7F8`.
- Primary text: `#111111`.
- Secondary text: `#4B5563`.
- Muted text: `#6B7280`.
- Standard border: `#E5E7EB`.
- Strong border: `#D1D5DB`.
- Existing brand crimson: `#DC143C`.
- Deep crimson hover/pressed state: `#A30F2D`.
- Existing soft red: `#FDECEF`.
- Existing soft red border: `#F7C9D2`.
- Existing `ami` wordmark: black lowercase “am” with the “i” in crimson.
- Existing components use crisp 8px radii, clear hierarchy, subtle borders, and minimal shadows.

For this route, introduce a romantic sub-theme while preserving those foundations:

- Warm blush page wash: `#FFF8F9`.
- Blush surface: `#FFF1F4`.
- Cherry accent: `#C9184A` (use alongside, not instead of, the existing crimson).
- Deep wine text/accent: `#7A1734`.
- Warm cream highlight: `#FFF9F0`.
- Success green: `#047857` with background `#ECFDF5`.
- Error red: `#B42318` with background `#FEF3F2`.

Use blush, cream, cherry, and wine only as supporting colors. Keep large areas light and clean. Add romance through thoughtful copy, tiny heart/spark/star icons, delicate line art, and very subtle soft gradients. Avoid pink overload, loud gradients, giant hearts, roses everywhere, floating bubbles, glossy 3D illustrations, script fonts, excessive pill shapes, or cliché Valentine's Day visuals.

The final mood should be “a beautifully designed personal invitation”: intimate, fun, confident, and premium.

---

## Global Layout and Navigation

Create a focused route that reduces distraction but still clearly belongs to the portfolio.

### Header

- Sticky header on mobile (64px) and desktop (72px).
- White or translucent white background with a subtle bottom border; light backdrop blur is acceptable.
- Left: the existing `ami` wordmark. Clicking it returns to the portfolio homepage.
- Right: a quiet text link with a left arrow, `Back to portfolio`.
- Do not show the full professional portfolio navigation or a `Hire Me` button on this route.
- On small screens, shorten the right link to `Back` if space is tight.

### Booking shell

- Desktop: centered two-column composition inside a maximum width of roughly 1120px. Main booking card on the left (about 700px); persistent booking summary card on the right (about 320px).
- Mobile: single-column layout with the summary shown as a compact expandable card below the progress indicator and above the primary action, where relevant.
- Main card: white background, 1px border, subtle shadow, 12px radius (slightly softer than the portfolio's professional cards), 24px mobile padding and 32px desktop padding.
- Preserve generous white space and an 8px spacing system.

### Progress indicator

Show a clearly visible sequential stepper on all booking screens:

1. `Date`
2. `Time`
3. `Confirm`

- Desktop: horizontal stepper with numbered circles, labels, and connecting lines.
- Mobile: compact horizontal version that still shows all three labels.
- Completed steps: crimson circle with a checkmark.
- Current step: crimson circle with a soft blush halo and dark label.
- Upcoming steps: light gray circle and muted label.
- Users may go back to a completed step but cannot jump forward before completing the current step.
- Include the small helper text `A little plan for a lovely time.` near the stepper.

### Footer

- Minimal footer only: `Made with intention (and a little sparkle) by Benedicta.`
- Include a tiny outlined sparkle or heart icon.
- Do not include the large professional portfolio footer.

---

## Interface 1 — Welcome / Booking Introduction

Create an inviting entry state at `/book-a-date` before the first selection, or visually integrate this introduction above Step 1.

Eyebrow:

`BOOK A DATE WITH ME ♡`

Headline:

`Let's make time for something lovely.`

Supporting copy:

`Pick a day, choose the time that feels right, and let's plan a date worth looking forward to.`

Small reassurance row with understated icons:

- `Private and discreet`
- `Secure payment`
- `Accra time (GMT)`

Primary CTA:

`Choose a date`

Optional microcopy below CTA:

`No awkward back-and-forth. Just a simple plan.`

Visual direction:

- Use a tasteful abstract line drawing, cropped lifestyle portrait placeholder, or editorial card composition—not a stock-photo couple.
- A very subtle blush-to-white background glow and one or two tiny sparkle motifs are enough.
- On mobile, keep the introduction compact so the calendar begins within a natural first scroll.

---

## Interface 2 — Step 1: Select a Date

Header copy:

Eyebrow: `STEP 1 OF 3`

Title: `When shall we meet?`

Body: `Choose an available day from the calendar. Dates shown are in Accra time (GMT).`

### Calendar component

- Show a full month calendar, using a realistic month such as August 2026 for the mockup.
- Month and year title centered or left-aligned: `August 2026`.
- Previous and next month arrow buttons with accessible labels and 44px minimum tap targets.
- Week begins Monday: `Mon Tue Wed Thu Fri Sat Sun`.
- Clearly differentiate all date states:
  - Available: dark text, interactive hover/focus state.
  - Selected: solid crimson circle or rounded square with white text and a soft blush outer ring.
  - Today: subtle crimson outline and a tiny `Today` cue if space permits.
  - Unavailable/booked: muted gray text with a diagonal slash or disabled treatment; never rely on color alone.
  - Past dates: disabled and low contrast.
  - Dates outside the current month: very muted.
- Include a compact legend: `Available`, `Selected`, `Unavailable`.
- On hover or focus for an available desktop date, use a soft blush background.
- On mobile, every date target must be comfortably tappable without the calendar overflowing.

### Selected-date feedback

After selection, reveal a soft blush inline confirmation panel:

Calendar icon + `Saturday, 15 August 2026 looks lovely.`

Primary button:

`Continue to time`

Disabled button copy before selection:

`Select a date to continue`

Secondary text action:

`Back`

The persistent summary should show the selected date and leave time/duration/total as em dashes until chosen.

### Date edge states

Also generate:

- Calendar loading skeleton.
- Month with no availability: `No dates available this month` and a button `View next month`.
- Availability-fetch error: `We couldn't load the calendar. Please try again.` with `Try again` button.

---

## Interface 3 — Step 2: Select Start and End Time

Header copy:

Eyebrow: `STEP 2 OF 3`

Title: `What time works for you?`

Body: `Choose when our date starts and ends. Your total updates automatically based on the duration.`

Selected date chip/card:

`Saturday, 15 August 2026` with a `Change date` action.

### Time selection design

Create two clear fields side by side on desktop and stacked on narrow mobile:

- `Start time`
- `End time`

Use attractive time-slot grids or accessible select fields populated with realistic 30-minute increments, for example:

`5:00 PM`, `5:30 PM`, `6:00 PM`, `6:30 PM`, `7:00 PM`, `7:30 PM`, `8:00 PM`, `8:30 PM`, `9:00 PM`, `9:30 PM`, `10:00 PM`

Selected slots use a crimson border, very light blush fill, and a checkmark. Disabled/unavailable slots are muted and visibly unavailable. Keep 44px minimum targets. Make it clear that the end time must be later than the start time. After a start time is chosen, unavailable or invalid end times should automatically disable.

Use example selections:

- Start: `6:00 PM`
- End: `9:00 PM`
- Duration: `3 hours`

### Dynamic pricing card

Make pricing highly visible but warm and matter-of-fact, not transactional or sales-heavy.

Use a configurable hourly rate in the final product. For the visual mockup, use:

- `GH₵150 / hour`
- `3 hours × GH₵150`
- `Total: GH₵450`

The calculation must visibly update when either time changes. Show currency as Ghana cedi using `GH₵` and format whole amounts cleanly. If partial-hour durations are supported, show correct proportional pricing; if not, visually constrain the mockup to supported increments.

Place this concise note beneath the calculation inside a warm cream or blush info panel:

`The fee helps cover the care and preparation I put into our date—hair, nails, grooming and transport—and makes up for time away from work.`

Add one gentle closing line:

`That way, I can show up fully present and feeling my best. ♡`

Do not call the fee a “service charge,” “appearance fee,” or “booking deposit.” Do not make the page feel like an invoice.

Primary CTA:

`Review our date`

Secondary CTA:

`Back to date`

### Time validation states

Generate visual states and inline messages for:

- No start time: `Choose a start time.`
- No end time: `Choose an end time.`
- End before or equal to start: `End time must be later than start time.`
- Slot becomes unavailable: `That time was just booked. Please choose another.`
- Duration outside permitted range: `Please choose a date length between 1 and 6 hours.`
- Pricing/availability loading skeleton.

Errors should appear next to the relevant field, use an alert icon, and never rely only on red color.

---

## Interface 4 — Step 3: Review and Confirm

Header copy:

Eyebrow: `STEP 3 OF 3`

Title: `One last look, then it's a date.`

Body: `Check the details below before continuing to secure payment.`

### Review card

Create a warm, elegant summary resembling a personal invitation card rather than a receipt.

Show:

- `Date` — `Saturday, 15 August 2026`
- `Time` — `6:00 PM – 9:00 PM (GMT)`
- `Duration` — `3 hours`
- `Rate` — `GH₵150 / hour`
- Divider
- `Total` — `GH₵450`

Provide small `Edit` links beside Date and Time that return to the appropriate completed step.

### Guest details

Include only the minimum details needed to associate and confirm the payment:

- `Your name` — required.
- `Email address` — required, helper: `Your payment receipt and date confirmation will be sent here.`
- `Phone number` — optional or required only if the implementation needs it, with Ghana country code `+233` shown in the mockup.
- Optional short textarea: `Anything you'd like me to know?` with helper `Keep it sweet and brief.` and a 200-character counter.

Add a compact privacy note with a lock icon:

`Your details are used only for this booking and payment confirmation.`

Add an unchecked required consent checkbox:

`I have reviewed the date, time and total, and I understand that payment confirms my booking.`

Avoid requesting home addresses, sensitive personal details, or unnecessary identity information.

Primary payment CTA:

`Pay GH₵450 securely`

Add a small Paystack/trust row directly below:

`Secure payment powered by Paystack` with a lock icon and restrained card/payment marks.

Secondary CTA:

`Back to time`

Add calm microcopy:

`Your date is only confirmed after payment succeeds.`

### Form states

Generate:

- Default form.
- Focused input state.
- Filled form state.
- Inline required and invalid-email errors.
- Disabled payment button until valid details and consent are present.
- Submission/loading state with button label `Opening secure payment…` and a spinner; prevent duplicate clicks.

---

## Interface 5 — Paystack Payment Handoff / Modal State

Show the review page dimmed beneath a centered, secure payment handoff overlay. This should communicate the transition to the official Paystack payment interface; do not invent or heavily restyle Paystack's proprietary checkout fields.

Include:

- Lock icon.
- Title: `Secure payment`
- Text: `Complete your GH₵450 payment with Paystack to confirm the date.`
- A clean placeholder area labeled `Paystack checkout opens here` to represent Paystack's hosted modal.
- Compact booking reference, for example `Date: 15 Aug 2026 · 6:00 PM – 9:00 PM`.
- Loading state: `Connecting to Paystack…` with a subtle spinner.
- Close button with accessible label, but warn that closing leaves the booking unconfirmed.

Also show the return-from-Paystack verification state:

- Full-page or in-card loader.
- Animated but restrained heart/sparkle outline.
- Title: `Confirming your payment…`
- Body: `Please don't close this page while we verify your booking.`
- Small subtext: `This usually takes only a few seconds.`

The UI must not declare success based only on the modal closing; visually represent a server-side verification step before the success screen.

---

## Interface 6 — Payment Success

Design a celebratory but tasteful confirmation page. It should feel joyful and personal, not like a corporate order receipt.

Use a small success check inside a heart or a simple heart-and-sparkle line illustration. Keep confetti minimal and static or very restrained.

Eyebrow:

`DATE CONFIRMED ♡`

Headline:

`I'll see you soon!`

Primary message:

`Our date is set for Saturday, 15 August 2026, from 6:00 PM to 9:00 PM.`

Follow-up:

`I'm looking forward to it. A confirmation and payment receipt have been sent to alex@example.com.`

Confirmation card:

- Calendar icon + `Saturday, 15 August 2026`
- Clock icon + `6:00 PM – 9:00 PM (GMT)`
- Duration + `3 hours`
- Paid amount + `GH₵450 paid`
- Small reference + `Booking reference: BAD-150826-1842`

Primary CTA:

`Add to calendar`

Secondary CTA:

`Back to portfolio`

Optional quiet text action:

`Download confirmation`

End with:

`Until then, take care. ✨`

On mobile, center the celebratory heading but keep confirmation details left-aligned for scanability.

---

## Interface 7 — Payment Failed / Cancelled

Design a compassionate recoverable error state. Do not use alarming visuals, blame the guest, or erase their booking selections.

Icon: outlined broken heart, small warning sparkle, or payment card with a subtle alert badge—tasteful and not melodramatic.

Eyebrow:

`PAYMENT NOT COMPLETED`

Headline:

`That didn't go through.`

Body:

`Your payment wasn't completed, so the date is not confirmed yet. Your selections are still here—please try again.`

Retained summary:

- `Saturday, 15 August 2026`
- `6:00 PM – 9:00 PM (GMT)`
- `GH₵450`

Primary CTA:

`Try payment again`

Secondary CTA:

`Review booking details`

Quiet link:

`Choose another time`

Support note:

`If you were charged but still see this message, don't pay again. Contact me with your payment reference so I can check it.`

Also create a distinct cancelled state with copy:

- Title: `Payment cancelled`
- Body: `No worries—nothing was charged and your date is not confirmed. You can return whenever you're ready.`
- CTA: `Return to payment`

And create a verification-delay state:

- Title: `We're still checking your payment`
- Body: `Payment verification is taking a little longer than usual. Please keep your reference and check again shortly.`
- CTA: `Check payment status`
- Secondary action: `Back to portfolio`

---

## Persistent Booking Summary

On desktop Steps 1–3, display a sticky summary card titled `Our date so far` with a small heart outline.

Rows:

- `Date`
- `Time`
- `Duration`
- `Total`

Empty values should display `Not selected yet`, not `0` or misleading pricing. As the user makes choices, update the card immediately. Use a soft blush highlight behind the total. On mobile, use a compact collapsible summary labeled `Booking summary`, with the total always visible.

---

## Interaction, Accessibility, and Responsive Requirements

- Use a logical sequential flow and preserve all earlier selections when users go back.
- Use clear visible focus rings in crimson/wine with sufficient contrast.
- Minimum interactive target size: 44×44px.
- Never communicate availability, errors, completion, or selection through color alone; pair color with icons, labels, borders, or patterns.
- All form fields have persistent visible labels, not placeholder-only labels.
- Ensure body text and muted copy maintain WCAG AA contrast.
- Use semantic heading hierarchy and concise, helpful error copy.
- Dates must be written unambiguously in the long format in confirmations.
- Display timezone wherever time could be misunderstood: `Accra time (GMT)` or `(GMT)`.
- All pricing must use `GH₵` consistently.
- On mobile, keep the primary CTA full-width and easy to reach. A sticky bottom action area is acceptable if it does not cover calendar or form content and respects safe-area insets.
- On desktop, never stretch the form excessively wide.
- Calendar and time grids must not horizontally scroll at 360–390px.
- Support reduced-motion preferences. Use only subtle fades, a short step transition, and small success animation.
- Do not add countdown timers, pressure language, fake scarcity, testimonials, public attendee information, or social proof.
- Do not expose Benedicta's private address or exact meeting location in this flow. Meeting-place coordination can happen after confirmation.
- Do not add professional terms such as consultation, meeting agenda, discovery call, client, service package, invoice, or hire.

---

## Component and Visual Detail Checklist

Create a cohesive mini design system and show these reusable components in context:

- Focused route header with `ami` wordmark.
- Three-step progress indicator.
- Month calendar with available, selected, today, booked, past, and outside-month states.
- Time-slot button in default, hover, focus, selected, and disabled states.
- Labeled inputs, textarea, checkbox, helper text, and inline error messages.
- Primary crimson button, secondary outlined button, quiet text button, disabled button, and loading button.
- Booking summary card.
- Dynamic price breakdown.
- Preparation-fee information panel.
- Paystack security/trust row.
- Loading skeletons and verification loader.
- Success, failed, cancelled, and delayed-verification result cards.
- Minimal romantic icon language: heart outline, calendar, clock, lock, sparkle, check, alert, and back arrow.

Use Lucide-style outline icons or an equally clean icon system. Keep stroke weights consistent. Use subtle shadows only to establish hierarchy. Favor crisp layout and emotionally warm copy over decorative clutter.

---

## Frames / Screens to Generate

Generate and clearly label all of the following:

1. Mobile — Welcome + Step 1 date selection, default.
2. Mobile — Step 1 with a selected date.
3. Mobile — Step 1 no availability / load error states.
4. Mobile — Step 2 time selection with dynamic pricing.
5. Mobile — Step 2 validation error state.
6. Mobile — Step 3 review and guest details, default.
7. Mobile — Step 3 completed form + enabled payment CTA.
8. Mobile — Paystack handoff and payment verification.
9. Mobile — Payment success.
10. Mobile — Payment failed, cancelled, and delayed-verification states.
11. Desktop — Step 1 calendar with sticky summary.
12. Desktop — Step 2 time and pricing with sticky summary.
13. Desktop — Step 3 review, guest details, and payment CTA.
14. Desktop — Paystack handoff / verification overlay.
15. Desktop — Payment success.
16. Desktop — Payment failed / retry.

Ensure all screens feel like one continuous experience with consistent spacing, components, copy, responsive behavior, and selection data. Use the same example booking throughout the selected-state screens: Saturday, 15 August 2026, 6:00 PM–9:00 PM GMT, 3 hours, GH₵150 per hour, GH₵450 total.

The final design should make a visitor think: “This is personal, intentional, easy, safe, and genuinely charming.”
