import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsletterSection from "../../components/NewsletterSection";

export const metadata: Metadata = {
  title: "Indoor Air Quality (IAQ) Testing & Improvement Kenya | MoldGuard",
  description: "Professional indoor air quality testing, monitoring, and improvement services in Kenya. Detect and eliminate toxic mold, dust mite allergens, PM2.5, and chemical vapors.",
  alternates: { canonical: "https://moldguardkenya.co.ke/services/indoor-air-quality" },
  openGraph: {
    title: "Indoor Air Quality (IAQ) Testing & Improvement Kenya | MoldGuard",
    description: "Professional environmental diagnostic testing, spore sampling, and HEPA air quality improvement for homes, offices, schools & medical facilities in Kenya.",
    images: [
      { url: "https://moldguardkenya.co.ke/Indoor-Air-Quality-mold-guard-kenya.webp" },
      { url: "https://moldguardkenya.co.ke/air-scrubbing-services-moldguard-kenya.jpg" }
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org/",
  "@type": "Service",
  "name": "Indoor Air Quality (IAQ) Assessment & Improvement Services",
  "serviceType": "Environmental Air Quality Audit, Spore Sampling & IAQ Engineering",
  "provider": {
    "@type": "LocalBusiness",
    "name": "MoldGuard Kenya",
    "telephone": "+254710907628",
    "url": "https://moldguardkenya.co.ke/",
    "image": "https://moldguardkenya.co.ke/Indoor-Air-Quality-mold-guard-kenya.webp"
  },
  "description": "Comprehensive indoor air quality testing, bioaerosol spore trap sampling, humidity control, and multi-stage HEPA filtration to eliminate airborne mold, dust mites, and chemical VOCs.",
  "url": "https://moldguardkenya.co.ke/services/indoor-air-quality",
  "image": "https://moldguardkenya.co.ke/Indoor-Air-Quality-mold-guard-kenya.webp",
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
      "name": "How long does an indoor air quality assessment take in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential assessments take between 1 and 3 hours, depending on property size and areas tested. Larger commercial buildings or office parks may require a full-day audit."
      }
    },
    {
      "@type": "Question",
      "name": "Can I improve indoor air quality without professional help?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simple steps like regular ventilation, controlling humidity, and using quality air purifiers help. However, identifying hidden wall mold, VOC off-gassing, or ductwork contamination requires calibrated testing equipment."
      }
    },
    {
      "@type": "Question",
      "name": "Is indoor air quality testing useful if I don't see any visible mold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many indoor air quality hazards — including elevated VOCs, hidden cavity mold behind plasterboard, and inadequate ventilation — produce no visible signs at all."
      }
    },
    {
      "@type": "Question",
      "name": "What is a healthy humidity level for indoor spaces in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generally, indoor relative humidity (RH) between 30% and 50% is considered healthy. Levels above 60%, common during Kenya's rainy seasons or in coastal towns like Mombasa, significantly increase mold and dust mite risks."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide services outside Nairobi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. MoldGuard Kenya serves clients across Kenya's primary centers including Nairobi, Mombasa, Kiambu, Nakuru, Eldoret, and surrounding regional towns."
      }
    },
    {
      "@type": "Question",
      "name": "Will an IAQ assessment tell me what is causing my symptoms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An assessment identifies measurable air quality pollutants (spore counts, RH%, PM2.5, VOCs) in your building, providing you and your doctor valuable environmental context."
      }
    }
  ]
};

const faqList = [
  {
    q: "How long does an indoor air quality assessment take?",
    a: "Most residential assessments take between 1 and 3 hours, depending on property size and areas tested. Larger commercial buildings or office parks may require a full-day audit."
  },
  {
    q: "Can I improve indoor air quality without professional help?",
    a: "Simple steps like regular cross-ventilation and using quality HEPA air purifiers help. However, identifying hidden cavity mold, VOC off-gassing, or HVAC contamination requires calibrated diagnostic equipment."
  },
  {
    q: "Is indoor air quality testing useful if I don't see any visible mold?",
    a: "Yes! Many air quality hazards — such as volatile organic chemicals (VOCs), microscopic mold spores floating from ceiling voids, and inadequate air changes per hour — produce zero visible signs."
  },
  {
    q: "What is a healthy humidity level for indoor spaces in Kenya?",
    a: "Indoor relative humidity (RH) between 30% and 50% is ideal. Levels above 60%, common during Kenya's rainy seasons or in coastal towns like Mombasa, trigger rapid fungal spore germination."
  },
  {
    q: "Do you provide services outside Nairobi?",
    a: "Yes. MoldGuard Kenya serves property owners across Kenya's primary centers including Nairobi, Mombasa, Kiambu, Nakuru, Eldoret, and surrounding coastal & central regions."
  },
  {
    q: "Will an IAQ assessment tell me what is causing my symptoms?",
    a: "An assessment identifies measurable air quality pollutants in your space (spore density, humidity %, PM2.5, VOC levels), providing actionable environmental data for you and your physician."
  }
];

