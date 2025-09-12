import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from './HeroSection'
import { AboutSection } from './AboutSection'
import { ShowSection } from './ShowSection'
import { CharitySection } from './CharitySection'
import { SponsorsSection } from './SponsorsSection'
import { ContactSection } from './ContactSection'

interface HomePageProps {
  activeSection: string
  onSectionChange: (section: string) => void
  onNavigation: (page: 'home' | 'archive' | 'committee' | 'about' | 'charity' | 'show' | 'partners' | 'contact', section?: string) => void
}

export function HomePage({ activeSection, onSectionChange, onNavigation }: HomePageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Suppress unused variable warnings
  console.log(activeSection, onSectionChange)

  useEffect(() => {
    // Show loading blur for 1 second
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleSectionClick = (sectionId: string) => {
    onNavigation('home', sectionId)
  }

  return (
    <main className="relative">
      <motion.div
        className={`transition-all duration-1000 ${
          isLoading ? 'blur-sm opacity-70' : 'blur-0 opacity-100'
        }`}
        initial={{ opacity: 0.7, filter: 'blur(8px)' }}
        animate={{ 
          opacity: isLoading ? 0.7 : 1, 
          filter: isLoading ? 'blur(8px)' : 'blur(0px)' 
        }}
        transition={{ duration: 1 }}
      >
        <HeroSection onSectionClick={handleSectionClick} />
        <AboutSection onSectionClick={handleSectionClick} />
        <CharitySection onSectionClick={handleSectionClick} onNavigation={onNavigation} />
        <SponsorsSection onSectionClick={handleSectionClick} onNavigation={onNavigation} />
        <ShowSection onSectionClick={handleSectionClick} />
        <ContactSection onSectionClick={handleSectionClick} />
      </motion.div>

      {/* Loading overlay */}
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onAnimationComplete={() => setIsLoading(false)}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            <p className="text-muted-foreground text-sm">Loading...</p>
          </div>
        </motion.div>
      )}
    </main>
  )
}