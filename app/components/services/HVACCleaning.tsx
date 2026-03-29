export default function HVACCleaning() {
  const processes = [
    { title: "Inspection", desc: "We conduct a thorough inspection of the HVAC system and ductwork to identify any mold growth or moisture issues." },
    { title: "Containment", desc: "We contain the affected area to prevent the spread of mold spores to other parts of the building." },
    { title: "Cleaning", desc: "Using specialized equipment, we clean the HVAC system and ductwork, ensuring that all mold is removed." },
    { title: "Verification", desc: "After cleaning, we verify that the system is free from mold to ensure the air quality is safe for occupants." },
  ];

  return (
    <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start" }}>
        
        <div>
          <p className="section-label" style={{ marginBottom: "0.5rem" }}>Clear Air Ducts</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--primary-dark)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Specialized Mold Cleaning for HVAC Systems and Ductwork
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            At MoldGuard Kenya, we know mold in HVAC systems and ductwork is a big health risk. Our services aim to reduce these risks. Mold in these areas can spread mold spores, worsening breathing problems and other health issues.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Mold in HVAC systems and ductwork is hard to find because it&apos;s hidden. Our team uses special tools to find where mold might grow. We use <strong>moisture mapping</strong> and <strong>leak detection</strong> to spot mold areas.
          </p>
          <div style={{ background: "white", padding: "1.5rem", borderRadius: "1rem", borderLeft: "4px solid var(--primary)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
            <p style={{ fontStyle: "italic", fontSize: "0.95rem", color: "var(--text-dark)", marginBottom: "0.5rem" }}>
              "Mold contamination in HVAC systems is a serious issue that requires immediate attention. If left unchecked, it can lead to significant health risks for occupants and necessitate costly repairs."
            </p>
            <p style={{ fontSize: "0.8rem", color: "var(--text-mid)", fontWeight: 600 }}>— Leading expert in indoor air quality</p>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "2rem" }}>
            Our Process for HVAC and Ductwork Cleaning
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {processes.map((proc, i) => (
              <div key={i} style={{ display: "flex", gap: "1.5rem", background: "white", padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border)", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "0.5rem", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.25rem", flexShrink: 0 }}>
                  {i + 1}
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-dark)", marginBottom: "0.5rem" }}>{proc.title}</h4>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", lineHeight: 1.6 }}>{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "2rem", background: "var(--primary)", color: "white", padding: "2rem", borderRadius: "1rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1rem" }}>
              Our mold cleaning services for HVAC systems and ductwork aim to remove mold and prevent it from coming back. We make sure these systems are clean and dry. This stops mold from growing again.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.7 }}>
              Choosing MoldGuard Kenya for your HVAC and <strong>ductwork cleaning</strong> means you&apos;re getting top-notch service. Our team is committed to better indoor air quality and protecting building occupants&apos; health.
            </p>
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
