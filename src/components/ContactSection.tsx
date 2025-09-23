import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { PurpleGlare } from './PurpleGlare'
import { Instagram, Linkedin, Facebook, Mail } from 'lucide-react'

interface ContactSectionProps {
  onSectionClick?: (sectionId: string) => void
}

export function ContactSection({ onSectionClick }: ContactSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Suppress unused variable warning
  console.log(onSectionClick)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.12, 0.15, 0.2, 0.21, 0.23, 1], [0.1, 0.1, 0.2, 0.3, 0.5, 0.8, 1,1])

  const socialLinks = [
    { 
      icon: Instagram, 
      label: "Instagram", 
      handle: "@CUCFS",
      url: "https://instagram.com/CUCFS" 
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      handle: "CUCFS",
      url: "https://www.linkedin.com/company/cucfs/?originalSubdomain=uk" 
    },
    { 
      icon: Facebook, 
      label: "Facebook", 
      handle: "CUCFS Official",
      url: "https://facebook.com/CUCFS" 
    },
    { 
      icon: Mail, 
      label: "Email", 
      handle: "cucfs@cambridgesu.co.uk",
      url: "mailto:cucfs@cambridgesu.co.uk" 
    }
  ]

  return (
    <section id="contact" className="py-16 px-6 relative" ref={ref}>
      <PurpleGlare position="top-middle-right" intensity={0.4} />
      <PurpleGlare position="bottom-left" intensity={0.3} />
      <motion.div 
        className="max-w-4xl mx-auto"
        style={{ 
          opacity: textOpacity
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl tracking-[-0.02em] font-light mb-4">
            Connect
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mb-4" />
          {/* <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Join our community of creatives, collaborators, and changemakers.
          </p> */}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground leading-relaxed mb-8">
            For press inquiries, partnership proposals, or general questions, 
            we'd love to hear from you.
          </p>
          <div className="space-y-2">
            <p className="text-sm tracking-widest text-muted-foreground">
              CUCFS
            </p>
            <p className="text-xs tracking-wider text-muted-foreground">
              Showcasing creative talent, in aid of charity.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}