import { Canvas } from '@react-three/fiber'
import NeuralNetwork from './NeuralNetwork'

// Hero 3D scene. Lazy-loaded from sections/Hero.jsx. `active=false` pauses rendering (off-screen / hidden tab).
export default function Scene({ count = 900, active = true, onReady }) {
  return (
    <Canvas
      onCreated={() => onReady?.()}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 11], fov: 55 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      frameloop={active ? 'always' : 'never'}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <fog attach="fog" args={['#05060a', 10, 24]} />
      <NeuralNetwork count={count} />
    </Canvas>
  )
}
