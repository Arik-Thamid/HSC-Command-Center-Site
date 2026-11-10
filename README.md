# HSC Command Center: marketing site (Next.js)

Source project for the HSC Command Center product site. Next.js (App Router) + TypeScript.
This is the source code only, with no build output.

## Run it

    npm install
    npm run dev          # http://localhost:3000
    npm run build && npm start

Requires Node 18.18 or newer.

## Before you go live

1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your real address.
   It drives the canonical link, share image URLs, `robots.txt` and `sitemap.xml`.
2. Add real student reviews in `src/content/site.ts` (`REVIEWS`). While it is empty, a short invitation is shown.
3. Re-check the copy against the live app, especially Daily Planner and Revision (their screens were not in the source recording).

## Where things are

    src/
      app/
        layout.tsx          metadata, fonts (next/font), theme init, JSON-LD
        page.tsx            page composition (server components)
        globals.css         design tokens, light/dark themes, responsive rules
        robots.ts, sitemap.ts
      components/           one file per section; client components only where needed
        AppSim.tsx          hero: interactive recreation of the app (sample data)
        TourViewer.tsx      tabbed tour of real screenshots (auto-plays)
        VideoPlayer.tsx     demo video with chapter buttons
        TryDemo.tsx         "try the idea" checklist with confetti
        SiteEffects.tsx     theme, menu, scroll motion, reveals, loader, pointer effects
      content/site.ts       ALL editable text and data (nav, features, tour, tutorial, FAQ, reviews, video chapters)
      lib/
        app-sim.js          the app recreation (framework-independent, returns a cleanup function)
        effects.js          page-wide DOM effects (framework-independent, returns a cleanup function)
    public/
      img/*.webp            real app screenshots (2x)
      media/demo.mp4        demo video with soundtrack
      icons/, favicon.*, og-image.png, site.webmanifest

## Editing

- **Text:** everything lives in `src/content/site.ts`. In tutorial steps, `<b>word</b>` makes bold text.
- **Screenshots:** replace files in `public/img/` (same names, 2184x980). Names are referenced by `TOUR` and `FEATURES`.
- **Video:** replace `public/media/demo.mp4`, then update `VIDEO_CHAPTERS` (start times in seconds).
- **Colours:** CSS variables at the top of `src/app/globals.css`.
- **Primary links** use `SITE.appUrl` in `src/content/site.ts`.

## Deploy

Vercel: import the repository (framework preset: Next.js). Add `NEXT_PUBLIC_SITE_URL` in the project's environment variables.
Any Node host works with `npm run build` and `npm start`.

## Tech stack and where each library is used

| Library | Used for |
| --- | --- |
| Next.js 15 (App Router) + TypeScript | pages, metadata, fonts (`next/font`), `robots.ts`, `sitemap.ts`, `next/image` |
| Tailwind CSS v4 | utility classes on new components (`IconBadge`, icon spacing). Only the theme and utilities layers are imported, with no preflight reset, so the site's hand-written base styles in `globals.css` stay intact |
| Motion (`motion/react`) | tour panel transitions (`AnimatePresence`), animated progress bar, tap feedback and confetti in the "Try the idea" demo, with `MotionConfig reducedMotion="user"` |
| GSAP + ScrollTrigger | scroll-scrubbed scenes in `ScrollScenes.tsx`: hero window scale, story fragments falling into place, "How it works" timeline, background orb parallax |
| Lenis | smooth scrolling, wired to ScrollTrigger; disabled when the visitor prefers reduced motion; nested scroll areas use `data-lenis-prevent` |
| Lucide React | icons on feature cards, button arrows, theme toggle (Sun/Moon), video chapter chips |

## Notes

- Facts shown (free, no account, saves in browser, no cross-device sync, backup and restore) come from the product owner
  and the app's own screens. Numbers inside the hero demo and floating cards are labelled samples.
- Respects reduced-motion settings; tabs, tutorial and demo are keyboard accessible.
- Motion is isolated: if the GSAP/Lenis setup ever throws, `ScrollScenes` logs the error and shows the static layout.

## Verification status (please read)

This project was written and tested in an environment without internet access, so `npm install` and `next build`
were **not** run there. What was verified: every file compiles, the full page renders on the server and hydrates in a
real browser without console errors, the interactions (hero app demo, tour, checklist, video chapters, tutorial, FAQ, theme
and menu) work on desktop and phone widths, and the Tailwind v4 stylesheet compiles with the project's CSS. The Motion,
GSAP, Lenis and Lucide calls were exercised against stand-ins, so their real animation behaviour and TypeScript types are
unverified. If `npm run build` reports an error, it should be small. Send me the message and I will fix it.
# HSC-Command-Center-Site
