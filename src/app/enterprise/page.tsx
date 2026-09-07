"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Workflow,
  Cpu,
  Lock,
  ArrowRight,
  Code2,
  CheckCircle2,
  Building2,
  Send,
  Sparkles,
  Search,
  DollarSign,
  HelpCircle,
} from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";

import { TurnstileWidget } from "@/components/security/turnstile-widget";

export default function EnterprisePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceCode, setReferenceCode] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [honeypotWebsite, setHoneypotWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [formStartTime] = useState<number>(Date.now());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    currentSoftware: "",
    interest: "Replace Expensive PDF Licenses (e.g. Acrobat / PDF Expert)",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "ENTERPRISE",
          targetApp: formData.currentSoftware || "Enterprise Tool Replacement",
          title: `Enterprise Inquiry: ${formData.company} (${formData.interest})`,
          description: `Current Software: ${formData.currentSoftware || "N/A"}\nInterest: ${formData.interest}\n\n${formData.message}`,
          senderName: formData.name,
          senderEmail: formData.email,
          company: formData.company,
          priority: "HIGH",
          turnstileToken,
          _hp_company: honeypot,
          _hp_website: honeypotWebsite,
          formStartTime,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setReferenceCode(data.referenceCode || "");
      setFormSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit enterprise inquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20 relative">
      {/* Enterprise Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
              <BrandLogo width={40} height={40} priority />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/80 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider shadow-xs">
              Enterprise License Replacement
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
            Stop overpaying for software licenses.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 dark:from-indigo-300 dark:via-indigo-100 dark:to-cyan-300">
              Switch to Cogify.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl">
            Companies spend millions on heavy, bloated software licenses like Adobe Acrobat. Cogify offers enterprise-grade, air-gapped daily apps for your team. We provide free trials, full code & security auditing, and transparent, ultra-affordable licensing.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#inquiry"
              className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer"
            >
              <span>Request Free Enterprise Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/products/emdoc"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 hover:text-zinc-950 font-semibold text-sm border border-zinc-200/90 shadow-xs dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white dark:border-white/10 transition-colors"
            >
              Explore EmDoc (5.0 MB)
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Step Partnership Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
            How We Partner With Companies
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Our 3-Step Enterprise Onboarding
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-2">
            We remove all risk from migrating away from overpriced legacy commercial tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 space-y-4 shadow-sm relative">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                01
              </div>
              <Sparkles className="w-5 h-5 text-indigo-500" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Free Trial & Evaluation</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Deploy EmDoc or our companion apps across your engineering, legal, or executive teams. Experience the 5.0 MB lightweight binary, ~45 MB RAM footprint, and instant cold launch with zero financial commitment.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 space-y-4 shadow-sm relative">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                02
              </div>
              <Search className="w-5 h-5 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Security & Code Auditing</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We provide complete auditing capabilities. Your security and compliance officers can inspect our code, review air-gapped guarantees, and verify zero external network requests before fleet deployment.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 space-y-4 shadow-sm relative">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold">
                03
              </div>
              <DollarSign className="w-5 h-5 text-cyan-500" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Fraction-of-Cost Licensing</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              After a successful pilot and audit, we ask for a very modest license fee—a tiny fraction of what you spend on legacy suites. You can also commission Cogify to replace other expensive licensed tools.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200/80 dark:border-white/5">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3">
            Enterprise Architecture & Guarantees
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            We partner with organizations requiring strict data sovereignty, native platform performance, and deep systems engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Air-Gapped & Sovereign Architecture",
              desc: "Deploy systems with zero external network connectivity. Eliminate multi-tenant risk and retain total data residency on company hardware.",
              icon: <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
            },
            {
              title: "High-Throughput Native C++ Engines",
              desc: "Leverage our C++20 document manipulation cores for high-speed batch transformation, rasterization, and automated document synthesis.",
              icon: <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
            },
            {
              title: "Custom Licensed Software Replacement",
              desc: "Tell us which commercial apps your company pays heavy licenses for. We can build custom, lightweight replacements tailored to your workflow.",
              icon: <Workflow className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
            },
            {
              title: "Dedicated Code Auditing Support",
              desc: "We work directly with your InfoSec and compliance teams to ensure compliance with SOC2, ISO 27001, and air-gapped guidelines.",
              icon: <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
            },
            {
              title: "Universal Native Device Builds",
              desc: "Optimized binaries for macOS (Apple Silicon M1-M4 & Intel), with iOS in active development, and planned iPadOS and Windows support.",
              icon: <Building2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
            },
            {
              title: "Direct Engineering Collaboration",
              desc: "Work directly with core software architects and developers without account-rep barriers or outsourced handoffs.",
              icon: <Code2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 space-y-3 shadow-xs dark:shadow-none">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Inquiry Intake Section */}
      <section id="inquiry" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200/80 dark:border-white/5">
        <div className="rounded-3xl bg-white/95 dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-white/10 p-8 sm:p-12 shadow-xl backdrop-blur-md">
          <div className="max-w-xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2">
              Start an Enterprise Conversation
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Approach Cogify for a free trial pilot, request a software audit, or tell us which expensive software you want us to replace.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-900 dark:text-emerald-300 space-y-3">
              <div className="flex items-center gap-2 font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Enterprise Inquiry Received</span>
              </div>
              {referenceCode && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 font-mono text-xs">
                  <span>Inquiry Reference:</span>
                  <span className="font-bold">{referenceCode}</span>
                </div>
              )}
              <p className="text-xs leading-relaxed text-emerald-800 dark:text-emerald-200/90">
                Thank you for contacting Cogify. Our engineering team will review your requirements and reach out within 24 hours to coordinate your trial pilot or software audit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Organization / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company or Institution"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    What software do you currently spend license money on?
                  </label>
                  <input
                    type="text"
                    value={formData.currentSoftware}
                    onChange={(e) => setFormData({ ...formData, currentSoftware: e.target.value })}
                    placeholder="e.g. Adobe Acrobat, PDF Expert, Nitro"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Area of Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-800 dark:text-zinc-200 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                >
                  <option>Replace Expensive PDF Licenses (e.g. Acrobat / PDF Expert)</option>
                  <option>Free Enterprise Pilot & Evaluation Trial</option>
                  <option>Security & Code Auditing Request</option>
                  <option>Commission Cogify to Build Custom Tool Replacement</option>
                  <option>Other Enterprise Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Project Details, Seat Count & Security Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your current software costs, approximate seat count, security constraints, and what features your team needs..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Anti-Bot Honeypot */}
              <input
                type="text"
                name="_hp_company"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <input
                type="text"
                name="_hp_website"
                value={honeypotWebsite}
                onChange={(e) => setHoneypotWebsite(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <TurnstileWidget onVerify={setTurnstileToken} />

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Enterprise Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
