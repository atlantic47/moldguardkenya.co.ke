import { MetadataRoute } from "next";
import { getAllSeoSlugs } from "@/lib/markdown";
import { products } from "@/lib/data/products";
import fs from "fs";
import path from "path";

// Helper to dynamically read the last modification date of a file.
// If the file exists, it returns its actual filesystem modification timestamp (mtime).
// Otherwise, it falls back to a safe baseline date.
function getFileMtime(relativeFilePath: string, fallbackDateStr: string): Date {
  try {
    const fullPath = path.join(process.cwd(), relativeFilePath);
    if (fs.existsSync(fullPath)) {
      return fs.statSync(fullPath).mtime;
    }
  } catch (error) {
    console.error(`Error reading mtime for ${relativeFilePath}:`, error);
  }
  return new Date(fallbackDateStr);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://moldguardkenya.co.ke";

  // 1. Base static routes — read real-time filesystem modification times dynamically
  const staticRoutes = [
    { route: "",           file: "homepage.md",           fallback: "2024-01-01", changeFrequency: "weekly" as const, priority: 1.0 },
    { route: "/about",     file: "app/about/page.tsx",    fallback: "2024-03-01", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/services",  file: "services.md",           fallback: "2024-03-01", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/shop",      file: "app/shop/page.tsx",     fallback: "2024-06-01", changeFrequency: "monthly" as const, priority: 0.9 },
    { route: "/shop/dehumidifiers", file: "app/shop/dehumidifiers/page.tsx", fallback: "2026-07-20", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/shop/air-purifiers", file: "app/shop/air-purifiers/page.tsx", fallback: "2026-07-20", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/shop/mold-removal-products", file: "app/shop/mold-removal-products/page.tsx", fallback: "2026-07-20", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/blog",      file: "app/blog/page.tsx",     fallback: "2024-04-01", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/locations", file: "app/locations/page.tsx",fallback: "2024-04-01", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/contact",   file: "app/contact/page.tsx",  fallback: "2024-03-01", changeFrequency: "monthly" as const, priority: 0.7 },
  ].map(({ route, file, fallback, changeFrequency, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: getFileMtime(file, fallback),
    changeFrequency,
    priority,
  }));

  // 2. Shop dynamic routes — read the products data file modification time
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/shop/${product.slug}`,
    lastModified: getFileMtime("lib/data/products.ts", "2024-06-01"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // 3. Blog dynamic routes — read each specific blog article markdown file's modification time
  const blogSlugs = getAllSeoSlugs("blog");
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: getFileMtime(`seo_content/blog/${slug}.md`, "2024-04-01"),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 4. Locations dynamic routes — read each specific location landing page markdown file's modification time
  const locationSlugs = getAllSeoSlugs("locations");
  const locationRoutes = locationSlugs.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: getFileMtime(`seo_content/locations/${slug}.md`, "2024-04-01"),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes, ...locationRoutes];
}
