import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Award, Globe2, GraduationCap, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { PageHero, SectionHeading } from '@/components/Section'
import { clusters, programs, school, type ClusterId } from '@/lib/site'

type Filter = ClusterId | 'all'

const highlights = [
  {
    icon: GraduationCap,
    title: 'The first programme, still running',
    body: `The school opened in ${school.founded} with the Bachelor of Elementary Education and produced its first 62 BEED graduates in 2015. That programme is still offered today.`,
  },
  {
    icon: Award,
    title: 'Certified, and still improving',
    body: 'ISO 9001:2008 certification was granted in 2015, and PACUCOA has since granted the school candidacy status — a sign of continuing quality work.',
  },
  {
    icon: Globe2,
    title: 'Open to international students',
    body: 'CSAV holds a Bureau of Immigration permit to accept foreign students. Ask the registrar early so the paperwork can be prepared in time.',
  },
  {
    icon: Sparkles,
    title: 'Ten programmes added since',
    body: 'After the first BEED offering, ten further academic courses were introduced across the college department — and several of them are still offered now.',
  },
]

export default function College() {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = useMemo(
    () => (filter === 'all' ? programs : programs.filter((p) => p.cluster === filter)),
    [filter],
  )

  return (
    <>
      <PageHero
        eyebrow="The College"
        title="Bachelor's degrees, brought closer."
        lead="Since 2011 the college department has grown from a single teaching programme into a broad offering across education, business, computing, criminal justice, health sciences, engineering, hospitality and the arts."
      >
        <Link to="/admissions" className="btn btn-gold">
          Apply to the college
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </PageHero>

      {/* ------------------------------------------------------- PROGRAMMES */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Programmes"
            title={`${programs.length} degree programmes across ${clusters.length} clusters.`}
            lead="Filter by cluster to narrow the list. Career paths listed are the usual destinations for each programme — your adviser will map them in more detail."
          />

          {/* Filters */}
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap justify-center gap-2">
              <FilterChip
                active={filter === 'all'}
                onClick={() => setFilter('all')}
                label="All programmes"
                count={programs.length}
              />
              {clusters.map((c) => {
                const count = programs.filter((p) => p.cluster === c.id).length
                if (count === 0) return null
                return (
                  <FilterChip
                    key={c.id}
                    active={filter === c.id}
                    onClick={() => setFilter(c.id)}
                    label={c.label}
                    count={count}
                  />
                )
              })}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((program, i) => {
              const clusterLabel =
                clusters.find((c) => c.id === program.cluster)?.label ?? ''
              return (
                <Reveal key={program.code} delay={(i % 3) * 0.06}>
                  <article className="card group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-lg bg-brand-700 px-3 py-1.5 font-display text-sm font-bold tracking-wide text-gold-100">
                        {program.code}
                      </span>
                      <span className="text-right text-[0.65rem] font-semibold tracking-[0.12em] text-muted uppercase">
                        {clusterLabel}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl leading-snug font-semibold">
                      {program.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {program.description}
                    </p>

                    <div className="mt-7 mb-7 border-t border-ink/8 pt-5">
                      <p className="text-[0.65rem] font-bold tracking-[0.16em] text-gold-600 uppercase">
                        Career paths
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {program.careers.slice(0, 4).map((career) => (
                          <li
                            key={career}
                            className="flex items-start gap-2 text-sm text-ink-soft"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400"
                            />
                            {career}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/admissions"
                      className="mt-auto inline-flex items-center gap-1.5 self-start pt-7 text-sm font-semibold text-brand-700 transition hover:gap-2.5"
                    >
                      Requirements
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </article>
                </Reveal>
              )
            })}
          </div>

          {visible.length === 0 && (
            <p className="mt-12 text-center text-muted">
              No programmes listed in this cluster yet — please contact the
              registrar for the latest offering.
            </p>
          )}
        </div>
      </section>

      {/* -------------------------------------------------------- HIGHLIGHTS */}
      <section className="grain relative overflow-hidden bg-brand-900 py-20 text-white sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(800px 420px at 10% 0%, rgba(223,167,51,0.22), transparent 60%), radial-gradient(700px 440px at 92% 100%, rgba(63,128,103,0.28), transparent 62%)',
          }}
        />
        <div className="container-page relative">
          <SectionHeading
            tone="light"
            eyebrow="The college department"
            title="Four things worth knowing."
            lead="A short version of the college's story — the rest is on the About page."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.07}>
                <article className="flex h-full gap-5 rounded-2xl border border-white/12 bg-white/[0.05] p-7 backdrop-blur-sm transition hover:border-gold-300/40">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-400/15 text-gold-300">
                    <h.icon className="h-5.5 w-5.5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {h.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-14 flex flex-wrap justify-center gap-3">
              <Link to="/admissions" className="btn btn-gold">
                Start an application
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline text-white/90 hover:text-white"
              >
                Talk to the registrar
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function FilterChip({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean
  onClick: () => void
  label: string
  count: number
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? 'border-brand-700 bg-brand-700 text-white shadow-soft'
          : 'border-ink/12 bg-white text-ink-soft hover:border-brand-400 hover:text-brand-700'
      }`}
    >
      {label}
      <span
        className={`rounded-full px-1.5 py-0.5 text-[0.65rem] font-bold ${
          active ? 'bg-white/20 text-white' : 'bg-paper-dim text-muted'
        }`}
      >
        {count}
      </span>
    </button>
  )
}
