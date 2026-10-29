import { useCallback, useRef } from 'react'
import { useReducedMotion } from './useMediaQuery'

// Custom 3D tilt + cursor-follow glow (sets --rx, --ry, --mx, --my CSS vars on the element).
export function useTilt(max = 8) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const frame = useRef(0)

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${x * 100}%`)
        el.style.setProperty('--my', `${y * 100}%`)
        if (!reduced) {
          el.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`)
          el.style.setProperty('--rx', `${(0.5 - y) * max * 2}deg`)
        }
      })
    },
    [max, reduced],
  )

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(frame.current)
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
