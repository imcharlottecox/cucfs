import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface PurpleGlareProps {
  position?: 'top-left' | 'top-right' | 'top-middle-right' | 'bottom-left' | 'bottom-right'
  intensity?: number
}

export function PurpleGlare({ position = 'top-right', intensity = 0.6 }: PurpleGlareProps) {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkIsMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth < 768
      return isTouchDevice || isSmallScreen
    }
    setIsMobile(checkIsMobile())
  }, [])
  
  // Reduce animation intensity on mobile
  const adjustedIntensity = isMobile ? intensity * 0.5 : intensity
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'top-middle-right': 'top-1/2 right-0 transform -translate-y-1/2',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0'
  }

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} pointer-events-none z-10`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: adjustedIntensity, scale: 1 }}
      transition={{ duration: isMobile ? 1 : 2, ease: "easeOut" }}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Main glare circle */}
      <div 
        className="w-96 h-96 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(147, 51, 234, 0.2) 30%, rgba(147, 51, 234, 0.1) 60%, transparent 100%)',
          filter: 'blur(40px)'
        }}
      />
      
      {/* Secondary glare for more intensity */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, rgba(147, 51, 234, 0.3) 40%, transparent 70%)',
          filter: 'blur(20px)'
        }}
        animate={isMobile ? {} : { 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={isMobile ? {} : { 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Light streaks */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, transparent 50%)',
          filter: 'blur(10px)'
        }}
        animate={isMobile ? {} : { 
          rotate: [0, 180, 360],
          scale: [1, 1.5, 1]
        }}
        transition={isMobile ? {} : { 
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  )
}
