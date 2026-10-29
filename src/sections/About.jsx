import { Eye, Target } from 'lucide-react'
import Counter from '../components/Counter'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { about } from '../data/about'
import { stats } from '../data/stats'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad defer-render relative">
      <div className="container-x">
        <SectionHeading id="about-title" eyebrow={about.eyebrow} title="A young studio with" highlight="a deep-space ambition." />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            {about.story.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-lg leading-relaxed text-muted first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-cyan">
                  {p}
                </p>
              </Reveal>
            ))}
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              {[
                { Icon: Target, title: 'Mission', text: about.mission },
                { Icon: Eye, title: 'Vision', text: about.vision },
              ].map(({ Icon, title, text }, i) => (
                <Reveal key={title} delay={0.1 * i} className="glass glass-hover rounded-2xl p-6">
                  <Icon className="mb-4 text-violet" size={24} aria-hidden="true" />
                  <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <dl className="grid grid-cols-2 content-start gap-4 lg:col-span-2">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="glass rounded-2xl p-6">
                <dd className="gradient-text font-display text-5xl font-bold">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted">{s.label}</dt>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
