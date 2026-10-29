import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Modal from '../components/Modal'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { projectFilters, projects } from '../data/projects'

const statusStyle = {
  Live: 'border-emerald-400/40 text-emerald-300',
  Prototype: 'border-violet/50 text-violet',
  'In Development': 'border-cyan/40 text-cyan',
  Placeholder: 'border-white/20 text-muted',
}

function Detail({ project, titleId }) {
  return (
    <div>
      <img src={project.image} alt={project.alt} width="1200" height="800" className="aspect-[16/8] w-full object-cover" />
      <div className="p-6 sm:p-10">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="label-mono">{project.category}</span>
          <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${statusStyle[project.status]}`}>{project.status}</span>
        </div>
        <h3 id={titleId} className="mb-8 text-3xl font-bold sm:text-4xl">{project.title}</h3>
        <div className="grid gap-6 sm:grid-cols-3">
          {[['Problem', project.problem], ['Solution', project.solution], ['Result', project.result]].map(([h, t]) => (
            <div key={h} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h4 className="label-mono mb-3">{h}</h4>
              <p className="text-sm leading-relaxed text-muted">{t}</p>
            </div>
          ))}
        </div>
        <h4 className="label-mono mb-3 mt-8">Tech stack</h4>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => <li key={t} className="tag">{t}</li>)}
        </ul>
        {project.link !== '#' && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
            Visit project <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const titleId = useId()
  const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="section-pad defer-render relative">
      <div className="container-x">
        <SectionHeading
          id="portfolio-title"
          eyebrow="Selected work"
          title="Products we've"
          highlight="launched & are building."
          text="Click any project to see the problem, the solution and the outcome."
        />

        <Reveal>
          <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
            {projectFilters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-5 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                  filter === f ? 'border-cyan bg-cyan/10 text-cyan shadow-glow-cyan' : 'border-white/15 text-muted hover:border-white/40 hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  aria-haspopup="dialog"
                  className="glass glass-hover group block h-full w-full overflow-hidden rounded-2xl text-left"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.alt}
                      width="1200"
                      height="800"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                    <span className={`absolute left-4 top-4 rounded-full border bg-void/70 px-2.5 py-0.5 font-mono text-[11px] backdrop-blur ${statusStyle[p.status]}`}>
                      {p.status}
                    </span>
                    <span className="absolute right-4 top-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-cyan text-void opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="label-mono mb-2">{p.category}</p>
                    <h3 className="mb-2 text-2xl font-semibold">{p.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-muted">{p.summary}</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 4).map((t) => <li key={t} className="tag">{t}</li>)}
                      {p.tech.length > 4 && <li className="tag">+{p.tech.length - 4}</li>}
                    </ul>
                  </div>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} labelledBy={titleId}>
        {selected && <Detail project={selected} titleId={titleId} />}
      </Modal>
    </section>
  )
}
