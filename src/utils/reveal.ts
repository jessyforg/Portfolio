import type { CSSProperties } from 'react'

/**
 * Props that mark an element for a scroll reveal (see useScrollReveal and global.css).
 * `index` staggers items that appear together, e.g. cards in a grid: 0, 1, 2…
 */
export function reveal(index = 0) {
  return {
    'data-reveal': '',
    style: { '--reveal-index': index } as CSSProperties,
  }
}

/** True when the user hasn't asked their OS to reduce motion. */
export function motionAllowed() {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
