import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Check, BrainCircuit, ShieldAlert, Send, HardHat, MapPin } from 'lucide-react';
import { Project } from '../types';

interface InteractiveDialogProps {
  type: 'project' | 'service' | 'testimonials' | 'team' | 'contact' | 'careers';
  data?: any; // Project or Service
  onClose: () => void;
}

export default function InteractiveDialog({ type, data, onClose }: InteractiveDialogProps) {
  // Local state for contact/career forms
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Structural Consulting',
    location: 'Burlington',
    message: '',
    experience: '3+ Years'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate civil/engineering mathematical processing delays
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Dark overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md"
      />

      {/* Floating Dialog Base matches Editorial white card structures */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#F9F8F6] border border-[#1A1A1A]/10 text-[#1A1A1A] w-full max-w-2xl rounded-none overflow-hidden shadow-xl max-h-[90vh] flex flex-col p-1"
      >
        
        {/* Header toolbar */}
        <div className="p-4 border-b border-[#1A1A1A]/10 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-2 text-left">
            <span className="w-2 h-2 rounded-full bg-[#1A1A1A] block animate-pulse" />
            <span className="font-mono text-[8px] tracking-widest text-[#1A1A1A] uppercase font-bold">
              {type} portal index
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-none border border-[#1A1A1A]/10 bg-white hover:bg-[#F9F8F6] text-[#1A1A1A] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Content body Scroll Container */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-left bg-white">
          
          {/* Case 1: Project Details Specification sheets */}
          {type === 'project' && data && (
            <div>
              <div className="mb-6">
                <span className="px-2.5 py-1 bg-[#1A1A1A] text-white text-[8px] font-bold uppercase tracking-widest block w-fit">
                  {data.category} Project
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight mt-3 italic">
                  {data.title}
                </h3>
                <p className="text-[#1A1A1A]/60 text-[10px] mt-1.5 flex items-center gap-1.5 font-mono uppercase tracking-wider">
                  <MapPin className="w-3 h-3" />
                  {data.location} // Established Year: {data.year}
                </p>
              </div>

              <div className="p-4 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none mb-6">
                <h4 className="text-[10px] font-bold uppercase text-[#1A1A1A] tracking-wider mb-2">
                  Structural Narrative
                </h4>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed font-light font-sans">
                  {data.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#1A1A1A]/60">
                    Structural Materials
                  </span>
                  <ul className="mt-2 space-y-1.5">
                    {data.specs.materials.map((mat: string, idx: number) => (
                      <li key={idx} className="text-xs flex items-center gap-2 font-sans font-light text-[#1A1A1A]/80">
                        <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/50" />
                        {mat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none text-xs leading-relaxed space-y-2.5">
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#1A1A1A]/60 block">
                      Floor Footprint
                    </span>
                    <span className="text-[#1A1A1A] font-bold font-serif italic mt-0.5 block">{data.specs.footprint}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#1A1A1A]/60 block">
                      Code Safety Compliance
                    </span>
                    <span className="text-[#1A1A1A] font-medium mt-0.5 block flex items-center gap-1.5 font-mono text-[10px] uppercase">
                      <ShieldAlert className="w-3.5 h-3.5 text-orange-600" />
                      {data.specs.safetyCompliance}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key project milestones */}
              <div>
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A] mb-3">
                  Highlights & Load Verifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {data.highlights.map((hlt: string, idx: number) => (
                    <div key={idx} className="p-3 bg-white border border-[#1A1A1A]/10 rounded-none flex items-start gap-2.5 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-green-700 shrink-0 mt-0.5" />
                      <span className="text-[11px] text-[#1A1A1A]/70 font-light leading-relaxed">{hlt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Case 2: Service Details */}
          {type === 'service' && data && (
            <div>
              <div className="mb-6">
                <span className="px-2.5 py-1 bg-[#1A1A1A] text-white text-[8px] font-bold uppercase tracking-widest block w-fit">
                  Engineering Scope
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight mt-3 italic">
                  {data.title}
                </h3>
              </div>

              <p className="text-[#1A1A1A]/80 text-xs sm:text-sm leading-relaxed mb-6 font-light font-sans">
                {data.description}
              </p>

              {/* Core calculation items */}
              <div className="mb-6">
                <h4 className="text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase mb-3">
                  Core Calculations & Deliverables
                </h4>
                <div className="space-y-3">
                  {data.details.map((itm: string, idx: number) => (
                    <div key={idx} className="p-3.5 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none flex items-start gap-3 shadow-xs">
                      <div className="w-5 h-5 rounded-none bg-[#1A1A1A] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-mono font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-[#1A1A1A]/80 leading-relaxed font-light font-sans">
                        {itm}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Segmented subcategories */}
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase mb-2.5">
                  Sub-disciplines
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data.subcategories.map((sub: string, index: number) => (
                    <span key={index} className="px-2.5 py-1 bg-[#F9F8F6] text-[#1A1A1A] text-[9px] uppercase tracking-wider font-mono border border-[#1A1A1A]/10">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Case 3: Testimonials */}
          {type === 'testimonials' && (
            <div className="space-y-6">
              <div className="mb-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight italic">
                  Client Endorsements
                </h3>
                <p className="text-[10px] text-[#1A1A1A]/55 uppercase tracking-wider font-mono mt-1">Verified references across Ontario educational & board projects.</p>
              </div>

              <div className="p-5 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none text-left">
                <p className="text-xs leading-relaxed italic text-[#1A1A1A]/85 font-light">
                  "Svedas structural engineers took complete charge of our school moment frame calculation and steel integration. Their stamp response was fast, and their coordination with the general contractor kept our 45,000 sq ft academic block perfectly on schedule."
                </p>
                <div className="mt-4 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Director of Planning & Facilities</h5>
                    <p className="text-[9px] text-[#1A1A1A]/50 font-mono">Burlington Catholic District Board</p>
                  </div>
                  <span className="text-[9px] text-[#1A1A1A] font-mono uppercase tracking-widest font-bold">Year: 2020</span>
                </div>
              </div>

              <div className="p-5 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none text-left">
                <p className="text-xs leading-relaxed italic text-[#1A1A1A]/85 font-light">
                  "For custom timber load distribution, Victor Svedas remains the leading specialist. The helical pile post configurations they specified for our lakeside custom villa minimized earth scouring while perfectly supporting the heavy glazed cantilever terrace."
                </p>
                <div className="mt-4 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Senior Project Modeler</h5>
                    <p className="text-[9px] text-[#1A1A1A]/50 font-mono">Lakeside Homes & Custom Estates</p>
                  </div>
                  <span className="text-[9px] text-[#1A1A1A] font-mono uppercase tracking-widest font-bold">Year: 2022</span>
                </div>
              </div>
            </div>
          )}

          {/* Case 4: Team Members */}
          {type === 'team' && (
            <div className="space-y-6">
              <div className="mb-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight italic">
                  Director & Principal Partners
                </h3>
                <p className="text-[10px] text-[#1A1A1A]/55 uppercase tracking-wider mt-1 font-mono">Ontario-licensed structural and civil practitioners.</p>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-5 p-5 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none text-left">
                <div className="w-12 h-12 rounded-none bg-[#1A1A1A] text-white flex items-center justify-center shrink-0 text-md font-bold font-serif italic shadow-sm">
                  VS
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">Victor Svedas, P.Eng</h4>
                    <span className="px-2 py-0.5 bg-green-500/10 text-green-700 rounded text-[8px] uppercase tracking-widest font-mono font-bold">LICENSED</span>
                  </div>
                  <p className="text-[9px] font-mono text-[#1A1A1A]/55 uppercase tracking-widest mt-0.5">Chief Structural Analyst</p>
                  <p className="text-xs text-[#1A1A1A]/70 mt-2 font-light leading-relaxed">
                    Over 25 years leading institutional and commercial masonry/steel retrofitting in Burlington and the Golden Horseshoe. Direct contact on all Svedas stamped engineering drawings.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-5 p-5 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none text-left">
                <div className="w-12 h-12 rounded-none bg-[#1A1A1A] text-white flex items-center justify-center shrink-0 text-md font-bold font-serif italic shadow-sm">
                  JL
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">Jeffrey Lang, P.Eng</h4>
                    <span className="px-2 py-0.5 bg-green-500/10 text-green-700 rounded text-[8px] uppercase tracking-widest font-mono font-bold">LICENSED</span>
                  </div>
                  <p className="text-[9px] font-mono text-[#1A1A1A]/55 uppercase tracking-widest mt-0.5">Lead Civics & Foundations Modeler</p>
                  <p className="text-xs text-[#1A1A1A]/70 mt-2 font-light leading-relaxed">
                    Lead infrastructure modeler specializing in hydrological scour indices, municipal pedestrian deck bridges, and deep piling groups. Joint coordinator of environmental impact reviews.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Case 5: Contact Inquiry center with simulated calculator submission */}
          {type === 'contact' && (
            <div>
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8 px-4"
                >
                  <div className="w-12 h-12 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mt-4 italic">Inquiry Received Successfully</h3>
                  <p className="text-xs text-[#1A1A1A]/75 mt-2 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || 'valued partner'}. Your engineering request for <strong>{formData.scope}</strong> is validated. A licensed P.Eng will coordinate directly within 24 business hours.
                  </p>
                  <div className="mt-8 p-4 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none font-mono text-[9px] text-[#1A1A1A]/60 max-w-sm mx-auto space-y-1.5 text-left">
                    <p className="text-[#1A1A1A] font-bold">STAMPED RECEIPT GENERATED:</p>
                    <p>TRANSACTION_ID: SV-2026-904321</p>
                    <p>REGISTRY_PORTAL: PORT_3000_INGRESS</p>
                    <p>SUBMITTED_COORDINATE: BURLINGTON_ON</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-bold text-[#1A1A1A] italic">Project Connection Hub</h3>
                    <p className="text-[10px] text-[#1A1A1A]/55 uppercase tracking-wider font-mono mt-1">Specify your structural calculations or site coordination needs.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#1A1A1A]/50 block mb-1 tracking-wider">Company / Individual Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Svedas Builders"
                        className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] rounded-none px-3.5 py-2.5 text-xs focus:border-[#1A1A1A] focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#1A1A1A]/50 block mb-1 tracking-wider">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. developer@builders.ca"
                        className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] rounded-none px-3.5 py-2.5 text-xs focus:border-[#1A1A1A] focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#1A1A1A]/50 block mb-1 tracking-wider">Required Engineering Scope</label>
                      <select
                        name="scope"
                        value={formData.scope}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] rounded-none px-3.5 py-2.5 text-xs focus:border-[#1A1A1A] focus:outline-none focus:ring-0"
                      >
                        <option value="Structural Consulting">Structural Consulting</option>
                        <option value="Stamped OBC Permit Drawings">Stamped OBC Permit Drawings</option>
                        <option value="Masonry / Structural Frame Modeling">Masonry / Structural Frame Modeling</option>
                        <option value="BIM 3D Design Drafting">BIM 3D Design Drafting</option>
                        <option value="Hydrological Bridge Diagnostics">Hydrological Bridge Diagnostics</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-[#1A1A1A]/50 block mb-1 tracking-wider">Geographic Location</label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] rounded-none px-3.5 py-2.5 text-xs focus:border-[#1A1A1A] focus:outline-none focus:ring-0"
                      >
                        <option value="Burlington">Burlington, ON</option>
                        <option value="Toronto / GTA">Toronto & GTA</option>
                        <option value="Hamilton Area">Hamilton Region</option>
                        <option value="Halton Foothills">Halton Hills</option>
                        <option value="Other Area">Other Ontario</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-bold uppercase text-[#1A1A1A]/50 block mb-1 tracking-wider">Brief Project Parameters / Load description</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g. Double-height academic atrium addition. Symmetrical steel momentos required..."
                      className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] rounded-none p-3 text-xs focus:border-[#1A1A1A] focus:outline-none resize-none focus:ring-0"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 disabled:bg-gray-200 disabled:text-gray-400 text-white py-3.5 rounded-none text-[10px] font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <BrainCircuit className="w-4 h-4 animate-spin text-white" />
                        PROCESSING LOAD FORMULAS...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        SUBMIT COMPLIANCE REVIEW REQUEST
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Case 6: Careers Board */}
          {type === 'careers' && (
            <div className="space-y-6">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A] italic">Application Recorded</h3>
                  <p className="text-xs text-[#1A1A1A]/75 mt-2 max-w-sm mx-auto leading-relaxed">
                    Our technical lead (Victor Svedas) will review your structural portfolio files and coordinate interviews for our Burlington office.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-bold text-[#1A1A1A] italic">P.Eng Operational Openings</h3>
                    <p className="text-[10px] text-[#1A1A1A]/55 uppercase tracking-wider font-mono mt-1">Join Svedas Structural Engineers team.</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none text-left">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Senior Structural Modeler (P.Eng Required)</h4>
                          <p className="text-[9px] text-[#1A1A1A]/50 font-mono mt-0.5">Location: Burlington Office | Full-Time</p>
                        </div>
                        <span className="px-2.5 py-1 bg-white text-[#1A1A1A] rounded-none border border-[#1A1A1A]/10 text-[8px] uppercase font-mono font-bold tracking-wider">2 Openings</span>
                      </div>
                      <p className="text-xs text-[#1A1A1A]/70 mt-2 font-light">
                        Responsible for stamping and sealing OBC structural masonry, steel moments, and large cantilever foundations.
                      </p>
                    </div>

                    <div className="p-4 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none text-left">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Structural Technologist / Drafter</h4>
                          <p className="text-[9px] text-[#1A1A1A]/50 font-mono mt-0.5">Location: Burlington / Hybrid | Full-Time</p>
                        </div>
                        <span className="px-2.5 py-1 bg-white text-[#1A1A1A] rounded-none border border-[#1A1A1A]/10 text-[8px] uppercase font-mono font-bold tracking-wider">1 Opening</span>
                      </div>
                      <p className="text-xs text-[#1A1A1A]/70 mt-2 font-light">
                        Expertise in BIM structural modeling, Revit coordination, and drafting steel connections matching engineering sketches.
                      </p>
                    </div>
                  </div>

                  {/* Operational resume route */}
                  <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-[#1A1A1A]/10">
                    <h5 className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/60 text-left">Quick Resume Route</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                      <div>
                        <label className="text-[9px] font-bold uppercase text-[#1A1A1A]/50 block mb-1 tracking-wider">Full Name</label>
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] rounded-none px-3.5 py-2 text-xs focus:border-[#1A1A1A] focus:outline-none focus:ring-0"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] font-bold uppercase text-[#1A1A1A]/50 block mb-1 tracking-wider">Structural Experience</label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] rounded-none px-3.5 py-2 text-xs focus:border-[#1A1A1A] focus:outline-none focus:ring-0"
                        >
                          <option value="Graduate / EIT">Graduate / EIT Candidate</option>
                          <option value="3+ Years">3+ Years Professional</option>
                          <option value="7+ Years P.Eng">7+ Years Licensed P.Eng</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 disabled:bg-gray-200 disabled:text-gray-400 text-white py-3.5 rounded-none text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <BrainCircuit className="w-4 h-4 animate-spin" />
                          RECORDING DOSSIER...
                        </>
                      ) : (
                        <>
                          <HardHat className="w-3.5 h-3.5" />
                          SUBMIT APPLICATION PROFILE
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

        </div>

      </motion.div>
    </div>
  );
}