export default function IndoorAirQualityPage() {
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
          background: "linear-gradient(135deg, #064e3b 0%, #065f46 60%, #0f766e 100%)",
          padding: "5rem 0 4rem",
          position: "relative",
          color: "white",
        }}>
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)", padding: "0.4rem 1.25rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1.25rem", color: "#34d399" }}>
              🌱 Professional Environmental Testing &amp; Filtration
            </div>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.15, marginBottom: "1.25rem", maxWidth: "900px", margin: "0 auto 1.25rem" }}>
              Indoor Air Quality (IAQ) Assessment &amp; Improvement in Kenya
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.85)", maxWidth: "750px", margin: "0 auto 2.5rem" }}>
              Breathe pure, healthy air. We conduct scientific diagnostic audits for toxic mold spores, chemical VOCs, particulate dust, and humidity imbalances across Nairobi, Mombasa, and Kenya.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/254710907628?text=Hi%20MoldGuard%2C%20I%20would%20like%20to%20book%20an%20Indoor%20Air%20Quality%20audit." target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: "0.85rem 1.8rem", fontSize: "0.95rem" }}>
                💬 Book Air Quality Audit
              </a>
              <a href="tel:0710907628" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", padding: "0.85rem 1.8rem", fontSize: "0.95rem" }}>
                📞 Call 0710907628
              </a>
            </div>
          </div>
        </section>

        {/* HERO FEATURED IMAGE 1 */}
        <section style={{ background: "var(--cream)", padding: "3rem 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "950px" }}>
            <div style={{ position: "relative", width: "100%", height: "460px", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.12)", border: "1px solid var(--border)" }}>
              <Image
                src="/Indoor-Air-Quality-mold-guard-kenya.webp"
                alt="Indoor Air Quality Assessment and Testing Service in Kenya by MoldGuard"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)", padding: "2rem 1.75rem 1.25rem", color: "white" }}>
                <p style={{ fontWeight: 800, fontSize: "1.15rem", margin: 0 }}>
                  Scientific Indoor Air Quality Assessment &amp; Moisture Testing
                </p>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.85)", margin: "0.25rem 0 0" }}>
                  Measuring airborne particulates (PM2.5), relative humidity, spore trap density, and chemical VOCs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE IAQ GUIDE CONTENT */}
        <section style={{ background: "white", padding: "5rem 0" }}>
          <div className="container" style={{ maxWidth: "900px" }}>

            {/* INTRO */}
            <p style={{ fontSize: "1.08rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.5rem" }}>
              Most of us assume that once we are indoors, we are safe from the dust, pollution, and allergens of the outside world. In reality, the air inside Kenyan homes, offices, schools, and hospitals is often more contaminated than the air outside — sometimes by a significant margin. Trapped humidity, mold spores, dust mites, cooking fumes, poor ventilation, and chemical off-gassing from furniture and paint all combine to create indoor environments that quietly affect health, comfort, and productivity.
            </p>
            <p style={{ fontSize: "1.08rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "2.5rem" }}>
              At <strong>MoldGuard Kenya</strong>, indoor air quality (IAQ) assessment and improvement is at the core of what we do. This guide explains what indoor air quality really means, why it matters in the Kenyan climate, how professional assessments work, and how we make your indoor air healthier to breathe.
            </p>

            {/* TOC BOX */}
            <div style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "1.75rem 2rem", marginBottom: "3.5rem" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1rem" }}>
                📋 Guide Index: Indoor Air Quality in Kenya
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.5rem 1.5rem", fontSize: "0.9rem" }}>
                <a href="#iaq-definition" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>1. What Is IAQ and Why Does It Matter?</a>
                <a href="#growing-concern-kenya" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>2. Why IAQ Is a Growing Concern in Kenya</a>
                <a href="#common-pollutants" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>3. Common Indoor Air Pollutants</a>
                <a href="#health-effects" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>4. Health Effects of Poor Indoor Air</a>
                <a href="#warning-signs" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>5. Signs Your Indoor Air Needs Attention</a>
                <a href="#assessment-process" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>6. What Happens During an IAQ Assessment</a>
                <a href="#how-moldguard-tests" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>7. How MoldGuard Kenya Tests &amp; Measures</a>
                <a href="#benchmarks-table" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>8. Standard Healthy Air Benchmarks</a>
                <a href="#proven-ways-to-improve" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>9. Proven Ways to Improve Indoor Air</a>
                <a href="#different-settings" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>10. IAQ in Homes, Offices &amp; Medical Facilities</a>
                <a href="#iaq-vs-cleaning" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>11. IAQ Assessment vs. General Cleaning</a>
                <a href="#faq-section" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>12. Frequently Asked Questions</a>
              </div>
            </div>

            {/* SECTION 1 */}
            <div id="iaq-definition" style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                1. What Is Indoor Air Quality and Why Does It Matter?
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.25rem" }}>
                Indoor air quality refers to the condition of the air within and around buildings, particularly as it relates to the health and comfort of the occupants. It is determined by a combination of factors: relative humidity levels, ventilation rates, airborne particulate matter (PM2.5/PM10), fungal mold spores, chemical VOCs, and carbon dioxide concentrations.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)" }}>
                Because most people spend up to 90% of their time indoors — at home, at work, or in school — the quality of indoor air has a far greater cumulative impact on health than outdoor smog. Enclosed rooms trap pollutants, allowing concentrations to build up over time.
              </p>
            </div>

            {/* SECTION 2 */}
            <div id="growing-concern-kenya" style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                2. Why Indoor Air Quality Is a Growing Concern in Kenya
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.25rem" }}>
                Several trends specific to Kenya&apos;s built environment and climate make indoor air quality an urgent priority:
              </p>
              <ul style={{ paddingLeft: "1.5rem", color: "var(--text-mid)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                <li><strong>Sealed, modern construction:</strong> Newer high-rises in Kilimani, Westlands, and Upper Hill use sealed glass facades and air conditioning, restricting fresh air intake.</li>
                <li><strong>High coastal humidity:</strong> Towns like Mombasa, Malindi, and Diani experience high humidity year-round, fueling mold and dust mite breeding.</li>
                <li><strong>Seasonal rainfall:</strong> Rains in Nairobi and central Kenya cause severe wall dampness and window condensation.</li>
                <li><strong>Urban traffic emissions:</strong> Vehicles along major highways (e.g., Mombasa Road, Thika Superhighway) infiltrate unsealed windows.</li>
                <li><strong>Synthetic building materials:</strong> Modern paints, laminates, and adhesives off-gas VOCs for months after building completion.</li>
              </ul>
            </div>

            {/* SECTION 3: POLLUTANTS WITH SECOND IMAGE */}
            <div id="common-pollutants" style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                3. Common Indoor Air Pollutants Found in Kenyan Buildings
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
                <div style={{ background: "var(--cream)", padding: "1.5rem", borderRadius: "1rem", border: "1px solid var(--border)" }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>🦠 Biological Contaminants</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-mid)", lineHeight: 1.6, margin: 0 }}>
                    Mold spores, dust mites, bacteria, and pollen trapped indoors.
                  </p>
                </div>
                <div style={{ background: "var(--cream)", padding: "1.5rem", borderRadius: "1rem", border: "1px solid var(--border)" }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>💨 Particulate Matter</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-mid)", lineHeight: 1.6, margin: 0 }}>
                    Fine inhalable dust particles (PM2.5 &amp; PM10), soot, and textile fibers.
                  </p>
                </div>
                <div style={{ background: "var(--cream)", padding: "1.5rem", borderRadius: "1rem", border: "1px solid var(--border)" }}>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>🧪 Chemical VOCs</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-mid)", lineHeight: 1.6, margin: 0 }}>
                    Formaldehyde, paint solvents, adhesives, and synthetic cleaning chemical vapors.
                  </p>
                </div>
              </div>

              {/* SECOND IMAGE EMBED */}
              <div style={{ position: "relative", width: "100%", height: "380px", borderRadius: "1.25rem", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", marginBottom: "1.5rem" }}>
                <Image
                  src="/air-scrubbing-services-moldguard-kenya.jpg"
                  alt="Industrial HEPA Air Filtration and Air Scrubbing for Indoor Air Quality Improvement in Kenya"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.75)", padding: "1rem 1.5rem", color: "white" }}>
                  <p style={{ fontSize: "0.88rem", fontWeight: 700, margin: 0 }}>
                    Industrial HEPA Filtration Units Deployed to Capture Airborne Particulates &amp; Spores
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 8: BENCHMARKS TABLE */}
            <div id="benchmarks-table" style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                8. Standard Healthy Indoor Air Quality Benchmarks
              </h2>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                  <thead>
                    <tr style={{ background: "var(--primary-dark)", color: "white", textAlign: "left" }}>
                      <th style={{ padding: "0.85rem 1rem" }}>Parameter</th>
                      <th style={{ padding: "0.85rem 1rem" }}>Healthy Threshold</th>
                      <th style={{ padding: "0.85rem 1rem" }}>Potential Threat</th>
                      <th style={{ padding: "0.85rem 1rem" }}>Associated Risks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--border)", background: "white" }}>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700 }}>Relative Humidity (RH)</td>
                      <td style={{ padding: "0.85rem 1rem", color: "#047857", fontWeight: 700 }}>40% – 50%</td>
                      <td style={{ padding: "0.85rem 1rem", color: "#b91c1c" }}>&gt; 60%</td>
                      <td style={{ padding: "0.85rem 1rem" }}>Mold colonies, dust mite growth</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--cream)" }}>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700 }}>Particulate Matter (PM2.5)</td>
                      <td style={{ padding: "0.85rem 1rem", color: "#047857", fontWeight: 700 }}>&lt; 15 µg/m³</td>
                      <td style={{ padding: "0.85rem 1rem", color: "#b91c1c" }}>&gt; 35 µg/m³</td>
                      <td style={{ padding: "0.85rem 1rem" }}>Asthma, airway inflammation</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border)", background: "white" }}>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700 }}>Carbon Dioxide (CO2)</td>
                      <td style={{ padding: "0.85rem 1rem", color: "#047857", fontWeight: 700 }}>&lt; 800 ppm</td>
                      <td style={{ padding: "0.85rem 1rem", color: "#b91c1c" }}>&gt; 1200 ppm</td>
                      <td style={{ padding: "0.85rem 1rem" }}>Headaches, fatigue, low focus</td>
                    </tr>
                    <tr style={{ background: "var(--cream)" }}>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700 }}>Total VOCs</td>
                      <td style={{ padding: "0.85rem 1rem", color: "#047857", fontWeight: 700 }}>&lt; 300 µg/m³</td>
                      <td style={{ padding: "0.85rem 1rem", color: "#b91c1c" }}>&gt; 1000 µg/m³</td>
                      <td style={{ padding: "0.85rem 1rem" }}>Eye irritation, chemical sensitivity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* SECTION 11: IAQ VS CLEANING TABLE */}
            <div id="iaq-vs-cleaning" style={{ marginBottom: "3.5rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                11. IAQ Assessment vs. General Cleaning: Why They Are Not the Same
              </h2>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                  <thead>
                    <tr style={{ background: "#065f46", color: "white", textAlign: "left" }}>
                      <th style={{ padding: "0.85rem 1rem" }}>General Housekeeping</th>
                      <th style={{ padding: "0.85rem 1rem" }}>Professional IAQ Assessment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--border)", background: "white" }}>
                      <td style={{ padding: "0.85rem 1rem" }}>Cleans visible surface dust</td>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700, color: "#047857" }}>Measures microscopic PM2.5 &amp; PM10 particles</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--cream)" }}>
                      <td style={{ padding: "0.85rem 1rem" }}>Wipes surface mildew off tiles</td>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700, color: "#047857" }}>Samples airborne mold spore density &amp; genus</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border)", background: "white" }}>
                      <td style={{ padding: "0.85rem 1rem" }}>Cannot measure air moisture</td>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700, color: "#047857" }}>Tracks Relative Humidity (RH%) &amp; Dew Point</td>
                    </tr>
                    <tr style={{ background: "var(--cream)" }}>
                      <td style={{ padding: "0.85rem 1rem" }}>Ignores HVAC &amp; chemical off-gassing</td>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700, color: "#047857" }}>Audits VOC levels &amp; Air Changes Per Hour (ACH)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* SECTION 12: FAQS */}
            <div id="faq-section" style={{ marginBottom: "4rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
                Frequently Asked Questions About Indoor Air Quality in Kenya
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
            <div style={{ background: "linear-gradient(135deg, #064e3b 0%, #065f46 60%, #0f766e 100%)", borderRadius: "1.5rem", padding: "3rem 2rem", color: "white", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "0.75rem" }}>
                Book Your Indoor Air Quality Audit Today
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "650px", margin: "0 auto 2rem" }}>
                Ensure your family, staff, or tenants breathe pure, allergen-free air. Speak with certified environmental technicians at MoldGuard Kenya.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://wa.me/254710907628?text=Hi%20MoldGuard%2C%20I%20would%20like%20to%20book%20an%20Indoor%20Air%20Quality%20audit." target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: "0.85rem 1.8rem", fontSize: "1rem" }}>
                  💬 Book IAQ Audit on WhatsApp
                </a>
                <Link href="/services/air-scrubbing" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", padding: "0.85rem 1.8rem", fontSize: "1rem" }}>
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
