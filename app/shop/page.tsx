"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products, categories, type ProductCategory } from "@/lib/data/products";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const categoryIcons: Record<string, string> = {
    "Dehumidifiers": "💧",
    "Air Purifiers": "🌬️",
    "Mold Removal Products": "🧪",
  };

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
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
              Professional Mold & Damp Control Products
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

        {/* CATEGORY FILTER */}
        <section style={{ background: "white", borderBottom: "1px solid var(--border)", position: "sticky", top: "0", zIndex: 10 }}>
          <div className="container" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem 1.5rem", overflowX: "auto" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-light)", letterSpacing: "0.08em", textTransform: "uppercase", flexShrink: 0 }}>Filter:</span>
            {(["All", ...categories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "999px",
                  border: activeCategory === cat ? "2px solid var(--primary)" : "2px solid var(--border)",
                  background: activeCategory === cat ? "var(--primary)" : "white",
                  color: activeCategory === cat ? "white" : "var(--text-dark)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                {cat !== "All" && categoryIcons[cat]} {cat}
              </button>
            ))}
            <span style={{ marginLeft: "auto", fontSize: "0.8rem", color: "var(--text-light)", flexShrink: 0 }}>
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </section>

        {/* PRODUCT GRID */}
        <section style={{ background: "var(--cream)", padding: "4rem 0 6rem" }}>
          <div className="container">
            {(["All", ...categories] as const)
              .filter((cat) => cat !== "All")
              .filter((cat) => activeCategory === "All" || activeCategory === cat)
              .map((cat) => {
                const catProducts = filtered.filter((p) => p.category === cat);
                if (catProducts.length === 0) return null;
                return (
                  <div key={cat} style={{ marginBottom: "4rem" }}>
                    {/* Category Header */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                      <div style={{ width: "48px", height: "48px", background: "var(--primary)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                        {categoryIcons[cat]}
                      </div>
                      <div>
                        <h2 style={{ fontWeight: 900, color: "var(--primary-dark)", fontSize: "1.5rem", margin: 0 }}>{cat}</h2>
                        <p style={{ color: "var(--text-light)", fontSize: "0.85rem", margin: 0 }}>{catProducts.length} product{catProducts.length !== 1 ? "s" : ""}</p>
                      </div>
                      <div style={{ flex: 1, height: "1px", background: "var(--border)", marginLeft: "1rem" }} />
                    </div>

                    {/* Product Cards */}
                    <div className="shop-grid">
                      {catProducts.map((product) => (
                        <Link key={product.slug} href={`/shop/${product.slug}`} style={{ textDecoration: "none" }}>
                          <article style={{
                            background: "white",
                            borderRadius: "1.5rem",
                            border: "1px solid var(--border)",
                            overflow: "hidden",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                            transition: "all 0.25s",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }} className="product-card">
                            {/* Product Image */}
                            <div style={{ position: "relative", background: "var(--cream)", height: "220px", overflow: "hidden" }}>
                              {/* Category badge */}
                              <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "var(--primary)", color: "white", borderRadius: "999px", padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, zIndex: 2 }}>
                                {categoryIcons[product.category]} {product.category}
                              </div>
                              {product.badge && (
                                <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "var(--gold)", color: "var(--primary-dark)", borderRadius: "999px", padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 800, zIndex: 2 }}>
                                  {product.badge}
                                </div>
                              )}
                              {/* Gradient placeholder */}
                              <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <span style={{ fontSize: "4rem", opacity: 0.5 }}>{categoryIcons[product.category]}</span>
                              </div>
                            </div>

                            {/* Product Info */}
                            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                              <h3 style={{ fontWeight: 800, color: "var(--text-dark)", fontSize: "1rem", lineHeight: 1.4, margin: 0 }}>
                                {product.name}
                              </h3>
                              <p style={{ color: "var(--text-mid)", fontSize: "0.85rem", lineHeight: 1.6, margin: 0, flex: 1 }}>
                                {product.shortDescription}
                              </p>

                              {/* Rating */}
                              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <div style={{ display: "flex", gap: "2px" }}>
                                  {[1,2,3,4,5].map((star) => (
                                    <span key={star} style={{ color: star <= Math.round(product.rating) ? "#f59e0b" : "#d1d5db", fontSize: "0.9rem" }}>★</span>
                                  ))}
                                </div>
                                <span style={{ fontSize: "0.78rem", color: "var(--text-light)" }}>({product.reviews.length})</span>
                              </div>

                              {/* Price + CTA */}
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                                <div>
                                  <div style={{ fontWeight: 900, fontSize: "1.2rem", color: "var(--primary-dark)" }}>{product.priceDisplay}</div>
                                  {product.originalPriceDisplay && (
                                    <div style={{ fontSize: "0.8rem", color: "var(--text-light)", textDecoration: "line-through" }}>{product.originalPriceDisplay}</div>
                                  )}
                                </div>
                                <div style={{ background: "var(--primary)", color: "white", borderRadius: "999px", padding: "0.5rem 1.1rem", fontSize: "0.8rem", fontWeight: 700 }}>
                                  View →
                                </div>
                              </div>
                            </div>
                          </article>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        {/* TRUST CTA */}
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
                href="https://wa.me/254717140369?text=Hi%20MoldGuard%2C%20I%20need%20help%20choosing%20the%20right%20product%20for%20my%20mold%20problem."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}
              >
                💬 WhatsApp Us
              </a>
              <a href="tel:0717140369" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.5)", fontSize: "0.95rem", padding: "0.85rem 1.75rem" }}>
                📞 Call 0717140369
              </a>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .shop-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .product-card:hover {
          box-shadow: 0 12px 40px rgba(45,80,22,0.15) !important;
          transform: translateY(-4px);
        }
        @media (max-width: 1024px) {
          .shop-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .shop-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Footer />
    </>
  );
}
