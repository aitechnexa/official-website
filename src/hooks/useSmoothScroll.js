import { useEffect } from 'react'
import { useReducedMotion } from './useMediaQuery'

// Lenis smooth scrolling synced with GSAP ScrollTrigger. Dynamic imports keep this out of prerender + initial bundle.
export function useSmoothScroll() {
  const reduced = useReducedMotion()
  useEffect(() => {
    if (reduced) return
    let lenis
    let raf
    let cancelled = false
    ;(async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)
      lenis = new Lenis({ duration: 1.15, smoothWheel: true })
      window.__lenis = lenis
      lenis.on('scroll', ScrollTrigger.update)
      raf = (time) => lenis.raf(time * 1000)
      gsap.ticker.add(raf)
      gsap.ticker.lagSmoothing(0)
      ScrollTrigger.refresh()
    })()
    return () => {
      cancelled = true
      if (lenis) {
        import('gsap').then(({ gsap }) => gsap.ticker.remove(raf))
        lenis.destroy()
        delete window.__lenis
      }
    }
  }, [reduced])
}

// Scroll to a section id (works with or without Lenis).
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72 })
  else el.scrollIntoView({ behavior: 'smooth' })
  history.replaceState(null, '', `#${id}`)
}
