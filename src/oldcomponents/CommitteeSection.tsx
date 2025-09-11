import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function CommitteeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const committee = [
    { name: "Alexandra Chen", role: "President", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Marcus Williams", role: "Creative Director", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Sophia Rodriguez", role: "Production Manager", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "James Park", role: "Marketing Lead", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Emma Thompson", role: "Stylist Coordinator", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "David Kim", role: "Finance Director", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" }
  ]

  return (
    <section id="committee" className="py-32 px-6 bg-muted/10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl tracking-[-0.02em] font-light mb-8">
            Committee
          </h2>
          <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meet the passionate individuals who bring our vision to life, 
            each contributing their unique expertise to create something extraordinary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {committee.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="aspect-square overflow-hidden mb-6 relative">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300" />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground tracking-wider uppercase">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] bg-muted/30 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-light tracking-wide mb-4">
                Committee Group Photo
              </h3>
              <p className="text-muted-foreground">
                Professional photography session coming soon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}