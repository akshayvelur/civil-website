import { motion } from 'motion/react';
import { ArrowUpRight, Shield, Briefcase } from 'lucide-react';
import { ABOUT_IMAGE } from '../data';

interface AboutProps {
  onLearnMoreClick: () => void;
  onOpenTeam: () => void;
}

export default function About({ onLearnMoreClick, onOpenTeam }: AboutProps) {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#F9F8F6] overflow-hidden border-t border-[#1A1A1A]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image wrapper styled with thin premium paper borders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative rounded-none p-3 border border-[#1A1A1A]/10 bg-white aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] shadow-xs">
              <img
                src={ABOUT_IMAGE}
                alt="Golden Horseshoe and GTA Burlington Region Coverage"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              {/* Image grid overlay details */}
              <div className="absolute inset-x-3 bottom-3 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/40 to-transparent p-5 text-white">
                <span className="font-mono text-[9px] text-[#F9F8F6] bg-[#1A1A1A] px-2.5 py-1 uppercase tracking-widest">
                  REGIONAL FOCUS
                </span>
                <p className="text-xs font-serif italic mt-2 tracking-wide text-white/95">
                  Serving Burlington, the GTA, & Golden Horseshoe
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Informative copy and action buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Section designation */}
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#1A1A1A]/50 uppercase mb-4 block">
              02 &bull; FIRM PROFILE
            </span>

            {/* Display headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extralight text-[#1A1A1A] tracking-tight leading-tight mb-6 italic">
              Delivering Value <br />
              Through <span className="font-sans font-black uppercase not-italic text-[#1A1A1A]">Expertise.</span>
            </h2>

            {/* Description matching exact text copy */}
            <p className="text-[#1A1A1A]/70 font-sans text-xs sm:text-sm leading-relaxed mb-8 max-w-xl">
              We serve the Golden Horseshoe and GTA, delivering successful projects through a collaborative,
              client-focused approach and high professional standards. Our team blends technical mastery,
              pioneering design codes, and tight project oversight to lay foundations that last.
            </p>

            {/* Sub-features or quick value points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8 border-b border-[#1A1A1A]/10 mb-8 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-white border border-[#1A1A1A]/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#1A1A1A]" />
                </div>
                <span className="text-[11px] text-[#1A1A1A] font-bold uppercase tracking-wider">Stamped OBC Certified Review</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-white border border-[#1A1A1A]/10 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-[#1A1A1A]" />
                </div>
                <span className="text-[11px] text-[#1A1A1A] font-bold uppercase tracking-wider">Multi-Million Expansion Projects</span>
              </div>
            </div>

            {/* CTA actions styled elegantly */}
            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] border border-[#1A1A1A]/40 hover:border-[#1A1A1A] rounded-none px-6 py-3 cursor-pointer group transition-all"
              >
                Learn more
                <div className="w-4 h-4 rounded-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 flex items-center justify-center text-white transition-colors">
                  <ArrowUpRight className="w-2.5 h-2.5 group-hover:rotate-45 transition-transform" />
                </div>
              </button>

              <button
                onClick={onOpenTeam}
                className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60 hover:text-[#1A1A1A] underline underline-offset-4 cursor-pointer py-2 px-3 transition-colors"
              >
                Meet Our Professional Engineers
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
