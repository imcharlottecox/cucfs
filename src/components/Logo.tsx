import { useTheme } from '../contexts/ThemeContext'

interface LogoProps {
  className?: string
  onClick?: () => void
}

export function Logo({ className = '', onClick }: LogoProps) {
  const { theme } = useTheme()
  
  const logoSrc = theme === 'dark' ? '/logo-white.svg' : '/logo-black.svg'
  
  // Debug logging
  console.log('Current theme:', theme, 'Logo src:', logoSrc)
  
  return (
    <img
      src={logoSrc}
      alt="CUCFS Logo"
      className={`h-8 w-auto ${className}`}
      onClick={onClick}
      onError={(e) => {
        console.error('Failed to load logo:', logoSrc)
        console.error('Error:', e)
      }}
      onLoad={() => {
        console.log('Successfully loaded logo:', logoSrc)
      }}
    />
  )
}
