"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "Why is mold growth so prevalent in Kenyan homes and businesses?",
    a: "Kenya's tropical humidity is perfect for mold to grow. When humidity is over 60%, mold spores can easily grow. High moisture and poor air flow cause big air quality problems. Our climate means we need expert moisture control solutions to stop mold.",
  },
  {
    q: "Can I use household bleach to remove mold myself?",
    a: "No, don't use bleach for mold removal. Bleach might change mold color but doesn't kill it, and it can make things worse. Our remediation protocols include removing mold and using HEPA filtration to solve the problem at its root.",
  },
  {
    q: "What are the primary health risks associated with prolonged mold exposure?",
    a: "Mold can cause serious respiratory issues, allergies, and make asthma worse. We worry about the toxic effects of mycotoxins from mold like Stachybotrys. Our team uses containment strategies to keep these toxins from spreading during remediation.",
  },
  {
    q: "How do you detect mold that is hidden behind walls or under floors?",
    a: "We use advanced moisture detection technology and thermal imaging to find hidden dampness. Our mold inspection also includes air quality testing and spore count analysis to find mold not visible to the naked eye.",
  },
  {
    q: "Will your remediation process disrupt my business operations?",
    a: "MoldGuard Kenya offers flexible schedules and rapid-response teams for commercial mold remediation. We isolate affected areas to keep your staff and customers safe while your business continues to operate.",
  },
  {
    q: "What steps do you take to prevent mold from returning?",
    a: "We do more than just clean. We dry structures and fix water intrusion points, use dehumidification strategies tailored for Kenya's climate, and ensure good air flow in high-risk areas to stop moisture and mold from coming back.",
  },
  {
    q: "How do I know the mold has been successfully removed?",
    a: "We perform post-remediation verification to make sure clearance levels are safe. We also give you full documentation for insurance and property value purposes — clearance certificates and test results for your peace of mind.",
  },
  {
    q: "What areas do you serve and how quickly can you respond?",
    a: "We cover Nairobi and nearby areas including Westlands, Kilimani, Karen, Langata, Kiambu, Ruiru, Limuru, and Thika. Our rapid response teams are available for emergencies. Call 0717140369 to schedule your first assessment.",
  },
  {
    q: "Do you handle mold caused by fire suppression or sprinkler system discharge?",
    html: `Yes. Water released during fire suppression system activations can saturate walls, flooring, and ceilings within minutes, creating ideal mold conditions. We work closely with <a href="https://naibunisystems.co.ke/" target="_blank" rel="noopener noreferrer" style="color:var(--primary);font-weight:600;text-decoration:underline">Naibuni Systems</a> — Kenya's specialists in fire extinguishers and suppression equipment — to offer a complete post-fire water damage and mold remediation service. You can browse their range of <a href="https://naibunisystems.co.ke/shop/" target="_blank" rel="noopener noreferrer" style="color:var(--primary);font-weight:600;text-decoration:underline">fire safety equipment at the Naibuni Systems shop</a>.`,
    a: "",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ background: "white", padding: "5rem 0" }}>
      <div
        className="container"
        style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "4rem", alignItems: "start" }}
      >
        {/* Left: FAQ */}
        <div>
          <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
            ❔ Got Questions?
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 800,
              color: "var(--text-dark)",
              marginBottom: "2rem",
            }}
          >
            Frequently Asked Questions{" "}
            <span style={{ color: "var(--primary)" }}>?</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
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
                    padding: "1rem 1.25rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-dark)", lineHeight: 1.4 }}>
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
                      transition: "background 0.2s",
                    }}
                  >
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div style={{ padding: "0 1.25rem 1rem 1.25rem" }}>
                    {(faq as { q: string; a?: string; html?: string }).html ? (
                      <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: (faq as { q: string; a?: string; html?: string }).html! }} />
                    ) : (
                      <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.7 }}>{faq.a}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image + CTA */}
        <div style={{ position: "sticky", top: "100px" }}>
          <div
            style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              marginBottom: "1.5rem",
              position: "relative",
              height: "300px",
            }}
          >
            <Image
              src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/fefaad0e-262d-46a7-86ca-9fd206fc233d.jpg"
              alt="MoldGuard Kenya team ready to help"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              background: "var(--cream)",
              borderRadius: "1.25rem",
              padding: "1.75rem",
              textAlign: "center",
              border: "1px solid var(--border)",
            }}
          >
            <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-dark)", marginBottom: "0.5rem" }}>
              Do you have more questions?
            </h3>
            <p style={{ color: "var(--text-mid)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
              Our expert team is ready to answer all your mold-related questions and schedule a consultation for you.
            </p>
            <a
              href="tel:0717140369"
              className="btn-gold"
              style={{ justifyContent: "center", width: "100%" }}
            >
              📞 Call 0717140369
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          section > .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
