import { motion } from 'motion/react'
import { Heart, Target, Users, Zap } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function CharityPage() {
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
            FASHION FOR CHANGE
          </h1>
          <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Using fashion as a force for positive impact, supporting causes that matter
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-8 mb-20"
        >
          <div className="text-center">
            <div className="text-4xl font-light mb-2">£125K+</div>
            <p className="text-sm text-muted-foreground">Raised to Date</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light mb-2">12</div>
            <p className="text-sm text-muted-foreground">Partner Charities</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light mb-2">3.2K</div>
            <p className="text-sm text-muted-foreground">Lives Impacted</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light mb-2">50+</div>
            <p className="text-sm text-muted-foreground">Events Hosted</p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-light mb-4">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe fashion can be a powerful catalyst for social change. Through 
                strategic partnerships and innovative fundraising approaches, we've developed 
                a model that seamlessly integrates charitable giving with high-fashion experiences.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Every show, every collection, and every collaboration is designed with purpose, 
                ensuring that beauty and benevolence walk hand in hand down our runways.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-light mb-1">Direct Impact</h3>
                  <p className="text-sm text-muted-foreground">100% of designated proceeds go directly to our partner organizations</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-light mb-1">Focused Giving</h3>
                  <p className="text-sm text-muted-foreground">We carefully select causes that align with our values and community needs</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-light mb-1">Community Driven</h3>
                  <p className="text-sm text-muted-foreground">Our audience helps choose which causes to support each season</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=750&fit=crop&crop=faces,center"
                alt="Charity Fashion Event"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Current Partner Charities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-light text-center mb-12">Current Partner Charities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Youth Empowerment Foundation",
                focus: "Education & Skills Development",
                impact: "Supporting 500+ young people annually",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
              },
              {
                name: "Sustainable Fashion Initiative",
                focus: "Environmental Conservation",
                impact: "Reducing fashion waste by 40%",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
              },
              {
                name: "Creative Arts Therapy",
                focus: "Mental Health Support",
                impact: "Helping 200+ individuals heal through art",
                image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop"
              }
            ].map((charity, index) => (
              <motion.div
                key={charity.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-card border border-border/20 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-4">
                  <ImageWithFallback
                    src={charity.image}
                    alt={charity.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-light mb-2">{charity.name}</h3>
                <p className="text-sm text-primary mb-2">{charity.focus}</p>
                <p className="text-sm text-muted-foreground">{charity.impact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Get Involved */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-light mb-8">Get Involved</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            There are many ways to support our charitable initiatives, from attending our fundraising 
            events to volunteering your time and skills.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full tracking-wide transition-all duration-300 hover:bg-primary/90"
            >
              Donate Now
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-border text-foreground rounded-full tracking-wide transition-all duration-300 hover:bg-muted/50"
            >
              Volunteer With Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}