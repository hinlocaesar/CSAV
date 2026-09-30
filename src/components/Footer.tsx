import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { Mark } from './Seal'
import { FacebookIcon } from './icons'
import { EmailText } from './EmailText'
import { addressOneLine, navLinks, school } from '@/lib/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="grain relative overflow-hidden bg-brand-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(760px 380px at 8% 0%, rgba(223,167,51,0.18), transparent 60%), radial-gradient(620px 420px at 96% 100%, rgba(63,128,103,0.20), transparent 62%)',
        }}
      />

      <div className="container-page relative">
        {/* Call to action strip */}
        <div className="flex flex-col gap-5 border-b border-white/10 py-12 sm:flex-row sm:items-center sm:justify-between lg:py-14">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Come see what CSAV can do for your child.
            </h2>
            <p className="mt-2 text-white/65">
              Visits are welcome on weekdays and Saturdays — message us first so
              we can welcome you properly.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link to="/admissions" className="btn btn-gold">
              Start an application
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={school.contact.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-outline text-white"
            >
              <FacebookIcon className="h-4 w-4" />
              Message us
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <Mark className="h-12 w-12 text-gold-400" />
              <span className="leading-tight">
                <span className="block font-display text-lg font-semibold">
                  Colegio de Sta. Ana
                </span>
                <span className="block text-[0.72rem] font-semibold tracking-[0.22em] text-gold-300 uppercase">
                  de Victorias
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {school.legalName} — a Christ-centered Catholic institution in
              Victorias City, founded in {school.founded} to bring quality
              education closer to the young and the marginalized.
            </p>
            <p className="mt-5 font-display text-base text-gold-200 italic">
              “{school.tagline}”
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <h3 className="text-xs font-bold tracking-[0.18em] text-white/45 uppercase">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/75 transition hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold tracking-[0.18em] text-white/45 uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden />
                <span className="text-white/75">{addressOneLine}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden />
                <a
                  href={`tel:${school.contact.telefax.replace(/[^\d+]/g, '')}`}
                  className="text-white/75 transition hover:text-gold-300"
                >
                  Telefax {school.contact.telefax}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden />
                <a
                  href={`mailto:${school.contact.email}`}
                  className="text-white/75 transition hover:text-gold-300"
                >
                  <EmailText value={school.contact.email} />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-bold tracking-[0.18em] text-white/45 uppercase">
              Follow
            </h3>
            <a
              href={school.contact.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 px-4 py-2.5 text-sm text-white/85 transition hover:border-gold-300 hover:text-gold-300"
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook
            </a>
            <a
              href={school.contact.maps}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-3 block text-xs text-white/55 underline-offset-4 transition hover:text-gold-300 hover:underline"
            >
              View on map
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {school.legalName}. All rights reserved.
          </p>
          <p>
            {school.address.city}, {school.address.province} ·{' '}
            {school.nickname} · {school.patronSaints.join(' & ')}
          </p>
        </div>
      </div>
    </footer>
  )
}
