"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Lock, ArrowLeft } from "lucide-react";

export default function ResetPasswordPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/admin/login");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link href="/" className="inline-block mb-4">
          <BrandLogo width={48} height={48} />
        </Link>
        <div className="bg-white dark:bg-zinc-900 py-8 px-6 shadow-xl border border-zinc-200 dark:border-white/10 sm:rounded-3xl space-y-4">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
            Password Reset Disabled
          </h2>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Web password reset is disabled for administrator security.
            Redirecting to admin login...
          </p>
          <div className="pt-2">
            <Link
              href="/admin/login"
              className="inline-flex items-center gap-1.5 text-xs text-indigo-500 hover:text-indigo-400 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Admin Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
