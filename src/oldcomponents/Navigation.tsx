import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

type Page = 'home' | 'about' | 'show' | 'charity' | 'partners' | 'contact' | 'archive' | 'committee'

interface NavigationProps {
  currentPage: Page
  activeSection: string
  onNavigation: (page: Page, section?: string) => void
}

export function Navigation({ currentPage, activeSection, onNavigation }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Main navigation items (prominently displayed)
  const mainNavItems = [
    { id: 'home', label: 'Home', type: 'page' as const },
    { id: 'about', label: 'About', type: 'page' as const },
    { id: 'show', label: 'Show', type: 'page' as const },
    { id: 'charity', label: 'Charity', type: 'page' as const },
    { id: 'partners', label: 'Partners', type: 'page' as const },
    { id: 'contact', label: 'Contact', type: 'page' as const }
  ]

  // Additional menu items (in toggle menu)
  const additionalMenuItems = [
    { id: 'home', label: 'Home', type: 'page' as const },
    { id: 'about', label: 'About', type: 'page' as const },
    { id: 'show', label: 'Show', type: 'page' as const },
    { id: 'charity', label: 'Charity', type: 'page' as const },
    { id: 'partners', label: 'Partners', type: 'page' as const },
    { id: 'contact', label: 'Contact', type: 'page' as const },
    { id: 'archive', label: 'Archive', type: 'page' as const },
    { id: 'committee', label: 'Committee', type: 'page' as const }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleItemClick = (item: typeof mainNavItems[0]) => {
    onNavigation(item.id as Page)
    setIsMenuOpen(false)
  }

  const getActiveState = (item: typeof mainNavItems[0]) => {
    return currentPage === item.id || (item.id === 'home' && currentPage === 'home')
  }

  return (
    <>
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
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => onNavigation('home')}
            >
              <h1 className="text-2xl tracking-[-0.02em] font-light">FASHION SOCIETY</h1>
            </motion.div>

            {/* Main Navigation - Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
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

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* Menu Toggle Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Toggle Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-md z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-24 right-6 bg-card border border-border/20 rounded-2xl p-6 z-50 min-w-[200px] shadow-2xl"
            >
              <div className="space-y-4">
                {additionalMenuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`block w-full text-left text-sm tracking-wide transition-colors duration-300 py-2 ${
                      getActiveState(item)
                        ? 'text-primary' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}