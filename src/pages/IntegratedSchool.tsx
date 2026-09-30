import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Baby,
  BookOpenCheck,
  Briefcase,
  Check,
  Globe,
  HandHeart,
  Layers,
  Megaphone,
  School,
  Trophy,
  Users,
} from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { PageHero, SectionHeading } from '@/components/Section'
import { basicEdLevels, strands, studentLife } from '@/lib/site'
import type { LucideIcon } from 'lucide-react'

const levelIcons: Record<string, LucideIcon> = {
  kindergarten: Baby,
  primary: BookOpenCheck,
  'junior-high': Layers,
  'senior-high': School,
}

const lifeIcons: Record<string, LucideIcon> = {
  Trophy,
  Users,
  Globe,
  Briefcase,
  HandHeart,
  Megaphone,
}

const gradeLadder = [
  'Kinder 1',
  'Kinder 2',
  ...[1, 2, 3, 4, 5, 6].map((g) => `Grade ${g}`),
  ...[7, 8, 9, 10].map((g) => `Grade ${g}`),
  'Grade 11',
  'Grade 12',
]

export default function IntegratedSchool() {
  const [activeStrand, setActiveStrand] = useState(0)
  const strand = strands[activeStrand]

  return (
    <>
      <PageHero
        eyebrow="The Integrated School"
        title="Kinder 1 to Grade 12, under one roof."
        lead="A complete basic education department — pre-school, elementary, junior high and senior high — granted Government Recognition by the Department of Education in 2015, with every grade level implemented."
      >
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/70">
          <span className="flex items-center gap-2">
            <Check className="h-4 w-4 text-gold-300" aria-hidden />
            DepEd Government Recognition
          </span>
          <span className="flex items-center gap-2">
            <Check className="h-4 w-4 text-gold-300" aria-hidden />
            K to 12 in one campus
          </span>
          <span className="flex items-center gap-2">
            <Check className="h-4 w-4 text-gold-300" aria-hidden />
            Work Immersion for SHS
          </span>
        </div>
      </PageHero>

      {/* -------------------------------------------------------- LEVELS */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Grade levels"
            title="Every stage, on the same campus."
            lead="Students rarely have to start over. A child can enter at Kinder and graduate from Senior High without ever leaving Osmeña Avenue."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {basicEdLevels.map((level, i) => {
              const Icon = levelIcons[level.id] ?? School
              return (
                <Reveal key={level.id} delay={i * 0.07}>
                  <article className="card group h-full overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-9">
                    <div className="flex items-start justify-between gap-6">
                      <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <span className="rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-muted">
                        {level.range}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold">
                      {level.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-gold-600 uppercase">
                      {level.age}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {level.body}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {level.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full bg-paper-dim px-3 py-1.5 text-xs font-medium text-ink-soft"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              )
            })}
          </div>

          {/* Grade ladder */}
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10 bg-paper-dim p-6 sm:p-7">
              <p className="text-xs font-bold tracking-[0.18em] text-muted uppercase">
                The full grade ladder
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {gradeLadder.map((label) => (
                  <li
                    key={label}
                    className="rounded-lg border border-ink/10 bg-white px-3 py-2 text-xs font-medium whitespace-nowrap text-ink-soft"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- STRANDS */}
      <section className="grain relative overflow-hidden bg-forest-900 py-20 text-white sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(760px 400px at 8% 0%, rgba(223,167,51,0.22), transparent 60%), radial-gradient(700px 440px at 94% 100%, rgba(63,128,103,0.35), transparent 62%)',
          }}
        />
        <div className="container-page relative">
          <SectionHeading
            tone="light"
            eyebrow="Senior High School"
            title="Choose the strand that fits your goal."
            lead="Grade 11 and 12 students pick a strand at the start of senior high, then finish with Work Immersion in a real workplace."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ul className="space-y-2.5">
                {strands.map((s, i) => {
                  const active = i === activeStrand
                  return (
                    <li key={s.code}>
                      <button
                        type="button"
                        aria-pressed={active}
                        onClick={() => setActiveStrand(i)}
                        className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-200 ${
                          active
                            ? 'border-gold-300/60 bg-white/10'
                            : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
                        }`}
                      >
                        <span
                          className={`grid h-11 w-14 shrink-0 place-items-center rounded-lg font-display text-sm font-bold transition-colors ${
                            active
                              ? 'bg-gold-400 text-brand-950'
                              : 'bg-white/10 text-white/70'
                          }`}
                        >
                          {s.code}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm leading-snug font-semibold text-balance">
                            {s.name}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-white/55">
                            {s.blurb}
                          </span>
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div
                className="rounded-4xl border border-white/12 bg-white/[0.05] p-8 backdrop-blur-sm sm:p-10"
                aria-live="polite"
              >
                <p className="eyebrow text-gold-300">{strand.code}</p>
                <h3 className="mt-4 font-display text-2xl leading-snug font-semibold sm:text-3xl">
                  {strand.name}
                </h3>
                <p className="mt-4 text-white/70">{strand.blurb}</p>

                <p className="mt-9 text-xs font-bold tracking-[0.18em] text-white/45 uppercase">
                  Sample subjects
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {strand.subjects.map((sub, i) => (
                    <li
                      key={sub}
                      className="pop-in flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <Check className="h-4 w-4 shrink-0 text-gold-300" aria-hidden />
                      {sub}
                    </li>
                  ))}
                </ul>

                <p className="mt-9 border-t border-white/10 pt-7 text-sm leading-relaxed text-white/60">
                  Not sure which strand to take? Come to the Guidance Office at
                  Osmeña Avenue — an adviser will walk through your interests,
                  your subjects, and the programmes open to you after Grade 12.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- STUDENT LIFE */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Student life"
            title="Beyond the classroom."
            lead="Clubs, athletics, publications, community service and work immersion — the parts of school students remember longest."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {studentLife.map((item, i) => {
              const Icon = lifeIcons[item.icon] ?? Users
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <article className="card h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-forest-50 text-forest-700">
                      <Icon className="h-5.5 w-5.5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-14 flex flex-wrap justify-center gap-3">
              <Link to="/admissions" className="btn btn-primary">
                Apply to the Integrated School
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to="/contact" className="btn btn-outline text-ink">
                Ask about enrolment
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
