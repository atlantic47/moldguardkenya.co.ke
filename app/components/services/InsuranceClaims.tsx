export default function InsuranceClaims() {
  const tips = [
    { title: "Document everything", desc: "Keep detailed records of the damage, including photos and videos." },
    { title: "Notify your insurer promptly", desc: "Tell your insurance company as soon as you find mould damage." },
    { title: "Understand the claims process", desc: "Learn about the steps to file a claim and what documents you need." },
    { title: "Work with certified professionals", desc: "Make sure the mould remediation is done by experts like us at MoldGuard Kenya." },
  ];

  return (
    <section style={{ background: "white", padding: "5rem 0" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem auto" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--primary-dark)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Navigating Insurance Claims for Mould Damage Restoration
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            At MoldGuard Kenya, we help you through the complex world of <strong>insurance claims</strong> for mould damage. We make sure the process is smooth for you. Dealing with insurance claims for mould damage can feel overwhelming. But, with the right help, you can get the coverage you need. <strong>Understanding your insurance policy</strong> is key. It&apos;s important to check your policy to see if mould damage is covered and under what conditions.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "stretch", marginBottom: "3rem" }}>
          
          <div style={{ background: "var(--cream)", padding: "2.5rem", borderRadius: "1.5rem", border: "1px solid var(--border)" }}>
            <h3 style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--primary-dark)", marginBottom: "1.5rem" }}>
              Important tips for dealing with insurance claims:
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {tips.map((tip, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ color: "var(--primary)", fontSize: "1.5rem", lineHeight: 1 }}>📄</div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.25rem", fontSize: "1.05rem" }}>
                      {tip.title}
                    </h4>
                    <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", lineHeight: 1.6 }}>{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "var(--primary-dark)", color: "white", padding: "2.5rem", borderRadius: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem", color: "rgba(255,255,255,0.9)" }}>
              The value of <em>proper documentation</em> cannot be overstated. This includes photos and videos of the damage and any letters with your insurance company. Keeping a detailed log can make the claims process smoother and lower the chance of disagreements.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem", color: "rgba(255,255,255,0.9)" }}>
              Our team at MoldGuard Kenya is skilled in handling insurance claims for <strong>mould damage restoration</strong>. We work with you to make sure all the necessary documents are ready. We also ensure the remediation is done to the highest standards.
            </p>
            <div style={{ padding: "1.25rem", background: "rgba(255,255,255,0.1)", borderRadius: "1rem", borderLeft: "4px solid var(--gold)" }}>
              <p style={{ fontStyle: "italic", fontSize: "0.95rem", margin: 0, color: "var(--gold)" }}>
                By understanding the insurance claims process and working with <strong>certified experts</strong>, you can make sure your mould damage restoration is done well and efficiently.
              </p>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div.container > div:last-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
