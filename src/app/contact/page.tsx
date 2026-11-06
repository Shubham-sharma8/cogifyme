"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { TurnstileWidget } from "@/components/security/turnstile-widget";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { AuthorBio } from "@/components/seo/author-bio";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "General Software Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceCode, setReferenceCode] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [honeypotWebsite, setHoneypotWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const formStartTimeRef = useRef<number>(0);

  useEffect(() => {
    formStartTimeRef.current = Date.now();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields before submitting.");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "CONTACT",
          targetApp: formData.inquiryType,
          title: `Contact: ${formData.inquiryType} from ${formData.name}`,
          description: formData.message,
          senderName: formData.name,
          senderEmail: formData.email,
          phone: formData.phone || undefined,
          company: formData.company || undefined,
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
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to submit message. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-32 pb-20 bg-[#f5f5f5] dark:bg-[#0b0b0d] text-[#111] dark:text-[#f5f5f7]">
      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-8">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
        <div className="mt-6 max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#777] dark:text-[#888]">
            get in touch
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold text-[#111] dark:text-white tracking-[-0.04em] leading-[1.05]">
            Contact <span className="font-display italic font-normal">Cogify.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#555] dark:text-[#a1a1aa] leading-relaxed max-w-2xl">
            Have a question about EmDoc v1.1, our native macOS utilities, Marriage Biodata Maker Studio, SSB Stage-2 Practice Studio, or our Safari extensions? Reach out directly.
          </p>
        </div>
      </section>

      <section className="max-w-[980px] mx-auto px-5 sm:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-2.5">
              <div className="font-bold text-sm text-[#111] dark:text-white">
                Have a feature request or bug report?
              </div>
              <p className="text-xs text-[#666] dark:text-[#a1a1aa] leading-relaxed">
                If you have an idea for an app, a feature suggestion for EmDoc, or encountered a bug, drop it directly in our suggestion form.
              </p>
              <Link
                href="/suggestions"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111] dark:text-white hover:underline"
              >
                <span>Open Suggestion &amp; Report Form →</span>
              </Link>
            </div>

            <div className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-4">
              <h2 className="text-sm font-bold text-[#111] dark:text-white flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                Direct Email Channels
              </h2>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#666] dark:text-[#a1a1aa] block mb-0.5">
                    Product Support &amp; Feedback
                  </span>
                  <a
                    href="mailto:contact@cogify.me?subject=Cogify%20Support%20Inquiry"
                    className="text-[#111] dark:text-white font-mono font-semibold hover:underline"
                  >
                    contact@cogify.me
                  </a>
                </div>
                <div>
                  <span className="text-[#666] dark:text-[#a1a1aa] block mb-0.5">
                    General Inquiries
                  </span>
                  <a
                    href="mailto:contact@cogify.me"
                    className="text-[#111] dark:text-white font-mono font-semibold hover:underline"
                  >
                    contact@cogify.me
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-[22px] bg-white dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] space-y-2 text-xs text-[#666] dark:text-[#a1a1aa]">
              <h3 className="font-semibold text-[#111] dark:text-white">
                24-Hour Response Window
              </h3>
              <p className="leading-relaxed">
                Messages submitted here are delivered directly to founder Shubham Sharma. You will receive an immediate confirmation with your ticket reference code.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[26px] bg-white dark:bg-[#141417] border border-black/[0.08] dark:border-white/[0.1] p-6 sm:p-9">
              {status === "success" ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-8 rounded-2xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.08] dark:border-white/10 space-y-4 text-center"
                >
                  <CheckCircle2 className="w-10 h-10 text-[#111] dark:text-white mx-auto" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-[#111] dark:text-white">
                    Ticket Created Successfully
                  </h3>
                  {referenceCode && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#141417] border border-black/10 dark:border-white/10 font-mono text-xs tabular-nums">
                      <span>Ticket Number:</span>
                      <span className="font-bold">#{referenceCode}</span>
                    </div>
                  )}
                  <p className="text-xs text-[#555] dark:text-[#a1a1aa] max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. A confirmation email has been dispatched to <strong>{formData.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        inquiryType: "General Software Inquiry",
                        message: "",
                      });
                    }}
                    className="helumi-pill text-xs cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-300 text-xs flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#333] dark:text-[#d4d4d8] mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.08] dark:border-white/10 text-[#111] dark:text-white placeholder-[#888] text-xs focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#333] dark:text-[#d4d4d8] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        spellCheck={false}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.08] dark:border-white/10 text-[#111] dark:text-white placeholder-[#888] text-xs focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[#333] dark:text-[#d4d4d8] mb-1.5"
                      >
                        Mobile (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.08] dark:border-white/10 text-[#111] dark:text-white placeholder-[#888] text-xs focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-semibold text-[#333] dark:text-[#d4d4d8] mb-1.5"
                      >
                        Company (Optional)
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Organization"
                        className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.08] dark:border-white/10 text-[#111] dark:text-white placeholder-[#888] text-xs focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-inquiry-type"
                        className="block text-xs font-semibold text-[#333] dark:text-[#d4d4d8] mb-1.5"
                      >
                        Inquiry Topic
                      </label>
                      <select
                        id="contact-inquiry-type"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.08] dark:border-white/10 text-[#111] dark:text-white text-xs focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                      >
                        <option>General Software Inquiry</option>
                        <option>EmDoc Workstation Support (v1.1)</option>
                        <option>macOS Utilities Support (LumenView, Metricove, NetGuard, Klipora, Show free space)</option>
                        <option>Marriage Biodata Maker Studio (biodata.cogify.me)</option>
                        <option>SSB Stage-2 Test Practice Studio (ssb.cogify.me)</option>
                        <option>Safari Extensions Support (Ad Blocker, ReaderEasy, WebClear, WebLenses, Invert, Element Hider)</option>
                        <option>Technical Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#333] dark:text-[#d4d4d8] mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="How can Cogify assist you?"
                      className="w-full px-4 py-3 rounded-xl bg-[#f5f5f5] dark:bg-[#0b0b0d] border border-black/[0.08] dark:border-white/10 text-[#111] dark:text-white placeholder-[#888] text-xs focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                    />
                  </div>

                  {/* Anti-Bot Honeypot */}
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

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="helumi-pill text-sm cursor-pointer disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <span>Sending message…</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" aria-hidden="true" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <AuthorBio />
    </div>
  );
}
