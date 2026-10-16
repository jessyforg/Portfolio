import type { ReactNode } from 'react'
import styles from './CodeLabel.module.css'

interface CodeLabelProps {
  children: ReactNode
}

/**
 * Renders text with a code-comment prefix, e.g. "// work".
 * The "//" is decorative and hidden from screen readers, which would otherwise read "slash slash".
 * Set the font (e.g. var(--font-mono)) on the parent element.
 */
export function CodeLabel({ children }: CodeLabelProps) {
  return (
    <>
      <span className={styles.slashes} aria-hidden="true">
        {'// '}
      </span>
      {children}
    </>
  )
}
