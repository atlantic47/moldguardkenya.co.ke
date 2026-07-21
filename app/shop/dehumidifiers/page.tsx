import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ShopClient from "@/app/shop/ShopClient";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Best Dehumidifiers for Mold & Dampness in Kenya | Nairobi Buying Guide",
  description: "Buy professional 20L, 25L, 35L & 60L compressor dehumidifiers in Kenya. Stop damp bedrooms, window condensation, and wall mold in Nairobi, Mombasa & nationwide.",
  alternates: { canonical: "https://moldguardkenya.co.ke/shop/dehumidifiers" },
};

const dehumidifierProducts = products.filter((p) => p.category === "Dehumidifiers");

// ItemList schema
const dehumidifiersSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Dehumidifiers for Mold & Dampness in Kenya",
  "description": "High-capacity electric compressor dehumidifiers for home, office, and commercial mold prevention in Kenya.",
  "itemListElement": dehumidifierProducts.map((product, index) => ({
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
      "name": "What size dehumidifier do I need for a bedroom in Nairobi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a standard master bedroom or damp studio apartment in Nairobi (15 to 30 m²), a 20-litre daily capacity compressor dehumidifier (like the Gree 20L or MoldGuard 20L) is ideal. For small closets or wardrobes, a compact 900ml or mini unit like the Deerma CS50MW is recommended."
      }
    },
    {
      "@type": "Question",
      "name": "Will a dehumidifier stop mold from growing on my walls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Mold spores require a relative humidity (RH) above 55% to germinate and spread. Running a dehumidifier to keep your indoor humidity between 40% and 50% starves mold of the moisture it needs, stopping regrowth permanently."
      }
    },
    {
      "@type": "Question",
      "name": "How much water can a dehumidifier pull from the air daily in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depending on the unit capacity, our dehumidifiers pull from 900ml up to 60 litres of moisture per 24 hours. In high-humidity coastal zones like Mombasa or during Nairobi's heavy rains, a 20L unit can extract 15 to 20 litres of water daily."
      }
    },
    {
      "@type": "Question",
      "name": "How long should I run a dehumidifier each day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most modern compressor dehumidifiers feature automatic humidistat controls. You can leave the unit plugged in and set your target humidity to 45% or 50%. The device will automatically run when humidity rises and turn off when the room reaches your target RH."
      }
    }
  ]
};

