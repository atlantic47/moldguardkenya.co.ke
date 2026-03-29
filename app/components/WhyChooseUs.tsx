import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section style={{ background: "linear-gradient(135deg, #c5a84c 0%, #e8d080 50%, #c5a84c 100%)", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
      <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />

      <div className="container">
        <p style={{ textAlign: "center", color: "var(--primary-dark)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Our Advantages
        </p>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 800,
            color: "var(--primary-dark)",
            marginBottom: "0.5rem",
          }}
        >
          Why Choose MoldGuard Kenya for Your Remediation Needs
        </h2>
        <p style={{ textAlign: "center", color: "rgba(30,58,15,0.75)", marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem auto" }}>
          MoldGuard Kenya is the top choice for mold removal in Kenya. We have certified experts and clear prices. Our team is well-trained and follows the best industry standards.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "start" }}>
          {/* Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {/* Feature 1 */}
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "1.25rem",
                }}
              >
                🏆
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--primary-dark)", marginBottom: "0.4rem" }}>
                  Certified Expertise
                </h3>
                <p style={{ color: "rgba(30,58,15,0.8)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  At MoldGuard Kenya, we&apos;re proud of our certified expertise in mold removal. Our team gets ongoing training and certifications. This keeps them up-to-date with the latest mold removal methods.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "1.25rem",
                }}
              >
                🤝
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--primary-dark)", marginBottom: "0.4rem" }}>
                  Customer-Centric Service
                </h3>
                <p style={{ color: "rgba(30,58,15,0.8)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  Dealing with mold can be tough for property owners. That&apos;s why we focus on customer-centric service. We promise clear communication and prices from start to finish.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "1.25rem",
                }}
              >
                💰
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--primary-dark)", marginBottom: "0.4rem" }}>
                  Transparent Pricing
                </h3>
                <p style={{ color: "rgba(30,58,15,0.8)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  Our prices are clear, with no hidden costs. We aim to build trust with our clients. Your needs are always our main focus. Choosing MoldGuard Kenya means you get effective mold removal.
                </p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{ borderRadius: "1rem", overflow: "hidden", height: "200px", position: "relative", gridColumn: "1 / -1" }}>
              <Image
                src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/fefaad0e-262d-46a7-86ca-9fd206fc233d.jpg"
                alt="MoldGuard Kenya professional team at work"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ borderRadius: "1rem", overflow: "hidden", height: "160px", position: "relative" }}>
              <Image
                src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/5b8b2f77-4f18-4ddb-bec8-bce550f34123.jpg"
                alt="MoldGuard Kenya certified mold remediation"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                borderRadius: "1rem",
                background: "var(--primary)",
                height: "160px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}>99.97%</div>
              <div style={{ fontSize: "0.75rem", marginTop: "0.25rem", opacity: 0.85 }}>HEPA Filtration<br />Particle Removal</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
