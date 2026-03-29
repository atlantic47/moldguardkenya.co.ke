"use client";

import { useState } from "react";

const faqs = [
  { q: "What makes the mold removal solutions from MoldGuard Kenya the right choice for my property?", a: "At MoldGuard Kenya, we offer top-notch mold removal services. Our team uses advanced technology and years of experience. This ensures your home or office is safe. Call us at 0717140469 to talk about your needs and schedule a visit." },
  { q: "Why should I be concerned about indoor mold growth in my home?", a: "Indoor mold is a serious health risk. It can cause long-term respiratory issues and severe allergic reactions. Our team works fast to protect your health and make your home safe again." },
  { q: "How do you identify mold that isn't visible to the naked eye?", a: "We use professional mold inspection and assessment protocols. This includes advanced moisture mapping and leak detection techniques. Our special equipment finds hidden moisture, ensuring we tackle the root cause." },
  { q: "What measures do you take to prevent mold spores from spreading during the cleaning process?", a: "We use comprehensive mold containment strategies. This includes physical barriers and negative air machines. It keeps mold spores in the affected area, preventing them from spreading." },
  { q: "How do you ensure the air quality is safe after the mold is removed?", a: "We use industrial-grade air filtration and HEPA purification systems. These clean the air of tiny particles. It's key for improving indoor air quality and making your space safe." },
  { q: "Are your remediation procedures safe for my family and pets?", a: "Yes. We follow strict safe and effective mold remediation procedures. Our team wears personal protective equipment (PPE) and uses specialized cleaning solutions. This keeps your living space safe." },
  { q: "Can mold grow inside my air conditioning or ventilation system?", a: "Absolutely. Mold loves dark, damp places. That's why we clean and sanitize your HVAC system. It stops contaminants from spreading through your building." },
  { q: "How do I know for sure that the mold has been successfully eradicated?", a: "We do post-remediation verification and clearance testing. This confirms the mold is gone and moisture levels are stable. It makes sure the area is safe for occupancy." },
  { q: "What steps can I take to prevent mold from returning in the future?", a: "We offer preventative maintenance plans and structural drying and dehumidification solutions. Regular checks and managing moisture stop mold before it starts." },
  { q: "Does MoldGuard Kenya assist with insurance claims for mold damage?", a: "Yes, we help with navigating insurance claims for mold damage restoration. We provide the needed documentation to ensure your restoration is covered." },
  { q: "What should I do if I discover a sudden mold outbreak or water leak?", a: "Call our emergency mold response team at 0717140469 right away. We act fast to prevent damage and stop mold from spreading." },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ background: "white", padding: "5rem 0" }}>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "2.5rem", textAlign: "center" }}>
          Frequently Asked Questions
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: "1px solid var(--border)",
                borderRadius: "0.75rem",
                overflow: "hidden",
                transition: "border-color 0.2s",
                borderColor: openIndex === i ? "var(--primary)" : "var(--border)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.25rem 1.5rem",
                  background: openIndex === i ? "var(--cream)" : "white",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                }}
              >
                <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-dark)", lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: openIndex === i ? "var(--primary)" : "var(--cream)",
                    color: openIndex === i ? "white" : "var(--text-mid)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    fontWeight: 700,
                  }}
                >
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div style={{ padding: "0 1.5rem 1.25rem 1.5rem", background: "var(--cream)" }}>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.9rem", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
