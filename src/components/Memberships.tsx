import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { MEMBERSHIPS } from '../data';

export default function Memberships() {
  return (
    <section className="py-16 bg-white border-t border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text: Industry compliance narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-left"
          >
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#1A1A1A]/50 uppercase mb-2 block">
              03 &bull; CORPORATE BADGES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extralight text-[#1A1A1A] tracking-tight leading-snug mb-4 italic">
              Industry-Recognized,<br />
              <span className="font-sans font-black uppercase not-italic text-[#1A1A1A]">Professional Seal.</span>
            </h3>
            <p className="text-[#1A1A1A]/70 text-xs sm:text-sm leading-relaxed font-light">
              We hold professional memberships with leading industry organizations, reflecting our commitment to quality, expertise, and adherence to high standards in engineering. Every drawing we submit holds certified architectural validation.
            </p>
          </motion.div>

          {/* Right Cards: The elegant twin membership box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none p-6 sm:p-8 transition-colors duration-400 group"
          >
            <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#1A1A1A]/10">
              
              {/* OSPE Registry */}
              <div className="flex-1 flex flex-col justify-between pt-4 sm:pt-0 sm:pr-4 text-left">
                <div className="flex items-start gap-4 mb-4">
                  {/* Custom OSPE Logo recreation */}
                  <div className="w-12 h-12 shrink-0 rounded-none bg-white border border-[#1A1A1A]/15 flex items-center justify-center text-[#1A1A1A] transition-colors">
                    <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 28C10 20 18 10 30 14C30 24 22 30 10 28Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="20" cy="20" r="2.5" fill="#1A1A1A"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-mono tracking-widest text-[#1A1A1A]/50 uppercase">
                      PROVINCIAL REGISTRY
                    </h4>
                    <h5 className="text-[11px] font-bold text-[#1A1A1A] tracking-wide mt-1 uppercase">
                      ONTARIO SOCIETY OF <br />PROFESSIONAL ENGINEERS
                    </h5>
                  </div>
                </div>
                <p className="text-[11px] text-[#1A1A1A]/70 leading-relaxed font-light">
                  Active member status, coordinating regional technical roundtables and Ontario structural regulation compliance.
                </p>
              </div>

              {/* PEO Registry */}
              <div className="flex-1 flex flex-col justify-between pt-6 sm:pt-0 sm:pl-8 text-left">
                <div className="flex items-start gap-4 mb-4">
                  {/* Custom PEO Logo recreation */}
                  <div className="w-12 h-12 shrink-0 rounded-none bg-white border border-[#1A1A1A]/15 flex items-center justify-center text-[#1A1A1A] transition-colors">
                    <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2500/svg">
                      <line x1="12" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="12" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="12" y1="28" x2="28" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M8 8V32H32" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-mono tracking-widest text-[#1A1A1A] uppercase">
                      LICENSED SEAL
                    </h4>
                    <h5 className="text-[11px] font-bold text-[#1A1A1A] tracking-wide mt-1 uppercase">
                      PROFESSIONAL ENGINEERS <br />ONTARIO
                    </h5>
                  </div>
                </div>
                <p className="text-[11px] text-[#1A1A1A]/70 leading-relaxed font-light">
                  Guarantees high math validation, structural stamp authorization, and public safety enforcement criteria.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
