import { lazy, Suspense, useEffect, useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import LiteNetwork from '../components/LiteNetwork'
import MagneticButton from '../components/MagneticButton'
import { company } from '../data/company'
import { useDeviceTier } from '../hooks/useDeviceTier'
import { useOnScreen } from '../hooks/useOnScreen'
import { scrollToId } from '../hooks/useSmoothScroll'

// 3D chunk is only requested on capable client devices, and only after the first paint / idle time.
const Scene = lazy(() => import('../three/Scene'))

export default function Hero() {
  const { isClient, tier, particles } = useDeviceTier()
  const [ref, onScreen] = useOnScreen('0px')
  const [ready, setReady] = useState(false)
  const [mount3d, setMount3d] = useState(false)

  useEffect(() => {
    if (!isClient || tier !== 'high') return
    const start = () => setMount3d(true)
    const id = 'requestIdleCallback' in window ? window.requestIdleCallback(start, { timeout: 1200 }) : setTimeout(start, 400)
    return () => ('cancelIdleCallback' in window ? window.cancelIdleCallback(id) : clearTimeout(id))
  }, [isClient, tier])

  const go = (e, id) => {
    e.preventDefault()
    scrollToId(id)
  }

  return (
    <section id="home" ref={ref} aria-labelledby="hero-title" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-32 sm:px-8">
      <div aria-hidden="true" className="absolute inset-0 -z-0">
        <div className={`transition-opacity duration-1000 ${ready ? 'opacity-0' : 'opacity-100'}`}>
          <LiteNetwork />
        </div>
        {mount3d && (
          <Suspense fallback={null}>
            <div className={`absolute inset-0 transition-opacity duration-1000 ${ready ? 'opacity-100' : 'opacity-0'}`}>
              <Scene count={particles} active={onScreen} onReady={() => setReady(true)} />
            </div>
          </Suspense>
        )}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#05060a_85%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent" />
      </div>

      <div className="container-x relative z-10">
        <p className="label-mono fade-up mb-6 flex items-center gap-3" style={{ animationDelay: '0.1s' }}>
          <span className="h-px w-10 bg-cyan" aria-hidden="true" />
          Malaysia &middot; AI &amp; Software Studio
        </p>
        <h1 id="hero-title" className="font-display text-[clamp(2.6rem,8vw,6.5rem)] font-bold leading-[0.98] tracking-tighter">
          {company.headline.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.12em]">
              <span className={`reveal-line block ${i === 1 ? 'gradient-text' : 'text-ink'}`} style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>
        <p className="fade-up mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: '0.7s' }}>
          {company.valueProp}
        </p>
        <div className="fade-up mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.85s' }}>
          <MagneticButton>
            <a href="#portfolio" onClick={(e) => go(e, 'portfolio')} className="btn-primary">
              View Our Work <ArrowRight size={16} />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="#contact" onClick={(e) => go(e, 'contact')} className="btn-ghost">
              <Mail size={16} /> Contact Us
            </a>
          </MagneticButton>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => go(e, 'about')}
        aria-label="Scroll to About section"
        className="fade-up absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted transition hover:text-cyan sm:flex"
        style={{ animationDelay: '1.2s' }}
      >
        Scroll
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/30 pt-1.5">
          <span className="h-1.5 w-1 animate-scroll-dot rounded-full bg-cyan" />
        </span>
      </a>
    </section>
  )
}
