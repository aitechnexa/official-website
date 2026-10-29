import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useMediaQuery'

// Scroll-triggered fade/slide-in. Disabled under prefers-reduced-motion.
export default function Reveal({ children, delay = 0, y = 32, className = '', as = 'div', ...rest }) {
  const reduced = useReducedMotion()
  const Tag = motion[as]
  if (reduced) return <Tag className={className} {...rest}>{children}</Tag>
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
