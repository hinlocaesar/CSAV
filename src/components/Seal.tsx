import { useId } from 'react'

type SealProps = {
  className?: string
  /** Render the version with wordmark beneath the octagon. */
  withWordmark?: boolean
  title?: string
}

/**
 * CSAV seal mark.
 *
 * Redesigned as clean geometry while keeping the symbolism documented by
 * the school: the octagon (eight core values), the rising sun (a bright
 * future), and the open book (knowledge and quality Catholic education).
 */
export function Seal({ className = 'h-16 w-16', withWordmark = false, title = 'Colegio de Sta. Ana de Victorias' }: SealProps) {
  const gradientId = `csav-sun-${useId().replace(/:/g, '')}`

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>

      <defs>
        <linearGradient id={gradientId} x1="50" y1="18" x2="50" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* Octagon — the eight core values */}
      <path
        d="M50 3.5 78.4 11.6 96.5 50 78.4 88.4 50 96.5 21.6 88.4 3.5 50 21.6 11.6Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M50 10.5 74.2 17.3 89.5 50 74.2 82.7 50 89.5 25.8 82.7 10.5 50 25.8 17.3Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.35"
        strokeLinejoin="round"
      />

      {/* Rising sun */}
      <circle cx="50" cy="31" r="8.5" fill={`url(#${gradientId})`} />
      <g stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" opacity="0.9">
        <path d="M50 15.5v4" />
        <path d="m35.6 21.6 2.9 2.9" />
        <path d="m64.4 21.6-2.9 2.9" />
      </g>

      {/* Open book */}
      <g
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M50 52.5C45.5 47.6 36.4 45 27 45v25.5c9.4 0 18.5 2.6 23 7.5Z" />
        <path d="M50 52.5C54.5 47.6 63.6 45 73 45v25.5c-9.4 0-18.5 2.6-23 7.5Z" />
        <path d="M50 52.5V78" strokeWidth="2.6" />
      </g>

      {withWordmark && (
        <text
          x="50"
          y="112"
          textAnchor="middle"
          className="fill-current"
          style={{ font: '700 11px "Plus Jakarta Sans", sans-serif', letterSpacing: '0.14em' }}
        >
          CSAV
        </text>
      )}
    </svg>
  )
}

/** Compact monogram used in the navigation bar and footer. */
export function Mark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="CSAV"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>CSAV</title>
      <rect x="4" y="4" width="56" height="56" rx="16" fill="currentColor" />
      <g stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 26c-2.6-3-6.6-4.5-10.5-4.5v15c3.9 0 7.9 1.5 10.5 4.5Z" />
        <path d="M32 26c2.6-3 6.6-4.5 10.5-4.5v15c-3.9 0-7.9 1.5-10.5 4.5Z" />
      </g>
      <circle cx="32" cy="14.5" r="3.4" fill="currentColor" />
    </svg>
  )
}
