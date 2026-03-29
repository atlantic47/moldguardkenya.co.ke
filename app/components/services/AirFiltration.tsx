export default function AirFiltration() {
  const tableData = [
    { tech: "HEPA Purification", eff: "99.97% efficient at 0.3 microns", ben: "Captures mould spores, dust, and allergens" },
    { tech: "Industrial-Grade Air Filtration", eff: "High capacity for air processing", ben: "Removes a wide range of airborne contaminants" },
  ];

  const benefits = [
    "They effectively remove mould spores and other airborne pathogens.",
    "They improve indoor air quality, making it safer for people inside.",
    "They lower the chance of mould coming back by getting rid of spores that could grow again.",
  ];

  return (
    <section style={{ background: "white", padding: "5rem 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        
        <div style={{ order: 2 }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--primary-dark)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Industrial-Grade Air Filtration and HEPA Purification
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            We use <strong>industrial-grade air filtration</strong> systems and <strong>HEPA purification</strong> in <strong>mould remediation</strong>. These systems are key in catching mould spores and other airborne pollutants. They greatly enhance the air quality inside.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            <em>HEPA (High Efficiency Particulate Air)</em> filters can catch 99.97% of particles as small as 0.3 microns. This includes mould spores, dust, and allergens. By adding <strong>HEPA purification</strong> to our <strong>mould removal</strong> process, we make sure the air is clean. This reduces the chance of more contamination.
          </p>
          <div style={{ background: "var(--cream)", padding: "1.5rem", borderRadius: "1rem", borderLeft: "4px solid var(--primary)" }}>
            <h4 style={{ fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.75rem" }}>
              The advantages of industrial-grade air filtration and HEPA purification are many:
            </h4>
            <ul style={{ listStylePosition: "inside", padding: 0, margin: 0 }}>
              {benefits.map((b, i) => (
                <li key={i} style={{ color: "var(--text-mid)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ order: 1 }}>
          <div style={{ background: "white", borderRadius: "1.5rem", border: "1px solid var(--border)", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
            <div style={{ background: "var(--primary)", padding: "1.5rem", color: "white", textAlign: "center" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1.25rem", margin: 0 }}>Air Quality Technology</h3>
            </div>
            <div style={{ padding: "0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--cream)" }}>
                    <th style={{ padding: "1rem 1.5rem", color: "var(--primary-dark)", fontWeight: 600 }}>Technology</th>
                    <th style={{ padding: "1rem 1.5rem", color: "var(--primary-dark)", fontWeight: 600 }}>Efficiency</th>
                    <th style={{ padding: "1rem 1.5rem", color: "var(--primary-dark)", fontWeight: 600 }}>Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i === tableData.length - 1 ? "none" : "1px solid var(--border)" }}>
                      <td style={{ padding: "1.25rem 1.5rem", fontWeight: 700, color: "var(--text-dark)" }}>{row.tech}</td>
                      <td style={{ padding: "1.25rem 1.5rem", color: "var(--text-mid)", fontSize: "0.95rem" }}>{row.eff}</td>
                      <td style={{ padding: "1.25rem 1.5rem", color: "var(--text-mid)", fontSize: "0.95rem" }}>{row.ben}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ background: "var(--cream)", padding: "1.25rem 1.5rem", borderTop: "1px solid var(--border)", textAlign: "center" }}>
              <p style={{ color: "var(--text-mid)", fontSize: "0.85rem", fontStyle: "italic", margin: 0 }}>
                By using these advanced technologies together, we offer a complete solution for mould removal. It not only fixes the current problem but also helps stop mould from coming back.
              </p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div.container { grid-template-columns: 1fr !important; gap: 3rem !important; }
          section > div.container > div:nth-child(1) { order: 1 !important; }
          section > div.container > div:nth-child(2) { order: 2 !important; }
        }
      `}</style>
    </section>
  );
}
