import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, HardHat } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface ProjectsGridProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsGrid({ onSelectProject }: ProjectsGridProps) {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Helper to render high-contrast blueprint vector background as a placeholder for technical cards
  const renderTechnicalBlueprint = (title: string, category: string) => {
    return (
      <div className="absolute inset-0 bg-[#1A1A1A] overflow-hidden select-none flex flex-col justify-between p-6">
        {/* Subtle grid lines matching structural engineering drawing board */}
        <div className="absolute inset-0 opacity-[0.05] bg-radial-editorial" />
        
        {/* Dynamic decorative vector circles/angles */}
        <div className="absolute top-[20%] left-[20%] w-[160px] h-[160px] rounded-full border border-white/5 flex items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-full border border-dashed border-white/5" />
        </div>
        <div className="absolute bottom-[10%] right-[5%] w-[120px] h-[120px] border-t border-r border-white/5" />

        {/* Technical Title indicators */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="font-mono text-[8px] text-white/50 tracking-wider">SEC_REF // 2026</span>
          <HardHat className="w-4 h-4 text-white/30" />
        </div>

        <div className="relative z-10 text-left mt-8">
          <p className="font-mono text-[8px] uppercase tracking-widest text-[#F9F8F6]/80 mb-1">
            {category} drafting
          </p>
          <span className="font-serif italic font-extralight text-white text-md tracking-tight leading-tight block">
            {title}
          </span>
          <span className="font-mono text-[7px] text-white/40 block mt-2">
            STAMPED IN COMPLIANCE WITH OBC SEC. 4
          </span>
        </div>

        <div className="relative z-10 font-mono text-[7px] text-white/40 flex justify-between border-t border-white/10 pt-4">
          <span>COORDS: 43.3256° N, 79.7997° W</span>
          <span>SCALE: 1:150</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-[#F9F8F6] border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section label */}
        <div className="text-left mb-12">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#1A1A1A]/50 uppercase block">
            07 &bull; INFRASTRUCTURE ARCHIVE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-extralight text-[#1A1A1A] tracking-tight leading-none mt-2 italic">
            Featured Projects & Specifications
          </h2>
        </div>

        {/* 6 Grid items displaying image or blueprint fallback */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {PROJECTS.map((proj) => {
            const isHovered = hoveredCardId === proj.id;

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHoveredCardId(proj.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => onSelectProject(proj)}
                className="relative overflow-hidden rounded-none aspect-[4/3] border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40 cursor-pointer shadow-xs group bg-[#F9F8F6] p-2 bg-white"
              >
                <div className="relative w-full h-full overflow-hidden">
                  {/* Photo image or technical fallback */}
                  {proj.imageUrl && proj.imageUrl.trim() !== '' ? (
                    <>
                      <img
                        src={proj.imageUrl}
                        alt={proj.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                      {/* Shadow overlay matches image darkness */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent pointer-events-none" />
                    </>
                  ) : (
                    renderTechnicalBlueprint(proj.title, proj.category)
                  )}

                  {/* Gentle hover layer */}
                  <div className="absolute inset-0 bg-[#1A1A1A]/5 group-hover:bg-[#1A1A1A]/15 transition-colors pointer-events-none" />

                  {/* Left side category pill display */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1.5 bg-white text-[#1A1A1A] text-[9px] font-bold uppercase tracking-widest block select-none border border-[#1A1A1A]/15 shadow-sm">
                      {proj.category}
                    </span>
                  </div>

                  {/* Right side hover action toggle button */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <AnimatePresence mode="wait">
                      {isHovered ? (
                        <motion.div
                          key="learn-more-btn"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.15 }}
                          className="flex items-center gap-1.5 bg-[#1A1A1A] text-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest border border-transparent shadow-sm"
                        >
                          Details
                          <X className="w-2.5 h-2.5 text-white/80" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus-btn"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.15 }}
                          className="w-8 h-8 border border-[#1A1A1A]/20 bg-white/90 hover:bg-white flex items-center justify-center text-[#1A1A1A] shadow-sm"
                        >
                          <Plus className="w-4 h-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
