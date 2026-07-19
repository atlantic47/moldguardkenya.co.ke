// SERVER COMPONENT — no "use client". This allows metadata export and SSR schema injection.
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopClient from "./ShopClient";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Shop Dehumidifiers, Air Purifiers & Mold Remediation Products | MoldGuard Kenya",
  description: "Buy high-quality dehumidifiers, air purifiers, and mold removal products in Kenya. Protect your home and health with professional-grade air quality solutions. Fast delivery.",
  alternates: { canonical: "https://moldguardkenya.co.ke/shop" },
};

// Build schema server-side so it is in the initial HTML that Googlebot reads
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

export default function ShopPage() {
  return (
    <>
      {/* Schema injected server-side — Googlebot reads this in the raw HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopSchema) }}
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
              🛒 MoldGuard Shop
            </p>
            <h1 style={{ color: "white", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.15, marginBottom: "1.25rem", maxWidth: "700px", margin: "0 auto 1.25rem" }}>
              Professional Mold &amp; Damp Control Products in Kenya
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.75, maxWidth: "550px", margin: "0 auto 2.5rem" }}>
              The same professional-grade dehumidifiers, air purifiers, and mold removal products used by our certified technicians — now available for direct purchase.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { icon: "🚚", text: "Delivery in Nairobi" },
                { icon: "✅", text: "Genuine Products" },
                { icon: "🛡️", text: "Warranty Included" },
                { icon: "📞", text: "Expert Advice" },
              ].map((b) => (
                <div key={b.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.45rem 1.1rem", color: "white", fontSize: "0.85rem", fontWeight: 600 }}>
                  <span>{b.icon}</span> {b.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive filter + product grid — client component */}
        <ShopClient />

        {/* TRUST CTA — static, server-rendered */}
        <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", padding: "4rem 0", color: "white", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "650px" }}>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}>
              Not Sure Which Product Is Right for You?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Our certified mold specialists are happy to advise you on the best products for your specific situation — free of charge.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/254710907628?text=Hi%20MoldGuard%2C%20I%20need%20help%20choosing%20the%20right%20product%20for%20my%20mold%20problem."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}
              >
                💬 WhatsApp Us
              </a>
              <a href="tel:0710907628" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.5)", fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}>
                📞 Call 0710907628
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
