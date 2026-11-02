"use client";

/**
 * ParallaxLayer — scroll-linked depth movement.
 * Uses transform only (no layout properties). Cleanup on unmount.
 * Disabled under prefers-reduced-motion and on touch devices.
 */

import { useRef, useEffect, ReactNode } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  speed?: number; // 0.1 = subtle, 0.5 = noticeable, negative = opposite direction
}

export default function ParallaxLayer({
  children,
  className = "",
  speed = 0.15,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    // Disable on touch devices and reduced motion
    if (reduced) return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    if (!ref.current) return;

    let ctx: ReturnType<Awaited<typeof import("gsap")>["gsap"]["context"]>;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.to(ref.current!, {
          yPercent: speed * -100,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current!,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }, ref);
    })();

    return () => ctx?.revert();
  }, [reduced, speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
