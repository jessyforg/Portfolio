/*
 * Runs after `vite build`. Writes one HTML file per page into dist/, each with its own
 * title, description, canonical URL, and social-preview tags, plus sitemap.xml.
 *
 *   dist/index.html              → /
 *   dist/projects/kapital.html   → /projects/kapital   (Vercel "cleanUrls" drops .html)
 *   dist/projects/taraki.html    → /projects/taraki
 *   dist/404.html                → any unknown path, served with a 404 status
 *
 * Every file loads the same React app, which then renders the matching page.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import {
  OG_IMAGE_PATH,
  SITE_URL,
  indexedPages,
  pageMeta,
  type PageKey,
} from '../src/content/pageMeta.ts'

const DIST = 'dist'
const template = readFileSync(join(DIST, 'index.html'), 'utf8')

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function pageUrl(path: string) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

function render(key: PageKey) {
  const meta = pageMeta[key]
  const title = escapeHtml(meta.title)
  const description = escapeHtml(meta.description)
  const isIndexed = indexedPages.includes(key)
  const url = pageUrl(meta.path)

  const tags = [
    isIndexed
      ? `<link rel="canonical" href="${url}" />`
      : `<meta name="robots" content="noindex" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Jester Perez" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    isIndexed ? `<meta property="og:url" content="${url}" />` : '',
    `<meta property="og:image" content="${SITE_URL}${OG_IMAGE_PATH}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Jester Perez, Full-Stack Developer" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ]
    .filter(Boolean)
    .join('\n    ')

  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace('</head>', `    ${tags}\n  </head>`)

  // Fail the build loudly if the template changed and a replacement silently missed.
  if (!html.includes(`<title>${title}</title>`) || !html.includes(`content="${description}"`)) {
    throw new Error(`prerender: could not apply metadata for "${key}". Check index.html.`)
  }
  return html
}

function write(file: string, html: string) {
  const target = join(DIST, file)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, html)
  console.log(`prerender: wrote ${target}`)
}

write('index.html', render('home'))
write('projects/kapital.html', render('kapital'))
write('projects/taraki.html', render('taraki'))
write('404.html', render('notFound'))

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexedPages.map((key) => `  <url><loc>${pageUrl(pageMeta[key].path)}</loc></url>`).join('\n')}
</urlset>
`
write('sitemap.xml', sitemap)
