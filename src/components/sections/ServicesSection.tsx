"use client";

/**
 * ServicesSection — Cinematic chapter experience.
 *
 * Desktop (≥1024px):  Pinned scroll section. Each service is a "chapter" that
 *                     plays as the user scrolls. Chapter indicator 01–04 on the right.
 *                     Background colour, image, and text all transition together.
 *
 * Mobile (<1024px):   Stacked vertical reveals. No pinning. Each card fades in
 *                     with ScrollReveal.
 *
 * All logic switches via gsap.matchMedia() — correct on resize and rotation.
 * Accessibility: all content is present in DOM at all times.
 * Keyboard: chapter indicator buttons jump to chapters via GSAP scrollTo.
 */

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "@/lib/useReducedMotion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const services = [
  {
    num: "01",
    title: "Website Development",
    description:
      "I design and develop modern, responsive, and high-performing websites that help businesses establish credibility, communicate their value, and convert visitors into customers.",
    href: "/portfolio/website-development",
    image: "/case8.png",
    bg: "#101827",
    accent: "#22B8B0",
    textColor: "#F7F6F2",
    tag: "Design · Development",
  },
  {
    num: "02",
    title: "Video Editing",
    description:
      "I transform raw footage into compelling visual stories that capture attention, communicate ideas, and strengthen brand communication.",
    href: "/portfolio/video-editing",
    image: "https://img.youtube.com/vi/AsFyiCAYi7Q/hqdefault.jpg",
    bg: "#0a1220",
    accent: "#22B8B0",
    textColor: "#F7F6F2",
    tag: "Motion · Narrative",
  },
  {
    num: "03",
    title: "Animations & Motion",
    description:
      "I create engaging animations and motion graphics that bring ideas, brands, and digital experiences to life.",
    href: "/portfolio/animations",
    image: "https://img.youtube.com/vi/j0vUBL7A_T0/hqdefault.jpg",
    bg: "#F7F6F2",
    accent: "#101827",
    textColor: "#101827",
    tag: "Motion Graphics · Animation",
  },
  {
    num: "04",
    title: "Search Engine Optimization",
    description:
      "I help businesses improve their online visibility through search engine optimization strategies that make their websites easier to discover.",
    href: "/portfolio/website-development",
    image: "/case7.png",
    bg: "#0d2420",
    accent: "#22B8B0",
    textColor: "#F7F6F2",
    tag: "SEO · Visibility",
  },
];

