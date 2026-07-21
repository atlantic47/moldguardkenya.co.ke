// SERVER COMPONENT — no "use client". This allows metadata export and SSR schema injection.
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopClient from "./ShopClient";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Shop Dehumidifiers, Air Purifiers & Mold Remediation Products | MoldGuard Kenya",
  description: "Buy professional-grade dehumidifiers, air purifiers, and mold removal products in Kenya. Protect your home and health with certified indoor air quality equipment. Fast Nairobi delivery.",
  alternates: { canonical: "https://moldguardkenya.co.ke/shop" },
};

// ItemList schema
const shopSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "MoldGuard Shop — Professional Mold & Damp Control Products Kenya",
  "description": "Professional-grade dehumidifiers, air purifiers, and mold removal products available in Kenya.",
  "itemListElement": products.map((product, index) => ({
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
        "url": `https://moldguardkenya.co.ke/shop/${product.slug}`,
      },
      "aggregateRating": product.reviews.length > 0
        ? {
            "@type": "AggregateRating",
            "ratingValue": product.rating.toFixed(1),
            "reviewCount": product.reviews.length,
            "bestRating": "5",
            "worstRating": "1",
          }
        : undefined,
    },
  })),
};

// FAQPage schema
const shopFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should I buy a dehumidifier or an air purifier for mold in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your home has visible wall dampness, wet windows, or musty smells, you need a dehumidifier to lower relative humidity below 50% and stop mold growth. If you suffer from allergies, morning sneezing, or airborne mold spores, a HEPA air purifier traps 99.97% of airborne particles. Running both together offers maximum protection."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly do you deliver dehumidifiers and air purifiers in Nairobi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We deliver same-day within Nairobi, Kiambu, and Machakos for orders placed before 2 PM. For upcountry towns like Mombasa, Nakuru, Eldoret, Kisumu, and Diani, delivery takes 24 to 48 hours via secure courier."
      }
    },
    {
      "@type": "Question",
      "name": "Are your mold remediation products safe for homes with children and pets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our MoldKill Max spray and equipment are selected for safe residential application. MoldKill Max uses specialized non-bleach active ingredients that destroy mold roots safely without harsh toxic fumes when allowed to dry naturally."
      }
    },
    {
      "@type": "Question",
      "name": "Do your products come with a warranty in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All electronic compressor dehumidifiers and smart HEPA air purifiers come with a 1-year manufacturer warranty and technical support from MoldGuard Kenya's certified remediation specialists."
      }
    }
  ]
};

