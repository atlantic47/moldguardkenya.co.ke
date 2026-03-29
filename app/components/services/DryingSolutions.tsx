import Image from "next/image";

export default function DryingSolutions() {
  const tableData = [
    { srv: "Structural Drying", desc: "Use of specialized equipment to dry building materials and structures.", ben: "Prevents further mould growth, reduces moisture-related damage." },
    { srv: "Dehumidification", desc: "Control of humidity levels to prevent mould and mildew.", ben: "Creates a healthier indoor environment, minimizes downtime." },
  ];

  const benefits = [
    "They stop mould from coming back.",
    "They help avoid damage from too much moisture.",
    "They make indoor spaces healthier.",
    "They help properties open up sooner.",
  ];

  return (
    <section style={{ background: "white", padding: "5rem 0" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 4rem auto" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--primary-dark)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Structural Drying and Dehumidification Solutions
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            At MoldGuard Kenya, we know how key <strong>structural drying</strong> and <strong>dehumidification</strong> are. They stop mould from coming back after we fix it. Our solutions make sure places are dry and have no extra moisture. This makes it hard for mould to grow.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7 }}>
            <strong>Structural drying</strong> uses special tools to get moisture out of buildings. We use the latest methods and tools, like air movers and big dehumidifiers. <strong>Dehumidification</strong> is a big part of our mould fixing work. It keeps humidity levels down, stopping mould and mildew. Our team knows how to check moisture levels and use the right dehumidification methods.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          
          {/* Image + Benefits */}
          <div>
            <div style={{ position: "relative", height: "300px", borderRadius: "1.5rem", overflow: "hidden", marginBottom: "2rem" }}>
              <Image
                src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/bdc0a608-b645-429e-bd9b-0d82d8168f34.jpg"
                alt="structural drying and dehumidification"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ background: "var(--cream)", padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border)" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--primary-dark)", marginBottom: "1rem" }}>
                Our structural drying and dehumidification services have many benefits:
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                 {benefits.map((b, i) => (
                   <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "start", color: "var(--text-dark)", fontSize: "0.95rem" }}>
                     <span style={{ color: "var(--primary)" }}>✓</span>
                     <span>{b}</span>
                   </li>
                 ))}
              </ul>
            </div>
          </div>

          {/* Table & Quotes */}
          <div>
            <div style={{ background: "var(--primary-dark)", color: "white", padding: "2rem", borderRadius: "1rem", marginBottom: "2rem" }}>
              <p style={{ fontStyle: "italic", fontSize: "1.1rem", marginBottom: "1rem" }}>
                "The key to successful mould remediation lies not just in removing the mould, but in addressing the underlying moisture issues that led to its growth."
              </p>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", margin: 0 }}>
                — Mould remediation expert
              </p>
              <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                 <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                   Experts say, "The best way to stop mould is to control moisture." Our focus on <strong>structural drying</strong> and <strong>dehumidification</strong> shows our commitment to top-notch mould fixing.
                 </p>
              </div>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--primary)", textAlign: "left" }}>
                  <th style={{ padding: "1rem 0", color: "var(--primary-dark)", fontWeight: 700 }}>Service</th>
                  <th style={{ padding: "1rem 0", color: "var(--primary-dark)", fontWeight: 700 }}>Description</th>
                  <th style={{ padding: "1rem 0", color: "var(--primary-dark)", fontWeight: 700 }}>Benefits</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)", verticalAlign: "top" }}>
                    <td style={{ padding: "1rem 1rem 1rem 0", fontWeight: 700, color: "var(--text-dark)", width: "30%" }}>{row.srv}</td>
                    <td style={{ padding: "1rem", color: "var(--text-mid)", fontSize: "0.9rem", width: "40%" }}>{row.desc}</td>
                    <td style={{ padding: "1rem 0 1rem 1rem", color: "var(--text-mid)", fontSize: "0.9rem", width: "30%" }}>{row.ben}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div.container > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
