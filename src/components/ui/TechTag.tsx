import styles from './TechTag.module.css'

interface TechTagListProps {
  items: readonly string[]
  /** Accessible name for the list, e.g. "Technologies used in Kapital". */
  label: string
}

/** A row of technology names. Rendered as a list so screen readers announce the count. */
export function TechTagList({ items, label }: TechTagListProps) {
  return (
    <ul role="list" aria-label={label} className={styles.list}>
      {items.map((item) => (
        <li key={item} className={styles.tag}>
          {item}
        </li>
      ))}
    </ul>
  )
}
