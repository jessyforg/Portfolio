import { useEffect, useRef } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { CursorSpotlight } from './CursorSpotlight'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import styles from './SiteLayout.module.css'

/**
 * Shared shell for every page.
 *
 * Scrolling after navigation is handled by React Router's <ScrollRestoration>
 * (top of page for new routes, saved position on back/forward, #hash targets).
 * This component adds focus management so keyboard and screen-reader users
 * start reading at the new content instead of staying on the clicked link.
 */
export function SiteLayout() {
  const { pathname, hash } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const isFirstRender = useRef(true)
  useScrollReveal(pathname)

  useEffect(() => {
    // Don't steal focus on the initial page load.
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    const focusTarget = target ?? mainRef.current
    if (!focusTarget) return

    if (!focusTarget.hasAttribute('tabindex')) {
      focusTarget.setAttribute('tabindex', '-1')
    }
    focusTarget.focus({ preventScroll: true })
  }, [pathname, hash])

  return (
    <>
      <CursorSpotlight />
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>
      <Navbar />
      <main id="main" ref={mainRef} tabIndex={-1} className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
