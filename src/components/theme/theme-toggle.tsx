"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  variant?: "button" | "pill";
}

export function ThemeToggle({ className, variant = "button" }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "w-9 h-9 rounded-xl border border-white/10 bg-zinc-900/40 animate-pulse",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer",
          isDark
            ? "bg-zinc-900/80 border-white/10 text-zinc-300 hover:text-white hover:border-white/20"
            : "bg-white border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:border-zinc-300 shadow-xs",
          className
        )}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        title={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? (
          <>
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <Moon className="w-3.5 h-3.5 text-indigo-600" />
            <span>Dark Mode</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
        isDark
          ? "bg-zinc-900/60 hover:bg-zinc-800/80 border-white/10 text-amber-400 hover:text-amber-300"
          : "bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200/80 text-zinc-700 hover:text-zinc-950 shadow-xs",
        className
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="relative w-4 h-4">
        <Sun
          className={cn(
            "w-4 h-4 absolute inset-0 transition-all duration-300 transform",
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
        <Moon
          className={cn(
            "w-4 h-4 absolute inset-0 transition-all duration-300 transform text-indigo-600 dark:text-indigo-400",
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          )}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
