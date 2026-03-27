import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mold Removal & Remediation Services in Kenya | MoldGuard Kenya",
  description:
    "MoldGuard Kenya offers expert mold removal and remediation services across Kenya. We use advanced moisture detection, HEPA filtration, and proven protocols to eliminate mold and improve your indoor air quality. Call 0717140369.",
  keywords:
    "mold removal Kenya, mold remediation Nairobi, indoor air quality, moisture detection, HEPA filtration, mold inspection Kenya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
