import { Link } from 'react-router'
import { profile, resumeUrl } from '../../content/portfolio'
import { PageContainer } from '../layout/PageContainer'
import { ButtonLink } from '../ui/Button'
import { CodeLabel } from '../ui/CodeLabel'
import styles from './HeroSection.module.css'

/** Full-screen opening: the name set very large, with each word rising into view on load. */
export function HeroSection() {
  const words = profile.name.split(' ')

  return (
    <PageContainer className={styles.hero}>
      <h1 className={styles.name} aria-label={profile.name}>
        {words.map((word, index) => (
          // Each word slides up inside a clipping mask (see .word in the CSS).
          <span key={word} className={styles.mask} aria-hidden="true">
            <span className={styles.word} style={{ animationDelay: `${index * 90}ms` }}>
              {word}
            </span>
          </span>
        ))}
      </h1>

      <p className={styles.role}>
        <CodeLabel>{profile.roleLine}</CodeLabel>
      </p>
      <p className={styles.headline}>{profile.headline}</p>

      <div className={styles.details}>
        <p>{profile.education}</p>
        <p>{profile.availability}</p>
      </div>

      <div className={styles.actions}>
        <ButtonLink to="/#work">View projects</ButtonLink>
        <ButtonLink href={resumeUrl} download variant="secondary">
          Download resume<span className="visually-hidden"> (PDF)</span>
        </ButtonLink>
        <ButtonLink to="/#contact" variant="secondary">
          Contact me
        </ButtonLink>
      </div>

      <Link to="/#work" className={styles.scrollCue}>
        <span className={styles.scrollLine} aria-hidden="true" />
        Scroll to projects
      </Link>
    </PageContainer>
  )
}
