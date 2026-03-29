export default function ContactSection() {
  const contactInfo = [
    { method: "Phone Number", details: "0717140469" },
    { method: "Email", details: "info@moldguardkenya.co.ke" },
    { method: "Service Area", details: "Kenya and surrounding regions" },
  ];

  return (
    <section style={{ background: "linear-gradient(135deg, #2d5a27 0%, #1e3a0f 100%)", color: "white", padding: "5rem 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        
        {/* Left: Reach Team / Schedule */}
        <div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--gold)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            How to Reach Our Team at MoldGuard Kenya
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            If you&apos;re facing a mould problem, reaching out to MoldGuard Kenya is the first step. We aim to make your home or workplace healthier. Our team is ready to help you every step of the way.
          </p>
          
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Contacting Our Specialists</h3>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            To talk to our mould experts, just call <strong>0717140469</strong>. We&apos;re here to answer your questions and set up a meeting. We&apos;re quick to respond, so you can start fixing your mould issues fast.
          </p>

          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Scheduling Your Initial Consultation</h3>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1rem" }}>
            Setting up your first meeting is easy. After you call us, we&apos;ll go over your mould problem. We&apos;ll then send a certified specialist to check it out and plan how to fix it.
          </p>

          <div style={{ background: "rgba(255,255,255,0.1)", padding: "1.5rem", borderRadius: "1rem", borderLeft: "4px solid var(--gold)", marginBottom: "2rem" }}>
            <p style={{ fontStyle: "italic", fontSize: "1rem", color: "white", marginBottom: "0.5rem" }}>
              "MoldGuard Kenya&apos;s team was professional, efficient, and courteous. They not only removed the mould but also helped us understand how to prevent future occurrences."
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--gold)", margin: 0 }}>— Happy Client</p>
          </div>
        </div>

        {/* Right: Contact details card */}
        <div>
          <div style={{ background: "white", borderRadius: "1.5rem", padding: "2.5rem", color: "var(--text-dark)", boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}>
            <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "1.25rem", marginBottom: "1.5rem" }}>
              When you reach out, look forward to:
            </h4>
            <ul style={{ listStyle: "none", margin: "0 0 2.5rem 0", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
               {[
                 "A quick reply to your call",
                 "A detailed check of your mould problem",
                 "A plan to fix it that fits your needs",
                 "Professional and friendly service from our certified team",
               ].map((item, i) => (
                 <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                   <span style={{ color: "var(--primary)", fontSize: "1.1rem" }}>✓</span>
                   <span style={{ fontSize: "0.95rem", lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                 </li>
               ))}
            </ul>

            <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "1.15rem", marginBottom: "1rem" }}>
              Get in touch with us:
            </h4>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <tbody>
                {contactInfo.map((row, i) => (
                  <tr key={i} style={{ borderTop: i === 0 ? "2px solid var(--primary)" : "1px solid var(--border)", borderBottom: i === contactInfo.length - 1 ? "2px solid var(--primary)" : "1px solid var(--border)" }}>
                    <td style={{ padding: "1rem 0", fontWeight: 700, color: "var(--primary-dark)" }}>{row.method}</td>
                    <td style={{ padding: "1rem 0", color: "var(--text-mid)" }}>{row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <a href="tel:0717140469" className="btn-gold" style={{ marginTop: "2rem", width: "100%", justifyContent: "center" }}>
              📞 Call 0717140469 Now
            </a>
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
