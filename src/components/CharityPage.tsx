import { motion } from 'framer-motion'
import { Heart, Target, Globe } from 'lucide-react'

export function CharityPage() {
  const charities = [
    {
      name: "Cambridge Curiosity and Imagination",
      logo: "/camcuriosity-logo.svg",
      description: "Cambridge Curiosity and Imagination (CCI) is a charity that works with children, young people, and communities to develop creative learning opportunities. They believe that creativity and imagination are fundamental to human flourishing and work to ensure that all children have access to high-quality creative experiences.",
      mission: "To develop creative learning opportunities that enable children and young people to explore, discover, and express their ideas and feelings through the arts.",
      impact: "CCI works with over 2,000 children and young people each year, providing creative learning experiences in schools, community settings, and through their innovative projects.",
      website: "https://cambridgecandi.org.uk/"
    },
    {
      name: "Sew Positive",
      logo: "/sew-logo.png",
      description: "Sew Positive is a community-focused charity that uses sewing and textile arts as a vehicle for positive change. They work with vulnerable and marginalized communities to build confidence, develop skills, and create opportunities through the power of creative making.",
      mission: "To empower individuals and communities through sewing and textile arts, building confidence, skills, and social connections.",
      impact: "Sew Positive has supported over 500 individuals through their programs, helping them develop new skills, build confidence, and create meaningful connections within their communities.",
      website: "https://sewpositive.org/"
    },
    {
      name: "Beat",
      logo: "/beat-logo.png",
      initial: "B",
      description: "Beat is the UK's leading eating disorder charity. They provide support, information, and campaigning for people affected by eating disorders, their families, and friends. Beat works to raise awareness and understanding of eating disorders while providing life-saving support services.",
      mission: "To end the pain and suffering caused by eating disorders by providing expert support, information, and campaigning for change.",
      impact: "Beat supports over 20,000 people each year through their helplines, online support groups, and information services, while campaigning for better treatment and support.",
      website: "https://www.beateatingdisorders.org.uk",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Pink Week",
      logo: "/pinkweek-logo.png",
      initial: "PW",
      description: "Pink Week is a student-led charity that raises awareness and funds for breast cancer research and support services. Founded by Cambridge students, Pink Week organizes events, campaigns, and fundraising activities across universities to support those affected by breast cancer.",
      mission: "To unite students across the UK in the fight against breast cancer through awareness, fundraising, and support for those affected.",
      impact: "Pink Week has raised over £1.5 million for breast cancer charities and has engaged thousands of students in awareness and fundraising activities across the UK.",
      website: "https://www.instagram.com/cambridgepinkweek/?hl=en-gb",
      color: "from-pink-600 to-purple-600"
    }
  ]

  return (
    <main className="pt-24 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl tracking-[-0.02em] font-light mb-6"
          >
            OUR CHARITIES
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-primary mx-auto mb-8"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            Cambridge University Charity Fashion Show was proud to support four incredible charities in 2025. 
            Each organization works tirelessly to create positive change in their communities, and we're honored 
            to contribute to their vital work through our annual fashion show.
          </motion.p>
        </div>
      </section>

      {/* Charities Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {charities.map((charity, index) => (
              <motion.div
                key={charity.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Charity Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 p-2">
                    <img 
                      src={charity.logo} 
                      alt={`${charity.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light mb-2">{charity.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{charity.mission}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {charity.description}
                </p>

                {/* Impact */}
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-sm">Impact</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{charity.impact}</p>
                </div>

                {/* Website Link */}
                <a
                  href={charity.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium mt-auto"
                >
                  <Globe className="w-4 h-4" />
                  Visit Website
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Heart className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-light">Support Our Charities</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8"
          >
            By attending our fashion show or making a donation, you're directly supporting these incredible 
            organizations and the vital work they do in our communities.
          </motion.p>
        </div>
      </section>
    </main>
  )
}
