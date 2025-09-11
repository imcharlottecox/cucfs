import { HeroSection } from './HeroSection'
import { AboutSection } from './AboutSection'
import { ShowSection } from './ShowSection'
import { CharitySection } from './CharitySection'
import { SponsorsSection } from './SponsorsSection'
import { ContactSection } from './ContactSection'

type Page = 'home' | 'about' | 'show' | 'charity' | 'partners' | 'contact' | 'archive' | 'committee'

interface HomePageProps {
  onNavigation: (page: Page, section?: string) => void
}

export function HomePage({ onNavigation }: HomePageProps) {
  return (
    <main>
      <HeroSection />
      <AboutSection onNavigation={onNavigation} />
      <ShowSection onNavigation={onNavigation} />
      <CharitySection onNavigation={onNavigation} />
      <SponsorsSection onNavigation={onNavigation} />
      <ContactSection onNavigation={onNavigation} />
    </main>
  )
}