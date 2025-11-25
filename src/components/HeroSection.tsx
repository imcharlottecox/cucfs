import { motion } from 'framer-motion'
import { useRef, } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

// CUCFS model image
const modelImage = '/hero_model.png'

interface HeroSectionProps {
  onSectionClick?: (sectionId: string) => void
}

export function HeroSection({ onSectionClick }: HeroSectionProps) {
  const containerRef = useRef(null)
  const isMobile = useIsMobile()

  // Suppress unused parameter warning
  console.log('Hero section click handler:', onSectionClick)

  return (
    <section 
      id="home" 
      className="min-h-[120vh] flex items-center justify-center relative overflow-hidden"
      ref={containerRef}
    >
      {/* Model overlay - positioned to flow beyond viewport */}
      <motion.div 
        className="absolute right-0 top-0 w-[60%] h-[110vh] z-20 pointer-events-none md:w-[60%] sm:w-[70%] w-[80%]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <img
          src={modelImage}
          alt="CUCFS Fashion model"
          className="w-full h-full object-cover object-left opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/80" />
      </motion.div>

      <motion.div 
        className="relative z-10 text-left max-w-6xl mx-auto px-6 flex items-center min-h-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-2xl">
          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl tracking-[-0.03em] font-light mb-4 leading-none">
              CUCFS
            </h1>
            <h1 className="text-7xl md:text-8xl lg:text-9xl tracking-[-0.03em] font-light mb-8 leading-none">
              2026
            </h1>
            <div className="w-24 h-px bg-foreground mb-8" />
          </motion.div>


          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 1, delay: 0.2 }}
            className="max-w-lg"
          >

            <p className="text-lg tracking-wide text-muted-foreground leading-none">
             Cambridge University 
            </p>
            <p className="text-lg tracking-wide text-muted-foreground leading-none">
             Charity Fashion Show
            </p>
            <p className="text-lg tracking-wide text-muted-foreground leading-[3rem]">
             #AWalkOfBecoming
            </p>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 1, delay: 0.2 }}
            className="mt-12"
          >
            <div className="flex">
              <div className="w-px h-12 bg-muted-foreground/50" />
            </div>
            <p className="text-xs tracking-widest text-muted-foreground mt-4">SCROLL TO EXPLORE</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}