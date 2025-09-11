import { useState } from 'react'
import { Navigation } from './Navigation'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { ShowPage } from './ShowPage'
import { CharityPage } from './CharityPage'
import { PartnersPage } from './PartnersPage'
import { ContactPage } from './ContactPage'
import { ArchivePage } from './ArchivePage'
import { CommitteePage } from './CommitteePage'
import { ThemeProvider } from './ThemeProvider'
// import { CustomCursor } from './CustomCursor'

export type Page = 'home' | 'about' | 'show' | 'charity' | 'partners' | 'contact' | 'archive' | 'committee'

export function Router() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [activeSection, setActiveSection] = useState('home')

  const handleNavigation = (page: Page, section?: string) => {
    if (page !== currentPage) {
      setCurrentPage(page)
      window.scrollTo(0, 0)
    }
    if (section) {
      setActiveSection(section)
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigation={handleNavigation} />
      case 'about':
        return <AboutPage />
      case 'show':
        return <ShowPage />
      case 'charity':
        return <CharityPage />
      case 'partners':
        return <PartnersPage />
      case 'contact':
        return <ContactPage />
      case 'archive':
        return <ArchivePage />
      case 'committee':
        return <CommitteePage />
      default:
        return <HomePage onNavigation={handleNavigation} />
    }
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* <CustomCursor /> */}
        
        <Navigation 
          currentPage={currentPage}
          activeSection={activeSection} 
          onNavigation={handleNavigation}
        />
        
        {renderPage()}
        
        <footer className="py-12 px-6 border-t border-border/20">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm tracking-widest text-muted-foreground">
              © 2025 FASHION SOCIETY. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}