import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Comprehensive Mold Inspection and Assessment Procedures",
    desc: "Our team uses both visual checks and advanced technology to find mold and check the property's condition.",
    img: "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/dea2f413-d0d2-44f8-9a49-6a3ad43cdddd.jpg",
  },
  {
    title: "Our Specialized Mold Remediation Process",
    desc: "Our remediation process is key to our service. It ensures mold is removed and your property is restored.",
    img: "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/5b8b2f77-4f18-4ddb-bec8-bce550f34123.jpg",
  },
  {
    title: "Structural Drying and Moisture Control Solutions",
    desc: "We fix the mold problem first, then find and fix any water leaks. This stops mold from coming back and keeps your building strong.",
    img: "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/fefaad0e-262d-46a7-86ca-9fd206fc233d.jpg",
  },
  {
    title: "Mold Prevention Strategies for Property Owners",
    desc: "Stopping mold growth early is key, and our team helps property owners do just that. Good mold prevention keeps buildings strong and people healthy.",
    img: "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/dea2f413-d0d2-44f8-9a49-6a3ad43cdddd.jpg",
  },
  {
    title: "Commercial Mold Remediation for Kenyan Businesses",
    desc: "Our team is skilled in handling all sizes of mold projects. This ensures businesses can get back to normal quickly.",
    img: "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/5b8b2f77-4f18-4ddb-bec8-bce550f34123.jpg",
  },
  {
    title: "The Importance of Professional Post-Remediation Verification",
    desc: "Professional post-remediation verification is key to making sure your property is mold-free and safe.",
    img: "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/fefaad0e-262d-46a7-86ca-9fd206fc233d.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section style={{ background: "white", padding: "5rem 0" }}>
      <div className="container">
        <p style={{ textAlign: "center", color: "var(--primary)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
          🌿 What We Offer
        </p>
        <h2 className="section-heading" style={{ marginBottom: "0.5rem" }}>
          Our Services
        </h2>
        <p className="section-subheading">
          Here&apos;s What we can Do for you...
        </p>

        <div
          className="services-grid"
          style={{ display: "grid", gap: "1.5rem", marginBottom: "3rem" }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="card"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "200px" }}>
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Content */}
              <div style={{ padding: "1.25rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-dark)", marginBottom: "0.5rem" }}>
                  {service.title}
                </h3>
                <p style={{ color: "var(--text-mid)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {service.desc}
                </p>
                <a
                  href="tel:0717140369"
                  className="btn-primary"
                  style={{ fontSize: "0.8rem", padding: "0.5rem 1.25rem", width: "100%", justifyContent: "center" }}
                >
                  ▶ Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/services" className="btn-primary" style={{ fontSize: "0.9rem" }}>
            View Our Services
          </Link>
        </div>
      </div>

      <style>{`
        .services-grid { grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
