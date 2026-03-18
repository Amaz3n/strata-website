"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type Feature = {
  heading: string
  description: string
  image: string
  imageAlt: string
  aspect?: "5/4" | "16/9"
  eager?: boolean
}

const features: Feature[] = [
  {
    heading: "Pipeline & CRM",
    description:
      "Arc includes a purpose-built CRM for construction teams - capture leads, log touchpoints, manage follow-ups, and move opportunities into estimating without leaving the platform.",
    image: "/pipeline2.webp",
    imageAlt: "Arc Pipeline workspace showing funnel stages, CRM activity, and opportunities",
    aspect: "5/4",
    eager: true,
  },
  {
    heading: "Schedule Intelligence",
    description:
      "Visual Gantt scheduling with milestone tracking and benchmark management. Know exactly where every project stands and what's coming next with smart dependencies.",
    image: "/schedule.webp",
    imageAlt: "Gantt chart visualization of a project schedule",
    aspect: "5/4",
    eager: true,
  },
  {
    heading: "Financial Management",
    description:
      "Track budgets, manage invoices, collect payments, and connect change orders directly to billing.",
    image: "/financials.webp",
    imageAlt: "Arc financials workspace showing budgets, contracts, invoicing, and payables",
    aspect: "5/4",
    eager: true,
  },
  {
    heading: "Client & Vendor Portals",
    description:
      "Give clients and vendors their own dedicated views. Clients can follow the schedule, review and pay invoices, approve change orders, message the project team, and submit punch list items. Vendors get a tailored portal to coordinate on what they need, when they need it.",
    image: "/client-portal.webp",
    imageAlt: "Arc client and subcontractor portals showing project updates, approvals, and communication",
    aspect: "5/4",
    eager: true,
  },
  {
    heading: "Integrated E-Signing",
    description:
      "Contract execution and change order signing are built directly into Arc. No separate account or switching between tools, so every signature lives alongside the project it belongs to.",
    image: "/signature.webp",
    imageAlt: "Arc e-signing workflow showing signature block placement directly inside a PDF",
    aspect: "5/4",
    eager: true,
  },
]

export function FeaturesSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground md:text-5xl"
        >
          One place for the full build lifecycle.
        </motion.h2>

        {/* Feature cards */}
        <div className="mt-16 flex flex-col divide-y divide-border/40">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.heading}
              {...feature}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  heading,
  description,
  image,
  imageAlt,
  aspect = "5/4",
  eager = false,
  reversed,
}: {
  heading: string
  description: string
  image: string
  imageAlt: string
  aspect?: "5/4" | "16/9"
  eager?: boolean
  reversed: boolean
}) {
  const aspectClass = aspect === "16/9" ? "aspect-video" : "aspect-[5/4]"
  const headingWords = heading.split(" ")

  return (
    <div
      className={`group relative grid items-start gap-8 py-16 md:grid-cols-[0.7fr_1.8fr] md:items-end md:gap-12 md:py-24 ${reversed ? "md:[direction:rtl]" : ""}`}
    >
      {/* Text */}
      <div
        className={`relative flex flex-col gap-4 ${reversed ? "md:[direction:ltr]" : ""}`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.45 }}
          viewport={{ once: true, margin: "-80px 0px -110px 0px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="safari-feature-glow pointer-events-none absolute -inset-x-3 -top-2 h-28 rounded-xl bg-gradient-to-r from-arc-deep-slate/14 via-arc-sky-blue/12 to-transparent blur-2xl"
        />
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px -90px 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05,
              },
            },
          }}
          className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl"
          aria-label={heading}
        >
          {headingWords.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              variants={{
                hidden: { opacity: 0, y: 28, filter: "blur(var(--feature-heading-blur, 10px))" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.72,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="inline-block pr-[0.35ch]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 22, filter: "blur(var(--feature-body-blur, 8px))" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px 0px -90px 0px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {description}
        </motion.p>
      </div>

      {/* Image */}
      <div
        className={`relative w-full overflow-hidden rounded-2xl ${reversed ? "md:[direction:ltr]" : ""}`}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={imageAlt}
          width={1600}
          height={1280}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          sizes="(min-width: 1536px) 920px, (min-width: 1024px) 62vw, 100vw"
          quality={82}
          className={`${aspectClass} w-full bg-slate-950 object-contain object-top`}
        />
      </div>
    </div>
  )
}
