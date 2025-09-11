import { motion } from 'motion/react'
import { Calendar, MapPin, Ticket } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function ShowPage() {
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
            ETHEREAL VISIONS
          </h1>
          <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our annual showcase celebrating the intersection of dreams and reality through fashion
          </p>
        </motion.div>

        {/* Show Details */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Calendar className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="text-lg">March 15, 2025</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Venue</p>
                  <p className="text-lg">Grand Metropolitan Hall</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Ticket className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Tickets</p>
                  <p className="text-lg">From £25 • Available Soon</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-light">Theme Concept</h2>
              <p className="text-muted-foreground leading-relaxed">
                "Ethereal Visions" explores the liminal space between conscious thought and 
                subconscious desires. Our designers have crafted collections that blur the 
                boundaries between the tangible and the imagined, creating garments that feel 
                both otherworldly and intimately familiar.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                This year's show features 12 emerging designers, 25 exclusive pieces, and 
                innovative staging that transforms the runway into an immersive dreamscape.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full tracking-wide transition-all duration-300 hover:bg-primary/90"
            >
              Notify Me When Tickets Are Available
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=750&fit=crop&crop=faces,center"
                alt="Fashion Show Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Featured Designers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-light text-center mb-12">Featured Designers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "ARIA CHEN", specialty: "Sustainable Couture" },
              { name: "MARCUS VOID", specialty: "Digital Fashion" },
              { name: "LUNA STERLING", specialty: "Textile Innovation" },
              { name: "KAI NAKAMURA", specialty: "Minimalist Design" }
            ].map((designer, index) => (
              <motion.div
                key={designer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-24 h-24 rounded-full bg-muted/50 mx-auto mb-4 transition-colors duration-300 group-hover:bg-primary/10" />
                <h3 className="font-light mb-1">{designer.name}</h3>
                <p className="text-sm text-muted-foreground">{designer.specialty}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Previous Shows */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-3xl font-light text-center mb-12">Past Showcases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: "2024", theme: "Urban Metamorphosis", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop" },
              { year: "2023", theme: "Digital Renaissance", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop" },
              { year: "2022", theme: "Organic Futures", image: "https://images.unsplash.com/photo-1566663313867-0fbbf10e6e57?w=400&h=300&fit=crop" }
            ].map((show, index) => (
              <motion.div
                key={show.year}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                  <ImageWithFallback
                    src={show.image}
                    alt={`${show.theme} Show`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-light mb-1">{show.theme}</h3>
                <p className="text-sm text-muted-foreground">{show.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}