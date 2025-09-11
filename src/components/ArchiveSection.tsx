import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function ArchiveSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const archiveImages = [
    {
      src: "https://images.unsplash.com/photo-1731537069369-05d0afe1fdb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYXJjaGl2ZSUyMHZpbnRhZ2V8ZW58MXx8fHwxNzU3NTI2NDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "ECLIPSE 2024",
      subtitle: "Dark romanticism meets modern minimalism"
    },
    {
      src: "https://images.unsplash.com/photo-1650094850654-60cbdff0e79d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2hvdyUyMGJhY2tzdGFnZSUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NTc1MjY0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "GENESIS 2023",
      subtitle: "Celebrating new beginnings and raw creativity"
    },
    {
      src: "https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyNjQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "PRISM 2022",
      subtitle: "A kaleidoscope of colors and textures"
    },
    {
      src: "https://images.unsplash.com/photo-1741816219440-77547b7515c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwbW9kZWxzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTc1MjY0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "MONOLITH 2021",
      subtitle: "Structured elegance in unprecedented times"
    }
  ]

  return (
    <section id="archive" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl tracking-[-0.02em] font-light mb-8">
            Archive
          </h2>
          <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated collection of moments from our past shows, each one a chapter 
            in our ongoing story of artistic evolution and social impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {archiveImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-black/40 flex items-end p-6"
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
                    <p className="text-sm text-white/80 leading-relaxed">
                      {image.subtitle}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}