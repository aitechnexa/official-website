import { useMemo } from 'react'

// Lightweight SVG constellation: SSR-safe fallback for mobile / low-power / reduced-motion and while the 3D chunk loads.
export default function LiteNetwork({ className = '' }) {
  const { nodes, links } = useMemo(() => {
    let s = 42
    const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647)
    const nodes = Array.from({ length: 34 }, (_, i) => ({ x: rnd() * 100, y: rnd() * 100, r: 0.35 + rnd() * 0.5, d: rnd() * 4, c: i % 3 }))
    const links = []
    nodes.forEach((a, i) =>
      nodes.slice(i + 1).forEach((b, j) => {
        if (Math.hypot(a.x - b.x, a.y - b.y) < 20) links.push([i, i + 1 + j])
      }),
    )
    return { nodes, links }
  }, [])
  const colors = ['#22d3ee', '#8b5cf6', '#f472b6']
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className={`absolute inset-0 h-full w-full ${className}`} aria-hidden="true">
      {links.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="#22d3ee" strokeOpacity="0.14" strokeWidth="0.12" />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={colors[n.c]} className="lite-node" style={{ animationDelay: `${n.d}s` }} />
      ))}
    </svg>
  )
}
