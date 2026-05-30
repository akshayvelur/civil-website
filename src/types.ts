export interface Project {
  id: string;
  title: string;
  category: 'Institutional' | 'Commercial' | '3D Design' | 'Bridges' | 'Residential' | 'Recreation Centres';
  location: string;
  year: string;
  description: string;
  highlights: string[];
  specs: {
    materials: string[];
    structuralSystem: string;
    footprint: string;
    safetyCompliance: string;
  };
  imageUrl: string;
}

export interface Service {
  id: string;
  iconType: 'building' | 'residential' | 'industrial' | 'bridge';
  title: string;
  description: string;
  details: string[];
  subcategories: string[];
}

export interface Membership {
  id: string;
  name: string;
  organization: string;
  logoType: 'ospe' | 'peo';
  description: string;
}
