// Content for the individual service pages at /services/<slug>.
// Prices match the published cost guide (/blog/cost-of-mold-removal-in-kenya).
// If you change a price, change it in both places and bump `updated`.

export interface ServicePage {
  slug: string;
  navLabel: string;
  icon: string;
  /** Full <title> tag including the brand; keep under 60 characters */
  title: string;
  description: string;
  h1: string;
  serviceType: string;
  updated: string;
  intro: string[];
  priceHeading: string;
  priceRows: { item: string; price: string }[];
  priceNote: string;
  /** Lowest and highest published KES figure, for schema */
  priceRange: { low: number; high: number };
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "mold-removal",
    navLabel: "Mold (Mould) Removal",
    icon: "🧽",
    title: "Mold (Mould) Removal in Kenya: Process & Prices | MoldGuard",
    description:
      "Professional mold (mould) removal in Nairobi and across Kenya. Containment, HEPA filtration, antimicrobial treatment and drying. Bathrooms from KES 8,500. Call 0710907628.",
    h1: "Mold (Mould) Removal: Our Process and Prices in Kenya",
    serviceType: "Mold removal",
    updated: "2026-11-15",
    intro: [
      "Mold removal, spelled mould removal in British and Kenyan English, is the work of physically getting mold off your walls, ceilings and furniture and out of the air you breathe. MoldGuard Kenya carries it out in homes, apartments, offices and commercial buildings in Nairobi, Mombasa and other towns across Kenya.",
      "A wipe with bleach and a coat of paint hides mould for a few weeks. Proper removal takes the growth out at the root, cleans the air, dries the structure and deals with the damp that fed it, so the patch does not come back after the next rains.",
    ],
    priceHeading: "Mold Removal Prices in Kenya",
    priceRows: [
      { item: "Single bathroom", price: "KES 8,500 – 10,000" },
      { item: "Standard bedroom", price: "KES 15,000 – 20,000" },
      { item: "1–2 rooms where wall or ceiling boards must be removed", price: "KES 45,000 – 85,000" },
      { item: "Whole-house or structural remediation", price: "KES 120,000 – 300,000+" },
      { item: "Site inspection before any work", price: "KES 2,500" },
    ],
    priceNote:
      "These are typical figures for contained cases. Your written quote follows a site inspection, because the price depends on the size of the area, the surface material and the cause of the damp.",
    priceRange: { low: 8500, high: 300000 },
    sections: [
      {
        heading: "Signs You Need Professional Mould Removal",
        paragraphs: [
          "Small spots on a tiled surface can be cleaned by the homeowner. Call a professional when you see any of the following, because they point to growth inside the material or to a moisture problem that cleaning will not solve.",
        ],
        bullets: [
          "Black, green or grey patches that return within weeks of cleaning or repainting.",
          "A musty smell in a room, wardrobe or cupboard, even where no mould is visible.",
          "Peeling paint, bubbling plaster or brown water stains on a ceiling.",
          "Mould covering more than about one square metre, or appearing in several rooms.",
          "Coughing, wheezing or itchy eyes that ease when you leave the building.",
        ],
      },
      {
        heading: "How Our Mold Removal Process Works",
        paragraphs: [
          "Every job follows the same five stages. The time each one takes depends on how far the mould has spread.",
        ],
        bullets: [
          "Inspection: we find the moisture source with moisture meters and thermal imaging, and agree the scope and price with you before work starts.",
          "Containment: the affected area is sealed with plastic sheeting so spores cannot drift into clean rooms.",
          "HEPA air scrubbing: filtration machines run during the work to capture airborne spores.",
          "Removal and antimicrobial treatment: growth is removed from hard surfaces, porous materials that cannot be saved are taken out, and what remains is treated to kill the roots.",
          "Drying and verification: dehumidifiers return the structure to a normal moisture level and we check the result before handing the room back.",
        ],
      },
      {
        heading: "Where Mould Grows in Kenyan Buildings",
        paragraphs: [
          "Most of our call-outs involve the same few places. Bathrooms without windows or extractor fans come first, followed by bedroom walls behind wardrobes and beds, ceilings under leaking roofs, kitchen sink cabinets and the lower part of ground-floor walls affected by rising damp.",
          "In Nairobi the trouble peaks around the long and short rains and again in the cold months of July and August. At the coast, humidity is high enough all year for mould to grow on clothes, mattresses and furniture as well as on walls.",
        ],
      },
      {
        heading: "Why Bleach and Paint Do Not Work",
        paragraphs: [
          "Household bleach is mostly water. On a porous wall the chlorine stays on the surface while the water soaks in, which feeds the roots left behind. Scrubbing dry mould also throws spores into the air and spreads the problem to other rooms.",
          "Painting over mould traps moisture in the wall, and the growth pushes through the new coat within months. Lasting removal means treating the material, cleaning the air and fixing the source of damp together.",
        ],
      },
      {
        heading: "Homes, Rentals and Commercial Properties",
        paragraphs: [
          "We work for homeowners, tenants, landlords, property managers, schools, offices, hotels and restaurants. For rental disputes, our written report records the cause of the mould, which helps a tenant and landlord agree who is responsible for the repair. For businesses we can schedule the work outside trading hours and keep the rest of the premises in use.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does mold removal cost in Kenya?",
        a: "A single bathroom typically costs KES 8,500 – 10,000 and a standard bedroom KES 15,000 – 20,000. Larger jobs are quoted after a KES 2,500 site inspection.",
      },
      {
        q: "Is mold removal the same as mould removal?",
        a: "Yes. Mold is the American spelling and mould is the British spelling used in Kenya. The fungus, the health risks and the treatment are identical.",
      },
      {
        q: "How long does mold removal take?",
        a: "A single bathroom is often completed within a day. A bedroom that needs structural drying can take several days because the dehumidifiers must run until moisture readings are normal.",
      },
      {
        q: "Will the mould come back after removal?",
        a: "If the source of moisture is fixed, recurrence is unlikely. Mould returns when the leak, condensation or damp that caused it is left in place, which is why every job starts with finding that source.",
      },
      {
        q: "Can I stay in the house during the work?",
        a: "For a small contained job such as one bathroom, most people stay at home and keep the treated area closed. For larger jobs across several rooms we will advise you before work begins.",
      },
    ],
  },
  {
    slug: "mold-inspection",
    navLabel: "Mold Inspection",
    icon: "🔍",
    title: "Mold (Mould) Inspection in Nairobi, Kenya | MoldGuard",
    description:
      "Professional mold (mould) inspection in Nairobi and across Kenya for a flat KES 2,500. Moisture metering, thermal scanning, air quality check and a written report. Call 0710907628.",
    h1: "Mold (Mould) Inspection Services in Nairobi, Kenya",
    serviceType: "Mold inspection",
    updated: "2026-11-15",
    intro: [
      "A mold inspection, or mould inspection, is a site visit that answers three questions: is there mould in the building, how far has it spread, and where is the moisture coming from. MoldGuard Kenya carries out inspections in homes, apartments and commercial properties in Nairobi and across Kenya for a flat fee of KES 2,500.",
      "It is the cheapest step in the whole process and the one that saves the most money. A quote written without an inspection is a guess, and treatment that misses the moisture source has to be paid for twice.",
    ],
    priceHeading: "Mold Inspection Prices",
    priceRows: [
      { item: "Site inspection (moisture metering, thermal scanning, air quality check, written report)", price: "KES 2,500" },
      { item: "Laboratory mold testing, if mould is suspected but not visible", price: "KES 7,500 per kit" },
    ],
    priceNote:
      "Most inspections do not need laboratory testing. If you can already see the mould, the inspection alone is usually enough to plan the treatment.",
    priceRange: { low: 2500, high: 7500 },
    sections: [
      {
        heading: "What the KES 2,500 Inspection Includes",
        paragraphs: ["Our technician spends the visit building a picture of the moisture in the building, not only looking at the stained wall."],
        bullets: [
          "Moisture metering: readings inside walls, floors and ceilings to find damp where nothing is visible yet.",
          "Thermal scanning: infrared imaging that shows the cold, wet areas behind paint, tiles and ceiling boards.",
          "Air quality check: an assessment of airborne spore levels to see whether contamination has spread beyond the visible patch.",
          "Visual assessment: affected rooms plus the places mould usually hides, such as behind wardrobes, under sinks and in roof spaces.",
        ],
      },
      {
        heading: "What You Receive Afterwards",
        paragraphs: [
          "You get a written report that states where mould was found, the moisture readings, the most likely cause and the treatment we recommend, with a quotation for the work. You are free to use the report to compare quotes or to pass to a landlord, a buyer or an insurer.",
          "If the inspection finds no mould, the report confirms that moisture and air quality were within a normal range on the day. That is useful to have on file when you are chasing the cause of a smell or an allergy.",
        ],
      },
      {
        heading: "When to Book a Mould Inspection",
        paragraphs: ["An inspection is worth booking in any of these situations."],
        bullets: [
          "You can smell mustiness but cannot see where it comes from.",
          "Mould has returned after cleaning or repainting.",
          "The building has had a roof leak, a burst pipe or flooding.",
          "Someone in the household has a cough, asthma or allergies that are worse indoors.",
          "You are about to buy or rent a property and want to know its condition.",
          "You are a landlord or tenant and need the cause of damp recorded in writing.",
        ],
      },
      {
        heading: "Inspection or Laboratory Testing: Which Do You Need?",
        paragraphs: [
          "The two are often confused. An inspection finds moisture and visible or hidden growth using instruments on site. Laboratory testing takes a sample of air or a surface, sends it for analysis and reports the type and concentration of spores.",
          "Start with the inspection. Testing is added when the readings suggest contamination that cannot be seen, or when you need a laboratory result for a medical, legal or insurance reason. Our mold testing page explains that service in full.",
        ],
      },
      {
        heading: "How to Prepare for the Visit",
        paragraphs: [
          "Leave the affected areas as they are and do not clean or repaint beforehand, since that hides the evidence the technician needs. Make a note of when the problem started, any leaks or repairs you know about, and which rooms smell worst. Clear access to roof hatches, under-sink cupboards and fitted wardrobes also saves time.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a mold inspection cost in Kenya?",
        a: "MoldGuard Kenya charges a flat KES 2,500 for a site inspection, which includes moisture metering, thermal scanning, an air quality check and a written report.",
      },
      {
        q: "Is the inspection fee deducted from the cost of treatment?",
        a: "This depends on the arrangement made at the time of booking. Ask when you schedule the visit, because it can vary with the scope of the project.",
      },
      {
        q: "Can you find mould that is hidden behind walls?",
        a: "Yes. Moisture meters and thermal imaging show damp inside walls, floors and ceilings, which is where hidden mould grows. Laboratory testing can then confirm it if needed.",
      },
      {
        q: "What happens if the inspection finds no mould?",
        a: "You still receive a written report confirming the moisture and air quality findings, which is useful documentation for landlords, tenants and anyone investigating a musty smell.",
      },
      {
        q: "How soon can a technician come?",
        a: "It depends on technician availability and your location. Call 0710907628 to check the earliest slot for your area.",
      },
    ],
  },
  {
    slug: "black-mold-removal",
    navLabel: "Black Mold Removal",
    icon: "☣️",
    title: "Black Mold (Mould) Removal in Nairobi, Kenya | MoldGuard",
    description:
      "Safe black mold (black mould) removal in Nairobi and across Kenya. Full containment, HEPA air scrubbing and treatment of Stachybotrys by trained technicians. Call 0710907628.",
    h1: "Black Mold (Mould) Removal in Nairobi, Kenya",
    serviceType: "Black mold removal",
    updated: "2026-11-15",
    intro: [
      "Black mold, written black mould in Kenyan English, usually refers to Stachybotrys chartarum, a dark green-black fungus that grows on materials which have stayed wet for a long time. MoldGuard Kenya removes it from homes and commercial buildings in Nairobi and across Kenya under full containment.",
      "Not every dark patch is Stachybotrys. Several common moulds look black on a wall. All of them should be removed, but true black mould needs stricter handling because disturbing it releases spores and fragments that are harmful to breathe.",
    ],
    priceHeading: "Black Mold Removal Prices",
    priceRows: [
      { item: "Site inspection", price: "KES 2,500" },
      { item: "Laboratory test to confirm the mold type", price: "KES 7,500 per kit" },
      { item: "Contained single-room treatment", price: "From KES 8,500 (bathroom) or KES 15,000 (bedroom)" },
      { item: "1–2 rooms where soaked boards must be removed", price: "KES 45,000 – 85,000" },
      { item: "Whole-house or structural remediation", price: "KES 120,000 – 300,000+" },
    ],
    priceNote:
      "Black mould usually means the material has been wet for a long time, so jobs more often fall into the higher brackets. Stricter containment and protective equipment add labour time. Your quote follows the inspection.",
    priceRange: { low: 8500, high: 300000 },
    sections: [
      {
        heading: "How to Recognise Black Mould",
        paragraphs: [
          "Stachybotrys is dark green to black and looks slimy when wet and sooty when it dries out. It needs constant moisture, so it appears where water has been present for weeks: under a leaking roof, behind a wall with a dripping pipe, on ceiling boards after flooding, or at the base of a wall with rising damp.",
          "It grows on materials that contain cellulose, such as gypsum board, ceiling board, wood, cardboard and wallpaper. It is uncommon on bare tiles or glass. A laboratory test is the only way to be certain of the species.",
        ],
      },
      {
        heading: "Health Risks of Black Mold Exposure",
        paragraphs: [
          "People exposed to heavy indoor mould growth report coughing, wheezing, a blocked nose, irritated eyes and skin, headaches and tiredness. The risk is higher for babies and young children, older people, anyone with asthma or allergies and anyone with a weakened immune system.",
          "If someone in the household has symptoms, see a doctor and tell them about the mould. Removing the growth deals with the source of exposure, but it does not replace medical advice.",
        ],
      },
      {
        heading: "Why You Should Not Remove Black Mould Yourself",
        paragraphs: [
          "Scrubbing or scraping dry black mould breaks it up and sends spores through the house. Bleach does not reach the roots inside ceiling board or plaster, and tearing out affected boards without containment contaminates rooms that were clean.",
          "Until the technicians arrive, keep the room closed, do not run a fan in it, do not touch or wipe the growth, and keep children and pets out.",
        ],
      },
      {
        heading: "Our Black Mold Removal Process",
        paragraphs: ["The stages are the same as standard mold removal, with tighter controls at each one."],
        bullets: [
          "Inspection and, where needed, laboratory testing to confirm the type and extent of the growth.",
          "Full containment of the work area with sealed plastic barriers.",
          "Negative air pressure and HEPA air scrubbing so spores are drawn into filters instead of the rest of the building.",
          "Technicians in protective suits, gloves and respirators.",
          "Removal and sealed disposal of porous materials that cannot be saved, followed by antimicrobial treatment of the structure.",
          "Structural drying, then verification that the area is clear before containment comes down.",
        ],
      },
      {
        heading: "Fixing the Water Problem Behind It",
        paragraphs: [
          "Black mould is a sign of long-term water damage. The roof leak, plumbing fault or rising damp that fed it has to be repaired, or new growth will follow. Our inspection report identifies that source so your plumber, roofer or contractor knows exactly what to fix.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is black mold dangerous?",
        a: "Heavy growth of black mold (Stachybotrys chartarum) can cause coughing, wheezing, irritated eyes and skin, and it is a higher risk for children, older people and anyone with asthma or a weak immune system. It should be removed by trained technicians.",
      },
      {
        q: "How do I know if the mould in my house is black mould?",
        a: "Colour alone is not proof, because several common moulds look black. A laboratory test, KES 7,500 per kit, identifies the species. Either way, the growth should be removed and the moisture source fixed.",
      },
      {
        q: "How much does black mold removal cost in Kenya?",
        a: "A contained single room starts from KES 8,500 for a bathroom or KES 15,000 for a bedroom. Jobs where soaked boards must be removed typically cost KES 45,000 – 85,000. The quote follows a KES 2,500 inspection.",
      },
      {
        q: "Can I clean black mould with bleach?",
        a: "No. Bleach does not reach the roots inside porous materials, and scrubbing spreads spores to other rooms. Keep the room closed and call a professional.",
      },
      {
        q: "Do we need to move out during black mould removal?",
        a: "For a single contained room, many households stay in the unaffected part of the home. For larger jobs across several rooms we will advise you before work begins.",
      },
    ],
  },
  {
    slug: "mold-testing",
    navLabel: "Mold Testing",
    icon: "🧪",
    title: "Mold (Mould) Testing in Nairobi, Kenya | MoldGuard",
    description:
      "Laboratory mold (mould) testing in Nairobi and across Kenya. Air and surface samples identify the type and concentration of spores. KES 7,500 per kit. Call 0710907628.",
    h1: "Mold (Mould) Testing Services in Nairobi, Kenya",
    serviceType: "Mold testing",
    updated: "2026-11-15",
    intro: [
      "Mold testing, or mould testing, takes a sample of air or of a surface and sends it to a laboratory, which reports whether mould spores are present, which types and at what concentration. MoldGuard Kenya offers it in Nairobi and across Kenya at KES 7,500 per testing kit.",
      "Testing is for the cases an ordinary inspection cannot settle: a smell with no visible source, symptoms with no visible mould, or a need for laboratory evidence.",
    ],
    priceHeading: "Mold Testing Prices",
    priceRows: [
      { item: "Mold testing kit (one air or surface sample, with laboratory analysis)", price: "KES 7,500 per kit" },
      { item: "Site inspection (moisture metering, thermal scanning, air quality check)", price: "KES 2,500" },
    ],
    priceNote:
      "One kit is one sample. The number of kits depends on how many rooms or surfaces need to be checked; the technician will recommend this after the inspection.",
    priceRange: { low: 2500, high: 7500 },
    sections: [
      {
        heading: "When Mould Testing Is Worth It",
        paragraphs: ["If you can see the mould, you usually do not need a test to know it must be removed. Testing earns its cost in these situations."],
        bullets: [
          "There is a persistent musty smell but no visible growth.",
          "Someone has allergy or asthma symptoms indoors and you want to know whether mould is involved.",
          "You suspect contamination behind walls, above ceilings or inside an air-conditioning system.",
          "You need to know whether a dark patch is black mold (Stachybotrys).",
          "You have had remediation done and want confirmation that the space is clear.",
          "You need a laboratory result for a landlord, a buyer, an employer or an insurance claim.",
        ],
      },
      {
        heading: "How Mold Testing Works",
        paragraphs: ["The process has four steps."],
        bullets: [
          "A sample is collected from the suspect air or surface using a calibrated testing cassette.",
          "The sample is sealed and sent for laboratory analysis.",
          "The results identify the presence, type and concentration of mould spores.",
          "The findings are added to your inspection report and used to plan the treatment, if any is needed.",
        ],
      },
      {
        heading: "Air Samples and Surface Samples",
        paragraphs: [
          "An air sample measures the spores floating in a room. It is the right choice when the worry is what people are breathing, or when mould is suspected but hidden.",
          "A surface sample is taken from a visible patch or a suspect material. It is the right choice when you want to know what a particular growth is, for example whether a dark stain is black mould or a harmless mark.",
        ],
      },
      {
        heading: "Understanding Your Results",
        paragraphs: [
          "Mould spores are present in all outdoor air, so a result is never simply zero. What matters is the type of mould found and whether the indoor level is unusually high, which points to growth inside the building.",
          "We explain the report in plain language: what was found, whether it indicates an active problem, where the source is likely to be and what we recommend. If the result is normal, you have that in writing.",
        ],
      },
      {
        heading: "Testing Compared With a Site Inspection",
        paragraphs: [
          "A site inspection costs KES 2,500 and uses moisture meters and thermal imaging to find damp and growth on the day. Testing costs KES 7,500 per kit and gives a laboratory identification. Most customers begin with the inspection and add testing only if the technician finds signs of hidden contamination.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does mold testing cost in Kenya?",
        a: "MoldGuard Kenya charges KES 7,500 per testing kit. Each kit is one air or surface sample and includes laboratory analysis.",
      },
      {
        q: "Do I need a test if I can already see the mould?",
        a: "Not usually. Visible mould can go straight to inspection and removal. Testing is most useful when mould is suspected but cannot be seen, or when you need to identify the species.",
      },
      {
        q: "What does a mould test tell me?",
        a: "The laboratory result shows whether mould spores are present, which types they are and how concentrated they are, which tells you whether there is active growth in the building.",
      },
      {
        q: "Can testing confirm that mould has gone after treatment?",
        a: "Yes. A test taken after remediation is a common way to confirm that the space is clear.",
      },
      {
        q: "Can I use the report for a landlord or an insurance claim?",
        a: "Yes. The inspection report and laboratory findings are written documentation of the problem. Whether a claim is accepted depends on your policy and provider.",
      },
    ],
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}
