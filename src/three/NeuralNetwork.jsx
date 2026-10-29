import { useEffect, useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { getThemeColors } from './theme'

// SCENE TUNING: change these to restyle the hero network.
const SPREAD = { x: 14, y: 8, z: 7 } // volume the nodes live in
const LINK_DISTANCE = 2.1 // max distance for a connecting line
const MAX_LINKS = 1600 // hard cap on line segments
const NODE_SIZE = 0.045
const MOUSE_RADIUS = 2.6

function seeded(seed) {
  let s = seed
  return () => ((s = (s * 16807) % 2147483647) / 2147483647)
}

export default function NeuralNetwork({ count = 900 }) {
  const mesh = useRef()
  const lines = useRef()
  const group = useRef()
  const pointer = useRef({ x: 0, y: 0 })
  const { viewport } = useThree()

  const data = useMemo(() => {
    const rand = seeded(1337)
    const base = new Float32Array(count * 3)
    const phase = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      base[i * 3] = (rand() - 0.5) * SPREAD.x * 2
      base[i * 3 + 1] = (rand() - 0.5) * SPREAD.y * 2
      base[i * 3 + 2] = (rand() - 0.5) * SPREAD.z * 2
      phase[i * 3] = rand() * Math.PI * 2
      phase[i * 3 + 1] = rand() * Math.PI * 2
      phase[i * 3 + 2] = rand() * Math.PI * 2
    }
    // Precompute neighbour pairs once; drift is small so they stay valid.
    const pairs = []
    const d2 = LINK_DISTANCE * LINK_DISTANCE
    outer: for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = base[i * 3] - base[j * 3]
        const dy = base[i * 3 + 1] - base[j * 3 + 1]
        const dz = base[i * 3 + 2] - base[j * 3 + 2]
        if (dx * dx + dy * dy + dz * dz < d2) {
          pairs.push(i, j)
          if (pairs.length / 2 >= MAX_LINKS) break outer
        }
      }
    }
    return { base, phase, pairs: Uint32Array.from(pairs), pos: new Float32Array(count * 3) }
  }, [count])

  const linePositions = useMemo(() => new Float32Array(data.pairs.length * 3), [data])
  const dummy = useMemo(() => new THREE.Object3D(), [])

  useEffect(() => {
    const c = getThemeColors()
    const palette = [new THREE.Color(c.cyan), new THREE.Color(c.violet), new THREE.Color(c.magenta)]
    const tmp = new THREE.Color()
    for (let i = 0; i < count; i++) {
      const t = (data.base[i * 3] / (SPREAD.x * 2) + 0.5) * 2
      const k = Math.min(1.999, Math.max(0, t))
      const a = Math.floor(k)
      tmp.copy(palette[a]).lerp(palette[a + 1], k - a)
      mesh.current.setColorAt(i, tmp)
    }
    mesh.current.instanceColor.needsUpdate = true
  }, [count, data])

  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    const { base, phase, pos, pairs } = data
    const px = pointer.current.x * viewport.width * 0.5
    const py = pointer.current.y * viewport.height * 0.5

    group.current.rotation.y += (pointer.current.x * 0.25 - group.current.rotation.y) * Math.min(1, delta * 2) + delta * 0.01
    group.current.rotation.x += (-pointer.current.y * 0.12 - group.current.rotation.x) * Math.min(1, delta * 2)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      let x = base[i3] + Math.sin(t * 0.25 + phase[i3]) * 0.35
      let y = base[i3 + 1] + Math.cos(t * 0.22 + phase[i3 + 1]) * 0.35
      const z = base[i3 + 2] + Math.sin(t * 0.18 + phase[i3 + 2]) * 0.35
      const dx = x - px
      const dy = y - py
      const d = Math.hypot(dx, dy)
      if (d < MOUSE_RADIUS) {
        const push = (1 - d / MOUSE_RADIUS) ** 2 * 0.9
        x += (dx / (d || 1)) * push
        y += (dy / (d || 1)) * push
      }
      pos[i3] = x
      pos[i3 + 1] = y
      pos[i3 + 2] = z
      dummy.position.set(x, y, z)
      const s = 1 + Math.sin(t * 1.2 + phase[i3]) * 0.25
      dummy.scale.setScalar(s)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    }
    mesh.current.instanceMatrix.needsUpdate = true

    for (let k = 0; k < pairs.length; k++) {
      const n = pairs[k] * 3
      linePositions[k * 3] = pos[n]
      linePositions[k * 3 + 1] = pos[n + 1]
      linePositions[k * 3 + 2] = pos[n + 2]
    }
    lines.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <group ref={group}>
      <instancedMesh ref={mesh} args={[null, null, count]} frustumCulled={false}>
        <sphereGeometry args={[NODE_SIZE, 8, 8]} />
        <meshBasicMaterial toneMapped={false} transparent opacity={0.95} blending={THREE.AdditiveBlending} depthWrite={false} />
      </instancedMesh>
      <lineSegments ref={lines} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} usage={THREE.DynamicDrawUsage} />
        </bufferGeometry>
        <lineBasicMaterial color={getThemeColors().cyan} transparent opacity={0.16} blending={THREE.AdditiveBlending} depthWrite={false} />
      </lineSegments>
    </group>
  )
}
