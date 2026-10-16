import styles from './Logo.module.css'

/**
 * "JP" monogram in a rounded square, matching the favicon.
 * Decorative: the link around it must provide the accessible name.
 */
export function Logo() {
  return (
    <svg className={styles.logo} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <rect className={styles.frame} x="0.75" y="0.75" width="38.5" height="38.5" rx="10" />
      <text className={styles.letters} x="20" y="26.5" textAnchor="middle">
        JP
      </text>
    </svg>
  )
}
