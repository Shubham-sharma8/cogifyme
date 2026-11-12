"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { OTTIE_DMG_URL } from "./ottie-data";

type MicroAction = "walk" | "water" | "robo" | "peekaboo" | "stairs" | "love" | "pout";

const ACTION_SEQUENCE: { id: MicroAction; bubble: string }[] = [
  { id: "walk", bubble: "Exploring cogify.me~ 🐾" },
  { id: "water", bubble: "Stay hydrated! Drink water 💧" },
  { id: "robo", bubble: "BEEP BOOP! Cutest Robo mode 🤖✨" },
  { id: "peekaboo", bubble: "20-20-20 eye rest soon… 4! 👁️" },
  { id: "stairs", bubble: "Quick stair walk & stretch! 🪜" },
];

export function RoamingOttieWidget() {
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [action, setAction] = useState<MicroAction>("walk");
  const [bubble, setBubble] = useState<string>("Exploring cogify.me~ 🐾");
  const [roboOverride, setRoboOverride] = useState<boolean>(false);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  const [offsetX, setOffsetX] = useState<number>(0);

  const hoverStartRef = useRef<number>(0);
  const stepIndexRef = useRef<number>(0);

  // Deferred Non-Blocking Mount via requestIdleCallback (or 1200ms fallback)
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let idleId: number | null = null;

    const init = () => setMounted(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = (
        window as Window & {
          requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
        }
      ).requestIdleCallback(init, { timeout: 1500 });
    } else {
      timeoutId = setTimeout(init, 1200);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (
        idleId !== null &&
        typeof window !== "undefined" &&
        "cancelIdleCallback" in window
      ) {
        (
          window as Window & { cancelIdleCallback: (id: number) => void }
        ).cancelIdleCallback(idleId);
      }
    };
  }, []);

  // 7-second lightweight micro-action cycle
  useEffect(() => {
    if (!mounted || dismissed) return;
    const interval = setInterval(() => {
      if (popoverOpen) return;
      stepIndexRef.current =
        (stepIndexRef.current + 1) % ACTION_SEQUENCE.length;
      const next = ACTION_SEQUENCE[stepIndexRef.current];
      setAction(next.id);
      setBubble(next.bubble);
      // Gentle horizontal waddle along bottom right
      setOffsetX(next.id === "walk" ? (stepIndexRef.current % 2 === 0 ? -48 : 0) : -18);
    }, 7000);
    return () => clearInterval(interval);
  }, [mounted, dismissed, popoverOpen]);

  if (!mounted || dismissed) return null;

  const isRobo = roboOverride || action === "robo";

  const handleMouseEnter = () => {
    hoverStartRef.current = Date.now();
    setAction("love");
    setBubble("Hehe headpats! Meet me on macOS 💕");
  };

  const handleMouseLeave = () => {
    const elapsed = Date.now() - hoverStartRef.current;
    if (elapsed < 1400 && !popoverOpen) {
      setAction("pout");
      setBubble("Hey! Come back with the cursor! >:(");
    }
  };

  return (
    <div
      className="fixed bottom-24 sm:bottom-28 right-5 z-40 pointer-events-none select-none print:hidden"
      aria-label="Ottie macOS Companion preview widget"
    >
      <div
        className="relative flex flex-col items-end transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(${offsetX}px)` }}
      >
        {/* Interactive Click Popover */}
        {popoverOpen && (
          <div className="pointer-events-auto mb-2 w-64 rounded-2xl bg-white/95 backdrop-blur-md border border-black/[0.1] shadow-[0_16px_40px_rgba(0,0,0,0.14)] p-3.5 text-xs text-[#17242B]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-[#17242B] flex items-center gap-1.5">
                <span>🦦 Meet Ottie for Mac</span>
              </span>
              <button
                type="button"
                onClick={() => setPopoverOpen(false)}
                className="text-[#5E6B73] hover:text-[#17242B] px-1 cursor-pointer"
                aria-label="Close Ottie menu"
              >
                ✕
              </button>
            </div>
            <p className="text-[11px] text-[#5E6B73] leading-relaxed mb-3">
              54 costumes, Cutest Robo mode, 93 spring animations &amp; 7 calming
              break walls living on your desktop.
            </p>
            <div className="flex items-center gap-1.5 mb-2">
              <button
                type="button"
                onClick={() => {
                  setRoboOverride((v) => !v);
                  setBubble(
                    !roboOverride
                      ? "BEEP BOOP! Cutest Robo mode 🤖✨"
                      : "Natural fluffy otter mode 🌱"
                  );
                }}
                className="flex-1 py-1.5 px-2.5 rounded-full text-[11px] font-medium border border-black/[0.1] bg-[#F6F5F2] hover:bg-[#E6F0EC] text-[#17242B] transition cursor-pointer"
              >
                {isRobo ? "🌱 Switch to Otter" : "🤖 Cutest Robo"}
              </button>
              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="py-1.5 px-2.5 rounded-full text-[11px] text-[#5E6B73] hover:text-[#17242B] hover:bg-black/[0.04] transition cursor-pointer"
              >
                Hide
              </button>
            </div>
            <div className="flex items-center gap-1.5">
              <Link
                href="/ottie"
                onClick={() => setPopoverOpen(false)}
                className="flex-1 text-center py-1.5 px-3 rounded-full text-[11px] font-semibold bg-[#2E705E] text-white hover:bg-[#235849] transition"
              >
                Explore /ottie →
              </Link>
              <a
                href={OTTIE_DMG_URL}
                className="py-1.5 px-3 rounded-full text-[11px] font-semibold bg-[#17242B] text-white hover:bg-black transition"
              >
                .DMG
              </a>
            </div>
          </div>
        )}

        {/* Speech Bubble */}
        <div className="mb-1 mr-2 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-xs border border-black/[0.08] shadow-md text-[11px] font-medium text-[#17242B] whitespace-nowrap transition-all duration-300">
          {bubble}
        </div>

        {/* 96x96 Character Hitbox (pointer-events-auto ONLY here) */}
        <button
          type="button"
          onClick={() => setPopoverOpen((o) => !o)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="pointer-events-auto w-24 h-24 relative flex items-center justify-center cursor-pointer group focus:outline-none"
          title="Click to interact with Ottie or visit /ottie"
        >
          <svg
            viewBox="-100 -100 200 200"
            className="w-24 h-24 overflow-visible transition-transform duration-300 group-hover:scale-105"
          >
            <ellipse
              cx="0"
              cy="66"
              rx="42"
              ry="7"
              fill="rgba(16,28,34,0.15)"
            />

            {/* Stairs micro-prop */}
            {action === "stairs" && (
              <g stroke="#D97706" strokeWidth="2" fill="#FEF3C7">
                <rect x="-72" y="42" width="24" height="7" rx="2.5" />
                <rect x="-58" y="28" width="24" height="7" rx="2.5" />
                <rect x="-44" y="14" width="24" height="7" rx="2.5" />
              </g>
            )}

            {/* Ears */}
            <circle
              cx="-38"
              cy="-42"
              r="14"
              fill="#FFFFFF"
              stroke={isRobo ? "#38BDF8" : "#CFD6D4"}
              strokeWidth="1.6"
            />
            <circle cx="-38" cy="-42" r="7.5" fill="#F4C7C3" />
            <circle
              cx="38"
              cy="-42"
              r="14"
              fill="#FFFFFF"
              stroke={isRobo ? "#38BDF8" : "#CFD6D4"}
              strokeWidth="1.6"
            />
            <circle cx="38" cy="-42" r="7.5" fill="#F4C7C3" />

            {/* Body */}
            <path
              d="M -48 -14 C -48 -52, 48 -52, 48 -14 C 52 16, 55 42, 55 56 C 48 64, 38 64, 31 54 C 24 46, 16 46, 10 55 C 4 63, -4 63, -10 55 C -16 46, -24 46, -31 54 C -38 64, -48 64, -55 56 C -55 42, -52 16, -48 -14 Z"
              fill="#FFFFFF"
              stroke={isRobo ? "#38BDF8" : "#CFD6D4"}
              strokeWidth="1.8"
            />
            <ellipse
              cx="0"
              cy="24"
              rx="27"
              ry="22"
              fill="#FAF6EE"
              opacity="0.85"
            />

            {/* Sprout or Robo Antenna */}
            {isRobo ? (
              <g>
                <line
                  x1="0"
                  y1="-46"
                  x2="0"
                  y2="-64"
                  stroke="#38BDF8"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle
                  cx="0"
                  cy="-67"
                  r="5.5"
                  fill="#F472B6"
                  stroke="#38BDF8"
                  strokeWidth="1.5"
                />
                <rect
                  x="-32"
                  y="-21"
                  width="64"
                  height="22"
                  rx="10"
                  fill="rgba(14,165,233,0.16)"
                  stroke="#38BDF8"
                  strokeWidth="2"
                />
                <rect
                  x="-14"
                  y="22"
                  width="28"
                  height="13"
                  rx="4"
                  fill="#0F172A"
                  stroke="#38BDF8"
                  strokeWidth="1.3"
                />
                <circle cx="-5" cy="28.5" r="2.6" fill="#F43F5E" />
                <rect
                  x="2"
                  y="25.5"
                  width="2.6"
                  height="6"
                  rx="1"
                  fill="#34D399"
                />
                <rect
                  x="6.5"
                  y="25.5"
                  width="2.6"
                  height="6"
                  rx="1"
                  fill="#34D399"
                />
              </g>
            ) : (
              <g>
                <path
                  d="M0,-47 Q0,-60 4,-63"
                  fill="none"
                  stroke="#4D8B55"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="-6"
                  cy="-60"
                  rx="7.5"
                  ry="4.2"
                  transform="rotate(-24 -6 -60)"
                  fill="#74BF6B"
                />
                <ellipse
                  cx="7"
                  cy="-62"
                  rx="7.5"
                  ry="4.2"
                  transform="rotate(20 7 -62)"
                  fill="#74BF6B"
                />
              </g>
            )}

            {/* Cheeks */}
            <ellipse
              cx="-25"
              cy="4"
              rx="8.5"
              ry="4.8"
              fill="#F4B4AE"
              opacity={action === "love" ? "0.85" : "0.55"}
            />
            <ellipse
              cx="25"
              cy="4"
              rx="8.5"
              ry="4.8"
              fill="#F4B4AE"
              opacity={action === "love" ? "0.85" : "0.55"}
            />

            {/* Eyes */}
            <g transform="translate(-17,-8)">
              <ellipse cx="0" cy="0" rx="7" ry="8.5" fill="#152329" />
              <circle cx="-2.2" cy="-3" r="2.4" fill="#FFFFFF" />
              {action === "peekaboo" && (
                <rect x="-8" y="-9" width="16" height="15" fill="#FFFFFF" />
              )}
            </g>
            <g transform="translate(17,-8)">
              <ellipse cx="0" cy="0" rx="7" ry="8.5" fill="#152329" />
              <circle cx="-2.2" cy="-3" r="2.4" fill="#FFFFFF" />
            </g>

            {/* Pout Eyebrows */}
            {action === "pout" && (
              <g stroke="#152329" strokeWidth="2.5" strokeLinecap="round">
                <line x1="-23" y1="-18" x2="-10" y2="-13" />
                <line x1="23" y1="-18" x2="10" y2="-13" />
              </g>
            )}

            {/* Floating Heart when hovered */}
            {action === "love" && (
              <text x="0" y="-68" textAnchor="middle" fontSize="18">
                💕
              </text>
            )}

            {/* Nose & Mouth */}
            <path
              d="M-3.5,-2 C-3.5,-4 3.5,-4 3.5,-2 C3.5,1 1.5,2.8 0,2.8 C-1.5,2.8 -3.5,1 -3.5,-2 Z"
              fill="#1A282E"
            />
            <path
              d={
                action === "pout"
                  ? "M-5,9 Q0,4 5,9"
                  : "M-6,6 Q0,11 6,6"
              }
              fill="none"
              stroke="#152329"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Paws */}
            <ellipse
              cx="-50"
              cy="12"
              rx="10.5"
              ry="13.5"
              transform={
                action === "peekaboo"
                  ? "translate(31,-20) rotate(-12 -50 12)"
                  : "rotate(18 -50 12)"
              }
              fill="#FFFFFF"
              stroke={isRobo ? "#38BDF8" : "#CFD6D4"}
              strokeWidth="1.5"
            />
            <ellipse
              cx="50"
              cy="12"
              rx="10.5"
              ry="13.5"
              transform={
                action === "peekaboo"
                  ? "translate(-12,-6) rotate(28 50 12)"
                  : "rotate(-18 50 12)"
              }
              fill="#FFFFFF"
              stroke={isRobo ? "#38BDF8" : "#CFD6D4"}
              strokeWidth="1.5"
            />

            {/* Water Glass Prop */}
            {action === "water" && (
              <g transform="translate(52, 0)">
                <rect
                  x="-7"
                  y="-10"
                  width="14"
                  height="20"
                  rx="2.5"
                  fill="#38BDF8"
                  stroke="#0284C7"
                  strokeWidth="1.4"
                />
              </g>
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
