import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-sm",
  }[size];

  const variantStyles = {
    primary:
      "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25",
    secondary:
      "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200/80 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] dark:text-zinc-200 dark:border-white/10",
    outline:
      "border border-zinc-300 dark:border-white/15 bg-transparent hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200",
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
