import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onLearnMoreClick: () => void;
}

export default function Hero({ onLearnMoreClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden bg-[#F9F8F6] text-[#1A1A1A]"
    >
      {/* Decorative Editorial Dotted grid pattern (matches Design HTML style) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-radial-editorial" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full select-none relative z-10">
        
        {/* Main Grid reminiscent of high-end design agency architectures */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#1A1A1A]/10 pt-10">
          
          {/* Central Panel: Majestic big typography (Col span 8 now that sidebar is removed) */}
          <div className="col-span-1 lg:col-span-8 flex flex-col justify-center px-2 sm:px-4 lg:px-6">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6 pt-2"
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-[#1A1A1A] leading-[1.05] italic">
                The Foundation to a <span className="font-sans font-black uppercase not-italic block tracking-tighter text-[#1A1A1A] text-5xl sm:text-6xl md:text-[5.5rem] mt-2 leading-[0.9]">Successful Project</span>
              </h1>

              <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#1A1A1A]/70 font-light">
                Delivering sophisticated structural engineering calculations, robust design assessments, and architectural frameworks optimized for modern construction practices.
              </p>

              {/* Action trigger button matching Contact Bureau black block design */}
              <div className="pt-4 flex items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onLearnMoreClick}
                  className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white px-7 py-3.5 text-[10px] font-bold uppercase tracking-widest transition-all group cursor-pointer flex items-center gap-3"
                >
                  Explore Portfolio
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight className="w-3" />
                  </div>
                </motion.button>

                {/* Micro metrics lines */}
                <div className="hidden sm:flex gap-2">
                  <div className="w-20 h-0.5 bg-[#1A1A1A]" />
                  <div className="w-8 h-0.5 bg-[#1A1A1A]/30" />
                  <div className="w-4 h-0.5 bg-[#1A1A1A]/10" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Panel: Side Stats Metadata card in black (Col span 4) */}
          <div className="col-span-1 lg:col-span-4 bg-[#1A1A1A] text-white p-8 lg:p-10 flex flex-col justify-between shadow-xs">
            <div className="space-y-8">
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 block mb-1">Scope Domain</span>
                <span className="font-serif italic text-2xl">High Frequency Structural calculations</span>
              </div>
              <div className="border-t border-white/10 pt-4">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 block mb-1">Core Materiality</span>
                <span className="font-mono text-xs text-white/90">Reinforced Concrete, Hybrid Timber & Steel Truss systems v3</span>
              </div>
              <div className="border-t border-white/10 pt-4">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 block mb-1">Certifications</span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-green-400">
                  PEO Registered &bull; OSPE Corporate
                </span>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6 mt-10">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 block mb-2 font-mono">SITE CODE #CO-4200</span>
              <span className="font-serif text-lg italic text-white/80 leading-tight block">
                Excellence via calculation.
              </span>
            </div>
          </div>

        </div>

        {/* Dynamic Image Canvas Slider block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full rounded-none overflow-hidden border border-[#1A1A1A]/10 mt-12 bg-white p-2.5 shadow-sm"
        >
          <div className="relative overflow-hidden w-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src={HERO_IMAGE}
              alt="Apex Civil Engineering Architectural School Build"
              className="w-full h-[300px] sm:h-[400px] md:h-[480px] object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Centered minimalist citation capsule */}
          <div className="absolute bottom-6 left-4 right-4 z-20 flex justify-center">
            <div className="bg-[#1A1A1A] text-white px-5 py-3 shadow-lg max-w-xl text-center">
              <p className="text-[11px] font-mono tracking-wider font-light uppercase">
                "our dedication and experience aids in achieving the main goal; a successful project completion."
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
