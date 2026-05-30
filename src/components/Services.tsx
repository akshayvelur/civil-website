import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Building, Home, HelpCircle, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SERVICES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SERVICES.length - 1 ? 0 : prev + 1));
  };

  // Helper to render the relevant icon
  const renderIcon = (type: string, isActive: boolean) => {
    const iconClass = `w-5 h-5 ${isActive ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/50'}`;
    switch (type) {
      case 'building':
        return <Building className={iconClass} />;
      case 'residential':
        return <Home className={iconClass} />;
      default:
        return <HelpCircle className={iconClass} />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#F9F8F6] overflow-hidden border-t border-[#1A1A1A]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Grid: Split panel layout matching image exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-none overflow-hidden border border-[#1A1A1A]/10 bg-white">
          
          {/* Left Dark Block Panel */}
          <div className="lg:col-span-4 bg-[#1A1A1A] text-white p-8 sm:p-12 flex flex-col justify-between text-left relative min-h-[350px] rounded-none">
            {/* Ambient structural background pattern lines */}
            <div className="absolute inset-0 opacity-[0.03] bg-radial-editorial pointer-events-none" />
            
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 block mb-3">
                04 &bull; SERVICE SPECTRUM
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extralight text-white tracking-tight leading-tight italic">
                Your vision.<br />
                <span className="font-sans font-black uppercase not-italic text-white">Our Expertise.</span>
              </h2>
            </div>

            {/* Slider control buttons */}
            <div className="flex items-center gap-4 mt-8 z-10">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-none border border-white/20 hover:border-white/50 flex items-center justify-center text-white hover:bg-white/5 transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-none border border-white/20 hover:border-white/50 flex items-center justify-center text-white hover:bg-white/5 transition-all cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Cards Deck Carousel Slider */}
          <div className="lg:col-span-8 p-6 sm:p-10 bg-[#FAF9F7] flex items-center overflow-hidden border-t lg:border-t-0 lg:border-l border-[#1A1A1A]/10">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative transition-all duration-500">
                
                {/* Loop 2 visible cards based on slider state */}
                {(() => {
                  const items = [
                    SERVICES[currentIndex],
                    SERVICES[(currentIndex + 1) % SERVICES.length]
                  ];

                  return items.map((service, idx) => {
                    const isActive = idx === 0;

                    return (
                      <motion.div
                        key={service.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`rounded-none p-6 sm:p-8 text-left transition-all duration-300 flex flex-col justify-between h-[360px] border ${
                          isActive
                            ? 'bg-white text-[#1A1A1A] border-[#1A1A1A]/15 shadow-sm translate-y-[-8px]'
                            : 'bg-[#F4F3F0]/80 text-[#1A1A1A]/70 border-[#1A1A1A]/5 scale-[0.98]'
                        }`}
                      >
                        {/* Upper Service Icon */}
                        <div>
                          <div className={`w-12 h-12 rounded-none flex items-center justify-center mb-6 border ${
                            isActive ? 'bg-[#F9F8F6] border-[#1A1A1A]/15' : 'bg-white/40 border-[#1A1A1A]/5'
                          }`}>
                            {renderIcon(service.iconType, isActive)}
                          </div>

                          <h3 className={`font-serif text-base sm:text-lg font-bold tracking-tight line-clamp-2 italic ${
                            isActive ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/80'
                          }`}>
                            {service.title}
                          </h3>

                          {/* Divider line */}
                          <div className={`w-12 h-[1.5px] my-4 ${
                            isActive ? 'bg-[#1A1A1A]/15' : 'bg-[#1A1A1A]/5'
                          }`} />

                          <p className={`text-xs leading-relaxed line-clamp-3 ${
                            isActive ? 'text-[#1A1A1A]/75 font-normal' : 'text-[#1A1A1A]/60 font-light'
                          }`}>
                            {service.description}
                          </p>
                        </div>

                        {/* Interactive trigger link */}
                        <button
                          onClick={() => onSelectService(service)}
                          className={`mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest cursor-pointer group transition-all ${
                            isActive ? 'text-[#1A1A1A] hover:opacity-85' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                          }`}
                        >
                          Learn more
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>

                      </motion.div>
                    );
                  });
                })()}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
