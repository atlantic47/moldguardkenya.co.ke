import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ShopClient from "@/app/shop/ShopClient";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Air Purifiers for Mold Spores & Dust Allergies in Kenya | MoldGuard",
  description: "Buy True HEPA air purifiers in Kenya to capture mold spores, dust mite allergens, smoke, and odors. Featuring Xiaomi, HAVIT & Green Lion smart purifiers with fast delivery.",
  alternates: { canonical: "https://moldguardkenya.co.ke/shop/air-purifiers" },
};

const airPurifierProducts = products.filter((p) => p.category === "Air Purifiers");

// ItemList schema
const airPurifiersSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Air Purifiers for Mold Spores & Air Quality in Kenya",
  "description": "True HEPA and activated carbon air purifiers for home, office, and allergy relief in Kenya.",
  "itemListElement": airPurifierProducts.map((product, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": product.name,
      "url": `https://moldguardkenya.co.ke/shop/${product.slug}`,
      "description": product.shortDescription,
      "category": product.category,
      "image": product.image.startsWith("/")
        ? `https://moldguardkenya.co.ke${product.image}`
        : product.image,
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": product.currency,
        "availability": product.inStock
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      },
    },
  })),
};

// FAQPage schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does an air purifier remove mold spores from the air in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Active mold colonies release millions of microscopic reproductive spores (1 to 30 microns in size) into indoor air. Air purifiers equipped with True HEPA filters capture 99.97% of airborne particles down to 0.3 microns, trapping floating mold spores before you inhale them."
      }
    },
    {
      "@type": "Question",
      "name": "Will an air purifier stop mold from growing on damp walls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Air purifiers scrub airborne particles and odors, but they do NOT lower room humidity. If your walls or ceilings are damp (relative humidity >55%), mold will continue growing. To dry wet walls and stop root mold growth, you need a dehumidifier."
      }
    },
    {
      "@type": "Question",
      "name": "What is CADR and what CADR rate do I need for my Nairobi apartment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CADR (Clean Air Delivery Rate) measures how fast a purifier filters clean air in cubic meters per hour (m³/h). For a standard bedroom (up to 20 m²), a CADR of 120–200 m³/h is ideal (e.g. HAVIT HAP 102 or Xiaomi 4 Compact). For large living areas (up to 60 m²), select a CADR of 360–500 m³/h (e.g. Xiaomi 4 Lite or Xiaomi 4 Pro)."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I replace the HEPA filter in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Kenyan urban areas like Nairobi or dusty coastal zones, HEPA filters typically last between 6 and 12 months depending on daily usage. Smart purifiers like the Xiaomi 4 Series track filter life automatically in the Xiaomi Home App and alert you when replacement is needed."
      }
    }
  ]
};

