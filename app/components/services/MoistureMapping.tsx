export default function MoistureMapping() {
  const points = [
    "Advanced infrared thermal imaging to spot moisture.",
    "Hygrothermograph devices to check temperature and humidity.",
    "Thorough visual checks for water damage or leaks.",
  ];

  return (
    <section style={{ background: "white", padding: "5rem 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        
        <div style={{ background: "var(--cream)", borderRadius: "1.5rem", padding: "3rem", border: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
            Detailed Moisture Mapping & Leak Detection Includes:
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {points.map((pt, i) => (
              <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>
                  {i + 1}
                </div>
                <span style={{ fontSize: "1rem", color: "var(--text-dark)", lineHeight: 1.6, fontWeight: 500 }}>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--primary)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Advanced Moisture Mapping and Leak Detection Techniques
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Our team uses advanced <strong>moisture mapping</strong> and <strong>leak detection</strong> to find and fix problems early. This way, we can stop big issues before they start.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            At <strong>MoldGuard Kenya</strong>, we know finding moisture is key to stopping mold. Our <strong>moisture mapping</strong> uses top-notch gear to see moisture levels. This helps us find trouble spots accurately.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            <em>Leak detection</em> is also a big part of what we do. We use special tools to find leaks and hidden water spots. This helps us fix the real problem, not just the symptoms.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7 }}>
            By using these methods, we get a full picture of the property. Then, we create a plan to fix mold and stop it from coming back. Our aim is to remove mold and prevent it from coming back by fixing moisture issues.
          </p>
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
