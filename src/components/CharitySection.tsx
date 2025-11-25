import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { PurpleGlare } from './PurpleGlare'

interface CharitySectionProps {
  onSectionClick?: (sectionId: string) => void
  onNavigation?: (
    page:
      | 'home'
      | 'archive'
      | 'committee'
      | 'about'
      | 'charity'
      | 'show'
      | 'partners'
      | 'contact',
    section?: string
  ) => void
}

export function CharitySection({ onSectionClick, onNavigation }: CharitySectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isMobile = useIsMobile()

  // Suppress unused variable warnings
  console.log(onSectionClick, onNavigation)

  return (
    <section id="charity" className="py-20 px-6 bg-muted/10 relative" ref={ref}>
      <PurpleGlare position="top-right" intensity={0.4} />
      <PurpleGlare position="bottom-left" intensity={0.4} />

      <motion.div
        className="max-w-7xl mx-auto"
        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
        animate={isMobile || isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: isMobile ? 0 : 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            animate={isMobile || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: isMobile ? 0 : 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl tracking-[-0.02em] font-light mb-6">
              Our Purpose
            </h2>
            <div className="w-16 h-px bg-foreground mb-6" />
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Every thread, design, and moment on our runway contributes to causes that matter.
            </p>
            <div className="text-sm text-muted-foreground mb-6">
              <p className="mb-2">
                Each year, we carefully select new beneficiaries that reflect our evolving mission.
              </p>
              <p className="font-medium">
                We are happy to announce our support of Refuge this year.
              </p>
            </div>
            <button
              onClick={() => onNavigation?.('charity')}
              className="text-sm text-foreground underline hover:text-muted-foreground transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-0 focus:border-0"
            >
              Hear More About Our Charities
            </button>
          </motion.div>

          {/* Right side - Charity names and images */}
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            animate={isMobile || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Cambridge Curiosity and Imagination */}
            <div className="bg-card/50 p-4 rounded-lg border border-border/20 hover:border-border/40 transition-all duration-300">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <img
                  src="/camcuriosity-logo.svg"
                  alt="Cambridge Curiosity and Imagination Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-sm font-medium mb-2">
                Cambridge Curiosity and Imagination
              </h4>
            </div>

            {/* Sew Positive */}
            <div className="bg-card/50 p-4 rounded-lg border border-border/20 hover:border-border/40 transition-all duration-300">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <img
                  src="/sew-logo.png"
                  alt="Sew Positive Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-sm font-medium mb-2">Sew Positive</h4>
            </div>

            {/* Beat */}
            <div className="bg-card/50 p-4 rounded-lg border border-border/20 hover:border-border/40 transition-all duration-300">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <img
                  src="/beat-logo.png"
                  alt="Beat Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-sm font-medium mb-2">Beat</h4>
            </div>

            {/* Pink Week */}
            <div className="bg-card/50 p-4 rounded-lg border border-border/20 hover:border-border/40 transition-all duration-300">
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <img
                  src="/pinkweek-logo.png"
                  alt="Pink Week Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-sm font-medium mb-2">Pink Week</h4>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
