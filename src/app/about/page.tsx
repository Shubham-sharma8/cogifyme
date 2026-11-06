import React from "react";
import { siteConfig } from "@/config/site";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { AuthorBio } from "@/components/seo/author-bio";

export default function AboutPage() {
  const timelineData: TimelineEntry[] = [
    {
      title: "Core Architecture & Tenets",
      badge: "Inception",
      content: (
        <div className="space-y-4 text-sm text-[#555] dark:text-[#a1a1aa]">
          <p>
            COGIFY began with a clear purpose: build native software tools for serious work that respect user attention and privacy.
          </p>
          <div className="p-4 rounded-2xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.06] dark:border-white/[0.08] text-xs space-y-1.5">
            <div className="font-semibold text-[#111] dark:text-white">The 100% Offline Tenet</div>
            <p className="text-[#555] dark:text-[#a1a1aa] leading-relaxed">
              We developed our core document logic in ISO C++20 and Swift, completely abstracted from cloud APIs and telemetry SDKs, delivering predictable speed and verifiable data sovereignty.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "6 Native macOS Workstations (Direct .DMG & App Store)",
      badge: "Flagship macOS Suite",
      content: (
        <div className="space-y-4 text-sm text-[#555] dark:text-[#a1a1aa]">
          <p>
            Our macOS desktop suite includes EmDoc PDF Workstation (v1.1, 7.8 MB binary, ~45 MB RAM), LumenView (hardware DDC/CI monitor control), Metricove (menu bar system telemetry), NetGuard (outbound firewall), Klipora (clipboard manager), and Show free space (disk space analyzer) — 100% free for individual users.
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08]">
              <span className="text-[#111] dark:text-white font-semibold block mb-0.5">6 macOS Apps</span>
              <span className="text-[#666] dark:text-[#a1a1aa]">Universal Apple Silicon &amp; Intel</span>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08]">
              <span className="text-[#111] dark:text-white font-semibold block mb-0.5">Air-Gapped &amp; Free</span>
              <span className="text-[#666] dark:text-[#a1a1aa]">100% on-device compute</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Safari Web Extension Suite (macOS, iOS, iPadOS)",
      badge: "6 Apps Live on App Store",
      content: (
        <div className="space-y-4 text-sm text-[#555] dark:text-[#a1a1aa]">
          <p>
            Expanding our zero-telemetry architecture to Safari across Mac, iPhone, and iPad: Ad Blocker - For Safari (v2.0), ReaderEasy, WebClear, WebLenses, Element Hider, and Colour Invert — all running 100% on-device.
          </p>
        </div>
      ),
    },
    {
      title: "Marriage Biodata Maker Studio (biodata.cogify.me)",
      badge: "Live Web Studio & PWA",
      content: (
        <div className="space-y-4 text-sm text-[#555] dark:text-[#a1a1aa]">
          <p>
            Hosted on our official subdomain <code className="font-mono text-[#111] dark:text-white">biodata.cogify.me</code>, Marriage Biodata Maker Studio brings 242 cultural &amp; modern templates, 9 Indian &amp; global languages, an interactive Vedic Kundali chart builder, and instant 300-DPI PDF / Word (.docx) export to the browser — 100% client-side with zero watermarks or sign-up.
          </p>
        </div>
      ),
    },
    {
      title: "SSB Stage-2 Test Practice Studio (ssb.cogify.me)",
      badge: "Live Defense Prep Studio",
      content: (
        <div className="space-y-4 text-sm text-[#555] dark:text-[#a1a1aa]">
          <p>
            Hosted at <code className="font-mono text-[#111] dark:text-white">ssb.cogify.me</code>, SSB Stage-2 Test Practice Studio delivers a real-time browser simulator for Indian Armed Forces Services Selection Board (SSB) screening and psychology tests: TAT, WAT, SRT, SDT, GTO, and IO — 100% free with zero sign-up.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-20 bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#111] dark:text-[#f5f5f7]">
      {/* About Hero */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-8">
        <Breadcrumbs items={[{ label: "About COGIFY", href: "/about" }]} />
        <div className="mt-6 max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888]">
            about cogify
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold text-[#111] dark:text-white tracking-[-0.04em] leading-[1.05]">
            We build software we want to{" "}
            <span className="font-display italic font-normal">use ourselves.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#555] dark:text-[#a1a1aa] leading-relaxed">
            COGIFY is an independent software studio founded by Shubham Sharma. We build high-performance native macOS workstations, Safari extensions for iPhone, iPad &amp; Mac, and real-time client-side web studios that are fast, dependable, and uncompromisingly respectful of user privacy.
          </p>
        </div>
      </section>

      {/* Philosophy Principles */}
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-12">
        <div className="max-w-2xl mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
            engineering principles
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111] dark:text-white tracking-[-0.03em]">
            What guides our craft.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {siteConfig.principles.map((principle, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-2.5"
            >
              <div className="text-xs font-mono text-[#777] dark:text-[#888]">0{idx + 1}</div>
              <h3 className="text-base font-bold text-[#111] dark:text-white">{principle.title}</h3>
              <p className="text-xs sm:text-sm text-[#555] dark:text-[#a1a1aa] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Evolution Roadmap */}
      <section id="timeline" className="max-w-[980px] mx-auto px-5 sm:px-8 py-12 border-t border-black/[0.06] dark:border-white/[0.07]">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888] mb-1">
            roadmap &amp; milestones
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111] dark:text-white tracking-[-0.03em]">
            Evolution of the ecosystem.
          </h2>
        </div>

        <Timeline data={timelineData} />
      </section>

      <AuthorBio />
    </div>
  );
}
