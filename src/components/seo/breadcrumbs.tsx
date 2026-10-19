import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/config/site";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  includeJsonLd?: boolean;
  className?: string;
}

export function Breadcrumbs({
  items,
  includeJsonLd = true,
  className = "",
}: BreadcrumbsProps) {
  const fullTrail: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...items,
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullTrail.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      ...(item.href
        ? {
            item: item.href.startsWith("http")
              ? item.href
              : `${siteConfig.url}${item.href === "/" ? "" : item.href}`,
          }
        : {}),
    })),
  };

  return (
    <>
      {includeJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      <nav
        aria-label="Breadcrumb"
        className={`flex flex-wrap items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {fullTrail.map((item, index) => {
            const isLast = index === fullTrail.length - 1;
            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight
                    className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-700 shrink-0"
                    aria-hidden="true"
                  />
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className="text-zinc-900 dark:text-zinc-200 font-semibold"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
