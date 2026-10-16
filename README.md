# Jester Perez — Portfolio

Personal portfolio for Jester Perez, an entry-level Full-Stack Developer. Static site built with React, Vite, and TypeScript.

> **Live site:** https://jesperez.vercel.app

## Tech stack

- React 19 + TypeScript (strict mode)
- Vite 8
- Custom CSS with CSS Modules (no CSS framework)
- ESLint (flat config, `typescript-eslint` strict) + Prettier
- Hosting: Vercel (static build), with GitHub Actions for CI checks

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
    layout/             Site-wide shell: SiteLayout, Navbar, Footer, PageContainer, SidePanel
                        (desktop sticky column on the home page), CursorSpotlight
    layout/ also holds Section (titled home-page section wrapper)
    sections/           Home-page sections: Hero, FeaturedProjects, About, Skills, Experience, Approach, Contact
    ui/                 Reusable elements: Button/ButtonLink, CodeLabel ("// label"), ProjectCard,
                        SectionHeading, TechTagList
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

## Layout

- **Home page:** a full-screen hero, then (at 1024px and wider) a two-column layout: a sticky `SidePanel` with identity, an "on this page" nav that marks the section being read (`useActiveSection`), and quick links, beside the scrolling sections. Below 1024px it is a single column and the header menu handles navigation.
- **Code-style labels:** section titles and nav items use `CodeLabel`, which adds a gold `// ` prefix hidden from screen readers. Labels are lowercased with CSS, so the underlying text (and accessible names) keep normal capitalization.
- **Monospace font:** a system stack (`--font-mono`), used only for labels.

## Styling conventions

- **Design tokens** live in `src/styles/tokens.css`. Component styles use `var(--token)` instead of raw colors, sizes, or spacing.
- **Component styles** use CSS Modules: `Component.tsx` sits next to `Component.module.css`.
- **Breakpoints:** `640px` and `900px` (mobile-first `min-width` queries). CSS variables can't be used in media queries, so these values are written literally.
- **Focus:** every interactive element shows a gold outline on keyboard focus (`:focus-visible` in `global.css`). Never remove it.
- **Motion:** CSS-only, no animation library, animating only `transform` and `opacity`.
  - Page-load entrances on the hero and case-study headers (CSS keyframes).
  - Scroll reveals: add `{...reveal(index)}` from `src/utils/reveal.ts` to an element; `useScrollReveal` (in `SiteLayout`) fades it up once when it enters the viewport. `index` staggers items in a group.
  - Page transitions: React Router's `viewTransition` prop on links that change page (View Transitions API; other browsers navigate instantly).
  - Page-wide cursor spotlight (`CursorSpotlight`, mouse/trackpad only) and hover-focus lists: hovering a project or experience row highlights it and dims the others (mouse only, because dimmed rows fall below text-contrast minimums).
  - Animated mobile menu and nav-link underline; the hero name slides up word by word.
  - With the OS "reduce motion" setting on, none of this runs and all content is visible immediately: `main.tsx` only enables the hidden "before reveal" state when motion is allowed.
  - No `scroll-behavior: smooth`: it made new pages visibly scroll after route changes.
- **Font:** Manrope Variable, self-hosted via `@fontsource-variable/manrope` (no external font requests).

## Content and assets

- All text about Jester lives in `src/content/`. Every claim must be supported by the resume or verified project evidence; do not add metrics, testimonials, or features that are not confirmed.
- Do not show the phone number or home address on site pages. The resume PDF includes the phone number by Jester's choice; the home address must never be published.
- **Updating the resume:** export from Word, then replace `public/assets/resume/jester-perez-resume.pdf` (same filename). Check the PDF's Author property says Jester Perez, not the Word template author.
- Asset filenames are lowercase with hyphens (e.g. `profile-portrait-960.webp`). Images are WebP with metadata stripped, and are referenced through `assetUrl()`.
- Project summaries in `content/projects.ts` are shared by the home-page cards and the case-study pages. Case-study detail lives in `content/caseStudies.ts` and is rendered by one template, `pages/projects/CaseStudyPage.tsx`.
- Case-study claims were verified against the source code (see the comment at the top of `caseStudies.ts`). Project repositories are intentionally not linked.

## Quality checks

Last full run: 2026-10-16, against the local production build (`npm run build`, then `npm run preview`).

