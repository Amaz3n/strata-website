"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
  magneticStrength?: number;
}

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  showArrow = false,
  className = "",
  magneticStrength = 0.3,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: distanceX * magneticStrength,
      y: distanceY * magneticStrength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-arc-accent text-arc-primary hover:shadow-2xl hover:shadow-arc-accent/40",
    secondary:
      "bg-arc-primary text-white hover:shadow-2xl hover:shadow-arc-primary/40",
    outline:
      "border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50",
  };

  const sizeStyles = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-7 text-sm",
    lg: "h-14 px-9 text-base",
  };

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Link
        ref={buttonRef}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative inline-flex items-center justify-center font-semibold transition-all duration-300 group overflow-hidden",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
      >
        {/* Animated background shine */}
        <span className="absolute inset-0 overflow-hidden">
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </span>

        {/* Content */}
        <span className="relative flex items-center gap-2">
          {children}
          {showArrow && (
            <motion.span
              className="inline-flex"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight size={size === "lg" ? 20 : 16} />
            </motion.span>
          )}
        </span>
      </Link>
    </motion.div>
  );
}
