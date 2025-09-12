import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { PurpleGlare } from './PurpleGlare'

interface AboutSectionProps {
  onSectionClick?: (sectionId: string) => void
}

export function AboutSection({ onSectionClick }: AboutSectionProps) {
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
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <PurpleGlare position="top-right" intensity={0.4} />
      <PurpleGlare position="bottom-left" intensity={0.3} />
      <motion.div 
        className="max-w-6xl mx-auto"
        style={{ 
          opacity: textOpacity
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo elit libero, non scelerisque nibh porttitor at. In eget erat lectus. Aliquam erat volutpat. Etiam eleifend ante finibus, porttitor justo et, laoreet enim. 
              </p>
              <p>
              Suspendisse potenti. Nam eu velit quis tellus accumsan posuere at eu orci. 

              </p>
              <p>
              Ut eu nulla id odio tincidunt rutrum dignissim vel lacus. Aenean feugiat fringilla turpis ac vestibulum. Integer varius dictum imperdiet. Cras mattis metus in efficitur tristique. Praesent eget tristique ante. Etiam finibus et eros in aliquam. Vivamus nec interdum risus.

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