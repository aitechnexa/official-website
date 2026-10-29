import { useEffect, useRef } from 'react'
import { useIsClient } from '../hooks/useIsClient'
import { useMediaQuery, useReducedMotion } from '../hooks/useMediaQuery'

const INTERACTIVE = 'a,button,[role="button"],[data-cursor],input,textarea,select,label'

// Dot + trailing ring. Desktop (fine pointer) only; the ring grows over interactive elements.
export default function CustomCursor() {
  const isClient = useIsClient()
  const fine = useMediaQuery('(hover: hover) and (pointer: fine)')
  const reduced = useReducedMotion()
  const enabled = isClient && fine && !reduced
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!enabled) return
    document.body.classList.add('has-custom-cursor')
    let mx = -100, my = -100, rx = -100, ry = -100, raf, grow = false

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      grow = !!e.target.closest?.(INTERACTIVE)
    }
    const tick = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      if (dot.current) dot.current.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%) scale(${grow ? 1.9 : 1})`
        ring.current.style.backgroundColor = grow ? 'rgba(34,211,238,0.12)' : 'transparent'
      }
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <>
      <div ref={dot} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-cyan" />
      <div
        ref={ring}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[99] h-9 w-9 rounded-full border border-cyan/60 transition-[background-color] duration-200"
      />
    </>
  )
}
