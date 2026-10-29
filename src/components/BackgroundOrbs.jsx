import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useMediaQuery'

// Fixed background: grid + noise + floating gradient orbs with subtle scroll parallax.
export default function BackgroundOrbs() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -240])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const style = reduced ? {} : undefined

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <motion.div
        style={reduced ? style : { y: y1 }}
        className="absolute -left-40 top-[10%] h-[34rem] w-[34rem] animate-float rounded-full bg-violet/20 blur-[120px]"
      />
      <motion.div
        style={reduced ? style : { y: y2 }}
        className="absolute -right-40 top-[45%] h-[30rem] w-[30rem] animate-float rounded-full bg-cyan/15 blur-[120px] [animation-delay:-4s]"
      />
      <div className="absolute bottom-[-10%] left-1/3 h-[26rem] w-[26rem] animate-float rounded-full bg-magenta/10 blur-[120px] [animation-delay:-7s]" />
      <div className="noise absolute inset-0" />
    </div>
  )
}
