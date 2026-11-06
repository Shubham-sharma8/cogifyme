"use client";
import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import {
  Lightbulb,
  Bug,
  Building2,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TurnstileWidget } from "@/components/security/turnstile-widget";

type SuggestionCategory = "idea" | "bug" | "enterprise" | "general";

const categories: {
  id: SuggestionCategory;
  label: string;
  icon: React.ReactNode;
  hint: string;
}[] = [
  {
    id: "idea",
    label: "App / Feature Idea",
    icon: <Lightbulb className="w-4 h-4" />,
    hint: "Suggest a feature for any Cogify app or a brand new everyday app we should build.",
  },
  {
    id: "bug",
    label: "Bug Report",
    icon: <Bug className="w-4 h-4" />,
    hint: "Report an issue, visual glitch, or unexpected behavior in any Cogify app.",
  },
  {
    id: "enterprise",
    label: "Custom Build Inquiry",
    icon: <Building2 className="w-4 h-4" />,
    hint: "Commission a custom native macOS, iOS, or client-side web studio build.",
  },
  {
    id: "general",
    label: "General Feedback",
    icon: <MessageSquare className="w-4 h-4" />,
    hint: "Share your thoughts, workflow tips, or feedback with our engineering team.",
  },
];

export const SuggestionForm = () => {
  const [category, setCategory] = useState<SuggestionCategory>("idea");
  const [targetApp, setTargetApp] = useState("EmDoc (macOS Workstation)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    deviceInfo: "",
    title: "",
    details: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [honeypotWebsite, setHoneypotWebsite] = useState("");
  const formStartTimeRef = useRef<number>(0);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [referenceCode, setReferenceCode] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    formStartTimeRef.current = Date.now();
  }, []);

  const activeCategory = categories.find((c) => c.id === category) || categories[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.details.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in both a title and description for your suggestion.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const categoryMap: Record<SuggestionCategory, string> = {
        idea: "SUGGESTION",
        bug: "BUG_REPORT",
        enterprise: "ENTERPRISE",
        general: "CONTACT",
      };

      const res = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: categoryMap[category],
          targetApp,
          title: formData.title,
          description: formData.details,
          senderName: formData.name.trim() || "Anonymous User",
          senderEmail: formData.email.trim() || "anonymous@cogify.me",
          deviceInfo: formData.deviceInfo,
          turnstileToken,
          _hp_company: honeypot,
          _hp_website: honeypotWebsite,
          formStartTime: formStartTimeRef.current,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setReferenceCode(data.referenceCode || "");
      setStatus("success");

      try {
        confetti({
          particleCount: 60,
          spread: 65,
          origin: { y: 0.6 },
        });
      } catch {
        // graceful fallback if canvas not available
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to submit request. Please try again."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      deviceInfo: "",
      title: "",
      details: "",
    });
    setReferenceCode("");
    setStatus("idle");
  };

  return (
    <div className="w-full rounded-[24px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.09] p-6 sm:p-9 shadow-sm transition-colors duration-200">
      {/* Category Pills Switcher */}
      <div className="mb-8">
        <span
          id="suggestion-category-label"
          className="block text-[11px] font-semibold text-black/45 dark:text-white/45 uppercase tracking-[0.14em] mb-3"
        >
          Select Category
        </span>
        <div
          role="group"
          aria-labelledby="suggestion-category-label"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5"
        >
          {categories.map((item) => {
            const isSelected = item.id === category;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setCategory(item.id)}
                className={cn(
                  "p-3.5 rounded-[16px] border text-left transition-all duration-150 flex flex-col justify-between cursor-pointer",
                  isSelected
                    ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-xs"
                    : "bg-[#f5f5f5] dark:bg-white/[0.03] border-black/[0.07] dark:border-white/[0.08] text-black/75 dark:text-white/75 hover:border-black/20 dark:hover:border-white/20"
                )}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  {item.icon}
                  <span className="text-[12px] font-semibold leading-tight">{item.label}</span>
                </div>
                <div
                  className={cn(
                    "text-[11px] line-clamp-2 leading-snug",
                    isSelected
                      ? "text-white/75 dark:text-black/70"
                      : "text-black/50 dark:text-white/50"
                  )}
                >
                  {item.hint}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {status === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="py-10 text-center space-y-4"
        >
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
          </div>
          <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-black dark:text-white">
            Thank you for helping us craft better software.
          </h3>
          {referenceCode && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f5] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-black/80 dark:text-white/80 font-mono text-[12px] tabular-nums">
              <span>Reference:</span>
              <span className="font-semibold">{referenceCode}</span>
            </div>
          )}
          <p className="text-[14px] text-black/60 dark:text-white/60 max-w-md mx-auto leading-relaxed">
            Your {activeCategory.label.toLowerCase()} has been delivered directly to our engineering team.
          </p>

          <div className="pt-3">
            <button
              type="button"
              onClick={handleReset}
              className="helumi-pill px-6 py-2.5 text-[13px] font-medium cursor-pointer"
            >
              Submit Another Suggestion
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="suggestion-target-app"
                className="block text-[12px] font-medium text-black/70 dark:text-white/70 mb-1.5"
              >
                Related App or Subject
              </label>
              <select
                id="suggestion-target-app"
                value={targetApp}
                onChange={(e) => setTargetApp(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f5f5] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] text-black dark:text-white text-[13px] focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
              >
                <option>EmDoc (macOS Workstation)</option>
                <option>LumenView (macOS Display Control)</option>
                <option>Metricove (macOS Menu Bar Telemetry)</option>
                <option>NetGuard (macOS Outbound Firewall)</option>
                <option>Klipora (macOS Clipboard History)</option>
                <option>Show free space (macOS Disk Analyzer)</option>
                <option>Marriage Biodata Maker Studio (biodata.cogify.me)</option>
                <option>SSB Stage-2 Test Practice Studio (ssb.cogify.me)</option>
                <option>Ad Blocker - For Safari (iOS / macOS)</option>
                <option>ReaderEasy (Safari Extension)</option>
                <option>WebClear (Safari Extension)</option>
                <option>WebLenses (Safari Extension)</option>
                <option>Element Hider (Safari Extension)</option>
                <option>Colour Invert (Safari Extension)</option>
                <option>New Everyday App Idea</option>
                <option>Cogify Website / Documentation</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="suggestion-device-info"
                className="block text-[12px] font-medium text-black/70 dark:text-white/70 mb-1.5"
              >
                Hardware / OS (Optional)
              </label>
              <input
                id="suggestion-device-info"
                type="text"
                value={formData.deviceInfo}
                onChange={(e) => setFormData({ ...formData, deviceInfo: e.target.value })}
                placeholder="e.g. macOS Sequoia 15.1, M3 Mac / iPhone 16"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f5f5] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 text-[13px] focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="suggestion-title"
              className="block text-[12px] font-medium text-black/70 dark:text-white/70 mb-1.5"
            >
              {category === "bug" ? "Issue Summary *" : "Summary Title *"}
            </label>
            <input
              id="suggestion-title"
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder={
                category === "bug"
                  ? "e.g. Compression preset calculation on large PDFs"
                  : "e.g. Add batch folder OCR mode in EmDoc"
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f5f5] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 text-[13px] focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="suggestion-details"
              className="block text-[12px] font-medium text-black/70 dark:text-white/70 mb-1.5"
            >
              Detailed Description *
            </label>
            <textarea
              id="suggestion-details"
              rows={4}
              required
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="Share context, steps to reproduce, or how this feature helps your workflow…"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f5f5] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 text-[13px] focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <label
                htmlFor="suggestion-name"
                className="block text-[12px] font-medium text-black/70 dark:text-white/70 mb-1.5"
              >
                Your Name (Optional)
              </label>
              <input
                id="suggestion-name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Anonymous"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f5f5] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 text-[13px] focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="suggestion-email"
                className="block text-[12px] font-medium text-black/70 dark:text-white/70 mb-1.5"
              >
                Your Email (Optional)
              </label>
              <input
                id="suggestion-email"
                type="email"
                autoComplete="email"
                spellCheck={false}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@domain.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f5f5] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.1] text-black dark:text-white placeholder:text-black/35 dark:placeholder:text-white/35 text-[13px] focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-colors"
              />
            </div>
          </div>

          {errorMessage && (
            <div
              role="alert"
              aria-live="polite"
              className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-[12px]"
            >
              <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Honeypot fields */}
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

          <div className="pt-2 flex items-center justify-between gap-4">
            <span className="text-[12px] text-black/45 dark:text-white/45">
              Direct to Cogify engineering
            </span>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="helumi-pill px-6 py-2.5 text-[13px] font-medium inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {status === "submitting" ? (
                <span>Submitting…</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Submit</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
