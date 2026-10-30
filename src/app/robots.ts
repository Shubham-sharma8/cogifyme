import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url; // "https://cogify.me"

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/", "/_next/image/", "/brand/", "/Others/", "/screenshots/"],
        disallow: ["/admin", "/admin/", "/api", "/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-News",
          "GoogleOther",
          "Bingbot",
          "Applebot",
          "DuckDuckBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
        ],
        allow: ["/", "/_next/static/", "/_next/image/", "/brand/", "/Others/", "/screenshots/"],
        disallow: ["/admin", "/admin/", "/api", "/api/"],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      "https://biodata.cogify.me/sitemap.xml",
      "https://ssb.cogify.me/sitemap.xml",
    ],
  };
}

