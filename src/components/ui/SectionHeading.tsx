import type { ReactNode } from 'react'
import { reveal } from '../../utils/reveal'
import { CodeLabel } from './CodeLabel'
import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  /** Used as the heading's id so the section can reference it with aria-labelledby. */
  id: string
  title: string
  /** Optional short paragraph under the heading. */
  intro?: ReactNode
}

/** Section title styled as a code comment ("// featured projects"), with an optional intro. */
export function SectionHeading({ id, title, intro }: SectionHeadingProps) {
  return (
    <header className={styles.heading} {...reveal()}>
      <h2 id={id} className={styles.title}>
        <CodeLabel>{title}</CodeLabel>
      </h2>
      {intro && <p className={styles.intro}>{intro}</p>}
    </header>
  )
}
