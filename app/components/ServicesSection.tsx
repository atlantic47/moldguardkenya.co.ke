import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Comprehensive Mold Inspection and Assessment Procedures",
    desc: "Our team uses both visual checks and advanced technology to find mold and check the property's condition.",
    img: "/Moldguard services.jpg",
  },
  {
    title: "Our Specialized Mold Remediation Process",
    desc: "Our remediation process is key to our service. It ensures mold is removed and your property is restored.",
    img: "/Mold removal-muthaiga.jpg",
  },
  {
    title: "Structural Drying and Moisture Control Solutions",
    desc: "We fix the mold problem first, then find and fix any water leaks. This stops mold from coming back and keeps your building strong.",
    img: "/Mold removal Eastleigh.jpg",
  },
  {
    title: "Mold Prevention Strategies for Property Owners",
    desc: "Stopping mold growth early is key, and our team helps property owners do just that. Good mold prevention keeps buildings strong and people healthy.",
    img: "/Moldguard services.jpg",
  },
  {
    title: "Commercial Mold Remediation for Kenyan Businesses",
    desc: "Our team is skilled in handling all sizes of mold projects. This ensures businesses can get back to normal quickly.",
    img: "/Mold removal-muthaiga.jpg",
  },
  {
    title: "The Importance of Professional Post-Remediation Verification",
    desc: "Professional post-remediation verification is key to making sure your property is mold-free and safe.",
    img: "/Mold removal Eastleigh.jpg",
  },
];

const coreServices = [
  { href: "/services/mold-removal", icon: "🧽", label: "Mold (Mould) Removal", note: "Bathrooms from KES 8,500" },
  { href: "/services/mold-inspection", icon: "🔍", label: "Mold Inspection", note: "Flat fee KES 2,500 with written report" },
  { href: "/services/black-mold-removal", icon: "☣️", label: "Black Mold Removal", note: "Full containment and HEPA filtration" },
  { href: "/services/mold-testing", icon: "🧪", label: "Mold Testing", note: "Laboratory analysis, KES 7,500 per kit" },
];

export default function ServicesSection() {
  return (
    <section style={{ background: "white", padding: "5rem 0" }}>
      <div className="container">
        <p style={{ textAlign: "center", color: "var(--primary)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
          🛡️ What We Offer
        </p>
        <h2 className="section-heading" style={{ marginBottom: "0.5rem" }}>
          Our Services
        </h2>
        <p className="section-subheading">
          Here&apos;s What we can Do for you...
        </p>

        {/* Links to the dedicated service pages */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "0.85rem", margin: "0 0 2.5rem" }}>
          {coreServices.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              style={{ display: "flex", flexDirection: "column", gap: "0.3rem", background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1rem 1.15rem", textDecoration: "none" }}
            >
              <span style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "1rem" }}>{s.icon} {s.label}</span>
              <span style={{ color: "var(--text-mid)", fontSize: "0.85rem", lineHeight: 1.5 }}>{s.note}</span>
            </Link>
          ))}
        </div>

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
                  sizes="(max-width: 480px) 380px, (max-width: 1024px) 50vw, 280px"
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
                <Link
                  href="/services"
                  className="btn-primary"
                  style={{ fontSize: "0.8rem", padding: "0.5rem 1.25rem", width: "100%", justifyContent: "center" }}
                >
                  ▶ View {service.title}
                </Link>
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
