export default function StatsBar() {
  const stats = [
    { value: "1M+", label: "Happy Clients" },
    { value: "30K+", label: "5 Star Reviews" },
    { value: "99.97%", label: "HEPA Filtration Rate" },
    { value: "24/7", label: "Emergency Response" },
  ];

  return (
    <section
      style={{
        background: "var(--primary)",
        padding: "3rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        {stats.map((stat) => (
          <div key={stat.label} style={{ color: "white" }}>
            <div
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "var(--gold-light)",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.8)",
                marginTop: "0.4rem",
                fontWeight: 500,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > .container { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
