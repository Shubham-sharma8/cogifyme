"use client";
import React from "react";
import Link from "next/link";
import {
  Workflow,
  Cpu,
  Lock,
  ArrowRight,
  Code2,
} from "lucide-react";

export const EnterpriseSection = () => {
  const capabilities = [
    {
      title: "Air-Gapped & Local Sovereignty",
      description: "Designed for high-security environments where confidential IP and documents cannot touch multi-tenant third-party clouds.",
      icon: <Lock className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: "High-Throughput Native C++ Engines",
      description: "Custom core components built in C++20 for high-velocity document parsing, batch transformations, and deterministic memory limits.",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: "Custom Enterprise Workflows",
      description: "Purpose-engineered software systems tailored around specific organizational processes rather than generic SaaS compromises.",
      icon: <Workflow className="w-5 h-5 text-purple-400" />,
    },
    {
      title: "Long-Term Architectural Stability",
      description: "Engineered with modular ABIs, clean decoupling between UI and core systems, and zero unneeded third-party runtime dependencies.",
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="enterprise" className="py-24 relative overflow-hidden bg-[#07090f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider">
              Enterprise Engineering
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Software for <span className="text-indigo-400">Enterprise.</span>
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              From specialized internal workstations to high-throughput document pipelines, COGIFY engineers software around the way your organization actually works.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We collaborate with engineering and operations teams that require sovereign, offline-capable systems, predictable performance, and software built to last decades.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/enterprise"
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-indigo-600/25"
              >
                <span>Explore Enterprise Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold text-sm border border-white/10 transition-colors"
              >
                <span>Talk to COGIFY</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Capability Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-indigo-500/30 transition-all duration-200 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
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
