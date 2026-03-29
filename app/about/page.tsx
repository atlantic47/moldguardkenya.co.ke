import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsletterSection from "../components/NewsletterSection";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "About MoldGuard Kenya | Certified Mold Remediation Experts",
  description:
    "Learn about MoldGuard Kenya, the leading professional mold removal experts in Kenya. Discover our mission, our certified processes, and why we are trusted.",
};

const process = [
  {
    step: "01",
    icon: "🔍",
    title: "Advanced Inspection",
    desc: "Utilizing thermal imaging and moisture meters to locate hidden mold behind walls, under floors, and inside ceilings.",
  },
  {
    step: "02",
    icon: "🛡️",
    title: "Strict Containment",
    desc: "Establishing negative air pressure zones to prevent cross-contamination and mold spore spread during removal.",
  },
  {
    step: "03",
    icon: "🧹",
    title: "Safe Remediation",
    desc: "Physically removing contaminated materials safely, rather than simply bleaching over the surface mold.",
  },
  {
    step: "04",
    icon: "💨",
    title: "Air Purification",
    desc: "Deploying industrial-grade HEPA air scrubbers that capture 99.97% of airborne spores down to 0.3 microns.",
  },
  {
    step: "05",
    icon: "✅",
    title: "Clearance Verification",
    desc: "Post-remediation air quality testing ensures your space is comprehensively sanitized before we leave.",
  },
];

const stats = [
  { value: "500+", label: "Properties Restored" },
  { value: "10+", label: "Years of Experience" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Emergency Response" },
];

const values = [
  { icon: "🌿", title: "Eco-Friendly Treatments", desc: "Products that are tough on mold but gentle on your family and pets." },
  { icon: "🔬", title: "Science-Backed Process", desc: "Every step backed by IICRC standards and evidence-based protocols." },
  { icon: "📊", title: "Transparent Reporting", desc: "Detailed before/after documentation provided for every remediation job." },
  { icon: "🚀", title: "Rapid Response", desc: "Same-day and emergency response teams covering all major areas in Kenya." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <PageHero
          title="About MoldGuard Kenya"
          subtitle="We are Kenya's leading certified mold remediation company — protecting families and properties with science-backed solutions."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
          bgImage="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/5b8b2f77-4f18-4ddb-bec8-bce550f34123.jpg"
        />

        {/* WHO WE ARE */}
        <section style={{ background: "white", padding: "5rem 0" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", height: "480px", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 24px 64px rgba(45,80,22,0.18)" }}>
                <Image
                  src="https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/8e626626-0a65-4016-b728-2abad223b45e.jpg"
                  alt="MoldGuard Kenya certified mold remediation team"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Floating stat badge */}
              <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", background: "var(--primary-dark)", color: "white", borderRadius: "1.25rem", padding: "1.5rem 2rem", boxShadow: "0 12px 32px rgba(0,0,0,0.2)", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1 }}>500+</div>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.75)", marginTop: "0.25rem" }}>Homes Restored</div>
              </div>
            </div>
            <div>
              <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>🛡️ Who We Are</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--primary-dark)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                Professional Mold Experts in Kenya
              </h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.85, marginBottom: "1.25rem", fontSize: "1rem" }}>
                MoldGuard Kenya is a leading, certified mold remediation and removal company serving homes and businesses across Kenya. Understanding the severe impact that indoor mold can have on your health and property, we have dedicated ourselves to providing safe, effective, and permanent mold solutions.
              </p>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.85, marginBottom: "2rem", fontSize: "1rem" }}>
                We are more than just a cleaning service; we are certified professionals trained in the science of mold detection, containment, and eradication.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {["IICRC Certified", "99.97% HEPA Filtration", "Eco-Friendly", "Same-Day Response"].map((b) => (
                  <span key={b} style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "999px", padding: "0.45rem 1.1rem", fontSize: "0.82rem", fontWeight: 600, color: "var(--primary-dark)" }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){.container{grid-template-columns:1fr !important;}}`}</style>
        </section>

        {/* STATS BAR */}
        <section style={{ background: "var(--primary)", padding: "3rem 0", color: "white" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", textAlign: "center" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", fontWeight: 600, marginTop: "0.4rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:700px){.container{grid-template-columns:repeat(2,1fr) !important;}}`}</style>
        </section>

        {/* OUR MISSION */}
        <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>🎯 Our Mission</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--primary-dark)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
                Creating Healthier Indoor Environments for All Kenyans
              </h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.85, marginBottom: "1.5rem", fontSize: "1rem" }}>
                Our mission is simple: to create healthier indoor environments for all Kenyans. We believe that no one should have to compromise their health or the structural integrity of their property due to unchecked mold growth.
              </p>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.85, marginBottom: "2rem", fontSize: "1rem" }}>
                By utilizing state-of-the-art moisture mapping technology and adhering to strict international remediation standards, we strive to be the most trusted name in mold removal throughout the country.
              </p>
              <Link href="/contact" className="btn-primary">Get a Free Consultation →</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {values.map((v) => (
                <div key={v.title} style={{ background: "white", borderRadius: "1.25rem", padding: "1.75rem", border: "1px solid var(--border)", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
                  <span style={{ fontSize: "1.75rem" }}>{v.icon}</span>
                  <h3 style={{ fontWeight: 700, color: "var(--primary-dark)", fontSize: "0.95rem", margin: "0.75rem 0 0.5rem" }}>{v.title}</h3>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.container{grid-template-columns:1fr !important;}}`}</style>
        </section>

        {/* OUR PROCESS */}
        <section style={{ background: "var(--primary-dark)", padding: "5rem 0", color: "white" }}>
          <div className="container">
            <p style={{ textAlign: "center", color: "var(--gold-light)", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>📋 Our Process</p>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, maxWidth: "600px", margin: "0 auto 3rem" }}>
              A Proven 5-Step Remediation Process
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "780px", margin: "0 auto" }}>
              {process.map((step, i) => (
                <div key={step.step} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "1.25rem", padding: "1.5rem 2rem", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <div style={{ width: "52px", height: "52px", background: "var(--gold)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                    {step.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--gold-light)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.25rem" }}>Step {step.step}</div>
                    <h3 style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.4rem" }}>{step.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", padding: "5rem 0", color: "white", textAlign: "center" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <span style={{ fontSize: "3rem" }}>🏠</span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, maxWidth: "600px" }}>
              Ready for a Healthier Home?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "500px" }}>
              Don&apos;t let mold dictate your indoor air quality. Reach out to Kenya&apos;s most trusted mold remediation specialists today.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href="tel:0717140369" className="btn-gold" style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}>📞 Call 0717140369</a>
              <Link href="/contact" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.6)", fontSize: "1rem", padding: "0.85rem 2rem" }}>WhatsApp Us →</Link>
            </div>
          </div>
        </section>
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}
