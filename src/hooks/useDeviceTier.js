import { useIsClient } from './useIsClient'
import { useMediaQuery, useReducedMotion } from './useMediaQuery'

// Returns { isClient, tier: 'high' | 'low', reduced, particles }.
// 'low' = small screens, weak CPUs/RAM, data-saver or reduced-motion. Low tier skips the 3D canvas.
export function useDeviceTier() {
  const isClient = useIsClient()
  const reduced = useReducedMotion()
  const small = useMediaQuery('(max-width: 768px)')
  let weak = false
  if (isClient) {
    const nav = navigator
    weak = (nav.hardwareConcurrency || 8) <= 4 || (nav.deviceMemory || 8) <= 4 || nav.connection?.saveData === true
  }
  const low = reduced || small || weak
  return { isClient, reduced, small, tier: low ? 'low' : 'high', particles: 900 }
}
