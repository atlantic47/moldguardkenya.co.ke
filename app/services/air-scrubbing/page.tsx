import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsletterSection from "../../components/NewsletterSection";

export const metadata: Metadata = {
  title: "Air Scrubbing Services for Mold Spores & Dampness Kenya | MoldGuard",
  description: "Professional industrial air scrubbing and HEPA filtration services in Kenya. Capture airborne toxic mold spores, microscopic dust, and musty damp odors from residential and commercial buildings.",
  alternates: { canonical: "https://moldguardkenya.co.ke/services/air-scrubbing" },
};

const serviceSchema = {
  "@context": "https://schema.org/",
  "@type": "Service",
  "name": "Air Scrubbing & Spore Extraction Services",
  "serviceType": "Industrial HEPA Air Filtration & Spore Control",
  "provider": {
    "@type": "LocalBusiness",
    "name": "MoldGuard Kenya",
    "telephone": "+254710907628",
    "url": "https://moldguardkenya.co.ke/",
    "image": "https://moldguardkenya.co.ke/icon"
  },
  "description": "Continuous multi-stage HEPA air scrubbing to extract toxic mold spores, musty odors, and airborne particles during and after dampness remediation.",
  "url": "https://moldguardkenya.co.ke/services/air-scrubbing",
  "areaServed": [
    { "@type": "Country", "name": "Kenya" },
    { "@type": "City", "name": "Nairobi" },
    { "@type": "City", "name": "Mombasa" }
  ]
};

const faqList = [
  {
    q: "What is an air scrubber and how does it work?",
    a: "An air scrubber is a portable filtration system that draws in large volumes of indoor air, passes it through a series of filters—including a pre-filter and a certified True HEPA filter—and expels clean air. It continuously circulates and cleans the air in a sealed containment zone, removing floating particles down to 0.3 microns."
  },
  {
    q: "Why is air scrubbing necessary during mold remediation?",
    a: "When mold colonies are physically agitated or treated, they release millions of toxic spores into the air as a survival mechanism. Without industrial air scrubbers, these spores drift into adjacent rooms, colonizing new walls and wardrobes or entering the lungs of occupants. Scrubbing creates negative pressure to keep spores contained and captured."
  },
  {
    q: "How long does the air scrubbing process take?",
    a: "For standard residential rooms in Nairobi or Mombasa, we run air scrubbers continuously for 24 to 48 hours during and immediately after the physical mold removal process to guarantee that all disturbed airborne spores are completely filtered out."
  },
  {
    q: "Does air scrubbing eliminate musty damp odors?",
    a: "Yes. Our industrial air scrubbers are equipped with thick activated carbon filters specifically designed to absorb gas-phase molecules, volatile organic compounds (VOCs), and the musty microbial odors associated with dampness and toxic mold."
  }
];

