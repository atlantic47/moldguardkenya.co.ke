export default function CertifiedExperts() {
  const comparison = [
    { aspect: "Training and Expertise", pro: "Highly trained in mold remediation techniques and safety protocols", con: "Limited or no formal training in mold remediation" },
    { aspect: "Equipment and Resources", pro: "Access to advanced mold detection and removal equipment", con: "Limited access to specialized equipment" },
    { aspect: "Safety Protocols", pro: "Strict adherence to industry safety standards", con: "May not follow industry safety standards" },
    { aspect: "Outcome", pro: "Effective mold removal and prevention of future growth", con: "Potential for incomplete removal and recurrence" },
  ];

  const benefits = [
    "Comprehensive assessment and remediation plans tailored to your specific situation",
    "Use of advanced equipment for mold detection and removal",
    "Adherence to industry standards and safety protocols",
    "Prevention of future mold growth through effective moisture control measures",
  ];

  return (
    <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        <div style={{ textAlign: "center", maxWidth: "800px", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--primary-dark)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Why Choosing Certified Experts Matters for Your Safety
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            The safety and success of mold removal depend on certified professionals. At MoldGuard Kenya, we know mold removal is more than just getting rid of visible mold. It&apos;s about making sure your environment is safe and healthy.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7 }}>
            Certified mold removal experts have the skills, tools, and experience needed. They can find the mold&apos;s source, stop it from spreading, and remove it safely. This is key to stopping mold from coming back. Choosing <strong>certified experts</strong> like MoldGuard Kenya ensures your mold problem is handled right. Our team is dedicated to safe and effective mold removal. We aim to not only fix the current problem but also prevent it from happening again.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem", alignItems: "start", width: "100%" }}>
          <div style={{ background: "white", padding: "2rem", borderRadius: "1.5rem", border: "1px solid var(--border)", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
            <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1.5rem", fontSize: "1.25rem" }}>
              Benefits of Choosing Certified Experts
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {benefits.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                  <span style={{ color: "var(--primary)" }}>✅</span>
                  <span style={{ color: "var(--text-dark)", fontSize: "0.95rem", lineHeight: 1.5 }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ overflowX: "auto", background: "white", borderRadius: "1.5rem", border: "1px solid var(--border)", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--primary)", color: "white", textAlign: "left" }}>
                  <th style={{ padding: "1.25rem", fontWeight: 600 }}>Aspect</th>
                  <th style={{ padding: "1.25rem", fontWeight: 600 }}>Certified Experts</th>
                  <th style={{ padding: "1.25rem", fontWeight: 600 }}>Non-Certified Individuals</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i === comparison.length - 1 ? "none" : "1px solid var(--border)" }}>
                    <td style={{ padding: "1.25rem", fontWeight: 700, color: "var(--primary-dark)" }}>{row.aspect}</td>
                    <td style={{ padding: "1.25rem", color: "var(--text-mid)", fontSize: "0.9rem" }}>{row.pro}</td>
                    <td style={{ padding: "1.25rem", color: "var(--text-mid)", fontSize: "0.9rem" }}>{row.con}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          section > div.container > div:last-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
