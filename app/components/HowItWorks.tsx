export default function HowItWorks() {
  const steps = [
    {
      icon: "1",
      title: "Containment Strategies",
      desc: "We use strict containment strategies to stop mould spores from spreading. This includes physical barriers and negative air pressure systems.",
    },
    {
      icon: "2",
      title: "HEPA Filtration",
      desc: "After we contain the area, we use HEPA filtration and air scrubbing. These methods clean the air of mould spores.",
    },
    {
      icon: "3",
      title: "Safe Removal",
      desc: "Removing and disposing of contaminated materials is a big part of our process. We find and remove materials that can't be saved.",
    },
  ];

  return (
    <section style={{ background: "white", padding: "5rem 0" }}>
      <div className="container">
        <p style={{ textAlign: "center", color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
          Key Takeaways
        </p>
        <h2 className="section-heading" style={{ marginBottom: "0.75rem", color: "var(--primary-dark)" }}>
          Our Specialized Mould Remediation Process
        </h2>
        <p className="section-subheading">
          Our remediation process is key to our service. It ensures mould is removed and your property is restored. At MoldGuard Kenya, we tackle mould infestations with a custom approach.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="card"
              style={{
                padding: "2rem",
                textAlign: "center",
                border: "1px solid var(--border)",
                borderTop: "4px solid var(--primary)",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "var(--cream)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.75rem",
                  margin: "0 auto 1.25rem auto",
                  border: "2px solid var(--accent)",
                }}
              >
                {step.icon}
              </div>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem auto",
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-dark)", marginBottom: "0.75rem" }}>
                {step.title}
              </h3>
              <p style={{ color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .how-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
