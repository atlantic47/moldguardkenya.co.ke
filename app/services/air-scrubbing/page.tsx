import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsletterSection from "../../components/NewsletterSection";

export const metadata: Metadata = {
  title: "Air Scrubbing Services for Mold Spores & Dampness Kenya | MoldGuard",
  description: "Professional industrial air scrubbing & HEPA filtration services in Kenya. Extract airborne toxic mold spores, damp odors, and VOCs in Nairobi, Mombasa & across Kenya.",
  alternates: { canonical: "https://moldguardkenya.co.ke/services/air-scrubbing" },
  openGraph: {
    title: "Air Scrubbing Services for Mold Spores & Dampness in Kenya | MoldGuard Kenya",
    description: "Industrial-grade HEPA air scrubbing & negative pressure containment to eliminate airborne mold spores and musty damp smells across Kenya.",
    images: [{ url: "https://moldguardkenya.co.ke/air-scrubbing-services-moldguard-kenya.jpg" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org/",
  "@type": "Service",
  "name": "Air Scrubbing & Airborne Spore Extraction Services",
  "serviceType": "Industrial HEPA Air Scrubbing & Negative Air Pressure Containment",
  "provider": {
    "@type": "LocalBusiness",
    "name": "MoldGuard Kenya",
    "telephone": "+254710907628",
    "url": "https://moldguardkenya.co.ke/",
    "image": "https://moldguardkenya.co.ke/air-scrubbing-services-moldguard-kenya.jpg"
  },
  "description": "Professional multi-stage industrial HEPA air scrubbing services designed to capture 99.97% of airborne mold spores, volatile organic compounds, and musty damp odors.",
  "url": "https://moldguardkenya.co.ke/services/air-scrubbing",
  "image": "https://moldguardkenya.co.ke/air-scrubbing-services-moldguard-kenya.jpg",
  "areaServed": [
    { "@type": "Country", "name": "Kenya" },
    { "@type": "City", "name": "Nairobi" },
    { "@type": "City", "name": "Mombasa" },
    { "@type": "City", "name": "Nakuru" },
    { "@type": "City", "name": "Eldoret" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does an air scrubbing treatment take in a home in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential rooms require 24 to 72 hours of continuous air scrubbing, depending on contamination severity and room size. Larger commercial spaces or severe cases may take longer."
      }
    },
    {
      "@type": "Question",
      "name": "Will air scrubbing get rid of the musty smell permanently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Air scrubbing with activated carbon filtration significantly reduces musty odors. However, if the underlying moisture source isn't corrected, the smell can return over time, which is why we always recommend pairing air scrubbing with moisture source correction."
      }
    },
    {
      "@type": "Question",
      "name": "Is air scrubbing safe for people with allergies or asthma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Air scrubbing is often specifically recommended for households with allergy or asthma sufferers, since it actively reduces the airborne allergens and spores that trigger symptoms."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to leave my home during treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most residential air scrubbing projects, occupants can remain in unaffected parts of the home. For larger-scale remediation involving containment and chemical treatments, we'll advise you directly based on your specific situation."
      }
    },
    {
      "@type": "Question",
      "name": "Can air scrubbing prevent mold from coming back?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Air scrubbing addresses existing airborne contamination, but long-term prevention depends on fixing the root moisture problem — whether that's a leak, poor ventilation, or drainage issue."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve areas outside Nairobi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. MoldGuard Kenya serves clients across Kenya's key urban centers including Nairobi, Mombasa, Nakuru, Eldoret, and surrounding regional towns."
      }
    }
  ]
};

