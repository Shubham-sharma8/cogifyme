import { MetadataRoute } from "next";
import { COMPARISON_GUIDES } from "@/config/comparisons";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cogify.me";
  const lastModified = new Date("2026-10-30T00:00:00.000Z");

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/og-image.png`,
        `${baseUrl}/brand/logo.png`,
        `${baseUrl}/brand/emdoc-icon.png`,
        `${baseUrl}/brand/Ad-Blocker/icon.png`,
        `${baseUrl}/brand/ReaderEasy/icon.jpg`,
        `${baseUrl}/brand/WebClear/icon.jpg`,
        `${baseUrl}/brand/WebLenses/icon.png`,
        `${baseUrl}/brand/Element-Hider/icon.png`,
        `${baseUrl}/brand/Invert/icon.png`,
      ],
    },
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/brand/emdoc-icon.png`,
        `${baseUrl}/brand/Ad-Blocker/icon.png`,
        `${baseUrl}/brand/ReaderEasy/icon.jpg`,
        `${baseUrl}/brand/WebClear/icon.jpg`,
        `${baseUrl}/brand/WebLenses/icon.png`,
        `${baseUrl}/brand/Element-Hider/icon.png`,
        `${baseUrl}/brand/Invert/icon.png`,
      ],
    },
    {
      url: `${baseUrl}/biodata`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${baseUrl}/brand/Biodata/og-banner.png`, `${baseUrl}/brand/Biodata/studio-preview.webp`],
    },
    {
      url: `${baseUrl}/ssb`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/brand/SSB/og-banner.png`,
        `${baseUrl}/brand/SSB/studio-preview.webp`,
      ],
    },
    {
      url: `${baseUrl}/products/emdoc`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/brand/emdoc-icon.png`,
        `${baseUrl}/brand/EmDoc_home.webp`,
        `${baseUrl}/brand/edit_pdf.webp`,
        `${baseUrl}/brand/Organise.webp`,
        `${baseUrl}/brand/compress.webp`,
        `${baseUrl}/brand/watermark.webp`,
      ],
    },
    {
      url: `${baseUrl}/lumenview`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.92,
      images: [
        `${baseUrl}/brand/LumenView/icon.png`,
        `${baseUrl}/brand/LumenView/1.webp`,
      ],
    },
    {
      url: `${baseUrl}/lumenview/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/metricove`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.92,
      images: [
        `${baseUrl}/brand/Metricove/icon.png`,
        `${baseUrl}/brand/Metricove/1.webp`,
      ],
    },
    {
      url: `${baseUrl}/metricove/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/netguard`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.92,
      images: [
        `${baseUrl}/brand/NetGuard/icon.png`,
        `${baseUrl}/brand/NetGuard/1.webp`,
      ],
    },
    {
      url: `${baseUrl}/netguard/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/klipora`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.92,
      images: [
        `${baseUrl}/brand/Klipora/icon.png`,
        `${baseUrl}/brand/Klipora/1.webp`,
      ],
    },
    {
      url: `${baseUrl}/klipora/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/show-free-space`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.92,
      images: [
        `${baseUrl}/brand/ShowFreeSpace/icon.png`,
        `${baseUrl}/brand/ShowFreeSpace/1.webp`,
      ],
    },
    {
      url: `${baseUrl}/show-free-space/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/ad-blocker`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/brand/Ad-Blocker/icon.png`],
    },
    {
      url: `${baseUrl}/readereasy`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/brand/ReaderEasy/icon.jpg`],
    },
    {
      url: `${baseUrl}/webclear`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/brand/WebClear/icon.jpg`],
    },
    {
      url: `${baseUrl}/weblenses`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/brand/WebLenses/icon.png`],
    },
    {
      url: `${baseUrl}/element-hider`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/brand/Element-Hider/icon.png`],
    },
    {
      url: `${baseUrl}/invert`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/brand/Invert/icon.png`],
    },
    {
      url: `${baseUrl}/enterprise`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [`${baseUrl}/og-image.png`],
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [`${baseUrl}/brand/logo.png`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/suggestions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.92,
      images: [`${baseUrl}/og-image.png`],
    },
    ...COMPARISON_GUIDES.map((guide) => ({
      url: `${baseUrl}/compare/${guide.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [`${baseUrl}${guide.appScreenshot}`],
    })),
  ];
}
