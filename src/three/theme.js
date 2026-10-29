// Reads the Neural Nexus palette from the CSS variables in src/index.css so 3D and UI share one source of truth.
const FALLBACK = { cyan: '#22d3ee', violet: '#8b5cf6', magenta: '#f472b6', bg: '#05060a' }

export function getThemeColors() {
  if (typeof document === 'undefined') return FALLBACK
  const s = getComputedStyle(document.documentElement)
  const read = (v, f) => s.getPropertyValue(v).trim() || f
  return {
    cyan: read('--c-cyan', FALLBACK.cyan),
    violet: read('--c-violet', FALLBACK.violet),
    magenta: read('--c-magenta', FALLBACK.magenta),
    bg: read('--c-bg', FALLBACK.bg),
  }
}
