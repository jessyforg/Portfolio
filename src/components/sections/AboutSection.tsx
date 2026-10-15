import { about } from '../../content/portfolio'
import { Section } from '../layout/Section'
import styles from './AboutSection.module.css'

export function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className={styles.body}>
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
