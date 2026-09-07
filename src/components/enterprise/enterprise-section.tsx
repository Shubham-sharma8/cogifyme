"use client";
import React from "react";
import Link from "next/link";
import {
  Workflow,
  Cpu,
  Lock,
  ArrowRight,
  ShieldCheck,
  Search,
  DollarSign,
  Layers,
  Sparkles,
} from "lucide-react";

export const EnterpriseSection = () => {
  const steps = [
    {
      step: "01",
      title: "Free Evaluation & Pilot Trial",
      description: "Test our products across your organization with zero upfront cost or commitment. Verify team adoption and performance directly.",
      icon: <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      step: "02",
      title: "Security & Code Auditing",
      description: "Complete software transparency. Your security and compliance teams can audit our air-gapped architecture, zero-telemetry guarantee, and local processing.",
      icon: <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      step: "03",
      title: "Fraction-of-the-Cost Licensing",
      description: "Stop spending thousands on overpriced commercial licenses. We ask for a very modest, transparent license fee that slashes your software spend by 70–90%.",
      icon: <DollarSign className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      step: "04",
      title: "Custom Tool Development",
      description: "Have other expensive software your team is overpaying for? Approach Cogify to build custom, lightweight native alternatives tailored to your exact workflow.",
      icon: <Workflow className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    },
  ];

  return (
    <section id="enterprise" className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-[#07090f] border-t border-zinc-200/80 dark:border-white/5 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-500/20 text-xs font-semibold uppercase tracking-wider shadow-xs">
              Enterprise Partnerships
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Replace Expensive Licenses with <span className="text-indigo-600 dark:text-indigo-400">Cogify.</span>
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Is your company spending large budgets on bloated software licenses? Approach Cogify to adopt EmDoc or commission custom replacements for tools you are overpaying for.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We provide free pilots, full security and architecture auditing, and ask for a very low license fee. Lightweight, air-gapped, and tailored to your team.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/enterprise"
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-indigo-600/25"
              >
                <span>Enterprise Program & Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 hover:text-zinc-950 font-semibold text-sm border border-zinc-200/90 shadow-xs dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white dark:border-white/10 transition-colors"
              >
                <span>Request Free Pilot</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 4-Step Partnership Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/90 dark:bg-zinc-900/40 border border-zinc-200/90 dark:border-white/10 hover:border-indigo-500/40 transition-all duration-200 backdrop-blur-sm shadow-xs dark:shadow-none space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 font-semibold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
