export interface JournalSection {
  heading: string;
  paragraphs: string[];
}

export interface JournalBody {
  sections: JournalSection[];
}

export const JOURNAL_CONTENT: Record<string, JournalBody> = {
  "terrace-waterproofing-fails-within-3-5-years": {
    sections: [
      {
        heading: "The Pattern Repeats Across Almost Every Site",
        paragraphs: [
          "A terrace gets waterproofed, looks fine for a season or two, then starts showing damp patches on the ceiling below. The owner assumes the product failed. In most cases, the product was never the problem, the system around it was incomplete.",
          "Waterproofing membranes are only one part of a terrace system. Surface preparation, slope, drainage, and protective screed all affect how long that membrane actually holds up under sun, rain, and temperature swings.",
        ],
      },
      {
        heading: "Where the Failure Actually Starts",
        paragraphs: [
          "The most common issue is inadequate surface preparation. A membrane applied over a dusty, uneven, or damp substrate never bonds properly, and once it lifts in one spot, water finds its way underneath the entire sheet.",
          "The second most common issue is skipping the protective topcoat or screed. A membrane left exposed to direct UV and foot traffic degrades far faster than one that is protected. Many jobs cut this step to save time or budget, and it shows up as failure within a few years instead of a decade.",
        ],
      },
      {
        heading: "What a Terrace System Should Actually Include",
        paragraphs: [
          "A properly built terrace waterproofing system includes surface preparation and priming, a membrane suited to the exposure, correct slope toward drainage points, and a protective screed or tile layer on top. Skipping any one of these shortens the lifespan of the whole system, regardless of how good the membrane itself is.",
          "If you are reviewing a terrace waterproofing scope, ask what happens above the membrane, not just what the membrane is made of. That answer tells you more about expected service life than the product name on the tin.",
        ],
      },
    ],
  },
  "epoxy-tile-grout-vs-cement-tile-grout": {
    sections: [
      {
        heading: "The Basic Difference",
        paragraphs: [
          "Cement based grout is a mixture of cement, sand, and additives, and it remains porous even after curing. Epoxy grout is a resin based system that cures into a dense, largely non-porous fill. That single difference explains most of the performance gap between the two.",
        ],
      },
      {
        heading: "Where Cement Grout Falls Short",
        paragraphs: [
          "Because cement grout is porous, it absorbs moisture, oil, and staining agents over time. In kitchens, bathrooms, and high traffic commercial floors, this shows up as discoloured grout lines within a year or two, even with regular sealing.",
          "Cement grout is also more prone to cracking under movement, since it has little flexibility once cured.",
        ],
      },
      {
        heading: "Where Epoxy Grout Earns Its Higher Cost",
        paragraphs: [
          "Epoxy grout resists staining, chemical exposure, and moisture penetration far better, which is why it is standard in commercial kitchens, laboratories, and areas with frequent washdown. It also holds colour consistency much longer, since there is no porous surface for dirt to embed into.",
          "The tradeoff is cost and working time, epoxy grout is more expensive per square metre and requires more careful application within its pot life. For high traffic or high hygiene areas, that tradeoff is usually worth it. For low traffic residential work, cement grout with proper sealing is often sufficient.",
        ],
      },
    ],
  },
  "industrial-epoxy-vs-polyurethane-flooring": {
    sections: [
      {
        heading: "Two Systems, Different Strengths",
        paragraphs: [
          "Epoxy and polyurethane flooring are often compared as if one is simply better than the other. In practice, they are suited to different conditions, and the right choice depends on what the floor will actually experience day to day.",
        ],
      },
      {
        heading: "Where Epoxy Performs Best",
        paragraphs: [
          "Epoxy flooring offers excellent compressive strength and chemical resistance, making it a strong choice for warehouses, manufacturing floors, and areas with heavy static loads. It is also generally more cost effective for large area coverage.",
          "Its main limitation is flexibility. Epoxy is a rigid system, so it performs less well where there is thermal cycling or vibration from heavy machinery, since it is more prone to cracking under repeated movement.",
        ],
      },
      {
        heading: "Where Polyurethane Performs Best",
        paragraphs: [
          "Polyurethane flooring is more flexible and holds up better under thermal shock, making it the preferred choice for food processing, cold storage, and areas with frequent temperature changes. It also tends to resist abrasion from constant forklift or trolley traffic slightly better over the long term.",
          "The tradeoff is cost, PU systems are typically more expensive than epoxy for the same coverage. For most dry industrial floors without major temperature swings, epoxy remains the more economical choice. For food, pharma, or cold chain facilities, PU is usually worth the premium.",
        ],
      },
    ],
  },
  "how-long-does-anti-corrosion-coating-really-last": {
    sections: [
      {
        heading: "The Number on the Data Sheet Is a Starting Point, Not a Guarantee",
        paragraphs: [
          "Anti corrosion coatings are often marketed with a service life figure, ten years, fifteen years, and so on. That figure assumes correct surface preparation, correct film thickness, and an environment within the product's design range. Change any of those variables and actual performance can shift significantly.",
        ],
      },
      {
        heading: "What Actually Determines Coating Lifespan",
        paragraphs: [
          "Surface preparation is the single biggest factor. A coating applied over rust, mill scale, or contamination will fail early no matter how good the product is, because it never achieves proper adhesion in the first place.",
          "Film thickness matters just as much. Coatings are tested and rated at a specific dry film thickness, and applying it too thin, a common shortcut to save material, cuts the effective service life dramatically, sometimes by more than half.",
          "Environment is the third factor. A zinc rich primer rated for ten years in a moderate industrial setting may only last four or five years in a coastal or marine environment with constant salt exposure.",
        ],
      },
      {
        heading: "Getting Closer to the Rated Lifespan",
        paragraphs: [
          "The most reliable way to get full value from an anti corrosion system is to follow the specified surface preparation standard, apply the correct number of coats at the correct thickness, and choose a product rated for the actual exposure conditions, not just the general category of steel or concrete protection.",
          "When in doubt, a quick check with a technical team before application is far cheaper than a recoat three years ahead of schedule.",
        ],
      },
    ],
  },
  "thermoplastic-road-marking-vs-paint": {
    sections: [
      {
        heading: "Upfront Cost Is Only Half the Story",
        paragraphs: [
          "Paint based road markings cost less per litre and are faster to apply, which makes them attractive for tight budgets and quick turnarounds. Thermoplastic markings cost more upfront and require specialised application equipment, which is why many projects default to paint without comparing total lifecycle cost.",
        ],
      },
      {
        heading: "Where Paint Falls Behind",
        paragraphs: [
          "Standard road paint typically lasts six months to a year on high traffic roads before visibility drops enough to need a repaint. On busy stretches, that can mean two repaints a year, each with its own material, labour, and traffic management cost.",
        ],
      },
      {
        heading: "Why Thermoplastic Often Wins on Total Cost",
        paragraphs: [
          "Thermoplastic markings bond into the road surface rather than sitting on top of it, giving significantly better resistance to tyre wear and weathering. A well applied thermoplastic marking can last three to five years on the same stretch of road, cutting the number of repaint cycles and the associated traffic disruption.",
          "For high traffic roads, highways, and intersections, thermoplastic usually works out cheaper over a three year period despite the higher initial cost. For low traffic residential roads or temporary markings, paint remains the more sensible choice.",
        ],
      },
    ],
  },
  "what-makes-a-sports-court-surface-play-well": {
    sections: [
      {
        heading: "It Is Never Just the Top Coat",
        paragraphs: [
          "Players judge a court by how it feels underfoot, grip, bounce, and how much impact reaches the joints after an hour of play. All three of those come from the layers beneath the visible surface, not the colour coat itself.",
        ],
      },
      {
        heading: "The Layers That Actually Do the Work",
        paragraphs: [
          "A properly built acrylic or PU sports surface starts with a levelled base coat that removes minor surface irregularities in the asphalt or concrete beneath. On top of that, a cushioning layer absorbs impact and reduces strain on players' joints, especially important for basketball and tennis where repeated jumping and quick direction changes are constant.",
          "The final colour and texture coat is what determines grip and ball bounce consistency. Getting the texture right, not too smooth, not too abrasive, is what separates a court that plays consistently from one that feels unpredictable under different weather conditions.",
        ],
      },
      {
        heading: "Why Some Courts Feel Great and Others Do Not",
        paragraphs: [
          "Courts that skip the cushioning layer to save cost often look identical to a properly built court on installation day, but players notice the difference within the first few sessions. The impact absorption and consistent grip only show up when the full layer system is specified and applied correctly, which is why the base and cushioning layers matter just as much as the visible finish.",
        ],
      },
    ],
  },
  "why-wall-texture-finishes-crack-and-fade-early": {
    sections: [
      {
        heading: "The Finish Gets Blamed, the Prep Is Usually the Cause",
        paragraphs: [
          "A texture finish that cracks or fades within a year is rarely a case of bad material. In most cases, the wall was not primed correctly, or the texture was applied over a surface that was still curing, both of which prevent proper bonding and long-term durability.",
        ],
      },
      {
        heading: "Common Mistakes That Shorten Finish Life",
        paragraphs: [
          "Applying texture directly onto bare masonry without a compatible primer is one of the most frequent issues, since the primer is what gives the texture a consistent surface to bond to and controls how much moisture the texture layer absorbs from the wall.",
          "Skipping the protective topcoat is another common shortcut. Without it, exterior textures are left exposed to direct UV and rain, which fades pigment and allows dirt to streak into the texture pattern much faster than a sealed finish would.",
        ],
      },
      {
        heading: "Getting a Finish That Actually Lasts",
        paragraphs: [
          "A durable texture finish depends on three things done in order, a correctly cured substrate, the right primer for that substrate, and a weather resistant topcoat sealing the final texture. Skipping any one of these steps to save a day of labour is usually what turns a finish that should last a decade into one that needs redoing within two or three years.",
        ],
      },
    ],
  },
  "crack-injection-vs-full-concrete-replacement": {
    sections: [
      {
        heading: "Not Every Crack Means Structural Failure",
        paragraphs: [
          "Cracks in concrete cause understandable concern, but the right repair method depends heavily on the cause and extent of the crack, not just its visible width. Treating every crack as a demolition job wastes budget, while ignoring a genuinely structural crack risks bigger problems later.",
        ],
      },
      {
        heading: "When Injection Repair Is the Right Call",
        paragraphs: [
          "Low viscosity epoxy or polyurethane injection works well for cracks caused by shrinkage, minor settlement, or surface stress, where the surrounding concrete is otherwise sound. Injection seals the crack, restores some structural continuity, and stops water ingress that would otherwise accelerate reinforcement corrosion.",
          "This approach is faster, less disruptive, and considerably cheaper than replacement, which makes it the preferred first option whenever the underlying concrete is structurally intact.",
        ],
      },
      {
        heading: "When Replacement Is Actually Necessary",
        paragraphs: [
          "Full replacement becomes necessary when cracking is accompanied by spalling, exposed and heavily corroded reinforcement, or signs of ongoing structural movement. In these cases, injection would only mask a problem that is still active beneath the surface.",
          "A simple rule of thumb, if the crack is stable and the surrounding concrete sounds solid when tapped, injection repair is usually sufficient. If there is active movement, significant spalling, or reinforcement damage, a structural engineer should assess the extent of replacement needed before any repair work begins.",
        ],
      },
    ],
  },
  "top-5-concrete-problems-site-engineers-should-know": {
    sections: [
      {
        heading: "1. Shrinkage Cracking",
        paragraphs: [
          "Concrete shrinks slightly as it cures, and without proper curing practices or control joints, that shrinkage shows up as cracking within the first weeks after pouring. Consistent curing and correctly placed joints prevent most of this.",
        ],
      },
      {
        heading: "2. Reinforcement Corrosion",
        paragraphs: [
          "Once moisture and chlorides reach embedded steel, corrosion begins and the resulting rust expands, cracking the concrete around it from the inside out. Adequate cover depth and corrosion inhibiting treatments are the main defences.",
        ],
      },
      {
        heading: "3. Poor Surface Preparation Before Coating or Flooring",
        paragraphs: [
          "Applying a floor coating or waterproofing membrane over a dusty, oily, or uncured surface leads to adhesion failure, regardless of how good the applied product is. Surface preparation should never be treated as an optional step to save time.",
        ],
      },
      {
        heading: "4. Inadequate Curing",
        paragraphs: [
          "Concrete that dries too quickly, especially in hot weather, does not reach its full design strength and becomes more prone to surface cracking and dusting. Proper curing compounds or wet curing methods make a measurable difference in long-term durability.",
        ],
      },
      {
        heading: "5. Incorrect Joint Design or Placement",
        paragraphs: [
          "Control and expansion joints exist to manage where concrete cracks, not to prevent cracking entirely. Joints placed too far apart, or left out altogether, mean the concrete cracks wherever it wants to, often in visible and structurally unhelpful locations.",
        ],
      },
    ],
  },
};
