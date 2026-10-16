import { projects } from '../../content/projects'
import { reveal } from '../../utils/reveal'
import { Section } from '../layout/Section'
import { ProjectCard } from '../ui/ProjectCard'
import styles from './FeaturedProjectsSection.module.css'

export function FeaturedProjectsSection() {
  return (
    <Section
      id="work"
      title="Featured projects"
      intro="Two full-stack web applications I worked on as team lead. Each case study covers my role, the technical decisions, and the project’s current status."
    >
      <ul role="list" className={styles.list}>
        {projects.map((project, index) => (
          // The <li> handles hover dimming; the inner <div> handles the scroll reveal,
          // so the two effects never compete over the same opacity/transition.
          <li key={project.slug} className={styles.item}>
            <div {...reveal(index)}>
              <ProjectCard project={project} />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
