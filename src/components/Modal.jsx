import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useFocusTrap } from '../hooks/useFocusTrap'

function Panel({ onClose, labelledBy, children }) {
  const ref = useRef(null)
  useFocusTrap(ref, true, onClose)
  return (
    <motion.div className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 bg-void/80 backdrop-blur-md" onClick={onClose} aria-hidden="true" />
      <motion.div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        initial={{ y: 60, scale: 0.97, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 40, scale: 0.97, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        data-lenis-prevent
        className="glass relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-surface/90 sm:rounded-3xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-void/70 text-ink transition hover:text-cyan"
        >
          <X size={18} />
        </button>
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function Modal({ open, onClose, labelledBy, children }) {
  return <AnimatePresence>{open && <Panel onClose={onClose} labelledBy={labelledBy}>{children}</Panel>}</AnimatePresence>
}
