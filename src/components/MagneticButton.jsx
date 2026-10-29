import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useReducedMotion } from '../hooks/useMediaQuery'

// Wrap any button/link: it drifts toward the cursor. Pass the styled child (e.g. <a className="btn-primary">).
export default function MagneticButton({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.2 })
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.2 })

  const onMove = (e) => {
    if (reduced) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span ref={ref} style={{ x, y }} onMouseMove={onMove} onMouseLeave={onLeave} className={`inline-block ${className}`}>
      {children}
    </motion.span>
  )
}
