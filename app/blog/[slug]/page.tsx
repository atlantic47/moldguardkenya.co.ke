import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsletterSection from "../../components/NewsletterSection";
import { getSeoMarkdownFile, getAllSeoSlugs } from "@/lib/markdown";
import PageHero from "../../components/PageHero";

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

// Parse a blog post into structured sections
function parseBlogContent(raw: string) {
  const body = raw.replace(/---[\s\S]+?---/, "").trim();
  const lines = body.split("\n");

  let h1 = "";
  let intro = "";
  const sections: { heading: string; body: string; items: string[] }[] = [];
  let currentSection: { heading: string; body: string; items: string[] } | null = null;
  let closingParagraph = "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed === "---") continue;

    if (trimmed.startsWith("# ")) {
      h1 = trimmed.replace(/^# /, "");
    } else if (trimmed.startsWith("## ")) {
      if (currentSection) sections.push(currentSection);
      currentSection = { heading: trimmed.replace(/^## /, ""), body: "", items: [] };
    } else if (trimmed.startsWith("### ")) {
      // treat sub-headings as items
      if (currentSection) currentSection.items.push(trimmed.replace(/^### /, ""));
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || /^\d+\.\s/.test(trimmed)) {
      const item = trimmed
        .replace(/^[-*]\s/, "")
        .replace(/^\d+\.\s/, "")
        .replace(/\*\*(.+?)\*\*/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
      if (currentSection) currentSection.items.push(item);
    } else if (!trimmed.startsWith("#")) {
      const clean = trimmed
        .replace(/\*\*(.+?)\*\*/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/^\*(.+)\*$/, "$1");
      if (clean && clean.length > 20) {
        if (!h1 && !intro) {
          // skip
        } else if (!intro && sections.length === 0 && !currentSection) {
          intro = clean;
        } else if (currentSection) {
          currentSection.body = (currentSection.body + " " + clean).trim();
        } else {
          closingParagraph = clean;
        }
      }
    }
  }
  if (currentSection) sections.push(currentSection);

  return { h1, intro, sections, closingParagraph };
}

const SECTION_ICONS = ["🌧️", "💧", "🏠", "🔧", "👕", "🛡️", "⚠️", "🔬", "🌿", "📋"];

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const { content, data } = getSeoMarkdownFile("blog", slug);
  const parsed = parseBlogContent(content);
  const title = parsed.h1 || data.title || slug.replace(/-/g, " ");

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
            <article>
              {/* Intro */}
              {parsed.intro && (
                <div style={{ background: "white", borderRadius: "1.5rem", padding: "2.5rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid var(--border)", marginBottom: "2rem" }}>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-mid)", lineHeight: 1.85, margin: 0 }}>
                    {parsed.intro}
                  </p>
                </div>
              )}

              {/* Sections */}
              {parsed.sections.map((section, idx) => (
                <div
                  key={idx}
                  style={{ background: "white", borderRadius: "1.5rem", padding: "2.5rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid var(--border)", marginBottom: "2rem" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                    <div style={{ width: "48px", height: "48px", background: "var(--primary)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                      {SECTION_ICONS[idx % SECTION_ICONS.length]}
                    </div>
                    <h2 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "clamp(1.15rem, 2vw, 1.5rem)", lineHeight: 1.25, margin: 0 }}>
                      {section.heading}
                    </h2>
                  </div>

                  {section.body && (
                    <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: section.items.length ? "1.25rem" : "0", fontSize: "1rem" }}>
                      {section.body}
                    </p>
                  )}

                  {section.items.length > 0 && (
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {section.items.map((item, i) => {
                        const [bold, ...rest] = item.split(":");
                        return (
                          <li key={i} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", padding: "0.85rem 1rem", background: "var(--cream)", borderRadius: "0.75rem", border: "1px solid var(--border)" }}>
                            <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "1.1rem", flexShrink: 0, marginTop: "1px" }}>✓</span>
                            <span style={{ fontSize: "0.95rem", color: "var(--text-mid)", lineHeight: 1.6 }}>
                              {rest.length > 0 ? (
                                <><strong style={{ color: "var(--text-dark)", fontWeight: 700 }}>{bold}:</strong> {rest.join(": ")}</>
                              ) : item}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}

              {/* Closing paragraph */}
              {parsed.closingParagraph && (
                <div style={{ background: "var(--primary)", borderRadius: "1.5rem", padding: "2rem 2.5rem", color: "white", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.75rem", flexShrink: 0, marginTop: "2px" }}>💡</span>
                  <p style={{ fontSize: "1rem", lineHeight: 1.75, margin: 0, color: "rgba(255,255,255,0.9)" }}>
                    {parsed.closingParagraph}
                  </p>
                </div>
              )}
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
                    <Link key={loc} href={`/locations/${loc.toLowerCase()}`} style={{ background: "white", border: "1px solid var(--border)", borderRadius: "20px", padding: "0.3rem 0.85rem", fontSize: "0.8rem", color: "var(--text-dark)", textDecoration: "none", fontWeight: 500, transition: "all 0.15s" }} className="hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)]">
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
      `}</style>

      <NewsletterSection />
      <Footer />
    </>
  );
}
