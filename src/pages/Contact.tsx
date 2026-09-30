import { useState, type FormEvent } from 'react'
import {
  ArrowUpRight,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { PageHero, SectionHeading, Divider } from '@/components/Section'
import { FacebookIcon } from '@/components/icons'
import { addressOneLine, school } from '@/lib/site'

const levels = [
  'Pre-School / Kindergarten',
  'Elementary (Grade 1–6)',
  'Junior High (Grade 7–10)',
  'Senior High (Grade 11–12)',
  'College',
  'Other / Not sure yet',
]

const details = [
  {
    icon: MapPin,
    label: 'Campus address',
    value: `${school.address.line1}, ${school.address.line2}, ${school.address.city}, ${school.address.province} ${school.address.postcode}, ${school.address.country}`,
    href: school.contact.maps,
    action: 'Open in maps',
  },
  {
    icon: Phone,
    label: 'Telefax',
    value: school.contact.telefax,
    href: `tel:${school.contact.telefax.replace(/[^\d+]/g, '')}`,
    action: 'Call the office',
  },
  {
    icon: Mail,
    label: 'Email',
    value: school.contact.email,
    href: `mailto:${school.contact.email}`,
    action: 'Send an email',
  },
  {
    icon: FacebookIcon,
    label: 'Facebook',
    value: 'Colegio de Sta. Ana de Victorias',
    href: school.contact.facebook,
    action: 'Open the page',
    external: true,
  },
]

type Errors = Partial<Record<'name' | 'contact' | 'message', string>>

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    level: levels[3],
    message: '',
  })

  const update = (key: keyof typeof form) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const next: Errors = {}
    if (form.name.trim().length < 2) next.name = 'Please tell us your name.'
    if (!form.email.trim() && !form.phone.trim())
      next.contact = 'An email address or a phone number helps us reply.'
    if (form.message.trim().length < 10)
      next.message = 'A little more detail helps us answer properly.'

    setErrors(next)
    if (Object.keys(next).length > 0) return

    const subject = `Enquiry — ${form.level} — ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email || '—'}`,
      `Phone: ${form.phone || '—'}`,
      `Interested in: ${form.level}`,
      '',
      form.message,
    ].join('\n')

    window.location.href = `mailto:${school.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  const field =
    'w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 focus:outline-none'

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come by, or send us a message."
        lead="The registrar's office is on the Osmeña Avenue campus. Reach us by message, by phone, or simply drop by — we will be glad to show you around."
      />

      {/* -------------------------------------------------------- DETAILS */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Reach us"
            title="Contact details."
            lead={`${school.legalName} · ${addressOneLine}`}
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.07}>
                <a
                  href={d.href}
                  {...(d.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                  className="group card flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <d.icon className="h-5.5 w-5.5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-xs font-bold tracking-[0.16em] text-muted uppercase">
                    {d.label}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed break-words text-ink-soft">
                    {d.value}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
                    {d.action}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- FORM + MAP */}
      <section className="bg-paper-dim py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Send an enquiry
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-muted">
                Fill in this form and we'll open your email app with the message
                ready to send to the registrar. Nothing is stored on this site.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} noValidate className="mt-9 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold tracking-[0.14em] text-muted uppercase"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      className={field}
                      value={form.name}
                      onChange={(e) => update('name')(e.target.value)}
                      placeholder="Juan Dela Cruz"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-xs text-brand-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="level"
                      className="mb-2 block text-xs font-bold tracking-[0.14em] text-muted uppercase"
                    >
                      Interested in
                    </label>
                    <select
                      id="level"
                      className={field}
                      value={form.level}
                      onChange={(e) => update('level')(e.target.value)}
                    >
                      {levels.map((l) => (
                        <option key={l} value={l}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold tracking-[0.14em] text-muted uppercase"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={field}
                      value={form.email}
                      onChange={(e) => update('email')(e.target.value)}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold tracking-[0.14em] text-muted uppercase"
                    >
                      Phone <span className="font-normal normal-case">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={field}
                      value={form.phone}
                      onChange={(e) => update('phone')(e.target.value)}
                      placeholder="09XX XXX XXXX"
                      autoComplete="tel"
                      aria-invalid={Boolean(errors.contact)}
                      aria-describedby={errors.contact ? 'contact-error' : undefined}
                    />
                    {errors.contact && (
                      <p id="contact-error" className="mt-2 text-xs text-brand-600">
                        {errors.contact}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold tracking-[0.14em] text-muted uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`${field} resize-y`}
                    value={form.message}
                    onChange={(e) => update('message')(e.target.value)}
                    placeholder="I'd like to visit the campus and ask about Grade 7 admission for my child."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-xs text-brand-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button type="submit" className="btn btn-primary">
                    <Send className="h-4 w-4" aria-hidden />
                    Open my email app
                  </button>
                  <p className="text-xs text-muted">
                    Sends to {school.contact.email}
                  </p>
                </div>

                {sent && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-xl border border-forest-200 bg-forest-50 p-5 text-sm text-forest-800"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-600 text-white">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <p>
                      Your email app should now be open with the message ready to
                      send. If nothing happened, email us directly at{' '}
                      <a
                        href={`mailto:${school.contact.email}`}
                        className="font-semibold underline underline-offset-4"
                      >
                        {school.contact.email}
                      </a>
                      .
                    </p>
                  </div>
                )}
              </form>
            </Reveal>
          </div>

          {/* Map + visit info */}
          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="card overflow-hidden">
                <iframe
                  title="Map showing Colegio de Sta. Ana de Victorias on Osmeña Avenue, Victorias City, Negros Occidental"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=123.0639%2C10.89869%2C123.08594%2C10.91069&amp;layer=mapnik&amp;marker=10.90469%2C123.07494"
                  className="h-80 w-full border-0 sm:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-7">
                  <h3 className="font-display text-lg font-semibold">
                    Visiting the campus
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    The main campus sits along Osmeña Avenue at Roxas Street in
                    Barangay VI. Visitor parking is available on campus — tell
                    the guard you are for the Colegio de Sta. Ana de Victorias
                    registrar.
                  </p>

                  <Divider className="my-6" />

                  <dl className="space-y-4 text-sm">
                    <div className="flex gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden />
                      <div>
                        <dt className="font-semibold text-ink">
                          Weekday office hours
                        </dt>
                        <dd className="mt-0.5 text-muted">
                          Monday to Friday, during class hours
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden />
                      <div>
                        <dt className="font-semibold text-ink">Saturdays</dt>
                        <dd className="mt-0.5 text-muted">
                          Visits welcome — message ahead so we can welcome you
                          properly
                        </dd>
                      </div>
                    </div>
                  </dl>

                  <a
                    href={school.contact.maps}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-outline text-ink mt-7 w-full"
                  >
                    Open in OpenStreetMap
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
