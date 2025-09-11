import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'

export function CharitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="charity" className="py-32 px-6 bg-muted/10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl tracking-[-0.02em] font-light mb-8">
            Our Purpose
          </h2>
          <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fashion with meaning. Every thread, every design, every moment on our runway 
            contributes to causes that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690221305651-2a63f2ec463e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZmFzaGlvbiUyMGV2ZW50fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Charity fashion event"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl tracking-[-0.01em] font-light mb-6">
                2025 Beneficiary
              </h3>
              <h4 className="text-2xl mb-4">Mental Health Foundation</h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This year, we're proud to support mental health awareness and resources 
                for young creatives. Through our show, we aim to raise £25,000 to fund 
                art therapy programs that provide healing through creative expression.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fashion has always been a form of self-expression and identity exploration. 
                We believe everyone deserves access to creative outlets that support 
                their mental wellbeing.
              </p>
            </div>

            <div className="pt-6 border-t border-border/20">
              <h4 className="text-xl font-light mb-4">Last Year's Impact</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In 2024, we raised £22,000 for Safe Spaces Initiative, helping establish 
                creative workshops for at-risk youth in underserved communities.
              </p>
              <p className="text-sm text-muted-foreground">
                Together, we funded 240 workshop sessions, impacting over 150 young lives.
              </p>
            </div>

            <Button 
              variant="outline" 
              className="mt-8 px-8 py-3 tracking-wide border-2 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Learn More About Our Mission
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}