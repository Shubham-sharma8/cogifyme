import { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cogify.me";
  const lastModified = new Date("2026-10-20T00:00:00.000Z");

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/og-image.png`,
        `${baseUrl}/brand/logo.png`,
        `${baseUrl}/Others/EmDoc.png`,
        `${baseUrl}/Others/Adblocker.png`,
        `${baseUrl}/Others/ReaderEasy.png`,
        `${baseUrl}/Others/WebClear.png`,
        `${baseUrl}/Others/WebLenses.png`,
        `${baseUrl}/Others/Element%20Hider.png`,
        `${baseUrl}/Others/Color%20invert.png`,
      ],
    },
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/Others/EmDoc.png`,
        `${baseUrl}/Others/Adblocker.png`,
        `${baseUrl}/Others/ReaderEasy.png`,
        `${baseUrl}/Others/WebClear.png`,
        `${baseUrl}/Others/WebLenses.png`,
        `${baseUrl}/Others/Element%20Hider.png`,
        `${baseUrl}/Others/Color%20invert.png`,
      ],
    },
    {
      url: `${baseUrl}/biodata`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [`${baseUrl}/og-image.png`, `${baseUrl}/brand/logo.png`],
    },
    {
      url: `${baseUrl}/products/emdoc`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        `${baseUrl}/Others/EmDoc.png`,
        `${baseUrl}/screenshots/emdoc/1-split-view.png`,
        `${baseUrl}/screenshots/emdoc/2-edit-text.png`,
        `${baseUrl}/screenshots/emdoc/3-annotate.png`,
        `${baseUrl}/screenshots/emdoc/4-forms-sign.png`,
        `${baseUrl}/screenshots/emdoc/5-organize.png`,
      ],
    },
    {
      url: `${baseUrl}/ad-blocker`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/Others/Adblocker.png`],
    },
    {
      url: `${baseUrl}/readereasy`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/Others/ReaderEasy.png`],
    },
    {
      url: `${baseUrl}/webclear`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/Others/WebClear.png`],
    },
    {
      url: `${baseUrl}/weblenses`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/Others/WebLenses.png`],
    },
    {
      url: `${baseUrl}/element-hider`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/Others/Element%20Hider.png`],
    },
    {
      url: `${baseUrl}/invert`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${baseUrl}/Others/Color%20invert.png`],
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
  ];
}
