import { useSyncExternalStore } from 'react'

const noop = () => () => {}

// false during prerender and hydration, true afterwards. Gate browser-only UI (3D, cursor) with this.
export const useIsClient = () => useSyncExternalStore(noop, () => true, () => false)
