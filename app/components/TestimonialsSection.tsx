const testimonials = [
  {
    name: "Laura Christine",
    role: "Homeowner, Karen",
    text: "MoldGuard Kenya found mold behind our bathroom wall that we never knew was there. Their HEPA filtration process was thorough and our home now smells completely fresh. Highly professional team!",
    rating: 5,
    avatar: "LC",
  },
  {
    name: "James Mwangi",
    role: "Business Owner, Westlands",
    text: "We had a serious mold problem in our office that was affecting staff health. MoldGuard remediated everything over a weekend so we had zero downtime. Incredibly efficient and transparent pricing.",
    rating: 5,
    avatar: "JM",
  },
  {
    name: "Sarah Njoroge",
    role: "Property Manager, Kilimani",
    text: "I manage several apartments and MoldGuard is my go-to for all mold issues. Their post-remediation verification reports are detailed and perfect for insurance documentation.",
    rating: 5,
    avatar: "SN",
  },
  {
    name: "David Ochieng",
    role: "Tenant, Ruiru",
    text: "Called them at 0717140369 after a roof leak caused mold growth. They responded within hours, contained the area immediately and the job was done in two days. Exceptional rapid response!",
    rating: 5,
    avatar: "DO",
  },
];

export default function TestimonialsSection() {
  return (
    <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
      <div className="container">
        <p style={{ textAlign: "center", color: "var(--primary)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
          🌿 Client Stories
        </p>
        <h2 className="section-heading" style={{ marginBottom: "0.5rem" }}>
          What Our Happy Clients Says
        </h2>
        <p className="section-subheading">
          Real experiences from homeowners and businesses across Nairobi and Kenya
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card"
              style={{
                padding: "1.75rem",
                border: "1px solid var(--border)",
              }}
            >
              {/* Stars */}
              <div style={{ color: "#f5a623", fontSize: "1.1rem", marginBottom: "0.75rem" }}>
                {"★".repeat(t.rating)}
              </div>
              {/* Quote */}
              <p style={{ color: "var(--text-mid)", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "var(--primary)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-dark)" }}>{t.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-light)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
