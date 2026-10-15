import { projects } from '../../content/projects'
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
      <ul role="list" className={styles.grid}>
        {projects.map((project) => (
          <li key={project.slug} className={styles.item}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
