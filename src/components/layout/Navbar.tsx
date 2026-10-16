import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { profile, resumeUrl } from '../../content/portfolio'
import { navItems } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'
import { ButtonLink } from '../ui/Button'
import { CodeLabel } from '../ui/CodeLabel'
import { Logo } from '../ui/Logo'
import { PageContainer } from './PageContainer'
import styles from './Navbar.module.css'

interface NavbarProps {
  /**
   * On the desktop home page the header scrolls away with the hero instead of
   * sticking, because the side panel takes over navigation there.
   */
  scrollsAway?: boolean
}

const sectionIds = navItems.map((item) => item.sectionId)

/** Floating "glass" navigation bar, inset from the page edges. */
export function Navbar({ scrollsAway = false }: NavbarProps) {
  const location = useLocation()
  // The menu remembers which location it was opened on, so any navigation
  // (a link click or the browser's back button) closes it automatically.
  const [openedAt, setOpenedAt] = useState<string | null>(null)
  const isOpen = openedAt === location.key
  const toggleRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  // Highlights the link for the home-page section being read (null on other pages).
  const activeSection = useActiveSection(sectionIds)
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenedAt(null)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Once the page is scrolled, the bar gets a deeper shadow so it reads as floating
  // above the content. Set as an attribute to avoid re-rendering on every scroll.
  useEffect(() => {
    function update() {
      headerRef.current?.toggleAttribute('data-scrolled', window.scrollY > 8)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header ref={headerRef} className={styles.header} data-scrolls-away={scrollsAway || undefined}>
      <PageContainer>
        <div className={styles.bar}>
          <Link to="/" className={styles.wordmark} viewTransition>
            <Logo />
            <span className="visually-hidden">{profile.name}, home</span>
          </Link>

          <nav aria-label="Main" className={styles.nav}>
            <button
              ref={toggleRef}
              type="button"
              className={styles.toggle}
              aria-expanded={isOpen}
              aria-controls="main-menu"
              onClick={() => setOpenedAt(isOpen ? null : location.key)}
            >
              <span className={styles.toggleIcon} data-open={isOpen} aria-hidden="true" />
              Menu
            </button>

            <ul id="main-menu" role="list" className={styles.menu} data-open={isOpen}>
              {navItems.map((item) => (
                <li key={item.sectionId}>
                  <Link
                    to={{ pathname: '/', hash: `#${item.sectionId}` }}
                    className={styles.link}
                    aria-current={
                      isHome && activeSection === item.sectionId ? 'location' : undefined
                    }
                    // Cross-fade only when leaving another page; on the home page these just scroll.
                    viewTransition={!isHome}
                    onClick={() => setOpenedAt(null)}
                  >
                    <CodeLabel>{item.label}</CodeLabel>
                  </Link>
                </li>
              ))}
              <li className={styles.resumeItem}>
                <ButtonLink href={resumeUrl} variant="secondary" size="sm">
                  Resume<span className="visually-hidden"> (PDF)</span>
                </ButtonLink>
              </li>
            </ul>
          </nav>
        </div>
      </PageContainer>
    </header>
  )
}
