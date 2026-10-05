import Navbar from "@/components/Navbar";
import PersonalBrandHeader from "@/components/PersonalBrandHeader";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-white selection:bg-black selection:text-white">
      <Navbar />
      
      <section className="relative z-10 bg-white min-h-screen flex flex-col justify-center">
        <div className="pt-24 pb-8">
          <PersonalBrandHeader />
        </div>
        
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto px-6 text-center pb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] text-black tracking-tight">
            I help businesses get seen, <br className="hidden md:block"/>
            get chosen, and grow.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            I combine marketing, sales, creativity, and technology to help businesses build stronger brands, reach the right audiences, and turn attention into business opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto bg-black text-white text-lg font-bold tracking-widest uppercase py-5 px-12 rounded-none hover:bg-gray-900 transition-colors border-2 border-black">
              Work With Me
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto bg-transparent text-black text-lg font-bold tracking-widest uppercase py-5 px-12 rounded-none hover:bg-black hover:text-white transition-colors border-2 border-black">
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

      <footer className="py-16 bg-white">
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
