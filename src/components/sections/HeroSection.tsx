import { profile, resumeUrl } from '../../content/portfolio'
import { PageContainer } from '../layout/PageContainer'
import { ButtonLink } from '../ui/Button'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <PageContainer className={styles.hero}>
      <div className={styles.text}>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.headline}>{profile.headline}</p>
        <div className={styles.details}>
          <p>{profile.education}</p>
          <p>{profile.availability}</p>
        </div>
        <div className={styles.actions}>
          <ButtonLink to="/#work">View projects</ButtonLink>
          <ButtonLink href={resumeUrl} download variant="secondary">
            Download resume
          </ButtonLink>
          <ButtonLink to="/#contact" variant="secondary">
            Contact me
          </ButtonLink>
        </div>
      </div>

      <img
        className={styles.portrait}
        src={profile.portrait.large}
        srcSet={`${profile.portrait.small} 480w, ${profile.portrait.large} 960w`}
        sizes="(min-width: 900px) 320px, 112px"
        width={960}
        height={960}
        alt={profile.portrait.alt}
        fetchPriority="high"
      />
    </PageContainer>
  )
}
