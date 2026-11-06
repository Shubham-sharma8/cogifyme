import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { AuthorBio } from "@/components/seo/author-bio";

export const metadata: Metadata = {
  title: "Terms of Use & EULA — COGIFY Apps & Web Studios",
  description:
    "Terms of Use and software license agreement for COGIFY (cogify.me), 6 macOS apps, Biodata Maker (biodata.cogify.me), SSB Studio (ssb.cogify.me) & Safari apps.",
  alternates: {
    canonical: "https://cogify.me/terms",
  },
  openGraph: {
    title: "Terms of Use & EULA — COGIFY Apps & Web Studios | COGIFY",
    description:
      "Terms of Use and software license agreement for COGIFY (cogify.me), 6 macOS apps, Biodata Maker (biodata.cogify.me), SSB Studio (ssb.cogify.me) & Safari apps.",
    url: "https://cogify.me/terms",
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terms of Use & EULA — COGIFY Apps & Web Studios | COGIFY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use & EULA — COGIFY Apps & Web Studios | COGIFY",
    description:
      "Terms of Use and software license agreement for COGIFY (cogify.me), 6 macOS apps, Biodata Maker (biodata.cogify.me), SSB Studio (ssb.cogify.me) & Safari apps.",
    images: ["/og-image.png"],
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0b0b0d] text-black dark:text-white pt-28 pb-20">
      <div className="max-w-[820px] mx-auto px-6 py-10">
        <Breadcrumbs items={[{ label: "Terms of Use", href: "/terms" }]} />

        <div className="mt-6 space-y-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-black/45 dark:text-white/45">
            Software License &amp; Terms
          </p>

          <h1 className="text-[36px] sm:text-[52px] font-semibold tracking-[-0.035em] leading-[1.08] text-black dark:text-white">
            Terms of{" "}
            <span className="font-serif-accent text-[1.06em]">Use.</span>
          </h1>

          <p className="text-[12px] font-mono text-black/45 dark:text-white/45">
            Last Updated: November 6, 2026 · COGIFY Technologies (<code className="font-mono">cogify.me</code>)
          </p>
        </div>

        <div className="mt-10 space-y-5 text-[14px] text-black/70 dark:text-white/70 leading-relaxed">
          <section className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-2.5">
            <h2 className="text-[17px] font-semibold text-black dark:text-white">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing our website (<a href="https://cogify.me" className="underline text-black dark:text-white">https://cogify.me</a>), our web studios (<a href="https://biodata.cogify.me" className="underline text-black dark:text-white">https://biodata.cogify.me</a> and <a href="https://ssb.cogify.me" className="underline text-black dark:text-white">https://ssb.cogify.me</a>), or downloading and operating our software products—including <strong>EmDoc</strong>, <strong>LumenView</strong>, <strong>Metricove</strong>, <strong>NetGuard</strong>, <strong>Klipora</strong>, <strong>Show free space</strong>, <strong>Marriage Biodata Maker Studio</strong>, <strong>SSB Stage-2 Test Practice Studio</strong>, <strong>Ad Blocker - For Safari</strong>, <strong>ReaderEasy</strong>, <strong>WebClear</strong>, <strong>WebLenses</strong>, <strong>Element Hider</strong>, and <strong>Colour Invert</strong>—you agree to be bound by these Terms of Use.
            </p>
          </section>

          <section className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-2.5">
            <h2 className="text-[17px] font-semibold text-black dark:text-white">
              2. Software License &amp; Apple App Store Usage
            </h2>
            <p>
              COGIFY grants you a personal, non-exclusive, non-transferable, revocable license to install and operate our desktop, mobile, and Safari extension software in accordance with its release specifications and Apple&apos;s Standard End User License Agreement (EULA) where downloaded via the Apple App Store.
            </p>
          </section>

          <section className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-2.5">
            <h2 className="text-[17px] font-semibold text-black dark:text-white">
              3. Intellectual Property Rights &amp; Data Sovereignty
            </h2>
            <p>
              The COGIFY brand name, domain names, logomarks, website content, software interfaces, and underlying native engines are the exclusive intellectual property of COGIFY Technologies.
            </p>
            <p>
              <strong className="text-black dark:text-white font-medium">Your Documents &amp; Browsing Content:</strong> COGIFY claims zero ownership, license, or rights in any documents, PDFs, marriage biodata files, SSB test responses, webpages, annotations, or files that you process using our macOS workstations, web studios, or Safari extensions. Because our software operates 100% locally on your device or browser, your files remain strictly under your exclusive control.
            </p>
          </section>

          <section className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-2.5">
            <h2 className="text-[17px] font-semibold text-black dark:text-white">
              4. Privacy Policy, Warranties &amp; Limitation of Liability
            </h2>
            <p>
              Your use of our website and applications is governed by our <Link href="/privacy" className="underline font-medium text-black dark:text-white">Privacy Policy</Link>. All software releases are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranty of any kind.
            </p>
          </section>

          <section className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-2.5">
            <h2 className="text-[17px] font-semibold text-black dark:text-white">
              5. Contact Information
            </h2>
            <div className="p-4 rounded-[14px] bg-[#f5f5f5] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] text-[12px] font-mono space-y-1 text-black/75 dark:text-white/75">
              <div className="font-semibold text-black dark:text-white">COGIFY Technologies</div>
              <div>Email: <a href={`mailto:${siteConfig.contact.general}`} className="underline">{siteConfig.contact.general}</a></div>
              <div>Product Support: <a href={`mailto:${siteConfig.contact.emdocSupport}`} className="underline">{siteConfig.contact.emdocSupport}</a></div>
            </div>
          </section>
        </div>
      </div>

      <AuthorBio />
    </div>
  );
}
