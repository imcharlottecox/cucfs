import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { PurpleGlare } from './PurpleGlare'

interface SponsorsSectionProps {
  onSectionClick?: (sectionId: string) => void
  onNavigation?: (
    page: 'home' | 'archive' | 'committee' | 'about' | 'charity' | 'show' | 'partners' | 'contact',
    section?: string
  ) => void
}

export function SponsorsSection({ onNavigation }: SponsorsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [0.2, 0.5, 0.8, 1])

  const sponsors = [
    { name: 'Arttoo', tier: 'Main Sponsor' },
    { name: 'Brockway Carpets', tier: 'Red Carpet Sponsor' },
    { name: "Christ's College", tier: 'College Sponsor' },
    { name: 'Jesus College', tier: 'College Sponsor' },
    { name: 'Lucy Cavendish College', tier: 'College Sponsor' },
    { name: 'MuJu Star', tier: 'Fashion Partner' },
    { name: 'ByEloise London', tier: 'Fashion Partner' },
    { name: "Jack's Gelato", tier: 'Food Partner' },
    { name: 'Pages Coffee', tier: 'Food Partner' },
    { name: 'Pimentae Drinks', tier: 'Beverage Partner' },
    { name: 'Café Au Chocolat', tier: 'Food Partner' },
    { name: 'Saffron Walden Coffee Company', tier: 'Beverage Partner' },
    { name: 'XIX Vodka', tier: 'Beverage Partner' },
    { name: 'HumaniTea', tier: 'Beverage Partner' },
    { name: 'KAYTEA', tier: 'Beverage Partner' },
    { name: 'Savoursmiths Crisps', tier: 'Food Partner' },
    { name: 'Simply Roasted Crisps', tier: 'Food Partner' },
    { name: 'DROOLY', tier: 'Food Partner' },
    { name: 'Coupe Rocks', tier: 'Beverage Partner' },
    { name: 'RCDS Concrete', tier: 'Business Partner' }
  ]
  const duplicatedSponsors = [...sponsors, ...sponsors]

  return (
    <section id="sponsors" className="py-12 px-6 relative" ref={ref}>
      <PurpleGlare position="top-left" intensity={0.3} />
      <PurpleGlare position="bottom-right" intensity={0.5} />

      <motion.div className="max-w-4xl mx-auto" style={{ opacity: textOpacity }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl tracking-[-0.02em] font-light mb-4">Partners</h2>
          <div className="w-16 h-px bg-foreground mx-auto mb-4" />
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Thank you to our incredible sponsors who make the Cambridge University Charity Fashion Show possible.
          </p>
          <div className="mt-4">
            <button
              onClick={() => onNavigation?.('partners')}
              className="text-sm text-foreground underline hover:text-muted-foreground transition-colors duration-300 cursor-pointer focus:outline-none"
            >
              Learn More About Partnering with CUCFS
            </button>
          </div>
        </motion.div>

        {/* Desktop: Infinite auto-scrolling */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <div className="flex">
              <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, '-50%'] }}
                transition={{
                  x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' }
                }}
              >
                {duplicatedSponsors.map((sponsor, index) => (
                  <div
                    key={`${sponsor.name}-${index}`}
                    className="flex-shrink-0 px-8 py-4 mx-4 text-2xl md:text-3xl font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {sponsor.name}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient fades */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          </motion.div>
        )}

        {/* Mobile: Manual scrollable carousel */}
        {isMobile && (
          <div className="overflow-x-auto flex gap-6 scrollbar-thin scrollbar-thumb-muted-foreground/40 scrollbar-track-transparent py-4 -mx-6 px-6">
            {sponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 text-lg font-light text-muted-foreground hover:text-foreground transition-colors duration-300 min-w-[150px]"
              >
                {sponsor.name}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}
