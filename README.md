# Colegio de Sta. Ana de Victorias — Website

Official website for **Colegio de Sta. Ana de Victorias, Inc. (CSAV)**, a private
Christ-centered Catholic school on Osmeña Avenue in Victorias City, Negros
Occidental, Philippines.

> *Bringing Quality Education Closer*

## Sections

| Route                    | What it covers                                                        |
| ------------------------ | --------------------------------------------------------------------- |
| `/`                      | Hero, Vision & Mission, the two pathways, trust markers, history, CTA  |
| `/about`                 | Founder, philosophy / vision / mission, timeline, seal, Alma Mater     |
| `/integrated-school`     | Grade levels K–12, SHS strand picker, student life                     |
| `/college`               | Degree programmes, filterable by cluster                               |
| `/admissions`            | Five-step process, requirements per level, practical notes, FAQ        |
| `/contact`               | Contact cards, enquiry form, OpenStreetMap campus map                 |

Routing uses `HashRouter` deliberately, so the built site works unchanged from a
GitHub Pages project path, a subdirectory, or `file://` — no server rewrite rules
required.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173  (hot module reload)
```

Other scripts:

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
npm run typecheck  # tsc --noEmit
npm run smoke      # mount every route in jsdom and assert key content
```

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **Tailwind CSS v4** — design tokens live in `src/index.css` under `@theme`
- **React Router 7** (`HashRouter`)
- **Lucide React** for icons

Scroll-reveal and the animated hero counters are implemented with a ~40-line
`IntersectionObserver` hook (`src/lib/useInView.ts`) instead of an animation
library. Dropping the library cut roughly 29 kB gzipped from the bundle.

## Editing the content

All copy and data live in one file: **`src/lib/site.ts`**. Name, address,
contact details, Vision, Mission, Philosophy, the Alma Mater, the timeline,
programmes, grade levels, strands, admission steps, requirements and FAQs are
all there — no need to hunt through components to change a phone number.

## Colour palette

Derived from the school's colours — red, yellow, green — tuned to a warmer,
more legible range:

| Token       | Used for                                    |
| ----------- | ------------------------------------------- |
| `brand-*`   | Liturgical maroon — primary actions, headers |
| `gold-*`    | School gold — accents, highlights, markers   |
| `forest-*`  | Deep evergreen — secondary sections          |
| `paper`     | Warm off-white page background               |

## Deploying to GitHub Pages

The `Deploy site to GitHub Pages` workflow runs on every push to `main`. It
installs, type-checks, smoke-tests and builds **before** publishing, so a broken
build can never reach the live site.

> **Current status: waiting on one manual step.** GitHub Pages is not yet
> enabled for this repository, so the workflow fails at
> `actions/configure-pages` with everything before it green. Enabling Pages is a
> repository setting that only the owner can change:
>
> 1. Open **Settings → Pages** in this repository.
> 2. Under **Build and deployment → Source**, choose **GitHub Actions**.
> 3. Re-run the workflow from the **Actions** tab.
>
> The site will then be live at **https://hinlocaesar.github.io/CSAV/**
>
> Until that is done, the working link is the repository itself:
> **https://github.com/hinlocaesar/CSAV**

## Content sources

School facts are drawn from published school material: the official Vision,
Mission, Philosophy and Alma Mater; the documented history of the college and
Integrated School; the DepEd Government Recognition and ISO 9001:2008
certification; the school seal symbolism; and the school's public programme
listing.

Two details are inferred rather than published and should be confirmed with the
registrar before launch:

- **Email address** — `colegiodestaanadevictorias@gmail.com`
- **Exact programme list** — the clusters come from the school's own enrolment
  post; individual degree titles in `programs` mix confirmed programmes (BEED,
  BSTM, BSOA, BCrim, BSN) with the rest of their clusters. Verify before going live.

Also worth confirming: tuition and fee figures (deliberately not published here),
scholarship availability, and registrar office hours.

## Notes

- The contact form has no backend — it opens the visitor's email client with the
  message pre-filled to the school's address.
- The map is an OpenStreetMap embed, so no API key is required.
- Reduced-motion preferences are respected throughout.
