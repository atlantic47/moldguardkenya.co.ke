import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Auto-serve local images as AVIF/WebP
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: 86400, // 24 hours — safe for images
  },

  async headers() {
    return [
      // ── HTML pages — NEVER cache. Google must be able to re-crawl freely. ──
      {
        source: "/((?!_next/static|_next/image|favicon.ico).*)",
        headers: [
          {
            key: "Cache-Control",
            // no-cache means "revalidate with server before using cached copy"
            // This keeps pages fresh for Google without disabling caching entirely
            value: "public, no-cache, must-revalidate",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "autoplay=(self), camera=(), microphone=()",
          },
        ],
      },
      // ── Next.js static chunks — safe to cache forever (content-hashed filenames) ──
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // ── Optimised images from Next.js Image — cache 24h ──
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=86400",
          },
        ],
      },
      // ── Videos — long cache, correct MIME, seekable ──
      {
        source: "/:path*.mp4",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
          { key: "Content-Type", value: "video/mp4" },
          { key: "Accept-Ranges", value: "bytes" },
        ],
      },
      // ── Static images in /public ──
      {
        source: "/:path*.jpg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  compress: true,

  // experimental.optimizeCss removed — causes build failures on Vercel with Next.js 16
};

export default nextConfig;
