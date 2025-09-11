import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import exampleImage from 'figma:asset/e0ce485ccc79b1571c55989987714528eab2df14.png'

export function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const modelY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const modelScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section 
      id="home" 
      className="min-h-[120vh] flex items-center justify-center relative overflow-hidden"
      ref={containerRef}
    >
      {/* Model overlay - positioned to flow beyond viewport */}
      <motion.div 
        className="absolute right-0 top-0 w-[60%] h-[110vh] z-20 pointer-events-none"
        style={{ 
          y: modelY,
          scale: modelScale
        }}
      >
        <img
          src={exampleImage}
          alt="Fashion model"
          className="w-full h-full object-cover object-left opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/80" />
      </motion.div>

      <motion.div 
        className="relative z-10 text-left max-w-6xl mx-auto px-6 flex items-center min-h-screen"
        style={{ y: textY }}
      >
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl tracking-[-0.03em] font-light mb-4 leading-none">
              FASHION
            </h1>
            <h1 className="text-7xl md:text-8xl lg:text-9xl tracking-[-0.03em] font-light mb-8 leading-none">
              SOCIETY
            </h1>
            <div className="w-24 h-px bg-foreground mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-lg"
          >
            <p className="text-lg tracking-wide text-muted-foreground leading-relaxed">
              Where creativity meets purpose. An avant-garde collective showcasing emerging talent 
              while championing meaningful causes through the art of fashion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12"
          >
            <div className="flex">
              <div className="w-px h-12 bg-muted-foreground/50" />
            </div>
            <p className="text-xs tracking-widest text-muted-foreground mt-4">SCROLL TO EXPLORE</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}