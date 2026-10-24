import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, Lock, CheckCircle2, ArrowLeft, Download } from "lucide-react";
import { MacAppConfig, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";

export function MacAppPrivacyView({ app }: { app: MacAppConfig }) {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between gap-4">
            <Breadcrumbs
              items={[
                { label: "Products", href: "/products" },
                { label: app.shortName, href: `/${app.slug}` },
                { label: "Privacy Policy" },
              ]}
            />
            <Link
              href={`/${app.slug}`}
              className="text-xs font-semibold text-indigo-700 dark:text-indigo-400 hover:underline inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to {app.shortName}</span>
            </Link>
          </div>

          <div className="rounded-3xl border border-zinc-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/50 p-8 sm:p-12 shadow-sm space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shrink-0 bg-zinc-950">
                <Image
                  src={app.iconLarge || app.icon}
                  alt={app.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-400 font-semibold">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Zero-Telemetry Privacy Guarantee</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white mt-1">
                  {app.name} — Privacy Policy
                </h1>
                <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mt-1">
                  Effective Date: October 24, 2026 • Bundle ID: {app.bundleId}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3.5">
              <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
                <strong>Short Summary:</strong> <strong>{app.name}</strong> executes 100% locally on your Mac. We do <strong>not</strong> collect, store, transmit, rent, or sell any personal data, hardware identifiers, files, clipboard items, or telemetry. There are no accounts, no cloud databases, and no third-party analytics SDKs.
              </div>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                  1. Zero Data Collection
                </h2>
                <p>
                  {app.name} is engineered by COGIFY as a strictly local macOS application ({app.minMacOsVersion}). All processing, preferences, and diagnostics remain exclusively on your personal Mac inside standard macOS local application directories.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                  2. No Third-Party Analytics or Tracking SDKs
                </h2>
                <p>
                  {app.shortName} contains zero third-party analytics frameworks, zero crash-reporting telemetry, zero advertising identifiers, and zero remote configuration scripts.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                  3. Key Privacy Assurances
                </h2>
                <ul className="space-y-2 pt-1">
                  {[
                    "Zero user accounts or email registration required",
                    "Zero cloud uploads or external server synchronization",
                    "Zero background telemetry or usage analytics",
                    "100% transparent local storage under your macOS user account",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                  4. Contact Us
                </h2>
                <p>
                  If you have any questions regarding the privacy architecture of {app.name}, please contact us at{" "}
                  <a
                    href={`mailto:${siteConfig.contact.general}`}
                    className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                  >
                    {siteConfig.contact.general}
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="pt-6 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href={`/${app.slug}`}
                className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:underline"
              >
                ← Return to {app.name} Overview
              </Link>
              <a
                href={app.downloadUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download {app.shortName} (.DMG • {app.appSize})</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
