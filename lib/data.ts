// Fallback static data used when Sanity data is unavailable

export const FALLBACK_STATS = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Expert Team' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

export const FALLBACK_CLIENTS = [
  'Saudi Aramco', 'SABIC', 'Hyundai E&C', 'Samsung C&T', 'Bechtel',
  'JGC Corp', 'Sulzer', 'Veolia', 'GS E&C', 'Schlumberger', 'TechnipFMC', 'Fluor',
];

export const FALLBACK_WHY_REASONS = [
  'Approved Aramco Vendor',
  'Uncompromising Quality Assurance',
  'Highly Skilled Workforce',
  'Deep Industrial Expertise',
  'Rapid & Reliable Delivery',
  'Rigorous Safety Standards',
  'Advanced Logistics Network',
  '100% Customer Satisfaction',
];

export const FALLBACK_PRODUCTS = [
  {
    title: 'Industrial Gaskets & Seals',
    description: 'High-pressure metallic, semi-metallic, and non-metallic gaskets for critical piping systems.',
    imagePath: '/product-gaskets.png',
  },
  {
    title: 'Mechanical Fittings & Valves',
    description: 'Heavy-duty steel flanges, hydraulic fittings, and precision control valves.',
    imagePath: '/product-fittings.png',
  },
  {
    title: 'Safety & PPE Gear',
    description: 'Aramco-compliant protective equipment, from impact helmets to fire-resistant apparel.',
    imagePath: '/product-safety.png',
  },
];

export const FALLBACK_SERVICES = [
  { title: 'Equipment Rental', slug: 'equipment-rental', desc: 'Heavy-duty machinery and industrial fleet solutions.', cardImage: '/services/equipment-rental.png' },
  { title: 'Manpower Supply', slug: 'manpower-supply', desc: 'Skilled technical and operational workforce.', cardImage: '/services/manpower-supply.png' },
  { title: 'Asphalt Works', slug: 'asphalt-works', desc: 'Premium paving and infrastructure surfacing.', cardImage: '/services/asphalt-works.png' },
  { title: 'Scaffolding Services', slug: 'scaffolding-services', desc: 'Secure, compliant structural access systems.', cardImage: '/services/scaffolding-services.png' },
  { title: 'Material Trading', slug: 'material-trading', desc: 'High-grade industrial construction supplies.', cardImage: '/services/material-trading.png' },
  { title: 'Fencing Works', slug: 'fencing-works', desc: 'Perimeter security and industrial fencing.', cardImage: '/services/fencing-works.png' },
  { title: 'Portacabin Services', slug: 'portacabin-services', desc: 'Modular site offices and accommodation.', cardImage: '/services/portacabin-services.png' },
  { title: 'Transportation & Logistics', slug: 'transportation-logistics', desc: 'Heavy haulage and supply chain management.', cardImage: '/services/transportation-logistics.png' },
  { title: 'Industrial Gaskets', slug: 'industrial-gaskets', desc: 'Precision seals for high-pressure systems.', cardImage: '/services/industrial-gaskets.png' },
  { title: 'Hydraulic Fittings', slug: 'hydraulic-fittings', desc: 'Durable components for fluid power applications.', cardImage: '/services/hydraulic-fittings.png' },
  { title: 'Mechanical Fittings', slug: 'mechanical-fittings', desc: 'High-specification piping and structural components.', cardImage: '/service-assets/mechanical-fittings-brands.png' },
  { title: 'Tools & Hardware', slug: 'tools-hardware', desc: 'Professional-grade tools for industrial operations.', cardImage: '/service-assets/tools-hardware-brands.png' },
  { title: 'Safety PPE', slug: 'safety-ppe', desc: 'Aramco-standard personal protective equipment.', cardImage: '/service-assets/safety-ppe-brands.png' },
  { title: 'Electrical Materials', slug: 'electrical-materials', desc: 'Industrial-grade electrical components and wiring.', cardImage: '/service-assets/electrical-brands.png' },
  { title: 'Tires & Lubricants', slug: 'tires-lubricants', desc: 'Industrial tires and premium lubrication solutions.', cardImage: '/service-assets/tires-lubricants-detail.png' },
];

