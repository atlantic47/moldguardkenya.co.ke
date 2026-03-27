export default function HealthRisks() {
  const risks = [
    { issue: "Respiratory Problems", desc: "Coughing, wheezing, and difficulty breathing due to mold spores irritating the lungs.", group: "Individuals with asthma or other respiratory conditions" },
    { issue: "Allergic Reactions", desc: "Sneezing, runny nose, and skin irritation caused by mold allergens.", group: "People with allergies" },
    { issue: "Infections", desc: "In rare cases, mold can cause infections in people with severely weakened immune systems.", group: "Individuals undergoing chemotherapy, with HIV/AIDS, or taking immunosuppressive drugs" },
  ];

  const commonRisksList = [
    "Respiratory issues, such as coughing and wheezing",
    "Allergic reactions, including sneezing and skin irritation",
    "Aggravation of existing conditions like asthma",
    "Infections in individuals with compromised immune systems",
  ];

  return (
    <section style={{ background: "white", padding: "5rem 0" }}>
      <div className="container">
        <h2 className="section-heading" style={{ marginBottom: "1rem" }}>
          Understanding the Health Risks of Indoor Mold Growth
        </h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            It&apos;s important to know how indoor mold affects our health. Mold can cause mild allergies to serious breathing problems. This is why keeping our homes mold-free is key.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7 }}>
            Mold can harm people in different ways. Those with weak immune systems, asthma, or allergies are at higher risk. It&apos;s vital to be aware of these risks. Quick action is needed to stop mold growth. Regular checks and fast cleanup are essential for a healthy home. Knowing the risks of indoor mold helps us act early. We can prevent mold and keep our homes safe and healthy.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem", alignItems: "start" }}>
          <div style={{ background: "var(--cream)", padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border)" }}>
            <h3 style={{ fontWeight: 700, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
              Common Health Risks Associated with Indoor Mold Exposure:
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {commonRisksList.map((item, idx) => (
                <li key={idx} style={{ display: "flex", gap: "0.75rem", alignItems: "start", color: "var(--text-dark)", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--primary)" }}>✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontWeight: 700, color: "var(--primary-dark)", marginBottom: "1.25rem" }}>The dangers of indoor mold are real. Here&apos;s why:</h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid var(--border)", borderRadius: "0.5rem", overflow: "hidden" }}>
                <thead>
                  <tr style={{ background: "var(--primary)", color: "white", textAlign: "left" }}>
                    <th style={{ padding: "1rem", fontWeight: 600 }}>Health Issue</th>
                    <th style={{ padding: "1rem", fontWeight: 600 }}>Description</th>
                    <th style={{ padding: "1rem", fontWeight: 600 }}>Vulnerable Groups</th>
                  </tr>
                </thead>
                <tbody>
                  {risks.map((row, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? "white" : "var(--cream)", borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "1rem", color: "var(--primary-dark)", fontWeight: 600, borderRight: "1px solid var(--border)" }}>{row.issue}</td>
                      <td style={{ padding: "1rem", color: "var(--text-mid)", fontSize: "0.9rem", borderRight: "1px solid var(--border)" }}>{row.desc}</td>
                      <td style={{ padding: "1rem", color: "var(--text-mid)", fontSize: "0.9rem" }}>{row.group}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > .container > div:last-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
