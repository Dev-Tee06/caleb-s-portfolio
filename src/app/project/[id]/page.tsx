import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";

const projects = [
  {
    id: "ayodele-awemini-ministries",
    name: "Ayodele Awe",
    image: "/case8.png",
    website: "https://www.ayodeleaweministries.com/",
    description:
      "A faith-centered digital presence designed to communicate the ministry's message and services with clarity.",
    caseStudy:
      "The ministry needed a clear and welcoming online home. The website presents its message and services through a considered visual hierarchy, accessible content, and straightforward navigation, giving visitors a more direct way to understand the ministry and its work.",
  },
  {
    id: "ethos-cliff",
    name: "Ethos Cliff",
    image: "/case1.png",
    website: "https://ethos-cliff.vercel.app/",
    description:
      "A brand visibility project focused on helping businesses find their voice.",
    caseStudy:
      "Ethos Cliff focuses on helping businesses develop a stronger voice, identity, and visibility. We crafted a comprehensive brand visibility strategy and delivered professional personal and business branding. By optimizing their digital presence, SEO, and visual design, we ensured their brand communicates effectively and stands out in a crowded market.",
  },
  {
    id: "teenspray",
    name: "Teenspray",
    image: "/case3.png",
    website: null,
    description:
      "A youth-focused project bringing brand strategy and visual communication together.",
    caseStudy:
      "The project focused on creating a youth-oriented visual direction and a more consistent way for the brand to communicate with its audience. The available work emphasizes brand presentation and visual communication across digital touchpoints.",
  },
  {
    id: "the-wavee-media",
    name: "The Wavee Media",
    image: "/case5.png",
    website: "https://thewaveemedia.com/",
    description:
      "A visual storytelling project focused on creating memorable and cinematic experiences.",
    caseStudy:
      "The Wavee Media required a highly visual and cinematic presentation. We provided creative direction and visual design to ensure the brand communicates its storytelling prowess effectively. The website serves as a striking portfolio that immediately immerses visitors in their creative world, enhancing their online visibility and positioning them as industry leaders in visual storytelling.",
  },

  {
    id: "kocre8ors",
    name: "Kocre8ors",
    image: "/case2.png",
    website: "https://kocre8ors.com/",
    description:
      "A growth-focused brand combining strategy, creative thinking and business outcomes.",
    caseStudy:
      "For Kocre8ors, the goal was to showcase their unique blend of creative strategy and growth marketing. We structured their digital presence to clearly communicate product positioning and go-to-market strategies. By developing a strong brand narrative and optimizing their digital visibility, we helped them establish a commanding foothold in their industry, driving both engagement and business growth.",
  },
  {
    id: "thefoc",
    name: "TheFOC",
    image: "/case4.png",
    website: "https://thefoc-portfolio.vercel.app/",
    description:
      "A creative portfolio focused on building strategic and visually compelling brands.",
    caseStudy:
      "TheFOC is a personal creative portfolio positioned around brand identity. The website was designed to combine creativity with strategic thinking, effectively showcasing previous brand identity development and visual design projects. We ensured the portfolio reflects a premium, professional image, providing TheFOC with the digital visibility needed to attract high-quality clients and brand collaborations.",
  },
  {
    id: "eunice-portfolio",
    name: "Eunice Portfolio",
    image: "/case6.png",
    website: "https://the-eunice-portfolio.vercel.app/",
    description:
      "A professional portfolio highlighting personal branding and creative expertise.",
    caseStudy:
      "Eunice's portfolio was designed to elevate her personal brand. We focused on creating a clean, professional, and visually appealing digital space that accurately reflects her creative expertise. The layout and visual hierarchy were carefully crafted to provide maximum visibility to her best work, ensuring she stands out to potential clients and collaborators. This strategic digital presence solidifies her brand identity in a competitive market.",
  },
  {
    id: "contentlabz",
    name: "ContentLabz",
    image: "/case7.png",
    website: "https://contentlabz.co/",
    description:
      "Content systems designed to turn attention into qualified business opportunities.",
    caseStudy:
      "For ContentLabz, we developed a comprehensive brand strategy focused on creating systems that generate leads and qualify prospects. The website design emphasizes clarity and lead generation, serving as a powerful tool to turn attention into tangible business opportunities. By providing strategic digital visibility and a seamless user experience, we enabled ContentLabz to effectively communicate their value proposition to their target audience.",
  },
];

export default async function ProjectDetail(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen relative bg-[#F7F6F2] text-[#182230] selection:bg-[#101827] selection:text-[#F7F6F2] pb-20">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 pt-32 md:pt-40">
        <Link
          href="/portfolio/website-development"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#667085] transition-colors hover:text-[#101827]"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to websites
        </Link>

        <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-[#101827] sm:text-5xl md:text-7xl">
          {project.name}
        </h1>
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-[#667085] md:mb-12 md:text-xl">
          {project.description}
        </p>

        <div className="relative mb-10 aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-[#101827]/10 bg-[#101827]/5 shadow-[0_20px_60px_rgba(16,24,39,0.08)] md:mb-12 md:aspect-[16/8]">
          <Image
            src={project.image}
            alt={`${project.name} website preview`}
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-8">
            <h2 className="mb-5 text-sm font-bold tracking-[0.2em] uppercase text-[#22B8B0]">
              Case Study
            </h2>
            <div className="max-w-3xl text-lg leading-relaxed text-[#667085]">
              <p>{project.caseStudy}</p>
            </div>

            <div className="mt-8 border-t border-[#101827]/10 pt-7">
              {project.website ? (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#101827] px-7 py-4 font-bold uppercase tracking-[0.16em] text-[#F7F6F2] transition-colors hover:bg-[#22B8B0] hover:text-[#101827]"
                >
                  Visit Live Website
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              ) : (
                <div className="inline-flex items-center gap-3 rounded-full border border-[#101827]/10 bg-white px-7 py-4 font-bold uppercase tracking-[0.16em] text-[#667085]">
                  No live project link
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="rounded-[1.75rem] border border-[#101827]/10 bg-white p-7 md:p-8">
              <h3 className="mb-5 text-sm font-bold tracking-[0.2em] uppercase text-[#22B8B0]">
                Project Details
              </h3>

              <div className="mb-5">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#667085]">
                  Client
                </span>
                <span className="font-semibold text-[#101827]">{project.name}</span>
              </div>

              <div>
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#667085]">
                  Role
                </span>
                <span className="font-semibold text-[#101827]">
                  Brand Strategy & Visibility
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
