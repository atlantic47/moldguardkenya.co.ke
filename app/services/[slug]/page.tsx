import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsletterSection from "../../components/NewsletterSection";
import PageHero from "../../components/PageHero";
import { servicePages, getServicePage } from "@/lib/data/services";
import { buildMetadata, breadcrumbSchema, BUSINESS_ID, SITE_URL } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

// Only the slugs in lib/data/services.ts exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

const POPULAR_AREAS = [
  { slug: "nairobi", name: "Nairobi" },
  { slug: "karen", name: "Karen" },
  { slug: "kilimani", name: "Kilimani" },
  { slug: "westlands", name: "Westlands" },
  { slug: "lavington", name: "Lavington" },
  { slug: "mombasa", name: "Mombasa" },
];

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const url = `${SITE_URL}/services/${service.slug}`;
  const others = servicePages.filter((s) => s.slug !== service.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.h1,
    "serviceType": service.serviceType,
    "description": service.description,
    "url": url,
    "image": `${SITE_URL}/Moldguard services.jpg`,
    "provider": {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      "name": "MoldGuard Kenya",
      "telephone": "+254710907628",
      "url": SITE_URL,
    },
    "areaServed": [
      { "@type": "City", "name": "Nairobi" },
      { "@type": "City", "name": "Mombasa" },
      { "@type": "Country", "name": "Kenya" },
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "KES",
      "lowPrice": service.priceRange.low,
      "highPrice": service.priceRange.high,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  const crumbs = breadcrumbSchema([
    { name: "Home", path: "" },
    { name: "Services", path: "/services" },
    { name: service.navLabel, path: `/services/${service.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <Navbar />
      <main>
        <PageHero
          title={service.h1}
          subtitle={service.description}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.navLabel },
          ]}
        />

        <section style={{ background: "white", padding: "4rem 0" }}>
          <div className="container service-prose" style={{ maxWidth: "860px" }}>
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", margin: "1.5rem 0 0" }}>
              <a href="tel:0710907628" className="btn-primary">📞 Call 0710907628</a>
              <Link href="/bookings" className="service-btn-outline">Book an Inspection</Link>
            </div>
          </div>
        </section>

        {/* PRICES */}
        <section style={{ background: "var(--cream)", padding: "4rem 0" }}>
          <div className="container service-prose" style={{ maxWidth: "860px" }}>
            <h2>{service.priceHeading}</h2>
            <div style={{ overflowX: "auto" }}>
              <table className="service-price-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {service.priceRows.map((row) => (
                    <tr key={row.item}>
                      <td>{row.item}</td>
                      <td style={{ fontWeight: 700, color: "var(--primary-dark)", whiteSpace: "nowrap" }}>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: "1rem" }}>{service.priceNote}</p>
            <p>
              For a full breakdown, read our{" "}
              <Link href="/blog/cost-of-mold-removal-in-kenya">guide to mold removal costs in Kenya</Link>.
            </p>
          </div>
        </section>

        {/* BODY SECTIONS */}
        <section style={{ background: "white", padding: "4rem 0" }}>
          <div className="container service-prose" style={{ maxWidth: "860px" }}>
            {service.sections.map((sec) => (
              <div key={sec.heading} style={{ marginBottom: "2.5rem" }}>
                <h2>{sec.heading}</h2>
                {sec.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {sec.bullets && (
                  <ul>
                    {sec.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "var(--cream)", padding: "4rem 0" }}>
          <div className="container service-prose" style={{ maxWidth: "860px" }}>
            <h2>Frequently Asked Questions</h2>
            {service.faqs.map((f) => (
              <div key={f.q} style={{ background: "white", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem 1.5rem", marginBottom: "0.85rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--primary-dark)", margin: "0 0 0.4rem" }}>{f.q}</h3>
                <p style={{ margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RELATED SERVICES + AREAS */}
        <section style={{ background: "white", padding: "4rem 0", borderTop: "1px solid var(--border)" }}>
          <div className="container" style={{ maxWidth: "860px" }}>
            <h2 style={{ fontWeight: 800, fontSize: "1.35rem", color: "var(--primary-dark)", marginBottom: "1rem" }}>Related Services</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "0.85rem", marginBottom: "2.5rem" }}>
              {others.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="service-card-link">
                  <span style={{ fontSize: "1.4rem" }}>{s.icon}</span>
                  <span>{s.navLabel}</span>
                </Link>
              ))}
              <Link href="/services/air-scrubbing" className="service-card-link">
                <span style={{ fontSize: "1.4rem" }}>🌬️</span>
                <span>Air Scrubbing &amp; Spore Control</span>
              </Link>
              <Link href="/services" className="service-card-link">
                <span style={{ fontSize: "1.4rem" }}>🛡️</span>
                <span>All Mold Remediation Services</span>
              </Link>
            </div>

            <h2 style={{ fontWeight: 800, fontSize: "1.35rem", color: "var(--primary-dark)", marginBottom: "1rem" }}>Areas We Serve</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {POPULAR_AREAS.map((a) => (
                <Link key={a.slug} href={`/locations/${a.slug}`} className="service-pill">
                  📍 Mold removal in {a.name}
                </Link>
              ))}
              <Link href="/locations" className="service-pill" style={{ background: "var(--primary)", color: "white", borderColor: "var(--primary)" }}>
                View All Locations →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--primary-dark)", padding: "4rem 0", color: "white", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "720px" }}>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
              Book a Site Inspection for KES 2,500
            </h2>
            <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.8, marginBottom: "1.75rem" }}>
              Find out where the damp is coming from and what it will cost to fix before you spend anything on treatment.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
              <a href="tel:0710907628" className="btn-primary">📞 Call 0710907628</a>
              <Link href="/bookings" className="service-btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.6)" }}>
                Book Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <NewsletterSection />
      <Footer />
      <style>{`
        .service-prose h2 { font-weight: 800; font-size: clamp(1.4rem, 2.6vw, 1.85rem); color: var(--primary-dark); line-height: 1.25; margin: 0 0 0.85rem; }
        .service-prose p { color: var(--text-mid); line-height: 1.8; margin: 0 0 1rem; font-size: 1.02rem; }
        .service-prose ul { color: var(--text-mid); line-height: 1.8; padding-left: 1.25rem; margin: 0 0 1rem; list-style: disc; }
        .service-prose li { margin-bottom: 0.4rem; }
        .service-prose a:not(.btn-primary):not(.service-btn-outline) { color: var(--primary); font-weight: 600; text-decoration: underline; }
        .service-price-table { width: 100%; border-collapse: collapse; background: white; border-radius: 1rem; overflow: hidden; border: 1px solid var(--border); }
        .service-price-table th { background: var(--primary-dark); color: white; text-align: left; padding: 0.85rem 1.1rem; font-size: 0.9rem; }
        .service-price-table td { padding: 0.85rem 1.1rem; border-top: 1px solid var(--border); color: var(--text-mid); line-height: 1.5; }
        .service-btn-outline { display: inline-flex; align-items: center; border: 2px solid var(--primary); color: var(--primary); font-weight: 700; border-radius: 999px; padding: 0.7rem 1.5rem; text-decoration: none; }
        .service-card-link { display: flex; align-items: center; gap: 0.75rem; background: var(--cream); border: 1px solid var(--border); border-radius: 1rem; padding: 1rem 1.15rem; font-weight: 700; color: var(--primary-dark); text-decoration: none; }
        .service-card-link:hover, .service-pill:hover { border-color: var(--primary); }
        .service-pill { background: var(--cream); border: 1px solid var(--border); border-radius: 999px; padding: 0.45rem 1.1rem; font-size: 0.85rem; font-weight: 600; color: var(--text-dark); text-decoration: none; }
      `}</style>
    </>
  );
}
