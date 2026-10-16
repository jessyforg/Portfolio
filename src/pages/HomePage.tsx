import { PageContainer } from '../components/layout/PageContainer'
import { SidePanel, type PanelSection } from '../components/layout/SidePanel'
import { AboutSection } from '../components/sections/AboutSection'
import { ApproachSection } from '../components/sections/ApproachSection'
import { ContactSection } from '../components/sections/ContactSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { FeaturedProjectsSection } from '../components/sections/FeaturedProjectsSection'
import { HeroSection } from '../components/sections/HeroSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { pageMeta } from '../content/pageMeta'
import styles from './HomePage.module.css'

/** Labels for the side panel's "on this page" nav. Ids must match the section ids below. */
const panelSections: PanelSection[] = [
  { id: 'work', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'approach', label: 'Approach' },
  { id: 'contact', label: 'Contact' },
]

export function HomePage() {
  return (
    <>
      <title>{pageMeta.home.title}</title>
      <HeroSection />

      {/* Desktop: sticky side panel + scrolling content. Smaller screens: a single column. */}
      <PageContainer className={styles.split}>
        <SidePanel sections={panelSections} />
        <div className={styles.content}>
          <FeaturedProjectsSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ApproachSection />
          <ContactSection />
        </div>
      </PageContainer>
    </>
  )
}
