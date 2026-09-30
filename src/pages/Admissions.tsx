import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Check,
  CircleHelp,
  Clock,
  FileText,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { PageHero, SectionHeading } from '@/components/Section'
import {
  admissionRequirements,
  admissionSteps,
  faqs,
  school,
  addressOneLine,
} from '@/lib/site'
import { FacebookIcon } from '@/components/icons'

const notes = [
  {
    icon: ShieldCheck,
    title: 'Keep one photocopy of everything',
    body: 'Originals are inspected by the registrar, so bring photocopies of each document for your own file.',
  },
  {
    icon: Clock,
    title: 'Come early in the enrolment season',
    body: 'Classes open after the school year ends. Slots for popular programmes — especially BEED, Nursing and Criminology — fill quickly.',
  },
  {
    icon: MapPin,
    title: 'Saturday visits are welcome',
    body: 'The registrar is on campus on Saturdays. Message ahead so someone can walk you through the campus properly.',
  },
  {
    icon: Phone,
    title: 'Ask before you travel',
    body: 'A quick call or message to confirm schedules, assessment dates and fees will save you a wasted trip.',
  },
]

export default function Admissions() {
  const [tab, setTab] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Five steps from enquiry to first day."
        lead="Whether you are applying for Kinder, Grade 7, Senior High or a four-year degree, the process is straightforward — and our team will walk you through it."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={school.contact.facebook}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-gold"
          >
            <FacebookIcon className="h-4 w-4" />
            Message the registrar
          </a>
          <Link to="/contact" className="btn btn-outline text-white/90 hover:text-white">
            Contact details
          </Link>
        </div>
      </PageHero>

      {/* ----------------------------------------------------------- STEPS */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="The process"
            title="What to expect, step by step."
            lead="No hidden stages. Here is exactly what happens between your first message and your first day on campus."
          />

          <ol className="mt-16 grid gap-6 lg:grid-cols-5 lg:gap-4">
            {admissionSteps.map((s, i) => (
              <Reveal
                key={s.step}
                delay={i * 0.07}
                as="li"
                className="group relative flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="font-display text-4xl font-semibold text-brand-200 transition-colors duration-300 group-hover:text-gold-400">
                  {s.step}
                </span>
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
                {i < admissionSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-1/2 -right-3.5 hidden -translate-y-1/2 text-gold-400 lg:block"
                  >
                    →
                  </span>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ----------------------------------------------------- REQUIREMENTS */}
      <section className="bg-paper-dim py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Requirements"
            title="What to bring with you."
            lead="Prepare these in advance and your enrolment can be finished in a single visit."
          />

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap justify-center gap-2">
              {admissionRequirements.map((r, i) => (
                <button
                  key={r.level}
                  type="button"
                  onClick={() => setTab(i)}
                  aria-pressed={tab === i}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                    tab === i
                      ? 'border-brand-700 bg-brand-700 text-white shadow-soft'
                      : 'border-ink/12 bg-white text-ink-soft hover:border-brand-400 hover:text-brand-700'
                  }`}
                >
                  {r.level}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mx-auto mt-12 max-w-3xl">
            <Reveal>
              <div className="card overflow-hidden">
                <div className="flex items-center gap-3 border-b border-ink/8 bg-white px-7 py-5">
                  <FileText className="h-5 w-5 text-brand-700" aria-hidden />
                  <h3 className="text-xs font-bold tracking-[0.18em] text-muted uppercase">
                    {admissionRequirements[tab].level}
                  </h3>
                </div>
                <ul className="divide-y divide-ink/8">
                  {admissionRequirements[tab].items.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 px-7 py-4 text-sm text-ink-soft"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest-50 text-forest-700">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <span className="flex-1">{item}</span>
                      <span className="text-xs text-muted tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-ink/8 bg-paper px-7 py-5 text-xs leading-relaxed text-muted">
                  Requirements can change per enrolment season and for
                  transferees. Please confirm the current list with the registrar
                  before you come in — a quick message is enough.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ NOTES */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                align="left"
                eyebrow="Good to know"
                title="Small things that make a big difference."
                lead="These are the details applicants most often ask about — gathered from the questions the registrar hears every year."
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {notes.map((note, i) => (
                <Reveal key={note.title} delay={i * 0.07}>
                  <article className="card h-full p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-50 text-gold-700">
                      <note.icon className="h-5.5 w-5.5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-base font-semibold">{note.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {note.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- FAQ */}
      <section className="bg-paper-dim py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions parents and students ask."
            lead="If your question is not here, message the registrar and we will add it."
          />

          <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink/10 overflow-hidden rounded-2xl border border-ink/10 bg-white">
            {faqs.map((faq, i) => {
              const open = openFaq === i
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-4 px-7 py-5 text-left transition hover:bg-paper/60"
                  >
                    <CircleHelp
                      className={`h-5 w-5 shrink-0 transition-colors ${
                        open ? 'text-brand-700' : 'text-muted/60'
                      }`}
                      aria-hidden
                    />
                    <span className="flex-1 text-sm font-semibold text-ink sm:text-base">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden
                      className={`text-lg text-gold-500 transition-transform duration-300 ${
                        open ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-7 pb-6 pl-16 text-sm leading-relaxed text-muted">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <Reveal delay={0.12}>
            <div className="mx-auto mt-12 max-w-3xl rounded-4xl bg-brand-700 p-9 text-center text-white sm:p-12">
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                Ready when you are.
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75">
                Come to {addressOneLine}, or message us first so we can prepare
                for your visit. Telefax {school.contact.telefax}.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="btn btn-gold">
                  Contact the registrar
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
                <a
                  href={school.contact.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-outline text-white/90 hover:text-white"
                >
                  <FacebookIcon className="h-4 w-4" />
                  Facebook page
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
