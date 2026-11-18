import { MetadataRoute } from "next";
import { getAllSeoMetadata } from "@/lib/markdown";
import { products } from "@/lib/data/products";
import { servicePages } from "@/lib/data/services";

// lastModified must reflect when the CONTENT last changed. File modification
// times cannot be used: on Vercel every file gets the build time, so all URLs
// reported the same date and Google learned to ignore it.
//
// - Blog and location pages: read `updated` (or `date`) from the markdown frontmatter.
// - Static pages and products: the dates below. Bump the date whenever you edit
//   that page (including product copy in lib/data/productSeo.ts), then deploy and
//   run `npm run indexnow` to tell Bing and the other IndexNow engines.
const PRODUCTS_UPDATED = "2026-11-15";

const staticRoutes: { route: string; updated: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { route: "",                               updated: "2026-11-15", changeFrequency: "weekly",  priority: 1.0 },
  { route: "/about",                         updated: "2026-11-15", changeFrequency: "monthly", priority: 0.8 },
  { route: "/services",                      updated: "2026-11-15", changeFrequency: "weekly",  priority: 0.9 },
  { route: "/services/air-scrubbing",        updated: "2026-11-15", changeFrequency: "monthly", priority: 0.8 },
  { route: "/services/indoor-air-quality",   updated: "2026-07-28", changeFrequency: "monthly", priority: 0.8 },
  { route: "/shop",                          updated: "2026-11-15", changeFrequency: "monthly", priority: 0.8 },
  { route: "/shop/dehumidifiers",            updated: "2026-11-15", changeFrequency: "monthly", priority: 0.8 },
  { route: "/shop/air-purifiers",            updated: "2026-11-15", changeFrequency: "monthly", priority: 0.8 },
  { route: "/shop/mold-removal-products",    updated: "2026-11-15", changeFrequency: "monthly", priority: 0.8 },
  { route: "/blog",                          updated: "2026-11-15", changeFrequency: "weekly",  priority: 0.7 },
  { route: "/locations",                     updated: "2026-11-15", changeFrequency: "monthly", priority: 0.8 },
  { route: "/contact",                       updated: "2026-11-15", changeFrequency: "monthly", priority: 0.7 },
  { route: "/bookings",                      updated: "2026-11-15", changeFrequency: "monthly", priority: 0.9 },
];

function contentDate(data: { date?: string; updated?: string }, fallback: string): Date {
  return new Date(data.updated || data.date || fallback);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://moldguardkenya.co.ke";

  const pages = staticRoutes.map(({ route, updated, changeFrequency, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(updated),
    changeFrequency,
    priority,
  }));

  const serviceRoutes = servicePages.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(service.updated),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/shop/${product.slug}`,
    lastModified: new Date(PRODUCTS_UPDATED),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = getAllSeoMetadata("blog").map(({ slug, data }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: contentDate(data, "2026-03-27"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationRoutes = getAllSeoMetadata("locations").map(({ slug, data }) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: contentDate(data, "2026-03-27"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...serviceRoutes, ...productRoutes, ...blogRoutes, ...locationRoutes];
}
