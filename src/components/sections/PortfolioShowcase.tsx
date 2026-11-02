"use client";

/**
 * PortfolioShowcase — Asymmetric category card grid with scroll-triggered reveals.
 * Cards connect visually (shared perspective, directional stagger).
 * ViewTransition shared name on each card image → morphs into category page hero.
 */

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useReducedMotion } from "@/lib/useReducedMotion";
import SafeViewTransition from "@/components/ui/SafeViewTransition";

const categories = [
  {
    title: "Website Development",
    slug: "website-development",
    blurb:
      "Thoughtful websites, conversion-focused UX, and strategic digital experiences that help brands present themselves clearly and credibly.",
    image: "/case8.png",
    accent: "#22B8B0",
    size: "large",   // hero card
  },
  {
    title: "Video Editing",
    slug: "video-editing",
    blurb:
      "Cinematic edits, branded storytelling, and polished content designed to hold attention and strengthen communication across channels.",
    image: "https://img.youtube.com/vi/AsFyiCAYi7Q/hqdefault.jpg",
    accent: "#101827",
    size: "small",
  },
  {
    title: "Animations",
    slug: "animations",
    blurb:
      "Motion-driven visuals and animated storytelling that transform ideas into memorable digital experiences.",
    image: "https://img.youtube.com/vi/j0vUBL7A_T0/hqdefault.jpg",
    accent: "#22B8B0",
    size: "small",
  },
];

export default function PortfolioShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !containerRef.current) return;

    let ctx: ReturnType<Awaited<typeof import("gsap")>["gsap"]["context"]>;
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const container = containerRef.current;
      if (cancelled || !container) return;

      gsap.registerPlugin(ScrollTrigger);

      const cards = container.querySelectorAll("[data-portfolio-card]");

      ctx = gsap.context(() => {
        const animateCards = (useHorizontalMotion: boolean) => {
          cards.forEach((card, i) => {
            const rotation =
              useHorizontalMotion && i === 1
                ? 2
                : useHorizontalMotion && i === 2
                  ? -1.5
                  : 0;

            gsap.from(card, {
              opacity: 0,
              x: useHorizontalMotion ? (i === 1 ? 60 : -60) : 0,
              y: i === 0 ? 40 : 60,
              rotation,
              duration: 0.9,
              delay: i * 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            });
          });
        };

        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => animateCards(true));
        mm.add("(max-width: 1023px)", () => animateCards(false));
      }, container);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [reduced]);

  return (
    <div ref={containerRef}>
      {/* ── Asymmetric layout: large + two stacked ────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

        {/* Large hero card — spans full height on lg */}
        <div data-portfolio-card className="lg:row-span-2">
          <CategoryCard category={categories[0]} large />
        </div>

        {/* Two smaller cards stacked */}
        <div data-portfolio-card className="lg:col-span-2">
          <CategoryCard category={categories[1]} />
        </div>
        <div data-portfolio-card className="lg:col-span-2">
          <CategoryCard category={categories[2]} />
        </div>
      </div>
    </div>
  );
}

// ── Category Card ─────────────────────────────────────────────────────────────

function CategoryCard({
  category,
  large = false,
}: {
  category: (typeof categories)[number];
  large?: boolean;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  // 3D tilt on hover (desktop only, not reduced-motion)
  useEffect(() => {
    const card = cardRef.current;
    if (!card || reduced) return;
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFine) return;

    function onMove(e: MouseEvent) {
      const rect = card!.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card!.style.transform = `perspective(1200px) rotateY(${dx * 5}deg) rotateX(${-dy * 4}deg) scale(1.01)`;
    }
    function onLeave() {
      card!.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1)";
    }
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced]);

  return (
    <Link
      ref={cardRef}
      href={`/portfolio/${category.slug}`}
      className="portfolio-card group block premium-panel rounded-[2rem] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8B0] focus-visible:ring-offset-2"
      style={{ transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)", transformStyle: "preserve-3d" }}
    >
      {/* Image with shared-element ViewTransition */}
      <div className={`relative overflow-hidden ${large ? "aspect-[3/4]" : "aspect-[16/9]"}`}>
        <SafeViewTransition name={`category-image-${category.slug}`}>
          <Image
            src={category.image}
            alt={category.title}
            fill
            className={`object-cover portfolio-card-image ${category.slug === "website-development" ? "object-top" : ""}`}
            unoptimized={category.image.startsWith("https://")}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </SafeViewTransition>
        <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/80 via-[#101827]/20 to-transparent" />

        {/* Category label + title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p
            className="text-xs font-bold tracking-[0.22em] uppercase mb-2"
            style={{ color: category.accent }}
          >
            Portfolio Category
          </p>
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white">{category.title}</h2>
        </div>

        {/* Hover arrow indicator */}
        <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
          <svg
            className="w-4 h-4 text-white portfolio-card-arrow"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

      {/* Text panel */}
      <div className="p-7">
        <p className="text-base leading-relaxed text-[#667085] mb-4">{category.blurb}</p>
        <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#101827] group-hover:text-[#22B8B0] transition-colors">
          View work
          <svg className="w-4 h-4 portfolio-card-arrow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
