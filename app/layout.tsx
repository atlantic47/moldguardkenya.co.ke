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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MoldGuard Kenya",
    "description": "MoldGuard Kenya is a trusted specialist in professional mold removal, mold inspection, and complete mold remediation services in Nairobi and surrounding areas. We focus on identifying, treating, and preventing mold problems in homes and commercial properties to ensure safe and healthy indoor environments. Our team uses advanced detection methods and proven techniques to remove mold at the source, including black mold, damp walls, and hidden growth behind ceilings and flooring. We deliver reliable solutions with minimal disruption and long term prevention. Contact MoldGuard Kenya today for expert mold inspection and removal services you can trust.",
    "url": "https://moldguardkenya.co.ke/",
    "logo": "https://moldguardkenya.co.ke/Moldguard services.jpg",
    "image": "https://moldguardkenya.co.ke/Moldguard services.jpg",
    "telephone": "+254710907628",
    "email": "info@moldguardkenya.co.ke",
    "foundingDate": "2015-08-22",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Development House, Moi Avenue",
      "addressLocality": "Nairobi",
      "postalCode": "00100",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-1.2825",
      "longitude": "36.8229"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "areaServed": [
      "Kenya",
      "Nairobi",
      "Mombasa"
    ],
    "sameAs": [
      "https://wa.me/254710907628",
      "https://web.facebook.com/moldguardKenya"
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect — cuts DNS + TLS handshake time for external resources */}
        <link rel="preconnect" href="https://storage.googleapis.com" />
        {/* Viewport — interactive-widget stops mobile keyboard resize from triggering CLS */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
