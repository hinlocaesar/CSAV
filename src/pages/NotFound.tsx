import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'
import { Seal } from '@/components/Seal'
import { navLinks, school } from '@/lib/site'

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[70vh] items-center overflow-hidden bg-brand-950 py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(800px 420px at 15% 0%, rgba(223,167,51,0.26), transparent 60%), radial-gradient(700px 440px at 90% 100%, rgba(63,128,103,0.28), transparent 62%)',
        }}
      />
      <div className="container-page relative text-center">
        <Seal className="mx-auto h-24 w-24 text-gold-300" />
        <p className="mt-8 font-display text-6xl font-semibold text-gold-200 sm:text-7xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
          This page has wandered off campus.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-white/70">
          We could not find the page you were looking for at {school.name}. Try
          one of the sections below, or head back to the home page.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-gold-300 hover:text-gold-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-gold">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to home
          </Link>
          <Link to="/contact" className="btn btn-outline text-white/90 hover:text-white">
            <Compass className="h-4 w-4" aria-hidden />
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
