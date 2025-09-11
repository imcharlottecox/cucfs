import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Instagram, Linkedin, Facebook, Mail } from 'lucide-react'

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    { 
      icon: Instagram, 
      label: "Instagram", 
      handle: "@fashionsociety",
      url: "https://instagram.com/fashionsociety" 
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      handle: "Fashion Society",
      url: "https://linkedin.com/company/fashion-society" 
    },
    { 
      icon: Facebook, 
      label: "Facebook", 
      handle: "Fashion Society Official",
      url: "https://facebook.com/fashionsociety" 
    },
    { 
      icon: Mail, 
      label: "Email", 
      handle: "hello@fashionsociety.com",
      url: "mailto:hello@fashionsociety.com" 
    }
  ]

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl tracking-[-0.02em] font-light mb-8">
            Connect
          </h2>
          <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join our community of creatives, collaborators, and changemakers. 
            Let's create something beautiful together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex items-center p-8 border border-border/20 hover:border-border/40 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-muted/30 group-hover:bg-muted/50 transition-colors duration-300 mr-6">
                <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-light tracking-wide mb-2 group-hover:text-foreground transition-colors duration-300">
                  {link.label}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {link.handle}
                </p>
              </div>
            </motion.a>
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
              FASHION SOCIETY
            </p>
            <p className="text-xs tracking-wider text-muted-foreground">
              Where creativity meets purpose
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}