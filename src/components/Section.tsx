import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  tone = 'dark',
  className = '',
}: {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: 'center' | 'left'
  tone?: 'dark' | 'light'
  className?: string
}) {
  const isLight = tone === 'light'
  return (
    <Reveal
      className={`max-w-2xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`eyebrow mb-4 ${
            isLight ? 'text-gold-300' : 'text-brand-700'
          }`}
        >
          <span
            aria-hidden
            className={`inline-block h-px w-6 ${
              isLight ? 'bg-gold-300/60' : 'bg-brand-700/40'
            }`}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          isLight ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            isLight ? 'text-white/70' : 'text-muted'
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  )
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string
  title: string
  lead: string
  children?: ReactNode
}) {
  return (
    <section className="grain relative overflow-hidden bg-brand-900 text-white">
      {/* Decorative wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            'radial-gradient(900px 420px at 12% -10%, rgba(223,167,51,0.30), transparent 60%), radial-gradient(700px 480px at 92% 8%, rgba(63,128,103,0.32), transparent 62%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-950/70 to-transparent"
      />

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <Reveal>
          <span className="eyebrow text-gold-300">
            <span aria-hidden className="inline-block h-px w-6 bg-gold-300/60" />
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {lead}
          </p>
          {children && <div className="mt-9">{children}</div>}
        </Reveal>
      </div>
    </section>
  )
}

export function Divider({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`rule-gold mx-auto h-px w-40 ${className}`}
    />
  )
}
