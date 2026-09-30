import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Award,
  BookOpen,
  CheckCircle2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Sunrise,
  Users,
} from 'lucide-react'
import { Reveal, CountUp } from '@/components/Reveal'
import { SectionHeading, Divider } from '@/components/Section'
import { Seal } from '@/components/Seal'
import {
  clusters,
  philosophy,
  programs,
  school,
  timeline,
  vision,
  mission,
} from '@/lib/site'

const quickFacts = [
  { icon: ShieldCheck, label: 'DepEd Recognised', note: 'Government Recognition, 2015' },
  { icon: Award, label: 'ISO 9001:2008', note: 'Certified quality management' },
  { icon: Award, label: 'PACUCOA', note: 'Candidacy status granted' },
  { icon: Globe2, label: 'Foreign students', note: 'BI-permitted enrolment' },
]

const pillars = [
  {
    icon: HeartHandshake,
    title: 'Rooted in faith',
    body: 'Every programme is built on a Catholic educational philosophy — education as the total growth of a person in harmony with God and with others.',
  },
  {
    icon: Users,
    title: 'Close to the community',
    body: 'Founded to bring quality education to the young and the marginalized of Victorias City and its neighbouring towns.',
  },
  {
    icon: Sparkles,
    title: 'Holistic by design',
    body: 'Academics, values formation, athletics and community service — the graduate is prepared for life, not just for a transcript.',
  },
  {
    icon: GraduationCap,
    title: 'Kinder to degree',
    body: 'One campus, one community, from Kindergarten all the way to a four-year bachelor’s degree — students rarely have to start over.',
  },
]

