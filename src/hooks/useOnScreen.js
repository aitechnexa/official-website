import { useEffect, useRef, useState } from 'react'

// Tracks whether an element is in the viewport (used to pause 3D rendering off-screen).
export function useOnScreen(rootMargin = '100px') {
  const ref = useRef(null)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])
  return [ref, visible]
}
