# Caleb Oluwapelumi — Portfolio v2.0

Personal portfolio for Caleb Oluwapelumi, Tech & Media Strategist.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.3.8 (App Router, React 19) |
| Styling | Tailwind CSS v4 |
| Fonts | Cinzel + Outfit via `next/font/google` |
| Language | TypeScript |

## Animation Stack (v2.0)

| Need | Tool | Reason |
|---|---|---|
| Scroll-triggered reveals, pinned sections, timelines | **GSAP + ScrollTrigger** | Most capable scroll choreography engine; great React integration via `gsap.context()` cleanup |
| Page & shared-element transitions | **React 19 `<ViewTransition>`** | Zero extra dependency — built into React 19 / Next.js 16; activates automatically on App Router navigations |
| Hover, focus, micro-interactions | **CSS transitions & keyframes** | No JS overhead for simple effects |
| Virtual smooth scrolling | **Not added** — GSAP ScrollTrigger + native scroll is sufficient; Lenis was evaluated and skipped to avoid pinned-section complexity |

### Key architecture decisions

- `ssr: false` dynamic imports are **only** used inside Client Components (`"use client"`), never in Server Components — required by Next.js 16 App Router.
- GSAP is lazily imported inside `useEffect` via `await import("gsap")` — never in SSR path.
- All GSAP contexts are cleaned up via `ctx.revert()` on unmount.
- `gsap.matchMedia()` switches desktop/mobile behaviour on resize and rotation.
- `prefers-reduced-motion` disables all GSAP and CSS transitions instantly via a React hook + global CSS rule.

## Motion Token System

All animation values are defined once in `src/lib/motion.ts`:

```ts
EASE_OUT   = [0.22, 1, 0.36, 1]   // entrance easing
EASE_INOUT = [0.65, 0, 0.35, 1]   // state transitions
DUR = { short: 0.3, med: 0.75, long: 1.2 }  // seconds
STAGGER = 0.1                      // between siblings
OFFSET  = { sm: 40, md: 60, lg: 80 }  // px entrance distances
```

## File Structure

```
src/
  lib/
    motion.ts              — motion tokens (single source of truth)
    useReducedMotion.ts    — React hook for prefers-reduced-motion
  components/
    ClientOnlyWrapper.tsx  — all ssr:false dynamic() imports (Client Component)
    GlobalClientLayers.tsx — cursor + scroll progress (Client Component)
    Navbar.tsx             — animated underlines, focus-trapped mobile menu
    PersonalBrandHeader.tsx — FROZEN (hero section, no changes)
    animations/
      ScrollReveal.tsx     — GSAP scroll-triggered reveal wrapper
      SplitText.tsx        — word-by-word heading reveal (accessible)
      ParallaxLayer.tsx    — transform-only scroll parallax
      MagneticButton.tsx   — GSAP quickTo magnetic effect
    cursor/
      CustomCursor.tsx     — desktop fine-pointer only
    sections/
      ServicesSection.tsx  — pinned chapter experience (desktop) + stacked (mobile)
      FeaturedProjects.tsx — horizontal scroll showcase + mobile swipe carousel
      PortfolioShowcase.tsx — asymmetric category card grid
    ui/
      ScrollProgress.tsx   — GSAP-driven top progress bar
      PageTransitionWrapper.tsx — React ViewTransition + a11y announcer
```

## Hero Protection

`PersonalBrandHeader.tsx` is frozen. No edits are made to it or its section wrapper.
All animation work begins at the tagline section immediately below.

## Accessibility

- `prefers-reduced-motion` — all GSAP and CSS animations disabled, content instantly visible
- Custom cursor — only on `(hover: hover) and (pointer: fine)` devices
- Magnetic buttons — disabled under reduced-motion
- `SplitText` — `aria-label` on container, spans are `aria-hidden`
- Mobile menu — focus trapped while open, closes on `Escape`
- All cards — visible `:focus-visible` ring (3px `#22B8B0`)
- `<ViewTransition>` — durations set to 0s under reduced-motion via CSS

## Dev

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint
```
