import type { ReactNode } from 'react'
import styles from './SectionHeading.module.css'
import { reveal } from '../../utils/reveal'

interface SectionHeadingProps {
  /** Used as the heading's id so the section can reference it with aria-labelledby. */
  id: string
  title: string
  /** Optional short paragraph under the heading. */
  intro?: ReactNode
}

export function SectionHeading({ id, title, intro }: SectionHeadingProps) {
  return (
    <header className={styles.heading} {...reveal()}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {intro && <p className={styles.intro}>{intro}</p>}
    </header>
  )
}
