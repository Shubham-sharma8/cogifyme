import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { AuthorBio } from "@/components/seo/author-bio";

export const metadata: Metadata = {
  title: "Terms of Use — COGIFY Applications, Safari Extensions & Web Studios",
  description:
    "Terms of Use and software license agreement for COGIFY (cogify.me), EmDoc Workstation, Marriage Biodata Maker Studio (biodata.cogify.me), and our Safari extensions.",
  alternates: {
    canonical: "https://cogify.me/terms",
  },
  openGraph: {
    title: "Terms of Use — COGIFY Applications, Safari Extensions & Web Studios",
    description:
      "Terms of Use and software license agreement for COGIFY desktop, mobile, Safari extension, and web studio products.",
    url: "https://cogify.me/terms",
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="pt-28 pb-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: "Terms of Use", href: "/terms" }]} />
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
              <BrandLogo width={40} height={40} priority />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-wider shadow-xs">
              Terms of Service
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Terms of Use
          </h1>

          <p className="text-xs font-mono text-zinc-500">
            Last Updated: October 2026 • COGIFY Technologies (<code className="text-zinc-700 dark:text-zinc-400 font-mono">cogify.me</code>)
          </p>
        </div>

        <div className="mt-12 space-y-10 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">1. Agreement to Terms</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              By accessing our website (<a href="https://cogify.me" className="text-indigo-600 dark:text-indigo-400 underline">https://cogify.me</a>), our web studios (<a href="https://biodata.cogify.me" className="text-indigo-600 dark:text-indigo-400 underline">https://biodata.cogify.me</a>), or downloading and operating our software products—including <strong>EmDoc</strong>, <strong>Marriage Biodata Maker Studio</strong>, <strong>Ad Blocker - For Safari</strong>, <strong>ReaderEasy</strong>, <strong>WebClear</strong>, <strong>WebLenses</strong>, <strong>Element Hider</strong>, <strong>Colour Invert</strong>, and all upcoming COGIFY applications—you agree to be bound by these Terms of Use and all applicable laws and regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">2. Software License &amp; Apple App Store Usage</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              COGIFY grants you a personal, non-exclusive, non-transferable, revocable license to install and operate our desktop, mobile, and Safari extension software in accordance with its release specifications and Apple&apos;s Standard End User License Agreement (EULA) where downloaded via the Apple App Store. You may not reverse engineer, decompile, or redistribute proprietary binaries except to the extent permitted by applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">3. Intellectual Property Rights &amp; Data Sovereignty</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              The COGIFY brand name, domain names, logomarks, website content, software interfaces, and underlying native engines are the exclusive intellectual property of COGIFY Technologies.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-900 dark:text-zinc-200">Your Documents &amp; Browsing Content:</strong> COGIFY claims zero ownership, license, or rights in any documents, PDFs, marriage biodata files, webpages, annotations, or files that you process using EmDoc, Marriage Biodata Maker Studio, or our Safari extensions. Because our software operates 100% locally on your device or browser, your files and browsing remain strictly under your exclusive control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">4. Privacy Policy</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Your use of our website and applications is governed by our <Link href="/privacy" className="text-indigo-600 dark:text-indigo-400 underline font-semibold">Privacy Policy</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">5. Disclaimer of Warranties</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              The website and software releases are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranty of any kind, either express or implied, including without limitation warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">6. Limitation of Liability</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              In no event shall COGIFY, its founder, developers, or affiliates be liable for any indirect, incidental, special, exemplary, or consequential damages arising out of or in connection with the use or inability to use the software or website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">7. Contact Information</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Questions concerning these Terms of Use should be addressed to:
            </p>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/5 text-xs font-mono space-y-1 text-zinc-800 dark:text-zinc-300">
              <div>COGIFY Technologies</div>
              <div>Email: <a href={`mailto:${siteConfig.contact.general}`} className="text-indigo-600 dark:text-indigo-400 underline">{siteConfig.contact.general}</a></div>
              <div>Product Support: <a href={`mailto:${siteConfig.contact.emdocSupport}`} className="text-indigo-600 dark:text-indigo-400 underline">{siteConfig.contact.emdocSupport}</a></div>
            </div>
          </section>
        </div>
      </div>

      <AuthorBio />
    </div>
  );
}
