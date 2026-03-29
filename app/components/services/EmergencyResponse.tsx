import Image from "next/image";

export default function EmergencyResponse() {
  const items = [
    "24/7 Emergency Response Team",
    "Rapid Assessment and Containment",
    "Advanced Mold Removal Techniques",
    "State-of-the-Art Equipment for Mold Detection and Removal",
  ];

  return (
    <section style={{ background: "white", padding: "5rem 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        
        <div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--primary-dark)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Emergency Mold Response Services for Rapid Intervention
          </h2>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            When a mold crisis hits, our experts jump into action. At MoldGuard Kenya, we know mold emergencies can be a big problem. They can disrupt your life and pose health risks. Our quick action aims to lessen damage and stop mold from spreading.
          </p>
          <div style={{ background: "var(--cream)", padding: "1.5rem", borderRadius: "1rem", borderLeft: "4px solid #ef4444", marginBottom: "1.5rem" }}>
            <p style={{ fontStyle: "italic", fontSize: "0.95rem", color: "var(--text-dark)", marginBottom: "0.5rem" }}>
              "Mold emergencies need quick action to avoid health risks and damage. Our team is ready to act fast and fix mold problems."
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", fontWeight: 600 }}>— Mold remediation expert</p>
          </div>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            We don&apos;t just remove mold. We also work to stop it from coming back. Our aim is to make your space safe and healthy again. We tailor our emergency mold services to fit each situation. We use the latest in moisture mapping and <strong>leak detection</strong>. This helps us find and fix the problem source.
          </p>
          <p style={{ color: "var(--text-mid)", fontSize: "1rem", lineHeight: 1.7 }}>
            Choosing MoldGuard Kenya for your mold emergency means you&apos;re in good hands. Our team is committed to quick action and effective solutions for mold emergencies.
          </p>
        </div>

        <div>
          <div style={{ position: "relative", height: "300px", borderRadius: "1.5rem", overflow: "hidden", marginBottom: "2rem", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
            <Image
              src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/a086c29c-0dd7-4e65-90ef-adc8e8280e71.jpg"
              alt="emergency mold response"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ background: "white", padding: "2rem", borderRadius: "1rem", border: "1px solid var(--border)", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
            <h3 style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--primary-dark)", marginBottom: "1.25rem" }}>
              Our Emergency Response Includes:
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
               {items.map((it, i) => (
                 <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                   <span style={{ color: "#ef4444", fontSize: "1.25rem", lineHeight: 1 }}>⚡</span>
                   <span style={{ fontWeight: 600, color: "var(--text-dark)", fontSize: "0.95rem" }}>{it}</span>
                 </li>
               ))}
            </ul>
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
