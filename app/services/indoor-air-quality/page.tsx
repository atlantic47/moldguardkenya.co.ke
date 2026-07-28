import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsletterSection from "../../components/NewsletterSection";

export const metadata: Metadata = {
  title: "Indoor Air Quality (IAQ) Testing & Improvement Kenya | MoldGuard",
  description: "Professional indoor air quality testing, monitoring, and improvement services in Kenya. Detect and eliminate toxic mold, dust mite allergens, PM2.5, and harmful chemical vapors in homes and offices.",
  alternates: { canonical: "https://moldguardkenya.co.ke/services/indoor-air-quality" },
};

const serviceSchema = {
  "@context": "https://schema.org/",
  "@type": "Service",
  "name": "Indoor Air Quality (IAQ) Improvement Services",
  "serviceType": "Air Quality Assessment & Environmental Engineering",
  "provider": {
    "@type": "LocalBusiness",
    "name": "MoldGuard Kenya",
    "telephone": "+254710907628",
    "url": "https://moldguardkenya.co.ke/",
    "image": "https://moldguardkenya.co.ke/icon"
  },
  "description": "Professional indoor air quality testing, moisture tracking, spore trap analysis, and system filtration audits to establish healthy, allergen-free indoor spaces.",
  "url": "https://moldguardkenya.co.ke/services/indoor-air-quality",
  "areaServed": [
    { "@type": "Country", "name": "Kenya" },
    { "@type": "City", "name": "Nairobi" },
    { "@type": "City", "name": "Mombasa" }
  ]
};

const faqList = [
  {
    q: "What symptoms suggest poor indoor air quality in a home?",
    a: "Common indicators include chronic morning sneezing, dry coughs, throat irritation, nasal congestion, headaches, or asthma attacks that occur primarily when inside the building. Persistent musty smells, visible mold patches, and heavy window condensation are strong environmental signs."
  },
  {
    q: "How do you test and measure indoor air quality?",
    a: "We deploy calibrated environmental sensors to monitor key parameters in real-time, including relative humidity (RH), particulate matter (PM2.5 and PM10), carbon dioxide (CO2), and volatile organic compounds (VOCs). If toxic mold is suspected, we collect bioaerosol air samples (spore traps) for certified laboratory analysis."
  },
  {
    q: "How does MoldGuard improve air quality in commercial office buildings in Nairobi?",
    a: "We perform full HVAC audits, analyze mechanical ventilation rates, introduce targeted HEPA filtration systems, and implement high-capacity dehumidifiers to maintain relative humidity between 40% and 50%—permanently suppressing dust mites and mold growth."
  },
  {
    q: "Can poor indoor air quality cause long-term health issues?",
    a: "Yes. Prolonged exposure to toxic mold spores (like Stachybotrys chartarum) and elevated PM2.5 levels can lead to chronic respiratory illnesses, sinus infections, weakened immune systems, and severe allergic sensitization, particularly in children and the elderly."
  }
];

