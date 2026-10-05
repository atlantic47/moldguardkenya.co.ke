"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsletterSection from "../components/NewsletterSection";
import PageHero from "../components/PageHero";

// ── SEO Metadata exported separately so Next.js can pick it up ──────────────
// NOTE: because this file is "use client", metadata must live in a separate
// server component. We export it here for reference; the actual metadata
// lives in /app/bookings/metadata.ts (imported by Next.js automatically).

const services = [
  { id: "mold-inspection", label: "🔍 Mold Inspection", desc: "Full moisture mapping and mold assessment" },
  { id: "mold-removal", label: "🛡️ Mold Removal", desc: "Safe, certified mold eradication" },
  { id: "black-mold", label: "☠️ Black Mold Removal", desc: "Specialist Stachybotrys treatment" },
  { id: "air-scrubbing", label: "🌬️ Air Scrubbing", desc: "HEPA spore capture & air quality restoration" },
  { id: "indoor-air-quality", label: "🌱 Indoor Air Quality", desc: "Comprehensive IAQ improvement plan" },
  { id: "damp-treatment", label: "💧 Damp & Moisture Control", desc: "Root-cause moisture elimination" },
  { id: "commercial", label: "🏢 Commercial Property", desc: "Office, hotel, school, warehouse remediation" },
  { id: "post-flood", label: "🌊 Post-Flood Remediation", desc: "Water damage drying & mold prevention" },
];

const locations = [
  "Nairobi — Westlands", "Nairobi — Kilimani", "Nairobi — Karen",
  "Nairobi — Runda", "Nairobi — Kileleshwa", "Nairobi — Lavington",
  "Nairobi — Embakasi", "Nairobi — Kasarani", "Nairobi — Langata",
  "Nairobi — South B / South C", "Nairobi — Roysambu", "Nairobi — Thika Road",
  "Nairobi — Ngong Road", "Nairobi — Muthaiga", "Nairobi CBD",
  "Mombasa — Nyali", "Mombasa — Bamburi", "Mombasa — Kizingo",
  "Mombasa — Likoni", "Mombasa — Diani",
  "Kiambu — Thika", "Kiambu — Ruiru", "Kiambu — Kikuyu", "Kiambu — Limuru",
  "Nakuru Town", "Naivasha", "Eldoret Town",
  "Other (specify in message)",
];

const urgencyOptions = [
  { id: "emergency", label: "🚨 Emergency (Same Day)", desc: "Active mold outbreak, health risk" },
  { id: "urgent", label: "⚡ Urgent (1–2 Days)", desc: "Spreading mold, planning to sell/rent" },
  { id: "standard", label: "📅 Standard (This Week)", desc: "Visible mold, want assessment soon" },
  { id: "planned", label: "🗓️ Planned (Flexible)", desc: "Preventive check or light discolouration" },
];

const trustPoints = [
  { icon: "🏆", title: "IICRC Certified", desc: "International certification in mold remediation" },
  { icon: "⭐", title: "4.9★ on Google", desc: "Over 300 verified customer reviews" },
  { icon: "🛡️", title: "Safe & Eco-Friendly", desc: "Low-toxicity, child and pet safe treatments" },
  { icon: "📋", title: "Written Clearance Report", desc: "Documented proof for landlords, insurance & banks" },
  { icon: "📞", title: "24/7 Emergency Response", desc: "Always available for urgent mold outbreaks" },
  { icon: "🔒", title: "No Hidden Charges", desc: "Transparent, itemised pricing — no surprises" },
];

const faqs = [
  { q: "How soon will you get back to me after I submit a booking?", a: "We confirm all bookings within 1 hour during business hours and within 3 hours outside of them. For emergencies, call us directly on 0710907628 for an immediate response." },
  { q: "Is the initial inspection free?", a: "Yes. We offer a free initial consultation and site assessment for residential properties within our core Nairobi and Mombasa service areas. Remote or large commercial assessments may involve a nominal call-out fee, which we will confirm before visiting." },
  { q: "What should I do before the technician arrives?", a: "Do not disturb or try to clean the mold yourself, as this spreads spores. Ventilate the affected room if possible by opening windows. Note any areas of damp smell or discolouration and be ready to describe how long you have noticed it." },
  { q: "Do you work with rental properties and landlords?", a: "Absolutely. We regularly work with landlords, property managers, real estate agencies, and corporate tenants across Kenya. Every job comes with a detailed remediation report and photographic documentation." },
  { q: "Can I book for a property outside Nairobi?", a: "Yes. We cover Mombasa, Kiambu, Nakuru, Eldoret, and much of Kenya. Select your area from the dropdown or describe your location in the message box and we will confirm availability." },
];

