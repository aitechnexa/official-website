import { useState } from 'react'
import { Check, Layers, FileText, Minus } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import TiltCard from '../components/TiltCard'
import { pricingAddOns, pricingPlans } from '../data/pricing'
import { scrollToId } from '../hooks/useSmoothScroll'

const icons = { FileText, Layers }
const PREVIEW = 7

function Plan({ plan }) {
  const [all, setAll] = useState(false)
  const Icon = icons[plan.icon]
  const features = all ? plan.features : plan.features.slice(0, PREVIEW)
  return (
    <TiltCard max={4} className={`h-full p-8 ${plan.popular ? 'border-cyan/40 shadow-glow-cyan' : ''}`}>
      {plan.popular && (
        <span className="absolute right-6 top-6 rounded-full bg-nexus-gradient px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-void">
          Most popular
        </span>
      )}
      <Icon className="mb-5 text-cyan" size={28} aria-hidden="true" />
      <h3 className="text-2xl font-semibold">{plan.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{plan.description}</p>
      <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted">{plan.duration}</p>
      <p className="gradient-text font-display text-5xl font-bold">{plan.price}</p>
      <ul className="mt-6 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm text-ink/90">
            <Check size={16} className="mt-0.5 shrink-0 text-cyan" aria-hidden="true" /> {f}
          </li>
        ))}
      </ul>
      {plan.features.length > PREVIEW && (
        <button type="button" onClick={() => setAll((a) => !a)} aria-expanded={all} className="mt-4 font-mono text-xs uppercase tracking-widest text-cyan hover:underline">
          {all ? 'Show less' : `+ ${plan.features.length - PREVIEW} more features`}
        </button>
      )}
      <ul className="mt-6 space-y-2 border-t border-white/10 pt-6">
        {plan.limitations.map((l) => (
          <li key={l} className="flex gap-3 text-xs text-muted">
            <Minus size={14} className="mt-0.5 shrink-0" aria-hidden="true" /> {l}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        onClick={(e) => { e.preventDefault(); scrollToId('contact') }}
        className={`${plan.popular ? 'btn-primary' : 'btn-ghost'} mt-8 w-full`}
      >
        Get a quote
      </a>
    </TiltCard>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section-pad defer-render relative">
      <div className="container-x">
        <SectionHeading
          id="pricing-title"
          eyebrow="Pricing"
          title="Transparent starting points,"
          highlight="tailored outcomes."
          text="Prices below are starting points in Malaysian Ringgit. Every project is scoped together after a free consultation."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {pricingPlans.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <Plan plan={p} />
            </Reveal>
          ))}
        </div>

        <h3 className="label-mono mb-6 mt-16">Add-ons &amp; support</h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pricingAddOns.map((a, i) => (
            <Reveal as="li" key={a.name} delay={(i % 3) * 0.06} className="glass glass-hover rounded-2xl p-6">
              <h4 className="font-semibold text-ink">{a.name}</h4>
              <p className="mt-1 text-xs text-muted">{a.description}</p>
              <p className="mt-4 font-display text-xl font-bold text-cyan">
                {a.price} {a.priceAnnual && <span className="text-sm font-normal text-muted">{a.priceAnnual}</span>}
              </p>
              <ul className="mt-3 space-y-1">
                {a.features.map((f) => <li key={f} className="text-xs text-muted">&bull; {f}</li>)}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
