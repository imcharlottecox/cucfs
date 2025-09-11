import { motion } from 'motion/react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl tracking-[-0.02em] font-light mb-6">
            ABOUT US
          </h1>
          <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collective of creative minds dedicated to pushing fashion boundaries and supporting meaningful causes
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-light mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fashion Society represents the convergence of art, innovation, and social responsibility. 
                We curate experiences that challenge conventional beauty standards while creating platforms 
                for emerging talent to flourish.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Through carefully crafted fashion shows and collaborative partnerships, we aim to 
                redefine the relationship between fashion and philanthropy, proving that style 
                and substance can coexist beautifully.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1566663313867-0fbbf10e6e57?w=600&h=750&fit=crop&crop=faces,center"
                alt="Fashion Society Behind the Scenes"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-12"
        >
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 rounded-full bg-primary" />
            </div>
            <h3 className="text-xl font-light mb-4">Innovation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pushing creative boundaries through avant-garde design and unconventional presentations
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 rounded-full bg-primary" />
            </div>
            <h3 className="text-xl font-light mb-4">Community</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building bridges between designers, models, and audiences to create inclusive experiences
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 rounded-full bg-primary" />
            </div>
            <h3 className="text-xl font-light mb-4">Impact</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating meaningful change through fashion-forward fundraising and awareness campaigns
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}