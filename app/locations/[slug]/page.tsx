import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsletterSection from "../../components/NewsletterSection";
import { getSeoMarkdownFile, getAllSeoSlugs, getAllSeoMetadata } from "@/lib/markdown";
import PageHero from "../../components/PageHero";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data } = getSeoMarkdownFile("locations", slug);
  return {
    title: data.title || `Mold Removal in ${slug.replace(/-/g, " ")} | MoldGuard Kenya`,
    description: data.description || `Professional mold removal and inspection services in ${slug.replace(/-/g, " ")}.`,
    alternates: { canonical: `https://moldguardkenya.co.ke/locations/${slug}` },
  };
}

export async function generateStaticParams() {
  return getAllSeoSlugs("locations").map((slug) => ({ slug }));
}

// Parse markdown content into structured sections
function parseLocationContent(raw: string) {
  const lines = raw.replace(/---[\s\S]+?---/, "").trim().split("\n");

  let h1 = "";
  let intro = "";
  const sections: { heading: string; items: string[]; body?: string }[] = [];
  let currentSection: { heading: string; items: string[]; body?: string } | null = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("# ")) {
      h1 = trimmed.replace(/^# /, "");
    } else if (trimmed.startsWith("## ")) {
      if (currentSection) sections.push(currentSection);
      currentSection = { heading: trimmed.replace(/^## /, ""), items: [] };
    } else if (trimmed.startsWith("### ")) {
      if (currentSection) sections.push(currentSection);
      currentSection = { heading: trimmed.replace(/^### /, ""), items: [] };
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const item = trimmed
        .replace(/^[-*] /, "")
        .replace(/\*\*(.+?)\*\*/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
      if (currentSection) {
        currentSection.items.push(item);
      }
    } else if (!trimmed.startsWith("#") && !trimmed.startsWith("**[")) {
      const clean = trimmed
        .replace(/\*\*(.+?)\*\*/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/^\*(.+)\*$/, "$1");
      if (clean) {
        if (!h1 || (!intro && sections.length === 0)) {
          if (clean.length > 20) intro = clean;
        } else if (currentSection) {
          currentSection.body = (currentSection.body || "") + " " + clean;
        }
      }
    }
  }
  if (currentSection) sections.push(currentSection);

  return { h1, intro, sections };
}

const SERVICES_ICONS = ["🔍", "🛡️", "💨", "💧", "🧪", "🏗️"];
const PROBLEM_ICONS = ["⚠️", "🌧️", "🔧", "🏢", "💦", "🌡️"];

export default async function LocationPostPage({ params }: Props) {
  const { slug } = await params;
  const { content, data } = getSeoMarkdownFile("locations", slug);
  const locationName = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const parsed = parseLocationContent(content);

  const problemsSection = parsed.sections.find(
    (s) => s.heading.toLowerCase().includes("common") || s.heading.toLowerCase().includes("issue") || s.heading.toLowerCase().includes("problem")
  );
  const whySection = parsed.sections.find(
    (s) => s.heading.toLowerCase().includes("why") || s.heading.toLowerCase().includes("choose")
  );
  const servicesSection = parsed.sections.find(
    (s) => s.heading.toLowerCase().includes("service") || s.heading.toLowerCase().includes("offer") || s.heading.toLowerCase().includes("include")
  );

  // Nearby locations: all slugs except current, take 6
  const allLocationSlugs = getAllSeoSlugs("locations");
  const nearbyLocationSlugs = allLocationSlugs.filter((s) => s !== slug).slice(0, 6);
  const nearbyLocations = nearbyLocationSlugs.map((s) => ({
    slug: s,
    name: s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  }));

  // Top blog posts for resource strip
  const blogPosts = getAllSeoMetadata("blog").slice(0, 3);

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Mold Removal & Inspection in ${locationName}`,
    "image": "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/3ca97677-789a-4c22-b92c-639a0abfe6ad.jpg",
    "telephone": "+254717140369",
    "url": `https://moldguardkenya.co.ke/locations/${slug}`,
    "areaServed": {
      "@type": "City",
      "name": locationName,
      "addressCountry": "KE"
    },
    "parentOrganization": {
      "@type": "LocalBusiness",
      "name": "MoldGuard Kenya",
      "url": "https://moldguardkenya.co.ke/"
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
        />
        {/* HERO */}
        <PageHero
          title={parsed.h1 || `Mold Removal in ${locationName}`}
          subtitle={data.description || "Certified, rapid-response mold remediation experts serving your area."}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
            { label: locationName },
          ]}
          bgImage="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/3ca97677-789a-4c22-b92c-639a0abfe6ad.jpg"
        />

        {/* INTRO */}
        {parsed.intro && (
          <section style={{ background: "white", padding: "5rem 0" }}>
            <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
              <div>
                <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  📍 Serving {locationName}
                </p>
                <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--primary-dark)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                  Kenya&apos;s #1 Mold Removal Experts
                </h2>
                <p style={{ fontSize: "1.05rem", color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  {parsed.intro}
                </p>
                <a href="tel:0717140369" className="btn-primary">
                  📞 Get a Free Inspection
                </a>
              </div>
              <div style={{ position: "relative", height: "420px", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 20px 60px rgba(45,80,22,0.15)" }}>
                <Image
                  src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/8e626626-0a65-4016-b728-2abad223b45e.jpg"
                  alt={`Mold removal experts in ${locationName}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <style>{`@media(max-width:900px){.container{grid-template-columns:1fr !important;}}`}</style>
          </section>
        )}

        {/* PROBLEMS SECTION */}
        {problemsSection && problemsSection.items.length > 0 && (
          <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
            <div className="container">
              <p style={{ textAlign: "center", color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Why Mold Thrives Here</p>
              <h2 className="section-heading" style={{ marginBottom: "0.75rem" }}>{problemsSection.heading}</h2>
              <p className="section-subheading">{problemsSection.body?.trim() || `Common mold challenges that ${locationName} residents face.`}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
                {problemsSection.items.map((item, i) => {
                  const [title, ...rest] = item.split(":");
                  return (
                    <div key={i} style={{ background: "white", borderRadius: "1.25rem", padding: "2rem", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", border: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      <div style={{ width: "48px", height: "48px", background: "var(--primary)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                        {PROBLEM_ICONS[i % PROBLEM_ICONS.length]}
                      </div>
                      <h3 style={{ fontWeight: 700, color: "var(--primary-dark)", fontSize: "1rem", margin: 0 }}>
                        {rest.length ? title : `Issue ${i + 1}`}
                      </h3>
                      <p style={{ color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                        {rest.length ? rest.join(": ") : item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* WHY CHOOSE US */}
        {whySection && (
          <section style={{ background: "var(--primary-dark)", padding: "5rem 0", color: "white" }}>
            <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
              <div>
                <p style={{ color: "var(--gold-light)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  Certified Experts
                </p>
                <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.5rem" }}>
                  {whySection.heading}
                </h2>
                <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "1rem" }}>
                  {whySection.body?.trim()}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {["IICRC Certified", "99.97% HEPA Filtration", "Moisture Mapping", "Same-Day Response"].map((b) => (
                    <span key={b} style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "0.4rem 1rem", fontSize: "0.8rem", fontWeight: 600 }}>{b}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "🔬", title: "Root Cause Diagnosis", desc: "We identify and fix the moisture source, not just the visible mold." },
                  { icon: "🧹", title: "Physical Extraction", desc: "Industrial-grade equipment removes every spore from the environment." },
                  { icon: "✅", title: "Post-Remediation Verification", desc: "Third-party air quality testing confirms your space is safe." },
                ].map((pt) => (
                  <div key={pt.title} style={{ background: "rgba(255,255,255,0.08)", borderRadius: "1rem", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.5rem" }}>{pt.icon}</span>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.25rem" }}>{pt.title}</h4>
                      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", margin: 0 }}>{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <style>{`@media(max-width:900px){.container{grid-template-columns:1fr !important;}}`}</style>
          </section>
        )}

        {/* SERVICES */}
        {servicesSection && servicesSection.items.length > 0 && (
          <section style={{ background: "white", padding: "5rem 0" }}>
            <div className="container">
              <p style={{ textAlign: "center", color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                What We Offer
              </p>
              <h2 className="section-heading" style={{ marginBottom: "3rem" }}>{servicesSection.heading}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
                {servicesSection.items.map((item, i) => {
                  const [title, ...rest] = item.split(":");
                  return (
                    <div key={i} style={{ background: "var(--cream)", borderRadius: "1.25rem", padding: "2rem", border: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "0.75rem", transition: "box-shadow 0.2s", cursor: "default" }} className="card">
                      <div style={{ width: "44px", height: "44px", background: "var(--primary)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.35rem" }}>
                        {SERVICES_ICONS[i % SERVICES_ICONS.length]}
                      </div>
                      <h3 style={{ fontWeight: 700, color: "var(--primary-dark)", fontSize: "0.95rem", margin: 0 }}>
                        {rest.length ? title : item}
                      </h3>
                      {rest.length > 0 && (
                        <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
                          {rest.join(": ")}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── NEARBY LOCATIONS ── */}
        <section style={{ background: "white", padding: "3.5rem 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Also Serving</p>
            <h2 style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--primary-dark)", marginBottom: "1.25rem" }}>Mold Removal in Nearby Areas</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1.25rem" }}>
              {nearbyLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-dark)", textDecoration: "none", transition: "all 0.15s" }}
                  className="nearby-pill"
                >
                  📍 {loc.name}
                </Link>
              ))}
              <Link href="/locations" style={{ background: "var(--primary)", color: "white", border: "1px solid var(--primary)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.82rem", fontWeight: 700, textDecoration: "none" }}>
                View All Locations →
              </Link>
            </div>
          </div>
        </section>

        {/* ── BLOG RESOURCES ── */}
        <section style={{ background: "var(--cream)", padding: "3.5rem 0" }}>
          <div className="container">
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Learn More</p>
            <h2 style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--primary-dark)", marginBottom: "1.25rem" }}>Mold Prevention & Removal Guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ background: "white", borderRadius: "1rem", border: "1px solid var(--border)", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", height: "100%", transition: "box-shadow 0.2s" }} className="blog-resource-card">
                    <span style={{ fontSize: "1.25rem" }}>📘</span>
                    <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-dark)", margin: 0, lineHeight: 1.4 }}>{post.data.title || post.slug.replace(/-/g, " ")}</p>
                    <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.78rem", marginTop: "auto" }}>Read Guide →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <style>{`
          .nearby-pill:hover { background: var(--primary) !important; color: white !important; border-color: var(--primary) !important; }
          .blog-resource-card:hover { box-shadow: 0 6px 20px rgba(45,80,22,0.1); }
        `}</style>

        {/* CTA BANNER */}
        <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", padding: "5rem 0", color: "white", textAlign: "center" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <span style={{ fontSize: "3rem" }}>🏠</span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, maxWidth: "600px" }}>
              Protect Your {locationName} Property Today
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "500px" }}>
              Don&apos;t let mold compromise your family&apos;s health or the value of your investment. Our certified rapid-response team covers all of {locationName}.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href="tel:0717140369" className="btn-gold" style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}>
                📞 Call 0717140369
              </a>
              <Link href="/contact" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.6)", fontSize: "1rem", padding: "0.85rem 2rem" }}>
                WhatsApp Us →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}
