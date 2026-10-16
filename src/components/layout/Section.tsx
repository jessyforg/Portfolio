import type { ReactNode } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './Section.module.css'

interface SectionProps {
  /** Anchor id, e.g. "work" → reachable at /#work. */
  id: string
  title: string
  intro?: ReactNode
  children: ReactNode
}

/**
 * A titled home-page section with consistent spacing and accessible labelling.
 * Width comes from the surrounding layout (the content column on the home page).
 */
export function Section({ id, title, intro, children }: SectionProps) {
  const headingId = `${id}-title`

  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <SectionHeading id={headingId} title={title} intro={intro} />
      {children}
    </section>
  )
}
