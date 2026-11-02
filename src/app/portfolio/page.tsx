/**
 * Portfolio Index Page
 * Asymmetric layout with ViewTransition shared-element support.
 * PortfolioShowcase handles the animated card grid.
 */

import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  PortfolioShowcase,
  ScrollReveal,
  SplitText,
} from "@/components/ClientOnlyWrapper";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen relative bg-[#F7F6F2] selection:bg-[#101827] selection:text-[#F7F6F2]">
      <Navbar />

      {/* Page hero */}
      <section className="pt-32 pb-12 max-w-7xl mx-auto px-6 md:pt-40">
        <div className="mb-6">
          <ScrollReveal from="bottom" delay={0}>
            <p className="editorial-label text-[#22B8B0] mb-5">Portfolio</p>
          </ScrollReveal>
          <SplitText
            tag="h1"
            className="text-5xl md:text-7xl font-extrabold text-[#101827] tracking-tight max-w-4xl"
          >
            Creative work built around business goals.
          </SplitText>
        </div>
      </section>

      {/* Asymmetric card showcase */}
      <section className="pb-16 max-w-7xl mx-auto px-6">
        <PortfolioShowcase />
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white border-t border-[#101827]/10" aria-label="Site footer">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-white p-1 rounded-full border border-[#101827]/10 shadow-sm hover:border-[#22B8B0] transition-all overflow-hidden w-12 h-12 relative">
              <Image src="/logo.jpg" alt="CB" fill className="object-cover" />
            </div>
            <span className="text-[#101827] font-bold uppercase tracking-[0.18em] text-sm opacity-80">
              © {new Date().getFullYear()} Caleb Oluwapelumi
            </span>
          </div>
          <div className="flex gap-10">
            <a href="mailto:caleboluwapelumi9@gmail.com" className="nav-link-underline text-[#667085] hover:text-[#101827] transition-colors font-bold uppercase tracking-[0.18em] text-sm">Email</a>
            <a href="tel:+2349014482413" className="nav-link-underline text-[#667085] hover:text-[#101827] transition-colors font-bold uppercase tracking-[0.18em] text-sm">Phone</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
