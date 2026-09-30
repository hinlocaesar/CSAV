/* Test-only harness: boots a jsdom window then runs the smoke bundle. */
import { JSDOM } from 'jsdom'
import { pathToFileURL } from 'node:url'

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost:5173/',
  pretendToBeVisual: true,
})

const { window } = dom

class MockIntersectionObserver {
  constructor(callback) {
    this.root = null
    this.rootMargin = ''
    this.thresholds = []
    // Report an immediate intersection, mimicking content already on screen.
    queueMicrotask(() =>
      callback([{ isIntersecting: true, target: null }], this),
    )
  }
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
})
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: MockResizeObserver,
})
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener() {},
  removeListener() {},
  addEventListener() {},
  removeEventListener() {},
  dispatchEvent: () => false,
})
window.scrollTo = () => {}
window.open = () => null

for (const key of [
  'window',
  'document',
  'navigator',
  'HTMLElement',
  'HTMLInputElement',
  'HTMLSelectElement',
  'HTMLTextAreaElement',
  'Element',
  'Node',
  'Event',
  'CustomEvent',
  'MouseEvent',
  'getComputedStyle',
  'requestAnimationFrame',
  'cancelAnimationFrame',
  'MutationObserver',
  'SVGElement',
  'DOMParser',
  'localStorage',
  'location',
  'IntersectionObserver',
  'ResizeObserver',
  'requestIdleCallback',
  'cancelIdleCallback',
]) {
  Object.defineProperty(globalThis, key, {
    writable: true,
    configurable: true,
    value: window[key] ?? window,
  })
}

globalThis.IS_REACT_ACT_ENVIRONMENT = true

const { runRoutes } = await import(pathToFileURL(process.argv[2]).href)

const routes = [
  '/',
  '/about',
  '/integrated-school',
  '/college',
  '/admissions',
  '/contact',
  '/this-route-does-not-exist',
]

const { results, failures } = await runRoutes(routes)
console.log(results.join('\n'))
console.log(failures === 0 ? '\nAll routes rendered.' : `\n${failures} route(s) failed.`)
process.exit(failures === 0 ? 0 : 1)
