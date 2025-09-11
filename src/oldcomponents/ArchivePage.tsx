import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function ArchivePage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const archiveImages = [
    {
      src: "https://images.unsplash.com/photo-1731537069369-05d0afe1fdb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYXJjaGl2ZSUyMHZpbnRhZ2V8ZW58MXx8fHwxNzU3NTI2NDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "ECLIPSE 2024",
      subtitle: "Dark romanticism meets modern minimalism",
      description: "Our most ambitious show to date, Eclipse explored the interplay between light and shadow, featuring 25 emerging designers and raising £30,000 for mental health initiatives."
    },
    {
      src: "https://images.unsplash.com/photo-1650094850654-60cbdff0e79d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2hvdyUyMGJhY2tzdGFnZSUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NTc1MjY0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "GENESIS 2023",
      subtitle: "Celebrating new beginnings and raw creativity",
      description: "A celebration of emerging talent, Genesis marked our return to live shows post-pandemic, featuring sustainable fashion and innovative textile work from 20 designers."
    },
    {
      src: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "PRISM 2022",
      subtitle: "A kaleidoscope of colors and textures",
      description: "An explosive celebration of diversity and inclusion, PRISM showcased designers from over 15 countries, creating a truly global fashion experience."
    },
    {
      src: "https://images.unsplash.com/photo-1741816219440-77547b7515c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwbW9kZWxzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTc1MjY0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "MONOLITH 2021",
      subtitle: "Structured elegance in unprecedented times",
      description: "Our first digital-hybrid show, MONOLITH explored themes of isolation and connection through architectural fashion and innovative presentation formats."
    },
    {
      src: "https://images.unsplash.com/photo-1690221305651-2a63f2ec463e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwZmFzaGlvbiUyMGV2ZW50fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "FLUX 2020",
      subtitle: "Adaptation and transformation",
      description: "The show that started our journey into conscious fashion, FLUX emphasized upcycling and sustainable practices while supporting local artisans."
    },
    {
      src: "https://images.unsplash.com/photo-1731537069369-05d0afe1fdb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYXJjaGl2ZSUyMHZpbnRhZ2V8ZW58MXx8fHwxNzU3NTI2NDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "ORIGIN 2019",
      subtitle: "Where it all began",
      description: "Our inaugural show established the foundation for everything that followed, featuring 12 student designers and setting our mission of fashion for social impact."
    }
  ]

  return (
    <div className="pt-24">
      {/* Header Section */}
      <section className="py-20 px-6" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl tracking-[-0.02em] font-light mb-8">
              Archive
            </h1>
            <div className="w-24 h-px bg-foreground mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A journey through our creative evolution—each show a milestone in our mission 
              to merge fashion with social consciousness and artistic innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {archiveImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-end p-6"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white">
                      <h3 className="text-xl tracking-wide font-light mb-2">
                        {image.title}
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed mb-3">
                        {image.subtitle}
                      </p>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-light tracking-wide">
                    {image.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {image.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-muted/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-light tracking-[-0.01em] mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Each show builds upon the last, creating a legacy of creativity, 
              innovation, and social impact. Join us as we continue to push 
              boundaries and make a difference through fashion.
            </p>
            <p className="text-lg font-light tracking-wide">
              Ready to witness the next chapter?
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}