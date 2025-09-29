import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { Logo } from './Logo'

type Page = 'home' | 'archive' | 'committee' | 'about' | 'charity' | 'show' | 'partners' | 'contact'

interface NavigationProps {
  currentPage: Page
  activeSection: string
  onNavigation: (page: Page, section?: string) => void
}

export function Navigation({ currentPage, activeSection, onNavigation }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Central navigation tabs (for home page sections)
  const centralNavItems = [
    { id: 'home', label: 'Home', type: 'section' as const },
    { id: 'about', label: 'About', type: 'section' as const },
    { id: 'charity', label: 'Our Purpose', type: 'section' as const },
    { id: 'sponsors', label: 'Partners', type: 'section' as const },
    { id: 'show', label: 'Show', type: 'section' as const },
    { id: 'contact', label: 'Contact', type: 'section' as const }
  ]

  // All pages (for menu)
  const allPages = [
    { id: 'home', label: 'Home', type: 'section' as const },
    { id: 'charity', label: 'Our Charities', type: 'page' as const },
    { id: 'partners', label: 'Sponsors & Partners', type: 'page' as const },
    { id: 'committee', label: 'Committee', type: 'page' as const },
    { id: 'archive', label: 'Archive', type: 'page' as const },
    { id: 'contact', label: 'Contact', type: 'page' as const },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleItemClick = (item: typeof allPages[0]) => {
    if (item.type === 'page') {
      // Navigate to dedicated page
      onNavigation(item.id as Page)
    } else {
      // Home section - scroll to section on home page
      if (currentPage !== 'home') {
        onNavigation('home')
        setTimeout(() => scrollToSection(item.id), 100)
      } else {
        scrollToSection(item.id)
      }
    }
    setIsMenuOpen(false)
  }

  const handleCentralNavClick = (item: typeof centralNavItems[0]) => {
    // All central nav items are sections - scroll to section on home page
    scrollToSection(item.id)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onNavigation('home', sectionId)
    }
  }

  const getActiveState = (item: typeof allPages[0]) => {
    if (item.type === 'page') {
      return currentPage === item.id
    } else {
      return currentPage === 'home' && activeSection === item.id
    }
  }

  return (
    <>
      <motion.nav
        initial={isMobile ? undefined : { y: -100 }}
        animate={isMobile ? undefined : { y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md border-b border-border/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-8 py-6 max-w-full">
          {/* Logo - positioned at very left edge */}
          <motion.div
            whileHover={isMobile ? undefined : { scale: 1.05 }}
            className="cursor-pointer flex-shrink-0"
            onClick={() => onNavigation('home', 'home')}
          >
            <Logo className="h-10" />
          </motion.div>

          {/* Central Navigation Tabs - only show on home page, perfectly centered */}
          {currentPage === 'home' && (
            <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-8">
              {centralNavItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleCentralNavClick(item)}
                  className={`text-sm font-medium transition-colors duration-300 focus:outline-none relative whitespace-nowrap ${
                    getActiveState(item)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={isMobile ? undefined : { y: -2 }}
                >
                  {item.label}
                  {getActiveState(item) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={isMobile ? undefined : { scaleX: 0 }}
                      animate={isMobile ? undefined : { scaleX: 1 }}
                      transition={isMobile ? undefined : { duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          )}

          {/* Right side - Home icon, Theme toggle and Menu button */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Home Icon */}
            <motion.button
              whileHover={isMobile ? undefined : { scale: 1.05 }}
              whileTap={isMobile ? undefined : { scale: 0.95 }}
              onClick={() => onNavigation('home', 'home')}
              className="p-2 rounded-md text-foreground hover:bg-accent/50 transition-colors duration-300 focus:outline-none"
              title="Go to Home"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </motion.button>
            
            <ThemeToggle />
            
            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground hover:bg-accent/50 transition-colors duration-300 focus:outline-none"
            >
              <motion.svg
                animate={isMobile ? undefined : { rotate: isMenuOpen ? 90 : 0 }}
                transition={isMobile ? undefined : { duration: 0.3 }}
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-height Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={isMobile ? undefined : { opacity: 0 }}
            animate={isMobile ? undefined : { opacity: 1 }}
            exit={isMobile ? undefined : { opacity: 0 }}
            transition={isMobile ? undefined : { duration: 0.3 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Gradient shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-background/95" />
            
            {/* Menu Content - positioned in top right corner */}
            <motion.div
              initial={isMobile ? undefined : { x: 100, opacity: 0 }}
              animate={isMobile ? undefined : { x: 0, opacity: 1 }}
              exit={isMobile ? undefined : { x: 100, opacity: 0 }}
              transition={isMobile ? undefined : { duration: 0.4, ease: "easeOut" }}
              className="absolute top-0 right-0 h-full w-80 bg-background/90 backdrop-blur-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full pt-24 px-8">
                <div className="space-y-6">
                  {allPages.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      initial={isMobile ? undefined : { x: 50, opacity: 0 }}
                      animate={isMobile ? undefined : { x: 0, opacity: 1 }}
                      transition={isMobile ? undefined : { duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
                      className={`w-full text-left text-xl tracking-wide transition-colors duration-300 focus:outline-none relative py-3 block ${
                        getActiveState(item)
                          ? 'text-primary font-medium'
                          : 'text-foreground hover:text-primary'
                      }`}
                      whileHover={isMobile ? undefined : { x: 10 }}
                    >
                      {item.label}
                      {getActiveState(item) && (
                        <motion.div
                          className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"
                          initial={isMobile ? undefined : { scaleX: 0 }}
                          animate={isMobile ? undefined : { scaleX: 1 }}
                          transition={isMobile ? undefined : { duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}