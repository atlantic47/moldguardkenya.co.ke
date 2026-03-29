"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const locationsData = [
  {
    region: "Nairobi",
    slug: "nairobi",
    suburbs: [
      { name: "Westlands", slug: "westlands" },
      { name: "Kilimani", slug: "kilimani" },
      { name: "Kileleshwa", slug: "kileleshwa" },
      { name: "Lavington", slug: "lavington" },
      { name: "Karen", slug: "karen" },
      { name: "Runda", slug: "runda" },
      { name: "Embakasi", slug: "embakasi" },
      { name: "South B / South C", slug: "south-b-south-c" },
      { name: "Kasarani", slug: "kasarani" },
      { name: "Roysambu", slug: "roysambu" },
      { name: "Ngong Road", slug: "ngong-road" },
      { name: "Thika Road", slug: "thika-road" },
    ],
  },
  {
    region: "Mombasa",
    slug: "mombasa",
    suburbs: [
      { name: "Nyali", slug: "nyali" },
      { name: "Kizingo", slug: "kizingo" },
      { name: "Bamburi", slug: "bamburi" },
      { name: "Likoni", slug: "likoni" },
      { name: "Diani", slug: "diani" },
    ],
  },
  {
    region: "Kiambu",
    slug: "kiambu",
    suburbs: [
      { name: "Thika", slug: "thika" },
      { name: "Ruiru", slug: "ruiru" },
      { name: "Juja", slug: "juja" },
      { name: "Kikuyu", slug: "kikuyu" },
      { name: "Limuru", slug: "limuru" },
    ],
  },
  {
    region: "Nakuru",
    slug: "nakuru",
    suburbs: [
      { name: "Nakuru Town", slug: "nakuru-town" },
      { name: "Naivasha", slug: "naivasha" },
      { name: "Gilgil", slug: "gilgil" },
    ],
  },
  {
    region: "Eldoret",
    slug: "eldoret",
    suburbs: [
      { name: "Eldoret Town", slug: "eldoret-town" },
      { name: "Kapseret", slug: "kapseret" },
      { name: "Langas", slug: "langas" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const [openMobileSubAccordion, setOpenMobileSubAccordion] = useState<string | null>(null);

  const pathname = usePathname();

  const toggleAccordion = (name: string) => {
    if (openMobileAccordion === name) {
      setOpenMobileAccordion(null);
      setOpenMobileSubAccordion(null);
    } else {
      setOpenMobileAccordion(name);
      setOpenMobileSubAccordion(null);
    }
  };

  const toggleSubAccordion = (name: string) => {
    setOpenMobileSubAccordion(openMobileSubAccordion === name ? null : name);
  };

  return (
    <>
      <style>{`
        .nav-mega-panel {
          position: fixed;
          left: 0; right: 0;
          top: 80px;
          background: white;
          border-top: 3px solid var(--primary);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          z-index: 99;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
          padding: 2.5rem 0;
        }
        .nav-locations-trigger:hover .nav-mega-panel,
        .nav-mega-panel:hover {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .nav-locations-trigger:hover > a {
          color: var(--primary);
        }
        .mega-region-col h3 {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--primary-dark);
          padding-bottom: 0.6rem;
          border-bottom: 2px solid var(--accent);
          margin-bottom: 0.75rem;
        }
        .mega-region-col a {
          display: block;
          font-size: 0.875rem;
          color: var(--text-mid);
          text-decoration: none;
          padding: 0.35rem 0;
          transition: color 0.15s ease, padding-left 0.15s ease;
          border-radius: 4px;
        }
        .mega-region-col a:hover {
          color: var(--primary);
          padding-left: 6px;
        }
        .mega-view-all {
          font-size: 0.8rem !important;
          font-weight: 700 !important;
          color: var(--primary) !important;
          letter-spacing: 0.04em;
          margin-bottom: 0.5rem;
        }
        .desktop-nav { display: flex; }
        .mobile-nav-toggle { display: none; }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>

      <header style={{ background: "white", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
        <nav className="container relative flex items-center justify-between" style={{ padding: "0.85rem 1.5rem", flexWrap: "nowrap", gap: "1rem" }}>

          {/* Logo + Tagline */}
          <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <span style={{ fontSize: "2rem" }}>🛡️</span>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.15rem", lineHeight: 1 }}>
                <span style={{ fontWeight: 900, fontSize: "1.2rem", color: "var(--primary)", letterSpacing: "-0.02em" }}>MoldGuard</span>
                <span style={{ fontWeight: 900, fontSize: "1.2rem", color: "var(--primary)", letterSpacing: "-0.02em" }}>{" Kenya"}</span>
              </div>
              <span style={{ display: "block", fontSize: "clamp(0.6rem, 2.5vw, 0.72rem)", color: "var(--primary-light)", fontStyle: "italic", fontWeight: 500, lineHeight: 1.3, marginTop: "0.15rem", textWrap: "balance" }}>
                Mold &amp; Damp Removal Experts in Kenya
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul style={{ alignItems: "center", gap: "0.25rem", listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">

            {[
              { label: "HOME", href: "/" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  style={{
                    display: "block",
                    padding: "0.6rem 0.85rem",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    color: (href === "/" ? pathname === "/" : pathname.startsWith(href)) ? "var(--primary)" : "var(--text-dark)",
                    borderRadius: "6px",
                    transition: "color 0.15s ease, background 0.15s ease",
                  }}
                  className="hover:text-[var(--primary)] hover:bg-[var(--cream)]"
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Services — direct link, no sublinks */}
            <li>
              <Link
                href="/services"
                style={{
                  display: "block",
                  padding: "0.6rem 0.85rem",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  color: pathname.startsWith("/services") ? "var(--primary)" : "var(--text-dark)",
                  borderRadius: "6px",
                  transition: "color 0.15s ease, background 0.15s ease",
                }}
                className="hover:text-[var(--primary)] hover:bg-[var(--cream)]"
              >
                SERVICES
              </Link>
            </li>

            {/* SHOP */}
            <li>
              <Link
                href="/shop"
                style={{ display: "block", padding: "0.6rem 0.85rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", color: pathname.startsWith('/shop') ? "var(--primary)" : "var(--text-dark)", borderRadius: "6px", transition: "color 0.15s ease, background 0.15s ease" }}
                className="hover:text-[var(--primary)] hover:bg-[var(--cream)]"
              >SHOP</Link>
            </li>

            {/* Locations mega-menu */}
            <li className="nav-locations-trigger" style={{ position: "relative" }}>
              <Link
                href="/locations"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "0.6rem 0.85rem",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  color: pathname.startsWith("/locations") ? "var(--primary)" : "var(--text-dark)",
                  borderRadius: "6px",
                  transition: "color 0.15s ease, background 0.15s ease",
                  cursor: "pointer",
                }}
                className="hover:text-[var(--primary)] hover:bg-[var(--cream)]"
              >
                LOCATIONS
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Mega-panel */}
              <div className="nav-mega-panel">
                <div className="container">
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2rem" }}>
                    {locationsData.map((region) => (
                      <div key={region.slug} className="mega-region-col">
                        <h3>{region.region}</h3>
                        <Link href={`/locations/${region.slug}`} className="mega-view-all">
                          View All {region.region} →
                        </Link>
                        {region.suburbs.map((suburb) => (
                          <Link key={suburb.slug} href={`/locations/${suburb.slug}`}>
                            {suburb.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* BLOG */}
            <li>
              <Link
                href="/blog"
                style={{ display: "block", padding: "0.6rem 0.85rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", color: pathname.startsWith('/blog') ? "var(--primary)" : "var(--text-dark)", borderRadius: "6px", transition: "color 0.15s ease, background 0.15s ease" }}
                className="hover:text-[var(--primary)] hover:bg-[var(--cream)]"
              >BLOG</Link>
            </li>

            {/* ABOUT US */}
            <li>
              <Link
                href="/about"
                style={{ display: "block", padding: "0.6rem 0.85rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", color: pathname === '/about' ? "var(--primary)" : "var(--text-dark)", borderRadius: "6px", transition: "color 0.15s ease, background 0.15s ease" }}
                className="hover:text-[var(--primary)] hover:bg-[var(--cream)]"
              >ABOUT US</Link>
            </li>

            {/* CONTACT */}
            <li>
              <Link
                href="/contact"
                style={{ display: "block", padding: "0.6rem 0.85rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", color: pathname === '/contact' ? "var(--primary)" : "var(--text-dark)", borderRadius: "6px", transition: "color 0.15s ease, background 0.15s ease" }}
                className="hover:text-[var(--primary)] hover:bg-[var(--cream)]"
              >CONTACT</Link>
            </li>
          </ul>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href="tel:0717140369"
              className="btn-primary desktop-nav"
              style={{ fontSize: "0.82rem", padding: "0.55rem 1.2rem" }}
            >
              📞 0717140369
            </a>

            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              style={{ background: "none", border: "none", cursor: "pointer", padding: "0.4rem", color: "var(--text-dark)" }}
            >
              {mobileMenuOpen ? (
                <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <div
          className="mobile-nav-toggle"
          style={{
            position: "fixed",
            top: "80px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "white",
            zIndex: 50,
            overflowY: "auto",
            transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease",
          }}
        >
          <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0" }}>
            <div style={{ paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)", marginBottom: "0.5rem" }}>
              <a
                href="tel:0717140369"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", fontSize: "0.95rem", padding: "0.85rem" }}
              >
                📞 Call 0717140369
              </a>
            </div>

            {[
              { label: "HOME", href: "/" },
              { label: "SERVICES", href: "/services" },
              { label: "SHOP", href: "/shop" },
              { label: "BLOG", href: "/blog" },
              { label: "ABOUT US", href: "/about" },
              { label: "CONTACT", href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: "1rem",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-dark)",
                  borderBottom: "1px solid var(--border)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  display: "block",
                }}
              >
                {label}
              </Link>
            ))}

            {/* Locations Accordion */}
            <div style={{ borderBottom: "1px solid var(--border)" }}>
              <button
                onClick={() => toggleAccordion("locations")}
                style={{
                  width: "100%",
                  padding: "1rem",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-dark)",
                  background: "none",
                  border: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  letterSpacing: "0.04em",
                }}
              >
                LOCATIONS
                <svg
                  width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  style={{ transform: openMobileAccordion === "locations" ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                style={{
                  overflow: "hidden",
                  maxHeight: openMobileAccordion === "locations" ? "1200px" : "0",
                  transition: "max-height 0.35s ease",
                }}
              >
                <div style={{ background: "var(--cream)", padding: "0.75rem 1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {locationsData.map((region) => (
                    <div key={region.slug}>
                      <button
                        onClick={() => toggleSubAccordion(region.slug)}
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          background: "white",
                          border: "1px solid var(--border)",
                          borderRadius: "8px",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          color: "var(--primary-dark)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        {region.region}
                        <svg
                          width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          style={{ transform: openMobileSubAccordion === region.slug ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s", flexShrink: 0 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <div
                        style={{
                          overflow: "hidden",
                          maxHeight: openMobileSubAccordion === region.slug ? "500px" : "0",
                          transition: "max-height 0.3s ease",
                        }}
                      >
                        <ul style={{ paddingLeft: "1.5rem", paddingTop: "0.75rem", paddingBottom: "0.75rem", listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                          <li>
                            <Link
                              href={`/locations/${region.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}
                            >
                              All {region.region} →
                            </Link>
                          </li>
                          {region.suburbs.map((suburb) => (
                            <li key={suburb.slug}>
                              <Link
                                href={`/locations/${suburb.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ color: "var(--text-mid)", fontSize: "0.875rem", textDecoration: "none" }}
                              >
                                {suburb.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ padding: "1.5rem 1rem" }}>
              <a href="tel:0717140369" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1.05rem", padding: "0.9rem 1.5rem" }}>
                📞 Call 0717140369
              </a>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