export const FALLBACK_SERVICES_DETAIL: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  cardImage: string;
  categories: { title: string; items: string[]; }[];
  features: string[];
}> = {
  'equipment-rental': {
    title: 'Equipment Rental',
    subtitle: 'Heavy-duty machinery and industrial fleet solutions',
    description: 'MARAFI provides a comprehensive fleet of heavy machinery, industrial equipment, and specialized vehicles for mega-projects across Saudi Arabia. Our well-maintained, modern equipment is available for short-term and long-term rental, fully operated or bare rental, ensuring maximum operational efficiency for your project.',
    heroImage: '/services/equipment-rental.png',
    cardImage: '/services/equipment-rental.png',
    categories: [
      { title: 'Earthmoving', items: ['Excavators', 'Bulldozers', 'Motor Graders', 'Compactors'] },
      { title: 'Lifting & Cranes', items: ['Mobile Cranes', 'Tower Cranes', 'Forklifts', 'Boom Lifts'] },
      { title: 'Transport', items: ['Low-bed Trailers', 'Tankers', 'Flatbed Trucks', 'Concrete Mixers'] },
    ],
    features: ['Modern fleet', 'Operated & bare rental', 'Rapid mobilization', 'Certified operators', 'Full maintenance support'],
  },
  'manpower-supply': {
    title: 'Manpower Supply',
    subtitle: 'Skilled technical and operational workforce',
    description: 'MARAFI is a premier manpower supply specialist, providing highly trained technical personnel, skilled tradesmen, and professional project management staff. We have a proven track record of sourcing, vetting, and deploying qualified personnel for the most demanding oil & gas and construction projects.\n\nOur workforce database spans hundreds of skilled trades, and operational supervision. Whether you require specialized inspectors, certified welders, or strategic project managers, our workforce is ready to integrate seamlessly into your operations.',
    heroImage: '/services/manpower-supply.png',
    cardImage: '/services/manpower-supply.png',
    categories: [
      { title: 'Engineers & Inspectors', items: ['Civil Engineer', 'Electrical Engineer', 'Mechanical Engineer', 'Piping/Welding Engineer', 'Safety Engineer', 'QA/QC Inspectors'] },
      { title: 'Mechanical & Electrical Trades', items: ['Tig Welder', 'Welder 6G', 'Pipe Fitter', 'Pipe Fabricator', 'Steel Erector', 'Millwright Fitter', 'Instrument Technician'] },
      { title: 'Operators & Supervisors', items: ['Equipment Operator', 'Side Boom Operator', 'Supervisors & Foremen'] },
    ],
    features: ['Highly skilled personnel', 'Certified tradesmen', 'Rapid mobilization', 'Comprehensive compliance', 'Scalable workforce solutions'],
  },
  'asphalt-works': {
    title: 'Asphalt Works',
    subtitle: 'Premium paving and road infrastructure solutions',
    description: 'MARAFI excels in delivering superior asphalt and paving solutions for heavy industrial, commercial, and municipal infrastructure. Our Asphalt Works division utilizes state-of-the-art paving technology and high-grade materials to construct durable, long-lasting surfaces that withstand extreme loads and harsh environmental conditions.\n\nFrom massive industrial yard surfacing to precision road rehabilitation, our experienced teams execute every project with an unwavering commitment to quality.',
    heroImage: '/service-assets/asphalt-works-detail.png',
    cardImage: '/services/asphalt-works.png',
    categories: [
      { title: 'Road Construction', items: ['Asphalt laying', 'Road widening', 'Road rehabilitation'] },
      { title: 'Parking & Yards', items: ['Parking lot paving', 'Industrial yard surfacing'] },
      { title: 'Maintenance', items: ['Crack sealing', 'Pothole repair', 'Line marking'] },
    ],
    features: ['High-durability paving', 'Advanced laying technology', 'Expert project management', 'Comprehensive surface repair', 'Strict quality control'],
  },
  'scaffolding-services': {
    title: 'Scaffolding Services',
    subtitle: 'Safe, certified structural access systems',
    description: 'Safety and stability are the cornerstones of our Scaffolding Services. We provide comprehensive access solutions tailored for complex industrial environments, petrochemical plants, and large-scale construction sites. Our scaffolding systems are erected by certified professionals adhering to the strictest international and local safety regulations.\n\nWe manage the entire lifecycle of the access structure—from strategic design and engineering to meticulous installation, load testing, and safe dismantling.',
    heroImage: '/service-assets/scaffolding-detail.png',
    cardImage: '/services/scaffolding-services.png',
    categories: [
      { title: 'Installation', items: ['System scaffolding', 'Tube & coupler', 'Frame scaffolding'] },
      { title: 'Specialty', items: ['Suspended scaffolding', 'Rolling towers', 'Shoring systems'] },
      { title: 'Dismantling & Inspection', items: ['Safe dismantling', 'Load testing', 'Compliance inspection'] },
    ],
    features: ['Certified scaffolding erectors', 'Strict safety compliance', 'Custom access solutions', 'Rigorous load testing', 'End-to-end management'],
  },
  'material-trading': {
    title: 'Material Trading',
    subtitle: 'High-grade industrial and construction supplies',
    description: 'Our Material Trading division is a trusted procurement partner for mega-projects across Saudi Arabia. We supply an extensive inventory of high-quality construction materials, industrial stock, and specialized civil components. By maintaining strong relationships with global manufacturers, we guarantee the consistent availability of premium products.\n\nWe understand that supply chain reliability is critical to your project timeline.',
    heroImage: '/service-assets/material-trading-detail.png',
    cardImage: '/services/material-trading.png',
    categories: [
      { title: 'Civil Materials', items: ['Cement', 'Steel', 'Timber', 'Aggregates', 'Bricks'] },
      { title: 'Construction Supplies', items: ['Pipes', 'Fittings', 'Insulation', 'Waterproofing'] },
      { title: 'Industrial Stock', items: ['Structural steel', 'Plates', 'Sections'] },
      { title: 'Safety Items', items: ['Safety PPE', 'Hi-vis vests', 'Safety helmets'] },
    ],
    features: ['Extensive product range', 'Global sourcing network', 'Reliable supply chain', 'Competitive pricing', 'Premium quality assurance'],
  },
  'fencing-works': {
    title: 'Fencing Works',
    subtitle: 'Perimeter security and industrial boundary solutions',
    description: 'Securing your industrial assets starts with robust perimeter protection. MARAFI provides high-security fencing and boundary solutions designed to protect critical infrastructure, manufacturing facilities, and expansive commercial yards.\n\nWe install everything from heavy-duty chain-link to advanced anti-climb steel palisades, customizing the security perimeter to your exact threat-level requirements.',
    heroImage: '/services/fencing-works.png',
    cardImage: '/services/fencing-works.png',
    categories: [
      { title: 'Chain-Link', items: ['Galvanized chain-link', 'PVC-coated chain-link', 'Security mesh'] },
      { title: 'Steel & Metal', items: ['Steel palisade', 'Welded wire mesh', 'Anti-climb fencing'] },
      { title: 'Specialty', items: ['Aluminum fencing', 'Crash barriers', 'Access gates'] },
    ],
    features: ['High-security perimeters', 'Durable materials', 'Custom designs', 'Professional installation', 'Rapid deployment'],
  },
  'portacabin-services': {
    title: 'Portacabin Services',
    subtitle: 'Modular site offices and accommodation solutions',
    description: 'MARAFI provides a complete range of modular portacabin solutions for industrial sites, construction camps, and temporary office facilities. Our cabins are purpose-built to withstand Saudi Arabia\'s extreme climate conditions while providing comfortable, functional spaces for your workforce.\n\nFrom basic site offices to fully-fitted accommodation blocks, we handle supply, delivery, installation, and maintenance.',
    heroImage: '/services/portacabin-services.png',
    cardImage: '/services/portacabin-services.png',
    categories: [
      { title: 'Office Cabins', items: ['Single office units', 'Double office units', 'Conference rooms'] },
      { title: 'Accommodation', items: ['Sleeping quarters', 'Ablution blocks', 'Dining halls'] },
      { title: 'Specialty', items: ['Guard rooms', 'Storage containers', 'Lab units'] },
    ],
    features: ['Climate-controlled units', 'Rapid deployment', 'Fully furnished options', 'Maintenance included', 'Custom configurations'],
  },
  'transportation-logistics': {
    title: 'Transportation & Logistics',
    subtitle: 'Heavy haulage and supply chain management',
    description: 'MARAFI\'s Transportation & Logistics division delivers reliable, efficient movement of industrial goods, heavy equipment, and oversized cargo throughout Saudi Arabia. Our modern fleet and experienced logistics team ensure that your supply chain remains uninterrupted, even in the most remote and challenging project locations.\n\nWe specialize in abnormal load transport, coordinating all permits, escorts, and route surveys.',
    heroImage: '/services/transportation-logistics.png',
    cardImage: '/services/transportation-logistics.png',
    categories: [
      { title: 'Heavy Haulage', items: ['Low-bed transport', 'Oversized cargo', 'Abnormal loads'] },
      { title: 'General Freight', items: ['Flatbed trucking', 'Container transport', 'Bulk cargo'] },
      { title: 'Logistics', items: ['Warehousing', 'Supply chain management', 'Last-mile delivery'] },
    ],
    features: ['Modern fleet', 'Nationwide coverage', 'Permit coordination', 'Real-time tracking', 'Hazmat certified'],
  },
  'industrial-gaskets': {
    title: 'Industrial Gaskets',
    subtitle: 'Precision seals for high-pressure systems',
    description: 'MARAFI supplies a comprehensive range of industrial gaskets and sealing solutions for the oil & gas, petrochemical, and power generation sectors. Our gaskets meet the most stringent international standards and are sourced from globally recognized manufacturers.\n\nFrom spiral wound gaskets to ring joint gaskets, we provide the correct sealing solution for every application.',
    heroImage: '/services/industrial-gaskets.png',
    cardImage: '/services/industrial-gaskets.png',
    categories: [
      { title: 'Metallic Gaskets', items: ['Spiral wound gaskets', 'Ring joint gaskets', 'Jacketed gaskets'] },
      { title: 'Non-Metallic', items: ['PTFE gaskets', 'Graphite gaskets', 'Rubber gaskets'] },
      { title: 'Semi-Metallic', items: ['Camprofile gaskets', 'Metal corrugated', 'Kammprofile'] },
    ],
    features: ['API compliant', 'ASME certified', 'Wide material range', 'Custom sizes available', 'Fast delivery'],
  },
  'hydraulic-fittings': {
    title: 'Hydraulic Fittings',
    subtitle: 'Durable components for fluid power applications',
    description: 'MARAFI supplies high-quality hydraulic fittings, hoses, and fluid power components for industrial machinery and equipment. Our comprehensive inventory covers all major standards and pressure ratings, ensuring reliable performance in demanding hydraulic systems.\n\nWe source from leading global manufacturers to guarantee the highest quality standards.',
    heroImage: '/services/hydraulic-fittings.png',
    cardImage: '/services/hydraulic-fittings.png',
    categories: [
      { title: 'Hydraulic Fittings', items: ['BSP fittings', 'JIC fittings', 'NPT fittings', 'SAE fittings'] },
      { title: 'Hoses & Assemblies', items: ['Hydraulic hoses', 'Hose assemblies', 'Quick-release couplings'] },
      { title: 'Accessories', items: ['Adapters', 'Tees', 'Reducers', 'End caps'] },
    ],
    features: ['High-pressure rated', 'Multiple standards', 'Custom assemblies', 'Rapid supply', 'Quality certified'],
  },
  'mechanical-fittings': {
    title: 'Mechanical Fittings',
    subtitle: 'High-specification piping and structural components',
    description: 'MARAFI provides a comprehensive range of mechanical fittings, flanges, and piping components for industrial installations. Our mechanical fittings division supplies both standard and custom-spec components for the oil & gas, petrochemical, and heavy construction sectors.\n\nAll products are sourced from certified manufacturers and meet relevant ASME, ANSI, and DIN standards.',
    heroImage: '/service-assets/mechanical-fittings-brands.png',
    cardImage: '/service-assets/mechanical-fittings-brands.png',
    categories: [
      { title: 'Pipe Fittings', items: ['Elbows', 'Tees', 'Reducers', 'Caps', 'Couplings'] },
      { title: 'Flanges', items: ['Slip-on flanges', 'Weld neck flanges', 'Blind flanges', 'Socket weld'] },
      { title: 'Valves', items: ['Gate valves', 'Ball valves', 'Check valves', 'Globe valves'] },
    ],
    features: ['ASME/ANSI certified', 'Wide grade selection', 'Carbon & stainless steel', 'Custom specifications', 'Bulk supply capability'],
  },
  'tools-hardware': {
    title: 'Tools & Hardware',
    subtitle: 'Professional-grade tools for industrial operations',
    description: 'MARAFI supplies a complete range of professional tools and industrial hardware for construction, maintenance, and manufacturing operations. From hand tools to power tools and specialized industrial equipment, we source from leading global brands to ensure maximum reliability and performance.\n\nOur tools division serves mega-projects with bulk supply capability and rapid delivery.',
    heroImage: '/service-assets/tools-hardware-brands.png',
    cardImage: '/service-assets/tools-hardware-brands.png',
    categories: [
      { title: 'Hand Tools', items: ['Wrenches', 'Hammers', 'Screwdrivers', 'Pliers', 'Files'] },
      { title: 'Power Tools', items: ['Angle grinders', 'Drills', 'Impact wrenches', 'Cutting machines'] },
      { title: 'Industrial Hardware', items: ['Fasteners', 'Bolts & nuts', 'Anchors', 'Clamps'] },
    ],
    features: ['Leading brands', 'Bulk supply', 'Competitive pricing', 'Rapid delivery', 'Full product range'],
  },
  'safety-ppe': {
    title: 'Safety & PPE',
    subtitle: 'Aramco-standard personal protective equipment',
    description: 'MARAFI is a specialist supplier of Aramco-compliant safety equipment and personal protective equipment (PPE). We stock a comprehensive range of safety gear that meets or exceeds all Saudi Aramco, international, and local regulatory requirements.\n\nFrom basic PPE to advanced gas detection and fire safety systems, we provide everything needed to keep your workforce safe on site.',
    heroImage: '/service-assets/safety-ppe-brands.png',
    cardImage: '/service-assets/safety-ppe-brands.png',
    categories: [
      { title: 'Personal Protection', items: ['Safety helmets', 'Safety boots', 'Safety gloves', 'Eye protection', 'Hi-vis vests'] },
      { title: 'Respiratory & Gas', items: ['Gas detectors', 'Respirators', 'Self-contained breathing apparatus'] },
      { title: 'Fire Safety', items: ['Fire extinguishers', 'Fire suits', 'Emergency kits'] },
    ],
    features: ['Aramco compliant', 'International standards', 'Full range available', 'Bulk supply', 'Fast delivery'],
  },
  'electrical-materials': {
    title: 'Electrical Materials',
    subtitle: 'Industrial-grade electrical components and wiring',
    description: 'MARAFI supplies a comprehensive range of industrial electrical materials, cables, switchgear, and automation components for oil & gas, petrochemical, and heavy construction projects. We partner with leading global electrical brands to provide high-quality materials that meet stringent industrial standards.\n\nOur electrical division can handle bulk procurement for large-scale installations.',
    heroImage: '/service-assets/electrical-brands.png',
    cardImage: '/service-assets/electrical-brands.png',
    categories: [
      { title: 'Cables & Wiring', items: ['Power cables', 'Control cables', 'Instrumentation cables', 'Fire-resistant cables'] },
      { title: 'Switchgear', items: ['Circuit breakers', 'Switchboards', 'MCBs', 'MCCBs'] },
      { title: 'Automation', items: ['PLCs', 'VFDs', 'Sensors', 'Control panels'] },
    ],
    features: ['IEC certified products', 'Leading brands', 'Large inventory', 'Technical support', 'Bulk supply'],
  },
  'tires-lubricants': {
    title: 'Tires & Lubricants',
    subtitle: 'Industrial tires and premium lubrication solutions',
    description: 'MARAFI supplies industrial-grade tires for heavy equipment and a comprehensive range of lubricants, greases, and industrial fluids for construction and manufacturing operations. We stock leading brands and offer competitive pricing for bulk orders.\n\nOur range covers all major heavy equipment types used in the oil & gas and construction sectors.',
    heroImage: '/service-assets/tires-lubricants-detail.png',
    cardImage: '/service-assets/tires-lubricants-detail.png',
    categories: [
      { title: 'Industrial Tires', items: ['OTR tires', 'Forklift tires', 'Crane tires', 'Loader tires'] },
      { title: 'Lubricants', items: ['Engine oils', 'Gear oils', 'Hydraulic fluids', 'Transmission fluids'] },
      { title: 'Greases & Fluids', items: ['Bearing greases', 'Multipurpose grease', 'Brake fluids', 'Coolants'] },
    ],
    features: ['OEM compatible', 'Leading brands', 'Bulk pricing', 'Rapid delivery', 'Technical advisory'],
  },
};
