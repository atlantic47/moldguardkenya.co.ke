"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section
      style={{
        background: "var(--primary-dark)",
        padding: "4rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2
            style={{
              color: "white",
              fontWeight: 800,
              fontSize: "1.6rem",
              marginBottom: "0.4rem",
            }}
          >
            Subscribe for Newsletter
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
            Get mould prevention tips, industry news, and exclusive offers from MoldGuard Kenya.
          </p>
        </div>

        {submitted ? (
          <div style={{ color: "var(--gold-light)", fontWeight: 700, fontSize: "1rem" }}>
            ✅ Thank you! You&apos;re subscribed.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              gap: "0",
              borderRadius: "9999px",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              minWidth: "360px",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: 1,
                padding: "0.85rem 1.5rem",
                border: "none",
                outline: "none",
                fontSize: "0.9rem",
                color: "var(--text-dark)",
                background: "white",
              }}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ borderRadius: 0, padding: "0.85rem 1.5rem" }}
            >
              Let&apos;s Go
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
