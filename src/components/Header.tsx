import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ChevronDown, MoveRight, Menu, X, Users, MessageSquare, Briefcase, Award } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenTestimonials: () => void;
  onOpenTeam: () => void;
  onOpenCareers: () => void;
}

export default function Header({ onNavigate, onOpenTestimonials, onOpenTeam, onOpenCareers }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'services', 'projects', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-55 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F9F8F6]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 py-3 shadow-sm'
          : 'bg-[#F9F8F6]/80 py-5 border-b border-[#1A1A1A]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-[0.15em]">
            <button
              onClick={() => handleLinkClick('home')}
              className={`transition-colors cursor-pointer pb-0.5 ${
                activeSection === 'home' 
                  ? 'text-[#1A1A1A] border-b border-[#1A1A1A]' 
                  : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
            >
              Home
            </button>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                onClick={() => handleLinkClick('about')}
                className={`flex items-center gap-1 transition-colors cursor-pointer pb-0.5 ${
                  activeSection === 'about' 
                    ? 'text-[#1A1A1A] border-b border-[#1A1A1A]' 
                    : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                About
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-48 bg-white border border-[#1A1A1A]/10 shadow-lg overflow-hidden py-1 z-60"
                  >
                    <button
                      onClick={() => {
                        onOpenTeam();
                        setAboutOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-[10px] uppercase tracking-[0.1em] font-bold text-[#1A1A1A]/80 hover:bg-[#F9F8F6] hover:text-[#1A1A1A] flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <Users className="w-3.5 h-3.5 text-[#1A1A1A]/70" />
                      Team Members
                    </button>
                    <button
                      onClick={() => {
                        onOpenTestimonials();
                        setAboutOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-[10px] uppercase tracking-[0.1em] font-bold text-[#1A1A1A]/80 hover:bg-[#F9F8F6] hover:text-[#1A1A1A] flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#1A1A1A]/70" />
                      Testimonials
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => handleLinkClick('services')}
                className={`flex items-center gap-1 transition-colors cursor-pointer pb-0.5 ${
                  activeSection === 'services' 
                    ? 'text-[#1A1A1A] border-b border-[#1A1A1A]' 
                    : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                Services
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-56 bg-white border border-[#1A1A1A]/10 shadow-lg overflow-hidden py-1 z-60"
                  >
                    <button
                      onClick={() => handleLinkClick('services')}
                      className="w-full text-left px-4 py-2.5 text-[10px] uppercase tracking-[0.1em] font-bold text-[#1A1A1A]/80 hover:bg-[#F9F8F6] hover:text-[#1A1A1A] block cursor-pointer transition-colors"
                    >
                      Commercial & Institutional
                    </button>
                    <button
                      onClick={() => handleLinkClick('services')}
                      className="w-full text-left px-4 py-2.5 text-[10px] uppercase tracking-[0.1em] font-bold text-[#1A1A1A]/80 hover:bg-[#F9F8F6] hover:text-[#1A1A1A] block cursor-pointer transition-colors"
                    >
                      Residential Framework
                    </button>
                    <button
                      onClick={() => handleLinkClick('services')}
                      className="w-full text-left px-4 py-2.5 text-[10px] uppercase tracking-[0.1em] font-bold text-[#1A1A1A]/80 hover:bg-[#F9F8F6] hover:text-[#1A1A1A] block cursor-pointer transition-colors"
                    >
                      Bridge & Infrastructure
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleLinkClick('projects')}
              className={`transition-colors cursor-pointer pb-0.5 ${
                activeSection === 'projects' 
                  ? 'text-[#1A1A1A] border-b border-[#1A1A1A]' 
                  : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
              }`}
            >
              Projects
            </button>
          </nav>

          {/* Center: Brand Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center justify-center space-x-3 group cursor-pointer focus:outline-none"
          >
            {/* Geometric connection node SVG structured for editorial styling */}
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-1">
                <span className="w-2 h-2 rounded-full bg-[#1A1A1A] group-hover:bg-[#1A1A1A]/65 transition-colors duration-300" />
                <span className="w-2 h-2 rounded-full bg-[#1A1A1A]/40 group-hover:bg-[#1A1A1A] transition-colors duration-300" />
                <span className="w-2 h-2 rounded-full bg-[#1A1A1A] group-hover:bg-[#1A1A1A]/40 transition-colors duration-300" />
              </div>
              <div className="flex space-x-1 justify-center">
                <span className="w-2 h-2 rounded-full bg-[#1A1A1A]/50 group-hover:bg-[#1A1A1A] transition-colors duration-300" />
                <span className="w-2 h-2 rounded-full bg-[#1A1A1A] group-hover:bg-[#1A1A1A]/50 transition-colors duration-300" />
              </div>
            </div>
            <span className="font-display font-black text-xl tracking-tighter text-[#1A1A1A] uppercase">
              Svedas<span className="font-thin italic text-lg leading-none">Eng</span>
            </span>
          </button>

          {/* Right: Careers & Contact Us button */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={onOpenCareers}
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              Careers
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all group cursor-pointer"
            >
              Contact Bureau
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                <MoveRight className="w-2.5 h-2.5" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Action Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#1A1A1A] hover:opacity-85 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F9F8F6] border-t border-[#1A1A1A]/10 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              <button
                onClick={() => handleLinkClick('home')}
                className="block w-full text-left py-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/80 hover:text-[#1A1A1A]"
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick('about')}
                className="block w-full text-left py-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/80 hover:text-[#1A1A1A]"
              >
                About Us
              </button>
              <div className="pl-4 border-l border-[#1A1A1A]/10 space-y-2 py-1">
                <button
                  onClick={() => {
                    onOpenTeam();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left text-xs text-[#1A1A1A]/75 hover:text-[#1A1A1A] flex items-center gap-2 py-1"
                >
                  <Users className="w-3.5 h-3.5" /> Team Members
                </button>
                <button
                  onClick={() => {
                    onOpenTestimonials();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left text-xs text-[#1A1A1A]/75 hover:text-[#1A1A1A] flex items-center gap-2 py-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Client Testimonials
                </button>
              </div>
              <button
                onClick={() => handleLinkClick('services')}
                className="block w-full text-left py-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/80 hover:text-[#1A1A1A]"
              >
                Services
              </button>
              <button
                onClick={() => handleLinkClick('projects')}
                className="block w-full text-left py-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/80 hover:text-[#1A1A1A]"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  onOpenCareers();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/80 hover:text-[#1A1A1A]"
              >
                Careers
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full mt-3 flex items-center justify-between bg-[#1A1A1A] text-white px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-[#1A1A1A]/90"
              >
                Contact Bureau
                <MoveRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
