import { MetadataRoute } from "next";

// AI assistants only recommend businesses they are allowed to read. These are
// the crawlers and live-browsing agents used by ChatGPT, Claude, Perplexity,
// Gemini, Copilot and Apple. They were already allowed by the "*" rule; naming
// them makes the permission explicit and protects it if "*" is ever tightened.
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: AI_AGENTS, allow: "/", disallow: "/api/" },
    ],
    sitemap: "https://moldguardkenya.co.ke/sitemap.xml",
  };
}
