import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { useInView } from '@/lib/useInView'

type RevealProps = {
  children: ReactNode
  delay?: number
  /** Distance in px to travel while fading in. */
  y?: number
  className?: string
  /** Set to `li` (or another element) when Reveal sits inside a list. */
  as?: 'div' | 'li' | 'article' | 'section'
}

/** Fades content up the first time it scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ once: true, margin: '-60px' })

  const style = {
    transitionDelay: `${delay}s`,
    '--reveal-y': `${y}px`,
  } as CSSProperties

  return (
    <Tag
      ref={ref as never}
      style={style}
      data-reveal={inView ? 'in' : 'out'}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  )
}

/** Counts up to a value once visible. */
export function CountUp({
  to,
  suffix = '',
  prefix = '',
  decimals = 0,
}: {
  to: number
  suffix?: string
  prefix?: string
  decimals?: number
}) {
  const [ref, inView] = useInView<HTMLSpanElement>({ once: true, margin: '-40px' })
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const duration = 1400
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(to * eased)
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to])

  return (
    <span ref={ref as never}>
      {prefix}
      {value.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}
