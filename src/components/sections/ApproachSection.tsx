import { approach } from '../../content/portfolio'
import { Section } from '../layout/Section'
import styles from './ApproachSection.module.css'

export function ApproachSection() {
  return (
    <Section
      id="approach"
      title="Technical approach"
      intro="How I’ve worked on real projects so far."
    >
      <ul role="list" className={styles.grid}>
        {approach.map((item) => (
          <li key={item.title} className={styles.item}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
