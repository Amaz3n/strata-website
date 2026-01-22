"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import SplitText from "@/components/SplitText";
import MagneticButton from "@/components/MagneticButton";
import CustomCursor from "@/components/CustomCursor";
import HeroBackground from "@/components/HeroBackground";
import BentoGrid from "@/components/BentoGrid";
import {
  LayoutDashboard,
  FileText,
  Smartphone,
  Users,
  Calendar,
  RefreshCw,
  ClipboardList,
  Home,
  ChevronDown,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Complete Project Lifecycle",
    description:
      "Lead tracking through warranty management—every project phase in one dashboard. Track progress, manage milestones, and maintain complete visibility from first contact to final walkthrough.",
    size: "large" as const,
  },
  {
    icon: FileText,
    title: "Document Management",
    description:
      "E-signatures, plan markup, drawing revisions, and version control without external tools.",
    size: "default" as const,
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description:
      "Daily logs, photo documentation, and real-time updates from any job site.",
    size: "default" as const,
  },
  {
    icon: Users,
    title: "Client Portal",
    description:
      "Selective access permissions for change orders, draw schedules, project timelines, and communications. Keep clients informed without overwhelming them.",
    size: "wide" as const,
  },
  {
    icon: Calendar,
    title: "Gantt Scheduling",
    description:
      "Visual project timelines with milestone tracking and benchmark management.",
    size: "default" as const,
  },
  {
    icon: RefreshCw,
    title: "QuickBooks Sync",
    description:
      "Two-way accounting integration with bidirectional data synchronization.",
    size: "default" as const,
  },
  {
    icon: ClipboardList,
    title: "Change Orders",
    description:
      "Digital submission, approval workflows, and documentation—all in one place.",
    size: "default" as const,
  },
  {
    icon: Home,
    title: "Post-Construction",
    description:
      "Transition completed projects to estate management for ongoing homeowner service.",
    size: "default" as const,
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <>
      {/* Custom Cursor - global */}
      <CustomCursor />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Interactive Background */}
        <HeroBackground />

        {/* Content with parallax */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          {/* Main Headline - Split text animation */}
          <div className="text-center mb-6">
            <h1 className="hero-headline text-render-optimize text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              <SplitText delay={0.2} staggerChildren={0.04} animation="fadeUp">
                Build on
              </SplitText>{" "}
              <span className="text-strata-accent">
                <SplitText delay={0.6} staggerChildren={0.04} animation="fadeUp">
                  Principle.
                </SplitText>
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto text-center mb-4 leading-relaxed"
          >
            Project management software engineered for residential construction.
          </motion.p>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="accent-text text-base md:text-lg text-white/50 max-w-xl mx-auto text-center mb-12"
          >
            From lead to warranty, every phase organized under one system.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton
              href="/contact"
              variant="primary"
              size="lg"
              showArrow
              magneticStrength={0.25}
            >
              Schedule a Demo
            </MagneticButton>
            <MagneticButton
              href="/product"
              variant="outline"
              size="lg"
              magneticStrength={0.25}
            >
              Explore Platform
            </MagneticButton>
          </motion.div>

          {/* App Preview Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.6,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="mt-16 lg:mt-24 relative"
            data-cursor-expand
          >
            <div className="relative mx-auto max-w-5xl">
              {/* Browser Frame with clean shadow */}
              <div className="relative overflow-hidden app-mockup-shadow">
                <div className="bg-[#1c1c1c] p-3 flex items-center gap-3 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/5 h-6 max-w-sm mx-auto flex items-center justify-center">
                      <span className="text-[11px] text-white/30 font-mono">
                        app.stratapm.com
                      </span>
                    </div>
                  </div>
                  <div className="w-16" />
                </div>

                {/* App Screenshot */}
                <div className="bg-[#0f0f0f] aspect-[16/9] overflow-hidden">
                  <img
                    src="/strata-app.png"
                    alt="Strata Platform Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }}
          >
            <span className="text-xs text-white/40 tracking-widest uppercase">
              Scroll
            </span>
            <ChevronDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* Module 1: Product Introduction */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                The core system for residential construction.
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Residential construction demands precision at every
                  level—from initial estimates through final inspections and
                  beyond. Strata eliminates the fragmentation that undermines
                  project success. This is comprehensive project management
                  built specifically for builders and trades: sales pipeline
                  management, scheduling, estimating, documentation, client
                  communication, and warranty tracking unified in a single
                  platform.
                </p>
                <p>
                  No third-party integrations required. No switching between
                  systems. Just complete visibility and control from foundation
                  to completion.
                </p>
                <p>
                  Your field teams access critical tools directly from job
                  sites. Your clients engage through customized portals. Your
                  accounting syncs seamlessly with QuickBooks. Every element of
                  the construction process finds its place within Strata&apos;s
                  organized structure.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-10 text-center">
              <Button href="/product" variant="secondary" showArrow>
                Explore the Platform
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Module 2: Highlight of Features */}
      <section className="py-24 lg:py-32 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Essential tools. Singular system.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage residential construction projects,
              unified in one powerful platform.
            </p>
          </AnimatedSection>

          <BentoGrid items={features} />

          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <Button href="/product" variant="primary" showArrow>
              See How It Works
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Module 3: Tease Purpose */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built from experience, not assumption.
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Strata exists because residential construction in Southwest
                  Florida demands software as discerning as the clients you
                  serve. We&apos;ve witnessed talented builders struggle with
                  fragmented systems—juggling multiple applications, losing
                  critical information between platforms, watching projects
                  suffer from inadequate tools.
                </p>
                <p>
                  The region&apos;s builders needed something better: a
                  comprehensive solution built on the principles of how
                  construction actually works.
                </p>
                <p>
                  This isn&apos;t software adapted from other industries.
                  It&apos;s a platform engineered specifically for the
                  challenges you face daily—designed by people who understand
                  that successful projects require more than task lists and
                  spreadsheets. They require systems built on sound principles,
                  proper organization, and complete integration.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/about" variant="outline" showArrow>
                  Our Story
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-strata-accent/10 to-strata-primary/10 transform rotate-2" />

                {/* Image Placeholder */}
                <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 aspect-[4/3] overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-strata-primary/10 flex items-center justify-center">
                      <Home className="w-12 h-12 text-strata-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Southwest Florida Construction
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </>
  );
}
