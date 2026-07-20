# LOVAN Digital — Project Conventions

This file is read automatically by Claude Code at the start of every session in this
repo. It encodes how LOVAN builds sites, independent of which client this is.

## Before writing any code

Invoke the installed skills in this order — each one narrows what the next one does:

1. Read `DESIGN.md` in this repo's root. It contains this specific client's aesthetic
   direction, decided from the discovery call. Do not start designing until you've
   read it — if it's still blank, stop and say so rather than guessing.
2. Use `ui-ux-pro-max` to pull concrete starting points — a color palette, font
   pairing, and layout/UX guidelines tuned to the client's industry and the
   aesthetic direction from DESIGN.md. Treat its output as raw material, not a
   final decision.
3. Use `frontend-design` to execute on that material with a real point of view.
   Its anti-generic rules take precedence over anything `ui-ux-pro-max` suggested
   that leans safe or default (e.g. Inter/system fonts, an evenly-balanced palette,
   a predictable grid) — commit to the DESIGN.md direction rather than hedging
   back toward whichever option looks most "professional."
4. For any animation or motion work, use `gsap-skills` for correct GSAP API usage
   (timelines, ScrollTrigger, cleanup on unmount) and check `foundry/src/motion/`
   for existing utilities before writing new animation code from scratch — reuse
   the mechanics, not the styling.
5. Only use the `shadcn` skill if this specific client project has shadcn
   initialized (`components.json` present). It's a per-client decision, not a
   default — most LOVAN builds won't need it.

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
