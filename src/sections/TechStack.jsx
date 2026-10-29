import { lazy, Suspense, useEffect, useState } from 'react'
import Marquee from '../components/Marquee'
import SectionHeading from '../components/SectionHeading'
import { techStack } from '../data/techStack'
import { useDeviceTier } from '../hooks/useDeviceTier'
import { useOnScreen } from '../hooks/useOnScreen'

const TechOrbit = lazy(() => import('../three/TechOrbit'))

export default function TechStack() {
  const { isClient, tier } = useDeviceTier()
  const [ref, onScreen] = useOnScreen('200px')
  const [seen, setSeen] = useState(false)
  const use3d = isClient && tier === 'high'

  useEffect(() => {
    if (onScreen && use3d) setSeen(true)
  }, [onScreen, use3d])

  const half = Math.ceil(techStack.length / 2)

  return (
    <section id="tech" ref={ref} aria-labelledby="tech-title" className="section-pad defer-render relative overflow-hidden">
      <div className="container-x">
        <SectionHeading
          id="tech-title"
          eyebrow="Tech stack"
          title="The tools behind"
          highlight="the intelligence."
          text="A modern, battle-tested toolbox across frontend, backend, data, AI and cloud."
        />
        <ul className="sr-only">
          {techStack.map((t) => <li key={t.name}>{t.name}</li>)}
        </ul>

        {use3d ? (
          <div className="relative mx-auto h-[420px] w-full max-w-3xl sm:h-[560px]" aria-hidden="true">
            {seen && (
              <Suspense fallback={null}>
                <TechOrbit active={onScreen} />
              </Suspense>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <Marquee items={techStack.slice(0, half)} />
            <Marquee items={techStack.slice(half)} reverse />
          </div>
        )}
      </div>
    </section>
  )
}
