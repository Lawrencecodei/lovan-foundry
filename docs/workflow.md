# The Pipeline, Discovery to Deploy

## 1. Discovery call

Same as your current process. Extra output needed from this call now: enough to
fill in `DESIGN.md` — the business context, the one action the site should drive,
and what the client has already rejected (often more useful than what they say
they want).

## 2. Instantiate the client project

Either:
- Click "Use this template" on the `lovan-foundry` GitHub repo → name the new
  repo → clone it locally, **or**
- From inside `lovan-foundry/`, run `./scripts/new-client.sh client-name`

Either way you end up with a clean project containing the foundry infra, an
empty `DESIGN.md`, and `CLAUDE.md` already in place.

## 3. Fill DESIGN.md

Do this before opening Claude Code to build anything. This is the artifact that
turns a discovery call into something the frontend-design skill can actually be
steered by — vague inputs produce vague, generic output regardless of how good
the skill is.

## 4. Build

Open Claude Code (terminal, in the new client folder). It reads `CLAUDE.md`
automatically. Prompt it to build against what's in `DESIGN.md` — you're not
re-explaining the brief, you're pointing at the file.

Let the first pass run loose. Then do the corrective loop: name exactly what
converged toward generic ("that hero is symmetrical again," "you defaulted to a
sans-serif, DESIGN.md called for a serif") and correct it specifically. This
loop, not the first prompt, is where "premium" actually comes from.

## 5. Quality passes

In order, per `CLAUDE.md`: spacing/typography/states → accessibility →
motion/performance. Don't deploy a first-pass build.

## 6. Deploy

Vercel, same as your other projects. Preview deployments per branch for client
review before promoting to production.

## 7. Close out

Once the client site is live and stable, that repo is done — it doesn't feed
back into `lovan-foundry` unless you built a genuinely reusable *infrastructure*
piece (not a styled component) worth promoting into the shared layer for future
clients.
