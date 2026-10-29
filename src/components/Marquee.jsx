import TechIcon from './TechIcon'

// Lightweight CSS marquee: SSR-safe fallback for the 3D tech orbit. Pauses on hover.
export default function Marquee({ items, reverse = false }) {
  const row = [...items, ...items]
  return (
    <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]" aria-hidden="true">
      <div className={`flex w-max animate-marquee gap-4 py-2 group-hover:[animation-play-state:paused] ${reverse ? '[animation-direction:reverse]' : ''}`}>
        {row.map((t, i) => (
          <div key={`${t.name}-${i}`} className="glass flex items-center gap-3 rounded-full px-5 py-3">
            <TechIcon name={t.icon} color={t.color} className="h-6 w-6" />
            <span className="whitespace-nowrap font-mono text-xs text-ink">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
