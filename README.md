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
public/            Static files copied as-is (favicon, later: images, resume)
src/
  app/             Root App component
  main.tsx         Entry point
index.html         HTML shell and default metadata
vite.config.ts     Vite configuration (base path lives here)
eslint.config.js   Lint rules
```

The structure will grow as later milestones add layout, sections, and case-study pages.

## Known limitations

- Only a placeholder page exists; no real content yet.
- Routing, design tokens, and deployment are not yet implemented.
