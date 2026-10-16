import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently crossing the middle of the screen,
 * so navigation can show "you are here". Returns null above the first section.
 */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const idsKey = ids.join(',')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      // A thin band across the middle of the viewport: whichever section overlaps it is active.
      { rootMargin: '-45% 0px -50% 0px' },
    )

    for (const id of idsKey.split(',')) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
    return () => observer.disconnect()
  }, [idsKey])

  return activeId
}
