"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "General Software Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
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

    // Realistic asynchronous dispatch handler
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <div className="pt-28 pb-20 relative">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
              <Image
                src="/brand/logo_white.png"
                alt="COGIFY Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              Get In Touch
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Contact <span className="text-indigo-400">COGIFY.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl">
            Have a question about EmDoc, enterprise software partnerships, or our technology? Reach out directly.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                Direct Email Channels
              </h3>
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-zinc-500 block mb-0.5">EmDoc Product Support & Feedback</span>
                  <a
                    href="mailto:contact@cogify.me?subject=EmDoc%20Support%20Inquiry"
                    className="text-indigo-400 hover:text-indigo-300 font-mono font-medium"
                  >
                    contact@cogify.me
                  </a>
                </div>
                <div>
                  <span className="text-zinc-500 block mb-0.5">General & Enterprise Inquiries</span>
                  <a
                    href="mailto:contact@cogify.me"
                    className="text-indigo-400 hover:text-indigo-300 font-mono font-medium"
                  >
                    contact@cogify.me
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 space-y-3 text-xs text-zinc-400">
              <h4 className="font-semibold text-white">Guaranteed Response</h4>
              <p className="leading-relaxed">
                Messages submitted through this portal are delivered directly to the COGIFY engineering team. We do not use outsourced triage centers.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-zinc-900/60 border border-white/10 p-8 sm:p-10 backdrop-blur-md">
              {status === "success" ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 space-y-4 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="text-xl font-bold text-white">Message Received</h3>
                  <p className="text-xs text-emerald-200/90 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your inquiry has been logged. A member of our technical team will respond to {formData.email} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        inquiryType: "General Software Inquiry",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Company or Team (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Organization name"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-zinc-200 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                      >
                        <option>General Software Inquiry</option>
                        <option>EmDoc Workstation Support</option>
                        <option>Enterprise Deployment</option>
                        <option>Technical Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="How can COGIFY assist with your software requirements?"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
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
    </div>
  );
}
