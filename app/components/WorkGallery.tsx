"use client";

import { useRef, useState } from "react";

const videos = [
  { src: "/Mold removal service in Nairobi.mp4", label: "Nairobi",       area: "Nairobi CBD" },
  { src: "/Mold removal eastleigh.mp4",         label: "Eastleigh",     area: "Eastleigh, Nairobi" },
  { src: "/mold removal karen.mp4",             label: "Karen",         area: "Karen, Nairobi" },
  { src: "/mold removal muthaiga.mp4",          label: "Muthaiga",      area: "Muthaiga, Nairobi" },
  { src: "/Mold -removal-loresho.mp4",          label: "Loresho",       area: "Loresho, Nairobi" },
  { src: "/mold-removal-lavington.mp4",         label: "Lavington",     area: "Lavington, Nairobi" },
  { src: "/mold-removal-kitisuru.mp4",          label: "Kitisuru",      area: "Kitisuru, Nairobi" },
  { src: "/mold removal kenya-langata.mp4",         label: "Langata",       area: "Langata, Nairobi" },
  { src: "/Mold cleaning Garden estate.mp4",    label: "Garden Estate", area: "Garden Estate, Nairobi" },
  { src: "/mold-removal-mombasa.mp4",           label: "Mombasa",       area: "Mombasa" },
  { src: "/Mold removal services in Nairobi Kenya.mp4", label: "Nairobi (Full Job)", area: "Nairobi, Kenya" },
];

export default function WorkGallery() {
  const [active, setActive] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number) => {
    // Pause any other playing video
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) { v.pause(); }
    });
    setActive(index);
  };

  return (
    <section style={{ background: "var(--primary-dark)", padding: "5rem 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            📹 Real Work. Real Results.
          </p>
          <h2 style={{ color: "white", fontWeight: 900, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem", lineHeight: 1.2 }}>
            Watch Our Teams in Action Across Kenya
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "600px", margin: "0 auto" }}>
            Every video below is a real mold removal job completed by our certified technicians — from Karen to Mombasa.
          </p>
        </div>

        {/* Video grid */}
        <div className="work-gallery-grid">
          {videos.map((video, i) => (
            <div
              key={video.src}
              style={{
                position: "relative",
                borderRadius: "1.25rem",
                overflow: "hidden",
                background: "#111",
                border: active === i ? "2px solid var(--accent)" : "2px solid rgba(255,255,255,0.08)",
                transition: "border-color 0.2s, transform 0.2s",
                transform: active === i ? "scale(1.02)" : "scale(1)",
                boxShadow: active === i ? "0 8px 32px rgba(0,0,0,0.5)" : "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              {/* Location badge */}
              <div style={{
                position: "absolute", top: "0.75rem", left: "0.75rem", zIndex: 10,
                background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)",
                color: "white", borderRadius: "999px",
                padding: "0.3rem 0.8rem", fontSize: "0.72rem", fontWeight: 700,
                display: "flex", alignItems: "center", gap: "0.35rem",
              }}>
                📍 {video.area}
              </div>

              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={video.src}
                controls
                playsInline
                preload="metadata"
                onPlay={() => handlePlay(i)}
                style={{ width: "100%", display: "block", aspectRatio: "9/16", objectFit: "cover", background: "#000" }}
                aria-label={`MoldGuard Kenya mold removal job in ${video.area}`}
              />
            </div>
          ))}
        </div>

        {/* CTA below */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "1.5rem", fontSize: "1rem" }}>
            Ready to get the same results for your home or business?
          </p>
          <a
            href="tel:0710907628"
            className="btn-gold"
            style={{ fontSize: "1rem", padding: "0.85rem 2.5rem" }}
          >
            📞 Call 0710 907 628 for a Free Assessment
          </a>
        </div>
      </div>

      <style>{`
        .work-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        @media (max-width: 1200px) {
          .work-gallery-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .work-gallery-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .work-gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
