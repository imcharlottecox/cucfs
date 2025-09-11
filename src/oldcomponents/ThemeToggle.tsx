import { motion } from 'motion/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full border border-border/20 bg-muted/50 backdrop-blur-sm transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Toggle Track */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          backgroundColor: isDark ? 'rgba(112, 26, 117, 0.3)' : 'rgba(251, 191, 36, 0.3)'
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Toggle Slider */}
      <motion.div
        className="absolute top-0.5 w-6 h-6 bg-background rounded-full border border-border/30 shadow-sm flex items-center justify-center"
        animate={{
          x: isDark ? 28 : 2,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {/* Icon Container */}
        <div className="relative w-4 h-4">
          <motion.div
            initial={false}
            animate={{
              scale: !isDark ? 1 : 0,
              rotate: !isDark ? 0 : 180,
              opacity: !isDark ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="w-3 h-3 text-amber-500" />
          </motion.div>
          
          <motion.div
            initial={false}
            animate={{
              scale: isDark ? 1 : 0,
              rotate: isDark ? 0 : -180,
              opacity: isDark ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="w-3 h-3 text-purple-400" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-sm"
        animate={{
          backgroundColor: isDark ? 'rgba(112, 26, 117, 0.2)' : 'rgba(251, 191, 36, 0.2)',
          opacity: 0.5
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}