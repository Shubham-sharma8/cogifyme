"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  background,
  minSize = 0.6,
  maxSize = 2,
  particleDensity = 40,
  className,
  particleColor = "#ffffff",
}: {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || 800);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const count = Math.floor((width * height) / 10000 * (particleDensity / 30));
    const particles: {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      opacityDelta: number;
    }[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: minSize + Math.random() * (maxSize - minSize),
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random(),
        opacityDelta: (Math.random() - 0.5) * 0.02,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.opacity += p.opacityDelta;
        if (p.opacity <= 0.1 || p.opacity >= 0.9) {
          p.opacityDelta = -p.opacityDelta;
        }

        p.y += p.speedY;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = particleColor;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [minSize, maxSize, particleDensity, particleColor]);

  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ background: background || "transparent" }}
      />
    </div>
  );
};
