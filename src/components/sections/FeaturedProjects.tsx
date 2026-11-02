"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";

const featuredProjects = [
  {
    id: "ayodele-awemini",
    category: "Website Development",
    name: "Ayodele Awe",
    description:
      "A faith-driven website experience designed to communicate values, services, and spiritual connection with clarity.",
    href: "https://www.ayodeleaweministries.com/",
    image: "/case8.png",
    external: true,
  },
  {
    id: "brand-storytelling",
    category: "Video Editing",
    name: "Brand Storytelling Reel",
    description:
      "A short-form visual story crafted to bring motion, rhythm, and brand personality into a single narrative piece.",
    href: "/portfolio/video-editing",
    image: "https://img.youtube.com/vi/u0w6vUoQa5U/hqdefault.jpg",
    external: false,
  },
  {
    id: "motion-design",
    category: "Animations",
    name: "Motion Design Sample",
    description:
      "An animated visual concept designed to explain a message with pace, energy, and a memorable visual rhythm.",
    href: "/portfolio/animations",
    image: "https://img.youtube.com/vi/j0vUBL7A_T0/hqdefault.jpg",
    external: false,
  },
];

export default function FeaturedProjects() {
  return (
    <section
      className="bg-white border-y border-[#101827]/10"
      aria-label="Featured Projects"
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-16">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="editorial-label text-[#22B8B0] mb-4">
                Featured Projects
              </p>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#101827]">
                Selected work.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="nav-link-underline w-fit text-sm font-bold uppercase tracking-[0.18em] text-[#101827] hover:text-[#22B8B0] transition-colors"
            >
              Explore all projects →
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              from={index === 1 ? "bottom" : "left"}
              delay={index * 0.08}
              distance={36}
              className="h-full"
            >
              <ProjectCard project={project} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof featuredProjects)[number];
  index: number;
}) {
  const content = (
    <div className="portfolio-card group h-full overflow-hidden rounded-[1.75rem] border border-[#101827]/10 bg-[#F7F6F2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,39,0.12)]">
      <div className="clip-image-wrap relative aspect-[4/3] overflow-hidden bg-[#101827]/5">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={`object-cover portfolio-card-image ${project.id === "ayodele-awemini" ? "object-top" : ""}`}
          unoptimized={project.image.startsWith("https://")}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/75 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-[#22B8B0]">
            {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
            {project.name}
          </h3>
        </div>
      </div>
      <div className="flex flex-col p-6">
        <p className="text-[#667085] leading-relaxed">{project.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#101827] transition-colors group-hover:text-[#22B8B0]">
          View project
          <svg
            className="w-3 h-3 portfolio-card-arrow"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </div>
    </div>
  );

  return project.external ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8B0] focus-visible:ring-offset-2"
    >
      {content}
    </a>
  ) : (
    <Link
      href={project.href}
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8B0] focus-visible:ring-offset-2"
    >
      {content}
    </Link>
  );
}
