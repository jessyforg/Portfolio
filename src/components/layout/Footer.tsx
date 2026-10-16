import { PageContainer } from './PageContainer'
import styles from './Footer.module.css'

interface FooterProps {
  /** On the desktop home page, line the text up with the content column beside the side panel. */
  alignWithContent?: boolean
}

/** A quiet colophon: how the site is built. Contact links live in the side panel and Contact section. */
export function Footer({ alignWithContent = false }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <PageContainer className={styles.inner} data-align={alignWithContent || undefined}>
        <p className={styles.colophon}>
          Built with <span className={styles.tech}>React</span>,{' '}
          <span className={styles.tech}>TypeScript</span>, and{' '}
          <span className={styles.tech}>Vite</span>, styled with{' '}
          <span className={styles.tech}>CSS Modules</span>, and deployed on{' '}
          <span className={styles.tech}>Vercel</span>. All text is set in the{' '}
          <span className={styles.tech}>Manrope</span> typeface.
        </p>
      </PageContainer>
    </footer>
  )
}
