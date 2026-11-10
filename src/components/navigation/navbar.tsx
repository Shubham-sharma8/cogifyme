"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand/brand-logo";
import { CommandPalette } from "@/components/navigation/command-palette";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "For Mac", href: "/products#for-mac", hash: "#for-mac" },
  { label: "For iOS", href: "/products#for-ios", hash: "#for-ios" },
  { label: "Web", href: "/products#web", hash: "#web" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  if (
    pathname?.startsWith("/helium") ||
    pathname?.startsWith("/findy") ||
    pathname?.startsWith("/taskyfy") ||
    pathname?.startsWith("/wheelify") ||
    pathname?.startsWith("/screenify")
  ) {
    return <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />;
  }

  return (
    <>
      <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-3 pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className="pointer-events-auto inline-flex items-center gap-0.5 sm:gap-1 p-1 rounded-full bg-white/95 dark:bg-[#141417]/95 border border-black/[0.06] dark:border-white/[0.1] shadow-[0_2px_12px_rgba(0,0,0,0.05)] backdrop-blur-md text-[13px] sm:text-[14px] whitespace-nowrap max-w-full overflow-x-auto"
        >
          {/* Home Brand Pill */}
          <Link
            href="/"
            className={cn(
              "h-8 px-2.5 sm:px-3.5 rounded-full inline-flex items-center gap-1.5 font-semibold transition-colors",
              pathname === "/"
                ? "bg-[#f5f5f5] dark:bg-white/[0.12] text-black dark:text-white"
                : "text-black/80 dark:text-white/85 hover:text-black dark:hover:text-white"
            )}
          >
            <span className="relative w-4 h-4 inline-flex items-center justify-center shrink-0">
              <BrandLogo width={16} height={16} priority />
            </span>
            <span>cogify</span>
          </Link>

          {/* Minimalist Helumi-Style Navigation Links: For Mac, For iOS, Web, About, Contact */}
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === pathname ||
              (item.href.startsWith("/products") && pathname === "/products");

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "h-8 px-2.5 sm:px-3.5 rounded-full inline-flex items-center justify-center transition-colors font-normal",
                  isActive && !item.hash
                    ? "bg-[#f5f5f5] dark:bg-white/[0.12] text-black dark:text-white font-medium"
                    : "text-black/65 dark:text-white/65 hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
    </>
  );
};
