import { motion } from 'motion/react';
import { ArrowUpRight, Layers, Calendar, MapPin } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface FeaturedProjectProps {
  onSelectProject: (project: Project) => void;
}

export default function FeaturedProject({ onSelectProject }: FeaturedProjectProps) {
  // Grab our primary school project matching the image data
  const schoolProject = PROJECTS.find((p) => p.id === 'assumption-catholic') || PROJECTS[0];

  return (
    <section className="py-24 bg-white border-t border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="text-left mb-10">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#1A1A1A]/50 uppercase block">
            05 &bull; PORTFOLIO SPOTLIGHT
          </span>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: School facade image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative group"
          >
            <div className="relative rounded-none p-3 border border-[#1A1A1A]/10 bg-[#F9F8F6] aspect-[4/3] shadow-xs">
              <img
                src={schoolProject.imageUrl}
                alt="Assumption Catholic Secondary School - Burlington Civil Build"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-[#1A1A1A] text-white px-3 py-1 text-[9px] uppercase tracking-widest font-mono flex items-center gap-1.5 shadow-sm">
                <MapPin className="w-3 h-3 text-white/80" />
                <span>Burlington, ON</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Project narrative and dynamic detail list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 text-left flex flex-col justify-center"
          >
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extralight text-[#1A1A1A] tracking-tight leading-snug mb-6 italic">
              {schoolProject.title}
            </h3>

            {/* Paragraph containing exact reference text */}
            <p className="text-[#1A1A1A]/70 font-sans text-xs sm:text-sm leading-relaxed mb-8 max-w-xl">
              {schoolProject.description}
            </p>

            {/* Quick specifications preview */}
            <div className="grid grid-cols-2 gap-4 pb-8 border-b border-[#1A1A1A]/10 mb-8 max-w-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-[#F9F8F6] border border-[#1A1A1A]/15 flex items-center justify-center text-[#1A1A1A]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] text-[#1A1A1A]/40 uppercase font-bold tracking-wider">Year Completed</h4>
                  <p className="text-xs font-bold text-[#1A1A1A] mt-0.5">{schoolProject.year}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-[#F9F8F6] border border-[#1A1A1A]/15 flex items-center justify-center text-[#1A1A1A]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] text-[#1A1A1A]/40 uppercase font-bold tracking-wider">Structural System</h4>
                  <p className="text-xs font-bold text-[#1A1A1A] mt-0.5 truncate max-w-[150px]">Moment Frames & Piles</p>
                </div>
              </div>
            </div>

            {/* Action buttons matching exact image style */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectProject(schoolProject)}
                className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] border border-[#1A1A1A]/40 hover:border-[#1A1A1A] rounded-none px-6 py-3 cursor-pointer group transition-all"
              >
                Learn more
                <div className="w-4 h-4 rounded-full bg-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A] group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </div>
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
