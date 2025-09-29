import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './ui/button'

interface ShowTeaserSectionProps {
  onSectionClick?: (sectionId: string) => void
}

export function ShowTeaserSection({ onSectionClick }: ShowTeaserSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Suppress unused variable warning
  console.log(onSectionClick)

  return (
    <section id="show" className="py-16 px-6 bg-muted/10 relative" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
          >
        <h2 className="text-4xl md:text-5xl tracking-[-0.02em] font-light mb-6">
          The Show
        </h2>
        <div className="w-16 h-px bg-foreground mx-auto mb-6" />

        {/* Entire block intentionally blurred/unreadable as a teaser */}
        <div className="blur-[10px] select-none pointer-events-none">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            Announcement coming soon
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            Date • Venue • Theme
          </p>
        </div>

        {/* Visible CTA to follow for updates */}
        {/* <div className="mt-6">
          <Button asChild size="sm" className="tracking-wide text-white hover:text-white">
            <a href="https://instagram.com/cucfs" target="_blank" rel="noopener noreferrer">
              Follow for updates
            </a>
          </Button>
        </div> */}
        {/* Instagram Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-10 md:mt-20"
          >
            <Button 
              asChild
              size="sm" 
              className="px-6 py-4 md:px-12 md:py-6 text-sm md:text-lg tracking-wide bg-gradient-to-r from-purple-700 to-purple-900 hover:from-pink-600 hover:to-purple-700 text-white hover:text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 max-w-xs md:max-w-none"
            >
              <a 
                href="https://instagram.com/cucfs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-white"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow for Show Updates
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}


