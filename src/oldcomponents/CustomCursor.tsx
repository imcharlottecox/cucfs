// import { useEffect, useState } from 'react'
// import { motion } from 'motion/react'

// export function CustomCursor() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [isHovering, setIsHovering] = useState(false)

//   useEffect(() => {
//     const updateMousePosition = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }

//     const handleMouseEnter = () => setIsHovering(true)
//     const handleMouseLeave = () => setIsHovering(false)

//     // Add cursor styles to body
//     document.body.classList.add('metallic-cursor')

//     // Track mouse movement
//     window.addEventListener('mousemove', updateMousePosition)

//     // Track hover states on interactive elements
//     const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea, select')
    
//     interactiveElements.forEach(element => {
//       element.addEventListener('mouseenter', handleMouseEnter)
//       element.addEventListener('mouseleave', handleMouseLeave)
//     })

//     return () => {
//       document.body.classList.remove('metallic-cursor')
//       window.removeEventListener('mousemove', updateMousePosition)
      
//       interactiveElements.forEach(element => {
//         element.removeEventListener('mouseenter', handleMouseEnter)
//         element.removeEventListener('mouseleave', handleMouseLeave)
//       })
//     }
//   }, [])

//   return (
//     <>
//       {/* Main cursor dot */}
//       <motion.div
//         className="cursor-dot"
//         animate={{
//           x: mousePosition.x - 10,
//           y: mousePosition.y - 10,
//           scale: isHovering ? 1.5 : 1,
//         }}
//         transition={{
//           type: "tween",
//           ease: "backOut",
//           duration: 0.15,
//         }}
//         style={{
//           background: isHovering 
//             ? 'linear-gradient(45deg, #d4af37, #ffd700, #b8860b)'
//             : 'linear-gradient(45deg, #c0c0c0, #e8e8e8, #a8a8a8)',
//           boxShadow: isHovering
//             ? '0 0 15px rgba(212, 175, 55, 0.5), inset 0 2px 6px rgba(255, 255, 255, 0.4), inset 0 -2px 6px rgba(0, 0, 0, 0.3)'
//             : '0 0 10px rgba(192, 192, 192, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)'
//         }}
//       />
      
//       {/* Trailing ring */}
//       <motion.div
//         className="cursor-ring"
//         animate={{
//           x: mousePosition.x - 20,
//           y: mousePosition.y - 20,
//           scale: isHovering ? 1.5 : 1,
//         }}
//         transition={{
//           type: "tween",
//           ease: "backOut",
//           duration: 0.2,
//         }}
//         style={{
//           borderColor: isHovering 
//             ? 'rgba(212, 175, 55, 0.6)'
//             : 'rgba(192, 192, 192, 0.4)'
//         }}
//       />
//     </>
//   )
// }