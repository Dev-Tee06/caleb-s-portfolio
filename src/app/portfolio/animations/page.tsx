/**
 * Animations Portfolio Page
 * ViewTransition shared element + ScrollReveal reveals.
 */

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, SplitText } from "@/components/ClientOnlyWrapper";

const animationProjects = [
  {
    title: "Brand Motion Concept",
    description:
      "An animated concept built to highlight a message through motion, pacing, and clean visual storytelling for digital audiences.",
    video: "/FIZZORO Ad.mp4",
  },
];

export default function AnimationsPage() {
  return (
    <main className="min-h-screen relative bg-[#F7F6F2] text-[#182230] selection:bg-[#101827] selection:text-[#F7F6F2]">
      <Navbar />

      <section className="pt-40 pb-24 max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <ScrollReveal from="bottom" delay={0}>
              <p className="editorial-label text-[#22B8B0] mb-5">Portfolio</p>
            </ScrollReveal>
            <SplitText
              tag="h1"
              className="text-5xl md:text-7xl font-extrabold text-[#101827] tracking-tight"
            >
              Animations
            </SplitText>
          </div>
          <ScrollReveal from="right" delay={0.2}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#101827] hover:text-[#22B8B0] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to portfolio
            </Link>
          </ScrollReveal>
        </div>

        {/* Animation projects */}
        <div className="grid gap-12 md:grid-cols-2">
          {animationProjects.map((project, i) => (
            <ScrollReveal key={project.title} from="bottom" delay={i * 0.1}>
              <article className="premium-panel rounded-[2rem] overflow-hidden">
                <div className="relative overflow-hidden">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-video w-full bg-[#101827] object-cover"
                    aria-label={project.title}
                  >
                    <source src={project.video} />
                    Your browser does not support HTML5 video.
                  </video>
                </div>
                <div className="p-7">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#22B8B0] mb-3">Animation Project</p>
                  <h2 className="text-3xl font-extrabold tracking-tight text-[#101827] mb-4">{project.title}</h2>
                  <p className="text-lg leading-relaxed text-[#667085]">{project.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

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
