import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsletterSection from "../components/NewsletterSection";
import PageHero from "../components/PageHero";
import { getAllSeoMetadata } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Service Locations | Mold Removal Across Kenya | MoldGuard Kenya",
  description:
    "Find professional mold removal and remediation services near you. MoldGuard Kenya serves Nairobi, Mombasa, Kiambu, Nakuru, Eldoret and surrounding areas.",
  alternates: { canonical: "https://moldguardkenya.co.ke/locations" },
};

const regions = [
  {
    name: "Nairobi",
    slug: "nairobi",
    icon: "🏙️",
    desc: "Apartments, offices & estates across the capital city",
    suburbs: ["Westlands", "Kilimani", "Karen", "Kileleshwa", "Lavington", "Runda", "Embakasi", "South B / South C", "Kasarani", "Roysambu", "Ngong Road", "Thika Road"],
    slugs: ["westlands", "kilimani", "karen", "kileleshwa", "lavington", "runda", "embakasi", "south-b-south-c", "kasarani", "roysambu", "ngong-road", "thika-road"],
  },
  {
    name: "Mombasa",
    slug: "mombasa",
    icon: "🌊",
    desc: "Coastal high-humidity mold remediation specialists",
    suburbs: ["Nyali", "Kizingo", "Bamburi", "Likoni", "Diani"],
    slugs: ["nyali", "kizingo", "bamburi", "likoni", "diani"],
  },
  {
    name: "Kiambu",
    slug: "kiambu",
    icon: "🌿",
    desc: "Highlands suburbs and satellite towns",
    suburbs: ["Thika", "Ruiru", "Juja", "Kikuyu", "Limuru"],
    slugs: ["thika", "ruiru", "juja", "kikuyu", "limuru"],
  },
  {
    name: "Nakuru",
    slug: "nakuru",
    icon: "🦩",
    desc: "Rift Valley's fastest growing urban centre",
    suburbs: ["Nakuru Town", "Naivasha", "Gilgil"],
    slugs: ["nakuru-town", "naivasha", "gilgil"],
  },
  {
    name: "Eldoret",
    slug: "eldoret",
    icon: "🏔️",
    desc: "North Rift's leading city and surrounding areas",
    suburbs: ["Eldoret Town", "Kapseret", "Langas"],
    slugs: ["eldoret-town", "kapseret", "langas"],
  },
];

export default function LocationsListingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <PageHero
          title="Our Service Locations"
          subtitle="MoldGuard Kenya dispatches certified mold remediation specialists across all major cities and suburbs in Kenya."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
          bgImage="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/3ca97677-789a-4c22-b92c-639a0abfe6ad.jpg"
        />

        {/* INTRO STRIP */}
        <section style={{ background: "white", padding: "3rem 0", borderBottom: "1px solid var(--border)" }}>
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <h2 style={{ fontWeight: 800, fontSize: "1.35rem", color: "var(--primary-dark)", marginBottom: "0.4rem" }}>
                5 Regions · {regions.reduce((acc, r) => acc + r.suburbs.length, 0)}+ Service Areas
              </h2>
              <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", margin: 0 }}>
                Certified rapid-response teams serving homes and businesses nationwide.
              </p>
            </div>
            <a href="tel:0717140369" className="btn-primary" style={{ fontSize: "0.875rem", padding: "0.65rem 1.4rem" }}>
              📞 Call for Your Area
            </a>
          </div>
        </section>

        {/* REGIONS */}
        <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {regions.map((region, ri) => (
              <div key={region.slug} style={{ background: "white", borderRadius: "1.75rem", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>

                {/* Region Header */}
                <div style={{ background: ri % 2 === 0 ? "var(--primary-dark)" : "var(--primary)", padding: "2rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "52px", height: "52px", background: "rgba(255,255,255,0.15)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem" }}>
                      {region.icon}
                    </div>
                    <div>
                      <h2 style={{ color: "white", fontWeight: 900, fontSize: "1.5rem", margin: 0, lineHeight: 1 }}>{region.name}</h2>
                      <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", margin: "0.3rem 0 0" }}>{region.desc}</p>
                    </div>
                  </div>
                  <Link
                    href={`/locations/${region.slug}`}
                    style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white", borderRadius: "999px", padding: "0.5rem 1.25rem", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", transition: "background 0.15s" }}
                    className="hover:bg-white/25"
                  >
                    View {region.name} Page →
                  </Link>
                </div>

                {/* Suburb Grid */}
                <div style={{ padding: "2rem 2.5rem" }}>
                  <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-light)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                    Areas We Serve in {region.name}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "0.75rem" }}>
                    {region.suburbs.map((suburb, si) => (
                      <Link
                        key={suburb}
                        href={`/locations/${region.slugs[si]}`}
                        style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "0.75rem", padding: "0.75rem 1rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", transition: "all 0.15s" }}
                        className="hover:border-[var(--primary)] hover:bg-[var(--primary)] group"
                      >
                        <span style={{ fontSize: "0.75rem", lineHeight: 1 }}>📍</span>
                        <span style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--text-dark)" }} className="group-hover:text-white">
                          {suburb}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", padding: "5rem 0", color: "white", textAlign: "center" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <span style={{ fontSize: "3rem" }}>🌍</span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, maxWidth: "600px" }}>
              Don&apos;t See Your Area?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "500px" }}>
              We expand our coverage regularly. Call us and we&apos;ll confirm if we can serve your specific location — often we can!
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
