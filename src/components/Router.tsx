import { useState, useEffect } from 'react'
import { Navigation } from './Navigation'
import { HomePage } from './HomePage'
import { ArchivePage } from './ArchivePage'
import { CommitteePage } from './CommitteePage'
import { AboutPage } from './AboutPage'
import { CharityPage } from './CharityPage'
import { ShowPage } from './ShowPage'
import { PartnersPage } from './PartnersPage'
import { ContactPage } from './ContactPage'

export type Page = 'home' | 'archive' | 'committee' | 'about' | 'charity' | 'show' | 'partners' | 'contact'

export function Router() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (currentPage !== 'home') return
          
          const sections = ['home', 'about', 'show', 'charity', 'sponsors', 'contact']
          
          for (const sectionId of sections) {
            const element = document.getElementById(sectionId)
            if (element) {
              const rect = element.getBoundingClientRect()
              if (rect.top <= 100 && rect.bottom >= 100) {
                setActiveSection(sectionId)
                break
              }
            }
          }
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentPage])

  const handleNavigation = (page: Page, section?: string) => {
    if (page !== currentPage) {
      setCurrentPage(page)
      window.scrollTo(0, 0)
    }
    if (section && page === 'home') {
      setActiveSection(section)
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage activeSection={activeSection} onSectionChange={setActiveSection} onNavigation={handleNavigation} />
      case 'archive':
        return <ArchivePage />
      case 'committee':
        return <CommitteePage />
      case 'about':
        return <AboutPage />
      case 'charity':
        return <CharityPage />
      case 'show':
        return <ShowPage />
      case 'partners':
        return <PartnersPage />
      case 'contact':
        return <ContactPage />
    }
  }

  const footerNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'charity', label: 'Our Purpose' },
    { id: 'show', label: 'Show' },
    { id: 'sponsors', label: 'Partners' },
    { id: 'contact', label: 'Contact' },
    { id: 'committee', label: 'Committee' },
    { id: 'archive', label: 'Archive' }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation 
        currentPage={currentPage}
        activeSection={activeSection} 
        onNavigation={handleNavigation}
      />
      
      {renderPage()}
      
      {/* Footer with Navigation - only show on home page */}
      {currentPage === 'home' && (
        <footer className="py-16 px-6 border-t border-border/20 bg-muted/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {footerNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'committee' || item.id === 'archive') {
                      // Navigate to separate pages for these
                      handleNavigation(item.id as Page)
                    } else {
                      // Scroll to sections on home page
                      const element = document.getElementById(item.id)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }
                  }}
                  className="text-left text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm tracking-widest text-muted-foreground">
                © 2025 CUCFS. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}