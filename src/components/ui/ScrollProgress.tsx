"use client";

/**
 * ScrollProgress — thin progress bar at the top of the viewport.
 * Uses GSAP ScrollTrigger scrub so it never fights scroll events.
 * Falls back to CSS animation-timeline where supported.
 */

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !barRef.current) return;

    let ctx: ReturnType<Awaited<typeof import("gsap")>["gsap"]["context"]>;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.to(barRef.current!, {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1,
          },
        });
      });
    })();

    return () => ctx?.revert();
  }, [reduced]);

  if (reduced) return null;

  return (
    <div
      ref={barRef}
      className="scroll-progress-bar"
      aria-hidden="true"
      style={{ width: "100%" }}
    />
  );
}