export default function DehumidifiersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dehumidifiersSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section style={{
          background: "linear-gradient(135deg, #0d3c26 0%, #1b5e3a 60%, #2d8050 100%)",
          padding: "5rem 0 4rem",
          position: "relative",
          color: "white",
        }}>
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", padding: "0.4rem 1.25rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1.25rem", color: "#facc15" }}>
              💧 Verified Humidity Control Equipment
            </div>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.15, marginBottom: "1.25rem", maxWidth: "800px", margin: "0 auto 1.25rem" }}>
              Best Dehumidifiers for Mold &amp; Damp Bedrooms in Kenya
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.88)", maxWidth: "680px", margin: "0 auto 2.5rem" }}>
              Extract up to 60 litres of moisture daily. Stop wall condensation, wet wardrobes, and toxic mold growth in Nairobi, Mombasa, and high-humidity regions.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                ⭐ 4.9/5 Google Verified Reviews
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                🚚 Same-Day Nairobi Delivery
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                🛡️ Local Warranty &amp; Tech Support
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT GRID FOR DEHUMIDIFIERS */}
        <ShopClient initialCategory="Dehumidifiers" />

        {/* EDUCATIONAL & BUYING GUIDE CONTENT */}
        <section style={{ background: "white", padding: "5rem 0", borderTop: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              How to Choose the Best Dehumidifier for Your Kenyan Property
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.5rem" }}>
              High indoor humidity is the single biggest root cause of toxic black mold (*Stachybotrys*) in Kenyan homes. During Nairobi’s March–May and October–December rains, relative humidity inside ground-floor apartments, townhouses, and basements can climb past 85%. At this moisture level, mold spores germinate in less than 48 hours on wardrobes, painted ceilings, tiles, and bed frames.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "2.5rem" }}>
              Electric compressor dehumidifiers work by drawing humid room air across refrigerated coils, condensing airborne water vapor into liquid water, and discharging warm, dry air back into your home. Keeping your indoor relative humidity between **40% and 50%** makes it scientifically impossible for mold to survive or return.
            </p>

            {/* SIZING TABLE */}
            <div style={{ background: "var(--cream)", borderRadius: "1.25rem", padding: "2rem", border: "1px solid var(--border)", marginBottom: "3rem" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1rem" }}>
                📊 Dehumidifier Sizing Matrix for Kenya
              </h3>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid var(--border)", textAlign: "left" }}>
                      <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Coverage Area</th>
                      <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Recommended Capacity</th>
                      <th style={{ padding: "0.75rem", color: "var(--primary-dark)" }}>Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "0.75rem", fontWeight: 700 }}>Up to 15 m²</td>
                      <td style={{ padding: "0.75rem" }}>900ml – 2L / Day</td>
                      <td style={{ padding: "0.75rem" }}>Closets, small bathrooms, shoe cabinets</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "0.75rem", fontWeight: 700 }}>15 – 45 m²</td>
                      <td style={{ padding: "0.75rem" }}>20L / Day</td>
                      <td style={{ padding: "0.75rem" }}>Master bedrooms, 1-2 bed apartments, offices</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "0.75rem", fontWeight: 700 }}>45 – 75 m²</td>
                      <td style={{ padding: "0.75rem" }}>25L – 35L / Day</td>
                      <td style={{ padding: "0.75rem" }}>Large living rooms, ground-floor townhouses</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "0.75rem", fontWeight: 700 }}>75 – 120+ m²</td>
                      <td style={{ padding: "0.75rem" }}>60L / Day Industrial</td>
                      <td style={{ padding: "0.75rem" }}>Commercial spaces, hotels, warehouses, floods</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* KEY FEATURES TO LOOK FOR */}
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1rem" }}>
              Key Features to Look For When Buying a Dehumidifier in Nairobi
            </h3>
            <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.9, color: "var(--text-mid)", marginBottom: "2.5rem" }}>
              <li><strong>Digital Humidistat Display:</strong> Allows you to set a precise target relative humidity (e.g. 50%) so the unit turns off automatically when dry.</li>
              <li><strong>Continuous Hose Drainage Option:</strong> Lets you connect a drainage hose straight into a sink or floor drain so you don't have to manually empty the water bucket.</li>
              <li><strong>Rotary Compressor Efficiency:</strong> Eco-friendly R290 refrigerant compressors consume minimal electricity (typically 280W–350W) while providing high extraction.</li>
              <li><strong>Built-in Caster Wheels:</strong> Allows effortless movement between bedrooms, sitting rooms, and laundry drying areas.</li>
            </ul>

            {/* FAQ SECTION */}
            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              Frequently Asked Questions About Dehumidifiers in Kenya
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

            {/* RELATED GUIDES INTERNAL LINKS */}
            <div style={{ background: "linear-gradient(135deg, #1b5e3a 0%, #0d3c26 100%)", borderRadius: "1.5rem", padding: "2.5rem", color: "white", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Need Help Selecting or Installing Your Equipment?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Read our in-depth <Link href="/blog/best-dehumidifiers-for-nairobi-homes-kenya" style={{ color: "#facc15", textDecoration: "underline", fontWeight: 700 }}>Nairobi Dehumidifier Buying Guide</Link> or learn the difference in our <Link href="/blog/dehumidifier-vs-air-purifier-for-mold-kenya" style={{ color: "#facc15", textDecoration: "underline", fontWeight: 700 }}>Dehumidifier vs. Air Purifier Comparison</Link>.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://wa.me/254710907628?text=Hi%20MoldGuard%2C%20I%20need%20advice%20on%20buying%20a%20dehumidifier%20for%20my%20home." target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: "0.75rem 1.5rem" }}>
                  💬 WhatsApp Equipment Specialist
                </a>
                <Link href="/shop/air-purifiers" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", padding: "0.75rem 1.5rem" }}>
                  View HEPA Air Purifiers →
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
