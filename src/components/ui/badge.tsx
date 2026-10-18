import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "success";
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-colors";
  const variantStyles =
    variant === "outline"
      ? "border-zinc-200 dark:border-white/10 bg-transparent text-zinc-700 dark:text-zinc-300"
      : variant === "success"
      ? "border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
      : "border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300";

  return (
    <span className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </span>
  );
}
