import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mould Removal & Remediation Services in Kenya | MoldGuard Kenya",
  description:
    "MoldGuard Kenya offers expert mould removal and remediation services across Kenya. We use advanced moisture detection, HEPA filtration, and proven protocols to eliminate mould and improve your indoor air quality. Call 0717140369.",
  keywords:
    "mould removal Kenya, mould remediation Nairobi, indoor air quality, moisture detection, HEPA filtration, mould inspection Kenya",
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
