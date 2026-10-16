import { projects } from '../../content/projects'
import { Section } from '../layout/Section'
import { ProjectCard } from '../ui/ProjectCard'
import styles from './FeaturedProjectsSection.module.css'
import { reveal } from '../../utils/reveal'

export function FeaturedProjectsSection() {
  return (
    <Section
      id="work"
      title="Featured projects"
      intro="Two full-stack web applications I worked on as team lead. Each case study covers my role, the technical decisions, and the project’s current status."
    >
      <ul role="list" className={styles.grid}>
        {projects.map((project, index) => (
          <li key={project.slug} className={styles.item} {...reveal(index)}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