| Check                                                    | Tool                                                                                      | Result                                                                                                          |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Type check, lint, formatting, build                      | `npm run typecheck`, `lint`, `format:check`, `build`                                      | Pass                                                                                                            |
| Accessibility rules (WCAG 2.2 A/AA + best practices)     | axe-core 4.14, all pages at 375px and 1280px, mobile menu open                            | 0 violations                                                                                                    |
| Keyboard                                                 | Scripted Tab traversal of every page                                                      | All focusable elements reached; focus ring visible and never hidden by the sticky header                        |
| Target size (WCAG 2.5.8)                                 | Scripted measurement                                                                      | All controls at least 24×24px                                                                                   |
| Text spacing (WCAG 1.4.12)                               | Spacing overrides at 320, 375, and 1280px                                                 | No overflow or clipping                                                                                         |
| Reflow                                                   | 320–1440px viewports                                                                      | No horizontal scrolling                                                                                         |
| Lighthouse 13.5 (simulated throttling, local)            | Home and Kapital, mobile and desktop                                                      | Performance 98–100, Accessibility 100, Best Practices 100, SEO 92 (before robots.txt was added)                 |
| Functional                                               | Scripted browser tests (navigation, cards, history, refresh, resume download, copy email) | Pass                                                                                                            |
| **Production** (https://jesperez.vercel.app, 2026-10-16) | All browser suites above, run against the live site                                       | 157 checks pass; no failed requests on real pages                                                               |
| Production routing                                       | HTTP checks                                                                               | Pages 200; unknown paths real 404; `/projects/kapital/` and `.html` 308-redirect to the clean URL; HTTP → HTTPS |
| Lighthouse 13.5 on production                            | All 3 pages, mobile and desktop                                                           | Performance 99–100, Accessibility 100, Best Practices 100, SEO 100; mobile LCP 1.7 s, CLS ≤ 0.012               |
| CI                                                       | GitHub Actions on `c64100e`                                                               | Pass                                                                                                            |

Lighthouse scores are lab measurements (simulated throttling), not real-user data; Interaction to Next Paint (INP) can only be measured from real visitors. Automated checks don't replace testing with a screen reader or on real devices.

## Routing

React Router (`createBrowserRouter`) with these routes:

| Path                | Page               |
| ------------------- | ------------------ |
| `/`                 | Home               |
| `/projects/kapital` | Kapital case study |
| `/projects/taraki`  | TARAKI case study  |
| anything else       | Page not found     |

Nav items link to home-page sections (`/#work`, `/#about`, `/#contact`). After each navigation, focus moves to the new section or `<main>` so keyboard and screen-reader users land on the new content.

## Deployment

Hosted on **Vercel** (free Hobby plan) at **https://jesperez.vercel.app**.

- **How it deploys:** Vercel's GitHub integration builds and deploys every push to `main`. Pushes to other branches get preview URLs. Settings live in `vercel.json` (framework Vite, output `dist`, clean URLs, no trailing slash), so the Vercel dashboard needs no manual configuration.
- **Quality gate:** `.github/workflows/ci.yml` runs type checking, linting, formatting, and the build on every push and pull request. It does not deploy.
- **Per-page HTML:** after `vite build`, `scripts/prerender.ts` writes `dist/index.html`, `dist/projects/kapital.html`, `dist/projects/taraki.html`, and `dist/404.html`, each with its own title, description, canonical URL, and Open Graph tags, plus `dist/sitemap.xml`. Page metadata lives in `src/content/pageMeta.ts`.
- **Routing on Vercel:** real files mean direct visits and refreshes return 200 without a catch-all rewrite. Unknown paths return a real 404 status with the site's "Page not found" page. `/projects/kapital/` and `/projects/kapital.html` redirect to `/projects/kapital`.

### Changing the domain

1. Update `SITE_URL` in `src/content/pageMeta.ts`.
2. Update the `Sitemap:` line in `public/robots.txt`.
3. Regenerate `public/og-image.png` if you want the new URL shown on the preview image.

### Troubleshooting

- **"No Output Directory named build found":** Vercel guessed the wrong framework. `vercel.json` sets the framework and output directory; make sure it is committed.
- **Case-study URL returns 404 on Vercel:** check that the build log shows `prerender: wrote dist/projects/...` lines.
- **Push rejected with "Invalid username or token":** clear the old `git:https://github.com` entry in Windows Credential Manager and push again.

## Known limitations

- Not yet tested with a screen reader (e.g. NVDA) or on physical phones/tablets; checks so far are automated plus visual review of screenshots.
