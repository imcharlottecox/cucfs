import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

export function PartnersPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const partners = [
    // Main Sponsor
    { 
      name: "Arttoo", 
      description: "Fractional investment platform for iconic art pieces (Sotheby's, Christie's). Supports provenance tracking and community investment."
    },
    // Red Carpet Sponsor
    { 
      name: "Brockway Carpets", 
 
      description: "Premium wool carpets, family-run, eco-friendly production."
    },
    // Fashion & Lifestyle
    { 
      name: "MuJu Star", 
 
      description: "Fashion brand specialising in T-shirts and Cami Tops. 'It Girl Energy.'"
    },
    { 
      name: "ByEloise London", 
 
      description: "Premium hairbands that double as bangles, gift boxes shortlisted for 'Gift of the Year 2025.'"
    },
    // Food & Beverage
    { 
      name: "Jack's Gelato", 
 
      description: "Handmade ice cream and sorbets, Cambridge favourite."
    },
    { 
      name: "Pages Coffee", 
 
      description: "Independent coffee house in Cambridge city centre."
    },
    { 
      name: "Pimentae Drinks", 
 
      description: "Bar-quality tequila cocktails in bottles, focus on experience and sustainability."
    },
    { 
      name: "Café Au Chocolat", 
 
      description: "Crêpes, patisserie, coffee, and artisan chocolates inspired by French traditions."
    },
    { 
      name: "Saffron Walden Coffee Company", 
 
      description: "Independent roasters, small-batch specialty coffee."
    },
    { 
      name: "XIX Vodka", 
 
      description: "Vodka brand from the Sidemen, including pre-mixed Vodka Spritz."
    },
    { 
      name: "HumaniTea", 
 
      description: "UK's first plant-based tea lattes in cans (Matcha, Earl Grey). Social enterprise."
    },
    { 
      name: "KAYTEA", 
 
      description: "Creative tea brand founded in 2020, known for matcha lattes and iced teas."
    },
    // Snacks & Treats
    { 
      name: "Savoursmiths Crisps", 
 
      description: "Luxury crisps, bold flavours like Wagyu Beef & Truffle."
    },
    { 
      name: "Simply Roasted Crisps", 
 
      description: "Healthier crisps roasted in unique ovens, 50% less fat."
    },
    { 
      name: "DROOLY", 
 
      description: "Artisan brownies and baked treats with innovative flavours."
    },
    { 
      name: "Coupe Rocks", 
 
      description: "Alcohol-free cocktail subscription boxes and gift sets."
    },
    // Business Services
    { 
      name: "RCDS Concrete", 
 
      description: "Specialists in reinforced concrete detailing, projects include Tottenham Stadium & Liverpool FC stand."
    },
        // College Sponsors
    { 
      name: "Christ's College", 
 
      description: "Cambridge college supporting the show through donations."
    },
    { 
      name: "Jesus College", 
 
      description: "Cambridge college supporting the show through donations."
    },
    { 
      name: "Lucy Cavendish College", 
 
      description: "Cambridge college supporting the show through donations."
    },
  ]


  return (
    <div className="min-h-screen pt-32 pb-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-light text-center mb-12">Our 2025 Sponsors & Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <Card className="h-full relative group border border-border/20 hover:border-primary/20 overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/80 to-pink-500/20 opacity-10 group-hover:opacity-30 blur-[2px] transition-all duration-500" />
                
                {/* Card content wrapper */}
                <div className="relative z-10 p-4">
                    <CardHeader className="pb-3">
                    <CardTitle className="text-base font-medium tracking-wide mb-2 group-hover:text-primary transition-colors duration-300">
                        {partner.name}
                    </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        {partner.description}
                    </p>
                    </CardContent>
                </div>
                </Card>

              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-light mb-6">Interested in Partnering?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of sponsors and help us make a difference through fashion. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button
              asChild
              size="lg"
              className="px-8 py-3"
            >
              <a
                href="/partners-deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Partners Deck
              </a>
            </Button> */}
            <Button
              asChild
            //   variant="outline"
              size="lg"
              className="px-8 py-3"
            >
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





