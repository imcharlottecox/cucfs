// import { motion } from 'framer-motion'
import { ContactSection } from './ContactSection'
export function ContactPage() {
  return (
    <main className="pt-24">
    <ContactSection />
  </main>
)
}
//     <div className="pt-24">
//       <section className="py-20 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-6xl md:text-7xl tracking-[-0.02em] font-light mb-8">
//               Contact
//             </h1>
//             <div className="w-24 h-px bg-foreground mx-auto mb-8" />
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//               Get in touch with us to learn more about CUCFS and how you can get involved.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-20 px-6">
//         <div className="max-w-4xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-light mb-6">Get In Touch</h2>
//               <p className="text-muted-foreground mb-8">
//                 We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//               </p>
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="font-medium mb-2">Email</h3>
//                   <a 
//                     href="mailto:cucfs@cambridgesu.co.uk" 
//                     className="text-primary hover:underline"
//                   >
//                     cucfs@cambridgesu.co.uk
//                   </a>
//                 </div>
//                 <div>
//                   <h3 className="font-medium mb-2">Social Media</h3>
//                   <div className="space-y-2">
//                     <a 
//                       href="https://instagram.com/cucfs" 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="block text-primary hover:underline"
//                     >
//                       @cucfs on Instagram
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h2 className="text-3xl font-light mb-6">Join Our Community</h2>
//               <p className="text-muted-foreground mb-8">
//                 Follow us on social media to stay updated on our latest shows, events, and initiatives.
//               </p>
//               <div className="space-y-4">
//                 <a
//                   href="https://instagram.com/cucfs"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-md transition-all duration-300"
//                 >
//                   Follow on Instagram
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }