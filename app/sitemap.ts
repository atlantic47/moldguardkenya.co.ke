import { MetadataRoute } from "next";
import { getAllSeoSlugs } from "@/lib/markdown";
import { products } from "@/lib/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://moldguardkenya.co.ke";

  // 1. Base static routes — use real publish/update dates (NOT new Date() which changes on every build)
  const staticRoutes = [
    { route: "",           date: "2024-01-01", priority: 1.0 },
    { route: "/about",     date: "2024-03-01", priority: 0.8 },
    { route: "/services",  date: "2024-03-01", priority: 0.9 },
    { route: "/shop",      date: "2024-06-01", priority: 0.9 },
    { route: "/blog",      date: "2024-04-01", priority: 0.8 },
    { route: "/locations", date: "2024-04-01", priority: 0.8 },
    { route: "/contact",   date: "2024-03-01", priority: 0.7 },
  ].map(({ route, date, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(date),
    changeFrequency: "monthly" as const,
    priority,
  }));

  // 2. Shop dynamic routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/shop/${product.slug}`,
    lastModified: new Date("2024-06-01"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // 3. Blog dynamic routes
  const blogSlugs = getAllSeoSlugs("blog");
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date("2024-04-01"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 4. Locations dynamic routes
  const locationSlugs = getAllSeoSlugs("locations");
  const locationRoutes = locationSlugs.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date("2024-04-01"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes, ...locationRoutes];
}
