import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--primary-dark)", color: "rgba(255,255,255,0.85)" }}>
      {/* Main footer content */}
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
          padding: "4rem 1.5rem 3rem 1.5rem",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span style={{ fontSize: "1.75rem" }}>🛡️</span>
            <div>
              <span style={{ fontWeight: 800, fontSize: "1.15rem", color: "white", lineHeight: 1 }}>MoldGuard</span>
              <span style={{ display: "block", fontSize: "0.65rem", color: "rgba(255,255,255,0.6)", fontWeight: 500, letterSpacing: "0.08em" }}>KENYA</span>
            </div>
          </div>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: "1.25rem", maxWidth: "300px" }}>
            Expert mold removal and remediation services across Kenya. Protecting your health and property with professional, eco-friendly solutions.
          </p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {["f", "t", "in", "ig"].map((icon) => (
              <a
                key={icon}
                href="#"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  transition: "background 0.2s",
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: "white", fontWeight: 700, marginBottom: "1.25rem", fontSize: "0.95rem" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {["Home", "About Us", "Services", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ color: "white", fontWeight: 700, marginBottom: "1.25rem", fontSize: "0.95rem" }}>Services</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              "Mold Inspection",
              "Air Quality Testing",
              "HEPA Filtration",
              "Structural Drying",
              "Commercial Remediation",
              "Post-Remediation Verification",
            ].map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: "white", fontWeight: 700, marginBottom: "1.25rem", fontSize: "0.95rem" }}>Contact</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <li style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>
              📞 <a href="tel:0717140369" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>0717140369</a>
            </li>
            <li style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>
              📍 Development House, Moi Ave, Nairobi
            </li>
            <li style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>
              📧 info@moldguardkenya.co.ke
            </li>
            <li style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>
              🕐 Mon–Sat: 7am – 7pm
            </li>
          </ul>

          {/* Service Areas */}
          <div style={{ marginTop: "1.5rem" }}>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem", fontWeight: 600, letterSpacing: "0.05em" }}>
              SERVICE AREAS
            </p>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
              Westlands · Kilimani · Karen · Langata · Kiambu · Ruiru · Thika
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "1.25rem 1.5rem",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            padding: 0,
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>
            © {new Date().getFullYear()} MoldGuard Kenya. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > .container { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer > .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
