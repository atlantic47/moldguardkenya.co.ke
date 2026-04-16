import type { Metadata } from "next";
import Link from "next/link";
import { getAllSeoMetadata } from "@/lib/markdown";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsletterSection from "../components/NewsletterSection";
import ServicesHero from "../components/services/ServicesHero";
import HealthRisks from "../components/services/HealthRisks";
import ServicesList from "../components/services/ServicesList";
import InspectionProtocols from "../components/services/InspectionProtocols";
import MoistureMapping from "../components/services/MoistureMapping";
import ContainmentStrategies from "../components/services/ContainmentStrategies";
import AirFiltration from "../components/services/AirFiltration";
import RemediationProcedures from "../components/services/RemediationProcedures";
import DryingSolutions from "../components/services/DryingSolutions";
import HVACCleaning from "../components/services/HVACCleaning";
import Verification from "../components/services/Verification";
import PreventativeMaintenance from "../components/services/PreventativeMaintenance";
import EmergencyResponse from "../components/services/EmergencyResponse";
import CertifiedExperts from "../components/services/CertifiedExperts";
import InsuranceClaims from "../components/services/InsuranceClaims";
import ContactSection from "../components/services/ContactSection";
import ServicesFAQ from "../components/services/ServicesFAQ";

export const metadata: Metadata = {
  title: "Our Mold Removal Services | Inspections & Remediation | MoldGuard Kenya",
  description: "Explore our comprehensive mold remediation services. From thermal moisture mapping and HEPA air filtration to toxic black mold extraction and structural drying across Kenya.",
  alternates: { canonical: "https://moldguardkenya.co.ke/services" },
};

export default function ServicesPage() {
  const blogPosts = getAllSeoMetadata("blog").slice(0, 4);
  const serviceSchema = {
    "@context": "https://schema.org/",
    "@type": "Service",
    "name": "Mold Removal & Water Damage Restoration",
    "serviceType": "Water damage restoration service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "MoldGuard Kenya",
      "telephone": "+254717140369",
      "url": "https://moldguardkenya.co.ke/"
    },
    "description": "Comprehensive mold remediation services including thermal moisture mapping, HEPA air filtration, toxic black mold extraction, and structural drying.",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Kenya"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mold Remediation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mold Inspection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Air Quality Testing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mold Removal & Remediation"
          }
        }
      ]
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <ServicesHero />
        <HealthRisks />
        <ServicesList />
        <InspectionProtocols />
        <MoistureMapping />
        <ContainmentStrategies />
        <AirFiltration />
        <RemediationProcedures />
        <DryingSolutions />
        <HVACCleaning />
        <Verification />
        <PreventativeMaintenance />
        <EmergencyResponse />
        <CertifiedExperts />
        <InsuranceClaims />
        <ContactSection />
        
        {/* Conclusion block mapping the final two concluding paragraphs from services.md */}
        <section style={{ background: "var(--cream)", padding: "5rem 0", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              Conclusion
            </h2>
            <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Mold removal is key to keeping your home or office safe and healthy. At MoldGuard Kenya, we know how important it is to act fast and do it right. We offer everything from checking for mold to stopping it from coming back. We&apos;ve talked about how mold can harm your health and why using advanced tools to find moisture is important. Our team is ready to tackle mold problems in any building. We tailor our solutions to fit your needs.
            </p>
            <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              Choosing MoldGuard Kenya means you&apos;re working with certified pros who care about your safety and property. We handle insurance claims and offer plans to keep mold away for good. Ready for a mold-free space? Call us at 0717140469 for a consultation. Count on MoldGuard Kenya for top-notch mold removal and repair services.
            </p>
          </div>
        </section>

        <ServicesFAQ />

        {/* ── BLOG RESOURCES ── */}
        <section style={{ background: "var(--cream)", padding: "4rem 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Useful Resources</p>
            <h2 style={{ fontWeight: 800, fontSize: "1.35rem", color: "var(--primary-dark)", marginBottom: "1.5rem" }}>Expert Mold Removal Guides for Kenyan Property Owners</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ background: "white", borderRadius: "1rem", border: "1px solid var(--border)", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", height: "100%", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "box-shadow 0.2s, transform 0.2s" }} className="svc-blog-card">
                    <span style={{ fontSize: "1.2rem" }}>📖</span>
                    <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-dark)", margin: 0, lineHeight: 1.4 }}>{post.data.title || post.slug.replace(/-/g, " ")}</p>
                    <p style={{ color: "var(--text-mid)", fontSize: "0.8rem", lineHeight: 1.5, margin: 0, flex: 1 }}>{(post.data.description || "").slice(0, 90)}{post.data.description?.length > 90 ? "..." : ""}</p>
                    <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.78rem" }}>Read Guide →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <style>{`.svc-blog-card:hover { box-shadow: 0 8px 24px rgba(45,80,22,0.1) !important; transform: translateY(-2px); }`}</style>
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}
