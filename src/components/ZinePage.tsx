import { useState, useEffect } from 'react'
import { Lock } from 'lucide-react'

interface Interview {
  slug: string
  title: string
  designer: string
  excerpt: string
  fullContent: string
}

const interviews: Interview[] = [
  {
    slug: 'example-designer',
    title: 'Reimagining Fabric: Beyond the Runway',
    designer: 'Example Designer',
    excerpt:
      'In this interview, Example Designer talks about storytelling through texture, community, and what it means to design for CUCFS...',
    fullContent:
      'Full interview content goes here.',
  },
]

function useZinePassword() {
  const [passwordInput, setPasswordInput] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.sessionStorage.getItem('zineUnlocked')
    if (stored === 'true') {
      setUnlocked(true)
    }
  }, [])

  const checkPassword = () => {
    const envPassword = import.meta.env.VITE_ZINE_PASSWORD as string | undefined

    // If no password configured, keep locked and surface a clear error
    if (!envPassword) {
      console.warn('VITE_ZINE_PASSWORD is not set; Zine interviews remain locked.')
      setError('Zine password is not configured. Please contact the site admin.')
      return
    }

    if (passwordInput === envPassword) {
      setUnlocked(true)
      setError('')
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('zineUnlocked', 'true')
      }
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  const lock = () => {
    setUnlocked(false)
    setPasswordInput('')
    setError('')
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem('zineUnlocked')
    }
  }

  return { passwordInput, setPasswordInput, unlocked, checkPassword, lock, error }
}

export function ZinePage() {
  const [expandedSlugs, setExpandedSlugs] = useState<Record<string, boolean>>({})
  const { passwordInput, setPasswordInput, unlocked, checkPassword, lock, error } =
    useZinePassword()

  return (
    <div className="pt-24">
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12">
            <h1 className="text-5xl md:text-6xl tracking-[-0.02em] font-light mb-6">
              Zine
            </h1>
            <div className="w-24 h-px bg-foreground mb-6" />
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Here you can explore the full, unedited
              interviews with our designers and collaborators.
            </p>
          </header>

          {/* Locked state: title, description, and padlocked CTA only */}
          {!unlocked ? (
            <section className="mt-8 max-w-md space-y-4">
              {/* <p className="text-sm md:text-base text-muted-foreground">
                Enter the zine access password to unlock all full designer interviews.
              </p> */}
            
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="flex-1 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-background text-foreground text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Password"
                />
              </div>
              <button
                type="button"
                onClick={checkPassword}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background text-sm md:text-base hover:bg-foreground/90 transition-colors"
              >
                <Lock className="w-4 h-4" />
                <span>Enter password to unlock zine interviews</span>
              </button>
              {error && (
                <p className="text-xs text-destructive mt-1">
                  {error}
                </p>
              )}
            </section>
          ) : (
            <>
              {/* Access info + lock button */}
              <div className="flex items-center justify-between gap-4 mb-8">
                <p className="text-xs md:text-sm text-muted-foreground">
                  Zine interviews unlocked for this session.
                </p>
                <button
                  type="button"
                  onClick={lock}
                  className="text-xs underline text-muted-foreground hover:text-foreground"
                >
                  Lock access
                </button>
              </div>

              {/* Interview list (visible only when unlocked) */}
              <div className="space-y-6">
                {interviews.map((interview) => {
                  const expanded = !!expandedSlugs[interview.slug]
                  return (
                    <div
                      key={interview.slug}
                      className="w-full text-left border border-border/30 hover:border-border/60 rounded-lg p-4 md:p-6 transition-colors"
                    >
                      <h2 className="text-xl md:text-2xl font-light tracking-[-0.01em] mb-2">
                        {interview.title}
                      </h2>
                      <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">
                        {interview.designer}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground mb-3">
                        {interview.excerpt}
                      </p>
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedSlugs((prev) => ({
                            ...prev,
                            [interview.slug]: !prev[interview.slug],
                          }))
                        }
                        className="mt-2 text-xs md:text-sm underline text-foreground"
                      >
                        {expanded ? 'Hide full article' : 'Read full article'}
                      </button>
                      {expanded && (
                        <article className="mt-4 prose prose-invert max-w-none text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                          {interview.fullContent}
                        </article>
                      )}
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}


