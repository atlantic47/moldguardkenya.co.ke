import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsletterSection from "../../components/NewsletterSection";
import { getSeoMarkdownFile, getAllSeoSlugs } from "@/lib/markdown";
import PageHero from "../../components/PageHero";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data } = getSeoMarkdownFile("blog", slug);
  return {
    title: data.title || `${slug.replace(/-/g, " ")} | MoldGuard Kenya`,
    description: data.description || "Professional mold removal and prevention advice.",
  };
}

export async function generateStaticParams() {
  return getAllSeoSlugs("blog").map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const { content, data } = getSeoMarkdownFile("blog", slug);
  const title = data.title || slug.replace(/-/g, " ");

  // Strip frontmatter before passing to ReactMarkdown
  const body = content.replace(/^---[\s\S]+?---\n?/, "").trim();

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <PageHero
          title={title}
          subtitle={data.description || "Expert insights from Kenya's leading mold remediation specialists."}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: title },
          ]}
          bgImage="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/8e626626-0a65-4016-b728-2abad223b45e.jpg"
        />

        {/* ── ARTICLE + SIDEBAR ── */}
        <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "3rem", alignItems: "start" }}>

            {/* ── MAIN ARTICLE CONTENT ── */}
            <article
              style={{
                background: "white",
                borderRadius: "1.5rem",
                padding: "2.5rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                border: "1px solid var(--border)",
              }}
              className="blog-article"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {body}
              </ReactMarkdown>
            </article>

            {/* ── SIDEBAR ── */}
            <aside style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} className="sticky top-28">
              {/* CTA Card */}
              <div style={{ background: "var(--primary-dark)", borderRadius: "1.5rem", padding: "2rem", color: "white", boxShadow: "0 8px 30px rgba(30,58,15,0.2)" }}>
                <span style={{ fontSize: "2.5rem" }}>🦠</span>
                <h3 style={{ fontWeight: 800, fontSize: "1.2rem", margin: "0.75rem 0 0.75rem" }}>
                  Got a Mold Problem?
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Don&apos;t wait. Every day mold spreads deeper into your walls. Contact MoldGuard Kenya for certified, rapid-response remediation.
                </p>
                <a href="tel:0717140369" className="btn-gold" style={{ width: "100%", justifyContent: "center", fontSize: "0.95rem", padding: "0.8rem" }}>
                  📞 Call 0717140369
                </a>
                <Link href="/contact" style={{ display: "block", textAlign: "center", marginTop: "0.75rem", color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", textDecoration: "underline" }}>
                  Send a WhatsApp message →
                </Link>
              </div>

              {/* Key Facts */}
              <div style={{ background: "white", borderRadius: "1.5rem", padding: "2rem", border: "1px solid var(--border)", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "1rem", marginBottom: "1.25rem" }}>
                  Why Act Fast?
                </h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    "Mold doubles in size every 24–48 hrs",
                    "Spores cause respiratory illness",
                    "Property values drop 10–30%",
                    "DIY solutions don't remove roots",
                  ].map((fact) => (
                    <li key={fact} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "0.875rem", color: "var(--text-mid)" }}>
                      <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}>✓</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Browse Locations */}
              <div style={{ background: "var(--cream)", borderRadius: "1.5rem", padding: "1.75rem", border: "1px solid var(--border)" }}>
                <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "1rem", marginBottom: "1rem" }}>Find Local Experts</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["Nairobi", "Westlands", "Kilimani", "Mombasa", "Kiambu", "Nakuru", "Karen", "Runda"].map((loc) => (
                    <Link key={loc} href={`/locations/${loc.toLowerCase()}`} style={{ background: "white", border: "1px solid var(--border)", borderRadius: "20px", padding: "0.3rem 0.85rem", fontSize: "0.8rem", color: "var(--text-dark)", textDecoration: "none", fontWeight: 500, transition: "all 0.15s" }}>
                      {loc}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* CTA BANNER */}
        <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", padding: "5rem 0", color: "white", textAlign: "center" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, maxWidth: "600px" }}>
              Ready to Make Your Home Mold-Free?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", maxWidth: "500px", lineHeight: 1.7 }}>
              Our certified team across Kenya is ready to diagnose and permanently eliminate your mold problem.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href="tel:0717140369" className="btn-gold" style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}>
                📞 Call Now — 0717140369
              </a>
              <Link href="/locations" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.6)", fontSize: "1rem", padding: "0.85rem 2rem" }}>
                Browse All Locations →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @media (max-width: 900px) {
          article + aside { display: none !important; }
          section > .container { grid-template-columns: 1fr !important; }
        }

        /* ── Blog Article Typography ── */
        .blog-article h1 { font-size: clamp(1.5rem, 2.5vw, 2.1rem); font-weight: 800; color: var(--primary-dark); margin: 0 0 1.5rem; line-height: 1.25; }
        .blog-article h2 { font-size: clamp(1.2rem, 2vw, 1.6rem); font-weight: 800; color: var(--primary-dark); margin: 2.5rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--border); }
        .blog-article h3 { font-size: 1.1rem; font-weight: 700; color: var(--primary); margin: 1.75rem 0 0.75rem; }
        .blog-article p { color: var(--text-mid); line-height: 1.85; margin: 0 0 1.25rem; font-size: 1rem; }
        .blog-article strong { color: var(--text-dark); font-weight: 700; }
        .blog-article em { font-style: italic; color: var(--text-mid); }
        .blog-article ul, .blog-article ol { padding-left: 1.5rem; margin: 0 0 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; }
        .blog-article li { color: var(--text-mid); line-height: 1.75; font-size: 0.975rem; }
        .blog-article a { color: var(--primary); text-decoration: underline; font-weight: 600; }
        .blog-article blockquote { background: var(--cream); border-left: 4px solid var(--primary); border-radius: 0 0.75rem 0.75rem 0; padding: 1rem 1.5rem; margin: 1.5rem 0; color: var(--text-dark); font-weight: 600; }
        .blog-article blockquote p { margin: 0; }
        .blog-article hr { border: none; border-top: 1px solid var(--border); margin: 2.5rem 0; }

        /* ── Table Styles ── */
        .blog-article table { width: 100%; border-collapse: collapse; margin: 1.5rem 0 2rem; font-size: 0.93rem; border-radius: 0.75rem; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.07); }
        .blog-article thead { background: var(--primary-dark); color: white; }
        .blog-article thead th { padding: 0.9rem 1.1rem; text-align: left; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.04em; text-transform: uppercase; border: none; }
        .blog-article tbody tr { border-bottom: 1px solid var(--border); }
        .blog-article tbody tr:last-child { border-bottom: none; }
        .blog-article tbody tr:nth-child(even) { background: var(--cream); }
        .blog-article tbody td { padding: 0.85rem 1.1rem; color: var(--text-mid); vertical-align: top; line-height: 1.6; border: none; }
        .blog-article tbody td strong { color: var(--primary-dark); }
      `}</style>

      <NewsletterSection />
      <Footer />
    </>
  );
}
