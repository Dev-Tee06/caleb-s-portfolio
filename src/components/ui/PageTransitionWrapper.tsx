"use client";

/**
 * PageTransitionWrapper — wraps page content for smooth transitions.
 * Uses React 19 <ViewTransition> which activates automatically during
 * Next.js App Router navigations (they are React Transitions).
 *
 * Announces route changes to assistive technology via a live region.
 * Moves focus to the main h1 after navigation.
 */

import { usePathname } from "next/navigation";
import { useEffect, useRef, ReactNode } from "react";
import SafeViewTransition from "@/components/ui/SafeViewTransition";

interface PageTransitionWrapperProps {
  children: ReactNode;
}

export default function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const pathname = usePathname();
  const announcerRef = useRef<HTMLParagraphElement>(null);

  // Announce route change for screen readers
  useEffect(() => {
    const label =
      pathname === "/"
        ? "Home — Caleb Oluwapelumi"
        : `${pathname.split("/").filter(Boolean).join(" — ")} — Caleb Oluwapelumi`;

    if (announcerRef.current) {
      announcerRef.current.textContent = "";
      // Small delay lets the DOM settle before announcing
      const t = setTimeout(() => {
        if (announcerRef.current) announcerRef.current.textContent = label;
      }, 300);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  // Move focus to first h1 after navigation (accessibility)
  useEffect(() => {
    const t = setTimeout(() => {
      const h1 = document.querySelector("main h1, main h2");
      if (h1 && h1 instanceof HTMLElement) {
        h1.setAttribute("tabindex", "-1");
        h1.focus({ preventScroll: true });
      }
    }, 400);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      {/* Screen reader live region */}
      <p
        ref={announcerRef}
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />

      <SafeViewTransition>
        {children}
      </SafeViewTransition>
    </>
  );
}
