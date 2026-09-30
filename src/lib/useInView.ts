import { useEffect, useRef, useState, type RefObject } from 'react'

type Options = {
  /** Stop observing after the first intersection. */
  once?: boolean
  /** Margin around the root, e.g. '-60px' to trigger slightly late. */
  margin?: string
}

/**
 * Minimal IntersectionObserver hook.
 *
 * Deliberately hand-rolled rather than pulled from an animation library: the
 * reveal-on-scroll effect is the only thing the site needs from one, and doing
 * it this way costs well under 1 kB of JavaScript.
 */
export function useInView<T extends Element = HTMLDivElement>(
  options: Options = {},
): [RefObject<T | null>, boolean] {
  const { once = true, margin = '0px' } = options
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    // Nothing to observe, or no support: show the content rather than hide it.
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.disconnect()
          } else if (!once) {
            setInView(false)
          }
        }
      },
      { rootMargin: margin, threshold: 0.01 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, margin])

  return [ref, inView]
}
