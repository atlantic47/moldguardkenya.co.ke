export default function InspectionProtocols() {
  const protocols = [
    { component: "Visual Inspection", desc: "Comprehensive examination of the property for signs of mold and water damage", equip: "Moisture meters, thermal imaging cameras" },
    { component: "Air Sampling", desc: "Assessment of mold spore levels in the air", equip: "Air sampling pumps, spore traps" },
    { component: "Surface Sampling", desc: "Identification of mold type and extent on surfaces", equip: "Sterile swabs, tape lifts" },
  ];

  return (
    <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 className="section-heading" style={{ marginBottom: "1.25rem", textAlign: "center", maxWidth: "800px" }}>
          Professional Mold Inspection and Assessment Protocols
        </h2>
        <div style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, textAlign: "center", maxWidth: "800px", marginBottom: "3rem" }}>
          <p style={{ marginBottom: "1rem" }}>
            Our team at <strong>MoldGuard Kenya</strong> uses strict <strong>mold inspection</strong> and <strong>assessment protocols</strong>. We make sure to find and check mold infestations accurately. We start by carefully looking at the property. We use tools like moisture meters and thermal cameras. These help us find where mold might be growing.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            We also take air and surface samples. This helps us know the type and how much mold there is. This info is key for fixing the problem. After inspecting and assessing, we make a detailed report. It shows what we found and what to do next.
          </p>
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "1rem", border: "1px solid var(--border)", display: "inline-block", textAlign: "left", marginBottom: "1rem" }}>
            <h4 style={{ fontWeight: 700, color: "var(--primary-dark)", marginBottom: "0.75rem" }}>Our protocols include:</h4>
            <ul style={{ listStylePosition: "inside", color: "var(--text-dark)", paddingLeft: "1rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Looking for mold and water damage signs</li>
              <li style={{ marginBottom: "0.5rem" }}>Finding hidden moisture with <strong>moisture mapping</strong></li>
              <li style={{ marginBottom: "0.5rem" }}>Checking air for mold spores</li>
              <li>Identifying mold types on surfaces</li>
            </ul>
          </div>
        </div>

        <div style={{ width: "100%", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "white", borderRadius: "0.5rem", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
            <thead>
              <tr style={{ background: "var(--primary-dark)", color: "white", textAlign: "left" }}>
                <th style={{ padding: "1.25rem 1rem", fontWeight: 600 }}>Inspection Component</th>
                <th style={{ padding: "1.25rem 1rem", fontWeight: 600 }}>Description</th>
                <th style={{ padding: "1.25rem 1rem", fontWeight: 600 }}>Equipment Used</th>
              </tr>
            </thead>
            <tbody>
              {protocols.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "1.25rem 1rem", color: "var(--primary-dark)", fontWeight: 600, borderRight: "1px solid var(--border)" }}>{row.component}</td>
                  <td style={{ padding: "1.25rem 1rem", color: "var(--text-mid)", fontSize: "0.95rem", borderRight: "1px solid var(--border)", lineHeight: 1.6 }}>{row.desc}</td>
                  <td style={{ padding: "1.25rem 1rem", color: "var(--text-mid)", fontSize: "0.95rem", lineHeight: 1.6 }}>{row.equip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
