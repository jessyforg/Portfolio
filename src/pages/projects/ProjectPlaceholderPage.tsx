import { PageContainer } from '../../components/layout/PageContainer'
import { ButtonLink } from '../../components/ui/Button'
import styles from './ProjectPlaceholderPage.module.css'

interface ProjectPlaceholderPageProps {
  name: string
}

/*
 * TEMPORARY (Milestone 2): proves the case-study routes and shared layout work.
 * Milestone 4 replaces this with the real Kapital and TARAKI case studies.
 */
export function ProjectPlaceholderPage({ name }: ProjectPlaceholderPageProps) {
  return (
    <PageContainer className={styles.page}>
      <title>{`${name} | Project Case Study — Jester Perez`}</title>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.note}>Case study in progress.</p>
      <ButtonLink to="/#work" variant="secondary">
        Back to all work
      </ButtonLink>
    </PageContainer>
  )
}
