import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import ServicesSection from "./components/ServicesSection";
import MarkdownRenderer from "./components/MarkdownRenderer";
import { getRawMarkdownFile } from "@/lib/markdown";

// Below-fold components — dynamically imported to reduce initial JS bundle size
// This directly improves Time to Interactive (TTI) and INP scores
const WorkGallery = dynamic(() => import("./components/WorkGallery"), { ssr: true });
const FAQSection = dynamic(() => import("./components/FAQSection"), { ssr: true });
const HomepageDeepLinks = dynamic(() => import("./components/HomepageDeepLinks"), { ssr: true });
const NewsletterSection = dynamic(() => import("./components/NewsletterSection"), { ssr: true });
const Footer = dynamic(() => import("./components/Footer"), { ssr: true });

export const metadata: Metadata = {
  title: "MoldGuard Kenya | Professional Mold Removal, Remediation and Treatment Services Company in Nairobi, Kenya",
  description: "MoldGuard Kenya is the leading professional mold removal services company in Kenya. We provide IICRC-certified mold inspections, safe black mold eradication, and permanent moisture solutions for homes and businesses.",
  alternates: { canonical: "https://moldguardkenya.co.ke" },
};

const BASE = "https://moldguardkenya.co.ke";
const THUMB = `${BASE}/Moldguard services.jpg`;
const THUMB_MUTHAIGA = `${BASE}/Mold removal-muthaiga.jpg`;
const THUMB_EASTLEIGH = `${BASE}/Mold removal Eastleigh.jpg`;

// ── Hero video schema — Google Video Rich Result eligibility ────────────────
const heroVideoSchema = {
  "@type": "VideoObject",
  "@id": "https://moldguardkenya.co.ke/#herovideo",
  "name": "Professional Mold Removal Service in Nairobi, Kenya — MoldGuard Kenya",
  "description": "Watch MoldGuard Kenya certified technicians perform a full professional mold removal and remediation job in Nairobi. Includes HEPA filtration, containment barriers, and advanced moisture detection.",
  "thumbnailUrl": THUMB,
  "contentUrl": `${BASE}/Mold removal service in Nairobi.mp4`,
  "uploadDate": "2024-06-01T00:00:00+03:00",
  "duration": "PT3M",
  "publisher": {
    "@type": "Organization",
    "name": "MoldGuard Kenya",
    "logo": { "@type": "ImageObject", "url": THUMB }
  }
};

