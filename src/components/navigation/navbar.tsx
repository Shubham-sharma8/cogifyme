"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { DownloadModal } from "@/components/products/download-modal";
import { BrandLogo } from "@/components/brand/brand-logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Do not render website navbar inside the admin portal
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 transition-all duration-300",
              scrolled
                ? "bg-white/85 dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-white/10 shadow-lg shadow-zinc-900/5 dark:shadow-2xl dark:shadow-black/60 backdrop-blur-xl"
                : "bg-white/40 dark:bg-transparent border border-zinc-200/40 dark:border-transparent backdrop-blur-xs md:backdrop-blur-none"
            )}
            aria-label="Main Navigation"
          >
            {/* COGIFY Brand Wordmark */}
            <Link
              href="/"
              className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            >
              <div className="relative w-8 h-8 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                <BrandLogo width={32} height={32} priority />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-wider text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                  {siteConfig.name}
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <Link
                href="/#what-we-build"
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="/products/emdoc"
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors inline-flex items-center gap-1.5",
                  pathname.startsWith("/products/emdoc") || pathname === "/products"
                    ? "text-indigo-600 dark:text-white bg-indigo-50 dark:bg-white/10 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
                )}
              >
                <span>EmDoc</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold">macOS</span>
              </Link>
              <Link
                href="/element-hider"
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors inline-flex items-center gap-1.5",
                  pathname.startsWith("/element-hider")
                    ? "text-purple-600 dark:text-white bg-purple-50 dark:bg-white/10 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
                )}
              >
                <span>Element Hider</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold">Safari</span>
              </Link>
              <Link
                href="/invert"
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors inline-flex items-center gap-1.5",
                  pathname.startsWith("/invert")
                    ? "text-blue-600 dark:text-white bg-blue-50 dark:bg-white/10 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
                )}
              >
                <span>Colour Invert</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">Safari</span>
              </Link>
              <Link
                href="/enterprise"
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                  pathname === "/enterprise"
                    ? "text-indigo-600 dark:text-white bg-indigo-50 dark:bg-white/10 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
                )}
              >
                Enterprise
              </Link>
              <Link
                href="/suggestions"
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                  pathname === "/suggestions"
                    ? "text-indigo-600 dark:text-white bg-indigo-50 dark:bg-white/10 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
                )}
              >
                Suggestions
              </Link>
              <Link
                href="/about"
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                  pathname === "/about"
                    ? "text-indigo-600 dark:text-white bg-indigo-50 dark:bg-white/10 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
                )}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                  pathname === "/contact"
                    ? "text-indigo-600 dark:text-white bg-indigo-50 dark:bg-white/10 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
                )}
              >
                Contact
              </Link>
            </div>

            {/* Actions: Theme Toggle + CTAs */}
            <div className="hidden sm:flex items-center space-x-2.5">
              <ThemeToggle />

              <button
                onClick={() => setDownloadModalOpen(true)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-100 hover:bg-zinc-200/80 dark:bg-white/10 dark:hover:bg-white/15 text-zinc-800 dark:text-white border border-zinc-200 dark:border-white/10 transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Download EmDoc</span>
              </button>

              <Link
                href="/products/emdoc"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all duration-200 flex items-center gap-1 group cursor-pointer"
              >
                <span>Explore EmDoc</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Actions: Theme Toggle + Hamburger */}
            <div className="flex md:hidden items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setDownloadModalOpen(true)}
                className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 text-xs font-medium"
                aria-label="Download"
              >
                <Download className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 shadow-2xl backdrop-blur-2xl flex flex-col space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <Link
                href="/#what-we-build"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-950 dark:hover:text-white"
              >
                Solutions
              </Link>
              <Link
                href="/products/emdoc"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-950 dark:hover:text-white flex items-center justify-between"
              >
                <span>EmDoc Workstation</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                  macOS
                </span>
              </Link>
              <Link
                href="/element-hider"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-950 dark:hover:text-white flex items-center justify-between"
              >
                <span>Element Hider</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-50 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
                  Safari
                </span>
              </Link>
              <Link
                href="/invert"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-950 dark:hover:text-white flex items-center justify-between"
              >
                <span>Colour Invert</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
                  Safari
                </span>
              </Link>
              <Link
                href="/enterprise"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-950 dark:hover:text-white"
              >
                Enterprise
              </Link>
              <Link
                href="/suggestions"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-950 dark:hover:text-white flex items-center justify-between"
              >
                <span>Suggestions & Reports</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                  Feedback
                </span>
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-950 dark:hover:text-white"
              >
                About Cogify
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-950 dark:hover:text-white"
              >
                Contact & Inquiries
              </Link>

              <div className="pt-2 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between py-1 px-1">
                <span className="text-xs text-zinc-500 font-medium">Theme Preference</span>
                <ThemeToggle variant="pill" />
              </div>

              <div className="pt-2 border-t border-zinc-200 dark:border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setDownloadModalOpen(true);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold bg-indigo-600 text-white flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download EmDoc for macOS</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Centralized Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </>
  );
};
