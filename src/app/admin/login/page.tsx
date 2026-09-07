"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { TurnstileWidget } from "@/components/security/turnstile-widget";
import {
  Lock,
  Mail,
  ArrowRight,
  ShieldAlert,
  KeyRound,
  CheckCircle2,
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [formStartTime] = useState<number>(Date.now());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Forgot password modal state
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotStatus, setForgotStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [forgotMessage, setForgotMessage] = useState("");
  const [demoResetToken, setDemoResetToken] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "login",
          email,
          password,
          turnstileToken,
          _hp_company: honeypot,
          formStartTime,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Authentication failed.");
      }

      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "Failed to log in.");
    } finally {
      setLoading(false);
    }
  };

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotStatus("loading");
    setForgotMessage("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "request-reset",
          email: forgotEmail,
        }),
      });

      const data = await res.json();
      setForgotStatus("success");
      setForgotMessage(data.message || "Password reset token generated.");
      if (data.resetToken) {
        setDemoResetToken(data.resetToken);
      }
    } catch (err: any) {
      setForgotStatus("error");
      setForgotMessage(err.message || "Failed to request password reset.");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center mb-4">
          <Link href="/" className="inline-block hover:scale-105 transition-transform">
            <BrandLogo width={52} height={52} priority />
          </Link>
        </div>
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Admin Portal Authentication
        </h2>
        <p className="mt-2 text-center text-xs text-zinc-500 dark:text-zinc-400">
          Secure, air-gapped administration for Cogify & EmDoc services
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white/95 dark:bg-zinc-900/80 backdrop-blur-xl py-8 px-6 shadow-2xl border border-zinc-200/90 dark:border-white/10 sm:rounded-3xl sm:px-10">
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400 text-xs flex items-center gap-2.5">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                Admin Email Address
              </label>
              <div className="relative rounded-xl shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-zinc-400" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="block w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative rounded-xl shadow-xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-zinc-400" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="block w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
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
            />

            {/* Cloudflare Turnstile Bot Protection */}
            <div className="pt-1">
              <TurnstileWidget onVerify={setTurnstileToken} />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Authenticate & Access Portal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  Reset Admin Password
                </h3>
                <span className="text-xs text-zinc-500">
                  Generate a secure password reset token
                </span>
              </div>
            </div>

            {forgotStatus === "success" ? (
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs">
                  {forgotMessage}
                </div>
                {demoResetToken && (
                  <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10">
                    <span className="text-[11px] text-zinc-500 block mb-1">
                      Direct Reset Link:
                    </span>
                    <Link
                      href={`/admin/reset-password?token=${demoResetToken}`}
                      className="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:underline break-all"
                    >
                      /admin/reset-password?token={demoResetToken}
                    </Link>
                  </div>
                )}
                <button
                  onClick={() => setShowForgotModal(false)}
                  className="w-full py-2.5 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleRequestReset} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                    Your Admin Email
                  </label>
                  <input
                    type="email"
                    required
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white text-xs focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={forgotStatus === "loading"}
                    className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold cursor-pointer disabled:opacity-50"
                  >
                    {forgotStatus === "loading" ? "Generating..." : "Generate Token"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
