// Server component — exports metadata and injects JSON-LD schema for the /bookings route.
// The actual interactive page is in page.tsx ("use client").
import type { Metadata } from "next";
import { bookingSchema } from "./metadata";

export const metadata: Metadata = {
  title: "Book Mold Removal Service in Nairobi, Kenya | MoldGuard Kenya",
  description:
    "Book a certified mold removal and remediation service in Nairobi, Kenya with MoldGuard Kenya. Free on-site inspection, same-day emergency response, eco-friendly treatments. Call 0710907628.",
  keywords:
    "book mold removal Nairobi, mold removal appointment Kenya, mold inspection booking Nairobi, mold remediation service Nairobi Kenya, MoldGuard Kenya booking",
  alternates: { canonical: "https://moldguardkenya.co.ke/bookings" },
  openGraph: {
    title: "Book Mold Removal Service in Nairobi, Kenya | MoldGuard Kenya",
    description:
      "Schedule a free mold inspection or full remediation service in Nairobi, Kenya. MoldGuard Kenya certified technicians respond within hours.",
    url: "https://moldguardkenya.co.ke/bookings",
    siteName: "MoldGuard Kenya",
    images: [
      {
        url: "https://moldguardkenya.co.ke/Moldguard services.jpg",
        width: 1200,
        height: 630,
        alt: "MoldGuard Kenya — Book Mold Removal Service in Nairobi",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Mold Removal Service in Nairobi, Kenya | MoldGuard Kenya",
    description:
      "Schedule a free mold inspection or full remediation in Nairobi, Kenya. Same-day emergency response available. Call 0710907628.",
    images: ["https://moldguardkenya.co.ke/Moldguard services.jpg"],
  },
};

export default function BookingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* JSON-LD schema injected server-side for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchema) }}
      />
      {children}
    </>
  );
}
