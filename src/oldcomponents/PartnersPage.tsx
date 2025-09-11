import { motion } from 'motion/react'
import { useState } from 'react'

export function PartnersPage() {
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null)

  const partners = [
    { name: "VALENTINO", size: "large", x: 10, y: 15, rotation: -5 },
    { name: "STELLA MCCARTNEY", size: "medium", x: 60, y: 25, rotation: 8 },
    { name: "GUCCI", size: "small", x: 85, y: 10, rotation: -12 },
    { name: "DIOR", size: "medium", x: 25, y: 45, rotation: 15 },
    { name: "CHANEL", size: "large", x: 70, y: 55, rotation: -8 },
    { name: "PRADA", size: "small", x: 15, y: 70, rotation: 22 },
    { name: "VERSACE", size: "medium", x: 45, y: 80, rotation: -18 },
    { name: "BURBERRY", size: "small", x: 80, y: 75, rotation: 5 },
    { name: "YSL", size: "large", x: 35, y: 20, rotation: -25 },
    { name: "HERMÈS", size: "medium", x: 55, y: 40, rotation: 12 },
    { name: "LOUIS VUITTON", size: "small", x: 5, y: 50, rotation: -15 },
    { name: "GIVENCHY", size: "medium", x: 90, y: 45, rotation: 28 },
    { name: "BOTTEGA VENETA", size: "small", x: 20, y: 85, rotation: -10 },
    { name: "CELINE", size: "large", x: 65, y: 15, rotation: 18 },
    { name: "ALEXANDER MCQUEEN", size: "medium", x: 40, y: 65, rotation: -22 },
    { name: "OFF-WHITE", size: "small", x: 75, y: 35, rotation: 8 },
    { name: "BALENCIAGA", size: "medium", x: 12, y: 35, rotation: -18 },
    { name: "SAINT LAURENT", size: "small", x: 88, y: 65, rotation: 25 },
  ]

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'text-xl md:text-2xl px-6 py-3'
      case 'medium':
        return 'text-base md:text-lg px-4 py-2'
      case 'small':
        return 'text-sm md:text-base px-3 py-1.5'
      default:
        return 'text-base md:text-lg px-4 py-2'
    }
  }

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
            PARTNERSHIPS
          </h1>
          <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Collaborating with visionary brands that share our commitment to innovation and social impact
          </p>
        </motion.div>

        {/* Partner Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative min-h-[600px] mb-20"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + index * 0.05,
                type: "spring",
                stiffness: 200
              }}
              className="absolute cursor-pointer"
              style={{
                left: `${partner.x}%`,
                top: `${partner.y}%`,
                transform: `translate(-50%, -50%) rotate(${partner.rotation}deg)`,
              }}
              onMouseEnter={() => setHoveredPartner(partner.name)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 10
                }}
                className={`
                  bg-card/80 backdrop-blur-sm border border-border/30 rounded-lg
                  transition-all duration-300 hover:shadow-lg hover:bg-primary/10
                  ${getSizeClasses(partner.size)}
                `}
              >
                <span className="font-light tracking-wide whitespace-nowrap">
                  {partner.name}
                </span>
              </motion.div>

              {/* Hover tooltip */}
              {hoveredPartner === partner.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
                             bg-background border border-border rounded-lg px-3 py-2 
                             text-sm whitespace-nowrap shadow-lg z-20"
                >
                  {partner.name}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 
                                  w-2 h-2 bg-background border-l border-t border-border 
                                  rotate-45" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Types */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-12 mb-20"
        >
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 rounded-full bg-primary" />
            </div>
            <h3 className="text-xl font-light mb-4">Design Collaborations</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Working with established houses to create exclusive pieces for our shows
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 rounded-full bg-primary" />
            </div>
            <h3 className="text-xl font-light mb-4">Sponsorship Partners</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Financial and material support that enables our charitable initiatives
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 rounded-full bg-primary" />
            </div>
            <h3 className="text-xl font-light mb-4">Strategic Alliances</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Long-term partnerships focused on sustainable fashion and social impact
            </p>
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-muted/20 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-light mb-6">Partner With Us</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join a community of forward-thinking brands committed to using fashion as a force for positive change. 
            Our partnerships offer unique opportunities for brand exposure, creative collaboration, and meaningful impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full tracking-wide transition-all duration-300 hover:bg-primary/90"
            >
              Partnership Inquiry
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-border text-foreground rounded-full tracking-wide transition-all duration-300 hover:bg-muted/50"
            >
              View Partnership Deck
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}