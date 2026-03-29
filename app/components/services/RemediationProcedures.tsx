export default function RemediationProcedures() {
  const steps = [
    "Containment of the affected area to prevent cross-contamination",
    "Removal of mould-infested materials and debris",
    "Cleaning and disinfecting of surfaces",
    "Verification of the effectiveness of the remediation process",
  ];

  return (
    <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>Safe & Effective</p>
        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--primary-dark)", lineHeight: 1.2, marginBottom: "1.5rem", maxWidth: "800px" }}>
          Mould Remediation and Removal Procedures
        </h2>
        
        <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "800px", marginBottom: "1.25rem" }}>
          At MoldGuard Kenya, we focus on keeping our clients safe and healthy. We use the best <strong>mould remediation</strong> and <strong>mould removal</strong> methods. Our team has the latest tools and techniques to remove mould from your property. First, we check the affected area to see how much mould there is. Then, we make a plan to get rid of the mould. We wear <em>personal protective equipment</em> to avoid mould spores.
        </p>
        
        <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "800px", marginBottom: "3rem" }}>
          We use <strong>specialized cleaning solutions</strong> to kill and remove mould. Our team knows how to handle different moulds and surfaces. This ensures the process is done right and safely.
        </p>

        <div style={{ width: "100%", maxWidth: "900px" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
            The mould removal process includes several steps:
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {steps.map((step, i) => (
              <div key={i} style={{ background: "white", padding: "2rem", borderRadius: "1rem", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", border: "1px solid var(--border)", position: "relative" }}>
                <div style={{ position: "absolute", top: "-1rem", left: "1.5rem", width: "40px", height: "40px", borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.25rem", border: "4px solid var(--cream)" }}>
                  {i + 1}
                </div>
                <p style={{ marginTop: "0.5rem", fontWeight: 600, color: "var(--text-dark)", lineHeight: 1.5, fontSize: "0.95rem" }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "800px", marginTop: "3rem" }}>
          We follow these steps and use the latest technology. This makes our <strong>mould remediation</strong> and <strong>mould removal</strong> services safe and effective for our clients.
        </p>

      </div>
    </section>
  );
}
