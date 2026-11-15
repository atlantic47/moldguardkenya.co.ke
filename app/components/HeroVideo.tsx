"use client";

import { useEffect, useState } from "react";

/**
 * The hero video is 16.6 MB. An autoplaying <video> downloads even when its
 * container is hidden with CSS, so it is only mounted on desktop-width screens,
 * after the page has loaded, and never for visitors on a data-saver connection.
 */
export default function HeroVideo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 769px)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (!desktop || conn?.saveData) return;

    const mount = () => setShow(true);
    if (document.readyState === "complete") {
      mount();
    } else {
      window.addEventListener("load", mount, { once: true });
      return () => window.removeEventListener("load", mount);
    }
  }, []);

  if (!show) return null;

  return (
    <video
      src="/Mold removal service in Nairobi.mp4"
      autoPlay
      muted
      loop
      playsInline
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      aria-label="MoldGuard Kenya mold removal service in Nairobi"
    />
  );
}
