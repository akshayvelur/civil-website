import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCareers: () => void;
  onOpenContactForm: () => void;
}

export default function Footer({ onNavigate, onOpenCareers, onOpenContactForm }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-white border-t border-[#1A1A1A]/10 py-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer line matching the layout completely */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 pb-10 border-b border-[#1A1A1A]/10">
          
          {/* Logo Brand Panel (matches header design) */}
          <div className="md:col-span-3 flex justify-start">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 group cursor-pointer focus:outline-none"
            >
              <div className="flex flex-col space-y-1">
                <div className="flex space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] group-hover:bg-[#1A1A1A]/65 transition-colors" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/40 group-hover:bg-[#1A1A1A] transition-colors" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] group-hover:bg-[#1A1A1A]/40 transition-colors" />
                </div>
                <div className="flex space-x-1 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/50 group-hover:bg-[#1A1A1A] transition-colors" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] group-hover:bg-[#1A1A1A]/50 transition-colors" />
                </div>
              </div>
              <span className="font-display font-black text-lg tracking-tighter text-[#1A1A1A] uppercase">
                Svedas<span className="font-thin italic text-base">Eng</span>
              </span>
            </button>
          </div>

          {/* Centered Navigation */}
          <nav className="md:col-span-6 flex flex-wrap justify-center items-center gap-6 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A]/60">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#1A1A1A] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#1A1A1A] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-[#1A1A1A] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-[#1A1A1A] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={onOpenCareers}
              className="hover:text-[#1A1A1A] transition-colors cursor-pointer"
            >
              Careers
            </button>
          </nav>

          {/* Right connect button */}
          <div className="md:col-span-3 flex justify-end">
            <button
              onClick={onOpenContactForm}
              className="flex items-center gap-2.5 bg-transparent border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-[#1A1A1A] px-5 py-2 rounded-none text-[9px] font-bold tracking-widest uppercase transition-all group cursor-pointer"
            >
              Contact Bureau
              <div className="w-4 h-4 rounded-full bg-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A] group-hover:translate-x-1 transition-transform">
                <ArrowUpRight className="w-2.5 h-2.5" />
              </div>
            </button>
          </div>

        </div>

        {/* Lower row: Design HTML's iconic technical metadata metric cells (Twin badges) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-10 pb-8 border-b border-[#1A1A1A]/10 text-left">
          <div className="flex flex-wrap gap-8 lg:gap-16">
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">Staff Engineers</span>
              <span className="font-mono text-xs text-[#1A1A1A] font-bold">14</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">Patents Registered</span>
              <span className="font-mono text-xs text-[#1A1A1A] font-bold">08</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">Safety Seal rating</span>
              <span className="font-mono text-xs text-[#1A1A1A] font-bold">A++ Class Certificate</span>
            </div>
          </div>
          <div className="text-[9px] font-bold uppercase tracking-[0.25em] italic text-[#1A1A1A]/50">
            Structural Excellence Through Calculation.
          </div>
        </div>

        {/* Quiet footer print info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[8px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest">
          <p>© {currentYear} SVEDAS STRUCTURAL ENGINEERS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
            <span className="hover:text-[#1A1A1A]/70 transition-colors pointer-events-none">OBC PT. 4 CALCULATIONS REVIEW STANDARDS REGISTERED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
