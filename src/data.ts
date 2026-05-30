import { Project, Service, Membership } from './types';

export const HERO_IMAGE = '/src/assets/images/hero_building_facade_1780115053446.png';
export const ABOUT_IMAGE = '/src/assets/images/gta_urban_skyline_1780115072505.png';
export const FEATURED_PROJECT_IMAGE = '/src/assets/images/featured_school_facade_1780115094786.png';
export const COMMERCIAL_PROJECT_IMAGE = '/src/assets/images/commercial_warehouse_1780117262357.png';
export const DESIGN_PROJECT_IMAGE = '/src/assets/images/timber_deck_design_1780117281874.png';
export const BRIDGES_PROJECT_IMAGE = '/src/assets/images/ravine_footbridge_1780117298044.png';
export const RESIDENTIAL_PROJECT_IMAGE = '/src/assets/images/lakeside_villa_1780117313798.png';
export const RECREATION_PROJECT_IMAGE = '/src/assets/images/municipal_swim_center_1780117332804.png';

export const MEMBERSHIPS: Membership[] = [
  {
    id: 'ospe',
    name: 'Ontario Society of Professional Engineers',
    organization: 'OSPE',
    logoType: 'ospe',
    description: 'We hold active membership with the leading advocacy body for professional engineers in Ontario, ensuring alignment with regional policy, technical advances, and advocacy campaigns.'
  },
  {
    id: 'peo',
    name: 'Professional Engineers Ontario',
    organization: 'PEO',
    logoType: 'peo',
    description: 'Our licensed engineers hold regulatory status under the PEO, certifying professional engineering seals in the province of Ontario for strict safety and calculations compliance.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'comm-ind-inst',
    iconType: 'building',
    title: 'Commercial, Industrial, and Institutional Design',
    description: 'Comprehensive structural analysis, calculations, and detailed engineering plans for educational buildings, multi-level warehouses, and municipal hubs.',
    details: [
      'Reinforced concrete & structural steel design foundations',
      'Wind load modeling and seismic resistance calculations',
      'Precast concrete structures and beam configurations',
      'Building renovation and multi-million dollar expansion planning'
    ],
    subcategories: ['Schools', 'Warehouses', 'Corporate Offices', 'Civic Facilities']
  },
  {
    id: 'residential',
    iconType: 'residential',
    title: 'Residential Design & Structural Safety',
    description: 'Custom frame engineering, foundation designs, and structural updates for luxury single-family homes, townhouses, and multi-story wood assemblies.',
    details: [
      'Wooden structural frame optimization',
      'Foundation load calculation & retaining wall designs',
      'Basement walk-out and structural beam retrofits',
      'Building permit submission & stamped drafting reviews'
    ],
    subcategories: ['Custom Homes', 'Load-bearing Wall Removal', 'Multi-family assemblies']
  },
  {
    id: 'bridges',
    iconType: 'bridge',
    title: 'Bridge Engineering & Civics Infrastructure',
    description: 'Feasibility assessments, structural diagnostics, and engineering design for municipal pedestrian bridges, beam structures, and culverts.',
    details: [
      'Steel-timber composite deck development',
      'Hydrological scouring load analysis',
      'Fatigue life verification and load capacity reviews',
      'Rehabilitation drafting and corrosion mitigation protocols'
    ],
    subcategories: ['Pedestrian Crossings', 'Municipal Culverts', 'Span Inspections']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'assumption-catholic',
    title: 'Assumption Catholic Secondary School',
    category: 'Institutional',
    location: 'Burlington, ON',
    year: '2020',
    description: 'Working closely with Svedas Architects Inc., we led the structural engineering and drafting for a multi-million dollar academic wing addition. The project involved complicated integration of new wide-span steel frames into the existing load-bearing brick facade, creating spacious double-volume classrooms and a high-clearance atrium entrance.',
    highlights: [
      'Seamless link between new steel frame and existing precast structures',
      'Double-height safety-glazed atrium structural support',
      'Advanced cantilevered canopies over the student square entrance',
      'Seismic upgrade of structural brick junctions'
    ],
    specs: {
      materials: ['Structural Grade A36 Steel', 'C30/37 Portland Cement Concrete', 'High-tensile Tension Rods'],
      structuralSystem: 'Steel Moment Frame with Precast Concrete Hollow-core Slabs',
      footprint: '45,000 sq. ft. expansion overlay',
      safetyCompliance: 'CSA S16 (Limit States Design of Steel Structures) & OBC 2012'
    },
    imageUrl: FEATURED_PROJECT_IMAGE
  },
  {
    id: 'hillside-public',
    title: 'Hillside Public School',
    category: 'Institutional',
    location: 'Burlington, ON',
    year: '2019',
    description: 'Engineered the new masonry structural shell and entry canopy structure for an academic facility expansion, focusing heavily on children transit safety, thermal barrier integration, and modular room framing.',
    highlights: [
      'Load-bearing reinforced masonry block walls',
      'Thermally broken galvanized steel canopy system',
      'Vibration mitigation on gymnasium assembly slabs'
    ],
    specs: {
      materials: ['Reinforced Concrete Blocks', 'Structural Lumber Framing', 'Galvanized Steel Channels'],
      structuralSystem: 'Hybrid Load-bearing Masonry and Steel Joists',
      footprint: '18,500 sq. ft. building envelope',
      safetyCompliance: 'CSA S304.1 (Design of Masonry Structures)'
    },
    imageUrl: '/src/assets/images/hero_building_facade_1780115053446.png'
  },
  {
    id: 'red-creek-storage',
    title: 'Red Creek Commercial Facility',
    category: 'Commercial',
    location: 'Hamilton, ON',
    year: '2021',
    description: 'High-clearance pre-engineered storage warehouse with massive 24-foot clear span overhead doors, heavy machinery concrete floor slabs designed for extreme axial wheel load weights.',
    highlights: [
      'Pre-engineered metal building (PEMB) wind framework',
      'Fiber-reinforced industrial slab on grade configuration',
      'Sub-soil verification and dynamic pile group foundations'
    ],
    specs: {
      materials: ['High-yield ASTM A992 I-beams', 'Polypropylene Fiber-reinforced Concrete', 'Z-girt Purlins'],
      structuralSystem: 'Clear-span Rigid Frame Portal Frame',
      footprint: '28,000 sq. ft. open floorplan',
      safetyCompliance: 'OBC Part 4 Industrial Safety Code'
    },
    imageUrl: COMMERCIAL_PROJECT_IMAGE
  },
  {
    id: 'deck-draft-rendering',
    title: 'Custom Modern Timber Deck Frame',
    category: '3D Design',
    location: 'Oakville, ON',
    year: '2022',
    description: 'Advanced 3D mathematical lumber load modeling and BIM design for a multi-tiered outdoor platform including steel structural posts, dynamic helical pile anchors, and composite wood framing.',
    highlights: [
      'Digital timber load optimization simulation',
      'Helical pile structural torque specifications',
      'Full architectural drafting with 3D structural model'
    ],
    specs: {
      materials: ['Pressure Treated Structural Spruce', 'Black Powder-coated Steel Connectors', 'Helical Steel Piles'],
      structuralSystem: 'Cantilevered Post-and-Beam Timber Frame',
      footprint: '1,200 sq. ft. scenic deck layout',
      safetyCompliance: 'OBC Division B Part 9 Deck Guidelines'
    },
    imageUrl: DESIGN_PROJECT_IMAGE
  },
  {
    id: 'bronte-creek-crossing',
    title: 'Bronte Creek Ravine Footbridge',
    category: 'Bridges',
    location: 'Halton, ON',
    year: '2023',
    description: 'Designed a high-durability scenic pedestrian footbridge bridging a sensitive river ecosystem. Preserved local foliage using specialized long-reach cranes and specialized helical abutments.',
    highlights: [
      'Self-weathering Cor-Ten structural steel framing',
      'Zero-impact stream-bed helical pile abutments',
      'Weather-resistant composite non-slip deck tracks'
    ],
    specs: {
      materials: ['Cor-Ten Weathering Steel', 'Fibre-Reinforced Polymer Decks', 'Deep Helical Anchor Piles'],
      structuralSystem: 'Pratt Truss Footbridge Configuration',
      footprint: '85 ft. single-span length',
      safetyCompliance: 'CHBDC CSA S6 (Canadian Highway Bridge Design Code)'
    },
    imageUrl: BRIDGES_PROJECT_IMAGE
  },
  {
    id: 'lakeside-custom-villa',
    title: 'Lakeside Residence Cantilever',
    category: 'Residential',
    location: 'Burlington, ON',
    year: '2022',
    description: 'Engineered the open-concept timber-to-steel connections for a high-end luxury mansion, featuring a spectacular 12-foot cantilevered sun terrace over a natural slope.',
    highlights: [
      'Structural steel moments integrated with standard wood studs',
      'Terrace structural stabilization against high-velocity lake wind shear',
      'Thermal bridging insulation design at steel joints'
    ],
    specs: {
      materials: ['Premium Douglas Fir Glulam Beams', 'Structural Steel flitch plates', 'Concrete Pier support'],
      structuralSystem: 'Hybrid Timber-Steel Moment Frame',
      footprint: '6,200 sq. ft. custom villa',
      safetyCompliance: 'OBC Part 9 Residential Wood Frame Standard'
    },
    imageUrl: RESIDENTIAL_PROJECT_IMAGE
  },
  {
    id: 'aquatic-municipal-slide',
    title: 'Burlington Community Swim Center',
    category: 'Recreation Centres',
    location: 'Burlington, ON',
    year: '2021',
    description: 'Civil and structural design support for the indoor community pool, including foundation waterproofing slabs, heavy humidity HVAC ceiling structural mounts, and safety slide load supports.',
    highlights: [
      'Chemical-resistant concrete sealant applications',
      'Slide anchor frame calculations for dynamic water-rider loads',
      'Corrosion resistant structural stainless steel assemblies'
    ],
    specs: {
      materials: ['Type HS High-Sulfate Resistant Concrete', '316L Marine-grade Stainless Steel', 'EPDM Seals'],
      structuralSystem: 'Sulfate-resistant Monolithic Concrete Footing Basin',
      footprint: '16,000 sq. ft. multi-pool arena',
      safetyCompliance: 'CSA S304 Masonry & OBC Recreation Facility Standard'
    },
    imageUrl: RECREATION_PROJECT_IMAGE
  }
];
