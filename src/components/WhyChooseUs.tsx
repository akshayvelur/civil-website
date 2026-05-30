import { motion } from 'motion/react';
import { Award, Shield, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      num: '01',
      title: 'Expertise',
      desc: 'Delivers superior solutions.',
      longer: 'A team of professional structural engineers with deep technical training and provincial licensing certifications.',
      icon: <Award className="w-5 h-5 text-[#1A1A1A]" />
    },
    {
      num: '02',
      title: 'Integrity',
      desc: 'Builds lasting trust.',
      longer: 'Honest load calculations, transparent permit coordination, and absolute non-compromises on public safety.',
      icon: <Shield className="w-5 h-5 text-[#1A1A1A]" />
    },
    {
      num: '03',
      title: 'Collaboration',
      desc: 'Maximizes client value.',
      longer: 'Working alongside Svedas Architects and general contractors from schematic sketch up to final structural seal.',
      icon: <Handshake className="w-5 h-5 text-[#1A1A1A]" />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#F9F8F6] border-t border-[#1A1A1A]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#1A1A1A]/50 uppercase block">
            06 &bull; CORE PRINCIPLES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extralight text-[#1A1A1A] tracking-tight leading-none mt-4 italic">
            Partnering for <span className="font-sans font-black uppercase not-italic text-[#1A1A1A]">Lasting Value.</span>
          </h2>
        </div>

        {/* 3 Value Columns Grid styled with minimalist thin lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((val) => (
            <motion.div
              key={val.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative text-left bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/35 rounded-none p-8 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl sm:text-4xl font-extralight text-[#1A1A1A]/20">
                    {val.num}
                  </span>
                  <div className="w-10 h-10 rounded-none bg-[#F9F8F6] flex items-center justify-center border border-[#1A1A1A]/10 group-hover:border-[#1A1A1A]/30 transition-all text-[#1A1A1A]">
                    {val.icon}
                  </div>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] tracking-wide mb-3 italic">
                  {val.title}
                </h3>
                
                {/* Highlighted short text exactly from image */}
                <p className="text-[#1A1A1A] text-xs sm:text-sm font-bold mb-4 uppercase tracking-widest font-sans">
                  {val.desc}
                </p>
                
                {/* Longer contextual info */}
                <p className="text-[#1A1A1A]/70 text-xs leading-relaxed font-light font-sans max-w-xs">
                  {val.longer}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
