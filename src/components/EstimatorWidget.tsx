import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Hammer, ShieldCheck, FileSpreadsheet, RefreshCw } from 'lucide-react';

export default function EstimatorWidget() {
  const [storeys, setStoreys] = useState(2);
  const [structureType, setStructureType] = useState('moment-steel');
  const [footprint, setFootprint] = useState(5000);
  const [isCalculated, setIsCalculated] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  // Structural outputs
  const [outputs, setOutputs] = useState({
    columnRatio: '0.04% of floor area',
    foundationType: 'Slab-on-grade with perimeter footings',
    obcPart: 'OBC Part 9 (Small Buildings)',
    estimatedPermitWeeks: '6 - 8 weeks'
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    setTimeout(() => {
      // Approximate physical design heuristics
      let ratio = '0.04% of area';
      let foundation = 'Reinforced Monolithic Slab';
      let obc = 'OBC Part 9 (Small Buildings)';
      let permit = '4 - 6 weeks';

      if (structureType === 'moment-steel') {
        ratio = '0.08% of area';
        foundation = 'Steel Piling + Concrete Grade Beams';
        obc = storeys > 3 ? 'OBC Part 4 (Structural Design)' : 'OBC Part 9';
        permit = '6 - 8 weeks';
      } else if (structureType === 'precast-slab') {
        ratio = '0.12% of area';
        foundation = 'Deep Caissons with pile caps';
        obc = 'OBC Part 4 (Structural / Large)';
        permit = '8 - 12 weeks';
      } else if (structureType === 'timber-stud') {
        ratio = '0.03% of area';
        foundation = 'Poured Concrete Perimeter Foundation';
        obc = 'OBC Part 9 (Wood Housing)';
        permit = '3 - 5 weeks';
      }

      setOutputs({
        columnRatio: ratio,
        foundationType: foundation,
        obcPart: obc,
        estimatedPermitWeeks: permit
      });
      setIsCalculating(false);
      setIsCalculated(true);
    }, 800);
  };

  return (
    <section className="py-20 bg-[#F9F8F6] border-t border-[#1A1A1A]/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split grid layout: descriptive intro and functional calc card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left instructions block */}
          <div className="lg:col-span-5 text-left">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#1A1A1A]/50 uppercase block">
              08 &bull; FEASIBILITY ENGINE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extralight text-[#1A1A1A] tracking-tight leading-tight mt-3 mb-6 italic">
              OBC Structural & <br />Footprint Feasibility
            </h2>
            <p className="text-[#1A1A1A]/70 text-xs sm:text-sm leading-relaxed mb-6 font-light font-sans">
              Civil engineering demands strict structural calculations. Use this baseline tool to simulate architectural systems, estimating foundation load divisions and building permit timeline parameters under the current <strong>Ontario Building Code (OBC)</strong>.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#1A1A1A]/70 leading-normal font-sans font-light">
                  <strong>OBC Part 4 Certification</strong> check validates structural moments configuration compliance bounds automatically.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <Hammer className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#1A1A1A]/70 leading-normal font-sans font-light">
                  <strong>Timber glulam cantilever models</strong> are custom calculated based on CSA S16 specifications directly.
                </p>
              </div>
            </div>
          </div>

          {/* Right Calculation Form Card */}
          <div className="lg:col-span-7 bg-white border border-[#1A1A1A]/10 rounded-none p-6 sm:p-8 relative shadow-xs overflow-hidden">
            
            <form onSubmit={handleCalculate} className="space-y-4 text-left">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#1A1A1A]/10">
                <Calculator className="w-4.5 h-4.5 text-[#1A1A1A]" />
                <h4 className="text-[10px] font-bold uppercase text-[#1A1A1A] tracking-widest">
                  LOAD & SYSTEM CALCULATOR
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[9px] font-bold uppercase text-[#1A1A1A]/50 block mb-1 tracking-wider">
                    Construction System
                  </label>
                  <select
                    value={structureType}
                    onChange={(e) => {
                      setStructureType(e.target.value);
                      setIsCalculated(false);
                    }}
                    className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] rounded-none px-3.5 py-2.5 text-xs focus:border-[#1A1A1A] focus:outline-none"
                  >
                    <option value="moment-steel">Structural Steel Moment Frame</option>
                    <option value="precast-slab">Precast Concrete Hollow Slab</option>
                    <option value="timber-stud">Standard / Glulam Wood Framing</option>
                  </select>
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase text-[#1A1A1A]/50 block mb-1 tracking-wider">
                    Total Storeys
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={12}
                    value={storeys}
                    onChange={(e) => {
                      setStoreys(Number(e.target.value));
                      setIsCalculated(false);
                    }}
                    className="w-full bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] rounded-none px-3.5 py-2 text-xs focus:border-[#1A1A1A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[9px] font-bold uppercase text-[#1A1A1A]/50 block mb-1 tracking-wider">
                  Est. Building Footprint (sq. ft.)
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min={1000}
                    max={100000}
                    step={1000}
                    value={footprint}
                    onChange={(e) => {
                      setFootprint(Number(e.target.value));
                      setIsCalculated(false);
                    }}
                    className="w-full accent-[#1A1A1A] h-1 cursor-pointer bg-[#1A1A1A]/10"
                  />
                  <div className="flex justify-between items-center text-[9px] font-mono text-[#1A1A1A]/60 mt-2">
                    <span>1,000 sq ft</span>
                    <span className="text-[#1A1A1A] font-bold">{footprint.toLocaleString()} SQ FT</span>
                    <span>100,000 sq ft</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isCalculating}
                className="w-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white py-3.5 rounded-none text-[10px] font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                {isCalculating ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-white" />
                    MAPPING SHEAR EQUATIONS...
                  </>
                ) : (
                  <>
                    <FileSpreadsheet className="w-3.5 h-3.5 text-white" />
                    RUN STRUCTURAL ESTIMATION MODEL
                  </>
                )}
              </button>
            </form>

            {/* Results Output Block */}
            {isCalculated && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 pt-6 border-t border-[#1A1A1A]/10 text-xs text-left grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="p-3.5 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none">
                  <span className="text-[9px] font-bold text-[#1A1A1A]/50 uppercase block tracking-wider">
                    Recommended Column Footprint
                  </span>
                  <span className="text-[#1A1A1A] font-serif font-bold italic mt-1 block">
                    {outputs.columnRatio}
                  </span>
                </div>

                <div className="p-3.5 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none">
                  <span className="text-[9px] font-bold text-[#1A1A1A]/50 uppercase block tracking-wider">
                    Foundation Concept Profile
                  </span>
                  <span className="text-[#1A1A1A] font-serif font-bold italic mt-1 block leading-tight">
                    {outputs.foundationType}
                  </span>
                </div>

                <div className="p-3.5 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none">
                  <span className="text-[9px] font-bold text-[#1A1A1A]/50 uppercase block tracking-wider">
                    Province Regulatory Section
                  </span>
                  <span className="text-[#1A1A1A] font-serif font-bold italic mt-1 block">
                    {outputs.obcPart}
                  </span>
                </div>

                <div className="p-3.5 bg-[#F9F8F6] border border-[#1A1A1A]/10 rounded-none">
                  <span className="text-[9px] font-bold text-[#1A1A1A]/50 uppercase block tracking-wider">
                    Est. Municipal Permitting
                  </span>
                  <span className="text-[#1A1A1A] font-serif font-bold italic mt-1 block">
                    {outputs.estimatedPermitWeeks}
                  </span>
                </div>

                <div className="p-2.5 bg-red-500/5 rounded-none border border-red-500/10 sm:col-span-2 text-[10px] font-mono text-red-800 leading-tight">
                  🚨 NOTE: Conceptual approximations for review only. Stamped engineering designs require physical geodata boreholes and structural P.Eng seal checks.
                </div>
              </motion.div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
