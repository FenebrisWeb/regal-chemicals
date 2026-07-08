import type { PillarItem } from "@/types/ui";

export interface SystemDetail {
  slug: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  benefits: PillarItem[];
  applications: PillarItem[];
}

export const SYSTEM_DETAILS: Record<string, SystemDetail> = {
  "anti-corrosion": {
    slug: "anti-corrosion",
    overviewTitle: "Protection Built in Layers, Not Guesswork",
    overviewParagraphs: [
      "Steel and concrete rarely fail from one cause. Moisture, salt exposure, and industrial chemicals work together over time, and a single coat of paint is not enough to stop them. The Regal Anticorrosion Layer System is built as a sequence, a rust converting primer, a zinc rich coat for cathodic protection, and a high build topcoat that shields the surface from weather and chemical attack.",
      "Each layer has a specific job. Skipping one, or applying the wrong product for the exposure level, is usually why coatings fail early. Our technical team helps you match the right combination to your structure, whether that is a pipeline, a storage tank, structural steel, or a reinforced concrete pillar.",
    ],
    benefits: [
      {
        icon: "trust",
        title: "Long Service Life",
        description: "A correctly layered system keeps steel and concrete protected for years, not months, cutting repaint cycles significantly.",
      },
      {
        icon: "operations",
        title: "Works in Harsh Conditions",
        description: "Formulated for marine, coastal, and industrial environments where humidity and chemical exposure are constant.",
      },
      {
        icon: "quality",
        title: "Certified Performance",
        description: "Every layer is tested for adhesion, abrasion resistance, and chemical resistance before it reaches your site.",
      },
    ],
    applications: [
      { icon: "manufacturing", title: "Pipelines", description: "Internal and external protection for steel pipelines carrying industrial fluids." },
      { icon: "growth", title: "Ships and Marine Structures", description: "Anti corrosion coatings built to withstand constant salt water exposure." },
      { icon: "trust", title: "Structural Pillars", description: "Protects load bearing steel and concrete pillars in stadiums and industrial buildings." },
      { icon: "analytics", title: "Storage Tanks", description: "Chemical resistant coatings for tanks holding fuel, water, or industrial liquids." },
    ],
  },
  construction: {
    slug: "construction",
    overviewTitle: "The Bonding Layer Behind Every Strong Structure",
    overviewParagraphs: [
      "A building is only as reliable as the materials holding it together. The Regal Construction Layer System covers the adhesives, grouts, admixtures, and bonding agents that give a structure its strength, from block laying to tile fixing to structural grouting.",
      "We formulate for real site conditions, fast setting times where schedules are tight, high strength grouts where loads are heavy, and flexible adhesives where movement is expected. The result is a system that holds up under the stresses a building actually faces, not just in a lab.",
    ],
    benefits: [
      {
        icon: "operations",
        title: "Strong, Reliable Bonding",
        description: "Formulated for consistent adhesion across concrete, block, and masonry substrates.",
      },
      {
        icon: "growth",
        title: "Faster Site Progress",
        description: "Quick setting and easy to apply formulations keep construction schedules on track.",
      },
      {
        icon: "quality",
        title: "Built for Load",
        description: "High strength grouts and mortars engineered to handle structural and heavy duty applications.",
      },
    ],
    applications: [
      { icon: "manufacturing", title: "Block and Brick Laying", description: "Adhesives that provide strong, uniform bonding for masonry work." },
      { icon: "trust", title: "Tile Fixing", description: "A full range of tile adhesives for floors, walls, and wet areas." },
      { icon: "analytics", title: "Structural Grouting", description: "High strength grouts for machine bases, columns, and heavy load points." },
      { icon: "sustainability", title: "Crack Repair and Filling", description: "Flexible fillers that seal cracks and prevent further movement." },
    ],
  },
  floors: {
    slug: "floors",
    overviewTitle: "Flooring That Handles Real Traffic",
    overviewParagraphs: [
      "Warehouse floors take forklift traffic, food processing floors take constant washdown, and showroom floors need to look flawless for years. The Regal Floors Layer System is built around this range, epoxy and polyurethane coatings, self levelling toppings, and decorative finishes that are chosen to match how a floor will actually be used.",
      "Beyond looks, a good floor system needs the right primer, the right build thickness, and the right topcoat chemistry for the loads and chemicals it will see. We help specify that combination so the floor performs from day one and stays that way.",
    ],
    benefits: [
      {
        icon: "quality",
        title: "Seamless and Durable",
        description: "Resin flooring systems that resist wear, impact, and chemical spillage without joints or seams.",
      },
      {
        icon: "operations",
        title: "Easy to Maintain",
        description: "Smooth, non-porous finishes that are simple to clean and hold up to daily washdown.",
      },
      {
        icon: "customer",
        title: "Matched to Use",
        description: "Systems specified for the exact traffic, load, and chemical exposure of your facility.",
      },
    ],
    applications: [
      { icon: "manufacturing", title: "Industrial Flooring", description: "Heavy duty epoxy and PU systems built for forklift and machinery traffic." },
      { icon: "growth", title: "Commercial Flooring", description: "Decorative, durable finishes for showrooms, offices, and retail spaces." },
      { icon: "trust", title: "Antistatic Flooring", description: "Conductive flooring for electronics and controlled environments." },
      { icon: "sustainability", title: "Car Park Flooring", description: "PU elastic systems built for vehicle traffic and long-term wear." },
    ],
  },
  "repair-and-protect": {
    slug: "repair-and-protect",
    overviewTitle: "Restoring Structures Before Small Damage Grows",
    overviewParagraphs: [
      "Cracks, spalling concrete, and weakened joints rarely stay small. Left alone, they let in moisture and accelerate corrosion of embedded steel. The Regal Repair and Protect Layer System is built to stop that cycle, low viscosity injection grouts that seal fine cracks, high strength repair mortars that rebuild damaged sections, and protective coatings that guard the repair for the long term.",
      "We look at repair as a two-part job, fix the existing damage properly, then protect the surface so the same failure does not happen again. That combination is what keeps repaired structures performing for years instead of needing attention again within a season.",
    ],
    benefits: [
      {
        icon: "trust",
        title: "Restores Structural Integrity",
        description: "High strength mortars and grouts rebuild damaged concrete and steel sections properly.",
      },
      {
        icon: "operations",
        title: "Fast, Practical Application",
        description: "Products formulated for quick turnaround so repairs do not hold up your project.",
      },
      {
        icon: "sustainability",
        title: "Prevents Repeat Damage",
        description: "Protective topcoats shield the repaired area from moisture and chemical attack going forward.",
      },
    ],
    applications: [
      { icon: "manufacturing", title: "Crack Injection", description: "Low viscosity epoxy grouts that seal fine cracks in concrete structures." },
      { icon: "trust", title: "Concrete Restoration", description: "High strength repair mortars for spalled and damaged concrete sections." },
      { icon: "growth", title: "Joint Repair", description: "Flexible sealants and fillers for expansion and construction joints." },
      { icon: "analytics", title: "Steel Reinforcement Protection", description: "Coatings that guard exposed rebar against ongoing corrosion." },
    ],
  },
  "road-marking": {
    slug: "road-marking",
    overviewTitle: "Visibility That Holds Up Under Traffic",
    overviewParagraphs: [
      "A road marking is only useful if it stays visible after months of tyres, weather, and sunlight. The Regal Road Marking Layer System covers thermoplastic and cold applied paints formulated for strong adhesion, fast drying, and long-term colour retention on roads, highways, parking areas, and sports courts.",
      "We formulate for the reality of heavy traffic surfaces, quick curing so lanes reopen fast, and durable pigments that do not fade or wear away after the first monsoon. Reflective and non-reflective options are available depending on where the marking needs to perform.",
    ],
    benefits: [
      {
        icon: "quality",
        title: "Long-Lasting Visibility",
        description: "Weather-resistant formulations that hold colour and reflectivity under constant traffic.",
      },
      {
        icon: "operations",
        title: "Fast Curing",
        description: "Quick drying paints that minimise road closure time during application.",
      },
      {
        icon: "trust",
        title: "Strong Surface Adhesion",
        description: "Bonds reliably to asphalt and concrete, resisting peeling and cracking over time.",
      },
    ],
    applications: [
      { icon: "manufacturing", title: "Highways and Roads", description: "Thermoplastic and paint-based markings built for heavy vehicle traffic." },
      { icon: "trust", title: "Parking Areas", description: "Clear, durable line marking for commercial and residential parking." },
      { icon: "growth", title: "Sports Courts", description: "Precise, weather-resistant line marking for outdoor sports surfaces." },
      { icon: "sustainability", title: "Industrial Zoning", description: "Safety and zoning markings for warehouses and factory floors." },
    ],
  },
  sports: {
    slug: "sports",
    overviewTitle: "Surfaces Built for Performance and Grip",
    overviewParagraphs: [
      "A sports surface has to do more than look good, it needs consistent grip, the right amount of shock absorption, and the ability to handle years of play in the sun and rain. The Regal Sports Layer System combines acrylic and polyurethane surfacing, cushioning layers, and durable colour coats for courts and recreational areas.",
      "We build the system in layers, a levelled base coat, a cushioning layer where impact matters, and a textured, weather resistant top coat. That layering is what keeps a court playing consistently for seasons, not just looking good on installation day.",
    ],
    benefits: [
      {
        icon: "quality",
        title: "Consistent Grip",
        description: "Textured finishes engineered for reliable traction in wet and dry conditions.",
      },
      {
        icon: "customer",
        title: "Comfortable to Play On",
        description: "Cushioning layers reduce impact and joint strain during extended play.",
      },
      {
        icon: "sustainability",
        title: "Weather Resistant",
        description: "UV stable coatings that resist fading, cracking, and wear from outdoor exposure.",
      },
    ],
    applications: [
      { icon: "growth", title: "Basketball Courts", description: "Acrylic and PU surfacing systems for outdoor and indoor basketball courts." },
      { icon: "trust", title: "Pickleball and Tennis Courts", description: "Precision surfacing built for consistent bounce and line accuracy." },
      { icon: "manufacturing", title: "Running Tracks", description: "Durable, cushioned surfacing for athletic tracks and training areas." },
      { icon: "analytics", title: "Multipurpose Recreation Areas", description: "Flexible surfacing systems for schools, clubs, and community spaces." },
    ],
  },
  textures: {
    slug: "textures",
    overviewTitle: "Finishes That Protect as Much as They Decorate",
    overviewParagraphs: [
      "Exterior and interior wall finishes take on more than appearance, they need to resist weathering, hide minor surface imperfections, and stay looking sharp for years. The Regal Textures Layer System pairs decorative render finishes with primers and protective topcoats so the look you choose actually lasts.",
      "From coarse stucco effects to smooth coloured renders, each finish is built on a proper primer and sealed with a weather resistant topcoat. That base and seal combination is what stops textures from cracking, fading, or picking up dirt streaks after the first few seasons.",
    ],
    benefits: [
      {
        icon: "innovation",
        title: "Wide Range of Finishes",
        description: "From fine stucco to bold coloured renders, suited to different architectural styles.",
      },
      {
        icon: "sustainability",
        title: "Weather Resistant",
        description: "Formulated to resist fading, staining, and cracking under sun and rain exposure.",
      },
      {
        icon: "quality",
        title: "Proper Surface Preparation",
        description: "Primer and base coat systems that give textures a long-lasting, even bond.",
      },
    ],
    applications: [
      { icon: "manufacturing", title: "Exterior Wall Finishes", description: "Decorative renders that protect and enhance building facades." },
      { icon: "trust", title: "Interior Feature Walls", description: "Textured finishes for accent walls in homes and commercial interiors." },
      { icon: "growth", title: "EIFS and Insulated Facades", description: "Compatible finishing systems for insulated exterior wall assemblies." },
      { icon: "analytics", title: "Renovation Projects", description: "Finishes that refresh ageing walls without a full structural rebuild." },
    ],
  },
  waterproofing: {
    slug: "waterproofing",
    overviewTitle: "Keeping Water Out for the Long Term",
    overviewParagraphs: [
      "Most waterproofing failures do not happen because a product was weak, they happen because the wrong system was used for the exposure, or the layers were not applied correctly. The Regal Waterproofing Layer System covers PU membranes, crystalline treatments, and elastomeric coatings, matched to roofs, basements, terraces, and wet areas.",
      "Each application has different demands. A terrace needs UV resistance and flexibility to handle temperature swings, a basement needs strong resistance to constant water pressure, and a swimming pool needs a system that stays flexible and bonded even when submerged. We help match the right membrane to the right job.",
    ],
    benefits: [
      {
        icon: "trust",
        title: "Complete Moisture Protection",
        description: "Seamless membranes that block water infiltration across roofs, walls, and foundations.",
      },
      {
        icon: "innovation",
        title: "Stays Flexible",
        description: "Formulated to move with structural expansion and contraction without cracking.",
      },
      {
        icon: "sustainability",
        title: "Built for the Long Term",
        description: "Durable systems designed to perform for years, reducing repeat waterproofing work.",
      },
    ],
    applications: [
      { icon: "manufacturing", title: "Terraces and Roofs", description: "UV stable membranes that handle direct weather exposure year round." },
      { icon: "trust", title: "Basements and Foundations", description: "Systems built to resist constant water pressure below ground." },
      { icon: "growth", title: "Swimming Pools", description: "Flexible, submersion-ready membranes for pool structures." },
      { icon: "analytics", title: "Wet Area Waterproofing", description: "Reliable protection for bathrooms, kitchens, and balconies." },
    ],
  },
};
