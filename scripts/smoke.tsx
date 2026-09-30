/* Temporary smoke test: mounts the app in jsdom for every route and reports
 * any render-time error. Not part of the shipped site. */
import { act } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/App'

export async function runRoutes(routes: string[]) {
  const results: string[] = []
  let failures = 0

  const assertions: Record<string, string[]> = {
    '/': [
      'Bringing quality education closer',
      'Osmeña Avenue',
      'ISO 9001:2008',
      'Victorias City',
      'Titans',
    ],
    '/about': [
      'quality, holistic basic education',
      'leading basic educational institutions',
      'total growth of a human being',
      'eight core values',
      'forever more',
    ],
    '/integrated-school': [
      'Government Recognition',
      'Kinder 1',
      'Grade 12',
      'Work Immersion',
      'Humanities & Social Sciences',
    ],
    '/college': [
      'Bachelor of Elementary Education',
      'Bachelor of Science in Nursing',
      'Bachelor of Science in Criminology',
      'Bachelor of Science in Tourism Management',
    ],
    '/admissions': [
      'Birth certificate',
      'Parents / guardian ID',
      '399-2830',
      'enrolment season',
    ],
    '/contact': [
      'colegiodestaanadevictorias@gmail.com',
      'Osmeña Avenue',
      'Roxas Street',
      '6119',
    ],
    '/this-route-does-not-exist': ['404'],
  }

  for (const route of routes) {
    window.location.hash = route
    const container = document.createElement('div')
    document.body.appendChild(container)

    try {
      const root = createRoot(container)
      await act(async () => {
        root.render(<App />)
      })

      const heading = container
        .querySelector('h1')
        ?.textContent?.replace(/\s+/g, ' ')
        .trim()
      const links = container.querySelectorAll('a').length
      const text = (container.textContent ?? '').replace(/\s+/g, ' ').trim()

      if (!heading) throw new Error('no <h1> rendered')
      if (text.length < 200) throw new Error(`suspiciously little text: ${text.length}`)

      const missing = (assertions[route] ?? []).filter(
        (needle) => !text.includes(needle),
      )
      if (missing.length > 0)
        throw new Error(`missing expected content: ${missing.join('  |  ')}`)

      results.push(
        `PASS  ${route.padEnd(22)} links=${String(links).padStart(3)}  chars=${String(text.length).padStart(5)}  h1="${heading}"`,
      )
      await act(async () => {
        root.unmount()
      })
    } catch (thrown) {
      failures += 1
      const inner =
        thrown instanceof AggregateError ? thrown.errors : [thrown]
      const detail = inner
        .map((err) =>
          err instanceof Error
            ? `${err.name}: ${err.message}\n${(err.stack ?? '')
                .split('\n')
                .slice(0, 8)
                .join('\n')}`
            : `non-Error: ${JSON.stringify(err) ?? String(err)}`,
        )
        .join('\n---\n')
      results.push(`FAIL  ${route} (${inner.length} error(s)) ->\n${detail}`)
    }
    container.remove()
  }

  return { results, failures }
}
