// Neural-node mark. TODO: replace with your real logo SVG/PNG.
export default function Logo({ className = 'h-8 w-8', draw = false }) {
  const stroke = { stroke: 'url(#logo-grad)', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset="0.6" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#F472B6" />
        </linearGradient>
      </defs>
      <path d="M20 3 35 12v16L20 37 5 28V12z" {...stroke} className={draw ? 'logo-draw' : ''} pathLength="1" strokeDasharray={draw ? 1 : undefined} />
      <path d="M12 27 20 12l8 15M14.5 22h11" {...stroke} />
      <circle cx="20" cy="12" r="2.2" fill="#22D3EE" />
      <circle cx="12" cy="27" r="2.2" fill="#8B5CF6" />
      <circle cx="28" cy="27" r="2.2" fill="#F472B6" />
    </svg>
  )
}
