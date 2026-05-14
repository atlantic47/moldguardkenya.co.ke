"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "Why is mold so common in Kenyan homes and offices?",
    a: "Kenya's climate is one of the biggest culprits. During both the long and short rains, humidity levels rise sharply, and most buildings were not designed with moisture control in mind. Poorly ventilated bathrooms, flat concrete roofs that trap moisture, leaking gutters, and water-damaged walls all create the perfect conditions for mold to take hold and spread quickly. In cities like Nairobi, Mombasa, Kisumu, and Nakuru, we see mold problems year-round.",
  },
  {
    q: "How do I know if I have a mold problem in my house?",
    a: "The most obvious sign is dark or black patches on walls, ceilings, or around window frames. But mold does not always show itself right away. A persistent musty smell in a room, peeling paint or wallpaper, chronic condensation on windows, or unexplained sneezing and coughing among your family members are all strong indicators. If you suspect mold, do not wait for it to become visible, because by the time you can see it clearly, it has usually already spread behind surfaces.",
  },
  {
    q: "Is mold actually dangerous to my family's health?",
    a: "Yes, and this is not something to downplay. Mold releases spores into the air that, when inhaled regularly, can trigger asthma, persistent coughs, skin rashes, eye irritation, and allergic reactions. Certain mold types, particularly black mold, also produce mycotoxins that pose serious risks, especially to children, the elderly, pregnant women, and anyone with a compromised immune system. If anyone in your household has been experiencing unexplained respiratory symptoms, mold could be the cause.",
  },
  {
    q: "What is the difference between mold removal and mold remediation?",
    a: "Mold removal refers to physically eliminating the visible mold you can see on surfaces. Mold remediation goes much deeper. It involves identifying the root cause of the moisture that allowed mold to grow, treating affected areas including those you cannot see, applying protective coatings to prevent regrowth, and restoring the environment to a safe and healthy standard. At MoldGuard Kenya, we always remediate, not just remove, because removal alone rarely solves the problem permanently.",
  },
  {
    q: "Can you remove black mold, and is it more dangerous than other types?",
    a: "Black mold, scientifically known as Stachybotrys chartarum, is one of the most toxic mold species and should only ever be handled by trained professionals. It thrives in areas with persistent moisture, such as behind walls with slow leaks or beneath water-damaged ceilings, and it spreads aggressively. At MoldGuard Kenya, we are fully equipped to identify, contain, and safely eliminate black mold without spreading spores to other parts of your property during the removal process.",
  },
  {
    q: "Is mold remediation safe for children and pets?",
    a: "The treatments we use at MoldGuard Kenya are certified, eco-friendly, and low-toxicity, making them safe for indoor environments where children and pets live. For larger or more severe infestations, we may recommend temporary relocation during treatment as a precaution. We will always let you know in advance if that is necessary. Once treatment is complete and the space has been properly ventilated, it is fully safe to return to.",
  },
  {
    q: "Will mold come back after you remove it?",
    a: "Mold will return if the underlying moisture problem is not dealt with. That is why MoldGuard Kenya takes a root-cause approach. We do not just treat the surface — we identify where the moisture is coming from, whether it is a leaking pipe, poor roof drainage, inadequate ventilation, or rising damp, and we address it as part of our service. We also apply protective anti-mold coatings and provide you with a clear prevention plan. Follow-up inspections are available for ongoing peace of mind.",
  },
  {
    q: "Can mold cause structural damage to my building?",
    a: "Absolutely, and this is something many property owners in Kenya underestimate. Mold feeds on organic materials, including the timber framing, ceiling boards, drywall, and even some types of concrete render used in Kenyan construction. Over time it can weaken walls, cause ceilings to sag, and compromise load-bearing structures. Treating mold early is significantly cheaper than repairing or replacing structural elements that have been eaten through.",
  },
  {
    q: "Do you work with landlords and rental properties across Kenya?",
    a: "Yes, and this is a significant part of our work. Mold in rental properties is one of the most common and contentious disputes between landlords and tenants in Kenya. We regularly partner with property managers, landlords, and real estate agents across Nairobi and other counties. After every job we provide a detailed written report with photographic evidence, which is useful for lease agreements, property handovers, insurance documentation, and any disputes that may arise.",
  },
  {
    q: "How long does mold removal take and how much does it cost in Kenya?",
    a: "Timelines and costs vary depending on the size of the affected area and the severity of the infestation. A single room can often be treated within a few hours, while a whole-property remediation or a severe commercial infestation may take one to three days. MoldGuard Kenya offers a free initial assessment and transparent, itemised pricing with no hidden charges. We cover Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, and across all 47 counties. Reach out to us for a custom quote.",
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
              src="/Mold removal Eastleigh.jpg"
              alt="MoldGuard Kenya team treating mold in Eastleigh Nairobi"
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
              href="tel:0710907628"
              className="btn-gold"
              style={{ justifyContent: "center", width: "100%" }}
            >
              📞 Call 0710907628
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
