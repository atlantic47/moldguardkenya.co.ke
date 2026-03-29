import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsletterSection from "../components/NewsletterSection";
import PageHero from "../components/PageHero";
import { getAllSeoMetadata } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Mould Removal Blog | Expert Advice & Guides | MoldGuard Kenya",
  description:
    "Read the latest tips, guides, and expert advice on mould removal, prevention, and indoor air quality in Kenya from MoldGuard Kenya's certified specialists.",
};

const BLOG_ICONS = ["🌧️", "🦠", "🏠", "💰", "💧", "☔", "⚠️", "📋", "🔬", "🌊"];

export default function BlogListingPage() {
  const posts = getAllSeoMetadata("blog");

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <PageHero
          title="MoldGuard Expert Blog"
          subtitle="Kenya's most comprehensive resource on mould prevention, health risks, and certified remediation."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          bgImage="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/73111f67-897c-473d-82d2-8a2bf68434ce.jpg"
        />

        {/* INTRO STRIP */}
        <section style={{ background: "white", padding: "3rem 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <h2 style={{ fontWeight: 800, fontSize: "1.35rem", color: "var(--primary-dark)", marginBottom: "0.4rem" }}>
                {posts.length} Expert Articles
              </h2>
              <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", margin: 0 }}>
                Written by Kenya&apos;s leading certified mould remediation specialists.
              </p>
            </div>
            <a href="tel:0717140369" className="btn-primary" style={{ fontSize: "0.875rem", padding: "0.65rem 1.4rem" }}>
              📞 Need Help Now?
            </a>
          </div>
        </section>

        {/* BLOG GRID */}
        <section style={{ background: "var(--cream)", padding: "4rem 0 5rem" }}>
          <div className="container">
            {/* Featured first post */}
            {posts.length > 0 && (() => {
              const { slug, data } = posts[0];
              return (
                <Link href={`/blog/${slug}`} style={{ textDecoration: "none", display: "block", marginBottom: "3rem" }}>
                  <div style={{ background: "white", borderRadius: "1.75rem", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 8px 32px rgba(0,0,0,0.08)", display: "grid", alignItems: "stretch", transition: "box-shadow 0.25s" }} className="featured-article-grid group hover:shadow-xl">
                    <div className="featured-article-padding" style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem" }}>
                      <div style={{ width: "60px", height: "60px", background: "rgba(255,255,255,0.15)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>
                        {BLOG_ICONS[0]}
                      </div>
                      <span style={{ color: "var(--gold-light)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Featured Article</span>
                      <h2 style={{ color: "white", fontWeight: 800, fontSize: "clamp(1.35rem, 2vw, 1.75rem)", lineHeight: 1.25, margin: 0 }}>
                        {data.title || slug.replace(/-/g, " ")}
                      </h2>
                      <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
                        {data.description || "Read this comprehensive guide from Kenya's leading mould remediation experts."}
                      </p>
                      <span style={{ color: "var(--gold-light)", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        Read Full Article <span>→</span>
                      </span>
                    </div>
                    <div className="featured-article-padding" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                        {["Mould Prevention", "Kenya", "Expert Guide"].map((tag) => (
                          <span key={tag} style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "999px", padding: "0.3rem 0.85rem", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-mid)" }}>{tag}</span>
                        ))}
                      </div>
                      <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.75, margin: 0 }}>
                        {data.description || "A comprehensive in-depth analysis of the mould landscape in Kenya, including causes, health risks, and professional solutions."}
                      </p>
                      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                        <div style={{ width: "40px", height: "40px", background: "var(--primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "1rem" }}>MG</div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-dark)" }}>MoldGuard Kenya</div>
                          <div style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>Certified Mould Specialists</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* Rest of articles */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {posts.slice(1).map(({ slug, data }, idx) => (
                <Link key={slug} href={`/blog/${slug}`} style={{ textDecoration: "none" }}>
                  <article style={{ background: "white", borderRadius: "1.5rem", border: "1px solid var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", transition: "all 0.25s" }} className="group hover:shadow-xl hover:-translate-y-1">
                    {/* Top colour strip */}
                    <div style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)", padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div style={{ width: "44px", height: "44px", background: "rgba(255,255,255,0.18)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                        {BLOG_ICONS[(idx + 1) % BLOG_ICONS.length]}
                      </div>
                      <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>EXPERT GUIDE</span>
                    </div>
                    <div style={{ padding: "1.5rem 1.75rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      <h2 style={{ fontWeight: 800, color: "var(--text-dark)", fontSize: "1.05rem", lineHeight: 1.4, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {data.title || slug.replace(/-/g, " ")}
                      </h2>
                      <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.65, flex: 1, margin: 0, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {data.description || "Expert mould remediation insights for Kenyan homeowners and property managers."}
                      </p>
                      <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.35rem", marginTop: "auto" }} className="group-hover:gap-2 transition-all">
                        Read Article <span>→</span>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", padding: "4rem 0", color: "white", textAlign: "center" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.25, maxWidth: "500px" }}>
              Dealing with Mould Right Now?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", maxWidth: "420px", lineHeight: 1.7 }}>
              Don&apos;t wait — contact Kenya&apos;s certified rapid-response mould specialists today.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href="tel:0717140369" className="btn-gold" style={{ fontSize: "0.95rem", padding: "0.8rem 1.75rem" }}>
                📞 Call 0717140369
              </a>
              <Link href="/locations" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.6)", fontSize: "0.95rem", padding: "0.8rem 1.75rem" }}>
                Find Local Experts →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <style>{`
        .featured-article-grid { grid-template-columns: 1fr 1fr; }
        .featured-article-padding { padding: 3.5rem 3rem; }
        @media (max-width: 900px) {
          .featured-article-grid { grid-template-columns: 1fr !important; }
          .featured-article-padding { padding: 2rem 1.5rem !important; }
        }
      `}</style>
      <NewsletterSection />
      <Footer />
    </>
  );
}
