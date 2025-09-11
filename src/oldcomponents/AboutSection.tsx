import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'

type Page = 'home' | 'about' | 'show' | 'charity' | 'partners' | 'contact' | 'archive' | 'committee'

interface AboutSectionProps {
  onNavigation: (page: Page, section?: string) => void
}

export function AboutSection({ onNavigation }: AboutSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-20"
        >
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl tracking-[-0.02em] font-light mb-12 cursor-pointer hover:text-primary transition-colors duration-300"
              onClick={() => onNavigation('about')}
              whileHover={{ scale: 1.02 }}
            >
              Who We Are
            </motion.h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We are a collective of visionaries, dreamers, and creators who believe fashion 
                is more than fabric and thread—it's a powerful medium for storytelling, 
                social change, and artistic expression.
              </p>
              <p>
                Our society bridges the gap between emerging designers and established industry 
                professionals, fostering an environment where creativity flourishes and 
                meaningful connections are forged.
              </p>
              <p>
                Each year, we curate an extraordinary showcase that challenges conventions, 
                celebrates diversity, and raises vital funds for causes close to our hearts.
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
                  "Fashion has always been my language of choice—a way to communicate 
                  without words, to challenge perceptions, and to celebrate the beautiful 
                  complexity of human expression."
                </p>
                <p>
                  This year, we embark on our most ambitious journey yet. Our upcoming show 
                  promises to be a transformative experience that pushes boundaries while 
                  honoring the rich legacy of those who came before us.
                </p>
                <p>
                  Join us as we redefine what it means to be fashionable, conscious, and 
                  uncompromisingly authentic.
                </p>
                <div className="pt-4">
                  <p className="text-sm tracking-wider">— Alexandra Chen, President</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}