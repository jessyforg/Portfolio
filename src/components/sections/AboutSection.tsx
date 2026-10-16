import { about } from '../../content/portfolio'
import { reveal } from '../../utils/reveal'
import { Section } from '../layout/Section'
import styles from './AboutSection.module.css'

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
