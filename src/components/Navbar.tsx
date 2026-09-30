import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { Mark } from './Seal'
import { FacebookIcon } from './icons'
import { navLinks, school, addressOneLine } from '@/lib/site'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Utility strip */}
      <div className="hidden bg-brand-950 text-white/70 lg:block">
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-gold-300" aria-hidden />
            {addressOneLine}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${school.contact.telefax.replace(/[^\d+]/g, '')}`}
              className="flex items-center gap-2 transition hover:text-gold-300"
            >
              <Phone className="h-3.5 w-3.5 text-gold-300" aria-hidden />
              Telefax {school.contact.telefax}
            </a>
            <a
              href={school.contact.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 transition hover:text-gold-300"
            >
              <FacebookIcon className="h-3.5 w-3.5 text-gold-300" />
              Facebook
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-ink/10 bg-paper/90 backdrop-blur-xl'
            : 'border-b border-transparent bg-paper'
        }`}
      >
        <div className="container-page flex h-18 items-center justify-between gap-6 py-3.5">
          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label={`${school.name} — home`}
          >
            <Mark className="h-11 w-11 shrink-0 text-brand-700 transition-transform duration-300 group-hover:rotate-[-6deg]" />
            <span className="leading-tight">
              <span className="block font-display text-[1.05rem] font-semibold text-ink">
                Colegio de Sta. Ana
              </span>
              <span className="block text-[0.7rem] font-semibold tracking-[0.22em] text-brand-700 uppercase">
                de Victorias
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-700'
                      : 'text-ink-soft hover:text-brand-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span
                        aria-hidden
                        className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold-400"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/admissions" className="btn btn-primary hidden sm:inline-flex">
              Enrol now
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-brand-700 hover:text-brand-700 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-brand-950/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-[72px] origin-top border-b border-ink/10 bg-paper p-6 shadow-lift transition-all duration-300 ${
            open
              ? 'translate-y-0 opacity-100'
              : '-translate-y-3 opacity-0'
          }`}
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-ink/8 py-4 font-display text-lg font-medium ${
                    isActive ? 'text-brand-700' : 'text-ink'
                  }`
                }
              >
                {link.label}
                <span aria-hidden className="text-gold-400">
                  →
                </span>
              </NavLink>
            ))}
          </nav>
          <Link to="/admissions" className="btn btn-primary mt-6 w-full">
            Enrol now
          </Link>
          <div className="mt-6 space-y-2 text-sm text-muted">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" aria-hidden />
              {addressOneLine}
            </p>
            <a
              href={`tel:${school.contact.telefax.replace(/[^\d+]/g, '')}`}
              className="flex items-center gap-2"
            >
              <Phone className="h-4 w-4 shrink-0 text-brand-700" aria-hidden />
              Telefax {school.contact.telefax}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
