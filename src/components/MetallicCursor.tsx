import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function MetallicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect if device is mobile/touch
    const checkIsMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth < 768
      return isTouchDevice || isSmallScreen
    }

    const mobile = checkIsMobile()
    setIsMobile(mobile)

    // If mobile, don't initialize cursor
    if (mobile) {
      return
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add cursor styles to body
    document.body.classList.add('metallic-cursor')

    // Track mouse movement
    window.addEventListener('mousemove', updateMousePosition)

    // Track hover states on interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea, select, [class*="cursor-pointer"]')
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.body.classList.remove('metallic-cursor')
      window.removeEventListener('mousemove', updateMousePosition)
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.15,
        }}
        style={{
          background: isHovering 
            ? 'linear-gradient(45deg, #ffd700, #d4af37, #b8860b)'
            : 'linear-gradient(45deg, #c0c0c0, #e8e8e8, #a8a8a8)',
          boxShadow: isHovering
            ? '0 0 20px rgba(255, 215, 0, 0.8), inset 0 3px 8px rgba(255, 255, 255, 0.6), inset 0 -3px 8px rgba(0, 0, 0, 0.4)'
            : '0 0 10px rgba(192, 192, 192, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)'
        }}
      />
      
      {/* Trailing ring */}
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.2,
        }}
        style={{
          borderColor: isHovering 
            ? 'rgba(255, 215, 0, 0.8)'
            : 'rgba(192, 192, 192, 0.4)'
        }}
      />
    </>
  )
}
