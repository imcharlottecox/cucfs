import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

export function PartnersPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const partners = [
    { name: "Arttoo", description: "Fractional investment platform for iconic art pieces (Sotheby's, Christie's). Supports provenance tracking and community investment." },
    { name: "Brockway Carpets", description: "Premium wool carpets, family-run, eco-friendly production." },
    { name: "MuJu Star", description: "Fashion brand specialising in T-shirts and Cami Tops. 'It Girl Energy.'" },
    { name: "ByEloise London", description: "Premium hairbands that double as bangles, gift boxes shortlisted for 'Gift of the Year 2025.'" },
    { name: "Jack's Gelato", description: "Handmade ice cream and sorbets, Cambridge favourite." },
    { name: "Pages Coffee", description: "Independent coffee house in Cambridge city centre." },
    { name: "Pimentae Drinks", description: "Bar-quality tequila cocktails in bottles, focus on experience and sustainability." },
    { name: "Café Au Chocolat", description: "Crêpes, patisserie, coffee, and artisan chocolates inspired by French traditions." },
    { name: "Saffron Walden Coffee Company", description: "Independent roasters, small-batch specialty coffee." },
    { name: "XIX Vodka", description: "Vodka brand from the Sidemen, including pre-mixed Vodka Spritz." },
    { name: "HumaniTea", description: "UK's first plant-based tea lattes in cans (Matcha, Earl Grey). Social enterprise." },
    { name: "KAYTEA", description: "Creative tea brand founded in 2020, known for matcha lattes and iced teas." },
    { name: "Savoursmiths Crisps", description: "Luxury crisps, bold flavours like Wagyu Beef & Truffle." },
    { name: "Simply Roasted Crisps", description: "Healthier crisps roasted in unique ovens, 50% less fat." },
    { name: "DROOLY", description: "Artisan brownies and baked treats with innovative flavours." },
    { name: "Coupe Rocks", description: "Alcohol-free cocktail subscription boxes and gift sets." },
    { name: "RCDS Concrete", description: "Specialists in reinforced concrete detailing, projects include Tottenham Stadium & Liverpool FC stand." },
    { name: "Christ's College", description: "Cambridge college supporting the show through donations." },
    { name: "Jesus College", description: "Cambridge college supporting the show through donations." },
    { name: "Lucy Cavendish College", description: "Cambridge college supporting the show through donations." },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 overflow-y-auto" ref={ref}>
    <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={isMobile ? { duration: 0 } : { duration: 0.8, delay: 0.4 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl tracking-[-0.02em] font-light mb-6">
            SPONSORS & PARTNERS
          </h1>
          <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Thank you to our incredible sponsors who make the Cambridge University Charity Fashion Show possible.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div
  className={isMobile
    ? "relative overflow-x-auto -mx-6 px-6"      // bleed to edges
    : "relative overflow-hidden"}                 // marquee mask on desktop
  style={isMobile ? {
    WebkitOverflowScrolling: 'touch',
    overscrollBehaviorX: 'contain',
    touchAction: 'pan-x',
  } : undefined}
>
  <div
    className={isMobile
      ? "flex gap-6 whitespace-nowrap snap-x snap-mandatory"
      : "flex whitespace-nowrap"}
    style={isMobile
      ? { transform: 'none' }                     // ⬅️ kill marquee on mobile
      : { transform: 'translateX(-50%)' }}        // keep marquee on desktop
  >
    {partners.map((p, i) => (
      <div
        key={i}
        className="flex-shrink-0 snap-center px-8 py-4 mx-4"
      >
        <div className="text-2xl md:text-3xl font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300">
          {p.name}
        </div>
      </div>
    ))}
  </div>
</div>
        {/* Contact Section */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={isMobile ? { duration: 0 } : { duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-light mb-6">Interested in Partnering?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of sponsors and help us make a difference through fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8 py-3">
              <a
                href="mailto:cucfs@cambridgesu.co.uk"
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
