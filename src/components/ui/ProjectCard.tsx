import type { PointerEvent } from 'react'
import { Link } from 'react-router'
import { projectPath } from '../../content/projects'
import type { ProjectSummary } from '../../types/project'
import { TechTagList } from './TechTag'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: ProjectSummary
}

/**
 * The whole card is clickable: the case-study link stretches over the card,
 * but it is still a single, descriptively named link for keyboard and screen-reader users.
 */
/** Moves the card's spotlight (a CSS radial gradient) to follow the pointer. */
function moveSpotlight(event: PointerEvent<HTMLElement>) {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
  card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card} onPointerMove={moveSpotlight}>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.tagline}>{project.tagline}</p>
      <p className={styles.summary}>{project.summary}</p>

      <dl className={styles.facts}>
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{project.status}</dd>
        </div>
      </dl>

      <TechTagList label={`Technologies used in ${project.name}`} items={project.technologies} />

      <Link to={projectPath(project)} className={styles.link} viewTransition>
        Read the {project.name} case study
      </Link>
    </article>
  )
}
