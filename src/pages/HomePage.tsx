import { AboutSection } from '../components/sections/AboutSection'
import { ApproachSection } from '../components/sections/ApproachSection'
import { ContactSection } from '../components/sections/ContactSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { FeaturedProjectsSection } from '../components/sections/FeaturedProjectsSection'
import { HeroSection } from '../components/sections/HeroSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { pageMeta } from '../content/pageMeta'

export function HomePage() {
  return (
    <>
      <title>{pageMeta.home.title}</title>
      <HeroSection />
      <FeaturedProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ApproachSection />
      <ContactSection />
    </>
  )
}
