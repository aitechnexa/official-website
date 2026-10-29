import { BarChart3, Brain, Cloud, Code2, Smartphone, Workflow } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import TiltCard from '../components/TiltCard'
import { services } from '../data/services'

const icons = { Brain, Code2, Smartphone, Cloud, Workflow, BarChart3 }
const accents = ['text-cyan', 'text-violet', 'text-magenta']

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-pad defer-render relative">
      <div className="container-x">
        <SectionHeading
          id="services-title"
          eyebrow="What we do"
          title="Six disciplines,"
          highlight="one connected team."
          text="From the first model to the final deployment, we cover the full stack of intelligent software."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <Reveal as="li" key={s.id} delay={(i % 3) * 0.08}>
                <TiltCard className="h-full p-7">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-cyan/50 group-hover:shadow-glow-cyan">
                    <Icon className={`${accents[i % 3]} transition-transform duration-500 group-hover:scale-110`} size={26} aria-hidden="true" />
                  </div>
                  <p className="mb-2 font-mono text-[11px] text-muted">0{i + 1}</p>
                  <h3 className="mb-3 text-2xl font-semibold text-ink">{s.title}</h3>
                  <p className="leading-relaxed text-muted">{s.description}</p>
                </TiltCard>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
