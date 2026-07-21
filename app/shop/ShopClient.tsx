"use client";

import { useState } from "react";
import Link from "next/link";
import { products, categories, type ProductCategory } from "@/lib/data/products";

const categoryIcons: Record<string, string> = {
  "Dehumidifiers": "💧",
  "Air Purifiers": "🌬️",
  "Mold Removal Products": "🧪",
};

interface ShopClientProps {
  initialCategory?: ProductCategory | "All";
}

export default function ShopClient({ initialCategory = "All" }: ShopClientProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">(initialCategory);

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* CATEGORY FILTER */}
      <section style={{ background: "white", borderBottom: "1px solid var(--border)", position: "sticky", top: "0", zIndex: 10 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1rem 1.5rem", overflowX: "auto" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-light)", letterSpacing: "0.08em", textTransform: "uppercase", flexShrink: 0 }}>Filter:</span>
          {(["All", ...categories] as const).map((cat) => {
            const href = cat === "All"
              ? "/shop"
              : cat === "Dehumidifiers"
              ? "/shop/dehumidifiers"
              : cat === "Air Purifiers"
              ? "/shop/air-purifiers"
              : "/shop/mold-removal-products";

            return (
              <Link
                key={cat}
                href={href}
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
                  textDecoration: "none",
                }}
              >
                {cat !== "All" && categoryIcons[cat]} {cat}
              </Link>
            );
          })}
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
                            <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "var(--primary)", color: "white", borderRadius: "999px", padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, zIndex: 2 }}>
                              {categoryIcons[product.category]} {product.category}
                            </div>
                            {product.badge && (
                              <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "var(--gold)", color: "var(--primary-dark)", borderRadius: "999px", padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 800, zIndex: 2 }}>
                                {product.badge}
                              </div>
                            )}
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", transition: "transform 0.35s" }}
                                className="product-card-img"
                              />
                            ) : (
                              <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <span style={{ fontSize: "4rem", opacity: 0.5 }}>{categoryIcons[product.category]}</span>
                              </div>
                            )}
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
                                {[1, 2, 3, 4, 5].map((star) => (
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
                                View Product →
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
        .product-card:hover .product-card-img {
          transform: scale(1.06);
        }
        @media (max-width: 1024px) {
          .shop-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .shop-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
