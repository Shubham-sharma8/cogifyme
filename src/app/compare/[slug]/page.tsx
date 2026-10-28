import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPARISON_GUIDES, getComparisonBySlug } from "@/config/comparisons";
import { ComparisonPageView } from "@/components/compare/comparison-page-view";

interface CompareSlugPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return COMPARISON_GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: CompareSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getComparisonBySlug(slug);

  if (!guide) {
    return {
      title: "Comparison Guide Not Found",
    };
  }

  const canonicalUrl = `https://cogify.me/compare/${guide.slug}`;

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${guide.metaTitle} | COGIFY`,
      description: guide.metaDescription,
      url: canonicalUrl,
      siteName: "COGIFY",
      type: "article",
      images: [
        {
          url: `https://cogify.me${guide.appScreenshot}`,
          width: 1200,
          height: 630,
          alt: guide.h1Title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.metaTitle} | COGIFY`,
      description: guide.metaDescription,
      images: [`https://cogify.me${guide.appScreenshot}`],
    },
  };
}

export default async function CompareSlugPage({ params }: CompareSlugPageProps) {
  const { slug } = await params;
  const guide = getComparisonBySlug(slug);

  if (!guide) {
    notFound();
  }

  return <ComparisonPageView guide={guide} />;
}
