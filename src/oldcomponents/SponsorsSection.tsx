import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Button } from './ui/button'

type Page = 'home' | 'about' | 'show' | 'charity' | 'partners' | 'contact' | 'archive' | 'committee'

interface SponsorsSectionProps {
  onNavigation: (page: Page, section?: string) => void
}

export function SponsorsSection({ onNavigation }: SponsorsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const sponsors = [
    { name: "ATELIER MODERNE", tier: "Principal Partner" },
    { name: "SUSTAINABLE THREADS", tier: "Creative Partner" },
    { name: "LENS COLLECTIVE", tier: "Media Partner" },
    { name: "VENUE STUDIOS", tier: "Space Partner" },
    { name: "ETHICAL BEAUTY CO", tier: "Beauty Partner" },
    { name: "LOCAL ARTISAN GUILD", tier: "Community Partner" }
  ]

  return (
    <section id="sponsors" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl tracking-[-0.02em] font-light mb-8 cursor-pointer hover:text-primary transition-colors duration-300"
            onClick={() => onNavigation('partners')}
            whileHover={{ scale: 1.02 }}
          >
            Partners
          </motion.h2>
          <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We collaborate with visionary brands and organizations who share our 
            commitment to creativity, sustainability, and social impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center p-8 border border-border/20 hover:border-border/40 transition-all duration-300"
            >
              <div className="aspect-square bg-muted/30 mb-6 flex items-center justify-center group-hover:bg-muted/50 transition-colors duration-300">
                <span className="text-2xl font-light tracking-widest text-muted-foreground">
                  LOGO
                </span>
              </div>
              <h3 className="text-xl font-light tracking-wide mb-2">
                {sponsor.name}
              </h3>
              <p className="text-sm text-muted-foreground tracking-wider">
                {sponsor.tier}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-muted/20 p-12 md:p-16"
        >
          <h3 className="text-3xl font-light tracking-[-0.01em] mb-6">
            Join Our Community
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            Partner with us to showcase your brand alongside emerging talent while 
            supporting meaningful causes. Together, we can create something extraordinary.
          </p>
          <div className="space-y-4">
            <p className="text-lg font-light tracking-wide">
              Interested in partnering with us?
            </p>
            <Button 
              size="lg" 
              className="px-12 py-6 text-lg tracking-wide bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}