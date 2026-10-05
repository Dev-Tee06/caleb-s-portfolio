import Navbar from "@/components/Navbar";
import Image from "next/image";
import { 
  Palette, 
  Lightbulb, 
  PenTool, 
  Globe, 
  Compass, 
  User, 
  Layout, 
  TrendingUp 
} from "lucide-react";

export default function AboutPage() {
  const services = [
    { 
      title: "Brand Identity", 
      desc: "Creating complete visual identities that help businesses become recognizable, consistent and memorable.",
      icon: <Palette className="w-6 h-6" />
    },
    { 
      title: "Brand Strategy", 
      desc: "Helping businesses clarify their positioning, audience, message and overall brand direction.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    { 
      title: "Graphic Design", 
      desc: "Creating compelling visual communication for digital and physical platforms.",
      icon: <PenTool className="w-6 h-6" />
    },
    { 
      title: "Web Design & Development", 
      desc: "Designing and developing modern websites that communicate a brand clearly.",
      icon: <Globe className="w-6 h-6" />
    },
    { 
      title: "Creative Direction", 
      desc: "Providing creative direction that brings brand strategy, visuals and communication together.",
      icon: <Compass className="w-6 h-6" />
    },
    { 
      title: "Personal Branding", 
      desc: "Helping individuals build a recognizable and professional personal brand.",
      icon: <User className="w-6 h-6" />
    },
    { 
      title: "Social Media Design", 
      desc: "Creating visual content that helps brands communicate consistently across social platforms.",
      icon: <Layout className="w-6 h-6" />
    },
    { 
      title: "SEO / Digital Visibility", 
      desc: "Helping businesses become more discoverable online through strategic digital visibility.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen relative bg-white selection:bg-black selection:text-white">
      <Navbar />
      
      <section className="pt-40 pb-32 max-w-7xl mx-auto px-6 bg-white">
        <div className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">Capabilities</h3>
            <h1 className="text-5xl md:text-7xl font-extrabold text-black tracking-tight">What I Do</h1>
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
