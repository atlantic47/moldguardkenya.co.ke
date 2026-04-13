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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MoldGuard Kenya",
    "description": "MoldGuard Kenya is a trusted specialist in professional mold removal, mold inspection, and complete mold remediation services in Nairobi and surrounding areas. We focus on identifying, treating, and preventing mold problems in homes and commercial properties to ensure safe and healthy indoor environments. Our team uses advanced detection methods and proven techniques to remove mold at the source, including black mold, damp walls, and hidden growth behind ceilings and flooring. We deliver reliable solutions with minimal disruption and long term prevention. Contact MoldGuard Kenya today for expert mold inspection and removal services you can trust.",
    "url": "https://moldguardkenya.co.ke/",
    "logo": "https://moldguardkenya.co.ke/icon",
    "image": "https://moldguardkenya.co.ke/icon",
    "telephone": "+254717140369",
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
      "https://wa.me/254717140369",
      "https://web.facebook.com/moldguardKenya"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
