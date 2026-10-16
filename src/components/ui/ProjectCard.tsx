import { Link } from 'react-router'
import { getCaseStudy } from '../../content/caseStudies'
import { projectPath } from '../../content/projects'
import type { ProjectSummary } from '../../types/project'
import { assetUrl } from '../../utils/assetPaths'
import { TechTagList } from './TechTag'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: ProjectSummary
}

/**
 * One project row: screenshot thumbnail beside the summary.
 * The whole row is clickable: the case-study link stretches over it, but it is still
 * a single, descriptively named link for keyboard and screen-reader users.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const thumbnail = getCaseStudy(project.slug).screenshots[0]

  return (
    <article className={styles.card}>
      {thumbnail && (
        <img
          className={styles.thumbnail}
          src={assetUrl(`${thumbnail.basePath}-960.webp`)}
          width={960}
          height={Math.round((960 * thumbnail.height) / thumbnail.width)}
          alt={`Screenshot of ${project.name}`}
          loading="lazy"
          decoding="async"
        />
      )}

      <div className={styles.body}>
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
      </div>
    </article>
  )
}