const faqList = [
  {
    q: "How long does an air scrubbing treatment take?",
    a: "Most residential rooms in Kenya require 24 to 72 hours of continuous air scrubbing, depending on contamination severity and room size. Larger commercial spaces or post-flood cases may take longer."
  },
  {
    q: "Will air scrubbing get rid of the musty smell permanently?",
    a: "Air scrubbing with activated carbon filtration significantly eliminates musty odors. However, if the underlying moisture source isn't corrected, the smell can return over time, which is why we pair air scrubbing with moisture source correction."
  },
  {
    q: "Is air scrubbing safe for people with allergies or asthma?",
    a: "Yes! Air scrubbing is specifically recommended for households with allergy or asthma sufferers, as it actively extracts airborne spores (0.3+ microns) and respiratory allergens from indoor air."
  },
  {
    q: "Do I need to leave my home during treatment?",
    a: "For most residential air scrubbing projects, occupants can safely remain in unaffected parts of the home. For major containment projects involving heavy chemical treatments, we will advise you in advance."
  },
  {
    q: "Can air scrubbing prevent mold from coming back?",
    a: "Air scrubbing extracts existing airborne contamination, but long-term prevention depends on fixing the root moisture problem — such as a pipe leak, inadequate ventilation, or foundation dampness."
  },
  {
    q: "Do you serve areas outside Nairobi?",
    a: "Yes. MoldGuard Kenya serves property owners across Kenya's primary centers including Nairobi, Mombasa, Kiambu, Nakuru, Eldoret, and coastal regions."
  }
];

