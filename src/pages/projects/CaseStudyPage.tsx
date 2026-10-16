import { Link } from 'react-router'
import { PageContainer } from '../../components/layout/PageContainer'
import { FeatureList } from '../../components/projects/FeatureList'
import { ProjectScreenshot } from '../../components/projects/ProjectScreenshot'
import { ProjectSection } from '../../components/projects/ProjectSection'
import { TechTagList } from '../../components/ui/TechTag'
import { getCaseStudy } from '../../content/caseStudies'
import { pageMeta } from '../../content/pageMeta'
import { contactLinks } from '../../content/portfolio'
import { getProject, projectPath, projects } from '../../content/projects'
import styles from './CaseStudyPage.module.css'

interface CaseStudyPageProps {
  slug: 'kapital' | 'taraki'
}

/** Shared template for every project case study. Content comes from content/projects.ts and content/caseStudies.ts. */
export function CaseStudyPage({ slug }: CaseStudyPageProps) {
  const project = getProject(slug)
  const study = getCaseStudy(slug)
  const [leadScreenshot, ...moreScreenshots] = study.screenshots
  const otherProjects = projects.filter((p) => p.slug !== slug)

  return (
    <article>
      <title>{pageMeta[slug].title}</title>

      <PageContainer>
        <header className={styles.header}>
          <Link to="/#work" className={styles.backLink}>
            All projects
          </Link>
          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.tagline}>{project.tagline}</p>
          <p className={styles.overview}>{study.overview}</p>

          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Technologies</dt>
              <dd>
                <TechTagList
                  label={`Technologies used in ${project.name}`}
                  items={project.technologies}
                />
              </dd>
            </div>
          </dl>
        </header>

        {leadScreenshot && (
          <div className={styles.leadScreenshot}>
            <ProjectScreenshot screenshot={leadScreenshot} priority />
          </div>
        )}

        <ProjectSection id="purpose" title="Purpose">
          {study.purpose.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ProjectSection>

        <ProjectSection id="role" title="My role">
          <p>{study.roleContext}</p>
          <ul>
            {study.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection id="technologies" title="Technologies">
          <dl className={styles.techGroups}>
            {study.technologyGroups.map((group) => (
              <div key={group.label} className={styles.techGroup}>
                <dt>{group.label}</dt>
                <dd>
                  <TechTagList label={group.label} items={group.items} />
                </dd>
              </div>
            ))}
          </dl>
        </ProjectSection>

        <ProjectSection id="implementation" title="How it’s built">
          {study.implementation.map((note) => (
            <div key={note.title} className={styles.note}>
              <h3 className={styles.noteTitle}>{note.title}</h3>
              <p>{note.body}</p>
            </div>
          ))}
        </ProjectSection>

        <ProjectSection id="features" title="Features">
          <FeatureList features={study.features} />
        </ProjectSection>

        {moreScreenshots.length > 0 && (
          <ProjectSection id="screenshots" title="Screenshots" wide>
            {moreScreenshots.map((screenshot) => (
              <ProjectScreenshot key={screenshot.basePath} screenshot={screenshot} />
            ))}
          </ProjectSection>
        )}

        <ProjectSection id="challenges" title="Challenges">
          {study.challenges.map((note) => (
            <div key={note.title} className={styles.note}>
              <h3 className={styles.noteTitle}>{note.title}</h3>
              <p>{note.body}</p>
            </div>
          ))}
        </ProjectSection>

        <ProjectSection id="status" title="Status and limitations">
          <p>{study.statusDetail}</p>
          <ul>
            {study.limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection id="links" title="Links">
          <p>
            The source code for this project isn’t linked here. You can find my other work on{' '}
            <a href={contactLinks.github.href}>GitHub</a>.
          </p>
        </ProjectSection>

        <nav aria-label="More projects" className={styles.more}>
          {otherProjects.map((other) => (
            <Link key={other.slug} to={projectPath(other)} className={styles.moreLink}>
              <span className={styles.moreLabel}>Next case study</span>
              <span className={styles.moreName}>{other.name}</span>
              <span className={styles.moreTagline}>{other.tagline}</span>
            </Link>
          ))}
          <Link to="/#work" className={styles.moreLink}>
            <span className={styles.moreLabel}>Back to the portfolio</span>
            <span className={styles.moreName}>All projects</span>
          </Link>
        </nav>
      </PageContainer>
    </article>
  )
}
