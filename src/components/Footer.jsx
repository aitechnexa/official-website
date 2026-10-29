import { ArrowUp, Github, Linkedin, Facebook, Twitter } from 'lucide-react'
import Logo from './Logo'
import { company, navLinks } from '../data/company'
import { scrollToId } from '../hooks/useSmoothScroll'

const socials = [
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
  { key: 'github', label: 'GitHub', Icon: Github },
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
  { key: 'twitter', label: 'X / Twitter', Icon: Twitter },
]

export default function Footer() {
  const links = socials.filter((s) => company.social[s.key])
  return (
    <footer className="relative px-5 pb-10 pt-16 sm:px-8">
      <div className="absolute inset-x-0 top-0 h-px animate-gradient-pan bg-nexus-gradient [background-size:200%_200%]" aria-hidden="true" />
      <div className="container-x flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo />
            <span className="font-display text-xl font-bold">{company.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted">{company.tagline}</p>
          {links.length > 0 && (
            <ul className="mt-5 flex gap-3">
              {links.map(({ key, label, Icon }) => (
                <li key={key}>
                  <a
                    href={company.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition hover:border-cyan hover:text-cyan hover:shadow-glow-cyan"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollToId(l.id) }} className="transition hover:text-cyan">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => scrollToId('home')}
          className="btn-ghost self-start md:self-auto"
          aria-label="Back to top"
        >
          <ArrowUp size={16} /> Top
        </button>
      </div>
      <p className="container-x mt-12 border-t border-white/5 pt-6 font-mono text-xs text-muted">
        &copy; {new Date().getFullYear()} {company.name}. Crafted in {company.address}.
      </p>
    </footer>
  )
}
