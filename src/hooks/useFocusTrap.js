import { useEffect } from 'react'

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])'

// Traps Tab focus inside containerRef while active, closes on Escape and restores focus afterwards.
export function useFocusTrap(containerRef, active, onClose) {
  useEffect(() => {
    if (!active) return
    const container = containerRef.current
    const previous = document.activeElement
    const items = () => [...(container?.querySelectorAll(FOCUSABLE) ?? [])]
    items()[0]?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') return onClose?.()
      if (e.key !== 'Tab') return
      const list = items()
      if (!list.length) return
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    window.__lenis?.stop()
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      window.__lenis?.start()
      document.body.style.overflow = ''
      previous?.focus?.()
    }
  }, [active, containerRef, onClose])
}
