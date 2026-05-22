import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter via next/font — zero layout shift, auto font-display:swap, self-hosted by Next.js
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  title: "Mold Removal & Remediation Services in Kenya | MoldGuard Kenya",
  description:
    "MoldGuard Kenya offers expert mold removal and remediation services across Kenya. We use advanced moisture detection, HEPA filtration, and proven protocols to eliminate mold and improve your indoor air quality. Call 0710907628.",
  keywords:
    "mold removal Kenya, mold remediation Nairobi, indoor air quality, moisture detection, HEPA filtration, mold inspection Kenya",
  alternates: { canonical: "https://moldguardkenya.co.ke" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect — cuts DNS + TLS handshake time for external resources */}
        <link rel="preconnect" href="https://storage.googleapis.com" />
        {/* Viewport — interactive-widget stops mobile keyboard resize from triggering CLS */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content" />
      </head>
      <body>{children}</body>
    </html>
  );
}
