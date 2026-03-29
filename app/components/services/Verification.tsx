export default function Verification() {
  const steps = [
    "Rigorous visual inspections for signs of mold or moisture",
    "Advanced air quality testing and surface sampling",
    "Clearance certification upon successful verification"
  ];

  return (
    <section style={{ background: "white", padding: "5rem 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        
        <div>
          <p className="section-label" style={{ marginBottom: "0.5rem" }}>Guaranteed Results</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--primary-dark)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Post-Remediation Verification and Clearance Testing
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Our <strong>post-remediation verification</strong> and <strong>clearance testing</strong> are key steps. They confirm that mold removal was successful. At MoldGuard Kenya, we&apos;re proud of our detailed work. We make sure the area is not just clean but also safe for people to live in.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            After we finish removing mold, we do a series of tests. These tests check if the area is safe again. We look for any signs of mold or moisture with <strong>visual inspections</strong>. We also use advanced tech for <em>air quality testing</em> and <em>surface sampling</em>. These help us find any mold spores left behind. These tests are important to show if the removal was successful.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7 }}>
            Our <strong>clearance testing</strong> gives our clients the confidence that their property is safe and healthy. We give a <strong>clearance certificate</strong> when our tests show everything is okay. This lets our clients feel at ease. The value of <strong>post-remediation verification</strong> and <strong>clearance testing</strong> is huge. It&apos;s a critical step that makes sure the mold removal was done right. It protects the health and safety of everyone living there.
          </p>
        </div>

        <div style={{ background: "var(--cream)", padding: "3rem", borderRadius: "1.5rem", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "2rem", textAlign: "center" }}>
            Our Verification Process
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {steps.map((step, i) => (
              <li key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "center", background: "white", padding: "1.5rem", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>
                  ✓
                </div>
                <span style={{ fontSize: "0.95rem", color: "var(--text-dark)", lineHeight: 1.5, fontWeight: 500 }}>{step}</span>
              </li>
            ))}
          </ul>
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
