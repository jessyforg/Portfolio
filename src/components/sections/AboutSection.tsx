import { about, profile } from '../../content/portfolio'
import { reveal } from '../../utils/reveal'
import { Section } from '../layout/Section'
import styles from './AboutSection.module.css'

export function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className={styles.layout} {...reveal()}>
        <div className={styles.body}>
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <img
          className={styles.portrait}
          src={profile.portrait.small}
          srcSet={`${profile.portrait.small} 480w, ${profile.portrait.large} 960w`}
          sizes="(min-width: 640px) 176px, 128px"
          width={480}
          height={480}
          alt={profile.portrait.alt}
          loading="lazy"
          decoding="async"
        />
      </div>
    </Section>
  )
}
