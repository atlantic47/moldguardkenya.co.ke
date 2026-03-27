export default function PreventativeMaintenance() {
  const tableData = [
    { measure: "Regular Inspections", desc: "Spotting mold early", ben: "Reduces costs of fixing it" },
    { measure: "Moisture Mapping", desc: "Finding hidden water leaks", ben: "Prevents damage to your building" },
    { measure: "HVAC System Checks", desc: "Making sure air is filtered right", ben: "Improves air quality inside" },
  ];

  const plans = [
    "Regular mold inspections to spot mold early",
    "Moisture mapping to find hidden leaks or water damage",
    "HVAC system checks to make sure air is clean and flows well",
    "Dehumidification solutions for areas with too much humidity",
  ];

  return (
    <section style={{ background: "var(--primary-dark)", color: "white", padding: "5rem 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        
        <div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--gold)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Preventative Maintenance Plans to Stop Future Mold Recurrence
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            <strong>Mold prevention</strong> is more than just removing it. It&apos;s about keeping your environment healthy with the right steps. At MoldGuard Kenya, we think being proactive is the best way to stop mold problems.
          </p>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Our plans aim to find and fix issues before they get big. We check places where moisture often builds up, like basements and attics. We also look at areas around plumbing.
          </p>
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "1.5rem", borderRadius: "1rem", borderLeft: "4px solid var(--gold)" }}>
             <p style={{ fontStyle: "italic", fontSize: "1.05rem", color: "white", marginBottom: "0.25rem" }}>
               "Prevention is always better than cure, when it comes to mold growth"
             </p>
             <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>— Experts</p>
          </div>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, marginTop: "1.25rem" }}>
            Choosing a <strong>preventative maintenance</strong> plan with MoldGuard Kenya protects your property. It also makes your living or work space healthier. We&apos;re dedicated to giving you solutions that fit your needs.
          </p>
        </div>

        <div>
          <div style={{ background: "white", borderRadius: "1.5rem", padding: "2rem", color: "var(--text-dark)", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
            <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1.25rem", fontSize: "1.25rem" }}>
              Key Components of Our Plans:
            </h3>
            <ul style={{ listStyle: "none", margin: "0 0 2rem 0", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {plans.map((p, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "start", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--primary)" }}>✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1rem", fontSize: "1.15rem" }}>
              Preventative Measures
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border)", textAlign: "left" }}>
                  <th style={{ padding: "0.75rem", color: "var(--primary)", fontWeight: 700 }}>Measure</th>
                  <th style={{ padding: "0.75rem", color: "var(--primary)", fontWeight: 700 }}>Description</th>
                  <th style={{ padding: "0.75rem", color: "var(--primary)", fontWeight: 700 }}>Benefits</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "0.75rem", fontWeight: 600 }}>{row.measure}</td>
                    <td style={{ padding: "0.75rem", color: "var(--text-mid)" }}>{row.desc}</td>
                    <td style={{ padding: "0.75rem", color: "var(--text-mid)" }}>{row.ben}</td>
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
