"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  OTTIE_OUTFIT_PRESETS,
  OTTIE_STUDIO_ACTIONS,
} from "./ottie-data";

export function OttieInteractiveDesktopTrial() {
  const screenRef = useRef<HTMLDivElement>(null);
  const sheetPathRef = useRef<SVGPathElement>(null);
  const sheetHemRef = useRef<SVGPathElement>(null);
  const otterRootRef = useRef<SVGGElement>(null);
  const faceGroupRef = useRef<SVGGElement>(null);

  const [mode, setMode] = useState<"work" | "waiting" | "drape" | "rest">(
    "work"
  );
  const [workLeft, setWorkLeft] = useState<number>(18);
  const [breakStep, setBreakStep] = useState<number>(1);
  const [pose, setPose] = useState<
    | "awake"
    | "sleepy"
    | "yawn"
    | "wait"
    | "cover"
    | "peek"
    | "sleep"
    | "boo"
    | "angy"
  >("awake");
  const [accessory, setAccessory] = useState<
    "sprout" | "star" | "acorn" | "beanie" | "robo"
  >("sprout");
  const [bubbleText, setBubbleText] = useState<string>("Peekaboo soon… 🐾");
  const [bubbleVisible, setBubbleVisible] = useState<boolean>(true);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const animRef = useRef({
    sheet: 0,
    sheetTarget: 0,
    gx: 0,
    gy: 0,
    tx: 0,
    ty: 0,
    typingUntil: 0,
    poseOverride: false,
  });

  const bubbleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showBubble = (text: string, ms = 2600) => {
    setBubbleText(text);
    setBubbleVisible(true);
    if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
    if (ms > 0) {
      bubbleTimerRef.current = setTimeout(() => {
        setBubbleVisible(false);
      }, ms);
    }
  };

  const triggerBreak = () => {
    if (Date.now() < animRef.current.typingUntil) {
      setMode("waiting");
      setPose("wait");
      showBubble("I'll wait till you pause typing~ ⌨️", 3000);
      return;
    }
    animRef.current.poseOverride = false;
    animRef.current.sheetTarget = 1;
    setMode("drape");
    setBreakStep(1);
    setPose("cover");
    showBubble("1…", 1400);

    setTimeout(() => {
      setMode((prev) => (prev === "drape" ? "rest" : prev));
    }, 600);
  };

  const endBreak = (skipped = false) => {
    animRef.current.sheetTarget = 0;
    setMode("work");
    setWorkLeft(18);
    if (skipped) {
      setPose("awake");
      showBubble("Caught you! Back to work~ 🐾", 2400);
    } else {
      setPose("boo");
      showBubble("Boo! Welcome back ✨", 1800);
      setTimeout(() => {
        showBubble("Blink with me… 3 👁️", 2000);
        setTimeout(() => setPose("awake"), 1600);
      }, 1200);
    }
  };

  // 1-second timer for break countdown & 6-step Peekaboo count
  useEffect(() => {
    const id = setInterval(() => {
      if (mode === "work") {
        setWorkLeft((prev) => {
          const next = Math.max(0, prev - 1);
          if (next === 5 && !animRef.current.poseOverride) {
            setPose("sleepy");
            showBubble("Peekaboo soon… *rubs eyes*", 2600);
          }
          if (next === 0) {
            setTimeout(() => triggerBreak(), 50);
          }
          return next;
        });
      } else if (mode === "waiting") {
        if (Date.now() >= animRef.current.typingUntil) {
          setIsTyping(false);
          triggerBreak();
        }
      } else if (mode === "rest") {
        setBreakStep((prev) => {
          const next = prev + 1;
          if (next === 4) {
            setPose("peek");
            showBubble("4! (Peeking with one eye~ 👀)", 1800);
          } else if (next <= 6) {
            setPose("cover");
            showBubble(`${next}…`, 1100);
          } else {
            setTimeout(() => endBreak(false), 100);
          }
          return next;
        });
      }
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  // 60fps animation loop for scalloped blanket & eye tracking
  useEffect(() => {
    let rafId = 0;
    const frame = (ts: number) => {
      const st = animRef.current;
      st.sheet += (st.sheetTarget - st.sheet) * 0.12;
      const p = st.sheet;
      if (sheetPathRef.current && sheetHemRef.current) {
        if (p > 0.002) {
          const y = p * 625;
          const amp = p > 0.99 ? 0 : 22 + Math.sin(p * Math.PI) * 16;
          let d = `M0,0 L1000,0 L1000,${y.toFixed(1)}`;
          let hem = `M0,${y.toFixed(1)}`;
          const cols = 5;
          const w = 1000 / cols;
          for (let i = cols - 1; i >= 0; i--) {
            const x0 = i * w;
            const xm = (i + 0.5) * w;
            const wave = Math.sin(ts * 0.002 + i) * 3;
            d += ` Q${xm.toFixed(1)},${(y + amp + wave).toFixed(
              1
            )} ${x0.toFixed(1)},${y.toFixed(1)}`;
          }
          for (let i = 0; i < cols; i++) {
            const x1 = (i + 1) * w;
            const xm = (i + 0.5) * w;
            const wave = Math.sin(ts * 0.002 + i) * 3;
            hem += ` Q${xm.toFixed(1)},${(y + amp + wave).toFixed(
              1
            )} ${x1.toFixed(1)},${y.toFixed(1)}`;
          }
          d += " Z";
          sheetPathRef.current.setAttribute("d", d);
          sheetHemRef.current.setAttribute("d", amp > 0.5 ? hem : "");
        } else {
          sheetPathRef.current.setAttribute(
            "d",
            "M0,0 L1000,0 L1000,0 L0,0 Z"
          );
          sheetHemRef.current.setAttribute("d", "");
        }
      }

      st.gx += (st.tx - st.gx) * 0.14;
      st.gy += (st.ty - st.gy) * 0.14;
      const bob = Math.sin(ts * 0.0024) * 3.5;
      if (otterRootRef.current) {
        otterRootRef.current.setAttribute(
          "transform",
          `translate(0, ${bob.toFixed(2)})`
        );
      }
      if (faceGroupRef.current) {
        faceGroupRef.current.setAttribute(
          "transform",
          `translate(${(st.gx * 5).toFixed(2)}, ${(st.gy * 4).toFixed(2)})`
        );
      }

      rafId = requestAnimationFrame(frame);
    };
    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Escape key to skip break
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && (mode === "rest" || mode === "drape")) {
        endBreak(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!screenRef.current) return;
    const r = screenRef.current.getBoundingClientRect();
    animRef.current.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    animRef.current.ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
  };

  const handleNoteKeyDown = () => {
    animRef.current.typingUntil = Date.now() + 3500;
    setIsTyping(true);
  };

  const selectPose = (
    newPose:
      | "awake"
      | "sleepy"
      | "yawn"
      | "wait"
      | "peek"
      | "sleep"
      | "boo"
      | "angy"
  ) => {
    animRef.current.poseOverride = true;
    setPose(newPose);
    if (newPose === "sleepy") showBubble("Peekaboo soon…", 2600);
    if (newPose === "yawn") showBubble("*yaaawn* 🥱", 2400);
    if (newPose === "wait") showBubble("I'll wait till you pause.", 2800);
    if (newPose === "peek") showBubble("4! Peeking with one eye~ 👀", 2400);
    if (newPose === "sleep") showBubble("z z Z 💤", 2600);
    if (newPose === "boo") showBubble("Boo! Hehe ✨", 2000);
    if (newPose === "angy") showBubble("Break time now!! >:( 💢", 2600);
  };

  // Compute eye & paw transforms from current pose
  const getPawTransforms = () => {
    switch (pose) {
      case "sleepy":
        return {
          left: "translate(0,4) rotate(12 -50 12)",
          right: "translate(0,4) rotate(-12 50 12)",
        };
      case "yawn":
        return {
          left: "translate(-8,-28) rotate(36 -50 12)",
          right: "translate(8,-28) rotate(-36 50 12)",
        };
      case "wait":
        return {
          left: "translate(32,12) rotate(-25 -50 12)",
          right: "translate(-32,12) rotate(25 50 12)",
        };
      case "cover":
        return {
          left: "translate(31,-20) rotate(-12 -50 12) scale(1.15)",
          right: "translate(-31,-20) rotate(12 50 12) scale(1.15)",
        };
      case "peek":
        return {
          left: "translate(31,-20) rotate(-12 -50 12) scale(1.15)",
          right: "translate(-12,-6) rotate(28 50 12) scale(1.1)",
        };
      case "sleep":
        return {
          left: "translate(14,8) rotate(0 -50 12)",
          right: "translate(-14,8) rotate(0 50 12)",
        };
      case "boo":
      case "angy":
        return {
          left: "translate(-12,-34) rotate(-30 -50 12)",
          right: "translate(12,-34) rotate(30 50 12)",
        };
      default:
        return {
          left: "translate(0,0) rotate(18 -50 12)",
          right: "translate(0,0) rotate(-18 50 12)",
        };
    }
  };

  const paws = getPawTransforms();
  const isCenteredTop = mode === "drape" || mode === "rest";
  const lidHeight =
    pose === "sleepy"
      ? 10
      : pose === "cover"
      ? 16
      : pose === "peek"
      ? 15
      : pose === "wait"
      ? 2.5
      : 0.6;
  const showEyeArc = pose === "yawn" || pose === "sleep" || pose === "boo";

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Simulated macOS Screen */}
      <div
        ref={screenRef}
        onPointerMove={handlePointerMove}
        className="relative w-full aspect-[16/10] min-h-[480px] sm:min-h-[540px] rounded-2xl overflow-hidden border border-black/[0.12] shadow-[0_26px_70px_-24px_rgba(16,28,34,0.22)] select-none"
        style={{
          background:
            "radial-gradient(900px 500px at 18% 15%, rgba(255, 250, 240, 0.85), transparent 70%), linear-gradient(155deg, #EAE4D7 0%, #D9D5C9 52%, #C6CECA 100%)",
        }}
      >
        {/* macOS Top Menu Bar */}
        <div className="absolute top-0 left-0 right-0 h-8 px-4 flex items-center justify-between bg-white/70 backdrop-blur-md border-b border-black/[0.06] text-xs text-[#152026] z-10">
          <div className="flex items-center gap-3.5">
            <span className="font-bold text-sm">&#63743;</span>
            <span className="font-semibold">Notes</span>
            <span className="hidden sm:inline text-[#4E5B62]">File</span>
            <span className="hidden sm:inline text-[#4E5B62]">Edit</span>
            <span className="hidden sm:inline text-[#4E5B62]">View</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                animRef.current.typingUntil = 0;
                triggerBreak();
              }}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/[0.06] hover:bg-black/[0.1] font-medium font-mono text-[11px] transition cursor-pointer"
              title="Click to trigger a Peekaboo blanket break"
            >
              <span className="w-2 h-2 rounded-full bg-[#2E705E]" />
              <span>
                {mode === "waiting"
                  ? "Waiting for pause…"
                  : mode === "rest" || mode === "drape"
                  ? "Peekaboo active"
                  : `Break in 0:${String(workLeft).padStart(2, "0")}`}
              </span>
            </button>
            <span className="hidden sm:inline text-[11px] text-[#4E5B62]">
              Tue 9:41 AM
            </span>
          </div>
        </div>

        {/* Editable macOS Notes Window */}
        <div className="absolute top-14 left-5 sm:left-12 w-[calc(100%-40px)] sm:w-[min(580px,calc(100%-230px))] h-[min(350px,calc(100%-140px))] bg-[#FCFBF7] rounded-xl border border-black/[0.11] shadow-[0_22px_48px_-18px_rgba(15,24,30,0.18)] flex flex-col overflow-hidden z-[4]">
          <div className="h-9 px-3.5 bg-[#F4F2EC] border-b border-black/[0.06] flex items-center">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ED6A5E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4BF4F]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#61C554]" />
            </div>
            <div className="mx-auto text-[11px] font-medium text-[#6E777C] -translate-x-4 truncate">
              Notes — Lisbon (Click inside &amp; type to test polite deferral)
            </div>
          </div>
          <div className="p-5 sm:p-6 flex-1 overflow-y-auto select-text relative">
            <div className="text-[10px] font-semibold tracking-wider text-[#8C9498] mb-2">
              MAY 14, 9:40 AM
            </div>
            <div
              contentEditable
              suppressContentEditableWarning
              spellCheck={false}
              onKeyDown={handleNoteKeyDown}
              className="outline-none text-[#152026] space-y-2.5"
            >
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Lisbon, the second week of May
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#364147]">
                Morning train to Sintra — leave before nine so the palace
                terrace is still quiet. Bring the small notebook and the 35mm
                lens.
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#3B464C]">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#2E705E] border border-[#2E705E] inline-block shrink-0" />
                  <span>Book Ramiro for Thursday night</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#2E705E] border border-[#2E705E] inline-block shrink-0" />
                  <span>Walk down from Graça through Alfama at dusk</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full border border-[#2E705E] inline-block shrink-0" />
                  <span>
                    Pick up pastéis near Cais do Sodré before the ferry
                  </span>
                </li>
              </ul>
            </div>
            <div
              className={`absolute right-3.5 bottom-3 px-2.5 py-1 rounded-full bg-[#DCEBE4] text-[#235344] text-[11px] font-medium transition-opacity pointer-events-none ${
                isTyping ? "opacity-100" : "opacity-0"
              }`}
            >
              ⌨️ Typing detected · Ottie will wait politely
            </div>
          </div>
        </div>

        {/* Simulated macOS Dock */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2.5 px-3 py-1.5 rounded-2xl bg-white/55 border border-white/75 backdrop-blur-md z-[4]">
          <div className="w-9 h-9 rounded-lg bg-[#3F8EFC] text-white grid place-items-center text-sm font-semibold">
            ☺
          </div>
          <div className="w-9 h-9 rounded-lg bg-[#F5C242] text-white grid place-items-center text-sm font-semibold">
            ✎
          </div>
          <div className="w-9 h-9 rounded-lg bg-[#2B5B54] text-white grid place-items-center text-base">
            🦦
          </div>
          <div className="w-9 h-9 rounded-lg bg-[#565D68] text-white grid place-items-center text-xs font-mono font-bold">
            &gt;_
          </div>
        </div>

        {/* Scalloped Blanket Overlay SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 1000 625"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="blanketGradReact" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#122428" />
              <stop offset="100%" stopColor="#1B3538" />
            </linearGradient>
          </defs>
          <path
            ref={sheetPathRef}
            d="M0,0 L1000,0 L1000,0 L0,0 Z"
            fill="url(#blanketGradReact)"
          />
          <path
            ref={sheetHemRef}
            d=""
            fill="none"
            stroke="#3E6E69"
            strokeWidth="2.5"
          />
        </svg>

        {/* Full-Screen Break Card Overlay */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center pt-24 text-center z-12 transition-opacity duration-300 ${
            mode === "rest"
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E705E]/30 border border-[#8FD1B4]/30 text-xs font-semibold text-[#8FD1B4] mb-3">
            <span>👁️ Peekaboo break · Eye Rest</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#EEF4F1] max-w-lg mb-2 px-4">
            Find the farthest thing you can see.
          </h3>
          <p className="text-xs sm:text-sm text-[#B4C8C3] mb-5">
            Look about 20 feet away while Ottie counts to 6.
          </p>
          <div className="flex gap-2 mb-6">
            {[1, 2, 3, 4, 5, 6].map((dot) => (
              <span
                key={dot}
                className={`w-2 h-2 rounded-full transition-all ${
                  dot <= breakStep
                    ? "bg-[#8FD1B4] scale-115"
                    : "bg-white/20"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => endBreak(true)}
              className="px-4 py-2 rounded-full text-xs font-medium text-[#EAF2EF] bg-white/10 hover:bg-white/15 border border-white/20 transition cursor-pointer"
            >
              Snooze 5 min
            </button>
            <button
              type="button"
              onClick={() => endBreak(true)}
              className="text-xs text-white/70 hover:text-white inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Skip this one</span>
              <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 border border-white/15">
                esc
              </kbd>
            </button>
          </div>
        </div>

        {/* White Otter (Ottie) Companion Stage */}
        <div
          onClick={() => {
            if (mode === "work") {
              setPose("boo");
              showBubble("Hehe! Ready when you are~ 🦦💕", 2200);
              setTimeout(() => setPose("awake"), 1600);
            }
          }}
          title="Click to poke Ottie!"
          className="absolute w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] z-15 cursor-pointer transition-all duration-500 ease-out"
          style={{
            right: isCenteredTop ? "calc(50% - 95px)" : "20px",
            bottom: isCenteredTop ? "calc(100% - 210px)" : "8px",
          }}
        >
          {/* Floating Speech Bubble */}
          <div
            className={`absolute whitespace-nowrap bg-white text-[#152026] text-xs font-medium px-3.5 py-2 rounded-2xl shadow-lg border border-black/[0.06] transition-all duration-200 pointer-events-none ${
              isCenteredTop
                ? "left-[130px] top-4"
                : "right-[115px] top-1"
            } ${
              bubbleVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-1 scale-95"
            }`}
          >
            {bubbleText}
          </div>

          <svg
            viewBox="-100 -100 200 200"
            className="w-full h-full overflow-visible"
          >
            <defs>
              <radialGradient id="otterBodyReact" cx="38%" cy="28%" r="70%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="68%" stopColor="#F6F5F0" />
                <stop offset="100%" stopColor="#E4E7E4" />
              </radialGradient>
            </defs>
            <ellipse
              cx="0"
              cy="66"
              rx="44"
              ry="8"
              fill="rgba(16,28,34,0.16)"
            />
            <g ref={otterRootRef}>
              {/* Rounded Otter Ears */}
              <g>
                <circle
                  cx="-38"
                  cy="-42"
                  r="14"
                  fill="url(#otterBodyReact)"
                  stroke={accessory === "robo" ? "#38BDF8" : "#CFD6D4"}
                  strokeWidth="1.5"
                />
                <circle cx="-38" cy="-42" r="7.5" fill="#F4C7C3" />
                <circle
                  cx="38"
                  cy="-42"
                  r="14"
                  fill="url(#otterBodyReact)"
                  stroke={accessory === "robo" ? "#38BDF8" : "#CFD6D4"}
                  strokeWidth="1.5"
                />
                <circle cx="38" cy="-42" r="7.5" fill="#F4C7C3" />
              </g>

              {/* Otter Body with Scalloped Hem */}
              <path
                d="M -48 -14 C -48 -52, 48 -52, 48 -14 C 52 16, 55 42, 55 56 C 48 64, 38 64, 31 54 C 24 46, 16 46, 10 55 C 4 63, -4 63, -10 55 C -16 46, -24 46, -31 54 C -38 64, -48 64, -55 56 C -55 42, -52 16, -48 -14 Z"
                fill="url(#otterBodyReact)"
                stroke={accessory === "robo" ? "#38BDF8" : "#CFD6D4"}
                strokeWidth="1.6"
              />

              {/* Warm Cream Belly Patch */}
              <ellipse
                cx="0"
                cy="24"
                rx="28"
                ry="24"
                fill="#FAF6EE"
                opacity="0.85"
              />

              {/* Robo Chest LED Heart Badge when in Robo mode */}
              {accessory === "robo" && (
                <g transform="translate(0, 26)">
                  <rect
                    x="-16"
                    y="-8"
                    width="32"
                    height="15"
                    rx="5"
                    fill="#0F172A"
                    stroke="#38BDF8"
                    strokeWidth="1.4"
                  />
                  <circle cx="-7" cy="-0.5" r="3" fill="#F43F5E" />
                  <rect
                    x="1"
                    y="-3.5"
                    width="3"
                    height="6"
                    rx="1"
                    fill="#34D399"
                  />
                  <rect
                    x="6"
                    y="-3.5"
                    width="3"
                    height="6"
                    rx="1"
                    fill="#34D399"
                  />
                </g>
              )}

              {/* Pocket Accessories */}
              {accessory === "sprout" && (
                <g>
                  <path
                    d="M0,-47 Q0,-60 4,-63"
                    fill="none"
                    stroke="#4D8B55"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx="-6"
                    cy="-60"
                    rx="7"
                    ry="4"
                    transform="rotate(-24 -6 -60)"
                    fill="#74BF6B"
                  />
                  <ellipse
                    cx="7"
                    cy="-62"
                    rx="7"
                    ry="4"
                    transform="rotate(20 7 -62)"
                    fill="#74BF6B"
                  />
                </g>
              )}
              {accessory === "star" && (
                <g transform="translate(25,-42) rotate(15)">
                  <polygon
                    points="0,-9 2.6,-3 9,-2.2 4,2 5.5,8.5 0,5 -5.5,8.5 -4,2 -9,-2.2 -2.6,-3"
                    fill="#F4C04E"
                    stroke="#C99226"
                    strokeWidth="1.2"
                  />
                </g>
              )}
              {accessory === "acorn" && (
                <g transform="translate(8,-48) rotate(12)">
                  <path
                    d="M-15,2 C-15,-12 15,-12 15,2 Z"
                    fill="#7F5230"
                  />
                  <line
                    x1="0"
                    y1="-9"
                    x2="2"
                    y2="-15"
                    stroke="#59371E"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </g>
              )}
              {accessory === "beanie" && (
                <g transform="translate(0,-42)">
                  <path
                    d="M-40,6 C-38,-22 38,-22 40,6 Z"
                    fill="#2B5B54"
                  />
                  <rect
                    x="-42"
                    y="2"
                    width="84"
                    height="9"
                    rx="4.5"
                    fill="#1F443F"
                  />
                  <circle cx="0" cy="-17" r="6" fill="#F2BA49" />
                </g>
              )}
              {accessory === "robo" && (
                <g transform="translate(0,-48)">
                  <line
                    x1="0"
                    y1="2"
                    x2="0"
                    y2="-14"
                    stroke="#38BDF8"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="0"
                    cy="-17"
                    r="5.5"
                    fill="#F472B6"
                    stroke="#38BDF8"
                    strokeWidth="1.5"
                  />
                </g>
              )}

              {/* Face Group */}
              <g ref={faceGroupRef}>
                {/* Whiskers */}
                <g
                  stroke="#BFC8C6"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                >
                  <line x1="-26" y1="0" x2="-38" y2="-3" />
                  <line x1="-26" y1="5" x2="-39" y2="6" />
                  <line x1="26" y1="0" x2="38" y2="-3" />
                  <line x1="26" y1="5" x2="39" y2="6" />
                </g>

                {/* Rosy Cheeks */}
                <ellipse
                  cx="-25"
                  cy="4"
                  rx="8.5"
                  ry="4.8"
                  fill="#F4B4AE"
                  opacity="0.6"
                />
                <ellipse
                  cx="25"
                  cy="4"
                  rx="8.5"
                  ry="4.8"
                  fill="#F4B4AE"
                  opacity="0.6"
                />

                {/* Optional Robo Cyan Goggle Frame */}
                {accessory === "robo" && (
                  <rect
                    x="-32"
                    y="-21"
                    width="64"
                    height="24"
                    rx="11"
                    fill="rgba(14,165,233,0.14)"
                    stroke="#38BDF8"
                    strokeWidth="2"
                  />
                )}

                {/* Left Eye */}
                <g transform="translate(-17,-8)">
                  {!showEyeArc ? (
                    <>
                      <ellipse
                        cx="0"
                        cy="0"
                        rx="7.5"
                        ry="9"
                        fill="#152329"
                      />
                      <circle
                        cx="-2.4"
                        cy="-3.2"
                        r="2.6"
                        fill="#FFFFFF"
                      />
                      <circle
                        cx="2.2"
                        cy="2.6"
                        r="1.2"
                        fill="#FFFFFF"
                        opacity="0.85"
                      />
                      <rect
                        x="-9"
                        y="-10"
                        width="18"
                        height={lidHeight}
                        fill="#F6F5F0"
                      />
                    </>
                  ) : (
                    <path
                      d="M-7,0 Q0,-7 7,0"
                      fill="none"
                      stroke="#152329"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                    />
                  )}
                </g>

                {/* Right Eye */}
                <g transform="translate(17,-8)">
                  {!showEyeArc ? (
                    <>
                      <ellipse
                        cx="0"
                        cy="0"
                        rx="7.5"
                        ry="9"
                        fill="#152329"
                      />
                      <circle
                        cx="-2.4"
                        cy="-3.2"
                        r="2.6"
                        fill="#FFFFFF"
                      />
                      <circle
                        cx="2.2"
                        cy="2.6"
                        r="1.2"
                        fill="#FFFFFF"
                        opacity="0.85"
                      />
                      <rect
                        x="-9"
                        y="-10"
                        width="18"
                        height={pose === "peek" ? 0 : lidHeight}
                        fill="#F6F5F0"
                      />
                    </>
                  ) : (
                    <path
                      d="M-7,0 Q0,-7 7,0"
                      fill="none"
                      stroke="#152329"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                    />
                  )}
                </g>

                {/* Cute Angy Eyebrows */}
                {pose === "angy" && (
                  <g
                    stroke="#152329"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  >
                    <line x1="-24" y1="-19" x2="-10" y2="-14" />
                    <line x1="24" y1="-19" x2="10" y2="-14" />
                  </g>
                )}

                {/* Petite Otter Nose */}
                <path
                  d="M-4,-2 C-4,-4 4,-4 4,-2 C4,1 1.5,3 0,3 C-1.5,3 -4,1 -4,-2 Z"
                  fill="#1A282E"
                />

                {/* Mouth */}
                {pose === "yawn" ? (
                  <ellipse cx="0" cy="8" rx="6.5" ry="8" fill="#2A181C" />
                ) : pose === "angy" ? (
                  <path
                    d="M-6,9 Q0,4 6,9"
                    fill="none"
                    stroke="#152329"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M-7,6 Q0,11 7,6"
                    fill="none"
                    stroke="#152329"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                  />
                )}
              </g>

              {/* Articulated Otter Paws */}
              <ellipse
                cx="-50"
                cy="12"
                rx="11"
                ry="14"
                transform={paws.left}
                fill="#FFFFFF"
                stroke={accessory === "robo" ? "#38BDF8" : "#CFD6D4"}
                strokeWidth="1.5"
              />
              <ellipse
                cx="50"
                cy="12"
                rx="11"
                ry="14"
                transform={paws.right}
                fill="#FFFFFF"
                stroke={accessory === "robo" ? "#38BDF8" : "#CFD6D4"}
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Interactive Live Trial Controls Bar below simulated screen */}
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border border-black/[0.08] shadow-2xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => {
              animRef.current.typingUntil = 0;
              triggerBreak();
            }}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#2E705E] text-white hover:bg-[#24594B] transition cursor-pointer shadow-2xs"
          >
            👁️ Try a Peekaboo break now
          </button>
          {(
            [
              { id: "sleepy", label: "Getting sleepy" },
              { id: "yawn", label: "Big yawn" },
              { id: "wait", label: "Polite waiting" },
              { id: "peek", label: "One-eye peek" },
              { id: "sleep", label: "Sleeping zzz" },
              { id: "angy", label: "Cute Angy >:(" },
            ] as const
          ).map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => selectPose(btn.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition cursor-pointer ${
                pose === btn.id
                  ? "bg-[#E6F0EC] border-[#2E705E]/40 text-[#1F4E3F]"
                  : "bg-white border-black/[0.1] text-[#17242B] hover:border-[#2E705E]"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-medium text-[#5E6B73] mr-1">
            Ottie&apos;s look:
          </span>
          {(
            [
              { id: "sprout", label: "Sprout", color: "#57A175" },
              { id: "robo", label: "Robo-Ottie", color: "#298AC7" },
              { id: "star", label: "Star clip", color: "#D9A63D" },
              { id: "acorn", label: "Acorn cap", color: "#9E7247" },
              { id: "beanie", label: "Beanie", color: "#4E828E" },
            ] as const
          ).map((acc) => (
            <button
              key={acc.id}
              type="button"
              onClick={() => {
                setAccessory(acc.id);
                if (acc.id === "robo") {
                  showBubble(
                    "BEEP BOOP! 🤖 Cutest Robo-Ottie online! ✨",
                    2600
                  );
                } else {
                  showBubble(`Equipped ${acc.label}! 🐾`, 2000);
                }
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition cursor-pointer ${
                accessory === acc.id
                  ? "bg-[#E6F0EC] border-[#2E705E]/40 text-[#1F4E3F]"
                  : "bg-white border-black/[0.1] text-[#17242B] hover:border-[#2E705E]"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: acc.color }}
              />
              <span>{acc.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OttieMiniDressingStudio() {
  const [selectedOutfitId, setSelectedOutfitId] = useState<string>("robo");
  const [selectedActionId, setSelectedActionId] = useState<string>("robo");
  const [speech, setSpeech] = useState<string>(
    "BEEP BOOP! 🤖 Cutest Robo-Ottie online & dancing! 💠✨"
  );
  const [bounceKey, setBounceKey] = useState<number>(0);

  const activeOutfit =
    OTTIE_OUTFIT_PRESETS.find((o) => o.id === selectedOutfitId) ||
    OTTIE_OUTFIT_PRESETS[0];
  const activeAction =
    OTTIE_STUDIO_ACTIONS.find((a) => a.id === selectedActionId) ||
    OTTIE_STUDIO_ACTIONS[0];

  const handleSelectOutfit = (id: string) => {
    setSelectedOutfitId(id);
    const found = OTTIE_OUTFIT_PRESETS.find((o) => o.id === id);
    if (found) setSpeech(found.speech);
    setBounceKey((k) => k + 1);
  };

  const handleSelectAction = (id: string) => {
    setSelectedActionId(id);
    const found = OTTIE_STUDIO_ACTIONS.find((a) => a.id === id);
    if (found) setSpeech(found.speech);
    setBounceKey((k) => k + 1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Left Interactive Dress-Up & Action Studio Card */}
      <div className="lg:col-span-5 rounded-3xl bg-white border border-black/[0.08] p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.05)] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#2E705E] bg-[#E6F0EC] px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#2E705E] animate-pulse" />
              <span>LIVE DRESSING PREVIEW</span>
            </span>
            <button
              type="button"
              onClick={() => {
                const randOutfit =
                  OTTIE_OUTFIT_PRESETS[
                    Math.floor(Math.random() * OTTIE_OUTFIT_PRESETS.length)
                  ];
                const randAction =
                  OTTIE_STUDIO_ACTIONS[
                    Math.floor(Math.random() * OTTIE_STUDIO_ACTIONS.length)
                  ];
                setSelectedOutfitId(randOutfit.id);
                setSelectedActionId(randAction.id);
                setSpeech(randOutfit.speech);
                setBounceKey((k) => k + 1);
              }}
              className="text-xs font-medium px-3 py-1 rounded-full bg-[#2E705E] text-white hover:bg-[#235849] transition cursor-pointer"
            >
              ✨ Surprise Me
            </button>
          </div>

          {/* Interactive SVG Character Stage */}
          <div
            key={bounceKey}
            className="relative rounded-2xl border border-black/[0.07] bg-gradient-to-b from-[#F4F8F7] to-[#E9F1EF] p-5 flex flex-col items-center justify-center min-h-[250px] overflow-hidden"
          >
            {/* Speech Bubble */}
            <div className="w-full max-w-[320px] bg-white rounded-2xl px-4 py-2.5 text-center text-xs font-semibold text-[#17242B] shadow-sm border border-black/[0.06] mb-2">
              {speech}
            </div>

            {/* Interactive SVG Otter with Outfit + Action Props */}
            <svg
              viewBox="-110 -95 220 190"
              className="w-44 h-44 transition-transform duration-300 hover:scale-105"
            >
              <ellipse
                cx="0"
                cy="66"
                rx="46"
                ry="8"
                fill="rgba(16,28,34,0.14)"
              />

              {/* Stairs Prop when Stairs Action is selected */}
              {selectedActionId === "stairs" && (
                <g stroke="#D97706" strokeWidth="2" fill="#FEF3C7">
                  <rect x="-78" y="42" width="28" height="8" rx="3" />
                  <rect x="-64" y="28" width="28" height="8" rx="3" />
                  <rect x="-50" y="14" width="28" height="8" rx="3" />
                </g>
              )}

              {/* Ears */}
              <circle
                cx="-38"
                cy="-42"
                r="14"
                fill="#FFFFFF"
                stroke={selectedOutfitId === "robo" ? "#38BDF8" : "#CFD6D4"}
                strokeWidth="1.6"
              />
              <circle cx="-38" cy="-42" r="7.5" fill="#F4C7C3" />
              <circle
                cx="38"
                cy="-42"
                r="14"
                fill="#FFFFFF"
                stroke={selectedOutfitId === "robo" ? "#38BDF8" : "#CFD6D4"}
                strokeWidth="1.6"
              />
              <circle cx="38" cy="-42" r="7.5" fill="#F4C7C3" />

              {/* Otter Body */}
              <path
                d="M -48 -14 C -48 -52, 48 -52, 48 -14 C 52 16, 55 42, 55 56 C 48 64, 38 64, 31 54 C 24 46, 16 46, 10 55 C 4 63, -4 63, -10 55 C -16 46, -24 46, -31 54 C -38 64, -48 64, -55 56 C -55 42, -52 16, -48 -14 Z"
                fill="#FFFFFF"
                stroke={selectedOutfitId === "robo" ? "#38BDF8" : "#CFD6D4"}
                strokeWidth="1.8"
              />

              {/* Outfit Body Overlays */}
              {selectedOutfitId === "robo" && (
                <g>
                  <path
                    d="M-44,18 L44,18 L48,44 L-48,44 Z"
                    fill="#E0F2FE"
                    stroke="#38BDF8"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="-17"
                    y="23"
                    width="34"
                    height="15"
                    rx="5"
                    fill="#0F172A"
                    stroke="#38BDF8"
                    strokeWidth="1.4"
                  />
                  <circle cx="-7" cy="30.5" r="3.2" fill="#F43F5E" />
                  <rect
                    x="1"
                    y="27"
                    width="3.2"
                    height="7"
                    rx="1"
                    fill="#34D399"
                  />
                  <rect
                    x="6"
                    y="27"
                    width="3.2"
                    height="7"
                    rx="1"
                    fill="#34D399"
                  />
                </g>
              )}
              {selectedOutfitId === "cricket" && (
                <g>
                  <path
                    d="M-42,16 L42,16 L46,46 L-46,46 Z"
                    fill="#1D4ED8"
                  />
                  <text
                    x="0"
                    y="35"
                    textAnchor="middle"
                    fill="#FACC15"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    OTTIE 07
                  </text>
                </g>
              )}
              {selectedOutfitId === "chef" && (
                <g>
                  <path
                    d="M-40,16 L40,16 L44,46 L-44,46 Z"
                    fill="#FFFBEB"
                    stroke="#D97706"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M-14,16 L0,26 L14,16"
                    fill="#EF4444"
                  />
                  <circle cx="-8" cy="30" r="2.2" fill="#78350F" />
                  <circle cx="8" cy="30" r="2.2" fill="#78350F" />
                  <circle cx="-8" cy="39" r="2.2" fill="#78350F" />
                  <circle cx="8" cy="39" r="2.2" fill="#78350F" />
                </g>
              )}
              {selectedOutfitId === "wizard" && (
                <g>
                  <path
                    d="M-44,15 L44,15 L50,48 L-50,48 Z"
                    fill="#4C1D95"
                    stroke="#FBBF24"
                    strokeWidth="1.5"
                  />
                  <text x="-16" y="36" fontSize="12">
                    ✨
                  </text>
                  <text x="8" y="38" fontSize="11">
                    ⭐
                  </text>
                </g>
              )}
              {selectedOutfitId === "dj" && (
                <g>
                  <path
                    d="M-43,16 L43,16 L47,46 L-47,46 Z"
                    fill="#BE185D"
                  />
                  <rect
                    x="-22"
                    y="27"
                    width="44"
                    height="12"
                    rx="4"
                    fill="#1F2937"
                  />
                  <circle cx="-10" cy="33" r="4.5" fill="#38BDF8" />
                  <circle cx="10" cy="33" r="4.5" fill="#F472B6" />
                </g>
              )}

              {/* Outfit Headwear */}
              {selectedOutfitId === "sprout" && (
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
              {selectedOutfitId === "robo" && (
                <g>
                  <line
                    x1="0"
                    y1="-46"
                    x2="0"
                    y2="-64"
                    stroke="#38BDF8"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="0"
                    cy="-67"
                    r="6"
                    fill="#F472B6"
                    stroke="#38BDF8"
                    strokeWidth="1.6"
                  />
                  <rect
                    x="-33"
                    y="-22"
                    width="66"
                    height="24"
                    rx="11"
                    fill="#0F172A"
                    stroke="#38BDF8"
                    strokeWidth="2.2"
                  />
                </g>
              )}
              {selectedOutfitId === "cricket" && (
                <g transform="translate(0,-44)">
                  <path
                    d="M-36,4 C-34,-20 34,-20 36,4 Z"
                    fill="#1E3A8A"
                  />
                  <path
                    d="M-36,2 Q0,8 46,4 L42,9 Q0,12 -36,6 Z"
                    fill="#FACC15"
                  />
                </g>
              )}
              {selectedOutfitId === "chef" && (
                <g transform="translate(0,-48)">
                  <circle cx="-14" cy="-10" r="12" fill="#FFFFFF" stroke="#D1D5DB" />
                  <circle cx="0" cy="-14" r="14" fill="#FFFFFF" stroke="#D1D5DB" />
                  <circle cx="14" cy="-10" r="12" fill="#FFFFFF" stroke="#D1D5DB" />
                  <rect
                    x="-26"
                    y="-2"
                    width="52"
                    height="10"
                    rx="3"
                    fill="#FFFFFF"
                    stroke="#D1D5DB"
                  />
                </g>
              )}
              {selectedOutfitId === "wizard" && (
                <g transform="translate(0,-45)">
                  <polygon
                    points="0,-38 -28,4 28,4"
                    fill="#4C1D95"
                    stroke="#FBBF24"
                    strokeWidth="1.5"
                  />
                  <ellipse
                    cx="0"
                    cy="4"
                    rx="38"
                    ry="6"
                    fill="#5B21B6"
                    stroke="#FBBF24"
                    strokeWidth="1.4"
                  />
                </g>
              )}
              {selectedOutfitId === "dj" && (
                <g>
                  <path
                    d="M-44,-10 A44,44 0 0,1 44,-10"
                    fill="none"
                    stroke="#111827"
                    strokeWidth="5"
                  />
                  <rect
                    x="-52"
                    y="-20"
                    width="12"
                    height="22"
                    rx="6"
                    fill="#EC4899"
                  />
                  <rect
                    x="40"
                    y="-20"
                    width="12"
                    height="22"
                    rx="6"
                    fill="#EC4899"
                  />
                </g>
              )}

              {/* Eyes & Nose */}
              <g>
                <ellipse
                  cx="-25"
                  cy="4"
                  rx="8"
                  ry="4.5"
                  fill="#F4B4AE"
                  opacity="0.65"
                />
                <ellipse
                  cx="25"
                  cy="4"
                  rx="8"
                  ry="4.5"
                  fill="#F4B4AE"
                  opacity="0.65"
                />
                <g transform="translate(-17,-8)">
                  <ellipse
                    cx="0"
                    cy="0"
                    rx="7"
                    ry="8.5"
                    fill={selectedOutfitId === "robo" ? "#38BDF8" : "#152329"}
                  />
                  <circle cx="-2.2" cy="-3" r="2.5" fill="#FFFFFF" />
                </g>
                <g transform="translate(17,-8)">
                  <ellipse
                    cx="0"
                    cy="0"
                    rx="7"
                    ry="8.5"
                    fill={selectedOutfitId === "robo" ? "#38BDF8" : "#152329"}
                  />
                  <circle cx="-2.2" cy="-3" r="2.5" fill="#FFFFFF" />
                </g>
                {selectedActionId === "angy" && (
                  <g stroke="#EF4444" strokeWidth="2.6" strokeLinecap="round">
                    <line x1="-24" y1="-19" x2="-10" y2="-14" />
                    <line x1="24" y1="-19" x2="10" y2="-14" />
                  </g>
                )}
                <path
                  d="M-3.5,-2 C-3.5,-4 3.5,-4 3.5,-2 C3.5,1 1.5,2.8 0,2.8 C-1.5,2.8 -3.5,1 -3.5,-2 Z"
                  fill={selectedOutfitId === "robo" ? "#FFFFFF" : "#1A282E"}
                />
                <path
                  d={
                    selectedActionId === "angy"
                      ? "M-6,9 Q0,4 6,9"
                      : "M-7,6 Q0,11 7,6"
                  }
                  fill="none"
                  stroke="#152329"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </g>

              {/* Paws + Action Props */}
              <ellipse
                cx="-50"
                cy="10"
                rx="11"
                ry="14"
                transform="rotate(22 -50 10)"
                fill="#FFFFFF"
                stroke={selectedOutfitId === "robo" ? "#38BDF8" : "#CFD6D4"}
                strokeWidth="1.6"
              />
              <ellipse
                cx="50"
                cy="10"
                rx="11"
                ry="14"
                transform="rotate(-22 50 10)"
                fill="#FFFFFF"
                stroke={selectedOutfitId === "robo" ? "#38BDF8" : "#CFD6D4"}
                strokeWidth="1.6"
              />

              {/* Action Hand Props */}
              {selectedActionId === "water" && (
                <g transform="translate(54, -2)">
                  <rect
                    x="-9"
                    y="-12"
                    width="18"
                    height="24"
                    rx="3"
                    fill="#38BDF8"
                    opacity="0.85"
                    stroke="#0284C7"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="2"
                    y1="-12"
                    x2="7"
                    y2="-22"
                    stroke="#F43F5E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </g>
              )}
              {selectedActionId === "parents" && (
                <g transform="translate(54, -4) rotate(-12)">
                  <rect
                    x="-8"
                    y="-13"
                    width="16"
                    height="26"
                    rx="3.5"
                    fill="#F43F5E"
                    stroke="#881337"
                    strokeWidth="1.4"
                  />
                  <text x="0" y="3" textAnchor="middle" fontSize="10">
                    ❤️
                  </text>
                </g>
              )}
              {selectedActionId === "robo" && (
                <g transform="translate(58, -14)">
                  <text x="0" y="0" textAnchor="middle" fontSize="18">
                    🛸
                  </text>
                </g>
              )}
            </svg>

            {/* Equipped Metadata Readout */}
            <div className="w-full mt-2 pt-3 border-t border-black/[0.06] grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-white/80 rounded-lg px-2.5 py-1.5 border border-black/[0.05]">
                <span className="text-[#5E6B73] block text-[10px]">Preset</span>
                <span className="font-semibold text-[#17242B]">
                  {activeOutfit.label}
                </span>
              </div>
              <div className="bg-white/80 rounded-lg px-2.5 py-1.5 border border-black/[0.05]">
                <span className="text-[#5E6B73] block text-[10px]">
                  Live Action
                </span>
                <span className="font-mono font-semibold text-[#2E705E]">
                  {activeAction.animationTag}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Outfit & Action Selectors */}
        <div className="mt-5 space-y-4">
          <div>
            <div className="text-xs font-semibold text-[#17242B] mb-2 flex items-center justify-between">
              <span>1. Toggle Outfit Preset (6 of 54 looks):</span>
              <span className="text-[11px] font-normal text-[#5E6B73]">
                20 tops · 13 bottoms · 25 hats
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {OTTIE_OUTFIT_PRESETS.map((outfit) => (
                <button
                  key={outfit.id}
                  type="button"
                  onClick={() => handleSelectOutfit(outfit.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition cursor-pointer ${
                    selectedOutfitId === outfit.id
                      ? "bg-[#17242B] text-white border-[#17242B] shadow-2xs"
                      : "bg-[#F6F5F2] text-[#17242B] border-black/[0.08] hover:bg-[#E6F0EC]"
                  }`}
                >
                  {outfit.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-[#17242B] mb-2 flex items-center justify-between">
              <span>2. Trigger Companion Action (5 of 93 antics):</span>
              <span className="text-[11px] font-normal text-[#5E6B73]">
                23-channel spring rig
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {OTTIE_STUDIO_ACTIONS.map((act) => (
                <button
                  key={act.id}
                  type="button"
                  onClick={() => handleSelectAction(act.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition cursor-pointer ${
                    selectedActionId === act.id
                      ? "bg-[#2E705E] text-white border-[#2E705E] shadow-2xs"
                      : "bg-[#F6F5F2] text-[#17242B] border-black/[0.08] hover:bg-[#E6F0EC]"
                  }`}
                >
                  {act.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Real macOS Dressing Room Screenshot (11-dressing-room-54-presets-robo.png) */}
      <div className="lg:col-span-7 rounded-3xl bg-white border border-black/[0.08] p-4 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] flex flex-col justify-between">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#17242B]">
              Side-by-Side macOS Dressing Room Studio (54 Presets &amp; Cutest
              Robo)
            </h3>
            <p className="text-xs text-[#5E6B73]">
              Mix and match 20 tops, 13 bottoms, 11 gloves, and 25 hats with a
              live preview on the left.
            </p>
          </div>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#E5F2FA] text-[#298AC7]">
            🤖 Cutest Robo Mode
          </span>
        </div>

        <div className="rounded-2xl overflow-hidden border border-black/[0.08] bg-[#F6F5F2]">
          <Image
            src="/images/ottie/11-dressing-room-54-presets-robo.png"
            alt="Ottie macOS Dressing Room Split Studio showing 54 wardrobe presets, Cutest Robo-Ottie collection, 20 tops, 13 bottoms, 11 gloves, and 25 hats"
            width={2120}
            height={1560}
            className="w-full h-auto block"
          />
        </div>
      </div>
    </div>
  );
}