const pathways = [
  {
    to: '/integrated-school',
    eyebrow: 'The Integrated School',
    title: 'Kinder to Senior High School',
    body: 'Pre-school, elementary, junior high and senior high under one roof, with DepEd Government Recognition and all grade levels implemented since 2015.',
    points: ['Kinder 1 – 2', 'Grade 1 – 6', 'Junior High 7 – 10', 'Senior High 11 – 12'],
    tone: 'forest' as const,
  },
  {
    to: '/college',
    eyebrow: 'The College',
    title: 'Bachelor’s degree programmes',
    body: 'From the Bachelor of Elementary Education that opened the school in 2011 to nursing, criminology, computing, business and engineering today.',
    points: clusters.slice(0, 4).map((c) => c.label),
    tone: 'brand' as const,
  },
]

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- HERO */}
      <section className="grain relative overflow-hidden bg-brand-950 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(1000px 500px at 8% -5%, rgba(223,167,51,0.28), transparent 58%), radial-gradient(820px 560px at 96% 12%, rgba(63,128,103,0.30), transparent 60%), radial-gradient(700px 500px at 50% 110%, rgba(147,40,60,0.55), transparent 62%)',
          }}
        />
        {/* Fine grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(closest-side at 50% 30%, #000 40%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(closest-side at 50% 30%, #000 40%, transparent 100%)',
          }}
        />

        <div className="container-page relative grid gap-14 py-18 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-28">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-gold-300">
                <span aria-hidden className="inline-block h-px w-6 bg-gold-300/60" />
                Est. {school.founded} · {school.address.city}
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] font-semibold tracking-tight sm:text-6xl lg:text-[4.25rem]">
                Bringing quality{' '}
                <br />
                education{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-gold-300">closer</span>
                  <svg
                    aria-hidden
                    viewBox="0 0 240 14"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 z-0 h-3 w-full text-gold-400/50"
                  >
                    <path
                      d="M2 9C40 3 92 2 238 6"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {school.legalName} is a private, Christ-centered Catholic school
                on Osmeña Avenue in {school.address.city},{' '}
                {school.address.province}. From Kindergarten to a bachelor’s
                degree, we walk with every student toward an education that is
                academically excellent, socially aware, and deeply human.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/admissions" className="btn btn-gold">
                  Apply for admission
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  to="/integrated-school"
                  className="btn btn-outline text-white/90 hover:text-white"
                >
                  Explore the school
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/12 pt-8">
                <div>
                  <dt className="text-xs tracking-wide text-white/50 uppercase">
                    Founded
                  </dt>
                  <dd className="mt-1.5 font-display text-3xl font-semibold text-gold-200">
                    {school.founded}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs tracking-wide text-white/50 uppercase">
                    Grade levels
                  </dt>
                  <dd className="mt-1.5 font-display text-3xl font-semibold">
                    <CountUp to={14} />
                    <span className="text-white/40"> K–12</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs tracking-wide text-white/50 uppercase">
                    Programmes
                  </dt>
                  <dd className="mt-1.5 font-display text-3xl font-semibold">
                    <CountUp to={programs.length} />
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Seal card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} y={30}>
              <div className="relative mx-auto max-w-sm">
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold-400/25 via-transparent to-forest-400/25 blur-2xl"
                />
                <div className="grain relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.045] p-10 backdrop-blur-sm">
                  <div className="flex flex-col items-center">
                    <Seal className="h-44 w-44 text-gold-300" />
                    <p className="mt-7 font-display text-center text-lg leading-snug font-medium text-white/90">
                      The open book. The rising sun.
                      <br />
                      The eight core values.
                    </p>
                    <div className="mt-6 h-px w-16 bg-gold-300/40" />
                    <p className="mt-5 text-center text-xs tracking-[0.2em] text-white/55 uppercase">
                      Christ-centered · Academically excellent ·
                      Socially aware
                    </p>
                  </div>
                </div>

                {/* Floating accreditation chips */}
                <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/12 bg-brand-900/90 px-4 py-3 shadow-lift backdrop-blur sm:block">
                  <p className="text-[0.65rem] tracking-[0.16em] text-white/50 uppercase">
                    Certified
                  </p>
                  <p className="font-display text-lg font-semibold text-gold-200">
                    ISO 9001:2008
                  </p>
                </div>
                <div className="absolute -top-5 -right-3 hidden rounded-2xl border border-white/12 bg-brand-900/90 px-4 py-3 shadow-lift backdrop-blur sm:block">
                  <p className="text-[0.65rem] tracking-[0.16em] text-white/50 uppercase">
                    Athletics
                  </p>
                  <p className="font-display text-lg font-semibold text-white">
                    The Titans
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Marquee of programmes */}
        <div className="relative border-y border-white/10 bg-brand-900/40 py-4">
          <div className="flex overflow-hidden">
            <div className="animate-marquee-slow pause-on-hover flex shrink-0">
              {[0, 1].map((dup) => (
                <ul key={dup} className="flex shrink-0 items-center gap-10 pr-10">
                  {clusters.map((c) => (
                    <li
                      key={c.label}
                      className="flex shrink-0 items-center gap-10 text-xs font-semibold tracking-[0.16em] whitespace-nowrap text-white/45 uppercase"
                    >
                      {c.label}
                      <span aria-hidden className="text-gold-400/60">
                        ◆
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- VISION & MISSION */}
      <section className="relative py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who we are"
            title={
              <>
                One school, from the first
                <br className="hidden sm:block" /> classroom to the capstone.
              </>
            }
            lead={philosophy}
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="card group h-full overflow-hidden">
                <div className="h-1.5 w-full bg-gradient-to-r from-brand-700 to-brand-400" />
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-50 text-brand-700">
                      <Sunrise className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-xs font-bold tracking-[0.2em] text-brand-700 uppercase">
                      Our Vision
                    </h3>
                  </div>
                  <p className="mt-6 font-display text-xl leading-relaxed text-ink sm:text-[1.4rem]">
                    “{vision}”
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="card group h-full overflow-hidden">
                <div className="h-1.5 w-full bg-gradient-to-r from-forest-700 to-forest-400" />
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-50 text-forest-700">
                      <BookOpen className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-xs font-bold tracking-[0.2em] text-forest-700 uppercase">
                      Our Mission
                    </h3>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-ink-soft">
                    {mission}
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- PATHWAYS */}
      <section className="relative overflow-hidden bg-paper-dim py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Two pathways, one community"
            title="Where will you study with us?"
            lead="Whether your child is starting Kindergarten or finishing a degree, they belong to the same campus, the same values, and the same Titans spirit."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {pathways.map((p, i) => (
              <Reveal key={p.to} delay={i * 0.08}>
                <Link
                  to={p.to}
                  className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-ink/8 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-10"
                >
                  <div
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1.5 ${
                      p.tone === 'forest'
                        ? 'bg-gradient-to-r from-forest-700 to-forest-400'
                        : 'bg-gradient-to-r from-brand-700 to-brand-400'
                    }`}
                  />
                  <span
                    className={`eyebrow ${
                      p.tone === 'forest' ? 'text-forest-700' : 'text-brand-700'
                    }`}
                  >
                    {p.eyebrow}
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-ink-soft">{p.body}</p>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="rounded-full border border-ink/10 bg-paper px-3.5 py-1.5 text-xs font-medium text-ink-soft"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                    Learn more
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ PILLARS */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                align="left"
                eyebrow="Why CSAV"
                title="A school built around the whole person."
                lead="The founder's dream was simple: quality education, brought close. Everything we do since 2011 has been measured against that."
              />
              <Reveal delay={0.15}>
                <div className="mt-9">
                  <Link to="/about" className="btn btn-primary">
                    Read our history
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 0.07}>
                  <article className="card h-full p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      <pillar.icon className="h-5.5 w-5.5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{pillar.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {pillar.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- FACTS */}
      <section className="grain relative overflow-hidden bg-forest-900 py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(700px 380px at 10% 0%, rgba(223,167,51,0.20), transparent 62%), radial-gradient(700px 420px at 90% 100%, rgba(63,128,103,0.35), transparent 62%)',
          }}
        />
        <div className="container-page relative">
          <SectionHeading
            tone="light"
            eyebrow="Trust, earned"
            title="Recognised by the institutions that matter."
            lead="Quality in Philippine basic and higher education is measured by more than classrooms. Here is where CSAV stands."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact, i) => (
              <Reveal key={fact.label} delay={i * 0.07}>
                <article className="h-full rounded-2xl border border-white/12 bg-white/[0.05] p-7 backdrop-blur-sm transition hover:border-gold-300/40 hover:bg-white/[0.09]">
                  <fact.icon className="h-7 w-7 text-gold-300" aria-hidden />
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {fact.label}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{fact.note}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold-300" aria-hidden />
                Complete K–12 implementation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold-300" aria-hidden />
                First 62 BEED graduates in 2015
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold-300" aria-hidden />
                NOPSSCEA · PRISAA · UNIGAMES
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- TIMELINE */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our story"
            title="From a philanthropist's dream to a thriving legacy."
            lead="A seed of good intent, planted in 2011, that has grown into a full basic-and-higher-education institution."
          />

          <div className="relative mt-16">
            <div
              aria-hidden
              className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-brand-200 via-gold-300 to-forest-300 md:left-1/2"
            />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={0.05}>
                  <div
                    className={`relative pl-10 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${
                      i % 2 === 0 ? '' : 'md:[direction:rtl]'
                    }`}
                  >
                    <span
                      aria-hidden
                      className="absolute top-2 left-0 grid h-3.5 w-3.5 place-items-center rounded-full bg-brand-700 ring-4 ring-paper md:left-1/2 md:-translate-x-1/2"
                    />
                    <div className={i % 2 === 0 ? 'md:pr-2 md:text-right' : 'md:pl-2'}>
                      <span className="font-display text-sm font-bold tracking-[0.18em] text-gold-600 uppercase">
                        {item.year}
                      </span>
                      <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16">
              <Divider />
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- CTA CLOSER */}
      <section className="pb-24 sm:pb-32">
        <div className="container-page">
          <Reveal>
            <div className="grain relative overflow-hidden rounded-4xl bg-brand-700 px-8 py-14 text-center text-white sm:px-16 sm:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background:
                    'radial-gradient(600px 300px at 20% 0%, rgba(223,167,51,0.35), transparent 60%), radial-gradient(600px 340px at 90% 100%, rgba(63,128,103,0.35), transparent 60%)',
                }}
              />
              <div className="relative mx-auto max-w-2xl">
                <Seal className="mx-auto h-20 w-20 text-gold-300" />
                <h2 className="mt-7 font-display text-3xl leading-tight font-semibold sm:text-4xl">
                  Enrolment is open. Your seat is waiting.
                </h2>
                <p className="mt-5 text-white/75">
                  Visit us at Osmeña Avenue, or send a message and our admissions
                  team will get back to you with the next steps for your child.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <Link to="/admissions" className="btn btn-gold">
                    Start an application
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-outline text-white/90 hover:text-white"
                  >
                    Contact the registrar
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