export default function IndoorAirQualityPage() {
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
          background: "linear-gradient(135deg, #064e3b 0%, #065f46 60%, #0f766e 100%)",
          padding: "5rem 0 4rem",
          position: "relative",
          color: "white",
        }}>
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)", padding: "0.4rem 1.25rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1.25rem", color: "#34d399" }}>
              🌱 Professional Environmental Testing &amp; Filtration
            </div>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.15, marginBottom: "1.25rem", maxWidth: "850px", margin: "0 auto 1.25rem" }}>
              Indoor Air Quality Assessment &amp; Improvement in Kenya
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", maxWidth: "700px", margin: "0 auto 2.5rem" }}>
              Breathe pure, healthy air. We conduct diagnostic testing for mold spores, toxic chemical vapors, dust mites, and humidity imbalances, and deliver engineering solutions to improve indoor spaces.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                📊 Real-Time Diagnostic Monitoring
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                🔬 Lab-Certified Spore Trap Analysis
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                🏢 Commercial &amp; Residential IAQ Solutions
              </div>
            </div>
          </div>
        </section>

        {/* INFORMATION BODY */}
        <section style={{ background: "white", padding: "5rem 0" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              Why Indoor Air Quality (IAQ) is Crucial for Health &amp; Productivity
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.5rem" }}>
              According to the World Health Organization, we spend up to 90% of our lives indoors. Yet, indoor air can be 2 to 5 times more polluted than outdoor air. In Kenyan cities like Nairobi and Mombasa, closed windows, dusty urban streets, and high rainfall humidity trap harmful pollutants inside apartments and offices.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "2.5rem" }}>
              Elevated relative humidity allows mold colonies and dust mites to thrive, releasing highly allergenic particulate matter. In addition, volatile organic compounds (VOCs) from synthetic paints, office furniture, and cleaning products can accumulate. Our comprehensive IAQ assessment analyzes all environmental variables to deliver a custom action plan.
            </p>

            {/* THREE COLUMNS OF ACTIONS */}
            <div style={{ background: "var(--cream)", borderRadius: "1.25rem", padding: "2rem", border: "1px solid var(--border)", marginBottom: "3.5rem" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                🛠️ Our Comprehensive Diagnostic &amp; Mitigation Solutions
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
                <div style={{ background: "white", padding: "1.5rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🔬</div>
                  <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>1. Air Quality Testing</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.6, margin: 0 }}>
                    We collect airborne particulate samples and spore trap cassettes to identify the exact count and genus of toxic mold species present in your air.
                  </p>
                </div>
                <div style={{ background: "white", padding: "1.5rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>💧</div>
                  <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>2. Humidity Tuning</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.6, margin: 0 }}>
                    We size and install professional commercial and residential dehumidification systems to dynamically keep relative humidity at a healthy 45% level.
                  </p>
                </div>
                <div style={{ background: "white", padding: "1.5rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🌬️</div>
                  <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>3. Active Air Filtration</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.6, margin: 0 }}>
                    We implement high-efficiency smart True HEPA filtration and air purifiers, custom selected for the clean air exchange demands of your rooms.
                  </p>
                </div>
              </div>
            </div>

            {/* AIR QUALITY METRICS TABLE */}
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
              Standard Healthy Indoor Air Benchmarks
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-mid)", marginBottom: "1.5rem" }}>
              We test your building air quality against international engineering and health standards (such as ASHRAE and WHO):
            </p>
            <div style={{ overflowX: "auto", marginBottom: "3rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border)", textAlign: "left" }}>
                    <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Parameter</th>
                    <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Healthy Threshold</th>
                    <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Potential Threat</th>
                    <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Associated Health Risk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "0.75rem", fontWeight: 700 }}>Relative Humidity (RH)</td>
                    <td style={{ padding: "0.75rem" }}>40% – 50%</td>
                    <td style={{ padding: "0.75rem" }}>&gt; 60%</td>
                    <td style={{ padding: "0.75rem" }}>Mold growth, dust mite proliferation</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "0.75rem", fontWeight: 700 }}>Particulate Matter (PM2.5)</td>
                    <td style={{ padding: "0.75rem" }}>&lt; 15 µg/m³</td>
                    <td style={{ padding: "0.75rem" }}>&gt; 35 µg/m³</td>
                    <td style={{ padding: "0.75rem" }}>Asthma, lung irritation, allergic attacks</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "0.75rem", fontWeight: 700 }}>Carbon Dioxide (CO2)</td>
                    <td style={{ padding: "0.75rem" }}>&lt; 800 ppm</td>
                    <td style={{ padding: "0.75rem" }}>&gt; 1200 ppm</td>
                    <td style={{ padding: "0.75rem" }}>Headaches, drowsiness, cognitive decline</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "0.75rem", fontWeight: 700 }}>Total VOCs</td>
                    <td style={{ padding: "0.75rem" }}>&lt; 300 µg/m³</td>
                    <td style={{ padding: "0.75rem" }}>&gt; 1000 µg/m³</td>
                    <td style={{ padding: "0.75rem" }}>Dizziness, chemical sensitivity, dry throat</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* FAQS */}
            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              Frequently Asked Questions About Indoor Air Quality Improvement
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
            <div style={{ background: "linear-gradient(135deg, #064e3b 0%, #0f766e 100%)", borderRadius: "1.5rem", padding: "2.5rem", color: "white", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Request an Indoor Air Quality Audit for Your Space
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Ensure your family, staff, or tenants are breathing safe, allergen-free air. Speak with our certified air quality technicians to book an audit.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://wa.me/254710907628?text=Hi%20MoldGuard%2C%20I%20would%20like%20to%20book%20an%20indoor%20air%20quality%20audit." target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: "0.75rem 1.5rem" }}>
                  💬 Book an Air Quality Audit
                </a>
                <Link href="/services/air-scrubbing" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", padding: "0.75rem 1.5rem" }}>
                  Air Scrubbing Services →
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
