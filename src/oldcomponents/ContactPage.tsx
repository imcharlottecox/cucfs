import { motion } from 'motion/react'
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin } from 'lucide-react'

export function ContactPage() {
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
            GET IN TOUCH
          </h1>
          <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate, partner, or join our creative community? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-light mb-8">Let's Connect</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-light mb-1">General Inquiries</p>
                    <p className="text-muted-foreground">hello@fashionsociety.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-light mb-1">Press & Media</p>
                    <p className="text-muted-foreground">press@fashionsociety.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-light mb-1">Partnerships</p>
                    <p className="text-muted-foreground">partnerships@fashionsociety.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-light mb-1">Phone</p>
                    <p className="text-muted-foreground">+44 20 7123 4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-light mb-1">Studio Address</p>
                    <p className="text-muted-foreground">
                      Fashion Society Studio<br />
                      12 Creative Quarter<br />
                      London, UK E1 6QL
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-light mb-6">Follow Our Journey</h3>
              <div className="flex space-x-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card border border-border/20 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-light mb-8">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-light mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-background border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300">
                  <option>General Inquiry</option>
                  <option>Partnership Opportunity</option>
                  <option>Press & Media</option>
                  <option>Volunteer Interest</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-light mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, idea, or how you'd like to get involved..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg tracking-wide transition-all duration-300 hover:bg-primary/90"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Office Hours & Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <h3 className="text-lg font-light mb-4">Office Hours</h3>
            <p className="text-muted-foreground text-sm">
              Monday - Friday<br />
              9:00 AM - 6:00 PM GMT
            </p>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4">Response Time</h3>
            <p className="text-muted-foreground text-sm">
              We typically respond<br />
              within 24-48 hours
            </p>
          </div>

          <div>
            <h3 className="text-lg font-light mb-4">Studio Visits</h3>
            <p className="text-muted-foreground text-sm">
              By appointment only<br />
              Please contact us to arrange
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}