export default function AirScrubbingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #334155 100%)",
          padding: "5rem 0 4rem",
          position: "relative",
          color: "white",
        }}>
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)", padding: "0.4rem 1.25rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1.25rem", color: "#38bdf8" }}>
              🌬️ Industrial Airborne Particle Extraction
            </div>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.15, marginBottom: "1.25rem", maxWidth: "850px", margin: "0 auto 1.25rem" }}>
              Air Scrubbing Services for Mold Spores &amp; Dampness in Kenya
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", maxWidth: "700px", margin: "0 auto 2.5rem" }}>
              Extract microscopic airborne spores, damp odors, and toxic volatile compounds during mold remediation. We employ professional high-volume HEPA scrubbers to cleanse indoor air.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                🔬 99.97% Spore Capture Rate
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                💨 500+ CFM Industrial Units
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                🛑 Negative Air Pressure Containment
              </div>
            </div>
          </div>
        </section>

        {/* CORE INFORMATION SECTION */}
        <section style={{ background: "white", padding: "5rem 0" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              Why Air Scrubbing is Critical for Safe Mold Remediation
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.5rem" }}>
              Physical scraping and cleaning of moldy plaster, gypsum ceilings, or concrete walls releases millions of active mold spores (*Stachybotrys*, *Aspergillus*) into the indoor air. Because these spores are microscopic (often between 1 and 20 microns), they remain suspended in the air for hours or days, easily spreading to unaffected areas of the building or penetrating deep into the lungs of residents, triggering severe respiratory issues and allergies.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "2.5rem" }}>
              Our professional **Air Scrubbing Service** uses industrial negative-air machines fitted with certified multi-stage HEPA filters and activated carbon. These units recirculate and wash the room&apos;s air up to 6 times per hour, trapping floating spores, dust, and odor molecules, preventing cross-contamination, and guaranteeing that your home is safe to re-occupy.
            </p>

            {/* PROCESS CARDS */}
            <div style={{ background: "var(--cream)", borderRadius: "1.25rem", padding: "2rem", border: "1px solid var(--border)", marginBottom: "3.5rem" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                🛠️ Our 3-Stage Air Scrubbing &amp; Spore Containment Process
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
                <div style={{ background: "white", padding: "1.5rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🛡️</div>
                  <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>1. Plastic Containment</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.6, margin: 0 }}>
                    We seal off the affected room using heavy-duty plastic sheeting and zip doors to keep airborne spores from escaping to dry areas of the house.
                  </p>
                </div>
                <div style={{ background: "white", padding: "1.5rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🌀</div>
                  <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>2. Negative Pressure</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.6, margin: 0 }}>
                    By venting clean exhaust air out of the room, we create negative pressure. Air only flows into the room, never out, keeping spores trapped.
                  </p>
                </div>
                <div style={{ background: "white", padding: "1.5rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🧼</div>
                  <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>3. Multi-Stage Scrubbing</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.6, margin: 0 }}>
                    Air is forced through a pre-filter, activated carbon, and finally a HEPA filter, removing 99.97% of mold spores and neutralizing musty odors.
                  </p>
                </div>
              </div>
            </div>

            {/* TECHNICAL MATRIX */}
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
              Industrial Air Scrubber Equipment Specifications
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-mid)", marginBottom: "1.5rem" }}>
              To guarantee thorough clean air cycles, we deploy professional-grade restoration machines suited to the specific cubic volume of your property:
            </p>
            <div style={{ overflowX: "auto", marginBottom: "3rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border)", textAlign: "left" }}>
                    <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Equipment Class</th>
                    <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Airflow Capacity (CFM)</th>
                    <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Filtration Type</th>
                    <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Ideal Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "0.75rem", fontWeight: 700 }}>DefendAir HEPA 500</td>
                    <td style={{ padding: "0.75rem" }}>250 – 500 CFM</td>
                    <td style={{ padding: "0.75rem" }}>Stage-1 Pre, HEPA, Carbon</td>
                    <td style={{ padding: "0.75rem" }}>Residential bedrooms &amp; kitchens</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "0.75rem", fontWeight: 700 }}>Phoenix Guardian HEPA</td>
                    <td style={{ padding: "0.75rem" }}>500 – 900 CFM</td>
                    <td style={{ padding: "0.75rem" }}>Stage-1 Pre, Stage-2 Pleated, HEPA</td>
                    <td style={{ padding: "0.75rem" }}>Open-plan living areas, small offices</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "0.75rem", fontWeight: 700 }}>Commercial Air Star 2000</td>
                    <td style={{ padding: "0.75rem" }}>1000 – 2000 CFM</td>
                    <td style={{ padding: "0.75rem" }}>Heavy-Duty Multi-Stage HEPA</td>
                    <td style={{ padding: "0.75rem" }}>Warehouses, commercial schools, flooded basements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* FAQS */}
            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              Frequently Asked Questions About Air Scrubbing Services
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3.5rem" }}>
              {faqList.map((item, idx) => (
                <div key={idx} style={{ background: "var(--cream)", borderRadius: "1rem", padding: "1.5rem", border: "1px solid var(--border)" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>
                    ❓ {item.q}
                  </h4>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-mid)", margin: 0 }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA SECTION */}
            <div style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)", borderRadius: "1.5rem", padding: "2.5rem", color: "white", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Do You Smell a Musty Damp Odor in Your Building?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Musty smells indicate active fungal off-gassing and airborne spores. Get a professional air quality assessment and spore containment estimate today.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://wa.me/254710907628?text=Hi%20MoldGuard%2C%20I%20need%20details%20and%20pricing%20for%20air%20scrubbing%20services." target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: "0.75rem 1.5rem" }}>
                  💬 WhatsApp Air Specialist
                </a>
                <Link href="/services" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", padding: "0.75rem 1.5rem" }}>
                  All Services Overview →
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
