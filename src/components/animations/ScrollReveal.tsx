"use client";

/**
 * ScrollReveal — reusable scroll-triggered reveal wrapper.
 *
 * Adds GSAP initial hidden state AFTER hydration (so no-JS users see content).
 * Animates children in when they enter the viewport.
 * Respects prefers-reduced-motion — instantly shows content.
 *
 * Usage:
 *   <ScrollReveal delay={0.1} from="bottom">
 *     <p>Content</p>
 *   </ScrollReveal>
 */

import { useRef, useEffect, ReactNode } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { GSAP_EASE_OUT, DUR, OFFSET } from "@/lib/motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "bottom" | "left" | "right" | "top";
  distance?: number;
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  from = "bottom",
  distance = OFFSET.md,
  duration = DUR.med,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;

    let gsap: typeof import("gsap").gsap;
    let ScrollTrigger: (typeof import("gsap/ScrollTrigger"))["ScrollTrigger"];
    let ctx: ReturnType<typeof gsap.context>;
    let cancelled = false;

    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      const element = ref.current;
      if (cancelled || !element) return;

      gsap = gsapMod.gsap;
      ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const fromVars: Record<string, number> = { opacity: 0 };
      if (from === "bottom") fromVars.y = distance;
      if (from === "top")    fromVars.y = -distance;
      if (from === "left" || from === "right") {
        if (window.matchMedia("(max-width: 1399px)").matches) {
          fromVars.y = distance;
        } else {
          fromVars.x = from === "left" ? -distance : distance;
        }
      }

      ctx = gsap.context(() => {
        gsap.from(ref.current!, {
          ...fromVars,
          duration,
          delay,
          ease: GSAP_EASE_OUT,
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once,
          },
        });
      }, element);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [reduced, from, distance, duration, delay, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
