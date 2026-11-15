import type { Metadata } from "next";

export const SITE_URL = "https://moldguardkenya.co.ke";
export const SITE_NAME = "MoldGuard Kenya";
export const DEFAULT_OG_IMAGE = "/og-moldguard-kenya.jpg";
// Stable @id values so every page's schema points at the same business entity
export const ORG_ID = `${SITE_URL}/#organization`;
export const BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const LOGO_URL = `${SITE_URL}/icon`;
// Google Business Profile share link (reviews live here)
export const GOOGLE_PROFILE_URL = "https://share.google/rvBrYPkspvx5K0wnz";

interface PageMetaInput {
  title: string;
  description: string;
  /** Path starting with "/" ("" for the homepage) */
  path: string;
  image?: string;
  type?: "website" | "article";
}

/**
 * Builds title, description, canonical, Open Graph and Twitter tags together.
 * Next.js merges metadata shallowly, so a page that sets only `title` would
 * otherwise inherit the root layout's og:title and og:url.
 */
export function buildMetadata({ title, description, path, image, type = "website" }: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const img = image || DEFAULT_OG_IMAGE;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_KE",
      type,
      images: [{ url: img, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img],
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.path}`,
    })),
  };
}
