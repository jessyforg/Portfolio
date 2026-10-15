/**
 * Builds a URL for a file in /public that respects Vite's `base` setting.
 * Pass the path relative to /public, e.g. assetUrl('assets/resume/file.pdf').
 */
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
