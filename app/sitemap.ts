import { MetadataRoute } from "next";
import { getAllSeoSlugs } from "@/lib/markdown";
import { products } from "@/lib/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://moldguardkenya.co.ke";

  // 1. Base static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/shop",
    "/blog",
    "/locations",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Shop dynamic routes (High Priority)
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/shop/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // 3. Blog dynamic routes
  const blogSlugs = getAllSeoSlugs("blog");
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 4. Locations dynamic routes
  const locationSlugs = getAllSeoSlugs("locations");
  const locationRoutes = locationSlugs.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes, ...locationRoutes];
}
