"use client";

/**
 * SplitText — word-by-word animated heading reveal.
 *
 * Accessibility: aria-label on the container preserves the full text for
 * screen readers. Individual word spans are aria-hidden.
 *
 * Usage:
 *   <SplitText tag="h2" className="text-4xl font-bold">
 *     I help businesses grow.
 *   </SplitText>
 */

import { useRef, useEffect, ElementType } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { GSAP_EASE_OUT, DUR, STAGGER } from "@/lib/motion";

interface SplitTextProps {
  children: string;
  tag?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  triggerStart?: string;
}

export default function SplitText({
  children,
  tag: Tag = "h2",
  className = "",
  delay = 0,
  stagger = STAGGER,
  triggerStart = "top 85%",
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const words = children.split(/(\s+)/);

  useEffect(() => {
    if (reduced || !ref.current) return;

    let ctx: ReturnType<Awaited<typeof import("gsap")>["gsap"]["context"]>;
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const element = ref.current;
      if (cancelled || !element) return;

      gsap.registerPlugin(ScrollTrigger);

      const spans = element.querySelectorAll("[data-word]");

      ctx = gsap.context(() => {
        gsap.from(spans, {
          opacity: 0,
          y: 20,
          duration: DUR.med,
          stagger,
          delay,
          ease: GSAP_EASE_OUT,
          scrollTrigger: {
            trigger: element,
            start: triggerStart,
            once: true,
          },
        });
      }, element);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [reduced, delay, stagger, triggerStart]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TagAny = Tag as any;

  return (
    <TagAny ref={ref} className={className} aria-label={children}>
      {words.map((word, i) =>
        /^\s+$/.test(word) ? (
          word
        ) : (
          <span
            key={i}
            data-word
            aria-hidden="true"
            style={{ display: "inline-block" }}
          >
            {word}
          </span>
        )
      )}
    </TagAny>
  );
}
