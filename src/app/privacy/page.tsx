import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Lock, EyeOff, Server } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for COGIFY (cogify.me) and its family of software products.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
              <BrandLogo width={40} height={40} priority />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-500/20 text-xs font-semibold uppercase tracking-wider shadow-xs">
              Data Protection & Trust
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs font-mono text-zinc-500">
            Effective Date: September 6, 2026 • COGIFY Technologies (<code className="text-zinc-700 dark:text-zinc-400 font-mono">cogify.me</code>)
          </p>
        </div>

        {/* EmDoc Specific Callout Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-white to-indigo-50/60 border border-indigo-200/90 text-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm dark:from-indigo-950/40 dark:via-zinc-900 dark:to-indigo-950/30 dark:border-indigo-500/30 dark:text-zinc-200 dark:shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-bold text-sm text-indigo-700 dark:text-indigo-300">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Looking for the EmDoc Workstation Privacy Policy?</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              EmDoc for macOS operates under a dedicated 100% Air-Gapped Zero-Cloud guarantee where zero document data or telemetry ever leaves your computer.
            </p>
          </div>
          <Link
            href="/emdoc/privacy"
            className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5 shadow-md shadow-indigo-600/20"
          >
            <span>View EmDoc Policy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Core Principles Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/5 space-y-2 shadow-xs dark:shadow-none">
            <Lock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Privacy By Architecture</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We design software so that we physically cannot access your sensitive documents or confidential work.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/5 space-y-2 shadow-xs dark:shadow-none">
            <EyeOff className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Zero Ad Tracking</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We do not sell personal data, host advertising pixels, or participate in cross-site behavioral tracking networks.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/5 space-y-2 shadow-xs dark:shadow-none">
            <Server className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Minimal Ingestion</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We collect only the bare minimum information needed to respond when you voluntarily contact our engineering team.
            </p>
          </div>
        </div>

        {/* Full Policy Body */}
        <div className="mt-12 space-y-10 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">1. Scope of This Policy</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              This Privacy Policy explains the data practices of <strong>COGIFY</strong> (&ldquo;COGIFY&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) across our website (<a href="https://cogify.me" className="text-indigo-600 dark:text-indigo-400 underline">https://cogify.me</a>) and our communications channels. For native desktop software applications published by COGIFY, including EmDoc, please consult the product-specific policies referenced in Section 2.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">2. Desktop & Native Software Products (EmDoc)</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Our flagship desktop software, <strong>EmDoc</strong> for macOS, is architected from inception as a 100% air-gapped, zero-cloud workstation. When using EmDoc:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-400 text-xs pl-2">
              <li>Documents and PDF payloads are processed strictly in local RAM and your specified local storage.</li>
              <li>No document contents, filenames, glyph tables, or vector paths are ever transmitted over external networks.</li>
              <li>Apple Vision optical character recognition (OCR) executes entirely on the local Apple Neural Engine without external API calls.</li>
              <li>The software contains zero telemetry SDKs, analytics pings, or behavioral tracking beacons.</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs">
              For complete architectural details, visit the dedicated <Link href="/emdoc/privacy" className="text-indigo-600 dark:text-indigo-400 underline font-medium">EmDoc Privacy Policy (<code className="text-zinc-800 dark:text-zinc-300 font-mono">cogify.me/emdoc/privacy</code>)</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">3. Information Collected via Our Website (cogify.me)</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We do not require user accounts to browse our website or download software preview packages. We collect personal information only when you explicitly submit it to us:
            </p>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/80 dark:border-white/5 space-y-3 text-xs">
              <div>
                <strong className="text-zinc-900 dark:text-zinc-200 block mb-0.5">A. Voluntary Contact & Enterprise Inquiries</strong>
                <p className="text-zinc-600 dark:text-zinc-400">
                  When you submit a contact or enterprise request form on our site, we collect your name, email address, company/organization name, and message contents. This information is used strictly to communicate with you and evaluate your project requirements.
                </p>
              </div>
              <div>
                <strong className="text-zinc-900 dark:text-zinc-200 block mb-0.5">B. Web Server Logs</strong>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Like virtually all web properties, our hosting infrastructure automatically registers basic technical request headers (such as IP address, browser user-agent, and HTTP timestamp) solely for network security, abuse mitigation, and server diagnostics. These logs are not linked to individual identities and are purged routinely.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">4. Cookies and Web Analytics</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              The COGIFY marketing website does not employ third-party advertising cookies, cross-site trackers, or commercial data tracking pixels. Any cookies used are strictly functional and required for standard site navigation and security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">5. Information Sharing and Disclosure</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We do not sell, rent, monetize, or trade personal data under any circumstances. We do not provide user lists to marketers or data aggregators. We may disclose personal information only if required by valid legal process or court order.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">6. Data Security & Storage</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              We apply industry-standard transport layer encryption (TLS 1.3) across all website endpoints. Communications received are retained only for as long as necessary to fulfill your business inquiry or comply with legal requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">7. Your Rights</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Depending on your jurisdiction (such as the EU/EEA under GDPR or California under CCPA), you may have the right to request access to, correction of, or deletion of personal information provided to us. To exercise any of these rights, contact us directly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">8. Contact & Data Protection Inquiries</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              For any questions concerning this Privacy Policy or COGIFY data protection practices:
            </p>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/5 text-xs font-mono space-y-1 text-zinc-800 dark:text-zinc-300">
              <div>COGIFY Technologies</div>
              <div>Website: <a href="https://cogify.me" className="text-indigo-600 dark:text-indigo-400 underline">https://cogify.me</a></div>
              <div>General & Security Inquiries: <a href="mailto:contact@cogify.me" className="text-indigo-600 dark:text-indigo-400 underline">contact@cogify.me</a></div>
              <div>EmDoc Product Support: <a href="mailto:contact@cogify.me" className="text-indigo-600 dark:text-indigo-400 underline">contact@cogify.me</a></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
