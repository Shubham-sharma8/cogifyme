"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[19rem] grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl hover:shadow-indigo-500/5 transition duration-300 p-6 bg-zinc-900/40 border border-white/10 justify-between flex flex-col space-y-4 relative overflow-hidden backdrop-blur-md",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
      {header && <div className="w-full flex-1 min-h-[6rem] relative z-10">{header}</div>}
      <div className="group-hover/bento:translate-x-1 transition duration-200 relative z-10">
        <div className="flex items-center justify-between mb-2">
          {icon && <div className="text-zinc-400 group-hover/bento:text-indigo-400 transition-colors">{icon}</div>}
          {badge && (
            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {badge}
            </span>
          )}
        </div>
        <div className="font-semibold text-zinc-100 text-lg mb-1 tracking-tight">
          {title}
        </div>
        <div className="font-normal text-zinc-400 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
