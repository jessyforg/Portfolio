import type { ReactNode } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { PageContainer } from './PageContainer'
import styles from './Section.module.css'

interface SectionProps {
  /** Anchor id, e.g. "work" → reachable at /#work. */
  id: string
  title: string
  intro?: ReactNode
  children: ReactNode
}

/** A titled home-page section: consistent spacing, divider, and accessible labelling. */
export function Section({ id, title, intro, children }: SectionProps) {
  const headingId = `${id}-title`

  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <PageContainer>
        <SectionHeading id={headingId} title={title} intro={intro} />
        {children}
      </PageContainer>
    </section>
  )
}
