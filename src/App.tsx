/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Memberships from './components/Memberships';
import Services from './components/Services';
import FeaturedProject from './components/FeaturedProject';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectsGrid from './components/ProjectsGrid';
import EstimatorWidget from './components/EstimatorWidget';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import InteractiveDialog from './components/InteractiveDialog';

import { Project, Service } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<'project' | 'service' | 'testimonials' | 'team' | 'contact' | 'careers' | null>(null);
  const [modalData, setModalData] = useState<Project | Service | null>(null);

  // Smooth-scroll coordinate triggers
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenProjectDetails = (project: Project) => {
    setModalData(project);
    setActiveModal('project');
  };

  const handleOpenServiceDetails = (service: Service) => {
    setModalData(service);
    setActiveModal('service');
  };

  const handleOpenTestimonials = () => {
    setActiveModal('testimonials');
  };

  const handleOpenTeam = () => {
    setActiveModal('team');
  };

  const handleOpenCareers = () => {
    setActiveModal('careers');
  };

  const handleOpenContactForm = () => {
    setActiveModal('contact');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] font-sans antialiased selection:bg-[#1A1A1A]/10 selection:text-[#1A1A1A]">
      
      {/* 1. Header Navigation Bar */}
      <Header
        onNavigate={handleScrollToSection}
        onOpenTestimonials={handleOpenTestimonials}
        onOpenTeam={handleOpenTeam}
        onOpenCareers={handleOpenCareers}
      />

      {/* Main flow items */}
      <main>
        
        {/* 2. Hero banner header */}
        <Hero onLearnMoreClick={() => handleScrollToSection('projects')} />

        {/* 3. About us region */}
        <About
          onLearnMoreClick={() => handleScrollToSection('why-us')}
          onOpenTeam={handleOpenTeam}
        />

        {/* 4. OSPE & PEO credential memberships badges */}
        <Memberships />

        {/* 5. Split-panel services block with active carousel */}
        <Services onSelectService={handleOpenServiceDetails} />

        {/* 6. Featured school project spotlight */}
        <FeaturedProject onSelectProject={handleOpenProjectDetails} />

        {/* 7. Corporate core engineering values banner */}
        <WhyChooseUs />

        {/* 8. Six portfolio items categories checker grid */}
        <ProjectsGrid onSelectProject={handleOpenProjectDetails} />

        {/* 9. Dynamic mathematical structural load estimator */}
        <EstimatorWidget />

        {/* 10. Blueprint Contact Us section banner */}
        <ContactUs onOpenContactForm={handleOpenContactForm} />

      </main>

      {/* 11. Footer connection navigation bar */}
      <Footer
        onNavigate={handleScrollToSection}
        onOpenCareers={handleOpenCareers}
        onOpenContactForm={handleOpenContactForm}
      />

      {/* 12. Modular Interactive Dialog Overlays portal */}
      <AnimatePresence>
        {activeModal && (
          <InteractiveDialog
            type={activeModal}
            data={modalData}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
