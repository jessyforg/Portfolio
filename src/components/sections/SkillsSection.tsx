import { skillGroups } from '../../content/portfolio'
import { Section } from '../layout/Section'
import { TechTagList } from '../ui/TechTag'
import styles from './SkillsSection.module.css'

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Technical skills"
      intro="The languages, frameworks, and tools I’ve worked with. Each case study lists exactly what that project used."
    >
      <dl className={styles.list}>
        {skillGroups.map((group) => (
          <div key={group.label} className={styles.row}>
            <dt className={styles.label}>{group.label}</dt>
            <dd className={styles.items}>
              <TechTagList label={group.label} items={group.items} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
