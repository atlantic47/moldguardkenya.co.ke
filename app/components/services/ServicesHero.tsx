import Image from "next/image";

export default function ServicesHero() {
  return (
    <section style={{ background: "var(--cream)", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        
        {/* Left: Text */}
        <div style={{ zIndex: 1 }}>
          <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            🛡️ Services
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "var(--primary-dark)", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            Mold Removal Solutions by MoldGuard Kenya
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-mid)", marginBottom: "1.25rem", lineHeight: 1.7 }}>
            Discovering mold in your home is stressful. <em>Your health and property safety are our top priorities.</em> At <strong>MoldGuard Kenya</strong>, our team offers expert help to quickly fix your home.
          </p>
          <p style={{ fontSize: "1rem", color: "var(--text-mid)", marginBottom: "2rem", lineHeight: 1.7 }}>
            Effective <strong>mold removal</strong> needs precision and the right tools. We begin with a detailed <strong>mold inspection</strong> to find hidden moisture. This ensures we tackle every spore. Our experts use top techniques to remove all contamination. If you smell musty or see mold, don&apos;t delay. Let us make your home clean and healthy again.
          </p>
          <a href="tel:0717140469" className="btn-primary">
            Call 0717140469 for an Expert Consultation
          </a>
        </div>

        {/* Right: Image */}
        <div style={{ position: "relative", height: "460px", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 20px 60px rgba(45,80,22,0.15)" }}>
          <Image
            src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/8e626626-0a65-4016-b728-2abad223b45e.jpg"
            alt="Different services we provide as Mold removal company - MoldGuard Kenya"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div.container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