// ── Gallery videos — ItemList of VideoObject for all 11 real job jobs ────────
const galleryVideosSchema = {
  "@type": "ItemList",
  "@id": "https://moldguardkenya.co.ke/#videogallery",
  "name": "MoldGuard Kenya — Real Mold Removal Jobs Across Kenya",
  "description": "Real mold removal and remediation job videos by MoldGuard Kenya across Nairobi and Mombasa.",
  "itemListElement": [
    {
      "@type": "ListItem", "position": 1,
      "item": {
        "@type": "VideoObject",
        "name": "Mold Removal Service in Nairobi CBD — MoldGuard Kenya",
        "description": "Professional mold removal job by MoldGuard Kenya in Nairobi CBD, Kenya.",
        "thumbnailUrl": THUMB,
        "contentUrl": `${BASE}/Mold removal service in Nairobi.mp4`,
        "uploadDate": "2024-06-01T00:00:00+03:00", "duration": "PT3M"
      }
    },
    {
      "@type": "ListItem", "position": 2,
      "item": {
        "@type": "VideoObject",
        "name": "Mold Removal in Eastleigh Nairobi — MoldGuard Kenya",
        "description": "MoldGuard Kenya mold remediation job in Eastleigh, Nairobi.",
        "thumbnailUrl": THUMB_EASTLEIGH,
        "contentUrl": `${BASE}/Mold removal eastleigh.mp4`,
        "uploadDate": "2024-07-01T00:00:00+03:00", "duration": "PT2M"
      }
    },
    {
      "@type": "ListItem", "position": 3,
      "item": {
        "@type": "VideoObject",
        "name": "Mold Removal in Karen Nairobi — MoldGuard Kenya",
        "description": "Professional mold removal and treatment job by MoldGuard Kenya in Karen, Nairobi.",
        "thumbnailUrl": THUMB,
        "contentUrl": `${BASE}/mold removal karen.mp4`,
        "uploadDate": "2024-08-01T00:00:00+03:00", "duration": "PT2M"
      }
    },
    {
      "@type": "ListItem", "position": 4,
      "item": {
        "@type": "VideoObject",
        "name": "Mold Removal in Muthaiga Nairobi — MoldGuard Kenya",
        "description": "MoldGuard Kenya mold remediation job in Muthaiga, Nairobi.",
        "thumbnailUrl": THUMB_MUTHAIGA,
        "contentUrl": `${BASE}/mold removal muthaiga.mp4`,
        "uploadDate": "2024-08-15T00:00:00+03:00", "duration": "PT2M"
      }
    },
    {
      "@type": "ListItem", "position": 5,
      "item": {
        "@type": "VideoObject",
        "name": "Mold Removal in Loresho Nairobi — MoldGuard Kenya",
        "description": "Professional mold treatment by MoldGuard Kenya in Loresho, Nairobi.",
        "thumbnailUrl": THUMB,
        "contentUrl": `${BASE}/Mold -removal-loresho.mp4`,
        "uploadDate": "2024-09-01T00:00:00+03:00", "duration": "PT4M"
      }
    },
    {
      "@type": "ListItem", "position": 6,
      "item": {
        "@type": "VideoObject",
        "name": "Mold Removal in Lavington Nairobi — MoldGuard Kenya",
        "description": "MoldGuard Kenya mold remediation and structural drying job in Lavington, Nairobi.",
        "thumbnailUrl": THUMB,
        "contentUrl": `${BASE}/mold-removal-lavington.mp4`,
        "uploadDate": "2024-09-15T00:00:00+03:00", "duration": "PT2M"
      }
    },
    {
      "@type": "ListItem", "position": 7,
      "item": {
        "@type": "VideoObject",
        "name": "Mold Removal in Kitisuru Nairobi — MoldGuard Kenya",
        "description": "Extensive mold removal and remediation by MoldGuard Kenya in Kitisuru, Nairobi.",
        "thumbnailUrl": THUMB,
        "contentUrl": `${BASE}/mold-removal-kitisuru.mp4`,
        "uploadDate": "2024-10-01T00:00:00+03:00", "duration": "PT6M"
      }
    },
    {
      "@type": "ListItem", "position": 8,
      "item": {
        "@type": "VideoObject",
        "name": "Mold Removal in Langata Nairobi — MoldGuard Kenya",
        "description": "MoldGuard Kenya mold removal job in Langata, Nairobi.",
        "thumbnailUrl": THUMB,
        "contentUrl": `${BASE}/mold removal kenya-langata.mp4`,
        "uploadDate": "2024-10-15T00:00:00+03:00", "duration": "PT2M"
      }
    },
    {
      "@type": "ListItem", "position": 9,
      "item": {
        "@type": "VideoObject",
        "name": "Mold Cleaning in Garden Estate Nairobi — MoldGuard Kenya",
        "description": "MoldGuard Kenya mold cleaning and remediation in Garden Estate, Nairobi.",
        "thumbnailUrl": THUMB,
        "contentUrl": `${BASE}/Mold cleaning Garden estate.mp4`,
        "uploadDate": "2024-11-01T00:00:00+03:00", "duration": "PT1M"
      }
    },
    {
      "@type": "ListItem", "position": 10,
      "item": {
        "@type": "VideoObject",
        "name": "Mold Removal in Mombasa — MoldGuard Kenya",
        "description": "Professional mold removal and treatment by MoldGuard Kenya in Mombasa, Kenya.",
        "thumbnailUrl": THUMB,
        "contentUrl": `${BASE}/mold-removal-mombasa.mp4`,
        "uploadDate": "2024-11-15T00:00:00+03:00", "duration": "PT3M"
      }
    },
    {
      "@type": "ListItem", "position": 11,
      "item": {
        "@type": "VideoObject",
        "name": "Mold Removal Services in Nairobi Kenya — MoldGuard Kenya",
        "description": "Full mold removal and remediation service job video by MoldGuard Kenya across Nairobi.",
        "thumbnailUrl": THUMB_MUTHAIGA,
        "contentUrl": `${BASE}/Mold removal services in Nairobi Kenya.mp4`,
        "uploadDate": "2024-12-01T00:00:00+03:00", "duration": "PT8M"
      }
    }
  ]
};

