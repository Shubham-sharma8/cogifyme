"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand/brand-logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="border-t border-black/[0.07] dark:border-white/[0.08] bg-[#f5f5f5] dark:bg-[#0b0b0d] text-black/60 dark:text-white/60 text-[13px] transition-colors duration-200">
      <div className="max-w-[920px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Copyright */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-semibold text-black dark:text-white hover:opacity-80 transition-opacity"
          >
            <BrandLogo width={20} height={20} />
            <span>cogify</span>
          </Link>
          <span className="text-black/30 dark:text-white/30">·</span>
          <span>© {currentYear} Cogify</span>
        </div>

        {/* Center: Clean Minimal Navigation Links */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          <Link
            href="/products#for-mac"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            For Mac
          </Link>
          <Link
            href="/products#for-ios"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            For iOS
          </Link>
          <Link
            href="/products#web"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Web
          </Link>
          <Link
            href="/compare"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Compare
          </Link>
          <Link
            href="/about"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Terms
          </Link>
        </nav>

        {/* Right: Theme Toggle */}
        <div className="shrink-0">
          <ThemeToggle variant="pill" />
        </div>
      </div>
    </footer>
  );
};
