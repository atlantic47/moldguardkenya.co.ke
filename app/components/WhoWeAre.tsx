import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left: Text */}
        <div>
          <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            🛡️ Who We Are
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--primary-dark)",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Understanding the Mould Crisis in Kenyan Homes and Businesses
          </h2>
          <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
            Kenya&apos;s climate and geography make it a hotspot for mould in homes and businesses. The tropical climate, with its high temperatures and humidity, is perfect for mould growth. This affects the indoor air quality and the health of those living or working there.
          </p>
          <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.95rem" }}>
            High humidity in Kenya&apos;s tropical climate helps mould spread indoors. When humidity is over 60%, mould spores can easily grow. This harms buildings and makes the air unhealthy, leading to health problems for people inside. At <strong>MoldGuard Kenya</strong>, we see how humidity affects indoor air quality. We&apos;ve seen many cases where high humidity caused severe mould problems.
          </p>

          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="tel:0717140369" className="btn-primary">
              Book Consultation
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div style={{ position: "relative", height: "420px", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 16px 48px rgba(45,80,22,0.2)" }}>
          <Image
            src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/5b8b2f77-4f18-4ddb-bec8-bce550f34123.jpg"
            alt="MoldGuard Kenya certified experts"
            fill
            style={{ objectFit: "cover" }}
          />
          {/* Overlay badge */}
          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              left: "1.5rem",
              background: "white",
              borderRadius: "1rem",
              padding: "0.75rem 1.25rem",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
            }}
          >
            <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.95rem" }}>✅ Certified Experts</div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-mid)" }}>IICRC & Kenya Standards</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
