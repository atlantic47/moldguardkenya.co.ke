import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
  bgImage?: string;
}

export default function PageHero({ title, subtitle, breadcrumbs, bgImage }: PageHeroProps) {
  const defaultBg = "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/417cdae0-103b-4ab8-8f34-fa52d18e1e0f/bdc0a608-b645-429e-bd9b-0d82d8168f34.jpg";

  return (
    <section style={{ position: "relative", padding: "6rem 0", background: "var(--primary-dark)", overflow: "hidden" }}>
      {/* Background Image with Overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src={bgImage || defaultBg}
          alt={title}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(30,58,15,0.9) 0%, rgba(30,58,15,0.7) 100%)" }} />
      </div>

      <div className="container relative z-10 text-white">
        {/* Breadcrumbs */}
        <nav style={{ display: "flex", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 500, marginBottom: "1.5rem", color: "rgba(255,255,255,0.7)" }}>
          {breadcrumbs.map((crumb, idx) => (
            <span key={crumb.label} style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              {crumb.href ? (
                <Link href={crumb.href} style={{ color: "var(--gold-light)", textDecoration: "none" }} className="hover:underline">
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ color: "white" }}>{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && <span>/</span>}
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: subtitle ? "1rem" : "0", maxWidth: "800px" }}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, maxWidth: "600px" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
