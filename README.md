# LOVAN Foundry

This is the base template LOVAN Digital uses to build custom, premium websites for
clients. It is **not** a monorepo of client sites — it's a template repo. Every new
client engagement gets its own clean repo instantiated from this one, with no shared
git history and no coupling to other clients' code.

## Why this shape, not a shared component library

Sharing *components* (Hero, Nav, CardGrid...) across client sites pulls every site
toward looking the same, which fights the entire premium/unique positioning. Instead,
this template shares the **infrastructure layer only**:

- Build tooling (Vite + Tailwind conventions)
- Motion utilities (GSAP/Framer Motion wrappers — mechanics, not aesthetics)
- The Claude Code conventions (`CLAUDE.md`)
- Deployment config for Vercel

Everything above that layer — typography, color, layout, component design — is decided
fresh per client by the frontend-design skill, steered by that client's `DESIGN.md`.

## Repo layout

```
lovan-foundry/
├── foundry/              Shared infra — copied into every new client project
│   └── src/
│       ├── tokens/        CSS variable contracts (structure, not values)
│       ├── motion/        GSAP + Framer Motion utility wrappers
│       └── primitives/    Layout mechanics only (grid/flex helpers, not styled components)
├── client-template/       What "Use this template" actually instantiates
│   ├── DESIGN.md           Blank aesthetic brief — fill this from discovery, before coding
│   └── src/
├── scripts/
│   └── new-client.sh      Local helper if you're not using GitHub's template feature
├── CLAUDE.md              Project-wide conventions for Claude Code (this file matters most)
└── docs/
    └── workflow.md         The step-by-step pipeline, discovery to deploy
```

## One-time setup (do this once, on your workstation)

1. `git init` this folder, push it to GitHub as `lovan-foundry`.
2. In the repo Settings, check "Template repository."
3. In Claude Code (terminal), install the frontend-design plugin globally so it's
   available in every project you open, not just this one:
   ```
   /plugin marketplace add anthropics/claude-code
   /plugin install frontend-design@claude-code-plugins
   ```
4. Optionally add the GSAP and shadcn community skills the same way, once you've
   read their SKILL.md files and are comfortable with them (see docs/workflow.md).

## Per-client workflow (do this for every new engagement)

See `docs/workflow.md` for the full sequence. Short version: template → fill
DESIGN.md from discovery → open Claude Code in the new repo → build against the
skill → QA passes → deploy.
