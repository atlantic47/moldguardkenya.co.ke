import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve local /public images as WebP/AVIF automatically
    formats: ["image/avif", "image/webp"],
    // Remote patterns for external images still needed
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
    // Aggressive caching — images don't change often
    minimumCacheTTL: 31536000, // 1 year in seconds
  },

  // Add security + performance HTTP headers globally
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Tell browsers to aggressively cache static assets
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          // Security headers that Google also considers as quality signals
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Allow video autoplay (needed for muted hero video on iOS)
          {
            key: "Permissions-Policy",
            value: "autoplay=(self), camera=(), microphone=()",
          },
        ],
      },
      // Videos — long cache TTL, correct MIME type
      {
        source: "/:path*.mp4",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          { key: "Content-Type", value: "video/mp4" },
          // Allow range requests so browsers can seek without re-downloading
          { key: "Accept-Ranges", value: "bytes" },
        ],
      },
      // Images — long cache + correct MIME
      {
        source: "/:path*.jpg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Compress all responses
  compress: true,

  // Experimental: enable partial prerendering for even faster FCP
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
