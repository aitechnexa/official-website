import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import { useIsClient } from '../hooks/useIsClient'
import { company } from '../data/company'

const KEY = 'nexa-preloaded'

// Short (<2s) intro. Server-rendered (so it never hides content from crawlers; index.html's <noscript> hides it),
// shown once per session, skipped for reduced-motion.
export default function Preloader() {
  const isClient = useIsClient()
  const [done, setDone] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isClient) return
    const skip = sessionStorage.getItem(KEY) || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (skip) return setDone(true)
    const start = performance.now()
    const duration = 1500
    let raf
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      setProgress(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else {
        sessionStorage.setItem(KEY, '1')
        setTimeout(() => setDone(true), 150)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isClient])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          role="status"
          aria-label="Loading"
        >
          <Logo className="h-20 w-20" draw />
          <p className="mt-6 font-display text-xl font-semibold tracking-wide text-ink">{company.name}</p>
          <div className="mt-6 h-px w-56 overflow-hidden bg-white/10">
            <div className="h-full bg-nexus-gradient" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-3 font-mono text-xs text-muted">{String(progress).padStart(3, '0')}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
