import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL, buildMetadata } from "@/lib/seo";

// Load Inter via next/font — zero layout shift, auto font-display:swap, self-hosted by Next.js
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  // metadataBase makes relative image URLs in Open Graph / Twitter tags absolute
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    title: "Mold Removal Services in Nairobi, Kenya | MoldGuard Kenya",
    description:
      "MoldGuard Kenya offers expert mold (mould) removal and remediation services in Nairobi, Kenya. We use advanced moisture detection, HEPA filtration, and proven protocols to eliminate mold and improve your indoor air quality. Call 0710907628.",
    path: "",
  }),
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
