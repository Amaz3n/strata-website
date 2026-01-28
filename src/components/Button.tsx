import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-arc-accent text-arc-primary hover:bg-arc-accent-light hover:shadow-lg hover:shadow-arc-accent/25",
    secondary:
      "bg-arc-primary text-white hover:bg-arc-primary-light",
    outline:
      "border-2 border-arc-primary text-arc-primary bg-transparent hover:bg-arc-primary hover:text-white",
  };

  const sizeStyles = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  };

  return (
    <ShadcnButton
      asChild
      className={cn(
        "font-semibold transition-all duration-300 group",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <Link href={href}>
        {children}
        {showArrow && (
          <ArrowRight
            size={size === "lg" ? 20 : 16}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        )}
      </Link>
    </ShadcnButton>
  );
}
