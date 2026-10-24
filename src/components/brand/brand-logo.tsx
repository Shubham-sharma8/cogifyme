import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  variant?: "auto" | "white" | "dark";
}

export function BrandLogo({
  className,
  width = 32,
  height = 32,
  priority = false,
  variant = "auto",
}: BrandLogoProps) {
  const isSmall = width <= 64 && height <= 64;
  const darkLogo = isSmall ? "/brand/logo-sm.webp" : "/brand/logo.png";
  const whiteLogo = isSmall ? "/brand/logo_white-sm.webp" : "/brand/logo_white.png";

  if (variant === "white") {
    return (
      <Image
        src={whiteLogo}
        alt="COGIFY Logo"
        width={width}
        height={height}
        priority={priority}
        className={cn("object-contain", className)}
      />
    );
  }

  if (variant === "dark") {
    return (
      <Image
        src={darkLogo}
        alt="COGIFY Logo"
        width={width}
        height={height}
        priority={priority}
        className={cn("object-contain", className)}
      />
    );
  }

  return (
    <div
      className={cn("relative inline-flex items-center justify-center shrink-0", className)}
      style={{ width, height }}
    >
      {/* Light theme: Dark logo */}
      <Image
        src={darkLogo}
        alt="COGIFY Logo"
        width={width}
        height={height}
        priority={priority}
        className="object-contain block dark:hidden w-full h-full"
      />
      {/* Dark theme: White logo */}
      <Image
        src={whiteLogo}
        alt="COGIFY Logo"
        width={width}
        height={height}
        priority={priority}
        className="object-contain hidden dark:block w-full h-full"
      />
    </div>
  );
}
