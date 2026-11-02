/**
 * Motion Design Tokens
 * Single source of truth for all animation values across the portfolio.
 * Import these constants everywhere — never hard-code durations or easings.
 */

// Easing curves
export const EASE_OUT   = [0.22, 1, 0.36, 1] as const;    // primary entrance
export const EASE_INOUT = [0.65, 0, 0.35, 1] as const;    // state transitions
export const EASE_IN    = [0.55, 0, 1, 0.45] as const;    // exits

// Durations (seconds)
export const DUR = {
  short:  0.3,   // micro-interactions
  med:    0.75,  // element reveals
  long:   1.2,   // section / page transitions
} as const;

// Stagger between sibling elements (seconds)
export const STAGGER = 0.1;

// Entrance offset distances (px) — always translate, never position
export const OFFSET = {
  sm: 40,
  md: 60,
  lg: 80,
} as const;

// Max rotation on entrance (degrees)
export const MAX_ROTATE = 6;

// Max perspective tilt on hover (degrees)
export const MAX_TILT = 8;

// ScrollTrigger defaults
export const ST_DEFAULTS = {
  start: "top 85%",
  end:   "top 20%",
} as const;

// GSAP ease strings (for use directly in gsap.to / gsap.from)
export const GSAP_EASE_OUT   = "power3.out";
export const GSAP_EASE_INOUT = "power2.inOut";
export const GSAP_EASE_IN    = "power3.in";
