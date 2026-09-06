"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export const FutureProducts = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            Product Expansion
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            One product is only <span className="text-indigo-400">the beginning.</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            EmDoc is our first flagship application. We are actively expanding our software suite around the needs of modern professionals, engineering teams, and enterprise organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.futureProducts.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/30 border border-white/10 hover:border-indigo-500/30 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-white/5">
                    {item.status}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-500 font-mono">
                <Image
                  src="/brand/logo_white.png"
                  alt="COGIFY Logo"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain opacity-70"
                />
                <span>Powered by COGIFY Core</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