export default function ServicesSection() {
  const reduced = useReducedMotion();
  const sectionRef  = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const chaptersRef = useRef<HTMLDivElement[]>([]);
  const indicatorDotsRef = useRef<HTMLButtonElement[]>([]);
  const activeChapterRef = useRef(0);

  // Declared before useEffect so it can be referenced inside the closure
  const activateChapter = useCallback(
    (
      index: number,
      chapters: HTMLDivElement[],
      dots: HTMLButtonElement[],
      gsap: Awaited<typeof import("gsap")>["gsap"]
    ) => {
      chapters.forEach((ch, i) => {
        if (i === index) {
          gsap.to(ch, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.65,
            ease: "power3.out",
            overwrite: "auto",
          });
        } else {
          gsap.to(ch, {
            autoAlpha: 0,
            yPercent: i < index ? -12 : 18,
            duration: 0.45,
            ease: "power2.in",
            overwrite: "auto",
          });
        }
      });
      activeChapterRef.current = index;
      dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === index);
        dot.setAttribute("aria-selected", i === index ? "true" : "false");
      });
    },
    []
  );

  useEffect(() => {
    if (reduced) return;

    let ctx: ReturnType<Awaited<typeof import("gsap")>["gsap"]["context"]>;
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled || !sectionRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
          const chapters = chaptersRef.current;
          const dots = indicatorDotsRef.current;
          const section = sectionRef.current;
          if (!section || chapters.length !== services.length) return;

          gsap.set(chapters, { autoAlpha: 0, yPercent: 18 });
          gsap.set(chapters[0], { autoAlpha: 1, yPercent: 0 });
          activeChapterRef.current = 0;

          const pin = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: () => `+=${services.length * window.innerHeight * 0.45}`,
            pin: containerRef.current,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const index = Math.min(
                services.length - 1,
                Math.floor(self.progress * services.length)
              );
              if (index !== activeChapterRef.current) {
                activateChapter(index, chapters, dots, gsap);
              }
            },
          });

          return () => pin.kill();
        });
      });
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [reduced, activateChapter]);

  async function jumpToChapter(index: number) {
    const section = sectionRef.current;
    if (!section) return;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const totalPin = services.length * window.innerHeight * 0.45;
    const target     = sectionTop + (index / services.length) * totalPin;
    window.scrollTo({ top: target, behavior: "smooth" });
  }

  // ── RENDER ─────────────────────────────────────────────────────────────────

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full"
      aria-label="What I Do — Services"
    >
      {/* ── DESKTOP: Pinned Cinematic View ──────────────────────────── */}
      <div className={`hidden ${reduced ? "lg:hidden" : "lg:block"}`}>
        {/* Background — full screen, behind chapters */}
        <div
          ref={containerRef}
          className="relative w-full h-screen overflow-hidden"
          style={{ background: "#101827" }}
        >
          {/* Header strip */}
          <div className="absolute top-16 left-12 z-20">
            <p className="editorial-label text-[#22B8B0] mb-3">What I Do</p>
            <h2 className="text-sm font-bold text-white/40 uppercase tracking-[0.3em]">
              Four disciplines, one vision
            </h2>
          </div>

          {/* Chapter indicator — right side */}
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4"
            role="tablist"
            aria-label="Service chapters"
          >
            {services.map((s, i) => (
              <button
                key={s.num}
                ref={(el) => { if (el) indicatorDotsRef.current[i] = el; }}
                className={`chapter-dot ${i === 0 ? "is-active" : ""}`}
                role="tab"
                aria-selected={i === 0}
                aria-label={`Chapter ${s.num}: ${s.title}`}
                onClick={() => jumpToChapter(i)}
              >
                {s.num}
              </button>
            ))}
          </div>

          {/* Chapters — stacked absolutely, GSAP switches between them */}
          {services.map((service, i) => (
            <div
              key={service.num}
              ref={(el) => { if (el) chaptersRef.current[i] = el; }}
              className="absolute inset-0 grid grid-cols-2"
              aria-label={`Chapter ${service.num}: ${service.title}`}
              style={{
                opacity: i === 0 ? 1 : 0,
                visibility: i === 0 ? "visible" : "hidden",
              }}
            >
              {/* Left: text content */}
              <div
                className="flex flex-col justify-center px-16 py-12 z-10"
                style={{ background: service.bg }}
              >
                <span
                  className="text-[7rem] font-black leading-none mb-8 select-none"
                  style={{ color: service.accent, opacity: 0.12 }}
                  aria-hidden="true"
                >
                  {service.num}
                </span>
                <p
                  className="editorial-label mb-6"
                  style={{ color: service.accent }}
                >
                  {service.tag}
                </p>
                <h3
                  className="text-4xl xl:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
                  style={{ color: service.textColor }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-lg leading-relaxed max-w-md mb-10"
                  style={{ color: service.textColor, opacity: 0.75 }}
                >
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] group w-fit"
                  style={{ color: service.accent }}
                >
                  Explore work
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 portfolio-card-arrow"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Right: image */}
              <div className="relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} — portfolio preview`}
                  fill
                  className={`object-cover ${service.image === "/case8.png" ? "object-top" : ""}`}
                  unoptimized={service.image.startsWith("https://")}
                  sizes="50vw"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, ${service.bg} 0%, transparent 40%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE / TABLET: Stacked vertical reveals ──────────────── */}
      <div className={`py-16 bg-[#101827] md:py-20 ${reduced ? "" : "lg:hidden"}`}>
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <p className="editorial-label text-[#22B8B0] mb-4">What I Do</p>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Four disciplines,<br />one vision.
          </h2>
        </div>

        <div className="space-y-6 px-4 md:px-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.num} delay={i * 0.08} from="bottom">
              <Link
                href={service.href}
                className="group block rounded-[2rem] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8B0] focus-visible:ring-offset-2"
                style={{ background: service.bg }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_38%]">
                  <div className="order-2 flex flex-col justify-between p-6 sm:order-1 sm:p-8">
                    <div>
                      <p
                        className="editorial-label mb-3"
                        style={{ color: service.accent }}
                      >
                        {service.num} — {service.tag}
                      </p>
                      <h3
                        className="text-2xl font-extrabold tracking-tight mb-3 leading-tight"
                        style={{ color: service.textColor }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: service.textColor, opacity: 0.7 }}
                      >
                        {service.description}
                      </p>
                    </div>
                    <span
                      className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] portfolio-card-arrow"
                      style={{ color: service.accent }}
                    >
                      Explore
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                  <div className="relative order-1 aspect-[16/9] overflow-hidden bg-[#101827]/10 sm:order-2 sm:aspect-auto sm:min-h-[300px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className={`object-cover portfolio-card-image ${service.image === "/case8.png" ? "object-top" : ""}`}
                      unoptimized={service.image.startsWith("https://")}
                      sizes="40vw"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(90deg, ${service.bg} 0%, transparent 50%)`,
                      }}
                    />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
