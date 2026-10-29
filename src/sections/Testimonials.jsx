import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play, Quote, Star } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { testimonials } from '../data/testimonials'
import { useReducedMotion } from '../hooks/useMediaQuery'

const INTERVAL = 6000

export default function Testimonials() {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const [userPaused, setUserPaused] = useState(false)
  const [hover, setHover] = useState(false)
  const playing = !reduced && !userPaused && !hover
  const n = testimonials.length

  const go = (next, d) => {
    setDir(d ?? (next > index ? 1 : -1))
    setIndex((next + n) % n)
  }

  useEffect(() => {
    if (!playing) return
    const t = setTimeout(() => {
      setDir(1)
      setIndex((i) => (i + 1) % n)
    }, INTERVAL)
    return () => clearTimeout(t)
  }, [playing, index, n])

  const t = testimonials[index]

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section-pad defer-render relative">
      <div className="container-x">
        <SectionHeading id="testimonials-title" eyebrow="Client voices" title="Trusted by teams who" highlight="shipped with us." align="center" />
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          className="mx-auto max-w-3xl"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
        >
          <div className="relative min-h-[320px] sm:min-h-[280px]" aria-live={playing ? 'off' : 'polite'}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={t.id}
                custom={dir}
                initial={reduced ? false : { opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${n}`}
                className="glass rounded-3xl p-8 sm:p-12"
              >
                <Quote className="mb-5 text-violet" size={32} aria-hidden="true" />
                <div className="mb-4 flex gap-1" role="img" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={16} className="fill-magenta text-magenta" />)}
                </div>
                <blockquote className="text-xl leading-relaxed text-ink sm:text-2xl">&ldquo;{t.feedback}&rdquo;</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-nexus-gradient font-display text-lg font-bold text-void" aria-hidden="true">
                    {t.name[0]}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block font-mono text-xs text-muted">{t.position}, {t.company}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <button type="button" aria-label="Previous testimonial" onClick={() => go(index - 1, -1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-cyan hover:text-cyan">
                <ChevronLeft size={18} />
              </button>
              <button type="button" aria-label="Next testimonial" onClick={() => go(index + 1, 1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-cyan hover:text-cyan">
                <ChevronRight size={18} />
              </button>
              {!reduced && (
                <button
                  type="button"
                  aria-label={userPaused ? 'Start autoplay' : 'Pause autoplay'}
                  onClick={() => setUserPaused((p) => !p)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-cyan hover:text-cyan"
                >
                  {userPaused ? <Play size={16} /> : <Pause size={16} />}
                </button>
              )}
            </div>
            <div className="flex gap-1">
              {testimonials.map((x, i) => (
                <button key={x.id} type="button" aria-label={`Go to testimonial ${i + 1}`} aria-current={i === index} onClick={() => go(i)} className="grid h-11 w-6 place-items-center">
                  <span className={`block h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-cyan' : 'w-1.5 bg-white/25'}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
