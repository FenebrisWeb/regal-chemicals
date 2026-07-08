import type { PillarItem } from "@/types/ui";
import type { Product } from "@/types/sections";

export const TENDER_ADVANTAGES: PillarItem[] = [
  {
    icon: "quality",
    title: "Consistent Batch Quality",
    description: "Every batch is tested against the same specification, so what wins the tender is exactly what ships.",
  },
  {
    icon: "trust",
    title: "Verifiable Specifications",
    description: "Every product listed here has a matching Technical Data Sheet and Material Safety Data Sheet on request.",
  },
  {
    icon: "manufacturing",
    title: "Manufactured at Scale",
    description: "Production capacity built to supply full project quantities on schedule, not just sample orders.",
  },
  {
    icon: "operations",
    title: "Technical Support Included",
    description: "Our team supports specification, site application, and any queries raised during tender evaluation.",
  },
];

export const PRODUCTS: Record<string, Product[]> = {
  "anti-corrosion": [
    {
      slug: "regal-zinc-primer-30",
      name: "Regal Zinc Primer 30",
      tagline: "Zinc rich epoxy primer for cathodic protection",
      description:
        "A two component, zinc rich epoxy primer that gives steel substrates cathodic protection alongside strong barrier resistance. Formulated as the first coat in multi layer anticorrosion systems for structural steel, pipelines, and marine assets.",
      specs: [
        { label: "Zinc Content", value: "Greater than 80% in dry film" },
        { label: "Dry Film Thickness", value: "60 to 75 microns per coat" },
        { label: "Touch Dry Time", value: "30 to 45 minutes at 30°C" },
        { label: "Recoat Interval", value: "4 to 6 hours" },
      ],
      packaging: "5 kg and 20 kg kits",
    },
    {
      slug: "regal-metakote-16",
      name: "Regal MetaKote 16",
      tagline: "Micaceous iron oxide barrier coating",
      description:
        "A micaceous iron oxide reinforced coating that provides a dense, overlapping flake structure for superior moisture and UV barrier performance. Used as an intermediate or finish coat over primed steel in industrial and marine environments.",
      specs: [
        { label: "Volume Solids", value: "62% plus or minus 2%" },
        { label: "Dry Film Thickness", value: "75 to 100 microns per coat" },
        { label: "Abrasion Resistance", value: "High, per ASTM D4060" },
        { label: "Service Temperature", value: "Up to 120°C dry heat" },
      ],
      packaging: "20 kg pails",
    },
    {
      slug: "regal-rust-guard-18",
      name: "Regal Rust Guard 18",
      tagline: "Rust converting primer for corroded steel",
      description:
        "A single component rust converter that chemically stabilises existing surface rust into a paintable, corrosion resistant layer, reducing the need for complete blast cleaning on maintenance projects.",
      specs: [
        { label: "Application Method", value: "Brush, roller, or spray" },
        { label: "Surface Tolerance", value: "Tight adhering rust and mill scale" },
        { label: "Overcoat Window", value: "6 to 24 hours" },
        { label: "VOC Content", value: "Low VOC formulation" },
      ],
      packaging: "5 litre and 20 litre containers",
    },
    {
      slug: "regal-corroshield-ep",
      name: "Regal CorroShield EP",
      tagline: "High build epoxy topcoat for heavy exposure",
      description:
        "A high build, two component epoxy topcoat engineered for long term chemical and abrasion resistance in industrial plants, storage tanks, and heavy infrastructure exposed to aggressive environments.",
      specs: [
        { label: "Chemical Resistance", value: "Resists acids, alkalis, and salts" },
        { label: "Dry Film Thickness", value: "100 to 150 microns per coat" },
        { label: "Pot Life", value: "4 hours at 30°C" },
        { label: "Full Cure", value: "7 days at ambient temperature" },
      ],
      packaging: "10 kg and 20 kg kits",
    },
    {
      slug: "regal-marine-coat-40",
      name: "Regal Marine Coat 40",
      tagline: "Anticorrosion topcoat for ships and offshore structures",
      description:
        "A specialised topcoat formulated for continuous salt water immersion and splash zone exposure, providing long term protection for ship hulls, offshore platforms, and coastal infrastructure.",
      specs: [
        { label: "Salt Spray Resistance", value: "Tested beyond 3,000 hours" },
        { label: "Immersion Rating", value: "Suitable for continuous immersion" },
        { label: "Flexibility", value: "Withstands substrate movement without cracking" },
        { label: "Colour Range", value: "Standard marine colour range" },
      ],
      packaging: "20 kg kits",
    },
    {
      slug: "regal-ac-thinner",
      name: "Regal AC Thinner",
      tagline: "Formulated thinner for the anticorrosion range",
      description:
        "A purpose built thinner formulated to maintain the performance characteristics of Regal's anticorrosion primers and topcoats when adjusting viscosity for spray application.",
      specs: [
        { label: "Compatibility", value: "Epoxy and zinc rich systems" },
        { label: "Recommended Ratio", value: "5% to 10% by volume" },
        { label: "Flash Point", value: "Above 23°C" },
        { label: "Shelf Life", value: "24 months in sealed container" },
      ],
      packaging: "5 litre and 20 litre containers",
    },
  ],
  construction: [
    {
      slug: "regal-block-fix-70",
      name: "Regal Block Fix 70",
      tagline: "High strength block and brick laying adhesive",
      description:
        "A polymer modified adhesive mortar for laying blocks and bricks with a thin joint system, reducing material use while improving wall alignment and structural bonding.",
      specs: [
        { label: "Bond Strength", value: "Greater than 1.0 N/mm² at 28 days" },
        { label: "Joint Thickness", value: "2 to 3 mm recommended" },
        { label: "Open Time", value: "20 minutes at 30°C" },
        { label: "Coverage", value: "Approximately 4 to 5 m² per 20 kg bag" },
      ],
      packaging: "20 kg and 40 kg bags",
    },
    {
      slug: "regal-tile-fix-t14",
      name: "Regal Tile Fix T14",
      tagline: "Flexible tile adhesive for floors and walls",
      description:
        "A cement based, polymer enhanced tile adhesive suitable for ceramic, vitrified, and natural stone tiles on both floors and walls, including areas with moderate deflection.",
      specs: [
        { label: "Flexibility Class", value: "S1, per EN 12004" },
        { label: "Pot Life", value: "3 hours at 30°C" },
        { label: "Coverage", value: "Approximately 4 to 6 kg per m²" },
        { label: "Suitable Substrates", value: "Concrete, cement render, existing tile" },
      ],
      packaging: "20 kg bags",
    },
    {
      slug: "regal-grout-50",
      name: "Regal Grout 50",
      tagline: "High strength non-shrink structural grout",
      description:
        "A free flowing, non-shrink cementitious grout for precision grouting of machine bases, column baseplates, and structural connections requiring high early and ultimate strength.",
      specs: [
        { label: "Compressive Strength", value: "Greater than 50 N/mm² at 28 days" },
        { label: "Shrinkage", value: "Non-shrink, expansive formulation" },
        { label: "Flow Class", value: "Free flowing at recommended water ratio" },
        { label: "Working Time", value: "20 to 30 minutes at 30°C" },
      ],
      packaging: "25 kg bags",
    },
    {
      slug: "regal-crack-fill-33",
      name: "Regal Crack Fill 33",
      tagline: "Flexible crack filler for concrete and masonry",
      description:
        "A ready to use, elastomeric crack filler that seals fine surface cracks in concrete and masonry, preventing water ingress and further crack propagation ahead of coating or painting work.",
      specs: [
        { label: "Elongation", value: "Greater than 150%" },
        { label: "Application", value: "Trowel or gun applied" },
        { label: "Recoat Time", value: "4 to 6 hours" },
        { label: "Crack Width Range", value: "Up to 5 mm" },
      ],
      packaging: "1 kg and 5 kg containers",
    },
    {
      slug: "regal-eifs-adhesive",
      name: "Regal EIFS Adhesive",
      tagline: "Base coat adhesive for insulated facade systems",
      description:
        "A cement based adhesive and base coat for bonding insulation boards to substrates and embedding reinforcement mesh in exterior insulation and finish systems.",
      specs: [
        { label: "Bond Strength", value: "Greater than 0.3 N/mm² to EPS board" },
        { label: "Application Thickness", value: "3 to 5 mm per coat" },
        { label: "Water Resistance", value: "Suitable for exterior exposure" },
        { label: "Coverage", value: "Approximately 4 to 5 kg per m²" },
      ],
      packaging: "25 kg bags",
    },
    {
      slug: "regal-white-wall-putty",
      name: "Regal White Wall Putty",
      tagline: "Smooth finishing putty for interior and exterior walls",
      description:
        "A white cement based wall putty that provides a smooth, even surface on plastered walls, correcting minor surface imperfections ahead of painting.",
      specs: [
        { label: "Whiteness", value: "High whiteness index" },
        { label: "Coat Thickness", value: "1 to 2 mm per coat" },
        { label: "Sanding Time", value: "12 to 16 hours after application" },
        { label: "Coverage", value: "Approximately 4 to 5 kg per m² for two coats" },
      ],
      packaging: "20 kg and 40 kg bags",
    },
  ],
  floors: [
    {
      slug: "regal-epoxy-floor-hd40",
      name: "Regal Epoxy Floor HD40",
      tagline: "Heavy duty self levelling epoxy flooring",
      description:
        "A high build, self levelling epoxy floor topping engineered for warehouses, manufacturing floors, and areas subject to forklift and heavy trolley traffic.",
      specs: [
        { label: "Compressive Strength", value: "Greater than 60 N/mm²" },
        { label: "Film Thickness", value: "2 to 3 mm system build" },
        { label: "Chemical Resistance", value: "Resists oils, mild acids, and alkalis" },
        { label: "Foot Traffic Ready", value: "24 hours at 30°C" },
      ],
      packaging: "20 kg kits",
    },
    {
      slug: "regal-pu-floor-coat",
      name: "Regal PU Floor Coat",
      tagline: "Polyurethane flooring for temperature controlled areas",
      description:
        "A flexible polyurethane floor coating suited to food processing, cold storage, and other areas with frequent thermal cycling where rigid epoxy systems are more prone to cracking.",
      specs: [
        { label: "Thermal Shock Resistance", value: "Rated for minus 20°C to 80°C cycling" },
        { label: "Film Thickness", value: "1.5 to 2 mm system build" },
        { label: "Slip Resistance", value: "Textured finish available" },
        { label: "Hygiene Rating", value: "Seamless, suitable for washdown areas" },
      ],
      packaging: "20 kg kits",
    },
    {
      slug: "regal-antistatic-floor",
      name: "Regal Antistatic Floor",
      tagline: "Conductive epoxy flooring for controlled environments",
      description:
        "A conductive epoxy flooring system designed to dissipate static charge in electronics manufacturing, server rooms, and other environments where static discharge poses a risk.",
      specs: [
        { label: "Electrical Resistance", value: "10⁵ to 10⁹ ohms, per ANSI/ESD" },
        { label: "Film Thickness", value: "2 to 3 mm system build" },
        { label: "Copper Grid", value: "Embedded grounding grid included" },
        { label: "Finish", value: "Smooth or fine textured" },
      ],
      packaging: "20 kg kits",
    },
    {
      slug: "regal-car-park-pu",
      name: "Regal Car Park PU",
      tagline: "Elastic polyurethane flooring for vehicle traffic",
      description:
        "An elastic polyurethane deck coating system built for multi storey car parks and vehicle ramps, accommodating structural movement while resisting tyre wear and fuel spillage.",
      specs: [
        { label: "Elongation", value: "Greater than 200%" },
        { label: "Crack Bridging", value: "Bridges cracks up to 1 mm" },
        { label: "UV Stability", value: "Colour and gloss stable topcoat" },
        { label: "System Build", value: "2 to 3 mm including wearing course" },
      ],
      packaging: "20 kg kits",
    },
    {
      slug: "regal-decorative-epoxy",
      name: "Regal Decorative Epoxy Floor",
      tagline: "Clear, decorative epoxy flooring for retail and showrooms",
      description:
        "A clear or pigmented decorative epoxy system that combines a durable wear surface with a range of finishes for showrooms, offices, and retail environments.",
      specs: [
        { label: "Gloss Level", value: "High gloss or satin finish" },
        { label: "Film Thickness", value: "1 to 2 mm system build" },
        { label: "Wear Resistance", value: "Suitable for moderate foot and trolley traffic" },
        { label: "Design Options", value: "Flake, metallic, and clear broadcast finishes" },
      ],
      packaging: "10 kg and 20 kg kits",
    },
    {
      slug: "regal-self-level-cement",
      name: "Regal Self Level Cement",
      tagline: "Cementitious self levelling underlayment",
      description:
        "A fast setting, self levelling cementitious underlayment that creates a smooth, flat substrate ahead of tiling, resin flooring, or floor coverings.",
      specs: [
        { label: "Flow", value: "Self levelling, minimal trowelling required" },
        { label: "Application Thickness", value: "2 to 10 mm per pour" },
        { label: "Foot Traffic Ready", value: "4 to 6 hours" },
        { label: "Compressive Strength", value: "Greater than 25 N/mm² at 28 days" },
      ],
      packaging: "25 kg bags",
    },
  ],
  "repair-and-protect": [
    {
      slug: "regal-inject-seal-25",
      name: "Regal InjectSeal 25",
      tagline: "Low viscosity epoxy injection grout",
      description:
        "A low viscosity, two component epoxy resin designed for gravity feed or pressure injection into fine cracks in concrete, restoring structural continuity and sealing against water ingress.",
      specs: [
        { label: "Viscosity", value: "Low, suitable for cracks from 0.2 mm" },
        { label: "Compressive Strength", value: "Greater than 70 N/mm²" },
        { label: "Pot Life", value: "20 to 30 minutes at 30°C" },
        { label: "Bond Strength to Concrete", value: "Exceeds concrete tensile strength" },
      ],
      packaging: "1 kg and 5 kg kits",
    },
    {
      slug: "regal-repair-mortar-hs",
      name: "Regal Repair Mortar HS",
      tagline: "High strength structural repair mortar",
      description:
        "A polymer modified, high strength repair mortar for restoring spalled and damaged concrete sections in columns, beams, and slabs, applied by trowel or spray.",
      specs: [
        { label: "Compressive Strength", value: "Greater than 45 N/mm² at 28 days" },
        { label: "Application Thickness", value: "5 to 50 mm per layer" },
        { label: "Shrinkage", value: "Low shrinkage, crack resistant" },
        { label: "Bond Strength", value: "Greater than 2.0 N/mm² to sound concrete" },
      ],
      packaging: "25 kg bags",
    },
    {
      slug: "regal-corroguard-primer",
      name: "Regal CorroGuard Primer",
      tagline: "Anticorrosion primer for exposed reinforcement",
      description:
        "A cementitious, corrosion inhibiting primer applied directly to cleaned reinforcement steel ahead of repair mortar application, protecting against further chloride and moisture attack.",
      specs: [
        { label: "Application", value: "Brush applied, two coats" },
        { label: "Coverage", value: "Approximately 2 kg per m² of steel surface" },
        { label: "Overcoat Time", value: "2 to 4 hours between coats" },
        { label: "Compatibility", value: "Compatible with cementitious repair mortars" },
      ],
      packaging: "5 kg and 20 kg containers",
    },
    {
      slug: "regal-joint-seal-flex",
      name: "Regal Joint Seal Flex",
      tagline: "Flexible sealant for expansion and construction joints",
      description:
        "A polyurethane based joint sealant that accommodates ongoing structural movement in expansion and construction joints while maintaining a watertight seal.",
      specs: [
        { label: "Movement Capability", value: "Plus or minus 25%" },
        { label: "Application", value: "Gun applied, self levelling or non-sag grades" },
        { label: "Skin Time", value: "60 to 90 minutes" },
        { label: "Service Temperature", value: "Minus 30°C to 80°C" },
      ],
      packaging: "600 ml sausages and 5 litre pails",
    },
    {
      slug: "regal-foam-grout-inject",
      name: "Regal Foam Grout Inject",
      tagline: "Polyurethane foam injection for active water leaks",
      description:
        "A fast reacting polyurethane injection resin that expands on contact with water to seal active leaks in construction joints, cracks, and pipe penetrations before permanent repair.",
      specs: [
        { label: "Reaction Time", value: "Seconds to minutes, adjustable with catalyst" },
        { label: "Expansion Ratio", value: "Up to 20 times original volume" },
        { label: "Application", value: "Pump injected under pressure" },
        { label: "Use Case", value: "Active leaks, construction joints, pipe penetrations" },
      ],
      packaging: "20 kg drums",
    },
    {
      slug: "regal-anchor-grout-fast",
      name: "Regal Anchor Grout Fast",
      tagline: "Rapid set anchoring and repair grout",
      description:
        "A rapid setting cementitious grout for anchoring bolts, dowels, and rebar, and for small scale urgent repairs where fast strength gain and quick return to service are required.",
      specs: [
        { label: "Initial Set", value: "15 to 20 minutes" },
        { label: "Early Strength", value: "Greater than 20 N/mm² at 2 hours" },
        { label: "Final Strength", value: "Greater than 50 N/mm² at 28 days" },
        { label: "Shrinkage", value: "Non-shrink formulation" },
      ],
      packaging: "5 kg and 20 kg bags",
    },
  ],
  "road-marking": [
    {
      slug: "regal-thermo-mark-tp",
      name: "Regal ThermoMark TP",
      tagline: "Hot applied thermoplastic road marking compound",
      description:
        "A hot applied thermoplastic road marking material that bonds into the road surface for extended durability under heavy traffic, suitable for highways, intersections, and pedestrian crossings.",
      specs: [
        { label: "Application Temperature", value: "180°C to 200°C" },
        { label: "Retroreflectivity", value: "Enhanced with premix and drop-on glass beads" },
        { label: "Traffic Open Time", value: "10 to 15 minutes after application" },
        { label: "Expected Service Life", value: "3 to 5 years under heavy traffic" },
      ],
      packaging: "25 kg blocks and bags",
    },
    {
      slug: "regal-lane-mark-acrylic",
      name: "Regal LaneMark Acrylic",
      tagline: "Fast drying cold applied road marking paint",
      description:
        "A water based acrylic road marking paint offering fast drying and strong colour retention for roads, parking areas, and general traffic zoning.",
      specs: [
        { label: "Drying Time", value: "15 to 20 minutes" },
        { label: "Coverage", value: "Approximately 6 to 8 m² per litre" },
        { label: "VOC Content", value: "Low VOC, water based" },
        { label: "Colour Options", value: "White, yellow, and standard traffic colours" },
      ],
      packaging: "20 litre and 200 litre containers",
    },
    {
      slug: "regal-court-mark-pu",
      name: "Regal CourtMark PU",
      tagline: "Precision line marking for sports courts",
      description:
        "A durable, weather resistant line marking paint formulated for acrylic and polyurethane sports courts, giving crisp, accurate lines that hold up to outdoor exposure.",
      specs: [
        { label: "Line Precision", value: "Suitable for masking tape application" },
        { label: "Weather Resistance", value: "UV stable, resists fading" },
        { label: "Drying Time", value: "30 to 45 minutes" },
        { label: "Compatibility", value: "Acrylic and PU sports surfaces" },
      ],
      packaging: "5 litre and 20 litre containers",
    },
    {
      slug: "regal-primer-rm-40",
      name: "Regal Primer RM 40",
      tagline: "Adhesion primer for road marking on asphalt and concrete",
      description:
        "A bonding primer applied ahead of thermoplastic or paint based road markings on aged asphalt or concrete, improving adhesion and extending marking service life.",
      specs: [
        { label: "Application", value: "Spray or roller applied" },
        { label: "Coverage", value: "Approximately 8 to 10 m² per litre" },
        { label: "Drying Time", value: "20 to 30 minutes" },
        { label: "Substrates", value: "Asphalt and concrete road surfaces" },
      ],
      packaging: "20 litre containers",
    },
    {
      slug: "regal-glass-beads-drop",
      name: "Regal Glass Beads Drop-On",
      tagline: "Retroreflective glass beads for road markings",
      description:
        "Precision graded glass beads for drop-on application over fresh road marking paint or thermoplastic, restoring and enhancing night time visibility.",
      specs: [
        { label: "Bead Grading", value: "Meets standard road marking gradation" },
        { label: "Refractive Index", value: "1.5 or higher" },
        { label: "Application Rate", value: "As per marking material specification" },
        { label: "Moisture Content", value: "Free flowing, moisture resistant coating" },
      ],
      packaging: "25 kg bags",
    },
    {
      slug: "regal-zone-mark-heat",
      name: "Regal ZoneMark Heat Reflective",
      tagline: "Heat reflective coating for parking and industrial zoning",
      description:
        "A solar reflective coating for parking areas and industrial zoning that reduces surface heat build-up while providing clear zoning and safety markings.",
      specs: [
        { label: "Solar Reflectance", value: "High, reduces surface temperature" },
        { label: "Durability", value: "Formulated for vehicle traffic areas" },
        { label: "Application", value: "Roller or spray applied" },
        { label: "Colour Options", value: "Standard zoning colour range" },
      ],
      packaging: "20 litre containers",
    },
  ],
  sports: [
    {
      slug: "regal-court-base-acrylic",
      name: "Regal CourtBase Acrylic",
      tagline: "Levelling base coat for acrylic sports surfaces",
      description:
        "An acrylic resurfacer that levels minor irregularities in asphalt or concrete courts, forming the foundation layer for consistent ball bounce and surface flatness.",
      specs: [
        { label: "Application", value: "Squeegee applied, multiple coats" },
        { label: "Coverage", value: "Approximately 1.5 to 2 kg per m² per coat" },
        { label: "Drying Time", value: "2 to 4 hours between coats" },
        { label: "Surface Compatibility", value: "Asphalt and concrete" },
      ],
      packaging: "20 kg pails",
    },
    {
      slug: "regal-cushion-rc-106",
      name: "Regal Cushion RC 106",
      tagline: "Acrylic rubber cushioning layer for sports courts",
      description:
        "A rubber granule reinforced acrylic layer that absorbs impact and reduces joint strain during play, used beneath the colour coat on basketball and multipurpose courts.",
      specs: [
        { label: "Rubber Content", value: "Medium grade rubber granules" },
        { label: "Shock Absorption", value: "Improved impact cushioning versus standard acrylic" },
        { label: "Application Thickness", value: "2 to 3 coats, trowel applied" },
        { label: "Use Case", value: "Basketball, tennis, and multipurpose courts" },
      ],
      packaging: "20 kg pails",
    },
    {
      slug: "regal-court-color-t150",
      name: "Regal CourtColor T150",
      tagline: "Hybrid PU colour topcoat for sports surfaces",
      description:
        "A hybrid polyurethane colour coat that provides consistent grip, vivid colour retention, and weather resistance as the final wearing layer on outdoor sports courts.",
      specs: [
        { label: "UV Stability", value: "Resists fading under continuous sun exposure" },
        { label: "Slip Resistance", value: "Textured finish, consistent grip wet or dry" },
        { label: "Colour Range", value: "Standard and custom court colour options" },
        { label: "Recoat Cycle", value: "Suitable for periodic recoating" },
      ],
      packaging: "20 kg pails",
    },
    {
      slug: "regal-epdm-granules",
      name: "Regal EPDM Granules",
      tagline: "Coloured EPDM rubber granules for sports flooring",
      description:
        "Coloured EPDM rubber granules used in combination with PU binders to create impact absorbing running tracks, playgrounds, and multipurpose sports surfaces.",
      specs: [
        { label: "Granule Size", value: "1 to 3 mm standard grading" },
        { label: "UV Stability", value: "Colour stable EPDM compound" },
        { label: "Use Case", value: "Running tracks, playgrounds, court surfacing" },
        { label: "Colour Range", value: "Standard sports colour palette" },
      ],
      packaging: "25 kg bags",
    },
    {
      slug: "regal-track-kote-40",
      name: "Regal TrackKote 40",
      tagline: "Polyurethane binder for athletic running tracks",
      description:
        "A polyurethane binder system for bonding EPDM rubber granules into a durable, cushioned surface for athletic running tracks and training areas.",
      specs: [
        { label: "Application", value: "Mixed with rubber granules on site" },
        { label: "Cure Time", value: "12 to 24 hours before light use" },
        { label: "Elasticity", value: "Consistent rebound for athletic performance" },
        { label: "Weather Resistance", value: "Suitable for outdoor exposure" },
      ],
      packaging: "20 kg kits",
    },
    {
      slug: "regal-pitch-mark-line",
      name: "Regal Pitch Mark Line Paint",
      tagline: "Line marking paint for pitches and multipurpose grounds",
      description:
        "A durable line marking paint for grass and synthetic pitches, providing clear visibility for matches and training sessions across multiple sports disciplines.",
      specs: [
        { label: "Drying Time", value: "20 to 30 minutes" },
        { label: "Weather Resistance", value: "Withstands rain shortly after application" },
        { label: "Surface Compatibility", value: "Natural grass and synthetic turf" },
        { label: "Colour Options", value: "White and standard pitch colours" },
      ],
      packaging: "5 litre and 20 litre containers",
    },
  ],
  textures: [
    {
      slug: "regal-stucco-art",
      name: "Regal Stucco Art",
      tagline: "Coarse decorative render for exterior facades",
      description:
        "A coarse textured stucco render that gives exterior facades a distinctive, weather resistant decorative finish, applied over a compatible base coat and primer.",
      specs: [
        { label: "Texture Grade", value: "Coarse, hand or machine applied" },
        { label: "Weather Resistance", value: "Formulated for exterior exposure" },
        { label: "Coverage", value: "Approximately 2 to 3 kg per m²" },
        { label: "Colour Options", value: "Wide standard and custom colour range" },
      ],
      packaging: "20 kg buckets",
    },
    {
      slug: "regal-wall-texture-luxury",
      name: "Regal Luxury Wall Texture",
      tagline: "Fine textured finish for interior feature walls",
      description:
        "A fine, ready mixed texture finish designed for interior feature walls, giving a refined decorative surface for homes, offices, and hospitality interiors.",
      specs: [
        { label: "Texture Grade", value: "Fine, roller or trowel applied" },
        { label: "Drying Time", value: "4 to 6 hours per coat" },
        { label: "Coverage", value: "Approximately 1.5 to 2 kg per m²" },
        { label: "Finish Options", value: "Matte and low sheen" },
      ],
      packaging: "20 kg buckets",
    },
    {
      slug: "regal-primer-wb-101",
      name: "Regal Primer WB 101",
      tagline: "Universal primer for texture and render systems",
      description:
        "A water based acrylic primer that seals the substrate and improves adhesion ahead of texture, render, or emulsion finishes on interior and exterior walls.",
      specs: [
        { label: "Coverage", value: "Approximately 8 to 10 m² per litre" },
        { label: "Drying Time", value: "2 to 4 hours" },
        { label: "Substrates", value: "Concrete, cement plaster, masonry" },
        { label: "VOC Content", value: "Low VOC, water based" },
      ],
      packaging: "5 litre and 20 litre containers",
    },
    {
      slug: "regal-clitherm-ac",
      name: "Regal ClitermAC",
      tagline: "Elastomeric weatherproof topcoat for textured facades",
      description:
        "An elastomeric acrylic topcoat that seals textured render finishes against rain and UV exposure while allowing the wall to breathe, extending the life of the decorative finish.",
      specs: [
        { label: "Elongation", value: "Greater than 100%" },
        { label: "Water Resistance", value: "Resists wind driven rain" },
        { label: "Breathability", value: "Permeable to water vapour" },
        { label: "Coverage", value: "Approximately 1 to 1.5 litres per m²" },
      ],
      packaging: "20 litre containers",
    },
    {
      slug: "regal-eifs-finish-coat",
      name: "Regal EIFS Finish Coat",
      tagline: "Decorative finish for insulated facade systems",
      description:
        "A textured acrylic finish coat compatible with insulated exterior wall systems, combining decorative appearance with the flexibility needed over insulation board assemblies.",
      specs: [
        { label: "Texture Options", value: "Fine, medium, and coarse grades" },
        { label: "Crack Resistance", value: "Flexible finish over EIFS base coats" },
        { label: "Weather Resistance", value: "Formulated for exterior exposure" },
        { label: "Colour Range", value: "Wide standard and custom colour range" },
      ],
      packaging: "20 kg buckets",
    },
    {
      slug: "regal-emulsion-luxury",
      name: "Regal Luxury Wall Emulsion",
      tagline: "Premium emulsion paint for interior and exterior walls",
      description:
        "A premium acrylic emulsion paint that provides smooth coverage and long lasting colour retention as a standalone finish or as a topcoat over texture and render systems.",
      specs: [
        { label: "Coverage", value: "Approximately 10 to 12 m² per litre" },
        { label: "Sheen Level", value: "Matte, satin, and sheen options" },
        { label: "Washability", value: "Scrub resistant finish" },
        { label: "Colour Options", value: "Full standard colour range" },
      ],
      packaging: "1 litre, 4 litre, and 20 litre containers",
    },
  ],
  waterproofing: [
    {
      slug: "regal-pu-gel-membrane",
      name: "Regal PU Gel Membrane",
      tagline: "Liquid applied polyurethane waterproofing membrane",
      description:
        "A liquid applied, seamless polyurethane membrane for terraces, roofs, and podium decks, offering flexibility and UV resistance for long term exposed waterproofing.",
      specs: [
        { label: "Elongation", value: "Greater than 300%" },
        { label: "UV Resistance", value: "Suitable for permanent exposure" },
        { label: "Application Thickness", value: "1.5 to 2 mm dry film" },
        { label: "Recoat Interval", value: "12 to 24 hours" },
      ],
      packaging: "20 kg kits",
    },
    {
      slug: "regal-crystalline-seal",
      name: "Regal Crystalline Seal",
      tagline: "Crystalline waterproofing treatment for concrete",
      description:
        "A crystalline waterproofing compound that penetrates into concrete and reacts with moisture to form insoluble crystals, sealing capillary pores from within for basements and water retaining structures.",
      specs: [
        { label: "Penetration Depth", value: "Reacts within concrete pore structure" },
        { label: "Water Pressure Resistance", value: "Resists positive and negative pressure" },
        { label: "Application", value: "Slurry coat, brush or spray applied" },
        { label: "Self Healing", value: "Reactivates in presence of moisture" },
      ],
      packaging: "25 kg bags",
    },
    {
      slug: "regal-aqua-seal",
      name: "Regal Aqua Seal",
      tagline: "Cementitious waterproof coating for wet areas",
      description:
        "A flexible cementitious waterproof coating for bathrooms, kitchens, and balconies, applied beneath tiling to protect against water penetration in wet area construction.",
      specs: [
        { label: "Flexibility", value: "Crack bridging cementitious system" },
        { label: "Application", value: "Brush or roller applied, two coats" },
        { label: "Tiling Ready", value: "24 hours after final coat" },
        { label: "Coverage", value: "Approximately 1.5 kg per m² per coat" },
      ],
      packaging: "20 kg kits",
    },
    {
      slug: "regal-tough-coat-pu",
      name: "Regal Tough Coat PU",
      tagline: "Under tile waterproofing membrane",
      description:
        "A polyurethane based waterproofing membrane designed specifically for use beneath ceramic and stone tiling, providing a durable seal in wet areas without compromising tile bond strength.",
      specs: [
        { label: "Compatibility", value: "Suitable for direct tile bonding" },
        { label: "Application Thickness", value: "1 to 1.5 mm dry film" },
        { label: "Cure Time", value: "24 hours before tiling" },
        { label: "Flexibility", value: "Accommodates minor substrate movement" },
      ],
      packaging: "5 kg and 20 kg kits",
    },
    {
      slug: "regal-pool-seal-flex",
      name: "Regal PoolSeal Flex",
      tagline: "Flexible membrane for swimming pool waterproofing",
      description:
        "A flexible, submersion rated waterproofing membrane engineered for swimming pool shells, remaining stable and well bonded under constant water contact.",
      specs: [
        { label: "Submersion Rating", value: "Rated for permanent water contact" },
        { label: "Elongation", value: "Greater than 200%" },
        { label: "Application", value: "Brush or roller applied, two to three coats" },
        { label: "Tile Compatibility", value: "Suitable beneath pool tiling" },
      ],
      packaging: "20 kg kits",
    },
    {
      slug: "regal-rain-guard-roof",
      name: "Regal RainGuard Roof",
      tagline: "Elastomeric roof waterproofing coating",
      description:
        "A weather resistant elastomeric coating for exposed roofs, reflecting solar heat while sealing the roof surface against water penetration across temperature extremes.",
      specs: [
        { label: "Solar Reflectance", value: "High reflectance, reduces roof surface temperature" },
        { label: "Elongation", value: "Greater than 250%" },
        { label: "Application", value: "Roller or spray applied, two coats" },
        { label: "Service Life", value: "Formulated for long term exterior exposure" },
      ],
      packaging: "20 litre containers",
    },
  ],
};
