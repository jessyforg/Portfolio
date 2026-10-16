import { PageContainer } from '../components/layout/PageContainer'
import { ButtonLink } from '../components/ui/Button'
import { pageMeta } from '../content/pageMeta'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <PageContainer className={styles.page}>
      <title>{pageMeta.notFound.title}</title>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.text}>This address doesn’t match any page on the site.</p>
      <ButtonLink to="/">Go to the home page</ButtonLink>
    </PageContainer>
  )
}
