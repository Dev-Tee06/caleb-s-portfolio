import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    { id: "ethos-cliff", category: "Website Development", title: "Ethos Cliff", image: "/case1.png", desc: "A brand visibility project focused on helping businesses find their voice.", offset: "" },
    { id: "the-wavee-media", category: "Website Development", title: "The Wavee Media", image: "/case5.png", desc: "A visual storytelling project focused on creating memorable and cinematic experiences.", offset: "md:mt-24" },
    { id: "teenspray", category: "Website Development", title: "Teenspray", image: "/case3.png", desc: "Youth-focused brand strategy and visual communication.", offset: "" },
    { id: "kocre8ors", category: "Website Development", title: "Kocre8ors", image: "/case2.png", desc: "A growth-focused brand combining strategy, creative thinking and business outcomes.", offset: "md:mt-24" },
    { id: "thefoc", category: "Website Development", title: "TheFOC", image: "/case4.png", desc: "A creative portfolio focused on building strategic and visually compelling brands.", offset: "" },
    { id: "eunice-portfolio", category: "Website Development", title: "Eunice Portfolio", image: "/case6.png", desc: "A professional portfolio highlighting personal branding and creative expertise.", offset: "md:mt-24" },
    { id: "contentlabz", category: "Website Development", title: "ContentLabz", image: "/case7.png", desc: "Content systems designed to turn attention into qualified business opportunities.", offset: "" }
  ];

  const videoProjects = [
    { 
      id: "video-1",
      title: "Motion Graphics & Video Editing — Sample 01",
      category: "Motion Graphics & Video Editing",
      url: "https://youtu.be/AsFyiCAYi7Q",
      image: "https://img.youtube.com/vi/AsFyiCAYi7Q/hqdefault.jpg",
      offset: ""
    },
    {
      id: "video-2",
      title: "Motion Graphics & Video Editing — Sample 02",
      category: "Motion Graphics & Video Editing",
      url: "https://youtu.be/u0w6vUoQa5U",
      image: "https://img.youtube.com/vi/u0w6vUoQa5U/hqdefault.jpg",
      offset: "md:mt-24"
    },
    {
      id: "video-3",
      title: "Motion Graphics & Video Editing — Sample 03",
      category: "Motion Graphics & Video Editing",
      url: "https://youtu.be/4B9bvqr9Vq0",
      image: "https://img.youtube.com/vi/4B9bvqr9Vq0/hqdefault.jpg",
      offset: ""
    },
    {
      id: "video-4",
      title: "Motion Graphics & Video Editing — Sample 04",
      category: "Motion Graphics & Video Editing",
      url: "https://youtube.com/shorts/j0vUBL7A_T0?feature=share",
      image: "https://img.youtube.com/vi/j0vUBL7A_T0/hqdefault.jpg",
      offset: "md:mt-24"
    }
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
                <p className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">{item.category}</p>
                <h4 className="text-3xl font-extrabold text-black mb-4 tracking-tight">{item.title}</h4>
                <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-40 mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-gray-200 pt-32">
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Motion Graphics & Video Editing</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight max-w-3xl">
              Video editing and creative content produced for brands, businesses, creators, and digital campaigns.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {videoProjects.map((item, i) => (
            <a href={item.url} target="_blank" rel="noopener noreferrer" key={i} className={`group cursor-pointer ${item.offset} block`}>
              <div className="w-full aspect-[4/5] bg-gray-100 mb-8 overflow-hidden relative border border-gray-200 rounded-3xl shadow-md group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-[#FF0000] z-0 opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                   <span className="text-xs bg-black text-white border border-gray-400 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg mt-32">Watch Video <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">{item.category}</p>
                <h4 className="text-3xl font-extrabold text-black mb-4 tracking-tight">{item.title}</h4>
              </div>
            </a>
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
