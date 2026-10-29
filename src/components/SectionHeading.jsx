import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, highlight, text, align = 'left', id }) {
  return (
    <Reveal className={`mb-14 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="label-mono mb-4 flex items-center gap-3" style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
        <span className="h-px w-8 bg-cyan" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-4xl font-bold leading-[1.05] text-ink sm:text-5xl md:text-6xl">
        {title} {highlight && <span className="gradient-text inline-block">{highlight}</span>}
      </h2>
      {text && <p className="mt-6 text-lg leading-relaxed text-muted">{text}</p>}
    </Reveal>
  )
}
