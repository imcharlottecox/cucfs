import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { PurpleGlare } from './PurpleGlare'
import { Instagram, Linkedin, Facebook, Mail } from 'lucide-react'

interface ContactSectionProps {
  onSectionClick?: (sectionId: string) => void
}

export function ContactSection({ onSectionClick }: ContactSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  console.log(onSectionClick)

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      handle: '@CUCFS',
      url: 'https://instagram.com/CUCFS'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      handle: 'CUCFS',
      url: 'https://www.linkedin.com/company/cambridge-charity-fashion-society/about/'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      handle: 'CUCFS Official',
      url: 'https://facebook.com/CUCFS'
    },
    {
      icon: Mail,
      label: 'Email',
      handle: 'cucfs@cambridgesu.co.uk',
      url: 'mailto:cucfs@cambridgesu.co.uk'
    }
  ]

  return (
    <section id="contact" className="py-16 px-6 relative" ref={ref}>
      <PurpleGlare position="top-middle-right" intensity={0.4} />
      <PurpleGlare position="bottom-left" intensity={0.3} />

      {/* Wrapper always visible on load */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          animate={
            isMobile || isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={{ duration: isMobile ? 0 : 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl tracking-[-0.02em] font-light mb-4">
            Connect
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mb-4" />
        </motion.div>

        {/* Social links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel={
                link.label !== 'Email' ? 'noopener noreferrer' : undefined
              }
              className="group flex items-center p-4 border border-border/20 hover:border-border/40 transition-all duration-300 w-full"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-muted/30 group-hover:bg-muted/50 transition-colors duration-300 mr-3 flex-shrink-0">
                <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-light tracking-wide mb-0.5 group-hover:text-foreground transition-colors duration-300 truncate">
                  {link.label}
                </h3>
                <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 truncate">
                  {link.handle}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer text */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={
            isMobile || isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={{ duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground leading-relaxed mb-8">
            For press inquiries, partnership proposals, or general questions, we'd love to hear from you.
          </p>
          <div className="space-y-2">
            <p className="text-sm tracking-widest text-muted-foreground">CUCFS</p>
            <p className="text-xs tracking-wider text-muted-foreground">
              Showcasing creative talent, in aid of charity.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
