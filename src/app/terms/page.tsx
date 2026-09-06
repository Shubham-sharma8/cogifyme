import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/brand/brand-logo";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of Use for COGIFY (cogify.me) and its software products.",
};

export default function TermsOfUsePage() {
  return (
    <div className="pt-28 pb-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            Effective Date: September 6, 2026 • COGIFY Technologies (<code className="text-zinc-700 dark:text-zinc-400 font-mono">cogify.me</code>)
          </p>
        </div>

        <div className="mt-12 space-y-10 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">1. Agreement to Terms</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              By accessing our website (<a href="https://cogify.me" className="text-indigo-600 dark:text-indigo-400 underline">https://cogify.me</a>) or downloading and evaluating our software products (including EmDoc), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site and our software.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">2. Software License & Usage</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              COGIFY grants you a personal, non-exclusive, non-transferable, revocable license to install, evaluate, and operate the EmDoc desktop application in accordance with its release specifications and any applicable commercial or enterprise agreements. You may not reverse engineer, decompile, or disassemble the proprietary components of the software, except to the extent permitted by applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">3. Intellectual Property Rights</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              The COGIFY brand name, domain names, logomarks, website content, software interfaces, and the underlying C++20 PDF Core engine are the exclusive intellectual property of COGIFY and its licensors.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-900 dark:text-zinc-200">Your Documents:</strong> COGIFY claims zero ownership, license, or rights in any documents, files, annotations, signatures, or content that you process using EmDoc. Because EmDoc operates 100% air-gapped on your local computer, your files remain strictly your property and under your exclusive control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">4. Privacy Policy</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Your use of our website and applications is also governed by our Privacy Policies. Please review our <Link href="/privacy" className="text-indigo-600 dark:text-indigo-400 underline">Website Privacy Policy</Link> and the dedicated <Link href="/emdoc/privacy" className="text-indigo-600 dark:text-indigo-400 underline font-semibold">EmDoc Air-Gapped Privacy Policy</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">5. Disclaimer of Warranties</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              The website and preview software releases are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranty of any kind, either express or implied, including without limitation warranties of merchantability, fitness for a particular purpose, and non-infringement. COGIFY does not warrant that software operation will be uninterrupted or error-free.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">6. Limitation of Liability</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              In no event shall COGIFY, its directors, developers, or affiliates be liable for any indirect, incidental, special, exemplary, or consequential damages arising out of or in connection with the use or inability to use the software or website.
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
              <div>EmDoc Support: <a href={`mailto:${siteConfig.contact.emdocSupport}`} className="text-indigo-600 dark:text-indigo-400 underline">{siteConfig.contact.emdocSupport}</a></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
