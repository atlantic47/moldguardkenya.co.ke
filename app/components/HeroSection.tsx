import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f0f7e8 0%, #e8f5d5 40%, #d4edaa 100%)",
        position: "relative",
        overflow: "hidden",
        minHeight: "560px",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
          padding: "5rem 1.5rem",
        }}
      >
        {/* Left: Text */}
        <div style={{ zIndex: 1 }}>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--primary-dark)",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Mould Removal &amp; Remediation Services in Kenya | MoldGuard Kenya
          </h1>
          <div
            style={{
              fontSize: "1rem",
              color: "var(--text-mid)",
              marginBottom: "2rem",
              lineHeight: 1.7,
              maxWidth: "550px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}
          >
            <p>
              Discovering mould in your home can be very stressful. At <strong>MoldGuard</strong>, we offer expert solutions to improve your <strong>indoor air quality</strong>. Our team is skilled in professional <em>mould removal Kenya</em> projects, making sure your space is safe.
            </p>
            <p>
              We use the latest technology to find and remove hidden moisture and mould spores. By choosing our <strong>mould remediation services</strong>, you&apos;re choosing a healthier place to live or work. We act fast to stop mould from spreading and damaging your space.
            </p>
            <p>
              Our technicians work hard to give you lasting results all over Kenya. We know the climate challenges in <strong>Kenya</strong> are unique. Call us at 0717140369 for quick help and to book your first meeting today.
            </p>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <a href="tel:0717140369" className="btn-primary">
              Get Started
            </a>
            <Link href="/services" className="btn-outline">
              Learn More
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { icon: "🌿", label: "Eco-Friendly" },
              { icon: "✅", label: "ISO Certified" },
              { icon: "⭐", label: "Safe Results" },
            ].map((badge) => (
              <div
                key={badge.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--primary)",
                  background: "rgba(255,255,255,0.8)",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "9999px",
                  backdropFilter: "blur(4px)",
                }}
              >
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div style={{ position: "relative", height: "460px", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 20px 60px rgba(45,80,22,0.25)" }}>
          <Image
            src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/dea2f413-d0d2-44f8-9a49-6a3ad43cdddd.jpg"
            alt="MoldGuard Kenya professional mould remediation services"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          {/* Rating badge */}
          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              background: "white",
              borderRadius: "1rem",
              padding: "0.75rem 1rem",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              textAlign: "center",
              minWidth: "100px",
            }}
          >
            <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--primary)" }}>4.9★</div>
            <div style={{ fontSize: "0.7rem", color: "var(--text-mid)" }}>1,200+ Reviews</div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(139,195,74,0.15)",
          zIndex: 0,
        }}
      />

      <style>{`
        @media (max-width: 768px) {
          section > div.container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
