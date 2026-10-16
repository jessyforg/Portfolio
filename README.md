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
public/assets/            Static files copied as-is: profile/ (portrait), resume/ (PDF), projects/ (screenshots)
src/
  app/                  App root and route table (routes.tsx)
  components/
    layout/             Site-wide shell: SiteLayout, Navbar, Footer, PageContainer
    layout/ also holds Section (titled home-page section wrapper)
    sections/           Home-page sections: Hero, FeaturedProjects, About, Skills, Experience, Approach, Contact
    ui/                 Reusable elements: Button/ButtonLink, ProjectCard, SectionHeading, TechTagList
  content/              Authored content: portfolio.ts (profile, about, skills, experience, contact) and projects.ts
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
- **Motion:** anchor and route navigation jump instantly (no smooth scrolling, which made new pages visibly scroll after route changes). Transitions are disabled when the OS "reduce motion" setting is on.
- **Font:** Manrope Variable, self-hosted via `@fontsource-variable/manrope` (no external font requests).

## Content and assets

- All text about Jester lives in `src/content/`. Every claim must be supported by the resume or verified project evidence; do not add metrics, testimonials, or features that are not confirmed.
- Do not show the phone number or home address on site pages. The resume PDF includes the phone number by Jester's choice; the home address must never be published.
- **Updating the resume:** export from Word, then replace `public/assets/resume/jester-perez-resume.pdf` (same filename). Check the PDF's Author property says Jester Perez, not the Word template author.
- Asset filenames are lowercase with hyphens (e.g. `profile-portrait-960.webp`). Images are WebP with metadata stripped, and are referenced through `assetUrl()`.
- Project summaries in `content/projects.ts` are shared by the home-page cards and the case-study pages. Case-study detail lives in `content/caseStudies.ts` and is rendered by one template, `pages/projects/CaseStudyPage.tsx`.
- Case-study claims were verified against the source code (see the comment at the top of `caseStudies.ts`). Project repositories are intentionally not linked.

## Routing

React Router (`createBrowserRouter`) with these routes:

| Path                | Page               |
| ------------------- | ------------------ |
| `/`                 | Home               |
| `/projects/kapital` | Kapital case study |
| `/projects/taraki`  | TARAKI case study  |
| anything else       | Page not found     |

Nav items link to home-page sections (`/#work`, `/#about`, `/#contact`). After each navigation, focus moves to the new section or `<main>` so keyboard and screen-reader users land on the new content.

## Known limitations

- Not yet deployed. Hosting on Vercel needs a rewrite rule so direct visits to case-study URLs work (planned for Milestone 6).
