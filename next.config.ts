import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 1. Enforce apex canonical domain (redirect www to non-www)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.cogify.me",
          },
        ],
        destination: "https://cogify.me/:path*",
        permanent: true,
      },
      // 2. Short URL & product path aliases
      {
        source: "/emdoc",
        destination: "/products/emdoc",
        permanent: true,
      },
      {
        source: "/products/element-hider",
        destination: "/element-hider",
        permanent: true,
      },
      {
        source: "/products/element-hider/privacy",
        destination: "/element-hider/privacy",
        permanent: true,
      },
      {
        source: "/products/invert",
        destination: "/invert",
        permanent: true,
      },
      {
        source: "/colour-invert",
        destination: "/invert",
        permanent: true,
      },
      {
        source: "/products/invert/privacy",
        destination: "/invert/privacy",
        permanent: true,
      },
      // 3. Consolidate duplicate legal paths to canonical URLs
      {
        source: "/legal/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/legal/terms",
        destination: "/terms",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      // Edge caching & XML MIME specification for search engine crawlers
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400",
          },
        ],
      },
      // Global browser security headers
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
