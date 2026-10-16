import { about } from '../../content/portfolio'
import { Section } from '../layout/Section'
import styles from './AboutSection.module.css'
import { reveal } from '../../utils/reveal'

export function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className={styles.body} {...reveal()}>
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
