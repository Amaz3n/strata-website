"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import {
  LayoutDashboard,
  DollarSign,
  Calendar,
  FileText,
  Smartphone,
  Users,
  ClipboardList,
  Home,
  Check,
  ChevronRight,
  Layers,
  Shield,
  Zap,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Feature data
const features = [
  {
    id: "lifecycle",
    icon: LayoutDashboard,
    title: "Project Lifecycle",
    shortTitle: "Lifecycle",
    description: "Track every project from initial inquiry through warranty periods and beyond.",
    fullDescription:
      "Sales pipeline management transitions seamlessly into active project dashboards. Upon completion, projects move into warranty tracking or optional estate management for ongoing homeowner services. Nothing falls through transitions between phases—your entire client relationship exists in one continuous record.",
    bullets: [
      "Lead tracking and qualification",
      "Sales pipeline visualization",
      "Project status dashboards",
      "Milestone and phase tracking",
      "Warranty management tools",
      "Estate management transition",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "financial",
    icon: DollarSign,
    title: "Financial Tools",
    shortTitle: "Financial",
    description: "Integrated estimating with real-time cost tracking and QuickBooks sync.",
    fullDescription:
      "Generate detailed estimates directly within the platform. As projects progress, track actual costs against projections. Change orders integrate automatically into project financials. Two-way QuickBooks synchronization ensures your accounting remains current without manual data entry.",
    bullets: [
      "Integrated estimating tools",
      "Budget tracking and cost management",
      "Change order financial integration",
      "Two-way QuickBooks synchronization",
      "Project profitability analysis",
      "Financial reporting across projects",
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "scheduling",
    icon: Calendar,
    title: "Scheduling",
    shortTitle: "Scheduling",
    description: "Gantt-style scheduling with task dependencies and milestone tracking.",
    fullDescription:
      "Clear visualization of project timelines, task dependencies, and critical milestones. Set benchmarks for key phases. Track progress against established timelines. Identify potential delays before they impact completion dates. Your entire team operates from the same schedule.",
    bullets: [
      "Gantt chart project visualization",
      "Milestone and benchmark setting",
      "Task dependency mapping",
      "Timeline adjustment and scenario planning",
      "Progress tracking against schedule",
      "Team-wide schedule visibility",
    ],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: "documents",
    icon: FileText,
    title: "Documents",
    shortTitle: "Documents",
    description: "Complete document management with markup, versioning, and e-signatures.",
    fullDescription:
      "Store, organize, and manage all project documentation within each project's dashboard. Upload and markup construction drawings. Track revisions with complete version history. Process contracts and change orders with integrated e-signature functionality.",
    bullets: [
      "Drawing upload and organization",
      "Plan markup tools",
      "Revision tracking and version control",
      "Integrated e-signature",
      "Document permissions and access control",
      "Searchable document repository",
    ],
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Access",
    shortTitle: "Mobile",
    description: "Field-ready mobile tools for daily logs, photos, and real-time updates.",
    fullDescription:
      "Your field teams access critical tools directly from their mobile devices. Submit daily logs with photo documentation. Record site conditions, progress updates, and challenges in real-time. Access current drawings and project information without returning to the office.",
    bullets: [
      "Daily log submission with photos",
      "Real-time progress documentation",
      "Contact management and communication",
      "Drawing and document access",
      "Task and schedule viewing",
      "Offline functionality",
    ],
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: "client-portal",
    icon: Users,
    title: "Client Portal",
    shortTitle: "Portal",
    description: "Professional client portals with customizable access permissions.",
    fullDescription:
      "Provide clients with professional access to their project information through customized portals. You determine exactly what each client sees—project schedules, daily logs with photos, change orders, draw schedules, general messages, or any combination.",
    bullets: [
      "Selective access permissions by client",
      "Change order submission and approval",
      "Draw schedule visibility",
      "Project timeline and milestone viewing",
      "Photo gallery access with approval controls",
      "Integrated messaging within the platform",
    ],
    gradient: "from-sky-500/20 to-blue-500/20",
  },
];

// Workflow steps
const workflowSteps = [
  { icon: Target, label: "Lead", description: "Capture & qualify" },
  { icon: DollarSign, label: "Estimate", description: "Scope & price" },
  { icon: Calendar, label: "Schedule", description: "Plan & assign" },
  { icon: Layers, label: "Build", description: "Execute & track" },
  { icon: Shield, label: "Complete", description: "Handoff & warranty" },
  { icon: Home, label: "Maintain", description: "Ongoing service" },
];

// Platform stats
const stats = [
  { value: "1", label: "Unified Platform", suffix: "" },
  { value: "8", label: "Core Modules", suffix: "+" },
  { value: "100", label: "Residential Focus", suffix: "%" },
  { value: "0", label: "External Tools Needed", suffix: "" },
];

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value);
      if (!isNaN(numericValue)) {
        let start = 0;
        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
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

// Feature card component with hover effects
function FeatureCard({
  feature,
  index,
  isSelected,
  onSelect,
}: {
  feature: typeof features[0];
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const Icon = feature.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onSelect}
      className={cn(
        "group relative w-full text-left p-6 transition-all duration-500",
        "border bg-white",
        isSelected
          ? "border-arc-accent shadow-xl shadow-arc-accent/10"
          : "border-slate-200 hover:border-slate-300 hover:shadow-lg"
      )}
      data-cursor-expand
    >
      {/* Gradient background on hover/select */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-br",
          feature.gradient,
          isSelected ? "opacity-100" : "group-hover:opacity-50"
        )}
      />

      {/* Accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-arc-accent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isSelected ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div
            className={cn(
              "w-12 h-12 flex items-center justify-center transition-colors duration-300",
              isSelected ? "bg-arc-accent" : "bg-arc-primary/10 group-hover:bg-arc-primary/20"
            )}
          >
            <Icon className={cn("w-6 h-6 transition-colors", isSelected ? "text-white" : "text-arc-primary")} />
          </div>
          <ChevronRight
            className={cn(
              "w-5 h-5 transition-all duration-300",
              isSelected ? "text-arc-accent rotate-90" : "text-slate-300 group-hover:text-slate-400"
            )}
          />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>
    </motion.button>
  );
}

// Feature detail panel
function FeatureDetail({ feature }: { feature: typeof features[0] }) {
  const Icon = feature.icon;

  return (
    <motion.div
      key={feature.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <div className="sticky top-32">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-arc-accent flex items-center justify-center">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">{feature.fullDescription}</p>

        {/* Bullets */}
        <div className="space-y-3">
          {feature.bullets.map((bullet, idx) => (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-3"
            >
              <div className="w-5 h-5 bg-arc-accent/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                <Check className="w-3 h-3 text-arc-accent" />
              </div>
              <span className="text-foreground">{bullet}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Workflow step component with enhanced scroll animation
function WorkflowStep({
  step,
  index,
  total,
}: {
  step: typeof workflowSteps[0];
  index: number;
  total: number;
}) {
  const Icon = step.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className="flex flex-col items-center relative group"
    >
      {/* Connector line */}
      {index < total - 1 && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px]">
          <motion.div
            className="h-full bg-gradient-to-r from-arc-accent to-arc-accent/50"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      )}

      {/* Animated ring behind icon */}
      <motion.div
        className="absolute top-0 w-16 h-16"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: [0, 1.3, 1], opacity: [0, 0.3, 0] } : {}}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
      >
        <div className="w-full h-full border-2 border-arc-accent rounded-none" />
      </motion.div>

      {/* Icon */}
      <motion.div
        className="w-16 h-16 bg-white border-2 border-arc-primary/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-arc-accent group-hover:shadow-lg group-hover:shadow-arc-accent/20 relative z-10"
        initial={{ rotate: -10 }}
        animate={isInView ? { rotate: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
        whileHover={{ scale: 1.05, rotate: 3 }}
      >
        <Icon className="w-7 h-7 text-arc-primary transition-colors group-hover:text-arc-accent" />
      </motion.div>

      {/* Label */}
      <motion.h4
        className="font-semibold text-foreground mb-1"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
      >
        {step.label}
      </motion.h4>
      <motion.p
        className="text-sm text-muted-foreground text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
      >
        {step.description}
      </motion.p>
    </motion.div>
  );
}

export default function ProductPage() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-12 bg-arc-primary overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          {/* Subtle gradient orbs */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(193,113,75,0.4) 0%, transparent 70%)",
              right: "10%",
              top: "-20%",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, rgba(212,184,150,0.4) 0%, transparent 70%)",
              left: "5%",
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
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Stop juggling systems.<br />
              <span className="text-arc-accent">Start building with Arc.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              One platform for your entire construction workflow.
            </p>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom- left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Workflow Section */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for the entire project lifecycle.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Arc handles everything—lead qualification, estimates, construction tracking, client communication, and post-construction service.
            </p>
          </AnimatedSection>

          {/* Workflow visualization */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
            {workflowSteps.map((step, index) => (
              <WorkflowStep
                key={step.label}
                step={step}
                index={index}
                total={workflowSteps.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Interactive Showcase */}
      <section id="features" className="py-24 lg:py-32 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eight integrated modules working together to eliminate the fragmentation
              that undermines project success.
            </p>
          </AnimatedSection>

          {/* Interactive feature grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Feature cards - left side */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  index={index}
                  isSelected={selectedFeature === index}
                  onSelect={() => setSelectedFeature(index)}
                />
              ))}
            </div>

            {/* Feature detail - right side */}
            <div className="lg:col-span-3 bg-white p-8 lg:p-12 border border-slate-200">
              <FeatureDetail feature={features[selectedFeature]} />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 lg:py-32 bg-background-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built to grow with you.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Arc adapts to your business—not the other way around.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Custom Development",
                description:
                  "Need a feature specific to your workflow? Arc's team can build custom modules tailored to how your business operates.",
              },
              {
                icon: Shield,
                title: "Dedicated Support",
                description:
                  "Local, construction-focused support from a team that understands your industry. No generic help desks or overseas call centers.",
              },
              {
                icon: Layers,
                title: "Seamless Migration",
                description:
                  "Transitioning from spreadsheets or other tools? We handle the migration so you can focus on building.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div
                    className="group bg-white p-8 border border-slate-200 transition-all duration-300 hover:border-arc-accent hover:shadow-lg h-full"
                    data-cursor-expand
                  >
                    <div className="w-14 h-14 bg-arc-primary/5 flex items-center justify-center mb-6 transition-colors group-hover:bg-arc-accent/10">
                      <Icon className="w-7 h-7 text-arc-primary transition-colors group-hover:text-arc-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-arc-primary relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(193,113,75,0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(212,184,150,0.2) 0%, transparent 50%)`,
            }}
          />
          <motion.div
            className="absolute w-96 h-96 border border-white/5"
            style={{ top: "10%", left: "5%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10">
              See Arc in action.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton
                href="/contact"
                variant="outline"
                size="lg"
                magneticStrength={0.25}
              >
                Schedule Demo
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
