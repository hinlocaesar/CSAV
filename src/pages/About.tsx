import { Link } from 'react-router-dom'
import { ArrowUpRight, Music4, Quote } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { PageHero, SectionHeading, Divider } from '@/components/Section'
import { Seal } from '@/components/Seal'
import {
  almaMater,
  founder,
  mission,
  philosophy,
  school,
  sealSymbols,
  timeline,
  vision,
} from '@/lib/site'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the school"
        title="A seed of good intent, still growing."
        lead="Colegio de Sta. Ana de Victorias began with one man's conviction that the young of Victorias City deserved an education that was both excellent and within reach. Fifteen years on, that conviction has become a school, a college, and a community."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/admissions" className="btn btn-gold">
            Enrol your child
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            to="/contact"
            className="btn btn-outline text-white/90 hover:text-white"
          >
            Plan a campus visit
          </Link>
        </div>
      </PageHero>

      {/* --------------------------------------------------------- FOUNDER */}
      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              align="left"
              eyebrow="The founder"
              title="Romeo Valenia Santa Ana Sr."
              lead={founder.summary}
            />

            <Reveal delay={0.15}>
              <div className="mt-10 rounded-3xl border-l-2 border-gold-400 bg-paper-dim p-8 sm:p-10">
                <Quote className="h-6 w-6 text-gold-500" aria-hidden />
                <p className="mt-4 font-display text-xl leading-relaxed text-ink italic sm:text-2xl">
                  “A school that will bring quality education closer to people
                  — especially the young and the marginalized sector of Victorias
                  City and its neighboring towns and cities.”
                </p>
                <p className="mt-6 text-sm text-muted">
                  The founding dream, {school.founded}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-soft">
                Although the Santa Ana patriarch died without seeing his dream
                materialised, the seed of good intent grew into what is now
                Colegio de Sta. Ana de Victorias. His family continues to guide
                the institution, keeping the same conviction close: that access
                and excellence should never be a trade-off.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="card overflow-hidden">
                <div className="grain relative grid place-items-center bg-brand-900 px-10 py-14 text-white">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-70"
                    style={{
                      background:
                        'radial-gradient(360px 260px at 50% 20%, rgba(223,167,51,0.30), transparent 65%)',
                    }}
                  />
                  <Seal className="relative h-48 w-48 text-gold-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-xs font-bold tracking-[0.2em] text-brand-700 uppercase">
                    Patron saints
                  </h3>
                  <p className="mt-3 font-display text-lg text-ink">
                    {school.patronSaints.join(' & ')}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    After the school was established and named, CSAV adopted as
                    its official patron saint the one whose name matches the
                    founder's family name — Santa Ana, St. Anne.
                  </p>
                  <Divider className="my-7" />
                  <h3 className="text-xs font-bold tracking-[0.2em] text-brand-700 uppercase">
                    Motto
                  </h3>
                  <p className="mt-3 font-display text-xl text-ink italic">
                    “{school.tagline}”
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ PHILOSOPHY / VISION */}
      <section className="bg-paper-dim py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our foundations"
            title="Philosophy, vision, mission."
            lead="These three statements are printed in every CSAV work immersion report and student portfolio — they are the framework for everything we do."
          />

          <div className="mt-14 space-y-6">
            {[
              {
                label: 'Philosophy',
                text: philosophy,
                icon: '☞',
                tone: 'text-forest-700 border-forest-200 bg-forest-50',
              },
              {
                label: 'Vision',
                text: vision,
                icon: '◈',
                tone: 'text-brand-700 border-brand-200 bg-brand-50',
              },
              {
                label: 'Mission',
                text: mission,
                icon: '✦',
                tone: 'text-gold-700 border-gold-200 bg-gold-50',
              },
            ].map((block, i) => (
              <Reveal key={block.label} delay={i * 0.08}>
                <article className="card flex flex-col gap-6 p-8 sm:flex-row sm:gap-10 sm:p-10">
                  <div
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl border text-xl ${block.tone}`}
                    aria-hidden
                  >
                    {block.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] text-muted uppercase">
                      {block.label}
                    </h3>
                    <p
                      className={`mt-3 leading-relaxed ${
                        block.label === 'Mission'
                          ? 'text-base text-ink-soft'
                          : 'font-display text-xl text-ink'
                      }`}
                    >
                      {block.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- TIMELINE */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="History"
            title="How CSAV grew, year by year."
            lead="From 144 college students and 62 Kinder pupils to a full K–12 integrated school and a growing college department."
          />

          <ol className="mt-16 space-y-0">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05} as="li" className="group relative grid gap-4 border-l border-ink/12 pb-12 pl-8 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:pl-10">
                  <span
                    aria-hidden
                    className="absolute top-1.5 -left-[0.3125rem] h-2.5 w-2.5 rounded-full bg-brand-700 ring-4 ring-paper transition-transform duration-300 group-hover:scale-125"
                  />
                  <div className="font-display text-xl font-semibold text-brand-700 sm:pt-0.5">
                    {item.year}
                  </div>
                  <div className="max-w-3xl">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
                  </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------------ SEAL */}
      <section className="grain relative overflow-hidden bg-brand-900 py-20 text-white sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(800px 400px at 12% 0%, rgba(223,167,51,0.22), transparent 60%), radial-gradient(700px 420px at 92% 100%, rgba(63,128,103,0.28), transparent 62%)',
          }}
        />
        <div className="container-page relative">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Seal className="h-52 w-52 text-gold-300" />
                <h2 className="mt-8 font-display text-3xl leading-tight font-semibold sm:text-4xl">
                  The school seal, and what it stands for.
                </h2>
                <p className="mt-5 leading-relaxed text-white/65">
                  The seal is not merely a logo — it is a symbol of the school's
                  heritage, and is used or worn with the utmost respect by every
                  CSAV student.
                </p>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {sealSymbols.map((s, i) => (
                <Reveal key={s.symbol} delay={i * 0.06}>
                  <article className="h-full rounded-2xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-sm transition hover:border-gold-300/40">
                    <h3 className="font-display text-lg font-semibold text-gold-200">
                      {s.symbol}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/65">
                      {s.meaning}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- ALMA MATER */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Alma Mater"
            title={
              <span className="inline-flex items-center gap-3">
                <Music4 className="h-7 w-7 text-gold-500" aria-hidden />
                Hail to our Alma Mater
              </span>
            }
            lead="Sung at assemblies and graduation, and carried by every CSAV student long after they leave."
          />

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="card h-full p-9">
                <h3 className="text-xs font-bold tracking-[0.2em] text-brand-700 uppercase">
                  Verse
                </h3>
                <ul className="mt-6 space-y-1.5">
                  {almaMater.verse.map((line, i) => (
                    <li
                      key={`verse-${i}`}
                      className="font-display text-base leading-relaxed text-ink-soft"
                    >
                      <span className="mr-2 text-xs text-gold-500 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="card h-full p-9">
                <h3 className="text-xs font-bold tracking-[0.2em] text-forest-700 uppercase">
                  Chorus
                </h3>
                <ul className="mt-6 space-y-1.5">
                  {almaMater.chorus.map((line, i) => (
                    <li
                      key={`chorus-${i}`}
                      className="font-display text-base leading-relaxed text-ink-soft"
                    >
                      <span className="mr-2 text-xs text-forest-500 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-ink/10 pt-6 font-display text-lg text-ink italic">
                  …to you forever more!
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              <Link to="/integrated-school" className="btn btn-primary">
                See the Integrated School
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to="/college" className="btn btn-outline text-ink">
                See the college programmes
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
