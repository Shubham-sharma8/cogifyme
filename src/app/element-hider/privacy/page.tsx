import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowLeft,
  EyeOff,
  HardDrive,
  FileText,
  AlertCircle,
} from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Element Hider Privacy Policy — 100% On-Device & Zero-Tracking Guarantee",
  description:
    "Official privacy policy for Element Hider Safari Extension. Complete on-device rule execution, zero browsing history logging, zero telemetry, and zero network transmission.",
  alternates: {
    canonical: "https://cogify.me/element-hider/privacy",
  },
  openGraph: {
    title: "Element Hider Privacy Policy — Zero-Tracking Guarantee | COGIFY",
    description:
      "Element Hider operates 100% locally on your device with zero telemetry, zero analytics, and zero data transmission.",
    url: "https://cogify.me/element-hider/privacy",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
};

export default function ElementHiderPrivacyPolicyPage() {
  const hider = siteConfig.elementHider;

  return (
    <div className="pt-28 pb-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link
            href="/element-hider"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Element Hider</span>
          </Link>
        </div>

        {/* Header Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-500/20 text-xs font-semibold uppercase tracking-wider shadow-xs">
            Product-Specific Privacy Policy
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/15 bg-zinc-100 dark:bg-zinc-800 shadow-xl shrink-0">
              <Image
                src="/brand/Element-Hider/icon.png"
                alt="Element Hider App Icon"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Element Hider Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                Product: Element Hider Safari Extension • Version {hider.version} • {hider.platform}
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
              The 100% Zero-Tracking Guarantee
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Element Hider is architected so that we literally <strong>cannot</strong> see your browsing history, the websites you visit, the elements you hide, or your identity. Zero bytes of analytics or personal data are collected, stored, or transmitted to any server.
            </p>
          </div>
        </div>

        {/* Detailed Policy Sections */}
        <div className="space-y-12 text-zinc-700 dark:text-zinc-300">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>1. Information We Do Not Collect</span>
            </h2>
            <p className="text-sm leading-relaxed">
              When you install and browse with Element Hider, we do <strong>not</strong> collect:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium pt-1">
              {[
                "Browsing history or visited URLs",
                "Webpage contents, text, or images",
                "Form inputs, passwords, or cookies",
                "IP addresses, geolocation, or network info",
                "Device identifiers or Apple ID information",
                "Telemetry, crash reports, or user profiling",
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
              <span>2. How Your Hiding Rules Are Stored</span>
            </h2>
            <p className="text-sm leading-relaxed">
              When you select elements on a webpage to hide, those CSS selector rules are stored strictly inside your local device’s private Safari Extension container (<code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">browser.storage.local</code>). They never leave your device and are never synced to any Cogify cloud or external third party.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>3. Safari Extension Permissions Explained</span>
            </h2>
            <p className="text-sm leading-relaxed">
              To hide elements on a webpage you request, Safari prompts you for permission to allow Element Hider to access webpage content. This permission is necessary exclusively so that the extension can:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Inspect the Document Object Model (DOM) to highlight elements when you activate the picker.</li>
              <li>Inject local CSS visibility rules (<code className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">display: none !important</code>) to hide elements you have chosen to remove.</li>
            </ul>
            <p className="text-sm leading-relaxed pt-1">
              At no point are webpage contents or your interactions transmitted off your device.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>4. Third-Party Services & Ad Networks</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Element Hider contains <strong>zero ad networks</strong>, <strong>zero tracking SDKs</strong>, and <strong>zero analytics libraries</strong>. We do not partner with data brokers or advertising firms.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>5. Contact Us Regarding Privacy</span>
            </h2>
            <p className="text-sm leading-relaxed">
              If you have any questions or feedback regarding the architecture or privacy model of Element Hider, please contact our engineering team:
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
            href="/element-hider"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Element Hider Overview</span>
          </Link>
          <span>Effective Date: Sep 12, 2026</span>
        </div>
      </div>
    </div>
  );
}
