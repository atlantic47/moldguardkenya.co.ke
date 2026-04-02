import type { Metadata } from "next";
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
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org/",
    "@type": "Service",
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
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}
