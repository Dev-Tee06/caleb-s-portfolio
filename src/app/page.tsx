import Navbar from "@/components/Navbar";
import PersonalBrandHeader from "@/components/PersonalBrandHeader";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const services = [
    { 
      title: "Brand Identity", 
      desc: "Creating complete visual identities that help businesses become recognizable, consistent and memorable.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    { 
      title: "Brand Strategy", 
      desc: "Helping businesses clarify their positioning, audience, message and overall brand direction.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    },
    { 
      title: "Graphic Design", 
      desc: "Creating compelling visual communication for digital and physical platforms.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
    },
    { 
      title: "Web Design & Development", 
      desc: "Designing and developing modern websites that communicate a brand clearly.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    },
    { 
      title: "Creative Direction", 
      desc: "Providing creative direction that brings brand strategy, visuals and communication together.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
    },
    { 
      title: "Personal Branding", 
      desc: "Helping individuals build a recognizable and professional personal brand.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    },
    { 
      title: "Social Media Design", 
      desc: "Creating visual content that helps brands communicate consistently across social platforms.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    { 
      title: "SEO / Digital Visibility", 
      desc: "Helping businesses become more discoverable online through strategic digital visibility.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    }
  ];

  return (
    <main className="min-h-screen relative bg-white selection:bg-black selection:text-white">
      <Navbar />
      
      <section id="home" className="relative z-10 bg-white">
        <PersonalBrandHeader />
        
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto px-6 text-center mt-20 mb-32">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] text-black tracking-tight">
            I help businesses get seen, <br className="hidden md:block"/>
            get chosen, and grow.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            I combine marketing, sales, creativity, and technology to help businesses build stronger brands, reach the right audiences, and turn attention into business opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#contact" className="w-full sm:w-auto bg-black text-white text-lg font-bold tracking-widest uppercase py-5 px-12 rounded-none hover:bg-gray-900 transition-colors border-2 border-black">
              Work With Me
            </Link>
            <Link href="#portfolio" className="w-full sm:w-auto bg-transparent text-black text-lg font-bold tracking-widest uppercase py-5 px-12 rounded-none hover:bg-black hover:text-white transition-colors border-2 border-black">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Strip */}
      <section className="w-full py-16 bg-black relative z-10 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 text-white uppercase tracking-[0.3em] text-sm md:text-lg font-bold">
            <span>Strategy</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span>Media</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span>Technology</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span>Execution</span>
          </div>
        </div>
      </section>

      {/* What I Do - Icon Cards (Dividing lines removed) */}
      <section id="about" className="py-32 max-w-7xl mx-auto px-6 bg-white">
        <div className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Capabilities</h3>
            <h2 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight">What I Do</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-xl text-center md:text-right font-light leading-relaxed">
            I provide practical, strategic solutions that address real business problems from start to finish.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-10 bg-white rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-gray-100 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-colors text-black shadow-sm">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-black mb-4 tracking-tight">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed font-light">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work - High Contrast Cards */}
      <section id="portfolio" className="py-32 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Portfolio</h3>
              <h2 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight">Selected Work</h2>
            </div>
            <Link href="#contact" className="text-black font-bold uppercase tracking-widest text-sm hover:opacity-70 flex items-center gap-4 transition-opacity pb-2 border-b-2 border-black">
              Start a conversation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {[
              { id: "ethos-cliff", title: "Ethos Cliff", image: "/case1.png", desc: "A brand visibility project focused on helping businesses find their voice.", offset: "" },
              { id: "the-wavee-media", title: "The Wavee Media", image: "/case5.png", desc: "A visual storytelling project focused on creating memorable and cinematic experiences.", offset: "md:mt-24" },
              { id: "teenspray", title: "Teenspray", image: "/case3.png", desc: "Youth-focused brand strategy and visual communication.", offset: "" },
              { id: "kocre8ors", title: "Kocre8ors", image: "/case2.png", desc: "A growth-focused brand combining strategy, creative thinking and business outcomes.", offset: "md:mt-24" },
              { id: "thefoc", title: "TheFOC", image: "/case4.png", desc: "A creative portfolio focused on building strategic and visually compelling brands.", offset: "" },
              { id: "eunice-portfolio", title: "Eunice Portfolio", image: "/case6.png", desc: "A professional portfolio highlighting personal branding and creative expertise.", offset: "md:mt-24" },
              { id: "contentlabz", title: "ContentLabz", image: "/case7.png", desc: "Content systems designed to turn attention into qualified business opportunities.", offset: "" }
            ].map((item, i) => (
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
        </div>
      </section>

      {/* Working Process - Floating Dark Cards (Text Pops!) */}
      <section className="py-32 max-w-7xl mx-auto px-6 bg-white">
        <div className="mb-24 text-center">
          <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Methodology</h3>
          <h2 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight mb-6">Working Process</h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">A systematic approach to solving business problems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { num: "01", title: "Understand", desc: "Understand the business, audience, goals, and problem to be solved." },
            { num: "02", title: "Strategise", desc: "Identify the appropriate approach, priorities, and opportunities." },
            { num: "03", title: "Execute", desc: "Translate the strategy into practical work, including campaigns, websites, content, and digital solutions." },
            { num: "04", title: "Improve", desc: "Review results, identify opportunities for improvement, and refine the solution." }
          ].map((step, index) => (
            <div key={index} className="p-8 md:p-10 bg-black text-white rounded-[2rem] relative overflow-hidden group hover:-translate-y-3 transition-transform duration-300 shadow-xl hover:shadow-2xl">
              {/* Huge background number watermark */}
              <div className="text-[140px] leading-none font-extrabold text-white/5 absolute -right-6 -bottom-10 pointer-events-none select-none group-hover:text-white/10 transition-colors">
                {step.num}
              </div>
              <div className="relative z-10">
                <div className="text-sm font-bold tracking-widest text-gray-400 mb-6 uppercase">Phase {step.num}</div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h4>
                <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-2 border-white p-10 md:p-20 bg-black text-center relative shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">What are you trying to build?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-16">
              Tell me what you&apos;re working on, what you&apos;re trying to achieve, or what isn&apos;t working. Let&apos;s figure out the next move.
            </p>
            
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer - Fixed and Polished */}
      <footer className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-white p-1 rounded-full border border-gray-100 shadow-sm hover:border-gray-300 transition-all overflow-hidden w-12 h-12 relative">
              <Image src="/brand-logo.jpg" alt="CB" fill className="object-cover" />
            </div>
            <span className="text-gray-900 font-bold uppercase tracking-widest text-sm opacity-80">© {new Date().getFullYear()} Caleb Oluwapelumi</span>
          </div>
          <div className="flex gap-10">
            <a href="mailto:caleboluwapelumi9@gmail.com" className="text-gray-500 hover:text-black transition-colors font-bold uppercase tracking-widest text-sm">Email</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors font-bold uppercase tracking-widest text-sm">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
