import Navbar from "@/components/Navbar";
import Image from "next/image";

const insights = [
  {
    title: "Build a digital presence that earns trust",
    copy:
      "A strong online presence begins with clarity. Good design, clear messaging, and a well-structured experience help visitors understand value quickly and confidently.",
  },
  {
    title: "Brand communication should feel consistent",
    copy:
      "Every touchpoint — website, motion, content, and messaging — should reinforce the same identity. Consistency creates recognition and trust.",
  },
  {
    title: "Visibility is part of strategy",
    copy:
      "A beautiful brand is only valuable when the right audience can find it. Search visibility and digital structure should support business growth, not sit apart from it.",
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen relative bg-[#F7F6F2] selection:bg-[#101827] selection:text-[#F7F6F2]">
      <Navbar />

      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6 md:pt-40 md:pb-20">
        <div className="mb-16 max-w-4xl">
          <p className="editorial-label text-[#22B8B0] mb-5">Insights</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#101827] tracking-tight">Perspectives on digital growth and creative clarity.</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {insights.map((insight) => (
            <article key={insight.title} className="premium-panel rounded-[2rem] p-8">
              <div className="w-12 h-12 rounded-full bg-[#22B8B0]/15 flex items-center justify-center text-[#101827] font-bold mb-6">0{insights.indexOf(insight) + 1}</div>
              <h2 className="text-2xl font-extrabold text-[#101827] tracking-tight mb-4">{insight.title}</h2>
              <p className="text-lg leading-relaxed text-[#667085]">{insight.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="py-10 bg-white border-t border-[#101827]/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-white p-1 rounded-full border border-[#101827]/10 shadow-sm hover:border-[#22B8B0] transition-all overflow-hidden w-12 h-12 relative">
              <Image src="/logo.jpg" alt="CB" fill className="object-cover" />
            </div>
            <span className="text-[#101827] font-bold uppercase tracking-[0.18em] text-sm opacity-80">© {new Date().getFullYear()} Caleb Oluwapelumi</span>
          </div>
          <div className="flex gap-10">
            <a href="mailto:caleboluwapelumi9@gmail.com" className="text-[#667085] hover:text-[#101827] transition-colors font-bold uppercase tracking-[0.18em] text-sm">Email</a>
            <a href="tel:+2349014482413" className="text-[#667085] hover:text-[#101827] transition-colors font-bold uppercase tracking-[0.18em] text-sm">Phone</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
