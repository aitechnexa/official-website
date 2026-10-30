import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import MagneticButton from '../components/MagneticButton'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { company } from '../data/company'
import { services } from '../data/services'

// Web3Forms access keys are public by design (restrict this one to aitechnexa.com in the Web3Forms dashboard).
// VITE_WEB3FORMS_KEY (see .env.example) overrides the fallback. To switch to EmailJS/Formspree, change only submitForm() below.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '27eed8d8-fd7e-47ff-baf8-5ba97935f802'
const projectTypes = [...services.map((s) => s.title), 'Other']
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validators = {
  name: (v) => (v.trim().length < 2 ? 'Please enter your name.' : ''),
  email: (v) => (!EMAIL_RE.test(v.trim()) ? 'Please enter a valid email address.' : ''),
  projectType: (v) => (!v ? 'Please choose a project type.' : ''),
  message: (v) => (v.trim().length < 10 ? 'Tell us a little more (at least 10 characters).' : ''),
}

async function submitForm(values) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `New project enquiry from ${values.name}`,
      name: values.name,
      email: values.email,
      project_type: values.projectType,
      message: values.message,
      botcheck: values.botcheck,
    }),
  })
  const data = await res.json()
  if (!data.success) throw new Error(data.message || 'Submission failed')
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">{label}</label>
      {children}
      <p id={`${id}-error`} role="alert" className="mt-1.5 min-h-[1.25rem] text-xs text-magenta">{error}</p>
    </div>
  )
}

const inputCls =
  'w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition focus:border-cyan focus:shadow-glow-cyan'

function SuccessCheck() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass flex min-h-[420px] flex-col items-center justify-center rounded-3xl p-10 text-center" role="status">
      <svg viewBox="0 0 52 52" className="mb-6 h-24 w-24" aria-hidden="true">
        <motion.circle cx="26" cy="26" r="24" fill="none" stroke="#22D3EE" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
        <motion.path d="M15 27l8 8 14-16" fill="none" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.5 }} />
      </svg>
      <h3 className="text-3xl font-bold">Message received</h3>
      <p className="mt-3 max-w-sm text-muted">Thanks for reaching out. We'll get back to you within one business day.</p>
    </motion.div>
  )
}

export default function Contact() {
  const empty = { name: '', email: '', projectType: '', message: '', botcheck: '' }
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validateField = (k, v) => setErrors((e) => ({ ...e, [k]: validators[k]?.(v) ?? '' }))
  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) validateField(name, value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const next = Object.fromEntries(Object.keys(validators).map((k) => [k, validators[k](values[k])]))
    setErrors(next)
    const firstBad = Object.keys(next).find((k) => next[k])
    if (firstBad) return document.getElementById(firstBad)?.focus()
    if (values.botcheck) return setStatus('success')
    if (!ACCESS_KEY) return setStatus('error')
    setStatus('sending')
    try {
      await submitForm(values)
      setStatus('success')
      setValues(empty)
    } catch {
      setStatus('error')
    }
  }

  const fieldProps = (k) => ({
    id: k,
    name: k,
    value: values[k],
    onChange,
    onBlur: (e) => validateField(k, e.target.value),
    'aria-invalid': !!errors[k],
    'aria-describedby': `${k}-error`,
    className: `${inputCls} ${errors[k] ? 'border-magenta' : 'border-white/10'}`,
  })

  const details = [
    { Icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { Icon: Phone, label: 'Phone / WhatsApp', value: company.phone, href: `tel:${company.phone.replace(/[^+\d]/g, '')}` },
    { Icon: MapPin, label: 'Studio', value: company.address },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let's build something"
          highlight="intelligent together."
          text="Tell us about your idea. We reply within one business day, usually sooner."
        />
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <SuccessCheck key="ok" />
              ) : (
                <Reveal key="form">
                  <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-10">
                    <div className="grid gap-x-6 sm:grid-cols-2">
                      <Field id="name" label="Name" error={errors.name}>
                        <input type="text" autoComplete="name" placeholder="Your name" {...fieldProps('name')} />
                      </Field>
                      <Field id="email" label="Email" error={errors.email}>
                        <input type="email" autoComplete="email" placeholder="you@company.com" {...fieldProps('email')} />
                      </Field>
                    </div>
                    <Field id="projectType" label="Project type" error={errors.projectType}>
                      <select {...fieldProps('projectType')}>
                        <option value="" className="bg-surface">Select a service...</option>
                        {projectTypes.map((p) => <option key={p} value={p} className="bg-surface">{p}</option>)}
                      </select>
                    </Field>
                    <Field id="message" label="Message" error={errors.message}>
                      <textarea rows={5} placeholder="What are you looking to build?" {...fieldProps('message')} />
                    </Field>
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="botcheck">Leave this field empty</label>
                      <input id="botcheck" name="botcheck" type="text" tabIndex={-1} autoComplete="off" value={values.botcheck} onChange={onChange} />
                    </div>
                    <MagneticButton>
                      <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
                        {status === 'sending' ? 'Sending...' : 'Send message'} <Send size={16} />
                      </button>
                    </MagneticButton>
                    {status === 'error' && (
                      <p role="alert" className="mt-5 rounded-xl border border-magenta/40 bg-magenta/10 p-4 text-sm text-magenta">
                        {ACCESS_KEY
                          ? 'Something went wrong. Please try again or email us directly at '
                          : 'The contact form is not configured yet. Please email us directly at '}
                        <a href={`mailto:${company.email}`} className="underline">{company.email}</a>.
                      </p>
                    )}
                  </form>
                </Reveal>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-4 lg:col-span-2">
            {details.map(({ Icon, label, value, href }, i) => {
              const Tag = href ? 'a' : 'div'
              return (
                <Reveal key={label} delay={i * 0.08}>
                  <Tag {...(href ? { href } : {})} className="glass glass-hover flex items-center gap-4 rounded-2xl p-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-cyan">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-muted">{label}</span>
                      <span className="block break-all text-ink">{value}</span>
                    </span>
                  </Tag>
                </Reveal>
              )
            })}
            <Reveal delay={0.25} className="rounded-2xl border border-cyan/20 bg-cyan/5 p-5 text-sm text-muted">
              <span className="gradient-text font-semibold">Free consultation.</span> Starting from RM 1,000 for landing pages and RM 5,000+ for custom solutions.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
