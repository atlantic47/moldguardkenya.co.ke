import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ShopClient from "@/app/shop/ShopClient";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Professional Mold Removal Sprays & Remediation Products Kenya | MoldGuard",
  description: "Buy professional-grade mold remover sprays and fungicidal wall treatments in Kenya. Kill toxic black mold roots on walls, ceilings, and shower tiles with long-lasting protection.",
  alternates: { canonical: "https://moldguardkenya.co.ke/shop/mold-removal-products" },
};

const moldRemovalProducts = products.filter((p) => p.category === "Mold Removal Products");

// ItemList schema
const moldRemovalSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Professional Mold Removal & Wall Remediation Products in Kenya",
  "description": "Fungicidal sprays and long-lasting mold killers used by certified technicians in Kenya.",
  "itemListElement": moldRemovalProducts.map((product, index) => ({
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
      "name": "Why is regular household bleach ineffective against black mold on walls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Household bleach is 90% water and lacks deep-penetrating surfactants. When applied to porous surfaces like painted plaster, drywall, or concrete blocks, the chlorine stays on the surface while water sinks deep into the material — effectively feeding the root system (mycelium) of toxic mold, causing it to return stronger within weeks."
      }
    },
    {
      "@type": "Question",
      "name": "How does MoldKill Max Spray kill mold permanently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MoldKill Max contains dual-action fungicidal agents combined with penetrating micro-surfactants that sink deep into porous wall plaster, drywall, tile grout, and wood. It destroys the fungal cell wall at the root and leaves behind an invisible protective barrier that prevents new spores from attaching for up to 6 months."
      }
    },
    {
      "@type": "Question",
      "name": "Is MoldKill Max safe for indoor residential use in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. MoldKill Max is formulated for safe indoor application in homes, bedrooms, kitchens, and bathrooms. When sprayed according to instructions and allowed to air out, it is non-toxic to children and pets once dry."
      }
    },
    {
      "@type": "Question",
      "name": "How do I apply mold remover spray for best results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spray MoldKill Max generously onto affected areas (bathroom tiles, painted walls, or ceilings) until fully saturated. Do NOT wipe off immediately — allow the chemical to penetrate and dry naturally over 24 to 48 hours. Dead mold spores will discolor and fade away, leaving clean, protected surfaces."
      }
    }
  ]
};

export default function MoldRemovalProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(moldRemovalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section style={{
          background: "linear-gradient(135deg, #7c1d1d 0%, #991b1b 60%, #b91c1c 100%)",
          padding: "5rem 0 4rem",
          position: "relative",
          color: "white",
        }}>
          <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", padding: "0.4rem 1.25rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: 700, marginBottom: "1.25rem", color: "#fef08a" }}>
              🧪 Professional Fungicidal Remediation
            </div>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.15, marginBottom: "1.25rem", maxWidth: "800px", margin: "0 auto 1.25rem" }}>
              Professional Mold Removal &amp; Wall Remediation Sprays in Kenya
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.88)", maxWidth: "680px", margin: "0 auto 2.5rem" }}>
              Destroy toxic black mold roots (*Stachybotrys*) on walls, ceilings, and shower tile grout. Long-lasting residual barrier protection engineered for Kenyan climates.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                🛡️ Up to 6 Months Protection
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                👨‍🔬 Certified Technician Formula
              </div>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.85rem", fontWeight: 600 }}>
                🚚 Fast Nairobi &amp; Countrywide Shipping
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT GRID FOR MOLD REMOVAL */}
        <ShopClient initialCategory="Mold Removal Products" />

        {/* EDUCATIONAL & REMEDIATION CONTENT */}
        <section style={{ background: "white", padding: "5rem 0", borderTop: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              Why Regular Household Bleach Fails to Eliminate Mold on Walls
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "1.5rem" }}>
              Most homeowners in Kenya attempt to treat bathroom wall mold or dark ceiling patches using standard supermarket bleach. While bleach turns dark surface mold clear temporarily, it **does not kill the mold root system** beneath porous wall surfaces. Bleach consists of 90% water; when applied to porous plaster, drywall, or stone walls, the chlorine evaporates rapidly off the surface while the water sinks deep into the substrate — actually feeding the fungal root network (*mycelium*).
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-mid)", marginBottom: "2.5rem" }}>
              **MoldKill Max** was developed specifically for professional remediation in Kenya. Its specialized non-bleach fungicidal active ingredients penetrate deep into wall pores to kill microscopic hyphae and spores at the root, leaving a protective residual coat that prevents new spores from colonizing treated areas for months.
            </p>

            {/* APPLICATION STEPS */}
            <div style={{ background: "var(--cream)", borderRadius: "1.25rem", padding: "2rem", border: "1px solid var(--border)", marginBottom: "3rem" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
                📋 4-Step Professional Application Method
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
                <div style={{ background: "white", padding: "1.25rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
                  <div style={{ fontWeight: 900, color: "#991b1b", fontSize: "1.2rem", marginBottom: "0.5rem" }}>1. Inspect &amp; Prep</div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", margin: 0 }}>Ensure the area has good airflow. Wear gloves and a mask if dealing with heavy black mold.</p>
                </div>
                <div style={{ background: "white", padding: "1.25rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
                  <div style={{ fontWeight: 900, color: "#991b1b", fontSize: "1.2rem", marginBottom: "0.5rem" }}>2. Saturate Wall</div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", margin: 0 }}>Spray MoldKill Max generously over affected tiles, grout, ceilings, or painted plaster.</p>
                </div>
                <div style={{ background: "white", padding: "1.25rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
                  <div style={{ fontWeight: 900, color: "#991b1b", fontSize: "1.2rem", marginBottom: "0.5rem" }}>3. Let Dry Naturally</div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", margin: 0 }}>Do NOT wipe off immediately. Allow 24–48 hours for deep root penetration and active kill.</p>
                </div>
                <div style={{ background: "white", padding: "1.25rem", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
                  <div style={{ fontWeight: 900, color: "#991b1b", fontSize: "1.2rem", marginBottom: "0.5rem" }}>4. Control Humidity</div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", margin: 0 }}>Run a dehumidifier to keep room humidity under 50% so mold never has water to return.</p>
                </div>
              </div>
            </div>

            {/* FAQ SECTION */}
            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              Frequently Asked Questions About Mold Remediation Sprays
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
            <div style={{ background: "linear-gradient(135deg, #991b1b 0%, #7c1d1d 100%)", borderRadius: "1.5rem", padding: "2.5rem", color: "white", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Dealing with Extensive Structural Mold in Your Building?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                If mold covers more than 3 square meters of wall or ceiling space, request a professional on-site inspection by our certified remediation team. Read about <Link href="/blog/cost-of-mold-removal-in-kenya" style={{ color: "#fef08a", textDecoration: "underline", fontWeight: 700 }}>Mold Remediation Service Costs in Kenya</Link>.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://wa.me/254710907628?text=Hi%20MoldGuard%2C%20I%20have%20a%20severe%20mold%20problem%20and%20need%20remediation%20advice." target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: "0.75rem 1.5rem" }}>
                  💬 Book Professional Inspection
                </a>
                <Link href="/shop/dehumidifiers" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)", padding: "0.75rem 1.5rem" }}>
                  Shop Dehumidifiers →
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