export default function BookingsPage() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedUrgency, setSelectedUrgency] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState("");
  const [form, setForm] = useState({
    name: "", phone: "", email: "", location: "", message: "", preferredDate: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSendError("");
    setLoading(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          service: selectedService,
          urgency: selectedUrgency,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setSendError(
        err instanceof Error
          ? err.message
          : "Could not send booking. Please call us directly on 0710907628."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <PageHero
          title="Book a Mold Removal Service in Nairobi, Kenya"
          subtitle="Schedule a free mold inspection or full remediation service. MoldGuard Kenya's certified technicians respond fast across Nairobi and all of Kenya."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Book a Service" }]}
        />

        {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
        <section style={{ background: "var(--primary-dark)", padding: "1.5rem 0" }}>
          <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
            {[
              { icon: "✅", text: "IICRC Certified" },
              { icon: "⭐", text: "4.9★ Google Rating" },
              { icon: "🚨", text: "24/7 Emergency Response" },
              { icon: "🔬", text: "Advanced Moisture Detection" },
              { icon: "🌿", text: "Eco-Friendly Treatments" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.9)", fontSize: "0.875rem", fontWeight: 600 }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── MAIN: FORM + SIDEBAR ─────────────────────────────────────────── */}
        <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
          <div className="container booking-grid">

            {/* LEFT: Booking Form */}
            <div>
              <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                📅 Schedule Your Visit
              </p>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.75rem", lineHeight: 1.2 }}>
                Book Your Mold Removal Service
              </h2>
              <p style={{ color: "var(--text-mid)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                Fill in the form below and our team will confirm your booking within 1 hour. For immediate emergencies, call <strong><a href="tel:0710907628" style={{ color: "var(--primary)" }}>0710 907 628</a></strong>.
              </p>

              {submitted ? (
                <div style={{ background: "white", borderRadius: "1.5rem", padding: "3rem 2rem", textAlign: "center", border: "2px solid var(--accent)", boxShadow: "0 8px 32px rgba(45,80,22,0.1)" }}>
                  <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✅</div>
                  <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Booking Request Received!</h3>
                  <p style={{ color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    Thank you, <strong>{form.name}</strong>. Our team will contact you on <strong>{form.phone}</strong> within 1 hour to confirm your appointment.
                  </p>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", marginBottom: "2rem" }}>
                    For urgent mold emergencies please call us directly on{" "}
                    <a href="tel:0710907628" style={{ color: "var(--primary)", fontWeight: 700 }}>0710 907 628</a>{" "}
                    or{" "}
                    <a href="https://wa.me/254710907628" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontWeight: 700 }}>WhatsApp us</a>.
                  </p>
                  <a href="/" className="btn-primary">← Back to Home</a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ background: "white", borderRadius: "1.5rem", padding: "2.5rem", boxShadow: "0 8px 32px rgba(0,0,0,0.07)", border: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

                  {/* SERVICE SELECTION */}
                  <fieldset style={{ border: "none", padding: 0 }}>
                    <legend style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "0.95rem", marginBottom: "1rem", display: "block" }}>
                      1. Select a Service <span style={{ color: "red" }}>*</span>
                    </legend>
                    <div className="service-grid">
                      {services.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelectedService(s.id)}
                          style={{
                            background: selectedService === s.id ? "var(--primary)" : "var(--cream)",
                            color: selectedService === s.id ? "white" : "var(--text-dark)",
                            border: selectedService === s.id ? "2px solid var(--primary)" : "2px solid var(--border)",
                            borderRadius: "0.875rem",
                            padding: "0.875rem 1rem",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "all 0.2s ease",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.25rem",
                          }}
                        >
                          <span style={{ fontSize: "0.875rem", fontWeight: 700 }}>{s.label}</span>
                          <span style={{ fontSize: "0.75rem", opacity: 0.8, fontWeight: 400 }}>{s.desc}</span>
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  {/* URGENCY */}
                  <fieldset style={{ border: "none", padding: 0 }}>
                    <legend style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "0.95rem", marginBottom: "1rem", display: "block" }}>
                      2. How Urgent Is It? <span style={{ color: "red" }}>*</span>
                    </legend>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                      {urgencyOptions.map((u) => (
                        <button
                          key={u.id}
                          type="button"
                          onClick={() => setSelectedUrgency(u.id)}
                          style={{
                            background: selectedUrgency === u.id ? "var(--primary-dark)" : "var(--cream)",
                            color: selectedUrgency === u.id ? "white" : "var(--text-dark)",
                            border: selectedUrgency === u.id ? "2px solid var(--primary-dark)" : "2px solid var(--border)",
                            borderRadius: "0.875rem",
                            padding: "0.875rem 1rem",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "all 0.2s ease",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.2rem",
                          }}
                        >
                          <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>{u.label}</span>
                          <span style={{ fontSize: "0.75rem", opacity: 0.8, fontWeight: 400 }}>{u.desc}</span>
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  {/* CONTACT DETAILS */}
                  <fieldset style={{ border: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <legend style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "0.95rem", marginBottom: "0.5rem", display: "block" }}>
                      3. Your Contact Details
                    </legend>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      <div>
                        <label htmlFor="booking-name" style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>
                          Full Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          id="booking-name"
                          name="name"
                          type="text"
                          placeholder="e.g. James Mwangi"
                          required
                          value={form.name}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-phone" style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>
                          Phone / WhatsApp <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          id="booking-phone"
                          name="phone"
                          type="tel"
                          placeholder="e.g. 0710 907 628"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="booking-email" style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>
                        Email Address
                      </label>
                      <input
                        id="booking-email"
                        name="email"
                        type="email"
                        placeholder="e.g. james@example.com"
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-location" style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>
                        Property Location <span style={{ color: "red" }}>*</span>
                      </label>
                      <select
                        id="booking-location"
                        name="location"
                        required
                        value={form.location}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                      >
                        <option value="">— Select your area —</option>
                        {locations.map((loc) => (
                          <option key={loc} value={loc}>{loc}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="booking-date" style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>
                        Preferred Date
                      </label>
                      <input
                        id="booking-date"
                        name="preferredDate"
                        type="date"
                        value={form.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-message" style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>
                        Describe the Problem
                      </label>
                      <textarea
                        id="booking-message"
                        name="message"
                        rows={4}
                        placeholder="e.g. Black patches on bedroom ceiling, musty smell, about 2 square metres affected..."
                        value={form.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: "vertical", minHeight: "110px" }}
                      />
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    disabled={loading || !selectedService || !selectedUrgency}
                    className="btn-primary"
                    style={{
                      justifyContent: "center",
                      fontSize: "1rem",
                      padding: "1rem",
                      opacity: loading || !selectedService || !selectedUrgency ? 0.7 : 1,
                      cursor: loading || !selectedService || !selectedUrgency ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? "Submitting…" : "📅 Confirm Booking Request"}
                  </button>

                  <p style={{ textAlign: "center", color: "var(--text-light)", fontSize: "0.8rem" }}>
                    🔒 Your details are private and will never be shared. We respond within 1 hour.
                  </p>

                  {/* Error message */}
                  {sendError && (
                    <div style={{ background: "#fff5f5", border: "1px solid #fc8181", borderRadius: "0.75rem", padding: "0.875rem 1.1rem", color: "#c53030", fontSize: "0.875rem", lineHeight: 1.6 }}>
                      ⚠️ {sendError} —{" "}
                      <a href="tel:0710907628" style={{ color: "#c53030", fontWeight: 700 }}>Call 0710907628</a> or{" "}
                      <a href="https://wa.me/254710907628" target="_blank" rel="noopener noreferrer" style={{ color: "#c53030", fontWeight: 700 }}>WhatsApp us</a>.
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* RIGHT: Sidebar */}
            <aside style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {/* Call Us Card */}
              <div style={{ background: "var(--primary-dark)", borderRadius: "1.5rem", padding: "2rem", color: "white", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>📞</div>
                <h3 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.4rem" }}>Prefer to Call?</h3>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  Speak directly to our team for same-day bookings and emergencies.
                </p>
                <a href="tel:0710907628" className="btn-gold" style={{ justifyContent: "center", width: "100%", fontSize: "1rem", padding: "0.85rem" }}>
                  Call 0710 907 628
                </a>
                <a href="https://wa.me/254710907628" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", marginTop: "0.75rem", background: "#25D366", color: "white", borderRadius: "9999px", padding: "0.75rem 1.5rem", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", transition: "background 0.2s ease" }}>
                  💬 WhatsApp Us
                </a>
              </div>

              {/* Why Book with Us */}
              <div style={{ background: "white", borderRadius: "1.5rem", padding: "1.75rem", border: "1px solid var(--border)", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "1rem", marginBottom: "1.25rem" }}>
                  ✅ Why Book with MoldGuard Kenya?
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {trustPoints.map((pt) => (
                    <div key={pt.title} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "1.4rem", flexShrink: 0, marginTop: "0.1rem" }}>{pt.icon}</span>
                      <div>
                        <p style={{ fontWeight: 700, color: "var(--primary-dark)", fontSize: "0.875rem", margin: 0 }}>{pt.title}</p>
                        <p style={{ color: "var(--text-mid)", fontSize: "0.8rem", margin: 0, lineHeight: 1.5 }}>{pt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div style={{ background: "var(--cream)", borderRadius: "1.25rem", padding: "1.5rem", border: "1px solid var(--border)" }}>
                <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "0.9rem", marginBottom: "0.875rem" }}>🕐 Office Hours</h3>
                {[
                  { day: "Mon – Fri", hours: "8:00 AM – 5:00 PM" },
                  { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Sunday", hours: "8:00 AM – 5:00 PM" },
                  { day: "Emergencies", hours: "24 / 7 — Call Anytime" },
                ].map((r) => (
                  <div key={r.day} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid var(--border)", fontSize: "0.85rem" }}>
                    <span style={{ fontWeight: 600, color: "var(--text-dark)" }}>{r.day}</span>
                    <span style={{ color: "var(--text-mid)" }}>{r.hours}</span>
                  </div>
                ))}
              </div>

            </aside>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
        <section style={{ background: "white", padding: "5rem 0" }}>
          <div className="container">
            <p style={{ textAlign: "center", color: "var(--primary)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Simple Process</p>
            <h2 className="section-heading" style={{ marginBottom: "0.75rem" }}>How Booking Works</h2>
            <p className="section-subheading">From the moment you submit your request, we take care of everything.</p>

            <div className="process-steps-grid" style={{ marginTop: "3rem" }}>
              {[
                { step: "1", icon: "📋", title: "Submit Your Booking", desc: "Fill in the form above or call us. Tell us your location, the type of mold problem, and urgency level." },
                { step: "2", icon: "📞", title: "We Confirm Within 1 Hour", desc: "Our team calls or WhatsApps you to confirm the appointment date, time, and any prep instructions." },
                { step: "3", icon: "🔍", title: "Free On-Site Assessment", desc: "A certified technician visits, uses moisture meters and thermal cameras to map the full extent of the mold." },
                { step: "4", icon: "🛡️", title: "Remediation & Sign-Off", desc: "We execute the treatment plan, verify air quality, and issue a written clearance certificate." },
              ].map((s, i, arr) => (
                <div key={s.step} style={{ textAlign: "center", position: "relative" }}>
                  {i < arr.length - 1 && (
                    <div style={{ position: "absolute", top: "2.1rem", left: "calc(50% + 2.75rem)", right: 0, height: "2px", background: "var(--border)" }} className="step-connector" />
                  )}
                  <div style={{ position: "relative", zIndex: 1, width: "68px", height: "68px", background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", borderRadius: "1.25rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.9rem", margin: "0 auto 1.25rem", boxShadow: "0 8px 24px rgba(45,80,22,0.25)" }}>
                    {s.icon}
                  </div>
                  <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.3rem" }}>Step {s.step}</div>
                  <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "1rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section style={{ background: "var(--cream)", padding: "5rem 0" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <p style={{ textAlign: "center", color: "var(--primary)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>❓ FAQs</p>
            <h2 className="section-heading" style={{ marginBottom: "0.75rem" }}>Booking Questions Answered</h2>
            <p className="section-subheading">Everything you need to know before scheduling your mold removal service in Nairobi, Kenya.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2.5rem" }}>
              {faqs.map((faq) => (
                <div key={faq.q} style={{ background: "white", borderRadius: "1.25rem", padding: "1.5rem", border: "1px solid var(--border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <h3 style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "0.95rem", marginBottom: "0.6rem" }}>{faq.q}</h3>
                  <p style={{ color: "var(--text-mid)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EMERGENCY CTA ─────────────────────────────────────────────────── */}
        <section style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)", padding: "5rem 0", textAlign: "center" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
            <span style={{ fontSize: "3rem" }}>🚨</span>
            <h2 style={{ color: "white", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, maxWidth: "600px", lineHeight: 1.2 }}>
              Mold Emergency in Nairobi or Kenya? Call Now.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "500px" }}>
              Do not wait. Mold spreads fast. Our certified technicians are on call 24/7 across Nairobi and Kenya.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="tel:0710907628" className="btn-gold" style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}>
                📞 Call 0710 907 628
              </a>
              <a href="https://wa.me/254710907628" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#25D366", color: "white", borderRadius: "9999px", padding: "1rem 2.5rem", fontWeight: 700, fontSize: "1.05rem", textDecoration: "none" }}>
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ── STYLES ───────────────────────────────────────────────────────────── */}
      <style>{`
        .booking-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 3rem;
          align-items: start;
        }
        .service-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .process-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        @media (max-width: 1100px) {
          .booking-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .service-grid { grid-template-columns: 1fr !important; }
          .process-steps-grid { grid-template-columns: 1fr 1fr !important; }
          .step-connector { display: none !important; }
        }
        @media (max-width: 480px) {
          .process-steps-grid { grid-template-columns: 1fr !important; }
        }
        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: var(--primary) !important;
          box-shadow: 0 0 0 3px rgba(45,80,22,0.12);
        }
      `}</style>

      <NewsletterSection />
      <Footer />
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  border: "1.5px solid var(--border)",
  borderRadius: "0.75rem",
  fontSize: "0.9rem",
  color: "var(--text-dark)",
  background: "var(--cream)",
  transition: "border-color 0.2s, box-shadow 0.2s",
  fontFamily: "inherit",
};
