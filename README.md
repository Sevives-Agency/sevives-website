# sevives-website — work in progress (~60%)

The public, **in-construction** build of the [Sevives](https://github.com/Sevives-Agency)
website — an AI studio in Brussels. It's deliberately a **~60% build**: enough real
structure, content and patterns to show *how* the site is made, with the hardest
**~40%** — the signature polish — kept for the teaching channel.

> Think of it as a building site you're invited to walk through: the frame is up, the
> rooms are taking shape, and the finishing work is being filmed.

## Why this repo is public

It's the support material for a **YouTube channel** where the build is taught in the
open. Giving away the accessible 60% is the point — anyone can pick up the patterns.
The final 40% (the exact feel, the signature touches) is what the courses cover.

## Stack

- **Next.js 15** — App Router, TypeScript, React 19 Server Components
- **Tailwind CSS** — custom theme (sage / taupe / warm accent)
- **next-intl** — multilingual routing, **ES** default, then **FR**, then **EN**
- **React Three Fiber** (three.js / drei) — the 3D carousel pattern

## What's in the ~60% (public)

- Real WIP content across **Home · Blueprints · Contact** (not placeholders)
- The three real Sevives Blueprints, presented as a **draft** (no final scope/pricing)
- A **generic, reusable 3D carousel pattern** — `src/components/carousel/` —
  fully commented: circular layout, a rotating group, drag + inertia, facing-cull
  labels. Take it and reuse it.
- Fully wired i18n (ES/FR/EN), themed layout primitives, a tidy App Router structure

## What's kept for the ~40% (taught, not shipped here)

- The **signature feel** of the carousel — exact easing curves, snap-to-card,
  custom material, the precise inertia + fade timing. Every spot is flagged inline
  with `🎓` and left at a neutral default on purpose.
- The final visual polish and the touches that make it unmistakably *ours*.

## Not here, on principle

- **No secrets, no keys, no real `.env`** — the contact form is UI only and isn't
  wired to any backend (nothing leaves the browser).
- **Nothing copied from the production site** — all copy here is written fresh for
  this build.

## Getting started

```bash
npm install
npm run dev
# http://localhost:3000  →  redirects to /es
```

## Structure

```
src/
  app/[locale]/        layout · page (home) · blueprints · contact · not-found
  app/globals.css
  components/          Header · Footer · Container · Button · LinkButton · LocaleSwitcher
  components/carousel/ Carousel3D · Carousel3DSection   ← the reusable 3D pattern
  i18n/                routing · request · navigation
  lib/                 cn
messages/              es · fr · en
```

---

A work-in-progress showcase, taught in public. Reuse the patterns freely; the
finishing touches live on the channel. **(~60% — more landing soon.)**