export default function ShopPage() {
  return (
    <>
      {/* Schemas injected server-side */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopFaqSchema) }}
      />
      <Navbar />
      <main>
        {/* HERO — static, server-rendered */}
        <section style={{
          background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 60%, var(--primary-light) 100%)",
          padding: "5rem 0 4rem",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)",
          }} />
          <div className="container" style={{ position: "relative", textAlign: "center" }}>
            <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
              🛒 MoldGuard Official Equipment Shop
            </p>
            <h1 style={{ color: "white", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.15, marginBottom: "1.25rem", maxWidth: "800px", margin: "0 auto 1.25rem" }}>
              Shop Dehumidifiers, Air Purifiers &amp; Mold Remediation Products
            </h1>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "620px", margin: "0 auto 2.5rem" }}>
              Professional-grade 20L–60L compressor dehumidifiers, True HEPA smart air purifiers, and fungicidal mold removers tested by certified Kenya remediation specialists.
            </p>

            {/* TRUST BADGES */}
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
              {[
                { icon: "⭐", text: "4.9/5 Google Business Profile Rating" },
                { icon: "🚚", text: "Same-Day Delivery in Nairobi" },
                { icon: "🛡️", text: "1-Year Equipment Warranty" },
                { icon: "👨‍🔬", text: "Expert Technician Support" },
              ].map((b) => (
                <div key={b.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.45rem 1.1rem", color: "white", fontSize: "0.85rem", fontWeight: 600 }}>
                  <span>{b.icon}</span> {b.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORY DEEP-LINK LANDING CARDS */}
        <section style={{ background: "white", padding: "3rem 0 1rem", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "2rem" }}>
              Explore Specialized Equipment Categories
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              
              {/* CARD 1: MOLD REMOVAL */}
              <Link href="/shop/mold-removal-products" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "1.75rem", transition: "transform 0.2s, box-shadow 0.2s" }} className="cat-card">
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🧪</div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>
                    Mold Removal Sprays
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-mid)", lineHeight: 1.6, marginBottom: "1rem" }}>
                    Fungicidal sprays that kill black mold roots on walls, ceilings, and tile grout with long-lasting protection.
                  </p>
                  <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.85rem" }}>
                    Explore Mold Removers →
                  </span>
                </div>
              </Link>

              {/* CARD 2: DEHUMIDIFIERS */}
              <Link href="/shop/dehumidifiers" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "1.75rem", transition: "transform 0.2s, box-shadow 0.2s" }} className="cat-card">
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>💧</div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>
                    Compressor Dehumidifiers
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-mid)", lineHeight: 1.6, marginBottom: "1rem" }}>
                    Extract up to 60L of water daily. Stop damp bedrooms, window condensation, and wardrobe moisture.
                  </p>
                  <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.85rem" }}>
                    View All Dehumidifiers →
                  </span>
                </div>
              </Link>

              {/* CARD 3: AIR PURIFIERS */}
              <Link href="/shop/air-purifiers" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "1.75rem", transition: "transform 0.2s, box-shadow 0.2s" }} className="cat-card">
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🌬️</div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.5rem" }}>
                    HEPA Air Purifiers
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-mid)", lineHeight: 1.6, marginBottom: "1rem" }}>
                    Filter 99.97% of airborne mold spores, pollen, dust mite allergens, smoke, and odors with app control.
                  </p>
                  <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.85rem" }}>
                    Browse HEPA Purifiers →
                  </span>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Interactive filter + product grid — client component */}
        <ShopClient />

        {/* RICH PROSE BUYING & EDUCATIONAL CONTENT */}
        <section style={{ background: "white", padding: "5rem 0", borderTop: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            
            <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              Understanding Indoor Moisture &amp; Air Quality Control in Kenya
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.5rem" }}>
              Kenya’s varied geographic climate — from the damp highland chill of Nairobi, Limuru, Kericho, and Eldoret to the heavy tropical humidity of Mombasa, Malindi, and Diani — presents severe challenges for indoor moisture control. During the biannual rainy seasons, indoor relative humidity (RH) routinely climbs past 80%.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "2.5rem" }}>
              When relative humidity stays above 55% for more than 48 hours, microscopic mold spores (*Stachybotrys*, *Aspergillus*, and *Cladosporium*) germinate rapidly across painted plaster walls, gypsum ceilings, wardrobe backs, and mattress bases. Leaving mold untreated degrades building structures and poses serious health risks, including asthma, allergic rhinitis, and respiratory irritation.
            </p>

            {/* COMPARISON BOX */}
            <div style={{ background: "var(--cream)", borderRadius: "1.25rem", padding: "2rem", border: "1px solid var(--border)", marginBottom: "3rem" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1rem" }}>
                ⚖️ Dehumidifiers vs. Air Purifiers: Which One Do You Need?
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="comp-grid">
                <div>
                  <h4 style={{ color: "var(--primary-dark)", fontWeight: 800, fontSize: "1.1rem" }}>💧 Compressor Dehumidifiers</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-mid)", lineHeight: 1.6 }}>
                    Pulls water vapor from humid air. <strong>Stops mold at the root</strong> by keeping indoor humidity below 50%. Essential for damp bedrooms, wet walls, and window condensation.
                  </p>
                  <Link href="/shop/dehumidifiers" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.85rem" }}>Learn More →</Link>
                </div>
                <div>
                  <h4 style={{ color: "var(--primary-dark)", fontWeight: 800, fontSize: "1.1rem" }}>🌬️ True HEPA Air Purifiers</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-mid)", lineHeight: 1.6 }}>
                    Filters airborne dust, smoke, and floating mold spores down to 0.3 microns. <strong>Protects your lungs</strong> from inhaling allergens and eliminates musty odors.
                  </p>
                  <Link href="/shop/air-purifiers" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.85rem" }}>Learn More →</Link>
                </div>
              </div>
            </div>

            {/* FAQ SECTION */}
            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              Frequently Asked Questions About Buying Mold &amp; Air Quality Products
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
              {shopFaqSchema.mainEntity.map((item, idx) => (
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

          </div>
        </section>

        {/* TRUST CTA — static, server-rendered */}
        <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", padding: "4rem 0", color: "white", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "650px" }}>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}>
              Not Sure Which Product Is Right for You?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Our certified mold specialists are happy to advise you on the best products for your specific property and moisture levels — free of charge.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/254710907628?text=Hi%20MoldGuard%2C%20I%20need%20help%20choosing%20the%20right%20product%20for%20my%20mold%20problem."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}
              >
                💬 WhatsApp Equipment Specialist
              </a>
              <a href="tel:0710907628" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.5)", fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}>
                📞 Call 0710907628
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .cat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }
        @media (max-width: 640px) {
          .comp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