export default function AirScrubbingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0d3c26 100%)",
          padding: "5rem 0 4rem",
          position: "relative",
          color: "white",
        }}>
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)", padding: "0.4rem 1.25rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1.25rem", color: "#38bdf8" }}>
              🌬️ Industrial Airborne Particle Extraction &amp; Spore Control
            </div>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.15, marginBottom: "1.25rem", maxWidth: "900px", margin: "0 auto 1.25rem" }}>
              Air Scrubbing Services for Mold Spores &amp; Dampness in Kenya
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", maxWidth: "750px", margin: "0 auto 2.5rem" }}>
              Capture airborne toxic mold spores, musty odors, and microscopic allergens before they compromise your health and property. MoldGuard Kenya provides high-volume multi-stage industrial HEPA air scrubbing across Nairobi, Mombasa, and Kenya.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/254710907628?text=Hi%20MoldGuard%2C%20I%20need%20details%20and%20pricing%20for%20Air%20Scrubbing%20Services." target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: "0.85rem 1.8rem", fontSize: "0.95rem" }}>
                💬 Request On-Site Assessment
              </a>
              <a href="tel:0710907628" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", padding: "0.85rem 1.8rem", fontSize: "0.95rem" }}>
                📞 Call 0710907628
              </a>
            </div>
          </div>
        </section>

        {/* FEATURED SERVICE IMAGE SECTION */}
        <section style={{ background: "var(--cream)", padding: "3rem 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "950px" }}>
            <div style={{ position: "relative", width: "100%", height: "450px", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.12)", border: "1px solid var(--border)" }}>
              <Image
                src="/air-scrubbing-services-moldguard-kenya.jpg"
                alt="Professional Industrial Air Scrubbing Services for Mold Spores and Dampness in Kenya by MoldGuard"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)", padding: "2rem 1.75rem 1.25rem", color: "white" }}>
                <p style={{ fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>
                  Industrial HEPA Air Scrubbing Unit Deployed in Nairobi Property
                </p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", margin: "0.25rem 0 0" }}>
                  Multi-stage filtration capturing 99.97% of active fungal spores and airborne dampness compounds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE GUIDE CONTENT */}
        <section style={{ background: "white", padding: "5rem 0" }}>
          <div className="container" style={{ maxWidth: "900px" }}>

            {/* INTRO */}
            <p style={{ fontSize: "1.08rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.5rem" }}>
              If you&apos;ve ever walked into a room and been hit by that unmistakable musty smell, or noticed dark patches creeping across your ceiling after the long rains, you already know that mold and dampness are more than a cosmetic nuisance in Kenya. From the humid coastal air in Mombasa to the perpetually damp basements of Nairobi&apos;s older estates, mold spores are a silent, year-round problem for homeowners, landlords, hospitals, schools, and commercial property managers.
            </p>
            <p style={{ fontSize: "1.08rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "2.5rem" }}>
              At <strong>MoldGuard Kenya</strong>, we specialize in professional <strong>Air Scrubbing Services</strong> designed to capture and eliminate airborne mold spores, toxic organic compounds, and persistent musty smells before they compromise your respiratory health and building structure.
            </p>

            {/* TOC BOX */}
            <div style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "1.75rem 2rem", marginBottom: "3.5rem" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1rem" }}>
                📋 Guide Index: Air Scrubbing in Kenya
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.5rem 1.5rem", fontSize: "0.9rem" }}>
                <a href="#why-growing-problem" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>1. Why Mold &amp; Dampness Growth Increases in Kenya</a>
                <a href="#what-is-air-scrubbing" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>2. What Is Air Scrubbing, Exactly?</a>
                <a href="#how-scrubbers-work" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>3. How Air Scrubbers Actually Work</a>
                <a href="#health-risks" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>4. Health Risks of Airborne Spores</a>
                <a href="#signs-you-need-it" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>5. Warning Signs You Need Air Scrubbing</a>
                <a href="#method-comparison" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>6. Air Scrubbing vs. Other Mold Treatments</a>
                <a href="#moldguard-process" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>7. The MoldGuard 7-Step Remediation Process</a>
                <a href="#who-needs-it" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>8. Who Needs Air Scrubbing Services in Kenya?</a>
                <a href="#pricing-factors" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>9. Factors Influencing Service Pricing</a>
                <a href="#diy-vs-pro" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>10. DIY Mold Control vs. Hiring Professionals</a>
              </div>
            </div>

            {/* SECTION 1 */}
            <div id="why-growing-problem" style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                1. Why Mold and Dampness Are a Growing Problem in Kenya
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.25rem" }}>
                Kenya&apos;s varied climate creates near-perfect breeding conditions for mold in many parts of the country. Coastal towns like Mombasa, Malindi, and Kilifi experience high humidity almost year-round, while Nairobi and the central highlands see heavy seasonal rains during the long and short rain seasons. Add to this the tightly sealed, poorly ventilated construction common in many modern apartments and offices, and you have a recipe for trapped moisture, condensation, and rapid mold growth.
              </p>
              <ul style={{ paddingLeft: "1.5rem", color: "var(--text-mid)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                <li><strong>Rapid urban construction</strong> with minimal attention to damp-proofing membranes and cross-ventilation.</li>
                <li><strong>Increased reliance on air conditioning</strong> in sealed glass buildings, which traps indoor condensation.</li>
                <li><strong>Aging plumbing and roofing</strong> in older estates (such as Kilimani, Lavington, and Parklands), leading to hidden wall leaks.</li>
                <li><strong>Poor drainage around building foundations</strong>, especially in flood-prone neighborhoods.</li>
                <li><strong>Extended rainy seasons</strong> that leave plaster walls and concrete ceilings damp for weeks at a time.</li>
              </ul>
            </div>

            {/* SECTION 2 */}
            <div id="what-is-air-scrubbing" style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                2. What Is Air Scrubbing, Exactly?
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.25rem" }}>
                Air scrubbing is a professional air purification process that uses industrial-grade negative-air equipment to filter airborne contaminants — including mold spores, dust, bacteria, and volatile organic compounds (VOCs) — out of an indoor space. Unlike a small household desktop air purifier, an industrial air scrubber is engineered for continuous high-volume filtration (500+ CFM) in contaminated or water-damaged environments.
              </p>
              <div style={{ background: "var(--cream)", borderLeft: "4px solid var(--primary)", padding: "1.25rem 1.5rem", borderRadius: "0 0.75rem 0.75rem 0", fontSize: "0.98rem", color: "var(--text-dark)", lineHeight: 1.7 }}>
                <strong>Key Application:</strong> Air scrubbing is deployed during active mold cleanup to capture disturbed spores, in water-damaged buildings to prevent spore germination, and as a preventive measure in medical or commercial spaces requiring sterile air standards.
              </div>
            </div>

            {/* SECTION 3 */}
            <div id="how-scrubbers-work" style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                3. How Air Scrubbers Actually Work
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.5rem" }}>
                A commercial air scrubber pulls contaminated indoor air through a multi-stage filtration system before exhausting pure air back into the room:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.25rem" }}>
                <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>🧪 True HEPA Filtration</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-mid)", lineHeight: 1.6, margin: 0 }}>
                    Captures 99.97% of airborne particles down to 0.3 microns, effectively locking away fungal spores (2 to 10 microns).
                  </p>
                </div>
                <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>🖤 Activated Carbon</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-mid)", lineHeight: 1.6, margin: 0 }}>
                    Absorbs gas-phase volatile organic compounds (VOCs) and eliminates the persistent musty &quot;damp smell&quot;.
                  </p>
                </div>
                <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>🌀 Negative Air Pressure</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-mid)", lineHeight: 1.6, margin: 0 }}>
                    Vents air out of containment zones to ensure disturbed mold spores cannot migrate into uninfected living areas.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 4 */}
            <div id="health-risks" style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                4. The Health Risks of Mold Spores &amp; Damp Indoor Air
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.25rem" }}>
                Microscopic mold spores float invisibly in the air, meaning occupants inhale them long before visible colony patches show up on walls. In Kenya, prolonged mold exposure is associated with:
              </p>
              <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "1rem", padding: "1.5rem", color: "#991b1b", fontSize: "0.95rem", lineHeight: 1.7 }}>
                <strong>Common Health Impacts:</strong> Persistent coughing &amp; sneezing, frequent asthma attacks, chronic sinus congestion, skin rashes, throat irritation, and unexplained fatigue. Children and elderly residents are particularly vulnerable.
              </div>
            </div>

            {/* SECTION 5 */}
            <div id="signs-you-need-it" style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                5. Warning Signs Your Property Needs Air Scrubbing
              </h2>
              <ul style={{ paddingLeft: "1.5rem", color: "var(--text-mid)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                <li>A persistent musty or earthy smell in bedrooms, basements, or closets.</li>
                <li>Visible dark discoloration on walls, ceilings, window frames, or tile grout.</li>
                <li>Peeling paint or bubbling wallpaper caused by trapped wall moisture.</li>
                <li>Heavy morning window condensation during rainy months.</li>
                <li>Unexplained respiratory irritation that subsides when you leave the building.</li>
              </ul>
            </div>

            {/* SECTION 6: COMPARISON TABLE */}
            <div id="method-comparison" style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                6. Air Scrubbing vs. Other Mold Treatment Methods
              </h2>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                  <thead>
                    <tr style={{ background: "var(--primary-dark)", color: "white", textAlign: "left" }}>
                      <th style={{ padding: "0.85rem 1rem" }}>Treatment Method</th>
                      <th style={{ padding: "0.85rem 1rem" }}>What It Does</th>
                      <th style={{ padding: "0.85rem 1rem" }}>Key Limitations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--border)", background: "white" }}>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700 }}>Bleach / Surface Spray</td>
                      <td style={{ padding: "0.85rem 1rem" }}>Kills surface mold on non-porous tile</td>
                      <td style={{ padding: "0.85rem 1rem", color: "#b91c1c" }}>Does not filter airborne spores or deep root hyphae</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--cream)" }}>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700 }}>Chemical Fogging</td>
                      <td style={{ padding: "0.85rem 1rem" }}>Disperses chemical droplets in air</td>
                      <td style={{ padding: "0.85rem 1rem", color: "#b91c1c" }}>Chemical residue risks; cannot filter airborne dust/spores</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border)", background: "white" }}>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700 }}>Standalone Dehumidifier</td>
                      <td style={{ padding: "0.85rem 1rem" }}>Extracts moisture from ambient air</td>
                      <td style={{ padding: "0.85rem 1rem" }}>Slow; does not filter existing active floating spores</td>
                    </tr>
                    <tr style={{ background: "#ecfdf5" }}>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 800, color: "#047857" }}>Industrial Air Scrubbing</td>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 600 }}>Actively filters 99.97% of airborne spores &amp; odors</td>
                      <td style={{ padding: "0.85rem 1rem", color: "#047857" }}>Most effective when paired with fixing moisture source</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* SECTION 7: PROCESS */}
            <div id="moldguard-process" style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                7. The MoldGuard Kenya 7-Step Remediation Process
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ background: "var(--cream)", borderRadius: "1rem", padding: "1.25rem 1.5rem", border: "1px solid var(--border)" }}>
                  <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", margin: "0 0 0.4rem" }}>Step 1: Inspection &amp; Thermal Moisture Mapping</h4>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-mid)", margin: 0 }}>We trace hidden wall leaks and moisture reservoirs using thermal cameras and meters.</p>
                </div>
                <div style={{ background: "var(--cream)", borderRadius: "1rem", padding: "1.25rem 1.5rem", border: "1px solid var(--border)" }}>
                  <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", margin: "0 0 0.4rem" }}>Step 2: Air Quality Assessment</h4>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-mid)", margin: 0 }}>We evaluate airborne spore concentration levels and ventilation flow.</p>
                </div>
                <div style={{ background: "var(--cream)", borderRadius: "1rem", padding: "1.25rem 1.5rem", border: "1px solid var(--border)" }}>
                  <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", margin: "0 0 0.4rem" }}>Step 3: Containment &amp; Negative Pressure Setup</h4>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-mid)", margin: 0 }}>Plastic sheeting isolates the treatment zone to stop spore drift.</p>
                </div>
                <div style={{ background: "var(--cream)", borderRadius: "1rem", padding: "1.25rem 1.5rem", border: "1px solid var(--border)" }}>
                  <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", margin: "0 0 0.4rem" }}>Step 4: Air Scrubbing Deployment</h4>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-mid)", margin: 0 }}>High-volume HEPA units clean room air 6+ times per hour for 24-72 hours.</p>
                </div>
                <div style={{ background: "var(--cream)", borderRadius: "1rem", padding: "1.25rem 1.5rem", border: "1px solid var(--border)" }}>
                  <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", margin: "0 0 0.4rem" }}>Step 5: Surface Remediation &amp; Fungicidal Extraction</h4>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-mid)", margin: 0 }}>Colonies on masonry and plaster are treated with professional mold removers.</p>
                </div>
                <div style={{ background: "var(--cream)", borderRadius: "1rem", padding: "1.25rem 1.5rem", border: "1px solid var(--border)" }}>
                  <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", margin: "0 0 0.4rem" }}>Step 6: Root Moisture Correction Plan</h4>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-mid)", margin: 0 }}>We provide recommendations on fixing leaks, drainage, or adding dehumidification.</p>
                </div>
                <div style={{ background: "var(--cream)", borderRadius: "1rem", padding: "1.25rem 1.5rem", border: "1px solid var(--border)" }}>
                  <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", margin: "0 0 0.4rem" }}>Step 7: Post-Treatment Verification</h4>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-mid)", margin: 0 }}>Final air checks verify spore counts have returned to normal ambient levels.</p>
                </div>
              </div>
            </div>

            {/* SECTION 12: FAQS */}
            <div style={{ marginBottom: "4rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
                Frequently Asked Questions About Air Scrubbing Services in Kenya
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {faqList.map((item, idx) => (
                  <div key={idx} style={{ background: "var(--cream)", borderRadius: "1rem", padding: "1.5rem", border: "1px solid var(--border)" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem", marginTop: 0 }}>
                      ❓ {item.q}
                    </h3>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-mid)", margin: 0 }}>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FINAL CTA BANNER */}
            <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0d3c26 100%)", borderRadius: "1.5rem", padding: "3rem 2rem", color: "white", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "0.75rem" }}>
                Get a Free Mold &amp; Air Quality Assessment Today
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "650px", margin: "0 auto 2rem" }}>
                Mold and dampness don&apos;t resolve themselves. Don&apos;t let airborne spores spread through your building. Speak with MoldGuard Kenya&apos;s certified environmental technicians.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://wa.me/254710907628?text=Hi%20MoldGuard%2C%20I%20would%20like%20a%20free%20Air%20Quality%20and%20Air%20Scrubbing%20assessment." target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: "0.85rem 1.8rem", fontSize: "1rem" }}>
                  💬 Book Free Assessment on WhatsApp
                </a>
                <Link href="/shop/air-purifiers" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", padding: "0.85rem 1.8rem", fontSize: "1rem" }}>
                  Explore Air Purifiers Shop →
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}
