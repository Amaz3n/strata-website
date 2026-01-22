"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  // Transform mouse position to gradient positions
  const gradient1X = useTransform(smoothMouseX, [0, 1], ["20%", "40%"]);
  const gradient1Y = useTransform(smoothMouseY, [0, 1], ["10%", "30%"]);
  const gradient2X = useTransform(smoothMouseX, [0, 1], ["70%", "90%"]);
  const gradient2Y = useTransform(smoothMouseY, [0, 1], ["60%", "80%"]);
  const gradient3X = useTransform(smoothMouseX, [0, 1], ["40%", "60%"]);
  const gradient3Y = useTransform(smoothMouseY, [0, 1], ["70%", "90%"]);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-strata-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-strata-primary via-strata-primary-dark to-strata-primary" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a] via-strata-primary to-[#1f3044]" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(193,113,75,0.4) 0%, transparent 70%)",
          left: gradient1X,
          top: gradient1Y,
          x: "-50%",
          y: "-50%",
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(91,155,213,0.4) 0%, transparent 70%)",
          left: gradient2X,
          top: gradient2Y,
          x: "-50%",
          y: "-50%",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(212,184,150,0.4) 0%, transparent 70%)",
          left: gradient3X,
          top: gradient3Y,
          x: "-50%",
          y: "-50%",
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay noise-texture" />

      {/* Top gradient fade for nav */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/20 to-transparent" />
    </div>
  );
}
