"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { DownloadModal } from "@/components/products/download-modal";
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
                ? "bg-zinc-950/80 border border-white/10 shadow-2xl shadow-black/60 backdrop-blur-xl"
                : "bg-transparent border border-transparent"
            )}
            aria-label="Main Navigation"
          >
            {/* COGIFY Brand Wordmark */}
            <Link
              href="/"
              className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            >
              <div className="relative w-8 h-8 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/brand/logo_white.png"
                  alt="COGIFY Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-wider text-zinc-100 group-hover:text-white transition-colors">
                  {siteConfig.name}
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase">
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <Link
                href="/products/emdoc"
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors hover:text-white hover:bg-white/5",
                  pathname.startsWith("/products")
                    ? "text-white bg-white/5 font-semibold"
                    : "text-zinc-400"
                )}
              >
                EmDoc Workstation
              </Link>
              <Link
                href="/#what-we-build"
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                What We Build
              </Link>
              <Link
                href="/enterprise"
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors hover:text-white hover:bg-white/5",
                  pathname === "/enterprise"
                    ? "text-white bg-white/5 font-semibold"
                    : "text-zinc-400"
                )}
              >
                Enterprise
              </Link>
              <Link
                href="/about"
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors hover:text-white hover:bg-white/5",
                  pathname === "/about"
                    ? "text-white bg-white/5 font-semibold"
                    : "text-zinc-400"
                )}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors hover:text-white hover:bg-white/5",
                  pathname === "/contact"
                    ? "text-white bg-white/5 font-semibold"
                    : "text-zinc-400"
                )}
              >
                Contact
              </Link>
            </div>

            {/* Actions */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={() => setDownloadModalOpen(true)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-indigo-400" />
                <span>Download EmDoc</span>
              </button>

              <Link
                href="/products/emdoc"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all duration-200 flex items-center gap-1 group cursor-pointer"
              >
                <span>Explore EmDoc</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setDownloadModalOpen(true)}
                className="p-2 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-xs font-medium"
                aria-label="Download"
              >
                <Download className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 p-4 rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl backdrop-blur-2xl flex flex-col space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <Link
                href="/products/emdoc"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-white/5 hover:text-white flex items-center justify-between"
              >
                <span>EmDoc Workstation</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                  macOS
                </span>
              </Link>
              <Link
                href="/#what-we-build"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                What We Build
              </Link>
              <Link
                href="/enterprise"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                Enterprise
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                About COGIFY
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                Contact & Inquiries
              </Link>

              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
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
