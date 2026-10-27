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
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      // 1. Enforce apex canonical domain (redirect www to non-www) and HTTPS
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
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://cogify.me/:path*",
        permanent: true,
      },
      // 2. Short URL, App Store Support URL, & product path aliases (single-hop 308 redirects)
      {
        source: "/emdoc",
        destination: "/products/emdoc",
        permanent: true,
      },
      {
        source: "/products/biodata",
        destination: "/biodata",
        permanent: true,
      },
      {
        source: "/biodata-maker",
        destination: "/biodata",
        permanent: true,
      },
      {
        source: "/marriage-biodata-maker",
        destination: "/biodata",
        permanent: true,
      },
      {
        source: "/products/ssb",
        destination: "/ssb",
        permanent: true,
      },
      {
        source: "/ssb-prep",
        destination: "/ssb",
        permanent: true,
      },
      {
        source: "/ssb-simulator",
        destination: "/ssb",
        permanent: true,
      },
      {
        source: "/products/element-hider",
        destination: "/element-hider",
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
        source: "/color-invert",
        destination: "/invert",
        permanent: true,
      },
      {
        source: "/products/readereasy",
        destination: "/readereasy",
        permanent: true,
      },
      {
        source: "/products/readeasy",
        destination: "/readereasy",
        permanent: true,
      },
      {
        source: "/readeasy",
        destination: "/readereasy",
        permanent: true,
      },
      {
        source: "/reader-easy",
        destination: "/readereasy",
        permanent: true,
      },
      {
        source: "/products/webclear",
        destination: "/webclear",
        permanent: true,
      },
      {
        source: "/web-clear",
        destination: "/webclear",
        permanent: true,
      },
      {
        source: "/products/ad-blocker",
        destination: "/ad-blocker",
        permanent: true,
      },
      {
        source: "/products/adblocker",
        destination: "/ad-blocker",
        permanent: true,
      },
      {
        source: "/adblocker",
        destination: "/ad-blocker",
        permanent: true,
      },
      {
        source: "/products/weblenses",
        destination: "/weblenses",
        permanent: true,
      },
      {
        source: "/products/weblens",
        destination: "/weblenses",
        permanent: true,
      },
      {
        source: "/weblens",
        destination: "/weblenses",
        permanent: true,
      },
      {
        source: "/web-lenses",
        destination: "/weblenses",
        permanent: true,
      },
      {
        source: "/products/lumenview",
        destination: "/lumenview",
        permanent: true,
      },
      {
        source: "/products/metricove",
        destination: "/metricove",
        permanent: true,
      },
      {
        source: "/products/netguard",
        destination: "/netguard",
        permanent: true,
      },
      {
        source: "/products/klipora",
        destination: "/klipora",
        permanent: true,
      },
      {
        source: "/products/show-free-space",
        destination: "/show-free-space",
        permanent: true,
      },
      {
        source: "/showfreespace",
        destination: "/show-free-space",
        permanent: true,
      },
      // 3. Consolidate all app-specific & legacy privacy paths to Privacy Policy (/privacy)
      {
        source: "/emdoc/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/products/emdoc/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/element-hider/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/products/element-hider/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/invert/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/products/invert/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/readereasy/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/readeasy/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/webclear/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/ad-blocker/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/adblocker/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/weblenses/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/weblens/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/biodata/privacy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/ssb/privacy",
        destination: "/privacy",
        permanent: true,
      },
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
      {
        source: "/brand/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/invert/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
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
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
