import { useEffect } from 'react'
import { motionAllowed } from '../utils/reveal'

/**
 * Reveals every [data-reveal] element once, the first time it scrolls into view.
 * Re-runs when `key` changes (pass the route pathname) so new pages are observed.
 */
export function useScrollReveal(key: string) {
  useEffect(() => {
    if (!motionAllowed()) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        }
      },
      // Start slightly before the element reaches the bottom edge of the screen.
      { rootMargin: '0px 0px -8% 0px' },
    )

    document
      .querySelectorAll('[data-reveal]:not(.is-revealed)')
      .forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [key])
}
