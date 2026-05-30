import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

interface ContactUsProps {
  onOpenContactForm: () => void;
}

export default function ContactUs({ onOpenContactForm }: ContactUsProps) {
  return (
    <section id="contact" className="py-20 bg-[#F9F8F6] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width elegant block matches the Danish cluster site blocks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-none bg-[#1A1A1A] p-8 sm:p-12 md:p-16 border border-none shadow-sm text-left overflow-hidden"
        >
          {/* Subtle blueprint grid line overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-radial-editorial pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 sm:gap-12 w-full">
            
            {/* Left Texts */}
            <div className="max-w-xl text-left">
              <span className="text-[10px] font-bold tracking-[0.25em] text-white/40 uppercase block mb-3">
                09 &bull; GET IN TOUCH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extralight text-white tracking-tight leading-tight italic">
                Ready to have a<br />
                <span className="font-sans font-black uppercase not-italic text-white">successful project?</span>
              </h2>
              <p className="text-white/70 font-sans text-xs sm:text-sm mt-4 font-light leading-relaxed">
                Connect with Svedas licensed engineers to start your feasibility study, structural calculations review, or stamped building permitting designs today.
              </p>
            </div>

            {/* Right Button matches Contact Bureau blocks */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenContactForm}
              className="bg-white hover:bg-white/90 text-[#1A1A1A] p-4 pl-8 pr-4 rounded-none flex items-center justify-between gap-6 text-[10px] font-bold tracking-[0.2em] uppercase transition-all shadow-md cursor-pointer w-full sm:w-auto shrink-0"
            >
              Connect with us
              <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.button>
            
          </div>
        </motion.div>

        {/* Small inline geographic credentials below card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 text-left text-[#1A1A1A]/70 font-mono text-[9px] tracking-widest uppercase py-6 border-t border-[#1A1A1A]/10">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-[#1A1A1A]/50 shrink-0" />
            <span>Burlington Office // Golden Horseshoe</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-3.5 h-3.5 text-[#1A1A1A]/50 shrink-0" />
            <span>info@svedasengineering.ca</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-3.5 h-3.5 text-[#1A1A1A]/50 shrink-0" />
            <span>+1 (905) 555-0196</span>
          </div>
        </div>

      </div>
    </section>
  );
}
