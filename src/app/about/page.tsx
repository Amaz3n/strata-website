"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import CustomCursor from "@/components/CustomCursor";
import { Users, MapPin, Target, Lightbulb, Shield, Zap } from "lucide-react";

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      // Check if value is a number or text
      const numericValue = parseInt(value);
      if (!isNaN(numericValue)) {
        let start = 0;
        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(easeProgress * numericValue);
          setDisplayValue(current.toString());

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

// Timeline milestone component
function TimelineMilestone({
  year,
  title,
  description,
  index,
  isLast,
}: {
  year: string;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative pl-8 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {/* Vertical line */}
      {!isLast && (
        <motion.div
          className="absolute left-[11px] top-6 w-[2px] bg-gradient-to-b from-strata-accent to-strata-accent/20"
          initial={{ height: 0 }}
          animate={isInView ? { height: "calc(100% - 24px)" } : {}}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
        />
      )}

      {/* Dot */}
      <motion.div
        className="absolute left-0 top-1 w-6 h-6 bg-strata-primary border-2 border-strata-accent flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.1, type: "spring" }}
      >
        <div className="w-2 h-2 bg-strata-accent" />
      </motion.div>

      {/* Content */}
      <div className="pt-0.5">
        <span className="text-strata-accent font-semibold text-sm tracking-wider">{year}</span>
        <h4 className="text-xl font-bold text-foreground mt-1 mb-2">{title}</h4>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Value card component with hover effects
function ValueCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white p-8 transition-all duration-500 cursor-default"
      style={{
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(44, 62, 80, 0.15)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
      }}
      data-cursor-expand
    >
      {/* Accent border that reveals on hover */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1 bg-strata-accent origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Icon */}
      <motion.div
        className="w-14 h-14 bg-strata-primary/5 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-strata-accent/10"
        animate={{ rotate: isHovered ? 3 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-7 h-7 text-strata-primary transition-colors duration-300 group-hover:text-strata-accent" />
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}

const timelineData = [
  {
    year: "THE BEGINNING",
    title: "Roots in the Trade",
    description:
      "Agustin's family established their electrical contracting business in Southwest Florida, cultivating relationships with builders and developers throughout the region.",
  },
  {
    year: "THE INSIGHT",
    title: "Pattern Recognition",
    description:
      "Working alongside builders revealed a consistent pattern: missed deadlines, informal change orders, inadequate organizational systems. The industry was underserved by existing tools.",
  },
  {
    year: "THE PERSPECTIVE",
    title: "Builder's View",
    description:
      "As a project manager for a residential builder, Agustin confirmed the local industry lacked software designed for the demands of high-end residential construction.",
  },
  {
    year: "THE PARTNERSHIP",
    title: "Complementary Expertise",
    description:
      "Gabi's deep market knowledge and agency relationships across the construction sector, combined with Agustin's technical expertise, revealed an opportunity to create something better.",
  },
  {
    year: "THE SOLUTION",
    title: "Strata is Born",
    description:
      "Comprehensive project management software designed specifically for the region's builders—priced fairly and engineered to address the actual challenges faced by Southwest Florida's residential construction professionals.",
  },
];

const values = [
  {
    icon: Target,
    title: "Purpose-Built",
    description:
      "Every feature exists because residential construction demands it. No bloat, no compromises—just tools that work the way you do.",
  },
  {
    icon: Lightbulb,
    title: "Clarity Over Complexity",
    description:
      "Information should illuminate, not overwhelm. We design for immediate understanding and decisive action.",
  },
  {
    icon: Shield,
    title: "Reliable Foundation",
    description:
      "Your projects depend on consistent, dependable systems. We build software with the same structural integrity you bring to construction.",
  },
  {
    icon: Zap,
    title: "Responsive Evolution",
    description:
      "Construction practices evolve. Your software should too. We iterate based on real feedback from builders in the field.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Page Header */}
      <section className="relative pt-32 pb-40 bg-strata-primary overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          {/* Subtle gradient orbs */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(193,113,75,0.4) 0%, transparent 70%)",
              left: "10%",
              top: "-20%",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, rgba(212,184,150,0.4) 0%, transparent 70%)",
              right: "5%",
              bottom: "-30%",
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                               linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <p className="eyebrow text-strata-accent text-sm mb-4">About Strata</p>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Born from{" "}
              <span className="text-strata-accent">Experience.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Software built by people who understand construction—designed for the
              builders who shape Southwest Florida.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Journey Timeline Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Intro text */}
            <div>
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  The Journey to Strata
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Strata was built by Agustin and Gabi Zenuto, a Naples-based team
                  with deep roots in Southwest Florida&apos;s construction industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Their combined experience—from the trades to project management to
                  marketing—revealed a truth the industry knew but no one addressed:
                  existing tools weren&apos;t built for residential construction.
                </p>
              </AnimatedSection>

              {/* Founders card */}
              <AnimatedSection delay={0.2} className="mt-12">
                <div className="relative group" data-cursor-expand>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-strata-accent/20 to-strata-primary/20 -rotate-2 transition-transform duration-500 group-hover:rotate-0"
                  />
                  <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 p-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-strata-primary/10 flex items-center justify-center shrink-0">
                        <Users className="w-10 h-10 text-strata-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          Agustin & Gabi Zenuto
                        </h3>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Naples, Florida
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Timeline */}
            <div className="lg:pt-4">
              {timelineData.map((milestone, index) => (
                <TimelineMilestone
                  key={milestone.title}
                  year={milestone.year}
                  title={milestone.title}
                  description={milestone.description}
                  index={index}
                  isLast={index === timelineData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-strata-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "SWFL", label: "Based & Focused" },
              { value: "100", suffix: "%", label: "Residential Focus" },
              { value: "1", label: "Complete Platform" },
              { value: "0", label: "External Tools Needed" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} direction="up">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-strata-accent mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-white/60 text-sm tracking-wide">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Principles that deliver results.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We build software the way you build homes—with intention, precision,
              and an unwavering commitment to quality.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <blockquote className="relative">
              {/* Decorative quote marks */}
              <span className="absolute -top-8 -left-4 text-8xl text-strata-accent/10 font-serif">
                &ldquo;
              </span>
              <p className="quote-text text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8">
                The majority relied on platforms that were prohibitively expensive,
                built for broader markets, and fundamentally misaligned with
                Southwest Florida&apos;s distinctive real estate landscape.
              </p>
              <span className="absolute -bottom-16 -right-4 text-8xl text-strata-accent/10 font-serif">
                &rdquo;
              </span>
            </blockquote>
            <p className="text-muted-foreground mt-8">
              This realization drove us to create something different.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-strata-primary relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(193,113,75,0.4) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(212,184,150,0.3) 0%, transparent 50%)`,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to build on principle?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
              See how Strata can bring clarity and control to your residential
              construction projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
