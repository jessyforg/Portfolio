import type { ReactNode } from 'react'
import { CodeLabel } from '../ui/CodeLabel'
import styles from './ProjectSection.module.css'
import { reveal } from '../../utils/reveal'

interface ProjectSectionProps {
  id: string
  title: string
  /** Use the full content width (for screenshots) instead of a readable text width. */
  wide?: boolean
  children: ReactNode
}

/** One titled section of a case study. On wide screens the title sits in a left column. */
export function ProjectSection({ id, title, wide = false, children }: ProjectSectionProps) {
  const headingId = `${id}-title`
  const className = wide ? `${styles.section} ${styles.wide}` : styles.section

  return (
    <section id={id} aria-labelledby={headingId} className={className} {...reveal()}>
      <h2 id={headingId} className={styles.title}>
        <CodeLabel>{title}</CodeLabel>
      </h2>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
