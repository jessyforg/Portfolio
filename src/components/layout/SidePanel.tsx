import { Link } from 'react-router'
import { contactLinks, profile, resumeUrl } from '../../content/portfolio'
import { useActiveSection } from '../../hooks/useActiveSection'
import { ButtonLink } from '../ui/Button'
import { CodeLabel } from '../ui/CodeLabel'
import styles from './SidePanel.module.css'

export interface PanelSection {
  id: string
  label: string
}

interface SidePanelProps {
  sections: PanelSection[]
}

/**
 * Desktop-only sticky column beside the home-page content: identity, an
 * "on this page" nav that highlights the section being read, and quick links.
 * Hidden on smaller screens, where the header menu covers navigation.
 */
export function SidePanel({ sections }: SidePanelProps) {
  const activeId = useActiveSection(sections.map((s) => s.id))

  return (
    <aside className={styles.panel} aria-label="Profile summary">
      <div>
        <p className={styles.name}>{profile.name}</p>
        <p className={styles.role}>
          <CodeLabel>{profile.roleLine}</CodeLabel>
        </p>
        <p className={styles.tagline}>{profile.tagline}</p>

        <nav aria-label="Sections on this page" className={styles.nav}>
          <ul role="list">
            {sections.map((section) => {
              const isActive = section.id === activeId
              return (
                <li key={section.id}>
                  <Link
                    to={`/#${section.id}`}
                    className={styles.navLink}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    <span className={styles.indicator} aria-hidden="true" />
                    {section.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className={styles.footer}>
        <ButtonLink href={resumeUrl} variant="secondary" size="sm">
          Resume<span className="visually-hidden"> (PDF)</span>
        </ButtonLink>
        <ul role="list" aria-label="Contact links" className={styles.links}>
          {Object.values(contactLinks).map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
