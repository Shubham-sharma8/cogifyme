/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  Download,
  ArrowRight,
  Sparkles,
  Mail,
} from "lucide-react";
import { AppleLogoIcon, GitHubIcon } from "@/components/ui/platform-icons";
import { OtherAppsShowcase } from "@/components/products/other-apps-showcase";
import {
  OTTIE_DMG_URL,
  OTTIE_GITHUB_URL,
  OTTIE_SHA256,
  OTTIE_SIZE,
  TRYMACAPPS_URL,
  TRYMACAPPS_BADGE_IMG,
  OTTIE_PERSONAS,
  OTTIE_BREAK_WALLS,
  OTTIE_WHAT_YOU_GET,
  OTTIE_COMPARISON_ROWS,
  OTTIE_TESTIMONIALS,
  OTTIE_FAQS,
} from "./ottie-data";
import {
  OttieInteractiveDesktopTrial,
  OttieMiniDressingStudio,
} from "./ottie-interactive-trial";
import { RoamingOttieWidget } from "./roaming-ottie-widget";

export function OttieLandingView() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activePersona, setActivePersona] = useState<string>("everyone");
  const [copiedSha, setCopiedSha] = useState(false);
  const [activeWallIndex, setActiveWallIndex] = useState<number>(0);
  const [heroSlide, setHeroSlide] = useState<number>(0);
  const [pokeMessage, setPokeMessage] = useState<string | null>(null);

  const pokeResponses = [
    "Hehe that tickles!! 🦦💕",
    "BEEP BOOP! Cutest Robo-Ottie online! 🤖✨",
    "Remember to blink & sip water today~ 💧",
    "I'll wait till you finish typing! ⌨️🌱",
    "Peekaboo soon… 4! 👀",
  ];

  const handlePokeHero = () => {
    const next =
      pokeResponses[Math.floor(Math.random() * pokeResponses.length)];
    setPokeMessage(next);
    setTimeout(() => setPokeMessage(null), 2800);
  };

  const handleCopySha = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(OTTIE_SHA256);
      setCopiedSha(true);
      setTimeout(() => setCopiedSha(false), 2000);
    }
  };

  const heroScreens = [
    {
      label: "Desktop Companion",
      src: "/images/ottie/01-hero-desktop-peekaboo-soon.png",
      width: 2240,
      height: 1400,
      alt: "Ottie white otter companion sitting on the macOS desktop with a 'Peekaboo soon...' speech bubble next to Notes",
    },
    {
      label: "Welcome Tour (18)",
      src: "/images/ottie/18-welcome-screen-what-is-ottie.png",
      width: 1680,
      height: 1320,
      alt: "Welcome to Ottie interactive macOS onboarding window showing Cutest Robo-Ottie and 93 cute actions",
    },
    {
      label: "Blanket Drape",
      src: "/images/ottie/02-blanket-drape-transition.png",
      width: 2240,
      height: 1400,
      alt: "Ottie pulling a soft scalloped dark-sage blanket down over the macOS desktop for a 20-20-20 eye break",
    },
  ];

  const activeWall = OTTIE_BREAK_WALLS[activeWallIndex];

  return (
    <div className="min-h-screen bg-[#F6F5F2] text-[#17242B] antialiased selection:bg-[#2E705E] selection:text-white">
      {/* ── Sticky Top Pill Navigation (Helium + MeetPeeka Style) ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#F6F5F2]/88 border-b border-black/[0.07]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-[#5E6B73] hover:text-[#17242B] transition font-medium"
            >
              ← cogify
            </Link>
            <span className="text-black/15">/</span>
            <Link
              href="/ottie"
              className="flex items-center gap-2 font-semibold text-sm text-[#17242B]"
            >
              <Image
                src="/images/ottie/07-app-icon-white-otter.png"
                alt="Ottie App Icon"
                width={26}
                height={26}
                className="w-6 h-6 rounded-lg shadow-2xs"
              />
              <span>ottie</span>
              <span className="hidden sm:inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#E6F0EC] text-[#2E705E]">
                meet ottie
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-5 text-[#5E6B73] font-medium">
            <a href="#live-trial" className="hover:text-[#17242B] transition">
              live trial
            </a>
            <a href="#break-walls" className="hover:text-[#17242B] transition">
              7 break walls
            </a>
            <a
              href="#dressing-room"
              className="hover:text-[#17242B] transition"
            >
              dressing room
            </a>
            <a href="#actions" className="hover:text-[#17242B] transition">
              93 actions
            </a>
            <a
              href="#smart-awareness"
              className="hover:text-[#17242B] transition"
            >
              smart awareness
            </a>
            <a href="#faq" className="hover:text-[#17242B] transition">
              faq
            </a>
          </nav>

          <a
            href={OTTIE_DMG_URL}
            className="inline-flex items-center gap-1.5 bg-[#17242B] text-white hover:bg-black rounded-full px-4 py-1.5 text-xs font-medium transition shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>download</span>
          </a>
        </div>
      </header>

      <main id="main-content">
        {/* ── Hero Section ── */}
        <section className="pt-14 sm:pt-20 pb-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Version & Category Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium border border-black/[0.08] bg-white shadow-2xs mb-6 text-[#5E6B73]">
              <span className="w-2 h-2 rounded-full bg-[#2E705E]" />
              <span className="text-[#17242B] font-semibold">
                native macOS companion · built by cogify
              </span>
              <span>·</span>
              <span>54 costumes &amp; cutest robo</span>
              <span>·</span>
              <span>93 spring actions</span>
              <span>·</span>
              <a
                href="#live-trial"
                className="text-[#2E705E] font-semibold hover:underline"
              >
                try live in browser ↓
              </a>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#17242B] leading-[1.06] mb-5 flex items-center justify-center gap-3 flex-wrap">
              <span>meet ottie.</span>
              <span className="inline-flex w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-black/[0.1] shadow-sm items-center justify-center overflow-hidden">
                <Image
                  src="/images/ottie/07-app-icon-white-otter.png"
                  alt="Ottie White Otter macOS Icon"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </span>
            </h1>

            <p className="text-xl sm:text-3xl font-medium tracking-tight text-[#17242B]/90 max-w-3xl mx-auto leading-snug mb-4">
              the cutest white otter &amp; robo companion living on your mac.
            </p>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-[#5E6B73] max-w-2xl mx-auto font-normal leading-relaxed mb-8">
              most break timers feel like a bossy alarm clock. ottie is a
              23-channel spring-animated friend who lives on your desktop,
              understands whether you&apos;re coding, watching youtube, or
              chatting, dresses up in{" "}
              <span className="bg-black/[0.06] px-2 py-0.5 rounded-md font-semibold text-[#17242B]">
                54 costumes
              </span>{" "}
              (including{" "}
              <span className="bg-[#E5F2FA] text-[#298AC7] px-2 py-0.5 rounded-md font-semibold">
                cutest robo-ottie!
              </span>
              ), performs{" "}
              <span className="bg-black/[0.06] px-2 py-0.5 rounded-md font-semibold text-[#17242B]">
                93 cute animations
              </span>
              , and drapes{" "}
              <span className="bg-[#E6F0EC] text-[#2E705E] px-2 py-0.5 rounded-md font-semibold">
                7 calming full-screen walls
              </span>{" "}
              over your workspace so you remember to rest your eyes, drink
              water, stretch your back, walk downstairs, and call your parents.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a
                href={OTTIE_DMG_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#17242B] text-white hover:bg-black rounded-full px-7 py-3 text-sm font-medium transition shadow-sm"
              >
                <AppleLogoIcon className="w-4 h-4 text-white fill-current" />
                <span>download ottie for macOS (.dmg · {OTTIE_SIZE})</span>
              </a>
              <a
                href="#dressing-room"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white border border-black/[0.1] text-[#17242B] hover:bg-[#E6F0EC]/60 rounded-full px-6 py-3 text-sm font-medium transition"
              >
                <span>dress up ottie below</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={OTTIE_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white border border-black/[0.1] text-[#5E6B73] hover:text-[#17242B] hover:bg-black/[0.04] rounded-full px-5 py-3 text-sm font-medium transition"
              >
                <GitHubIcon className="w-4 h-4 fill-current" />
                <span>github release</span>
              </a>
            </div>

            {/* Featured on TryMacApps Badge */}
            <div className="flex items-center justify-center pt-2 pb-6">
              <a
                href={TRYMACAPPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-[1.02]"
              >
                <img
                  src={TRYMACAPPS_BADGE_IMG}
                  alt="Featured on TryMacApps"
                  width={200}
                  height={67}
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>

            {/* Micro Highlights */}
            <p className="text-xs text-[#5E6B73] max-w-3xl mx-auto leading-relaxed">
              macos 14+ (apple silicon &amp; intel) · 7 full-screen wellness
              walls · 54 wardrobe presets · 93 spring animations + 13 sci-fi
              robo gadgets · polite typing &amp; zoom deferral · reminder timers
              off by default · 100% local privacy
            </p>
          </div>

          {/* Hero Dual Visual Showcase: Desktop / Welcome Frame + Menu Bar Popover */}
          <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 px-1">
                <div className="flex items-center gap-1.5">
                  {heroScreens.map((s, idx) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => setHeroSlide(idx)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
                        heroSlide === idx
                          ? "bg-[#17242B] text-white"
                          : "bg-white text-[#5E6B73] hover:text-[#17242B] border border-black/[0.08]"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* Live Interactive "Poke Ottie" Button */}
                <div className="relative flex items-center gap-2">
                  {pokeMessage && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white border border-black/[0.08] shadow-xs text-[#17242B] animate-fade-in">
                      {pokeMessage}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={handlePokeHero}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#E6F0EC] text-[#2E705E] hover:bg-[#d5e6df] border border-[#2E705E]/20 transition cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Poke Ottie 🐾</span>
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
                <Image
                  src={heroScreens[heroSlide].src}
                  alt={heroScreens[heroSlide].alt}
                  width={heroScreens[heroSlide].width}
                  height={heroScreens[heroSlide].height}
                  priority
                  className="w-full h-auto block"
                />
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-full max-w-[360px] rounded-2xl bg-white border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden">
                <Image
                  src="/images/ottie/04-menu-popover-white-minimal.png"
                  alt="Ottie minimal macOS menu bar popover showing screen time today, 9 of 10 eye breaks rested, 8-glass hydration progress, and 1-click Robo / Antic / Focus Mode toggles"
                  width={1040}
                  height={1160}
                  priority
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-center text-xs text-[#5E6B73] mt-3">
                Compact menu bar popover — 1-click{" "}
                <strong>🤖 Robo</strong>, <strong>🎲 Antic</strong>,{" "}
                <strong>🎯 Focus Mode</strong> &amp; hydration tracker.
              </p>
            </div>
          </div>
        </section>

        {/* ── Interactive Live Browser Trial (#live-trial — Inspired by meetpeeka.com + index.html) ── */}
        <section
          id="live-trial"
          className="py-20 px-4 sm:px-6 bg-white border-y border-black/[0.06]"
        >
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-mono font-medium bg-[#E6F0EC] text-[#2E705E] mb-3">
                interactive web trial · live 60fps canvas
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#17242B]">
                try ottie right here in your browser.
              </h2>
              <p className="text-sm text-[#5E6B73] mt-2 leading-relaxed">
                Move your cursor and watch Ottie follow. Click inside the Notes
                window and type to test <strong>polite deferral</strong>, or hit{" "}
                <strong>Try a Peekaboo break now</strong> to watch the scalloped
                blanket drape down.
              </p>
            </div>

            <OttieInteractiveDesktopTrial />

            <div className="text-center pt-1">
              <a
                href="/ottie-trial/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5E6B73] hover:text-[#17242B] underline underline-offset-4"
              >
                <span>Open standalone full-window web trial (index.html)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* ── The 20-20-20 Rule & How It Works 3-Step Visual Story (MeetPeeka + Helium Style) ── */}
        <section id="how-it-works" className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* The 20-20-20 Rule Intro */}
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-mono font-medium bg-white border border-black/[0.08] text-[#2E705E]">
                the 20-20-20 rule, reimagined
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#17242B]">
                sleepy. peekaboo. boo!
              </h2>
              <p className="text-sm sm:text-base text-[#5E6B73] leading-relaxed">
                Every 20 minutes, look 20 feet away for 20 seconds. Easy rule —
                nobody follows it because standard break timers feel like a
                scolding alarm clock. Ottie turns the break into the best 20
                seconds of your hour.
              </p>
            </div>

            {/* 3 Visual Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white border border-black/[0.08] p-6 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-[#E6F0EC] text-[#2E705E] font-mono text-xs font-bold flex items-center justify-center">
                    01
                  </span>
                  <span className="text-xs font-mono text-[#5E6B73]">
                    Pre-break cue
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#17242B]">
                  It gets sleepy
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6B73] leading-relaxed">
                  As you work, Ottie&apos;s eyelids get heavy. It yawns,
                  stretches its paws, and whispers{" "}
                  <em>&ldquo;Peekaboo soon…&rdquo;</em> You feel the break
                  coming naturally before any timer says a word.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-black/[0.08] p-6 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-[#E6F0EC] text-[#2E705E] font-mono text-xs font-bold flex items-center justify-center">
                    02
                  </span>
                  <span className="text-xs font-mono text-[#5E6B73]">
                    7 calming walls
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#17242B]">
                  Peekaboo blanket drape
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6B73] leading-relaxed">
                  Ottie pulls a soft scalloped blanket (or aquatic water wave,
                  zen bamboo forest, or cyber-grid) over your screen, covers its
                  eyes, and peeks with one eye at <strong>4!</strong> while you
                  look far away.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-black/[0.08] p-6 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-[#E6F0EC] text-[#2E705E] font-mono text-xs font-bold flex items-center justify-center">
                    03
                  </span>
                  <span className="text-xs font-mono text-[#5E6B73]">
                    Fresh return
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#17242B]">
                  Boo! Welcome back
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6B73] leading-relaxed">
                  The blanket lifts, Ottie pops out with a happy{" "}
                  <em>&ldquo;Boo!&rdquo;</em> and three slow blinks together —
                  sometimes wearing a new sprout, star clip, or beanie in its
                  pocket.
                </p>
              </div>
            </div>

            {/* Helium [ 1 ] to [ 4 ] Editorial Cards */}
            <div className="max-w-4xl mx-auto space-y-12 pt-4">
              {/* [ 1 ] what it is */}
              <div className="bg-white rounded-2xl border border-black/[0.08] p-6 sm:p-10 space-y-4">
                <span className="inline-block font-mono text-xs text-[#5E6B73] bg-[#F6F5F2] px-2.5 py-1 rounded-md">
                  [ 1 ]
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  what it is
                </h2>
                <p className="text-base sm:text-lg font-medium text-[#17242B]">
                  a native white otter &amp; cutest robo desktop companion +
                  7-wall wellness studio for macOS.
                </p>
                <p className="text-sm text-[#5E6B73] leading-relaxed">
                  built natively in swift for macOS, ottie combines a cozy
                  desktop friend (54 mix-and-match outfits, 93 harmonic spring
                  animations, smart screen activity mirroring, and cursor
                  headpats) with 7 full-screen animated break walls for eye
                  rest, water hydration, family calls, stair walks, back
                  stretches, tea breaks, and neural core recharges.
                </p>
              </div>

              {/* [ 2 ] why it's different */}
              <div className="bg-white rounded-2xl border border-black/[0.08] p-6 sm:p-10 space-y-6">
                <span className="inline-block font-mono text-xs text-[#5E6B73] bg-[#F6F5F2] px-2.5 py-1 rounded-md">
                  [ 2 ]
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  why it&apos;s different
                </h2>
                <p className="text-base sm:text-lg font-medium text-[#17242B]">
                  no streaks to lose. no bossy lockouts. reminder timers are off
                  by default until you want them.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#F6F5F2] border border-black/[0.06]">
                    <div className="text-2xl font-semibold font-mono text-[#17242B]">
                      54 looks
                    </div>
                    <div className="text-xs text-[#5E6B73] mt-1">
                      20 tops · 13 bottoms · 11 gloves · 25 hats + Cutest Robo
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F6F5F2] border border-black/[0.06]">
                    <div className="text-2xl font-semibold font-mono text-[#17242B]">
                      93 actions
                    </div>
                    <div className="text-xs text-[#5E6B73] mt-1">
                      23-channel spring rig + 13 sci-fi Robo gadgets
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F6F5F2] border border-black/[0.06]">
                    <div className="text-2xl font-semibold font-mono text-[#17242B]">
                      7 walls
                    </div>
                    <div className="text-xs text-[#5E6B73] mt-1">
                      Peekaboo · Water · Parents · Robo · Stairs · Zen · Tea
                    </div>
                  </div>
                </div>
              </div>

              {/* [ 4 ] what you get */}
              <div className="bg-white rounded-2xl border border-black/[0.08] p-6 sm:p-10 space-y-6">
                <span className="inline-block font-mono text-xs text-[#5E6B73] bg-[#F6F5F2] px-2.5 py-1 rounded-md">
                  [ 3 ]
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  what you get
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm text-[#17242B]">
                  {OTTIE_WHAT_YOU_GET.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F6F5F2]/80 border border-black/[0.05]"
                    >
                      <Check className="w-4 h-4 text-[#2E705E] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#17242B]">
                          {item.title}
                        </div>
                        <div className="text-xs text-[#5E6B73] mt-0.5 leading-relaxed">
                          {item.description}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7 Dedicated Full-Screen Break Walls (Interactive Tab Switcher #break-walls) ── */}
        <section
          id="break-walls"
          className="py-20 px-4 sm:px-6 bg-white border-y border-black/[0.06]"
        >
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-mono font-medium bg-[#E6F0EC] text-[#2E705E] mb-3">
                01 · 7 immersive full-screen break walls
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#17242B]">
                not just text alerts. 7 custom-rendered habit sanctuaries.
              </h2>
              <p className="text-sm text-[#5E6B73] mt-2 leading-relaxed">
                Click any habit wall below to preview the full-screen macOS
                environment — from the 20-20-20 Peekaboo Blanket and Aquatic
                Water Wave to the Talk to Parents Hearth and Cutest Robo
                Cyber-Grid.
              </p>
            </div>

            {/* 7 Wall Selector Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {OTTIE_BREAK_WALLS.map((wall, idx) => {
                const isSelected = activeWallIndex === idx;
                return (
                  <button
                    key={wall.id}
                    type="button"
                    onClick={() => setActiveWallIndex(idx)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer border ${
                      isSelected
                        ? "bg-[#17242B] text-white border-[#17242B] shadow-xs"
                        : "bg-[#F6F5F2] text-[#17242B] border-black/[0.08] hover:bg-[#E6F0EC]"
                    }`}
                  >
                    {wall.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Active Break Wall Showcase Card */}
            <div className="rounded-3xl border border-black/[0.08] bg-[#F6F5F2] p-6 sm:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="inline-flex items-center gap-2">
                    <span
                      className="text-xs font-mono font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: activeWall.pillBg,
                        color: activeWall.accentColor,
                      }}
                    >
                      {activeWall.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#17242B]">
                    {activeWall.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6B73] leading-relaxed">
                    {activeWall.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="inline-block text-xs font-mono font-medium px-3.5 py-2 rounded-xl bg-white border border-black/[0.08] text-[#17242B] shadow-2xs">
                    {activeWall.ctaPreview}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-black/[0.1] bg-[#122428] shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
                <Image
                  src={activeWall.image}
                  alt={activeWall.title}
                  width={activeWall.width}
                  height={activeWall.height}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Interactive Dressing Room Studio (54 Costumes & Cutest Robo #dressing-room) ── */}
        <section id="dressing-room" className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-mono font-medium bg-[#E5F2FA] text-[#298AC7] mb-3">
                02 · 54 mix-and-match costumes &amp; cutest robo-ottie mode
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#17242B]">
                dress up &amp; play with ottie.
              </h2>
              <p className="text-sm text-[#5E6B73] mt-2 leading-relaxed">
                Open the side-by-side Dressing Room Studio with a live
                interactive preview on the left. Mix and match{" "}
                <strong>20 tops</strong>, <strong>13 bottoms</strong>,{" "}
                <strong>11 gloves</strong>, and <strong>25 hats</strong> — from
                Cricket Champion, Chef, Wizard, and Astronaut to{" "}
                <strong>Cutest Robo-Ottie</strong> with an LED chest heart,
                antenna visor, mecha paws, and hover thrusters.
              </p>
            </div>

            <OttieMiniDressingStudio />
          </div>
        </section>

        {/* ── 93 Actions, 24 Faces & Smart Screen Activity Awareness Bento Grid (#actions & #smart-awareness) ── */}
        <section
          id="actions"
          className="py-20 px-4 sm:px-6 bg-white border-y border-black/[0.06]"
        >
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block rounded-full px-3 py-1 text-xs font-mono font-medium bg-[#E6F0EC] text-[#2E705E] mb-3">
                03 · 93 spring animations &amp; smart screen awareness
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#17242B]">
                understands your screen. never repeats the same walk.
              </h2>
              <p className="text-sm text-[#5E6B73] mt-2 leading-relaxed">
                Powered by a 23-channel harmonic spring physics rig and a
                balanced shuffle deck, Ottie mirrors what you&apos;re doing on
                your Mac and reacts when your cursor comes close.
              </p>
            </div>

            {/* 2x2 Bento Grid with High-Res Retina Screenshots */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bento 1: 93 Animated Actions & 13 Sci-Fi Robo Actions */}
              <div className="rounded-3xl bg-[#F6F5F2] border border-black/[0.08] p-6 sm:p-7 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white border border-black/[0.07] text-[#298AC7]">
                    93 ACTIONS · 13 SCI-FI ROBO GADGETS
                  </span>
                  <h3 className="text-xl font-semibold text-[#17242B]">
                    93 Equal-Frequency Actions &amp; Cutest Robo Gadgets
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6B73] leading-relaxed">
                    Ottie sips tall water glasses, flips pancakes, slurps ramen,
                    plays cricket &amp; golf, roasts campfire marshmallows,
                    spins a DJ turntable, plays with a Twin Ottie friend, climbs
                    stairs, or fires 13 Robo-Ottie gadgets (laser visor scans,
                    jetpack flights, rocket punches, mini UFO tractor beams, and
                    pixel heart projectors).
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-black/[0.08] bg-white shadow-xs">
                  <Image
                    src="/images/ottie/12-actions-studio-93-animations.png"
                    alt="Ottie Actions & Robo Studio window showing 93 animated actions and 13 Cutest Robo-Ottie sci-fi gadgets including Mini UFO Tractor Beam"
                    width={2120}
                    height={1560}
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Bento 2: Smart Screen Awareness & Cursor Love */}
              <div
                id="smart-awareness"
                className="rounded-3xl bg-[#F6F5F2] border border-black/[0.08] p-6 sm:p-7 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white border border-black/[0.07] text-[#2E705E]">
                    SMART SCREEN AWARENESS · 2D ROAMING
                  </span>
                  <h3 className="text-xl font-semibold text-[#17242B]">
                    Mirrors Your Activity &amp; Runs to Your Cursor for Love
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6B73] leading-relaxed">
                    Watches YouTube on a tiny phone when you watch YouTube,
                    codes on a mini laptop when you&apos;re in Xcode/VS Code,
                    texts when you&apos;re messaging, and curls up under a
                    blanket when idle. Periodically roams screen corners or runs
                    right to your mouse cursor for headpats — getting adorably
                    pouty (<code>&gt;:(</code>) if you pull away too fast!
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-black/[0.08] bg-white shadow-xs">
                  <Image
                    src="/images/ottie/17-smart-screen-awareness-roaming.png"
                    alt="Ottie Smart Screen Activity Awareness & 2D Screen Roaming settings showing YouTube, Coding, Fast Typing, and Mouse Cursor headpats"
                    width={2120}
                    height={1560}
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Bento 3: 24 Expressive Faces & Emotions */}
              <div className="rounded-3xl bg-[#F6F5F2] border border-black/[0.08] p-6 sm:p-7 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white border border-black/[0.07] text-[#CC476B]">
                    24 EXPRESSIVE FACES &amp; EMOTIONS
                  </span>
                  <h3 className="text-xl font-semibold text-[#17242B]">
                    24 Hand-Crafted Otter Expressions &amp; Antics
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6B73] leading-relaxed">
                    From <em>Hydrate Glass</em>, <em>Boing Leap</em>, and{" "}
                    <em>Cute Angy &gt;:(</em> to <em>20ft Scout Binoculars</em>,{" "}
                    <em>Matcha Tea Sip</em>, <em>Reading Specs</em>,{" "}
                    <em>Heart-Eyes Love</em>, and <em>One-Eye Peek</em> — every
                    emotion is rendered in crisp vector detail.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-black/[0.08] bg-white shadow-xs">
                  <Image
                    src="/images/ottie/05-otter-faces-expressions.png"
                    alt="Meet Ottie — 24 Expressive Faces & Companion Antics grid including Hydrate Glass, Paws Stretch, Cute Angy, Call Family, and One-Eye Peek"
                    width={2360}
                    height={1960}
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              {/* Bento 4: Unified Habit Timers & Off-By-Default Settings */}
              <div className="rounded-3xl bg-[#F6F5F2] border border-black/[0.08] p-6 sm:p-7 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white border border-black/[0.07] text-[#17242B]">
                    REMINDER TIMERS OFF BY DEFAULT · FOCUS MODE
                  </span>
                  <h3 className="text-xl font-semibold text-[#17242B]">
                    Unified Habit Timers &amp; 1-Click Right-Click Focus Mode
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E6B73] leading-relaxed">
                    Automatic reminder timers are <strong>OFF by default</strong>{" "}
                    so Ottie never interrupts you unexpectedly. Enable 15–60 min
                    Peekaboo intervals, preview any of the 7 walls manually, or
                    right-click Ottie on your desktop for instant{" "}
                    <strong>Focus Mode</strong>.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-black/[0.08] bg-white shadow-xs">
                  <Image
                    src="/images/ottie/08-settings-page-habits.png"
                    alt="Ottie Unified Breaks, 7 Full-Screen Walls, Hydration & Family Settings window showing Reminder Timers Off by default and 25-minute Peekaboo intervals"
                    width={2120}
                    height={1560}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Ottie's Pocket Collectibles (06-otter-pocket-collectibles.png — MeetPeeka Style) ── */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-10 shadow-2xs space-y-6">
              <div className="max-w-2xl mx-auto text-center space-y-2">
                <span className="inline-block rounded-full px-3 py-1 text-xs font-mono font-medium bg-[#E6F0EC] text-[#2E705E]">
                  ottie&apos;s pocket · zero-guilt habit rewards
                </span>
                <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#17242B]">
                  sometimes, ottie finds things.
                </h2>
                <p className="text-sm text-[#5E6B73] leading-relaxed">
                  After a rested afternoon, Ottie might come back from behind
                  the blanket wearing a tiny leaf sprout, a star clip, an acorn
                  cap, or a cozy beanie. No streaks to lose. No coins. Just a
                  small surprise in Ottie&apos;s pocket.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-black/[0.06] bg-[#F6F5F2]">
                <Image
                  src="/images/ottie/06-otter-pocket-collectibles.png"
                  alt="Sometimes, Ottie finds things — Sprout, Star clip, Acorn cap, and Beanie collectibles"
                  width={2080}
                  height={840}
                  className="w-full h-auto block"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F6F5F2] border border-black/[0.06]">
                  <h3 className="text-sm font-semibold text-[#17242B]">
                    No streaks to lose.
                  </h3>
                  <p className="text-xs text-[#5E6B73] mt-1 leading-relaxed">
                    Counts only go up. Missing or skipping a break never wipes
                    your progress or scolds you.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F6F5F2] border border-black/[0.06]">
                  <h3 className="text-sm font-semibold text-[#17242B]">
                    No nagging pop-ups.
                  </h3>
                  <p className="text-xs text-[#5E6B73] mt-1 leading-relaxed">
                    Ottie getting sleepy <em>is</em> the reminder — and timers
                    stay completely off unless you turn them on.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F6F5F2] border border-black/[0.06]">
                  <h3 className="text-sm font-semibold text-[#17242B]">
                    No lockouts.
                  </h3>
                  <p className="text-xs text-[#5E6B73] mt-1 leading-relaxed">
                    You&apos;re always in charge. Press <kbd>esc</kbd> to skip
                    anytime, or snooze in one click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Built For Every Kind of Mac Day (Persona Switcher) ── */}
        <section className="py-16 px-4 sm:px-6 bg-white border-y border-black/[0.06]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#17242B]">
              built for every kind of mac day.
            </h2>
            <p className="text-sm sm:text-base text-[#5E6B73] mt-2">
              whether you&apos;re compiling Swift, designing in Figma, or in
              back-to-back Zoom calls.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-[#F6F5F2] border border-black/[0.06] mt-6">
              {Object.keys(OTTIE_PERSONAS).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActivePersona(key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
                    activePersona === key
                      ? "bg-[#17242B] text-white shadow-2xs"
                      : "text-[#5E6B73] hover:text-[#17242B]"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-black/[0.08] bg-[#F6F5F2] p-6 sm:p-8 text-left max-w-2xl mx-auto">
              <div className="inline-block rounded-full px-3 py-1 text-[11px] font-mono font-medium bg-white border border-black/[0.07] text-[#2E705E] mb-3">
                {OTTIE_PERSONAS[activePersona].badge}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#17242B]">
                {OTTIE_PERSONAS[activePersona].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6B73] mt-2 leading-relaxed">
                {OTTIE_PERSONAS[activePersona].body}
              </p>
            </div>
          </div>
        </section>

        {/* ── Comparison Table (## why ottie?) ── */}
        <section id="comparison" className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                why ottie?
              </h2>
              <p className="text-sm text-[#5E6B73] mt-2">
                how ottie compares to traditional macOS break timers and desktop
                pets.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-black/[0.08] bg-white shadow-2xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-black/[0.08] bg-[#F6F5F2]/80">
                    <th className="py-3.5 px-4 font-semibold text-[#17242B]">
                      feature
                    </th>
                    <th className="py-3.5 px-4 font-semibold text-[#2E705E] bg-[#E6F0EC]/40">
                      ottie (cogify)
                    </th>
                    <th className="py-3.5 px-4 font-medium text-[#5E6B73]">
                      peeka
                    </th>
                    <th className="py-3.5 px-4 font-medium text-[#5E6B73]">
                      lookaway
                    </th>
                    <th className="py-3.5 px-4 font-medium text-[#5E6B73]">
                      time out / stretchly
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.06]">
                  {OTTIE_COMPARISON_ROWS.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-black/[0.01] transition-colors"
                    >
                      <td className="py-3 px-4 font-medium text-[#17242B]">
                        {row.feature}
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#2E705E] bg-[#E6F0EC]/25">
                        {row.ottie}
                      </td>
                      <td className="py-3 px-4 text-[#5E6B73]">{row.peeka}</td>
                      <td className="py-3 px-4 text-[#5E6B73]">
                        {row.lookaway}
                      </td>
                      <td className="py-3 px-4 text-[#5E6B73]">
                        {row.timeout}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Testimonials (## loved by mac creators.) ── */}
        <section className="py-20 px-4 sm:px-6 bg-white border-y border-black/[0.06]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                loved by mac creators.
              </h2>
              <p className="text-sm text-[#5E6B73] mt-2">
                used daily by developers, designers, and founders to keep their
                eyes fresh and spirits high.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {OTTIE_TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-black/[0.08] bg-[#F6F5F2] p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[11px] font-mono font-medium text-[#2E705E] bg-[#E6F0EC] px-2.5 py-0.5 rounded-full mb-3">
                      {t.metric}
                    </span>
                    <p className="text-xs sm:text-sm text-[#17242B] leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-black/[0.06]">
                    <div className="font-semibold text-xs text-[#17242B]">
                      {t.author}
                    </div>
                    <div className="text-[11px] text-[#5E6B73]">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Notarized Installer Card ("install in 3 seconds.") ── */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="inline-block font-mono text-xs text-[#2E705E] bg-[#E6F0EC] px-3 py-1 rounded-full font-medium">
                  ✓ universal macOS installer · v1.0.0
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  install in 3 seconds.
                </h2>
                <p className="text-xs sm:text-sm text-[#5E6B73] leading-relaxed">
                  Drag <strong>Ottie.app</strong> into your Applications folder.
                  Built natively in Swift for Apple Silicon (M1/M2/M3/M4) and
                  Intel Macs on macOS 14.0 Sonoma, macOS 15.0 Sequoia &amp;
                  macOS 26 Tahoe, with Launch at Login built in.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={OTTIE_DMG_URL}
                    className="inline-flex items-center justify-center gap-2 bg-[#17242B] text-white hover:bg-black rounded-full px-6 py-2.5 text-xs font-medium transition shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>download Ottie.dmg ({OTTIE_SIZE})</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopySha}
                    className="inline-flex items-center justify-center gap-1.5 bg-[#F6F5F2] border border-black/[0.08] hover:bg-[#E6F0EC] text-[#17242B] rounded-full px-4 py-2.5 text-xs font-medium transition cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#5E6B73]" />
                    <span>
                      {copiedSha ? "copied sha-256!" : "copy sha-256"}
                    </span>
                  </button>
                </div>

                {/* TryMacApps Badge inside Installer Card */}
                <div className="pt-3">
                  <a
                    href={TRYMACAPPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:scale-[1.02]"
                  >
                    <img
                      src={TRYMACAPPS_BADGE_IMG}
                      alt="Featured on TryMacApps"
                      width={200}
                      height={67}
                      className="h-10 w-auto object-contain"
                    />
                  </a>
                </div>

                <div className="font-mono text-[11px] text-[#5E6B73] pt-2 break-all">
                  SHA-256: {OTTIE_SHA256}
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[340px] rounded-2xl overflow-hidden border border-black/[0.08] bg-[#F6F5F2] shadow-sm p-4 text-center space-y-3">
                  <div className="flex items-center justify-center gap-5 py-3">
                    <Image
                      src="/images/ottie/07-app-icon-white-otter.png"
                      alt="Ottie.app Icon"
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-2xl shadow-sm"
                    />
                    <span className="text-2xl text-[#5E6B73] font-light">
                      →
                    </span>
                    <div className="w-20 h-20 rounded-2xl bg-white border border-black/[0.08] shadow-2xs flex flex-col items-center justify-center text-xs font-semibold text-[#17242B]">
                      <span className="text-2xl mb-0.5">📁</span>
                      <span className="text-[10px]">Applications</span>
                    </div>
                  </div>
                  <Image
                    src="/images/ottie/19-dmg-installer-preview.png"
                    alt="Drag Ottie into Applications, then open it"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-xl border border-black/[0.05]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Accordion (## questions, answered.) ── */}
        <section
          id="faq"
          className="py-20 px-4 sm:px-6 bg-white border-t border-black/[0.06]"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                questions, answered.
              </h2>
              <p className="text-sm text-[#5E6B73] mt-2">
                everything about ottie&apos;s 7 break walls, 54 costumes, smart
                screen awareness, and local privacy.
              </p>
            </div>

            <div className="space-y-3">
              {OTTIE_FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-black/[0.08] bg-[#F6F5F2] overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left py-4 px-5 flex items-center justify-between gap-4 font-medium text-sm text-[#17242B] cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#5E6B73] transition-transform shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[#5E6B73] leading-relaxed border-t border-black/[0.05] bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Sister Apps Showcase (Cogify Cross-App Footer) ── */}
        <OtherAppsShowcase currentSlug="ottie" />

        {/* ── Bottom CTA & Direct Feedback Section ── */}
        <section className="py-20 px-4 sm:px-6 bg-[#F6F5F2] border-t border-black/[0.06] text-center">
          <div className="max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center justify-center">
              <Image
                src="/images/ottie/07-app-icon-white-otter.png"
                alt="Ottie Icon"
                width={64}
                height={64}
                className="w-16 h-16 rounded-2xl shadow-sm"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#17242B]">
              meet your new mac desk friend today.
            </h2>
            <p className="text-sm text-[#5E6B73]">
              Universal Apple Silicon &amp; Intel build · Launch at Login
              built-in · 54 Costumes · 93 Actions · 7 Break Walls.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={OTTIE_DMG_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#17242B] text-white hover:bg-black rounded-full px-7 py-3 text-sm font-medium transition shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>download Ottie.dmg ({OTTIE_SIZE})</span>
              </a>
              <a
                href="mailto:connect@cogify.me?subject=Ottie%20for%20macOS%20Feedback"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-black/[0.1] text-[#17242B] hover:bg-[#E6F0EC] rounded-full px-6 py-3 text-sm font-medium transition"
              >
                <Mail className="w-4 h-4 text-[#2E705E]" />
                <span>send feedback (connect@cogify.me)</span>
              </a>
            </div>

            {/* TryMacApps Footer Badge */}
            <div className="pt-4 flex items-center justify-center">
              <a
                href={TRYMACAPPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-[1.02]"
              >
                <img
                  src={TRYMACAPPS_BADGE_IMG}
                  alt="Featured on TryMacApps"
                  width={180}
                  height={60}
                  className="h-9 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Ultra-Lightweight Roaming Ottie Companion Widget */}
      <RoamingOttieWidget />
    </div>
  );
}
