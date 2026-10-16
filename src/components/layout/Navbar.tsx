import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { profile, resumeUrl } from '../../content/portfolio'
import { navItems } from '../../data/navigation'
import { ButtonLink } from '../ui/Button'
import { CodeLabel } from '../ui/CodeLabel'
import { PageContainer } from './PageContainer'
import styles from './Navbar.module.css'

interface NavbarProps {
  /**
   * On the desktop home page the header scrolls away with the hero instead of
   * sticking, because the side panel takes over navigation there.
   */
  scrollsAway?: boolean
}

export function Navbar({ scrollsAway = false }: NavbarProps) {
  const location = useLocation()
  // The menu remembers which location it was opened on, so any navigation
  // (a link click or the browser's back button) closes it automatically.
  const [openedAt, setOpenedAt] = useState<string | null>(null)
  const isOpen = openedAt === location.key
  const toggleRef = useRef<HTMLButtonElement>(null)

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

  return (
    <header className={styles.header} data-scrolls-away={scrollsAway || undefined}>
      <PageContainer className={styles.bar}>
        <Link to="/" className={styles.wordmark} viewTransition>
          {profile.name}
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
                  // Cross-fade only when leaving another page; on the home page these just scroll.
                  viewTransition={location.pathname !== '/'}
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
      </PageContainer>
    </header>
  )
}
