import type { Metadata } from "next";

// ── Booking Page — SEO Metadata & Schema ────────────────────────────────────
// Kept in a separate server-side file because the main page.tsx is "use client"
// and Next.js cannot export metadata from client components.

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

// ── Booking Page — JSON-LD Schema ───────────────────────────────────────────
export const bookingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://moldguardkenya.co.ke/bookings",
      "name": "Book Mold Removal Service in Nairobi, Kenya",
      "description":
        "Book a certified mold removal and remediation service in Nairobi, Kenya with MoldGuard Kenya. Free on-site inspection, same-day emergency response, eco-friendly treatments.",
      "url": "https://moldguardkenya.co.ke/bookings",
      "inLanguage": "en-KE",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://moldguardkenya.co.ke" },
          { "@type": "ListItem", "position": 2, "name": "Book a Service", "item": "https://moldguardkenya.co.ke/bookings" },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://moldguardkenya.co.ke/bookings#service",
      "name": "Mold Removal and Remediation Service in Nairobi, Kenya",
      "description":
        "Professional mold removal, mold inspection, black mold eradication, air scrubbing, and moisture control services in Nairobi, Kenya by MoldGuard Kenya.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://moldguardkenya.co.ke/#localbusiness",
        "name": "MoldGuard Kenya",
        "telephone": "+254710907628",
        "email": "moldguard@pestraid.co.ke",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Development House, Moi Avenue",
          "addressLocality": "Nairobi",
          "postalCode": "00100",
          "addressCountry": "KE",
        },
      },
      "areaServed": [
        { "@type": "City", "name": "Nairobi", "containedInPlace": { "@type": "Country", "name": "Kenya" } },
        { "@type": "City", "name": "Mombasa", "containedInPlace": { "@type": "Country", "name": "Kenya" } },
      ],
      "serviceType": "Mold Remediation",
      "url": "https://moldguardkenya.co.ke/bookings",
    },
    {
      "@type": "FAQPage",
      "@id": "https://moldguardkenya.co.ke/bookings#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How soon will you get back to me after I submit a booking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We confirm all bookings within 1 hour during business hours and within 3 hours outside of them. For emergencies, call us directly on 0710907628 for an immediate response.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the initial mold inspection free in Nairobi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer a free initial consultation and site assessment for residential properties within our core Nairobi and Mombasa service areas.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer same-day mold removal in Nairobi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. For urgent mold emergencies in Nairobi and surrounding areas, we offer same-day response. Call 0710907628 for immediate assistance.",
          },
        },
      ],
    },
  ],
};
