import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsletterSection from "../components/NewsletterSection";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Contact MoldGuard Kenya | Free Mould Inspection | Call 0717140369",
  description:
    "Contact MoldGuard Kenya for emergency mould removal, free inspections, and expert advice. Call or WhatsApp us on 0717140369. Serving Nairobi, Mombasa, Kiambu, Nakuru and across Kenya.",
};

const contactMethods = [
  {
    icon: "📞",
    label: "Phone & WhatsApp",
    primary: "0717 140 369",
    secondary: "Available 24/7 for emergencies",
    href: "tel:0717140369",
    cta: "Call Now",
    bg: "var(--primary-dark)",
  },
  {
    icon: "📧",
    label: "Email Support",
    primary: "info@moldguardkenya.co.ke",
    secondary: "We respond within 2 hours",
    href: "mailto:info@moldguardkenya.co.ke",
    cta: "Send Email",
    bg: "var(--primary)",
  },
  {
    icon: "💬",
    label: "WhatsApp Chat",
    primary: "Quick Message Us",
    secondary: "Share photos of your mould problem",
    href: "https://wa.me/254717140369",
    cta: "Open WhatsApp",
    bg: "#25D366",
  },
];

const faqs = [
  { q: "How quickly can you respond?", a: "We offer same-day and emergency 24/7 response for severe mould outbreaks. Standard inspections are scheduled within 24–48 hours." },
  { q: "Is the inspection free?", a: "We offer free initial consultations for residential properties in our core service areas. Contact us to confirm availability in your location." },
  { q: "How long does mould removal take?", a: "A standard remediation for a single room takes 1–3 days. Severe whole-house infestations may require 3–7 days depending on scope." },
  { q: "Do you serve my area?", a: "We cover Nairobi (all suburbs), Mombasa, Kiambu, Nakuru, Eldoret, and surrounding regions. Contact us to confirm your specific location." },
];

const processSteps = [
  { icon: "📋", title: "Submit Your Request", desc: "Call, WhatsApp, or email us with your details and location." },
  { icon: "🔍", title: "Free Consultation", desc: "Our specialist calls you back to assess the situation and schedule an inspection." },
  { icon: "🏠", title: "On-Site Inspection", desc: "Certified technician visits, maps moisture sources, and provides a full remediation plan." },
  { icon: "✅", title: "Complete Remediation", desc: "We execute the plan, do post-removal air quality verification, and issue a clearance certificate." },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <PageHero
          title="Contact MoldGuard Kenya"
          subtitle="Get rapid, expert mould remediation support. Our certified specialists are ready to respond to your emergency."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
          bgImage="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/36cc170e-3fa1-4ac4-9cf9-7fe0a1fd1a58.jpg"
        />

        {/* CONTACT CARDS */}
        <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
          <div className="container">
            <p style={{ textAlign: "center", color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Get In Touch
            </p>
            <h2 className="section-heading" style={{ marginBottom: "0.75rem" }}>Reach Us Any Way You Prefer</h2>
            <p className="section-subheading">Our certified rapid-response team is available 24/7 for emergencies across Kenya.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginTop: "3rem", marginBottom: "4rem" }}>
              {contactMethods.map((m) => (
                <div key={m.label} style={{ background: "white", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column" }}>
                  <div style={{ background: m.bg, padding: "2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <span style={{ fontSize: "2rem" }}>{m.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{m.label}</span>
                  </div>
                  <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <p style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--primary-dark)", margin: 0 }}>{m.primary}</p>
                    <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", margin: 0 }}>{m.secondary}</p>
                    <a href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="btn-primary" style={{ marginTop: "auto", justifyContent: "center", fontSize: "0.875rem", padding: "0.65rem" }}>
                      {m.cta} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HOW IT WORKS */}
          <div className="container">
            <p style={{ textAlign: "center", color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Simple Process
            </p>
            <h2 className="section-heading" style={{ marginBottom: "3rem" }}>How Our Service Works</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
              {processSteps.map((step, i) => (
                <div key={step.title} style={{ textAlign: "center", position: "relative" }}>
                  {i < processSteps.length - 1 && (
                    <div style={{ position: "absolute", top: "2.25rem", left: "calc(50% + 2.5rem)", right: 0, height: "2px", background: "var(--border)", zIndex: 0 }} />
                  )}
                  <div style={{ position: "relative", zIndex: 1, width: "64px", height: "64px", background: "var(--primary)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem", margin: "0 auto 1.25rem" }}>
                    {step.icon}
                  </div>
                  <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>Step {i + 1}</div>
                  <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "1rem", marginBottom: "0.5rem" }}>{step.title}</h3>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TWO COLUMN: MAP PLACEHOLDER + FAQs */}
        <section style={{ background: "white", padding: "5rem 0" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            {/* Locations coverage */}
            <div>
              <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>📍 We Cover</p>
              <h2 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                Our Service Areas Across Kenya
              </h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.95rem" }}>
                MoldGuard Kenya dispatches certified technicians across all major urban centers and surrounding areas. If you&apos;re unsure if we cover your location, just call us.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { region: "Nairobi", suburbs: "Westlands, Kilimani, Karen, Runda, Kasarani..." },
                  { region: "Mombasa", suburbs: "Nyali, Kizingo, Bamburi, Likoni, Diani..." },
                  { region: "Kiambu", suburbs: "Thika, Ruiru, Juja, Kikuyu, Limuru..." },
                  { region: "Nakuru", suburbs: "Nakuru Town, Naivasha, Gilgil..." },
                  { region: "Eldoret", suburbs: "Eldoret Town, Kapseret, Langas..." },
                  { region: "Nationwide", suburbs: "Call to confirm remote areas." },
                ].map((area) => (
                  <div key={area.region} style={{ background: "var(--cream)", borderRadius: "1rem", padding: "1.25rem", border: "1px solid var(--border)" }}>
                    <h4 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "0.95rem", marginBottom: "0.4rem" }}>
                      📍 {area.region}
                    </h4>
                    <p style={{ color: "var(--text-mid)", fontSize: "0.8rem", margin: 0, lineHeight: 1.5 }}>{area.suburbs}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>❓ FAQs</p>
              <h2 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.2, marginBottom: "2rem" }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {faqs.map((faq) => (
                  <div key={faq.q} style={{ background: "var(--cream)", borderRadius: "1.25rem", padding: "1.5rem", border: "1px solid var(--border)" }}>
                    <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "0.95rem", marginBottom: "0.6rem" }}>
                      {faq.q}
                    </h3>
                    <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){.container{grid-template-columns:1fr !important;}}`}</style>
        </section>

        {/* EMERGENCY CTA */}
        <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", padding: "5rem 0", color: "white", textAlign: "center" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <span style={{ fontSize: "3rem" }}>🚨</span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, maxWidth: "600px" }}>
              Mould Emergency? Call Now — We Respond 24/7
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "500px" }}>
              Don&apos;t wait. Rapid response stops mould from spreading and saves your property from costly structural damage.
            </p>
            <a href="tel:0717140369" className="btn-gold" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}>
              📞 Call 0717 140 369
            </a>
          </div>
        </section>
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}
