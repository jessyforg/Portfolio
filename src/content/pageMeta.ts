/*
 * Page titles, descriptions, and the public site URL.
 *
 * Used in two places:
 * - React pages set <title> from here while the app runs.
 * - scripts/prerender.ts writes each page's own HTML file at build time, so search
 *   engines and link previews (which don't run JavaScript) see the right metadata.
 *
 * Keep this file free of imports so Node can run the build script directly.
 */

/** Public URL without a trailing slash. Change this if a custom domain is added. */
export const SITE_URL = 'https://jesperez.vercel.app'

export interface PageMeta {
  /** URL path without a trailing slash ("/" for the home page). */
  path: string
  title: string
  description: string
}

export const pageMeta = {
  home: {
    path: '/',
    title: 'Jester Perez | Full-Stack Developer Portfolio',
    description:
      'Jester Perez is an entry-level full-stack developer. See case studies of Kapital and TARAKI, web applications built with PHP, React, Node.js, and MySQL.',
  },
  kapital: {
    path: '/projects/kapital',
    title: 'Kapital | Project Case Study — Jester Perez',
    description:
      'How Kapital, a startup networking platform built with PHP and MySQL, works: Jester Perez’s role, its features, technical decisions, and current status.',
  },
  taraki: {
    path: '/projects/taraki',
    title: 'TARAKI | Project Case Study — Jester Perez',
    description:
      'How the TARAKI website, a React, Node.js, and MySQL platform for an innovation consortium, was built: Jester Perez’s role, its features, and status.',
  },
  notFound: {
    path: '/404',
    title: 'Page not found — Jester Perez',
    description: 'This address doesn’t match any page on Jester Perez’s portfolio.',
  },
} satisfies Record<string, PageMeta>

export type PageKey = keyof typeof pageMeta

/** Pages that should be listed in the sitemap and indexed by search engines. */
export const indexedPages: PageKey[] = ['home', 'kapital', 'taraki']

/** Social preview image (1200×630), relative to the site root. */
export const OG_IMAGE_PATH = '/og-image.png'
