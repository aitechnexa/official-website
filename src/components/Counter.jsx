import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useMediaQuery'

// Count-up triggered by GSAP ScrollTrigger. The final value is server-rendered; reduced-motion keeps it as-is.
export default function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const el = ref.current
    let ctx
    let cancelled = false
    ;(async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)
      const obj = { v: 0 }
      el.textContent = `0${suffix}`
      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          once: true,
          onEnter: () =>
            gsap.to(obj, {
              v: value,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => (el.textContent = `${Math.round(obj.v)}${suffix}`),
            }),
        })
      })
    })()
    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [value, suffix, reduced])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
