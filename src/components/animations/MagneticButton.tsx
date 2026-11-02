"use client";

/**
 * MagneticButton — CTA button with magnetic mouse-follow effect.
 * Desktop (hover: hover) and (pointer: fine) only.
 * Wraps any element. Cleanup on unmount.
 */

import { useRef, useEffect, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number; // 0–1, default 0.3
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFine) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let quickX: ((v: number) => void) | null = null;
    let quickY: ((v: number) => void) | null = null;

    (async () => {
      const { gsap } = await import("gsap");
      quickX = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
      quickY = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });
    })();

    function onMouseMove(e: MouseEvent) {
      if (!quickX || !quickY) return;
      const rect = el!.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      quickX((e.clientX - cx) * strength);
      quickY((e.clientY - cy) * strength);
    }

    async function onMouseLeave() {
      if (!quickX || !quickY) return;
      const { gsap } = await import("gsap");
      gsap.to(el!, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
    }

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`magnetic-btn ${className}`}>
      {children}
    </div>
  );
}
