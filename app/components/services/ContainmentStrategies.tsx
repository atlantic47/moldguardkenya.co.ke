export default function ContainmentStrategies() {
  const tableData = [
    { method: "Physical Barriers", desc: "Heavy-duty plastic sheeting and tape", benefit: "Effective isolation of contaminated area" },
    { method: "Negative Air Machines", desc: "Creates negative pressure environment", benefit: "Prevents mould spores from escaping" },
    { method: "Air Scrubbers", desc: "Further purifies the air", benefit: "Enhances indoor air quality" },
  ];

  return (
    <section style={{ background: "var(--primary-dark)", padding: "5rem 0", color: "white" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        
        <div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--gold)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Comprehensive Mould Containment Strategies for Residential Properties
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            <strong>Mould containment</strong> is key in <strong>mould remediation</strong>. Our team at MoldGuard Kenya uses detailed strategies for homes. This step stops mould spores from spreading, keeping homes safe and healthy.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            We use physical barriers to keep mould in one place. <strong>Heavy-duty plastic sheeting and tape seal off the moldy area</strong>. This stops mould spores from getting out during cleanup.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            We also use negative air machines. These machines keep the air pressure low in the mould area. This <em>negative pressure</em> makes sure air flows in and is cleaned by HEPA machines. This stops mould spores from spreading outside.
          </p>

          <div style={{ background: "rgba(255,255,255,0.1)", padding: "1.5rem", borderRadius: "1rem", marginBottom: "1.5rem", borderLeft: "4px solid var(--gold)" }}>
            <p style={{ fontStyle: "italic", fontSize: "1.05rem", color: "white", marginBottom: "0.5rem" }}>
              "The goal of containment is to isolate the moldy area to prevent further contamination. This is achieved through the use of barriers and negative air pressure."
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--gold)", fontWeight: 600 }}>— Experts say, "Containment is vital for mould removal. Without it, mould can spread easily."</p>
          </div>

          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7 }}>
            We mix these methods for effective <strong>mould containment</strong>. This protects people&apos;s health and prevents damage. MoldGuard Kenya is dedicated to providing top mould containment services for homes.
          </p>
        </div>

        <div>
          <div style={{ background: "white", borderRadius: "1rem", padding: "2rem", color: "var(--text-dark)", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
            <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1.25rem", fontSize: "1.25rem" }}>
              Our mould containment plans also include:
            </h3>
            <ul style={{ listStyle: "none", margin: "0 0 2rem 0", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "start" }}>
                <span style={{ color: "var(--primary)" }}>✅</span>
                <span>Sealing vents and ducts to stop mould spread</span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "start" }}>
                <span style={{ color: "var(--primary)" }}>✅</span>
                <span>Using air scrubbers to clean the air</span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "start" }}>
                <span style={{ color: "var(--primary)" }}>✅</span>
                <span>Following strict rules for workers to avoid mould spread</span>
              </li>
            </ul>

            <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1rem", fontSize: "1.15rem" }}>Containment Methods</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem", color: "var(--primary)", fontWeight: 700 }}>Method</th>
                  <th style={{ padding: "0.75rem", color: "var(--primary)", fontWeight: 700 }}>Description</th>
                  <th style={{ padding: "0.75rem", color: "var(--primary)", fontWeight: 700 }}>Benefits</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "0.75rem", fontWeight: 600 }}>{row.method}</td>
                    <td style={{ padding: "0.75rem", color: "var(--text-mid)" }}>{row.desc}</td>
                    <td style={{ padding: "0.75rem", color: "var(--text-mid)" }}>{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div.container { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
