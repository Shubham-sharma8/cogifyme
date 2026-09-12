import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowLeft,
  SunMoon,
  HardDrive,
  FileText,
  AlertCircle,
} from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Colour Invert Privacy Policy — 100% On-Device & Zero-Tracking Guarantee | COGIFY",
  description:
    "Official privacy policy for Colour Invert Safari Extension. No account required, 0 network requests, complete on-device color filter execution, and zero tracking.",
  alternates: {
    canonical: "https://cogify.me/invert/privacy",
  },
  openGraph: {
    title: "Colour Invert Privacy Policy — Zero-Tracking Guarantee | COGIFY",
    description:
      "Colour Invert is designed to work directly in Safari without requiring an account. 100% on-device CSS execution with zero telemetry.",
    url: "https://cogify.me/invert/privacy",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
};

export default function ColourInvertPrivacyPage() {
  const invert = siteConfig.invert;

  return (
    <div className="pt-28 pb-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link
            href="/invert"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Colour Invert</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-500/20 text-xs font-semibold uppercase tracking-wider shadow-xs">
            Product-Specific Privacy Policy
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/15 bg-zinc-900 shadow-xl shrink-0">
              <Image
                src="/brand/Invert/icon.png"
                alt="Colour Invert App Icon"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Colour Invert Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                Product: Colour Invert Safari Extension • Version {invert.version} • {invert.platform}
              </p>
            </div>
          </div>

          <p className="text-xs font-mono text-zinc-500 pt-1">
            Effective Date: September 12, 2026 • Published by COGIFY (<code className="text-zinc-700 dark:text-zinc-400 font-mono">cogify.me</code>)
          </p>
        </div>

        {/* Core Guarantee Banner */}
        <div className="my-10 p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/30 flex items-start gap-4">
          <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-bold text-zinc-900 dark:text-white text-base">
              No Account Required • Zero-Tracking Guarantee
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Colour Invert is designed to work directly in Safari without requiring an account. The extension&apos;s core functionality is focused on changing webpage appearance. Zero bytes of analytics, telemetry, or personal data are collected, stored, or transmitted to any server.
            </p>
          </div>
        </div>

        {/* Detailed Policy Sections */}
        <div className="space-y-12 text-zinc-700 dark:text-zinc-300">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <SunMoon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>1. Information We Do Not Collect</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Colour Invert operates entirely locally inside your browser. We do <strong>not</strong> collect or record:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium pt-1">
              {[
                "Browsing history or visited website URLs",
                "Webpage contents, documents, or photos",
                "Form entries, usernames, or passwords",
                "IP addresses, geographical data, or network stats",
                "Device identifiers or Apple ID credentials",
                "Telemetry, tracking cookies, or analytics pings",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>2. How Your Preferences Are Stored</span>
            </h2>
            <p className="text-sm leading-relaxed">
              When you configure color preferences, brightness, contrast, sepia warmth, or per-site exclusion rules, those settings are stored strictly in your local device&apos;s private Apple Safari Extension storage container (<code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">browser.storage.local</code>). They never leave your device and are never synchronized to any Cogify or third-party server.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>3. Safari Extension Permissions Explained</span>
            </h2>
            <p className="text-sm leading-relaxed">
              To invert colors on the webpages you view, Safari requests permission to allow Colour Invert to access webpage content. This permission is utilized strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Applying CSS filter rules (e.g., <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">invert()</code>, <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">hue-rotate()</code>, <code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">contrast()</code>) directly in the Document Object Model (DOM).</li>
              <li>Detecting video players, images, and canvas elements so that Smart Invert can protect media from unnatural color distortion.</li>
              <li>Checking your local exclusion list to see whether you have opted out of inverting a specific domain.</li>
            </ul>
            <p className="text-sm leading-relaxed pt-1">
              At no point is any webpage content, keystroke, or browsing activity extracted or transmitted from your device.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>4. Third-Party Services & Ad Networks</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Colour Invert contains <strong>zero third-party SDKs</strong>, <strong>zero ad networks</strong>, and <strong>zero analytics scripts</strong>. The software is completely self-contained.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>5. Contact Engineering Regarding Privacy</span>
            </h2>
            <p className="text-sm leading-relaxed">
              If you have any questions or audit inquiries regarding the security or privacy architecture of Colour Invert, please contact our team:
            </p>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 font-mono text-xs text-zinc-800 dark:text-zinc-300">
              Email:{" "}
              <a
                href={`mailto:${siteConfig.contact.general}`}
                className="text-indigo-600 dark:text-indigo-400 underline font-semibold"
              >
                {siteConfig.contact.general}
              </a>
              <br />
              Publisher: COGIFY Technologies •{" "}
              <Link href="/" className="underline text-indigo-600 dark:text-indigo-400">
                cogify.me
              </Link>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between text-xs text-zinc-500">
          <Link
            href="/invert"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Colour Invert Overview</span>
          </Link>
          <span>Effective Date: Sep 12, 2026</span>
        </div>
      </div>
    </div>
  );
}
