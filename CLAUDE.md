# LOVAN Digital — Project Conventions

This file is read automatically by Claude Code at the start of every session in this
repo. It encodes how LOVAN builds sites, independent of which client this is.

## Before writing any code

1. Read `DESIGN.md` in this repo's root. It contains this specific client's aesthetic
   direction, decided from the discovery call. Do not start designing until you've
   read it — if it's still blank, stop and say so rather than guessing.
2. Use the `frontend-design` skill for any new page, component, or interface work.
   Commit to the aesthetic direction named in DESIGN.md; don't hedge across multiple
   directions.
3. Check `foundry/src/motion/` for existing animation utilities before writing new
   GSAP/Framer Motion code from scratch — reuse the mechanics, not the styling.

## Stack conventions

- **Frontend**: React + Vite + Tailwind. Deploy target is Vercel.
- **Backend (when the engagement needs one)**: Node/Express + Prisma + PostgreSQL
  (Neon), deployed on Railway — same pattern as NestMatch.
- **Animation**: GSAP for scroll-triggered/timeline work, Framer Motion for
  React-state-driven UI motion. Don't reach for both on the same element.
- **Tailwind**: use CSS variables for all color/spacing tokens (defined in
  `foundry/src/tokens/`) rather than hardcoded hex values or arbitrary Tailwind
  values, so the client's palette stays swappable.

## Quality passes — run these in order after the first build, not before

1. First pass: `/frontend-design` generates the page/section.
2. Second pass: fix spacing, typography scale, and interactive states (hover,
   focus, active, disabled) across every component.
3. Third pass: accessibility — keyboard navigation, label associations, focus
   order, semantic HTML.
4. Fourth pass: motion and performance — respect `prefers-reduced-motion`, check
   image optimization, verify Core Web Vitals aren't regressed by animation.

Do not skip straight to deploy after pass one. The gap between "generated" and
"premium" is almost entirely in passes two through four.

## What NOT to do

- Don't reuse a styled component (not just the mechanics) from a previous client's
  build. If something looked great on client A's site, that's a signal to invent a
  new equivalent for this client, not to copy it.
- Don't default to purple gradients, Inter/Roboto/Arial, or symmetrical hero
  sections unless the DESIGN.md direction genuinely calls for it.
- Don't converge on the same "safe distinctive" choice across clients (e.g. always
  reaching for Space Grotesk). Vary deliberately.

## Copy and content

Copy is drafted separately (per LOVAN's usual process) and dropped into
`src/content/`. Don't invent client value propositions or claims — flag missing
copy rather than filling it with placeholder marketing language that might get
shipped by accident.
