# Jester Perez — Portfolio

Personal portfolio for Jester Perez, an entry-level Full-Stack Developer. Static site built with React, Vite, and TypeScript.

> **Status:** in development (foundation only). Not yet deployed.

## Tech stack

- React 19 + TypeScript (strict mode)
- Vite 8
- Custom CSS with CSS Modules (no CSS framework)
- ESLint (flat config, `typescript-eslint` strict) + Prettier
- Planned hosting: Vercel (static build)

## Prerequisites

- Node.js 24 LTS (see `.nvmrc`); npm 11 comes bundled with it

## Getting started

```bash
npm ci        # install exact versions from package-lock.json
npm run dev   # start the dev server at http://localhost:5173
```

## Scripts

| Command                | What it does                                          |
| ---------------------- | ----------------------------------------------------- |
| `npm run dev`          | Start the Vite dev server                             |
| `npm run build`        | Type-check, then build the production site to `dist/` |
| `npm run preview`      | Serve the production build locally                    |
| `npm run typecheck`    | Run the TypeScript compiler without emitting          |
| `npm run lint`         | Run ESLint                                            |
| `npm run format`       | Format all files with Prettier                        |
| `npm run format:check` | Check formatting without changing files               |

## Project structure

```
public/                 Static files copied as-is (favicon, later: images, resume)
src/
  app/                  App root and route table (routes.tsx)
  components/
    layout/             Site-wide shell: SiteLayout, Navbar, Footer, PageContainer
    ui/                 Reusable elements: Button/ButtonLink, SectionHeading, TechTagList
  content/              Authored content (profile, contact links, resume URL)
  data/                 Navigation items
  pages/                Route-level pages
  styles/               tokens.css (design tokens), reset.css, global.css
  types/                Shared TypeScript types
  utils/                Helpers (assetUrl for files in /public)
  main.tsx              Entry point: loads font, global styles, and the app
index.html              HTML shell and default metadata
vite.config.ts          Vite configuration (base path lives here)
eslint.config.js        Lint rules
```

## Styling conventions

- **Design tokens** live in `src/styles/tokens.css`. Component styles use `var(--token)` instead of raw colors, sizes, or spacing.
- **Component styles** use CSS Modules: `Component.tsx` sits next to `Component.module.css`.
- **Breakpoints:** `640px` and `900px` (mobile-first `min-width` queries). CSS variables can't be used in media queries, so these values are written literally.
- **Focus:** every interactive element shows a gold outline on keyboard focus (`:focus-visible` in `global.css`). Never remove it.
- **Motion:** smooth scrolling and transitions are disabled when the OS "reduce motion" setting is on.
- **Font:** Manrope Variable, self-hosted via `@fontsource-variable/manrope` (no external font requests).

## Routing

React Router (`createBrowserRouter`) with these routes:

| Path                | Page                                      |
| ------------------- | ----------------------------------------- |
| `/`                 | Home                                      |
| `/projects/kapital` | Kapital case study (placeholder until M4) |
| `/projects/taraki`  | TARAKI case study (placeholder until M4)  |
| anything else       | Page not found                            |

Nav items link to home-page sections (`/#work`, `/#about`, `/#contact`). After each navigation, focus moves to the new section or `<main>` so keyboard and screen-reader users land on the new content.

## Known limitations

- The home page and both case-study pages are temporary placeholders.
- The resume PDF has not been added, so the **Resume** link currently returns 404.
- Not yet deployed. Hosting on Vercel needs a rewrite rule so direct visits to case-study URLs work (planned for Milestone 6).
