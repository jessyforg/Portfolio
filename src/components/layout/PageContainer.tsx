import type { HTMLAttributes } from 'react'
import styles from './PageContainer.module.css'

/** Centers content at the maximum layout width with responsive side gutters. */
export function PageContainer({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={[styles.container, className].filter(Boolean).join(' ')} {...rest} />
}
