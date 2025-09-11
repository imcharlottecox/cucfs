import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

type Page = 'home' | 'archive' | 'committee'

interface NavigationProps {
  currentPage: Page
  activeSection: string
  onNavigation: (page: Page, section?: string) => void
}

export function Navigation({ currentPage, activeSection, onNavigation }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { id: 'home', label: 'Home', type: 'section' as const },
    { id: 'about', label: 'About', type: 'section' as const },
    { id: 'show', label: 'Show', type: 'section' as const },
    { id: 'archive', label: 'Archive', type: 'page' as const },
    { id: 'charity', label: 'Charity', type: 'section' as const },
    { id: 'sponsors', label: 'Partners', type: 'section' as const },
    { id: 'committee', label: 'Committee', type: 'page' as const },
    { id: 'contact', label: 'Contact', type: 'section' as const }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleItemClick = (item: typeof menuItems[0]) => {
    if (item.type === 'page') {
      onNavigation(item.id as Page)
    } else {
      // Section navigation
      if (currentPage !== 'home') {
        onNavigation('home')
        // Delay scroll to allow page to load
        setTimeout(() => scrollToSection(item.id), 100)
      } else {
        scrollToSection(item.id)
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onNavigation('home', sectionId)
    }
  }

  const getActiveState = (item: typeof menuItems[0]) => {
    if (item.type === 'page') {
      return currentPage === item.id
    } else {
      return currentPage === 'home' && activeSection === item.id
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => onNavigation('home', 'home')}
          >
            <h1 className="text-2xl tracking-[-0.02em] font-light">FASHION SOCIETY</h1>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`relative text-sm tracking-wide transition-colors duration-300 ${
                  getActiveState(item)
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
                {getActiveState(item) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}