// ── Organization — tells Google who MoldGuard Kenya IS as an entity ──────────
const organizationSchema = {
  "@type": "Organization",
  "@id": "https://moldguardkenya.co.ke/#organization",
  "name": "MoldGuard Kenya",
  "alternateName": ["Mold Guard Kenya", "MoldGuard"],
  "url": "https://moldguardkenya.co.ke",
  "logo": {
    "@type": "ImageObject",
    "url": "https://moldguardkenya.co.ke/Moldguard services.jpg",
    "width": 1200,
    "height": 630
  },
  "image": "https://moldguardkenya.co.ke/Moldguard services.jpg",
  "description": "MoldGuard Kenya is Kenya's leading certified mold removal and remediation company, serving Nairobi, Mombasa, and all major towns since 2015.",
  "telephone": "+254710907628",
  "email": "info@moldguardkenya.co.ke",
  "foundingDate": "2015",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Development House, Moi Avenue",
    "addressLocality": "Nairobi",
    "addressCountry": "KE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254710907628",
    "contactType": "customer service",
    "areaServed": "KE",
    "availableLanguage": ["English", "Swahili"]
  },
  "sameAs": [
    "https://web.facebook.com/moldguardKenya",
    "https://wa.me/254710907628"
  ]
};

// ── WebSite — enables Sitelinks Searchbox on brand name SERP ─────────────────
const webSiteSchema = {
  "@type": "WebSite",
  "@id": "https://moldguardkenya.co.ke/#website",
  "name": "MoldGuard Kenya",
  "url": "https://moldguardkenya.co.ke",
  "description": "Professional mold removal, remediation and treatment services in Kenya.",
  "inLanguage": "en-KE",
  "publisher": {
    "@id": "https://moldguardkenya.co.ke/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://moldguardkenya.co.ke/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// ── LocalBusiness — unified mapping of regional business presence ───────────
const localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": "https://moldguardkenya.co.ke/#localbusiness",
  "name": "MoldGuard Kenya",
  "description": "MoldGuard Kenya is a trusted specialist in professional mold removal, mold inspection, and complete mold remediation services in Nairobi and surrounding areas. We focus on identifying, treating, and preventing mold problems in homes and commercial properties to ensure safe and healthy indoor environments. Our team uses advanced detection methods and proven techniques to remove mold at the source, including black mold, damp walls, and hidden growth behind ceilings and flooring. We deliver reliable solutions with minimal disruption and long term prevention. Contact MoldGuard Kenya today for expert mold inspection and removal services you can trust.",
  "url": "https://moldguardkenya.co.ke",
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
  ],
  "parentOrganization": {
    "@id": "https://moldguardkenya.co.ke/#organization"
  }
};

function generateFAQSchema(content: string) {
  const faqSection = content.split("## FAQ")[1];
  if (!faqSection) return null;

  const faqs = [];
  const parts = faqSection.split("### ").slice(1);

  for (const part of parts) {
    const lines = part.split("\n");
    const question = lines[0].trim();
    const answer = lines.slice(1).join(" ").trim().replace(/\*/g, "");
    if (question && answer) {
      faqs.push({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      });
    }
  }

  return {
    "@type": "FAQPage",
    "@id": "https://moldguardkenya.co.ke/#faq",
    "mainEntity": faqs
  };
}

export default async function Home() {
  const { content } = getRawMarkdownFile("homepage.md");
  const faqSchema = generateFAQSchema(content);

  const keyTakeawaysIndex = content.indexOf("### Key Takeaways");
  let mainContent = keyTakeawaysIndex !== -1 ? content.substring(keyTakeawaysIndex) : content;

  const faqIndex = mainContent.indexOf("## FAQ");
  if (faqIndex !== -1) {
    mainContent = mainContent.substring(0, faqIndex);
  }

  // Compile all individual schemas into a single optimized @graph schema
  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      webSiteSchema,
      localBusinessSchema,
      heroVideoSchema,
      galleryVideosSchema,
      ...(faqSchema ? [faqSchema] : [])
    ]
  };

  return (
    <>
      {/* Consolidated Schema Graph — unifies entities, resolves duplicate FAQPage, and trailing slash conflicts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ServicesSection />
        <WorkGallery />

        <section className="container py-12" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <MarkdownRenderer content={mainContent} />
        </section>

        <FAQSection />
        <HomepageDeepLinks />
      </main>
      <NewsletterSection />
      <Footer />
    </>
  );
}
