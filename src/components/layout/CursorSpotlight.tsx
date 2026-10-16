import { useEffect, useRef } from 'react'
import { motionAllowed } from '../../utils/reveal'
import styles from './CursorSpotlight.module.css'

/**
 * A soft gold glow behind the page content that follows the mouse.
 * Only active with a fine pointer (mouse/trackpad) and when the OS allows motion.
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!element || !finePointer || !motionAllowed()) return

    let frame = 0
    function handleMove(event: PointerEvent) {
      // Update at most once per animation frame.
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        element?.style.setProperty('--spot-x', `${event.clientX}px`)
        element?.style.setProperty('--spot-y', `${event.clientY}px`)
        element?.setAttribute('data-active', 'true')
      })
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  return <div ref={ref} className={styles.spotlight} aria-hidden="true" />
}
