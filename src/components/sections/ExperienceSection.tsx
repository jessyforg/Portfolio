import { education, experience } from '../../content/portfolio'
import { Section } from '../layout/Section'
import styles from './ExperienceSection.module.css'
import { reveal } from '../../utils/reveal'

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience and education">
      <h3 className={styles.groupTitle}>Experience</h3>
      <ol role="list" className={styles.timeline}>
        {experience.map((entry, index) => (
          <li key={entry.role} className={styles.entry} {...reveal(index)}>
            <p className={styles.period}>
              <time dateTime={entry.start.date}>{entry.start.label}</time>
              {' – '}
              <time dateTime={entry.end.date}>{entry.end.label}</time>
            </p>
            <div className={styles.content}>
              <h4 className={styles.role}>{entry.role}</h4>
              <p className={styles.org}>
                {entry.organization}, {entry.location}
              </p>
              <ul className={styles.highlights}>
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <h3 className={styles.groupTitle}>Education</h3>
      <div className={styles.entry} {...reveal()}>
        <p className={styles.period}>
          <time dateTime={education.completed.date}>{education.completed.label}</time>
        </p>
        <div className={styles.content}>
          <h4 className={styles.role}>{education.degree}</h4>
          <p className={styles.org}>
            {education.school}, {education.location}
          </p>
        </div>
      </div>
    </Section>
  )
}
