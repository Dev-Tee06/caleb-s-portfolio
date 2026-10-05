import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative bg-white selection:bg-black selection:text-white">
      <Navbar />
      
      <section className="pt-40 pb-32 bg-black min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Let&apos;s Talk</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Tell me what you&apos;re working on, what you&apos;re trying to achieve, or what isn&apos;t working. Let&apos;s figure out the next move.
            </p>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300">
              <a href="mailto:caleboluwapelumi9@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                caleboluwapelumi9@gmail.com
              </a>
              <a href="tel:+2349014482413" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +234 901 448 2413
              </a>
            </div>
          </div>
          <div className="border-2 border-white p-10 md:p-16 bg-black relative shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]">
            <ContactForm />
          </div>
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
