import { contactLinks, profile } from '../../content/portfolio'
import { PageContainer } from './PageContainer'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <PageContainer className={styles.inner}>
        <p className={styles.identity}>
          <span className={styles.name}>{profile.name}</span>
          <span className={styles.role}>{profile.role}</span>
        </p>

        <ul role="list" aria-label="Contact links" className={styles.links}>
          {Object.values(contactLinks).map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.meta}>
          © {year} {profile.name}. Built with React, TypeScript, and Vite.
        </p>
      </PageContainer>
    </footer>
  )
}
