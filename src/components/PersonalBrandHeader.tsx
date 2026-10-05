import Image from "next/image";

export default function PersonalBrandHeader() {
  return (
    <header className="relative w-full mb-32 pt-[112px] bg-black">
      {/* Banner */}
      <div className="w-full bg-black h-72 md:h-[28rem] relative flex flex-col items-center justify-center overflow-hidden border-b border-white/10">
        
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
           <Image src="/logo.jpg" alt="Brand Accent" width={1000} height={1000} className="object-cover grayscale" priority />
        </div>

        {/* Identity - Removed the logo above the name per request */}
        <div className="relative z-10 text-center flex flex-col items-center mt-[-4rem]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-widest mb-4 uppercase" style={{ fontFamily: 'var(--font-outfit)' }}>
            Caleb Oluwapelumi
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 font-medium tracking-[0.4em] uppercase">
            Tech & Media Strategist
          </p>
        </div>
      </div>

      {/* Portrait Overlap */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-20">
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[8px] border-white shadow-2xl relative bg-gray-100 flex items-center justify-center">
           <span className="text-gray-400 text-sm absolute font-semibold tracking-widest uppercase">Portrait</span>
           <Image 
             src="/hero.jpg" 
             alt="Caleb Oluwapelumi Portrait" 
             fill 
             className="object-cover"
             priority
           />
        </div>
      </div>
    </header>
  );
}
