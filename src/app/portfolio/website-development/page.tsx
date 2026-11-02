/**
 * Website Development Portfolio Page
 * Editorial project gallery with a shared category-card image transition.
 */

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import SafeViewTransition from "@/components/ui/SafeViewTransition";

const projects = [
  {
    id: "ayodele-awemini-ministries",
    name: "Ayodele Awe",
    image: "/case8.png",
    website: "https://www.ayodeleaweministries.com/",
    description:
      "A faith-centered digital presence designed to help the ministry communicate its message, services, and community impact with clarity and warmth.",
    challenge:
      "The ministry needed a clear, welcoming, and professionally presented online home that could effectively communicate its purpose and connect with visitors.",
    solution:
      "I created a polished website experience with strong visual hierarchy, easy navigation, and content structure that makes the ministry's message more accessible and engaging.",
    impact:
      "The result is a considered digital platform that presents the ministry with trust, clarity, and a stronger online presence for its congregation and wider audience.",
  },
  {
    id: "ethos-cliff",
    name: "Ethos Cliff",
    image: "/case1.png",
    website: "https://ethos-cliff.vercel.app/",
    description:
      "A brand visibility project focused on helping businesses find their voice and present themselves with authority.",
    challenge:
      "The brand needed a more compelling digital identity to communicate its offering and stand out in a competitive market.",
    solution:
      "I developed a brand-led website experience with strategic messaging, stronger positioning, and a polished visual presentation.",
    impact:
      "The website gives the brand a clearer, more credible online identity that supports visibility, recognition, and brand trust.",
  },
  {
    id: "teenspray",
    name: "Teenspray",
    image: "/case3.png",
    website: null,
    description:
      "A youth-focused project bringing brand strategy and visual communication together.",
    challenge:
      "The brand needed a visual identity and digital presentation that could connect with a younger audience.",
    solution:
      "I developed a youth-focused visual direction and organized the brand communication around a clear, consistent presentation.",
    impact:
      "The work gives the brand a more recognizable way to communicate with its audience across digital touchpoints.",
  },
  {
    id: "the-wavee-media",
    name: "The Wavee Media",
    image: "/case5.png",
    website: "https://thewaveemedia.com/",
    description:
      "A visual storytelling project focused on creating memorable and cinematic experiences for a creative media brand.",
    challenge:
      "The brand needed a stronger visual identity that could reflect its storytelling ability and creative expertise.",
    solution:
      "I created a cinematic website direction with visually immersive layouts and editorial storytelling cues to showcase the brand's creative offering.",
    impact:
      "The project elevated the brand's digital presence and positioned it as a creative force with a more memorable and premium look.",
  },
  {
    id: "kocre8ors",
    name: "Kocre8ors",
    image: "/case2.png",
    website: "https://kocre8ors.com/",
    description:
      "A growth-focused brand site that blends strategy, creativity, and clear positioning to communicate business value.",
    challenge:
      "The business needed a clearer digital story that connected its creative thinking with strategic growth outcomes.",
    solution:
      "I shaped a more compelling brand narrative and created a framework for clear messaging, premium visual presentation, and business-focused positioning.",
    impact:
      "The site presents the brand as both creative and strategic, helping visitors understand its value proposition more quickly.",
  },
  {
    id: "thefoc",
    name: "TheFOC",
    image: "/case4.png",
    website: "https://thefoc-portfolio.vercel.app/",
    description:
      "A creative portfolio focused on building strategic and visually compelling brands for personal and professional positioning.",
    challenge:
      "The client needed a portfolio that seamlessly balanced personal branding with strong visual credibility.",
    solution:
      "I built a polished portfolio structure with thoughtful layout, strategic messaging, and a premium visual direction tailored to the brand identity.",
    impact:
      "The experience makes the brand feel more established, memorable, and appropriate for attracting meaningful opportunities.",
  },
  {
    id: "eunice-portfolio",
    name: "Eunice Portfolio",
    image: "/case6.png",
    website: "https://the-eunice-portfolio.vercel.app/",
    description:
      "A professional portfolio highlighting personal branding and creative expertise in a warm, modern presentation.",
    challenge:
      "The client needed a refined online presence that showcased expertise while remaining personal and approachable.",
    solution:
      "I designed a clean, modern portfolio that organizes the work clearly and offers a more polished user experience.",
    impact:
      "The website provides a stronger foundation for personal branding and makes the client's work easier to navigate and understand.",
  },
  {
    id: "contentlabz",
    name: "ContentLabz",
    image: "/case7.png",
    website: "https://contentlabz.co/",
    description:
      "A website designed to present content systems and digital opportunities in a way that feels clear, strategic, and conversion-forward.",
    challenge:
      "The brand needed a website that could turn attention into meaningful business conversations by clarifying its value proposition.",
    solution:
      "I designed and structured a brand-focused website that emphasizes clarity, hierarchy, and lead-generating communication.",
    impact:
      "The digital experience strengthens the brand's ability to communicate what it does and why it matters, without visual clutter or confusion.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <main className="min-h-screen relative bg-[#F7F6F2] selection:bg-[#101827] selection:text-[#F7F6F2]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <header className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="editorial-label mb-4 text-[#22B8B0]">Portfolio</p>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-[#101827] sm:text-5xl md:text-7xl">
              Website Development
            </h1>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#101827] transition-colors hover:text-[#22B8B0]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to portfolio
          </Link>
        </header>

        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-[#667085] md:mb-14 md:text-xl">
          Digital experiences designed to strengthen credibility, clarify positioning, and help brands
          communicate clearly across every screen.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[1.75rem] border border-[#101827]/10 bg-white shadow-[0_14px_40px_rgba(16,24,39,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(16,24,39,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#101827]/5">
                {index === 0 ? (
                  <SafeViewTransition name="category-image-website-development">
                    <Image
                      src={project.image}
                      alt={`${project.name} website preview`}
                      fill
                      className="object-cover object-[center_36%] transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                      priority
                    />
                  </SafeViewTransition>
                ) : (
                  <Image
                    src={project.image}
                    alt={`${project.name} website preview`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="p-6 md:p-8">
                <p className="editorial-label mb-3 text-[#22B8B0]">Website Development</p>
                <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-[#101827] md:text-3xl">
                  {project.name}
                </h2>
                <p className="mb-6 leading-relaxed text-[#667085]">{project.description}</p>

                <dl className="space-y-4 border-t border-[#101827]/10 pt-5">
                  <div>
                    <dt className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">The Challenge</dt>
                    <dd className="text-sm leading-relaxed text-[#667085]">{project.challenge}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">The Solution</dt>
                    <dd className="text-sm leading-relaxed text-[#667085]">{project.solution}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Value Delivered</dt>
                    <dd className="text-sm leading-relaxed text-[#667085]">{project.impact}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#101827] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#F7F6F2] transition-colors hover:bg-[#22B8B0] hover:text-[#101827]"
                    >
                      Visit project
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                  <Link
                    href={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#101827]/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#101827] transition-colors hover:border-[#22B8B0] hover:text-[#22B8B0]"
                  >
                    Case study
                  </Link>
                </div>
              </div>
            </article>
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
