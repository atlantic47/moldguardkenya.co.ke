export default function ServicesList() {
  const servicesList = [
    "Mold inspection and assessment",
    "Customized remediation plans",
    "State-of-the-art equipment and techniques",
    "Environmentally friendly products",
    "Prevention services to avoid future mold growth",
  ];

  return (
    <section style={{ background: "linear-gradient(135deg, #c5a84c 0%, #e8d080 50%, #c5a84c 100%)", padding: "5rem 0", color: "var(--primary-dark)" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        
        <div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "1.25rem", color: "var(--primary-dark)" }}>
            Different services we provide as Mold removal company - MoldGuard Kenya
          </h2>
          <p style={{ marginBottom: "1.25rem", lineHeight: 1.7, fontSize: "0.95rem", color: "rgba(30,58,15,0.8)" }}>
            At <strong>MoldGuard Kenya</strong>, we&apos;re proud to offer a wide range of <strong>mold removal services</strong>. Our team works hard to provide top-quality services. We aim to make sure our clients have a safe and healthy place to live.
          </p>
          <p style={{ marginBottom: "1.25rem", lineHeight: 1.7, fontSize: "0.95rem", color: "rgba(30,58,15,0.8)" }}>
            Our <strong>MoldGuard Kenya services</strong> start with detailed mold inspections. We find out how much mold there is and what to do next. We use the latest tools and methods to spot mold in hard-to-reach places like behind walls and under floors. After we finish the inspection, we create a plan to get rid of the mold. We use <em>state-of-the-art equipment</em> and safe products. This way, we make sure the job is done right and safely.
          </p>
          <p style={{ lineHeight: 1.7, fontSize: "0.95rem", color: "rgba(30,58,15,0.8)" }}>
            We also help prevent mold from coming back. We find and fix the problems that cause mold, like leaks and bad air flow. This helps keep your place mold-free in the future. We take a complete approach to <strong>mold removal</strong> and prevention. This means our clients get the best service possible. We&apos;re all about giving great results and making our clients happy.
          </p>
        </div>

        <div style={{ background: "white", padding: "2.5rem", borderRadius: "1rem", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}>
          <h3 style={{ fontWeight: 800, fontSize: "1.25rem", marginBottom: "1.5rem", color: "var(--primary-dark)" }}>
            Our Complete Approach Includes:
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {servicesList.map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <span style={{ color: "var(--primary)", fontSize: "1.25rem", lineHeight: 1 }}>✅</span>
                <span style={{ fontWeight: 600, color: "var(--text-dark)", fontSize: "0.95rem" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div.container { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
