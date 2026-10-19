import React from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

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
    <section className="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-200/80 dark:border-white/[0.06]">
      {includeJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-3.5">
        {normalizedList.map((faq, idx) => (
          <details
            key={idx}
            open={idx === 0}
            className="group rounded-2xl bg-white dark:bg-[#0b0f17] border border-zinc-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-xs transition-all open:border-indigo-500/30 dark:open:border-indigo-500/30"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-base sm:text-lg text-zinc-900 dark:text-white">
              <span>{faq.q}</span>
              <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="mt-3.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-white/[0.05] pt-3.5">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
