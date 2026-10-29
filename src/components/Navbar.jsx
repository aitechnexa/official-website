import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import MagneticButton from './MagneticButton'
import { navLinks, company } from '../data/company'
import { useActiveSection } from '../hooks/useActiveSection'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { scrollToId } from '../hooks/useSmoothScroll'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useFocusTrap(menuRef, open, () => setOpen(false))

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    setTimeout(() => scrollToId(id), open ? 250 : 0)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-void/70 py-3 backdrop-blur-xl' : 'py-5'}`}
    >
      <nav aria-label="Main" className="container-x flex items-center justify-between px-5 sm:px-8">
        <a href="#home" onClick={(e) => go(e, 'home')} className="flex items-center gap-2.5" aria-label={`${company.name} home`}>
          <Logo />
          <span className="font-display text-lg font-bold tracking-tight">
            AiTech <span className="gradient-text">Nexa</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.slice(1, -1).map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => go(e, l.id)}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative rounded-full px-3.5 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${active === l.id ? 'text-cyan' : 'text-muted hover:text-ink'}`}
              >
                {active === l.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full border border-cyan/30 bg-cyan/10" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block">
            <MagneticButton>
              <a href="#contact" onClick={(e) => go(e, 'contact')} className="btn-primary !py-2.5">
                Start a Project
              </a>
            </MagneticButton>
          </span>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-ink transition hover:border-cyan hover:text-cyan xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 -z-10 flex flex-col justify-center bg-void/95 px-8 backdrop-blur-2xl xl:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((l, i) => (
                <motion.li key={l.id} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => go(e, l.id)}
                    className={`block py-2 font-display text-3xl font-bold ${active === l.id ? 'gradient-text' : 'text-ink'}`}
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a href="#contact" onClick={(e) => go(e, 'contact')} className="btn-primary mt-8 self-start">
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
