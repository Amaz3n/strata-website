"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  index: number;
  size?: "default" | "large" | "tall" | "wide";
}

function BentoItem({
  icon: Icon,
  title,
  description,
  className,
  index,
  size = "default",
}: BentoItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const isLarge = size === "large";
  const isTall = size === "tall";
  const isWide = size === "wide";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(
        "group relative bg-white border border-strata-charcoal/10 p-6 transition-all duration-300 hover:border-strata-charcoal/20 hover:shadow-lg",
        isLarge && "md:col-span-2 md:row-span-2 p-8",
        isTall && "md:row-span-2",
        isWide && "md:col-span-2",
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "mb-4 inline-flex items-center justify-center bg-strata-primary/5 transition-colors duration-300 group-hover:bg-strata-primary/10",
          isLarge ? "w-14 h-14" : "w-11 h-11"
        )}
      >
        <Icon
          className={cn(
            "text-strata-primary",
            isLarge ? "w-7 h-7" : "w-5 h-5"
          )}
        />
      </div>

      {/* Content */}
      <h3
        className={cn(
          "font-heading font-semibold text-strata-primary mb-2",
          isLarge ? "text-xl md:text-2xl" : "text-base"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-muted-foreground leading-relaxed",
          isLarge ? "text-base" : "text-sm"
        )}
      >
        {description}
      </p>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-strata-accent transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
}

interface BentoGridProps {
  items: {
    icon: LucideIcon;
    title: string;
    description: string;
    size?: "default" | "large" | "tall" | "wide";
  }[];
}

export default function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <BentoItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
          size={item.size}
          index={index}
        />
      ))}
    </div>
  );
}
