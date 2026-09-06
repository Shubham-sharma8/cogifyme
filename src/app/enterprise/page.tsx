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
} from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";

export default function EnterprisePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 700);
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
              Enterprise Solutions
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
            High-Performance Software for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-300 dark:to-cyan-300">
              Enterprise Workflows.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl">
            From specialized internal workstations to high-throughput document processing pipelines, COGIFY engineers custom systems tailored around the way your organization actually works.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#inquiry"
              className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer"
            >
              <span>Submit Enterprise Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/products/emdoc"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 hover:text-zinc-950 font-semibold text-sm border border-zinc-200/90 shadow-xs dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white dark:border-white/10 transition-colors"
            >
              Review EmDoc Workstation
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3">
            Core Enterprise Engineering
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            We partner with organizations requiring strict data sovereignty, native platform performance, and deep systems engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Air-Gapped & Sovereign Architecture",
              desc: "Deploy systems with zero external network connectivity. Eliminate multi-tenant risk and retain total data residency on organization-controlled hardware.",
              icon: <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
            },
            {
              title: "High-Throughput Native C++ Engines",
              desc: "Leverage our C++20 document manipulation cores for high-speed batch transformation, rasterization, and automated document synthesis.",
              icon: <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
            },
            {
              title: "Custom Internal Workstations",
              desc: "Purpose-built native desktop and server software designed for complex specialized operational requirements that generic SaaS cannot address.",
              icon: <Building2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
            },
            {
              title: "Automated Workflow Engines",
              desc: "Seamless document merging, cryptographic verification, certified copy stamping, and automated redaction pipelines.",
              icon: <Workflow className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
            },
            {
              title: "ABI-Stable System Integration",
              desc: "Clean C/C++ interface boundaries allow straightforward integration into existing enterprise backends, Python scripts, or Cocoa environments.",
              icon: <Code2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
            },
            {
              title: "Dedicated Engineering Collaboration",
              desc: "Work directly with core software engineers to architect, audit, and benchmark solutions without agency overhead or outsourced handoffs.",
              icon: <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
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
              Tell us about your organization&apos;s technical requirements and workflows.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-900 dark:text-emerald-300 space-y-3">
              <div className="flex items-center gap-2 font-bold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Inquiry Received</span>
              </div>
              <p className="text-xs leading-relaxed text-emerald-800 dark:text-emerald-200/90">
                Thank you for contacting COGIFY. Our engineering leads will review your requirements and respond promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company or Institution"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Area of Interest
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-800 dark:text-zinc-200 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option>EmDoc Enterprise Volume Deployment</option>
                    <option>Air-Gapped Sovereign Document Infrastructure</option>
                    <option>High-Throughput C++ Engine Integration</option>
                    <option>Custom Native Workstation Development</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Project Description & Technical Scope
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your workflows, expected volume, security constraints, and target timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

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
