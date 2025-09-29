import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { PurpleGlare } from './PurpleGlare'

interface AboutSectionProps {
  onSectionClick?: (sectionId: string) => void
}

export function AboutSection({ onSectionClick }: AboutSectionProps) {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  useEffect(() => {
    const checkIsMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth < 768
      return isTouchDevice || isSmallScreen
    }
    setIsMobile(checkIsMobile())
  }, [])
  
  // Suppress unused variable warning
  console.log(onSectionClick)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Simplify opacity animation on mobile
  const textOpacity = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.3, 1] : [0, 0.1, 0.12, 0.15, 0.2, 0.21, 0.23, 1], 
    isMobile ? [0.3, 0.8, 1] : [0.1, 0.1, 0.2, 0.3, 0.5, 0.8, 1, 1]
  )

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <PurpleGlare position="top-right" intensity={0.4} />
      <PurpleGlare position="bottom-left" intensity={0.3} />
      <motion.div 
        className="max-w-6xl mx-auto"
        style={{ 
          opacity: textOpacity,
          willChange: 'opacity'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-20"
        >
          <div>
            <h2 className="text-4xl md:text-5xl tracking-[-0.02em] font-light mb-12">
              Who We Are
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
              The Cambridge University Charity Fashion Show first launched in 2014, and since then, has hosted an annual show celebrating up and coming designers and their talent, as well as championing charities who create positive change in the local Cambridge community.             
              </p>
              <p>
              Last year was our most successful year yet, with the show being hosted at the prestigious Cambridge Union. We featured more than 25 incredible designers, and 75 designs. With more than 400 attendees on the day of the show celebrating creativity and social change. 
              </p>
              <p>
              Stay tuned for more information about our upcoming 2026 show!
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl tracking-[-0.01em] font-light mb-6">President's Letter</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="italic">
                  "Working with such an incredible team on the Cambridge University Charity Fashion Show is the absolute highlight of my time at Cambridge. 
                  Coordinating such a large event is challenging, but so rewarding, and I am so proud of everyone’s efforts throughout the process 
                  of organising our 2025 showcase! 

                </p>
                <p className="italic">
                  2026 is set to be even bigger and better than ever before, with more designers, more designs, and even more creativity. 
                  We can’t wait to show you all what we’ve been working on!"
                </p>
                <div className="pt-4">
                  <p className="text-sm tracking-wider">— Paige Griffiths, President</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}