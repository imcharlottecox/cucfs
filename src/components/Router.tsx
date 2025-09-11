import { useState, useEffect } from 'react'
import { Navigation } from './Navigation'
import { HomePage } from './HomePage'
import { ArchivePage } from './ArchivePage'
import { CommitteePage } from './CommitteePage'

export type Page = 'home' | 'archive' | 'committee'

export function Router() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
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
    }

    window.addEventListener('scroll', handleScroll)
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
        return <HomePage activeSection={activeSection} onSectionChange={setActiveSection} />
      case 'archive':
        return <ArchivePage />
      case 'committee':
        return <CommitteePage />
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
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
  )
}