import { HeroSection } from './HeroSection'
import { AboutSection } from './AboutSection'
import { ShowSection } from './ShowSection'
import { CharitySection } from './CharitySection'
import { SponsorsSection } from './SponsorsSection'
import { ContactSection } from './ContactSection'

interface HomePageProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ShowSection />
      <CharitySection />
      <SponsorsSection />
      <ContactSection />
    </main>
  )
}

