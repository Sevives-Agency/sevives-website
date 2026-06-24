# sevives-website — Next.js i18n starter

A clean, **intentionally empty** Next.js App Router starter. It ships the *skeleton* —
structure, theming and i18n wiring — and **no real content**. Every page renders
generic placeholders.

Think of it as a show house: built with care, beautiful to walk through, with nobody
living in it yet.

## Stack

- **Next.js 15** — App Router, TypeScript, React Server Components
- **Tailwind CSS** — custom theme (sage / taupe / warm accent)
- **next-intl** — multilingual routing, **ES** default, then **FR**, then **EN**

## What's inside

- Clean App Router structure built around a `[locale]` segment
- Reusable layout primitives: `Header`, `Footer`, `Container`, `Button`, `LocaleSwitcher`
- Fully wired i18n: routing, middleware and per-locale message files
- A considered Tailwind theme and typographic scale

## What's *not* inside (on purpose)

- No real landing / services / contact content — placeholders only
- No business logic, no data, no secrets
- Nothing copied from any production site

## Getting started

```bash
npm install
npm run dev
# http://localhost:3000  →  redirects to /es
```

## Structure

```
src/
  app/[locale]/   layout · page · not-found
  app/globals.css
  components/      Header · Footer · Container · Button · LocaleSwitcher
  i18n/           routing · request · navigation
  lib/            cn
messages/         es · fr · en
```

## Adding a locale

1. Add the code to `src/i18n/routing.ts`
2. Create `messages/<locale>.json`

---

This repository is a starter / template. Replace the placeholder content with your own.
