import Link from "next/link";
import { getAllSeoMetadata, getAllSeoSlugs } from "@/lib/markdown";

const TOP_LOCATIONS = [
  { slug: "nairobi", name: "Nairobi" },
  { slug: "westlands", name: "Westlands" },
  { slug: "kilimani", name: "Kilimani" },
  { slug: "karen", name: "Karen" },
  { slug: "mombasa", name: "Mombasa" },
  { slug: "kiambu", name: "Kiambu" },
  { slug: "nakuru", name: "Nakuru" },
  { slug: "runda", name: "Runda" },
  { slug: "lavington", name: "Lavington" },
  { slug: "embakasi", name: "Embakasi" },
];

export default function HomepageDeepLinks() {
  const blogPosts = getAllSeoMetadata("blog").slice(0, 6);

  return (
    <section style={{ background: "white", padding: "5rem 0", borderTop: "1px solid var(--border)" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>

        {/* ── Latest Blog Articles ── */}
        <div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>Expert Knowledge</p>
              <h2 style={{ fontWeight: 800, fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)", color: "var(--primary-dark)", margin: 0 }}>Latest Mold Removal Guides</h2>
            </div>
            <Link href="/blog" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", border: "2px solid var(--primary)", borderRadius: "999px", padding: "0.45rem 1.1rem", whiteSpace: "nowrap" }}>
              View All Articles →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem" }}>
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article style={{ background: "var(--cream)", borderRadius: "1rem", border: "1px solid var(--border)", padding: "1.25rem 1.5rem", height: "100%", display: "flex", flexDirection: "column", gap: "0.5rem", transition: "box-shadow 0.2s, transform 0.2s" }} className="hp-blog-card">
                  <div style={{ width: "36px", height: "36px", background: "var(--primary)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "1rem", flexShrink: 0 }}>📖</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-dark)", lineHeight: 1.4, margin: 0 }}>{post.data.title || post.slug.replace(/-/g, " ")}</h3>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.8rem", lineHeight: 1.5, margin: 0, flex: 1 }}>{(post.data.description || "").slice(0, 80)}{(post.data.description || "").length > 80 ? "..." : ""}</p>
                  <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.78rem", marginTop: "auto" }}>Read Article →</span>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Service Locations ── */}
        <div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.25rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>We Come to You</p>
              <h2 style={{ fontWeight: 800, fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)", color: "var(--primary-dark)", margin: 0 }}>Mold Removal Near You</h2>
            </div>
            <Link href="/locations" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", border: "2px solid var(--primary)", borderRadius: "999px", padding: "0.45rem 1.1rem", whiteSpace: "nowrap" }}>
              All Locations →
            </Link>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {TOP_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "999px", padding: "0.5rem 1.15rem", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-dark)", textDecoration: "none", transition: "all 0.15s" }}
                className="hp-loc-pill"
              >
                📍 Mold Removal in {loc.name}
              </Link>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .hp-blog-card:hover { box-shadow: 0 8px 24px rgba(45,80,22,0.1); transform: translateY(-2px); }
        .hp-loc-pill:hover { background: var(--primary) !important; color: white !important; border-color: var(--primary) !important; }
        @media (max-width: 640px) {
          .hp-blog-card { padding: 1rem !important; }
        }
      `}</style>
    </section>
  );
}
