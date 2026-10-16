import type { FeatureStatus, ProjectFeature } from '../../types/project'
import styles from './FeatureList.module.css'

const statusLabels: Record<FeatureStatus, string> = {
  implemented: 'Implemented',
  partial: 'Partly built',
}

interface FeatureListProps {
  features: ProjectFeature[]
}

/** Features with their completion status written out as text, not conveyed by color alone. */
export function FeatureList({ features }: FeatureListProps) {
  return (
    <ul role="list" className={styles.list}>
      {features.map((feature) => (
        <li key={feature.name} className={styles.item}>
          <div className={styles.heading}>
            <h3 className={styles.name}>{feature.name}</h3>
            <span className={styles.status} data-status={feature.status}>
              {statusLabels[feature.status]}
            </span>
          </div>
          <p className={styles.description}>{feature.description}</p>
        </li>
      ))}
    </ul>
  )
}
