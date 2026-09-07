"use client";
import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Lightbulb,
  Bug,
  Building2,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Smartphone,
  Laptop,
} from "lucide-react";
import { cn } from "@/lib/utils";

import { TurnstileWidget } from "@/lib/../components/security/turnstile-widget";

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
    icon: <Lightbulb className="w-4 h-4 text-amber-500" />,
    hint: "Suggest a feature for EmDoc or a brand new everyday app Cogify should build.",
  },
  {
    id: "bug",
    label: "Bug Report",
    icon: <Bug className="w-4 h-4 text-red-500" />,
    hint: "Report an issue, visual glitch, or unexpected behavior in EmDoc.",
  },
  {
    id: "enterprise",
    label: "Enterprise Tool Replacement",
    icon: <Building2 className="w-4 h-4 text-cyan-500" />,
    hint: "Tell us which expensive licensed software your company spends money on.",
  },
  {
    id: "general",
    label: "General Feedback",
    icon: <MessageSquare className="w-4 h-4 text-indigo-500" />,
    hint: "Share your thoughts, workflow tips, or praise with our engineering team.",
  },
];

export const SuggestionForm = () => {
  const [category, setCategory] = useState<SuggestionCategory>("idea");
  const [targetApp, setTargetApp] = useState("EmDoc (macOS)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    deviceInfo: "",
    title: "",
    details: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [honeypotWebsite, setHoneypotWebsite] = useState("");
  const [formStartTime] = useState<number>(Date.now());
  const [turnstileToken, setTurnstileToken] = useState("");
  const [referenceCode, setReferenceCode] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
          formStartTime,
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
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#6366f1", "#10b981", "#06b6d4", "#a855f7"],
        });
      } catch (err) {
        // graceful fallback if canvas not available
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit request. Please try again.");
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
    <div className="w-full max-w-3xl mx-auto rounded-3xl bg-white/95 dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl transition-all duration-300">
      {/* Category Pills Switcher */}
      <div className="mb-8">
        <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
          Select What You&apos;d Like To Share
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {categories.map((item) => {
            const isSelected = item.id === category;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                className={cn(
                  "p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer",
                  isSelected
                    ? "bg-indigo-50/80 dark:bg-indigo-500/15 border-indigo-500 text-indigo-950 dark:text-white shadow-xs"
                    : "bg-zinc-50/60 dark:bg-zinc-950/40 border-zinc-200/80 dark:border-white/5 text-zinc-700 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                )}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  {item.icon}
                  <span className="text-xs font-bold leading-tight">{item.label}</span>
                </div>
                <div className="text-[10px] text-zinc-500 line-clamp-2 leading-snug">
                  {item.hint}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {status === "success" ? (
        <div className="py-8 text-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Thank you for helping us build better software!
          </h3>
          {referenceCode && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-mono text-xs">
              <span>Ticket Reference:</span>
              <span className="font-bold">{referenceCode}</span>
            </div>
          )}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
            Your {activeCategory.label.toLowerCase()} has been delivered straight to our core development team. We review every suggestion as we plan our roadmap and new product releases.
          </p>

          <div className="pt-4">
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Submit Another Suggestion or Report
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Target App / Platform Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                Related App or Subject
              </label>
              <select
                value={targetApp}
                onChange={(e) => setTargetApp(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-indigo-500 transition-colors"
              >
                <option>EmDoc (macOS Workstation)</option>
                <option>EmDoc (iOS App)</option>
                <option>New Everyday App Idea</option>
                <option>Enterprise License Replacement</option>
                <option>Cogify Website / Documentation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                Your Hardware / OS (Optional)
              </label>
              <input
                type="text"
                value={formData.deviceInfo}
                onChange={(e) => setFormData({ ...formData, deviceInfo: e.target.value })}
                placeholder="e.g. macOS Sonoma 14.5, M2 Mac / iPhone 15"
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
              {category === "bug"
                ? "Issue Summary *"
                : category === "enterprise"
                ? "Software You Would Like Us to Replace *"
                : "Suggestion Title *"}
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder={
                category === "bug"
                  ? "e.g. Compression modal presets calculation error on large files"
                  : category === "enterprise"
                  ? "e.g. Replace Adobe Acrobat / PDF Expert licenses at our law firm"
                  : "e.g. Add dark sepia reading theme / OCR batch folder processing"
              }
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Details */}
          <div>
            <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
              Detailed Description & Context *
            </label>
            <textarea
              rows={4}
              required
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder={
                category === "bug"
                  ? "Describe the steps to reproduce the issue, what happened, and what you expected to happen..."
                  : category === "enterprise"
                  ? "Tell us how much your company spends, approximate seat count, and what specific features you need in a replacement..."
                  : "Tell us why this feature or app would be useful, how you would use it in your daily workflow..."
              }
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />
          </div>

          {/* Contact Info (Optional) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                Your Name (Optional)
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Leave blank for anonymous"
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                Your Email (Optional, if you want a response)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@domain.com"
                className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Anti-Bot Honeypot fields (hidden from screen readers & users) */}
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

          {/* Cloudflare Turnstile Bot Detection */}
          <TurnstileWidget onVerify={setTurnstileToken} />

          {/* Submit Button */}
          <div className="pt-2 flex items-center justify-between">
            <span className="text-[11px] text-zinc-500 font-mono">
              Direct connection to Cogify engineering
            </span>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all duration-200 flex items-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer disabled:opacity-50"
            >
              {status === "submitting" ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Suggestion / Report</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