export default function AirPurifiersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(airPurifiersSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section style={{
          background: "linear-gradient(135deg, #0f4c81 0%, #1e5f99 60%, #2b74b8 100%)",
          padding: "5rem 0 4rem",
          position: "relative",
          color: "white",
        }}>
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", padding: "0.4rem 1.25rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1.25rem", color: "#6ee7b7" }}>
              🌬️ Certified Air Quality &amp; HEPA Filtration
            </div>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.15, marginBottom: "1.25rem", maxWidth: "800px", margin: "0 auto 1.25rem" }}>
              Air Purifiers for Mold Spores, Dust &amp; Allergies in Kenya
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.88)", maxWidth: "680px", margin: "0 auto 2.5rem" }}>
              Capture 99.97% of airborne mold spores, pollen, dust mite allergens, smoke, and odors. Featuring Xiaomi, HAVIT, and Green Lion smart HEPA purifiers.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                ⭐ 4.9/5 Google Verified Ratings
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                📱 Smart App &amp; Voice Control
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                🚚 Fast Nairobi &amp; Nationwide Delivery
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT GRID FOR AIR PURIFIERS */}
        <ShopClient initialCategory="Air Purifiers" />

        {/* EDUCATIONAL & BUYING GUIDE CONTENT */}
        <section style={{ background: "white", padding: "5rem 0", borderTop: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              How True HEPA Air Purifiers Protect You from Airborne Mold Spores in Kenya
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.5rem" }}>
              In humid Kenyan urban centers like Nairobi, Mombasa, Kisumu, and Nakuru, active mold colonies growing inside ceiling voids, behind wallpaper, or on damp bathroom tiles constantly release microscopic reproductive particles called **mold spores**. When inhaled, these airborne spores trigger morning nasal congestion, chronic coughing, watery eyes, asthma flare-ups, and skin irritation.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "2.5rem" }}>
              A high-efficiency **True HEPA Air Purifier** continuously draws indoor air through a multi-layer filtration system. The outer pre-filter traps coarse dust, hair, and lint; the **True HEPA filter** traps 99.97% of particles down to 0.3 microns (including mold spores, pollen, and PM2.5 dust); and the **Activated Carbon layer** absorbs volatile organic compounds (VOCs), smoke, and unpleasant musty damp odors.
            </p>

            {/* CADR BUYING GUIDE TABLE */}
            <div style={{ background: "var(--cream)", borderRadius: "1.25rem", padding: "2rem", border: "1px solid var(--border)", marginBottom: "3rem" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1rem" }}>
                📊 Air Purifier CADR &amp; Room Size Guide
              </h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid var(--border)", textAlign: "left" }}>
                      <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Model</th>
                      <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>CADR Rating</th>
                      <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Recommended Room Size</th>
                      <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "0.75rem", fontWeight: 700 }}>Green Lion Compact</td>
                      <td style={{ padding: "0.75rem" }}>185 m³/h</td>
                      <td style={{ padding: "0.75rem" }}>Up to 22 m²</td>
                      <td style={{ padding: "0.75rem" }}>Small bedrooms, study desks, aromatherapy</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "0.75rem", fontWeight: 700 }}>HAVIT HAP 102</td>
                      <td style={{ padding: "0.75rem" }}>120 m³/h</td>
                      <td style={{ padding: "0.75rem" }}>12 – 20 m²</td>
                      <td style={{ padding: "0.75rem" }}>Budget-friendly bedroom air purification</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "0.75rem", fontWeight: 700 }}>Xiaomi 4 Compact</td>
                      <td style={{ padding: "0.75rem" }}>230 m³/h</td>
                      <td style={{ padding: "0.75rem" }}>16 – 27 m²</td>
                      <td style={{ padding: "0.75rem" }}>Smart app control, Alexa &amp; Google voice</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "0.75rem", fontWeight: 700 }}>Xiaomi 4 Lite</td>
                      <td style={{ padding: "0.75rem" }}>360 m³/h</td>
                      <td style={{ padding: "0.75rem" }}>25 – 43 m²</td>
                      <td style={{ padding: "0.75rem" }}>Large bedrooms, open-plan living rooms</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "0.75rem", fontWeight: 700 }}>Xiaomi 4 Pro</td>
                      <td style={{ padding: "0.75rem" }}>500 m³/h</td>
                      <td style={{ padding: "0.75rem" }}>35 – 60 m²</td>
                      <td style={{ padding: "0.75rem" }}>Flagship PM2.5+PM10 sensing for large spaces</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* KEY SELECTION FACTORS */}
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1rem" }}>
              Key Features when Shopping for Air Purifiers in Nairobi
            </h3>
            <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.9, color: "var(--text-mid)", marginBottom: "2.5rem" }}>
              <li><strong>Real-Time PM2.5 Air Quality Sensor:</strong> Indicates current indoor air cleanliness with color-coded LED rings so you know when air quality drops.</li>
              <li><strong>Ultra-Quiet Night Mode:</strong> Operates at as low as 20 dB to 25 dB so you enjoy continuous clean air while sleeping undisturbed.</li>
              <li><strong>Smart App Integration:</strong> Allows remote scheduling, air quality monitoring, and filter life tracking directly from your smartphone via the Xiaomi Home app.</li>
              <li><strong>High Carbon Weight:</strong> Ensures long-lasting absorption of formaldehyde, chemical vapors, and heavy cooking or damp odors.</li>
            </ul>

            {/* FAQ SECTION */}
            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              Frequently Asked Questions About Air Purifiers in Kenya
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
              {faqSchema.mainEntity.map((item, idx) => (
                <div key={idx} style={{ background: "var(--cream)", borderRadius: "1rem", padding: "1.5rem", border: "1px solid var(--border)" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>
                    ❓ {item.name}
                  </h4>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-mid)", margin: 0 }}>
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>

            {/* INTERNAL LINK BOX */}
            <div style={{ background: "linear-gradient(135deg, #1e5f99 0%, #0f4c81 100%)", borderRadius: "1.5rem", padding: "2.5rem", color: "white", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Not Sure If You Need an Air Purifier or Dehumidifier?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Read our detailed guide <Link href="/blog/dehumidifier-vs-air-purifier-for-mold-kenya" style={{ color: "#6ee7b7", textDecoration: "underline", fontWeight: 700 }}>Dehumidifier vs. Air Purifier for Mold Spores</Link> or check out our high-capacity <Link href="/shop/dehumidifiers" style={{ color: "#6ee7b7", textDecoration: "underline", fontWeight: 700 }}>Dehumidifiers in Kenya</Link>.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://wa.me/254710907628?text=Hi%20MoldGuard%2C%20I%20need%20help%20choosing%20an%20air%20purifier%20for%20my%20home." target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: "0.75rem 1.5rem" }}>
                  💬 Speak with Air Quality Specialist
                </a>
                <Link href="/shop/dehumidifiers" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", padding: "0.75rem 1.5rem" }}>
                  View Dehumidifiers →
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
