import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { techStack } from '../data/techStack'
import TechIcon from '../components/TechIcon'
import { getThemeColors } from './theme'

const RADIUS = 3.8

function Orbit({ active, portal }) {
  const group = useRef()
  const speed = useRef(0.12)
  const pointer = useRef(0)

  const points = useMemo(
    () =>
      techStack.map((_, i) => {
        // Fibonacci sphere distribution
        const y = 1 - (i / (techStack.length - 1)) * 2
        const r = Math.sqrt(1 - y * y)
        const theta = Math.PI * (3 - Math.sqrt(5)) * i
        return new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(RADIUS)
      }),
    [],
  )

  useFrame((state, delta) => {
    if (!active) return
    pointer.current = state.pointer.x
    const target = 0.12 + pointer.current * 0.25
    speed.current += (target - speed.current) * Math.min(1, delta * 2)
    group.current.rotation.y += delta * speed.current
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
  })

  const c = getThemeColors()
  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[RADIUS * 0.98, 2]} />
        <meshBasicMaterial color={c.violet} wireframe transparent opacity={0.07} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.35, 24, 24]} />
        <meshBasicMaterial color={c.cyan} transparent opacity={0.35} />
      </mesh>
      {points.map((p, i) => (
        <Html key={techStack[i].name} portal={portal} position={p} center distanceFactor={13} zIndexRange={[20, 0]}>
          <div className="flex select-none flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-surface/80 px-3 py-2 backdrop-blur-md">
            <TechIcon name={techStack[i].icon} color={techStack[i].color} className="h-7 w-7" />
            <span className="whitespace-nowrap font-mono text-[10px] text-muted">{techStack[i].name}</span>
          </div>
        </Html>
      ))}
    </group>
  )
}

// Standalone canvas for the Tech Stack section. Lazy-loaded; `active` pauses it when off-screen.
export default function TechOrbit({ active = true }) {
  // Stable portal target for <Html>: drei otherwise switches its container after mount (events.connected),
  // which unmounts/remounts its React root mid-render and logs a warning.
  const containerRef = useRef(null)
  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 9], fov: 50 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        frameloop={active ? 'always' : 'never'}
      >
        <Orbit active={active} portal={containerRef} />
      </Canvas>
    </div>
  )
}
