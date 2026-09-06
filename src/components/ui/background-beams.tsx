"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Beams configuration
    const beams: {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      color: string;
      alpha: number;
    }[] = [];

    const colors = [
      "rgba(59, 130, 246,", // blue
      "rgba(99, 102, 241,", // indigo
      "rgba(6, 182, 212,",  // cyan
      "rgba(168, 85, 247,", // purple
    ];

    for (let i = 0; i < 16; i++) {
      beams.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: 120 + Math.random() * 180,
        speed: 0.6 + Math.random() * 1.2,
        angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2, // ~45 deg diagonal
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.15 + Math.random() * 0.25,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      beams.forEach((beam) => {
        const dx = Math.cos(beam.angle) * beam.length;
        const dy = Math.sin(beam.angle) * beam.length;

        const gradient = ctx.createLinearGradient(beam.x, beam.y, beam.x + dx, beam.y + dy);
        gradient.addColorStop(0, `${beam.color} 0)`);
        gradient.addColorStop(0.5, `${beam.color} ${beam.alpha})`);
        gradient.addColorStop(1, `${beam.color} 0)`);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(beam.x + dx, beam.y + dy);
        ctx.stroke();

        // Advance position
        beam.x += Math.cos(beam.angle) * beam.speed;
        beam.y += Math.sin(beam.angle) * beam.speed;

        // Wrap around boundaries
        if (beam.x > width + beam.length) beam.x = -beam.length;
        if (beam.y > height + beam.length) beam.y = -beam.length;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none opacity-25 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen",
        className
      )}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
