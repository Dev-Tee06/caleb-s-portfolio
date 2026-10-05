import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";

const projects = [
  { 
    id: "ethos-cliff", 
    name: "Ethos Cliff", 
    image: "/case1.png", 
    website: "https://ethos-cliff.vercel.app/", 
    description: "A brand visibility project focused on helping businesses find their voice.", 
    caseStudy: "Ethos Cliff focuses on helping businesses develop a stronger voice, identity, and visibility. We crafted a comprehensive brand visibility strategy and delivered professional personal and business branding. By optimizing their digital presence, SEO, and visual design, we ensured their brand communicates effectively and stands out in a crowded market." 
  },
  { 
    id: "the-wavee-media", 
    name: "The Wavee Media", 
    image: "/case5.png", 
    website: "https://thewaveemedia.com/", 
    description: "A visual storytelling project focused on creating memorable and cinematic experiences.", 
    caseStudy: "The Wavee Media required a highly visual and cinematic presentation. We provided creative direction and visual design to ensure the brand communicates its storytelling prowess effectively. The website serves as a striking portfolio that immediately immerses visitors in their creative world, enhancing their online visibility and positioning them as industry leaders in visual storytelling." 
  },
  { 
    id: "teenspray", 
    name: "Teenspray", 
    image: "/case3.png", 
    website: "https://teenspray.org", 
    description: "Youth-focused brand strategy and visual communication.", 
    caseStudy: "Teenspray is a youth-focused initiative where brand strategy was paramount. We developed a vibrant and relatable brand identity that speaks directly to a younger demographic. The strategy involved aligning their visual communication with the energetic and dynamic nature of their target audience, ensuring maximum engagement and brand loyalty. Through targeted visual design and messaging, we provided Teenspray with the necessary visibility to effectively reach and connect with their audience." 
  },
  { 
    id: "kocre8ors", 
    name: "Kocre8ors", 
    image: "/case2.png", 
    website: "https://kocre8ors.com/", 
    description: "A growth-focused brand combining strategy, creative thinking and business outcomes.", 
    caseStudy: "For Kocre8ors, the goal was to showcase their unique blend of creative strategy and growth marketing. We structured their digital presence to clearly communicate product positioning and go-to-market strategies. By developing a strong brand narrative and optimizing their digital visibility, we helped them establish a commanding foothold in their industry, driving both engagement and business growth." 
  },
  { 
    id: "thefoc", 
    name: "TheFOC", 
    image: "/case4.png", 
    website: "https://thefoc-portfolio.vercel.app/", 
    description: "A creative portfolio focused on building strategic and visually compelling brands.", 
    caseStudy: "TheFOC is a personal creative portfolio positioned around brand identity. The website was designed to combine creativity with strategic thinking, effectively showcasing previous brand identity development and visual design projects. We ensured the portfolio reflects a premium, professional image, providing TheFOC with the digital visibility needed to attract high-quality clients and brand collaborations." 
  },
  { 
    id: "eunice-portfolio", 
    name: "Eunice Portfolio", 
    image: "/case6.png", 
    website: "https://the-eunice-portfolio.vercel.app/", 
    description: "A professional portfolio highlighting personal branding and creative expertise.", 
    caseStudy: "Eunice's portfolio was designed to elevate her personal brand. We focused on creating a clean, professional, and visually appealing digital space that accurately reflects her creative expertise. The layout and visual hierarchy were carefully crafted to provide maximum visibility to her best work, ensuring she stands out to potential clients and collaborators. This strategic digital presence solidifies her brand identity in a competitive market." 
  },
  { 
    id: "contentlabz", 
    name: "ContentLabz", 
    image: "/case7.png", 
    website: "https://contentlabz.co/", 
    description: "Content systems designed to turn attention into qualified business opportunities.", 
    caseStudy: "For ContentLabz, we developed a comprehensive brand strategy focused on creating systems that generate leads and qualify prospects. The website design emphasizes clarity and lead generation, serving as a powerful tool to turn attention into tangible business opportunities. By providing strategic digital visibility and a seamless user experience, we enabled ContentLabz to effectively communicate their value proposition to their target audience." 
  }
];

export default async function ProjectDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen relative bg-white selection:bg-black selection:text-white pb-32">
      <Navbar />
      
      <div className="pt-32 max-w-5xl mx-auto px-6">
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-black mb-12 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Projects
        </Link>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-black">{project.name}</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-16 leading-relaxed font-light">{project.description}</p>

        <div className="w-full aspect-video md:aspect-[21/9] bg-gray-100 relative rounded-3xl overflow-hidden mb-16 shadow-xl border border-gray-100">
          <Image src={project.image} alt={project.name} fill className="object-cover object-top" priority />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <div className="md:col-span-8">
            <h2 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">Case Study</h2>
            <div className="prose prose-lg text-gray-800 leading-relaxed font-light">
              <p>{project.caseStudy}</p>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              {project.website !== "#" ? (
                <a 
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors border-2 border-black"
                >
                  Visit Live Website 
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              ) : (
                <div className="inline-flex items-center gap-3 bg-gray-100 text-gray-400 px-8 py-4 rounded-none font-bold uppercase tracking-widest border-2 border-gray-100 cursor-not-allowed">
                  Website Unavailable
                </div>
              )}
            </div>
          </div>
          
          <div className="md:col-span-4">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
              <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Project Details</h3>
              
              <div className="mb-6">
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Client</span>
                <span className="text-black font-semibold">{project.name}</span>
              </div>
              
              <div className="mb-6">
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Role</span>
                <span className="text-black font-semibold">Brand Strategy & Visibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
