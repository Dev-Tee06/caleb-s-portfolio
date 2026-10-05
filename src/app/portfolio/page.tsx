import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    { id: "ethos-cliff", title: "Ethos Cliff", image: "/case1.png", desc: "A brand visibility project focused on helping businesses find their voice.", offset: "" },
    { id: "the-wavee-media", title: "The Wavee Media", image: "/case5.png", desc: "A visual storytelling project focused on creating memorable and cinematic experiences.", offset: "md:mt-24" },
    { id: "teenspray", title: "Teenspray", image: "/case3.png", desc: "Youth-focused brand strategy and visual communication.", offset: "" },
    { id: "kocre8ors", title: "Kocre8ors", image: "/case2.png", desc: "A growth-focused brand combining strategy, creative thinking and business outcomes.", offset: "md:mt-24" },
    { id: "thefoc", title: "TheFOC", image: "/case4.png", desc: "A creative portfolio focused on building strategic and visually compelling brands.", offset: "" },
    { id: "eunice-portfolio", title: "Eunice Portfolio", image: "/case6.png", desc: "A professional portfolio highlighting personal branding and creative expertise.", offset: "md:mt-24" },
    { id: "contentlabz", title: "ContentLabz", image: "/case7.png", desc: "Content systems designed to turn attention into qualified business opportunities.", offset: "" }
  ];

  return (
    <main className="min-h-screen relative bg-gray-50 selection:bg-black selection:text-white">
      <Navbar />
      
      <section className="pt-40 pb-32 max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Portfolio</h3>
            <h1 className="text-5xl md:text-7xl font-extrabold text-black tracking-tight">Selected Work</h1>
          </div>
          <Link href="/contact" className="text-black font-bold uppercase tracking-widest text-sm hover:opacity-70 flex items-center gap-4 transition-opacity pb-2 border-b-2 border-black">
            Start a conversation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((item, i) => (
            <Link href={`/project/${item.id}`} key={i} className={`group cursor-pointer ${item.offset} block`}>
              <div className="w-full aspect-[4/5] bg-gray-200 mb-8 overflow-hidden relative border border-gray-200 rounded-3xl shadow-md group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10"></div>
                <Image src={item.image} alt={item.title} fill className="object-cover object-top z-0" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                   <span className="text-xs bg-black text-white border border-gray-400 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">View Case Study <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>
                </div>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-black mb-4 tracking-tight">{item.title}</h4>
                <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-white p-1 rounded-full border border-gray-100 shadow-sm hover:border-gray-300 transition-all overflow-hidden w-12 h-12 relative">
              <Image src="/logo.jpg" alt="CB" fill className="object-cover" />
            </div>
            <span className="text-gray-900 font-bold uppercase tracking-widest text-sm opacity-80">© {new Date().getFullYear()} Caleb Oluwapelumi</span>
          </div>
          <div className="flex gap-10">
            <a href="mailto:caleboluwapelumi9@gmail.com" className="text-gray-500 hover:text-black transition-colors font-bold uppercase tracking-widest text-sm">Email</a>
            <a href="tel:+2349014482413" className="text-gray-500 hover:text-black transition-colors font-bold uppercase tracking-widest text-sm">Phone</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
