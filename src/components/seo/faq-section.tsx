import React from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem =
  | { q: string; a: string; question?: never; answer?: never }
  | { question: string; answer: string; q?: never; a?: never };

interface FaqSectionProps {
  title: string;
  subtitle?: string;
  badge?: string;
  faqs?: FaqItem[];
  items?: FaqItem[];
  includeJsonLd?: boolean;
}

export function FaqSection({
  title,
  subtitle,
  badge = "Technical & Product FAQ",
  faqs,
  items,
  includeJsonLd = true,
}: FaqSectionProps) {
  const rawList = faqs ?? items ?? [];
  const normalizedList = rawList.map((item) => ({
    q: "q" in item && item.q ? item.q : item.question ?? "",
    a: "a" in item && item.a ? item.a : item.answer ?? "",
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: normalizedList.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-14 border-t border-black/[0.06] dark:border-white/[0.07]">
      {includeJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
          {badge}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#111] dark:text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-[#666] dark:text-[#a1a1aa] mt-1.5 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-3">
        {normalizedList.map((faq, idx) => (
          <details
            key={idx}
            open={idx === 0}
            className="group rounded-[20px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] p-5 sm:p-6 transition-colors open:border-black/20 dark:open:border-white/25"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-sm sm:text-base text-[#111] dark:text-white">
              <span>{faq.q}</span>
              <ChevronDown className="w-4 h-4 text-[#777] shrink-0 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-xs sm:text-sm text-[#555] dark:text-[#a1a1aa] leading-relaxed border-t border-black/[0.05] dark:border-white/[0.06] pt-3">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
