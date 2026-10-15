import { PageContainer } from '../components/layout/PageContainer'
import { Button, ButtonLink } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TechTagList } from '../components/ui/TechTag'
import { contactLinks } from '../content/portfolio'
import styles from './HomePage.module.css'

/*
 * TEMPORARY (Milestone 2): a layout shell that exercises the shared components and
 * provides the #work / #about / #contact anchors the navigation targets.
 * Milestone 3 replaces it with the real home-page sections and verified content.
 */
export function HomePage() {
  return (
    <>
      <title>Jester Perez | Full-Stack Developer Portfolio</title>

      <PageContainer className={styles.intro}>
        <h1 className={styles.title}>Jester Perez</h1>
        <p className={styles.lead}>
          Placeholder home page. The real sections are built in Milestone 3.
        </p>
        <div className={styles.actions}>
          <ButtonLink to="/projects/kapital">Primary link</ButtonLink>
          <ButtonLink href={contactLinks.email.href} variant="secondary">
            Secondary link
          </ButtonLink>
          <Button disabled>Disabled</Button>
        </div>
      </PageContainer>

      <section id="work" aria-labelledby="work-title" className={styles.section}>
        <PageContainer>
          <SectionHeading
            id="work-title"
            title="Work"
            intro="Placeholder section. Featured project cards arrive in Milestone 3."
          />
          <TechTagList label="Example technologies" items={['React', 'TypeScript', 'MySQL']} />
        </PageContainer>
      </section>

      <section id="about" aria-labelledby="about-title" className={styles.section}>
        <PageContainer>
          <SectionHeading id="about-title" title="About" intro="Placeholder section." />
        </PageContainer>
      </section>

      <section id="contact" aria-labelledby="contact-title" className={styles.section}>
        <PageContainer>
          <SectionHeading id="contact-title" title="Contact" intro="Placeholder section." />
        </PageContainer>
      </section>
    </>
  )
}
