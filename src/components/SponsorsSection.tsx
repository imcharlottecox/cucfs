import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { PurpleGlare } from './PurpleGlare'

interface SponsorsSectionProps {
  onSectionClick?: (sectionId: string) => void
  onNavigation?: (page: 'home' | 'archive' | 'committee' | 'about' | 'charity' | 'show' | 'partners' | 'contact', section?: string) => void
}

export function SponsorsSection({ onSectionClick, onNavigation }: SponsorsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Suppress unused variable warnings
  console.log(onSectionClick, onNavigation)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.12, 0.15, 0.2, 0.21, 0.23, 1], [0.1, 0.1, 0.2, 0.3, 0.5, 0.8, 1,1])

  // All 2025 sponsors for the carousel
  const sponsors = [
    { name: "Arttoo", tier: "Main Sponsor", description: "Fractional investment platform for iconic art pieces" },
    { name: "Brockway Carpets", tier: "Red Carpet Sponsor", description: "Premium wool carpets, family-run, eco-friendly production" },
    { name: "Christ's College", tier: "College Sponsor", description: "Cambridge college supporting the show" },
    { name: "Jesus College", tier: "College Sponsor", description: "Cambridge college supporting the show" },
    { name: "Lucy Cavendish College", tier: "College Sponsor", description: "Cambridge college supporting the show" },
    { name: "MuJu Star", tier: "Fashion Partner", description: "Fashion brand specialising in T-shirts and Cami Tops" },
    { name: "ByEloise London", tier: "Fashion Partner", description: "Premium hairbands that double as bangles" },
    { name: "Jack's Gelato", tier: "Food Partner", description: "Handmade ice cream and sorbets, Cambridge favourite" },
    { name: "Pages Coffee", tier: "Food Partner", description: "Independent coffee house in Cambridge city centre" },
    { name: "Pimentae Drinks", tier: "Beverage Partner", description: "Bar-quality tequila cocktails in bottles" },
    { name: "Café Au Chocolat", tier: "Food Partner", description: "Crêpes, patisserie, coffee, and artisan chocolates" },
    { name: "Saffron Walden Coffee Company", tier: "Beverage Partner", description: "Independent roasters, small-batch specialty coffee" },
    { name: "XIX Vodka", tier: "Beverage Partner", description: "Vodka brand from the Sidemen, including pre-mixed Vodka Spritz" },
    { name: "HumaniTea", tier: "Beverage Partner", description: "UK's first plant-based tea lattes in cans" },
    { name: "KAYTEA", tier: "Beverage Partner", description: "Creative tea brand known for matcha lattes and iced teas" },
    { name: "Savoursmiths Crisps", tier: "Food Partner", description: "Luxury crisps, bold flavours like Wagyu Beef & Truffle" },
    { name: "Simply Roasted Crisps", tier: "Food Partner", description: "Healthier crisps roasted in unique ovens, 50% less fat" },
    { name: "DROOLY", tier: "Food Partner", description: "Artisan brownies and baked treats with innovative flavours" },
    { name: "Coupe Rocks", tier: "Beverage Partner", description: "Alcohol-free cocktail subscription boxes and gift sets" },
    { name: "RCDS Concrete", tier: "Business Partner", description: "Specialists in reinforced concrete detailing" }
  ]

  // Duplicate sponsors for seamless looping
  const duplicatedSponsors = [...sponsors, ...sponsors]

  return (
    <section id="sponsors" className="py-12 px-6 relative" ref={ref}>
      <PurpleGlare position="top-left" intensity={0.3} />
      <PurpleGlare position="bottom-right" intensity={0.5} />
      <motion.div 
        className="max-w-4xl mx-auto"
        style={{ 
          opacity: textOpacity
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl tracking-[-0.02em] font-light mb-4">
            Partners
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mb-4" />
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Thank you to our incredible sponsors who make the Cambridge University Charity Fashion Show possible.
          </p>
          <div className="mt-4">
            <button
              onClick={() => onNavigation?.('partners')}
              className="text-sm text-foreground underline hover:text-muted-foreground transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-0 focus:border-0"
            >
              Learn More About Partnering with CUCFS
            </button>
          </div>
        </motion.div>

        {/* Scrolling Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div className="flex">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: [0, -50 + "%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear"
                }
              }}
            >
              {duplicatedSponsors.map((sponsor, index) => (
                <motion.div
                  key={`${sponsor.name}-${index}`}
                  className="flex-shrink-0 px-8 py-4 mx-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl md:text-3xl font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300">
                    {sponsor.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </motion.div>
    </section>
  )
}