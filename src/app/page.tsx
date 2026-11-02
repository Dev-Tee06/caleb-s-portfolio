/**
 * Home Page — Caleb Oluwapelumi Portfolio
 *
 * HERO PROTECTION: PersonalBrandHeader and its wrapping section are UNTOUCHED.
 * All new animation work begins at the tagline section (below the hero).
 *
 * Shared sections use server-rendered dynamic imports so content is available
 * before client-side animations initialize.
 */

import Navbar from "@/components/Navbar";
import PersonalBrandHeader from "@/components/PersonalBrandHeader";
import Link from "next/link";
import {
  ServicesSection,
  FeaturedProjects,
  ScrollReveal,
  SplitText,
  MagneticButton,
} from "@/components/ClientOnlyWrapper";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#F7F6F2] selection:bg-[#101827] selection:text-[#F7F6F2]">
      <Navbar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — FROZEN. Do not edit.
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative z-10 bg-[#F7F6F2] min-h-screen flex flex-col justify-center">
        <div className="pt-24 pb-8">
          <PersonalBrandHeader />
        </div>

        {/* Tagline + CTA — these animate; the Header above does not */}
        <div className="max-w-5xl mx-auto px-6 text-center pb-20">
          <SplitText
            tag="h1"
            className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] text-[#101827] tracking-tight"
          >
            I help businesses get seen, get chosen, and grow.
          </SplitText>

          <ScrollReveal delay={0.3} from="bottom">
            <p className="text-xl md:text-2xl text-[#667085] mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              I combine marketing, sales, creativity, and technology to help businesses build stronger
              brands, reach the right audiences, and turn attention into business opportunities.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.45} from="bottom">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto block bg-[#101827] text-[#F7F6F2] text-lg font-bold tracking-[0.18em] uppercase py-5 px-12 rounded-full hover:bg-[#22B8B0] hover:text-[#101827] transition-colors"
                >
                  Work With Me
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto block bg-transparent text-[#101827] text-lg font-bold tracking-[0.18em] uppercase py-5 px-12 rounded-full hover:bg-[#101827] hover:text-[#F7F6F2] transition-colors border-2 border-[#101827]"
                >
                  View Portfolio
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          DISCIPLINE STRIP
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="w-full py-16 bg-[#101827] relative z-10 border-y border-[#101827]/10" aria-label="Areas of expertise">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal from="bottom">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 text-white uppercase tracking-[0.3em] text-sm md:text-lg font-bold">
              <span>Strategy</span>
              <span className="hidden sm:inline opacity-30" aria-hidden="true">•</span>
              <span>Media</span>
              <span className="hidden sm:inline opacity-30" aria-hidden="true">•</span>
              <span>Technology</span>
              <span className="hidden sm:inline opacity-30" aria-hidden="true">•</span>
              <span>Execution</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SERVICES — cinematic chapter experience
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <ServicesSection />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FEATURED PROJECTS — horizontal showcase
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FeaturedProjects />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FOOTER
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <footer className="py-10 bg-[#F7F6F2]" aria-label="Site footer">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-white p-1 rounded-full border border-[#101827]/10 shadow-sm hover:border-[#22B8B0] transition-all overflow-hidden w-12 h-12 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.jpg" alt="CB logo" className="object-cover w-full h-full" />
            </div>
            <span className="text-[#101827] font-bold uppercase tracking-[0.18em] text-sm opacity-80">
              © {new Date().getFullYear()} Caleb Oluwapelumi
            </span>
          </div>
          <div className="flex gap-10">
            <a
              href="mailto:caleboluwapelumi9@gmail.com"
              className="nav-link-underline text-[#667085] hover:text-[#101827] transition-colors font-bold uppercase tracking-[0.18em] text-sm"
            >
              Email
            </a>
            <a
              href="tel:+2349014482413"
              className="nav-link-underline text-[#667085] hover:text-[#101827] transition-colors font-bold uppercase tracking-[0.18em] text-sm"
            >
              Phone
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
