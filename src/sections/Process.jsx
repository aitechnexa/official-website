import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { processSteps } from '../data/process'
import { useReducedMotion } from '../hooks/useMediaQuery'

export default function Process() {
  const wrap = useRef(null)
  const line = useRef(null)
  const reduced = useReducedMotion()

  // GSAP ScrollTrigger scrubs the timeline line as the section scrolls through the viewport.
  useEffect(() => {
    if (reduced) return
    let ctx
    let cancelled = false
    ;(async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo(
          line.current,
          { scaleY: 0 },
          { scaleY: 1, ease: 'none', scrollTrigger: { trigger: wrap.current, start: 'top 70%', end: 'bottom 60%', scrub: 0.6 } },
        )
      })
    })()
    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [reduced])

  return (
    <section id="process" aria-labelledby="process-title" className="section-pad defer-render relative">
      <div className="container-x">
        <SectionHeading id="process-title" eyebrow="How we work" title="From first idea to" highlight="lasting support." align="center" />
        <ol ref={wrap} className="relative mx-auto max-w-4xl">
          <div aria-hidden="true" className="absolute bottom-0 left-5 top-0 w-px bg-white/10 md:left-1/2">
            <div ref={line} className="h-full w-full origin-top bg-gradient-to-b from-cyan via-violet to-magenta shadow-glow-cyan" />
          </div>
          {processSteps.map((s, i) => {
            const left = i % 2 === 0
            return (
              <li key={s.id} className="relative mb-12 pl-16 last:mb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
                <span aria-hidden="true" className="absolute left-[12px] top-7 z-10 md:left-1/2 md:-translate-x-1/2">
                  <motion.span
                    initial={reduced ? false : { scale: 0.4, backgroundColor: '#0B0E17' }}
                    whileInView={{ scale: 1, backgroundColor: '#22D3EE' }}
                    viewport={{ once: true, margin: '-40% 0px -40% 0px' }}
                    transition={{ duration: 0.4 }}
                    className="block h-3.5 w-3.5 rounded-full border-2 border-cyan shadow-glow-cyan"
                  />
                </span>
                <Reveal y={24} className={`glass glass-hover rounded-2xl p-7 ${left ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}`}>
                  <p className="label-mono mb-2">Step 0{i + 1}</p>
                  <h3 className="mb-2 text-2xl font-semibold">{s.title}</h3>
                  <p className="text-muted">{s.text}</p>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
