/**
 * Video Editing Portfolio Page
 * ViewTransition shared element + ScrollReveal for project cards.
 */

import Navbar from "@/components/Navbar";
import VideoEmbed from "@/components/VideoEmbed";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, SplitText } from "@/components/ClientOnlyWrapper";
import SafeViewTransition from "@/components/ui/SafeViewTransition";

const videos = [
  {
    title: "Motion Graphics & Video Editing — Sample 01",
    videoId: "AsFyiCAYi7Q",
    description:
      "A brand-focused edit built to create momentum, establish tone, and reinforce message clarity through motion and pacing.",
  },
  {
    title: "Motion Graphics & Video Editing — Sample 02",
    videoId: "u0w6vUoQa5U",
    description:
      "A polished visual story designed to support business storytelling and keep viewers engaged across the full narrative arc.",
  },
  {
    title: "Motion Graphics & Video Editing — Sample 03",
    videoId: "4B9bvqr9Vq0",
    description:
      "A creative edit combining design, rhythm, and pacing to deliver a more compelling visual communication piece.",
  },
  {
    title: "Short-form motion design sample",
    videoId: "j0vUBL7A_T0",
    description:
      "A short-form video concept tailored to social-first delivery, speed, and memorable brand moments.",
  },
];

export default function VideoEditingPage() {
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
              Video Editing
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

        {/* Hero image with shared-element ViewTransition */}
        <ScrollReveal from="bottom" delay={0.1}>
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-[2rem] mb-16">
            <SafeViewTransition name="category-image-video-editing">
              <Image
                src="https://img.youtube.com/vi/AsFyiCAYi7Q/hqdefault.jpg"
                alt="Video Editing — portfolio showcase"
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </SafeViewTransition>
            <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/60 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Video grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {videos.map((video, i) => (
            <ScrollReveal key={video.videoId} from={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
              <article className="premium-panel rounded-[2rem] overflow-hidden">
                <VideoEmbed videoId={video.videoId} title={video.title} />
                <div className="p-7">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#22B8B0] mb-3">Video Project</p>
                  <h2 className="text-3xl font-extrabold tracking-tight text-[#101827] mb-4">{video.title}</h2>
                  <p className="text-lg leading-relaxed text-[#667085]">{video.description}</p>
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
