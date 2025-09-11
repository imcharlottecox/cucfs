import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Button } from './ui/button'

export function ShowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="show" className="py-32 px-6 bg-muted/20" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-2xl tracking-[-0.01em] font-light mb-4">Theme</h3>
              <p className="text-4xl font-light tracking-wider">METAMORPHOSIS</p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                An exploration of transformation, growth, and the beautiful evolution 
                of identity through fashion.
              </p>
            </div>

            <div>
              <h3 className="text-2xl tracking-[-0.01em] font-light mb-4">Date</h3>
              <p className="text-4xl font-light tracking-wider">MAR 15</p>
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
    </section>
  )
}