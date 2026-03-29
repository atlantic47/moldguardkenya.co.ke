import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  products,
  getProductBySlug,
  getRelatedProducts,
  buildProductSchema,
} from "@/lib/data/products";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Buy in Kenya | MoldGuard Kenya Shop`,
    description: `${product.shortDescription} — Sold by MoldGuard Kenya. Price: ${product.priceDisplay}. Fast delivery across Nairobi & Kenya.`,
    openGraph: {
      title: `${product.name} — ${product.priceDisplay}`,
      description: product.shortDescription,
      type: "website",
    },
  };
}

const categoryIcons: Record<string, string> = {
  Dehumidifiers: "💧",
  "Air Purifiers": "🌬️",
  "Mould Removal Products": "🧪",
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug, product.category);
  const pageUrl = `https://moldguardkenya.co.ke/shop/${product.slug}`;
  const schema = buildProductSchema(product, pageUrl);

  const whatsappMsg = encodeURIComponent(
    `Hi MoldGuard Kenya, I'd like to order the *${product.name}* priced at ${product.priceDisplay}. Please advise on availability and delivery.`
  );
  const whatsappUrl = `https://wa.me/254717140369?text=${whatsappMsg}`;

  const avgRating =
    product.reviews.length > 0
      ? product.reviews.reduce((s, r) => s + r.rating, 0) / product.reviews.length
      : product.rating;

  const savings =
    product.originalPrice
      ? product.originalPrice - product.price
      : null;

  return (
    <>
      {/* JSON-LD Product Schema – WooCommerce-equivalent for SEO */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />
      <main>
        {/* BREADCRUMBS */}
        <div
          style={{
            background: "var(--cream)",
            borderBottom: "1px solid var(--border)",
            padding: "0.85rem 0",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.85rem",
              color: "var(--text-light)",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                color: "var(--primary)",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/shop"
              style={{
                color: "var(--primary)",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Shop
            </Link>
            <span>/</span>
            <span style={{ color: "var(--text-light)" }}>
              {product.category}
            </span>
            <span>/</span>
            <span style={{ color: "var(--text-dark)", fontWeight: 600 }}>
              {product.name}
            </span>
          </div>
        </div>

        {/* PRODUCT HERO */}
        <section style={{ background: "white", padding: "4rem 0" }}>
          <div className="container product-layout">
            {/* LEFT: Image + Meta */}
            <div>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%)",
                  borderRadius: "2rem",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  aspectRatio: "1 / 1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(45,80,22,0.12)",
                  position: "relative",
                }}
              >
                {product.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      left: "1.25rem",
                      background: "var(--gold)",
                      color: "var(--primary-dark)",
                      borderRadius: "999px",
                      padding: "0.35rem 1rem",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      zIndex: 2,
                    }}
                  >
                    {product.badge}
                  </div>
                )}
                <span
                  style={{ fontSize: "8rem", opacity: 0.35 }}
                >
                  {categoryIcons[product.category]}
                </span>
              </div>

              {/* Stock + Rating row */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    background: "var(--cream)",
                    borderRadius: "1rem",
                    padding: "1rem 1.25rem",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-light)",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Availability
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      color: product.inStock ? "var(--primary)" : "red",
                      fontSize: "0.95rem",
                    }}
                  >
                    {product.inStock ? "✅ In Stock" : "❌ Out of Stock"}
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "var(--cream)",
                    borderRadius: "1rem",
                    padding: "1rem 1.25rem",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-light)",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Customer Rating
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 900,
                        color: "var(--text-dark)",
                        fontSize: "1rem",
                      }}
                    >
                      {avgRating.toFixed(1)}
                    </span>
                    <div style={{ display: "flex", gap: "1px" }}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span
                          key={s}
                          style={{
                            color:
                              s <= Math.round(avgRating)
                                ? "#f59e0b"
                                : "#d1d5db",
                            fontSize: "1rem",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span
                      style={{ fontSize: "0.8rem", color: "var(--text-light)" }}
                    >
                      ({product.reviews.length}{" "}
                      {product.reviews.length === 1 ? "review" : "reviews"})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Details + CTA */}
            <div>
              {/* Category + Badge */}
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                  marginBottom: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    background: "var(--cream)",
                    border: "1px solid var(--border)",
                    borderRadius: "999px",
                    padding: "0.3rem 0.9rem",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                  }}
                >
                  {categoryIcons[product.category]} {product.category}
                </span>
                {product.badge && (
                  <span
                    style={{
                      background: "var(--gold)",
                      borderRadius: "999px",
                      padding: "0.3rem 0.9rem",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      color: "var(--primary-dark)",
                    }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              <h1
                style={{
                  fontWeight: 900,
                  color: "var(--primary-dark)",
                  fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                  lineHeight: 1.25,
                  marginBottom: "0.75rem",
                }}
              >
                {product.name}
              </h1>

              {/* Brand */}
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-light)",
                  marginBottom: "1rem",
                }}
              >
                Brand:{" "}
                <strong style={{ color: "var(--primary)" }}>
                  {product.brand}
                </strong>
              </p>

              <p
                style={{
                  color: "var(--text-mid)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  marginBottom: "1.75rem",
                }}
              >
                {product.shortDescription}
              </p>

              {/* Price block */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginBottom: "2rem",
                  padding: "1.25rem 1.5rem",
                  background: "var(--cream)",
                  borderRadius: "1rem",
                  border: "2px solid var(--primary)",
                }}
              >
                <div
                  style={{
                    fontWeight: 900,
                    fontSize: "2.25rem",
                    color: "var(--primary-dark)",
                  }}
                >
                  {product.priceDisplay}
                </div>
                {product.originalPriceDisplay && (
                  <div
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-light)",
                      textDecoration: "line-through",
                    }}
                  >
                    {product.originalPriceDisplay}
                  </div>
                )}
                {savings && (
                  <div
                    style={{
                      background: "#dcfce7",
                      color: "#166534",
                      borderRadius: "999px",
                      padding: "0.25rem 0.85rem",
                      fontSize: "0.82rem",
                      fontWeight: 800,
                    }}
                  >
                    Save Ksh {savings.toLocaleString()}!
                  </div>
                )}
              </div>

              {/* Order Buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  marginBottom: "2rem",
                }}
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    background: "#25d366",
                    color: "white",
                    borderRadius: "999px",
                    padding: "1rem 2rem",
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
                  }}
                >
                  <span>💬</span> Order via WhatsApp
                </a>
                <a
                  href="tel:0717140369"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    background: "var(--primary)",
                    color: "white",
                    borderRadius: "999px",
                    padding: "1rem 2rem",
                    fontWeight: 700,
                    fontSize: "1rem",
                    textDecoration: "none",
                  }}
                >
                  <span>📞</span> Call to Order — 0717140369
                </a>
                <Link
                  href="/contact"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    background: "transparent",
                    color: "var(--text-dark)",
                    borderRadius: "999px",
                    padding: "0.85rem 2rem",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    border: "2px solid var(--border)",
                  }}
                >
                  📧 Send an Enquiry
                </Link>
              </div>

              {/* Trust Badges */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                {[
                  { icon: "🚚", label: "Nairobi Same-Day Delivery" },
                  { icon: "🛡️", label: "Warranty Included" },
                  { icon: "✅", label: "Genuine Product" },
                  { icon: "↩️", label: "Hassle-Free Returns" },
                ].map((b) => (
                  <div
                    key={b.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      padding: "0.75rem 1rem",
                      background: "var(--cream)",
                      borderRadius: "0.75rem",
                      border: "1px solid var(--border)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text-dark)",
                    }}
                  >
                    <span>{b.icon}</span> {b.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DESCRIPTION + FEATURES + SPECS */}
        <section style={{ background: "var(--cream)", padding: "4rem 0" }}>
          <div className="container product-tabs-layout">
            {/* Left */}
            <div>
              <div
                style={{
                  background: "white",
                  borderRadius: "1.5rem",
                  border: "1px solid var(--border)",
                  padding: "2.5rem",
                  marginBottom: "2rem",
                }}
              >
                <h2
                  style={{
                    fontWeight: 900,
                    color: "var(--primary-dark)",
                    fontSize: "1.4rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  About This Product
                </h2>
                <p
                  style={{
                    color: "var(--text-mid)",
                    lineHeight: 1.85,
                    fontSize: "1rem",
                  }}
                >
                  {product.fullDescription}
                </p>
              </div>

              <div
                style={{
                  background: "white",
                  borderRadius: "1.5rem",
                  border: "1px solid var(--border)",
                  padding: "2.5rem",
                }}
              >
                <h2
                  style={{
                    fontWeight: 900,
                    color: "var(--primary-dark)",
                    fontSize: "1.4rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Key Features
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                  }}
                >
                  {product.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        display: "flex",
                        gap: "0.85rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          width: "22px",
                          height: "22px",
                          background: "var(--primary)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "0.75rem",
                          fontWeight: 900,
                          flexShrink: 0,
                          marginTop: "0.15rem",
                        }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          color: "var(--text-mid)",
                          fontSize: "0.95rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Specs sticky */}
            <div>
              <div
                style={{
                  background: "white",
                  borderRadius: "1.5rem",
                  border: "1px solid var(--border)",
                  padding: "2.5rem",
                  position: "sticky",
                  top: "6rem",
                }}
              >
                <h2
                  style={{
                    fontWeight: 900,
                    color: "var(--primary-dark)",
                    fontSize: "1.4rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Specifications
                </h2>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr
                        key={spec.label}
                        style={{
                          borderBottom:
                            i < product.specifications.length - 1
                              ? "1px solid var(--border)"
                              : "none",
                        }}
                      >
                        <td
                          style={{
                            padding: "0.85rem 0",
                            fontWeight: 700,
                            color: "var(--text-dark)",
                            fontSize: "0.875rem",
                            width: "45%",
                          }}
                        >
                          {spec.label}
                        </td>
                        <td
                          style={{
                            padding: "0.85rem 0",
                            color: "var(--text-mid)",
                            fontSize: "0.875rem",
                            lineHeight: 1.5,
                          }}
                        >
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div
                  style={{
                    marginTop: "2rem",
                    padding: "1.25rem",
                    background: "var(--cream)",
                    borderRadius: "1rem",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-mid)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    💡 <strong>Need help choosing?</strong> Our certified mould
                    specialists advise on the best product for your specific
                    situation — free via WhatsApp or phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMER REVIEWS */}
        {product.reviews.length > 0 && (
          <section style={{ background: "white", padding: "4rem 0" }}>
            <div className="container" style={{ maxWidth: "900px" }}>
              {/* Summary */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  marginBottom: "3rem",
                  padding: "2rem 2.5rem",
                  background: "var(--cream)",
                  borderRadius: "1.5rem",
                  border: "1px solid var(--border)",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "3.5rem",
                      fontWeight: 900,
                      color: "var(--primary-dark)",
                      lineHeight: 1,
                    }}
                  >
                    {avgRating.toFixed(1)}
                  </div>
                  <div style={{ display: "flex", gap: "2px", justifyContent: "center", margin: "0.5rem 0" }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        style={{
                          color: s <= Math.round(avgRating) ? "#f59e0b" : "#d1d5db",
                          fontSize: "1.4rem",
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-light)",
                      fontWeight: 600,
                    }}
                  >
                    {product.reviews.length} verified{" "}
                    {product.reviews.length === 1 ? "review" : "reviews"}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontWeight: 900,
                      color: "var(--primary-dark)",
                      fontSize: "1.4rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Customer Reviews
                  </h2>
                  <p
                    style={{
                      color: "var(--text-mid)",
                      fontSize: "0.95rem",
                      margin: 0,
                    }}
                  >
                    Real reviews from verified customers across Kenya
                  </p>
                </div>
              </div>

              {/* Individual reviews */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {product.reviews.map((review, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--cream)",
                      borderRadius: "1.25rem",
                      border: "1px solid var(--border)",
                      padding: "2rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.85rem",
                        }}
                      >
                        <div
                          style={{
                            width: "44px",
                            height: "44px",
                            background: "var(--primary)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: 800,
                            fontSize: "1.1rem",
                            flexShrink: 0,
                          }}
                        >
                          {review.author.charAt(0)}
                        </div>
                        <div>
                          <div
                            style={{
                              fontWeight: 800,
                              color: "var(--text-dark)",
                              fontSize: "0.95rem",
                            }}
                          >
                            {review.author}
                          </div>
                          <div
                            style={{
                              fontSize: "0.8rem",
                              color: "var(--text-light)",
                            }}
                          >
                            📍 {review.location}
                          </div>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ display: "flex", gap: "1px" }}>
                          {[1, 2, 3, 4, 5].map((s) => (
                            <span
                              key={s}
                              style={{
                                color:
                                  s <= review.rating ? "#f59e0b" : "#d1d5db",
                                fontSize: "1rem",
                              }}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <div
                          style={{
                            fontSize: "0.78rem",
                            color: "var(--text-light)",
                            marginTop: "0.25rem",
                          }}
                        >
                          {new Date(review.date).toLocaleDateString("en-KE", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                    </div>
                    <p
                      style={{
                        color: "var(--text-mid)",
                        lineHeight: 1.75,
                        fontSize: "0.95rem",
                        margin: 0,
                      }}
                    >
                      &ldquo;{review.body}&rdquo;
                    </p>
                    <div
                      style={{
                        marginTop: "0.85rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        background: "#dcfce7",
                        color: "#166534",
                        borderRadius: "999px",
                        padding: "0.2rem 0.75rem",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                      }}
                    >
                      ✓ Verified Purchase
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* RELATED PRODUCTS */}
        {related.length > 0 && (
          <section style={{ background: "var(--cream)", padding: "4rem 0" }}>
            <div className="container">
              <h2
                style={{
                  fontWeight: 900,
                  color: "var(--primary-dark)",
                  fontSize: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                More {product.category}
              </h2>
              <div className="related-grid">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/shop/${rel.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        background: "white",
                        borderRadius: "1.25rem",
                        border: "1px solid var(--border)",
                        overflow: "hidden",
                        transition: "all 0.2s",
                      }}
                      className="related-card"
                    >
                      <div
                        style={{
                          background:
                            "linear-gradient(135deg, #e8f5e9, #a5d6a7)",
                          height: "160px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span style={{ fontSize: "4rem", opacity: 0.4 }}>
                          {categoryIcons[rel.category]}
                        </span>
                      </div>
                      <div style={{ padding: "1.25rem" }}>
                        <h3
                          style={{
                            fontWeight: 800,
                            color: "var(--text-dark)",
                            fontSize: "0.95rem",
                            lineHeight: 1.4,
                            marginBottom: "0.5rem",
                          }}
                        >
                          {rel.name}
                        </h3>
                        <div
                          style={{
                            fontWeight: 900,
                            color: "var(--primary-dark)",
                            fontSize: "1.1rem",
                          }}
                        >
                          {rel.priceDisplay}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
                <Link
                  href="/shop"
                  className="btn-primary"
                  style={{ fontSize: "0.95rem" }}
                >
                  View All Products →
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <style>{`
        .product-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .product-tabs-layout {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 2rem;
          align-items: start;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .related-card:hover {
          box-shadow: 0 8px 24px rgba(45,80,22,0.12);
          transform: translateY(-3px);
        }
        @media (max-width: 900px) {
          .product-layout { grid-template-columns: 1fr !important; gap: 2rem; }
          .product-tabs-layout { grid-template-columns: 1fr !important; }
          .related-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .related-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Footer />
    </>
  );
}
