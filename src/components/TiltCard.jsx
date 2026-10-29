import { useTilt } from '../hooks/useTilt'

// Glass card with 3D tilt and a cursor-follow radial glow. Pass `as` for a different tag.
export default function TiltCard({ children, className = '', max = 8, as: Tag = 'div', ...rest }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(max)
  return (
    <Tag
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`glass glass-hover group relative overflow-hidden rounded-2xl ${className}`}
      style={{
        transform: 'perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))',
        transition: 'transform 0.2s ease-out, border-color .3s, background-color .3s',
        willChange: 'transform',
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(34,211,238,0.16), transparent 60%)' }}
      />
      <div className="relative">{children}</div>
    </Tag>
  )
}
