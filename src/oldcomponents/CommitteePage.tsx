import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'

export function CommitteePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const executives = [
    { 
      name: "Alexandra Chen", 
      role: "President", 
      image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "A third-year Fashion Business student with a passion for sustainable fashion and social entrepreneurship. Alexandra has led the society to its most successful shows and partnerships."
    },
    { 
      name: "Marcus Williams", 
      role: "Creative Director", 
      image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "An innovative designer studying Fashion Design with a focus on avant-garde aesthetics. Marcus oversees all creative aspects of our shows and collaborates with emerging designers."
    },
    { 
      name: "Sophia Rodriguez", 
      role: "Production Manager", 
      image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "A logistics expert pursuing Event Management, Sophia ensures every show runs flawlessly. Her attention to detail and organizational skills are unmatched."
    }
  ]

  const committee = [
    { name: "James Park", role: "Marketing Lead", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Emma Thompson", role: "Stylist Coordinator", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "David Kim", role: "Finance Director", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Maya Patel", role: "Social Media Manager", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Oliver Chen", role: "Photography Lead", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Zara Ahmed", role: "Sustainability Officer", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Lucas Thompson", role: "Technical Director", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Isabella Martinez", role: "Volunteer Coordinator", image: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080" }
  ]

  return (
    <div className="pt-24">
      {/* Header Section */}
      <section className="py-20 px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl tracking-[-0.02em] font-light mb-8">
              Committee
            </h1>
            <div className="w-24 h-px bg-foreground mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet the passionate individuals who bring our vision to life—a diverse team 
              of creatives, strategists, and innovators united by a shared love for fashion and social impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 px-6 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-light tracking-[-0.01em] text-center mb-16"
          >
            Executive Team
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {executives.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-light tracking-wide mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground tracking-wider uppercase">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-light tracking-[-0.01em] text-center mb-16"
          >
            Committee Members
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {committee.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="aspect-square overflow-hidden mb-4 relative">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300" />
                </div>
                <h3 className="text-lg font-light tracking-wide mb-1">
                  {member.name}
                </h3>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Photo Placeholder */}
      <section className="py-20 px-6 bg-muted/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light tracking-[-0.01em] mb-6">
              Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Behind every successful show is a team that believes in the power of collaboration, 
              creativity, and positive change through fashion.
            </p>
          </motion.div>
          
          <div className="aspect-[16/9] bg-muted/30 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-light tracking-wide mb-4">
                Committee Group Photo
              </h3>
              <p className="text-muted-foreground mb-8">
                Professional photography session coming soon
              </p>
              <Button 
                variant="outline" 
                className="px-8 py-3 tracking-wide border-2 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                View Past Team Photos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-light tracking-[-0.01em] mb-6">
              Join Our Creative Community
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference 
              through fashion. Whether you're a designer, organizer, or simply someone who 
              believes in our mission, there's a place for you on our team.
            </p>
            <div className="space-y-4">
              <p className="text-lg font-light tracking-wide">
                Interested in joining us?
              </p>
              <Button 
                size="lg" 
                className="px-12 py-6 text-lg tracking-wide bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
              >
                Get Involved
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}