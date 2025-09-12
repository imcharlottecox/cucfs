import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { PurpleGlare } from './PurpleGlare'
import { Button } from './ui/button'

interface ShowSectionProps {
  onSectionClick?: (sectionId: string) => void
}

export function ShowSection({ onSectionClick }: ShowSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Suppress unused variable warning
  console.log(onSectionClick)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.12, 0.15, 0.2, 0.21, 0.23, 1], [0.1, 0.1, 0.2, 0.3, 0.5, 0.8, 1,1])

  return (
    <section id="show" className="py-32 px-6 bg-muted/20 relative" ref={ref}>
      <PurpleGlare position="top-left" intensity={0.5} />
      <PurpleGlare position="bottom-right" intensity={0.3} />
      <motion.div
        className="max-w-4xl mx-auto text-center relative"
        style={{ 
          opacity: textOpacity
        }}
      >
        {/* Clear title - not blurred */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl tracking-[-0.02em] font-light mb-8">
            The Show
          </h2>
          <div className="w-24 h-px bg-foreground mx-auto mb-16" />
        </motion.div>

        {/* Blurred content - only the details */}
        <div className="blur-[10px] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-2xl tracking-[-0.01em] font-light mb-4">Theme</h3>
              <p className="text-4xl font-light tracking-wider">Beyond The Cover</p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                An exploration of transformation, growth, and the beautiful evolution 
                of identity through fashion.
              </p>
            </div>

            <div>
              <h3 className="text-2xl tracking-[-0.01em] font-light mb-4">Date</h3>
              <p className="text-4xl font-light tracking-wider">TBA</p>
              <p className="text-muted-foreground mt-4">
                Mark your calendars for an unforgettable evening of fashion, 
                art, and social impact.
              </p>
            </div>

            <div>
              <h3 className="text-2xl tracking-[-0.01em] font-light mb-4">Venue</h3>
              <p className="text-4xl font-light tracking-wider">TBA</p>
              <p className="text-muted-foreground mt-4">
                A carefully curated space that complements our avant-garde vision 
                and intimate atmosphere.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-6 text-lg tracking-wide border-2 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Notify Me When Tickets Are Available
            </Button>
          </motion.div>
        </motion.div>
        </div>

        {/* Instagram Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Button 
              asChild
              size="lg" 
              className="px-12 py-6 text-lg tracking-wide bg-gradient-to-r from-purple-700 to-purple-900 hover:from-pink-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a 
                href="https://instagram.com/cucfs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow us to to Hear about Show Announcements
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}