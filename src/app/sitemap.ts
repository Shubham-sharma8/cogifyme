import { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cogify.me";

  // Meaningful, stable lastModified dates (W3C Datetime format)
  const coreUpdatedDate = new Date("2026-09-09");
  const legalPolicyDate = new Date("2026-09-06");

  return [
    {
      url: `${baseUrl}`,
      lastModified: coreUpdatedDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products/emdoc`,
      lastModified: coreUpdatedDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/enterprise`,
      lastModified: coreUpdatedDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: coreUpdatedDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: coreUpdatedDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/suggestions`,
      lastModified: coreUpdatedDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: legalPolicyDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/emdoc/privacy`,
      lastModified: legalPolicyDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: legalPolicyDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
