"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

type Feature = {
  heading: string
  description: string
  image: string
  imageAlt: string
  aspect?: "5/4" | "16/9"
}

const features: Feature[] = [
  {
    heading: "Mini CRM, Built In",
    description:
      "Arc includes a purpose-built mini CRM for construction teams: capture leads, log touchpoints, manage follow-ups, and move deals into estimating in one flow. Instead of paying for Procore + Salesforce, you run pipeline and project execution inside Arc.",
    image: "/pipeline2.png",
    imageAlt: "Arc Pipeline workspace showing funnel stages, CRM activity, and opportunities",
    aspect: "5/4",
  },
  {
    heading: "Schedule Intelligence",
    description:
      "Visual Gantt scheduling with milestone tracking and benchmark management. Know exactly where every project stands and what's coming next with smart dependencies.",
    image: "/schedule.png",
    imageAlt: "Gantt chart visualization of a project schedule",
    aspect: "5/4",
  },
  {
    heading: "Integrated E-Signing",
    description:
      "Arc has e-signing built directly into your workflow, so contracts and change orders are signed where the work already happens. No separate DocuSign account, extra seat cost, or tool switching required.",
    image: "/signature.png",
    imageAlt: "Arc e-signing workflow showing signature block placement directly inside a PDF",
    aspect: "5/4",
  },
  {
    heading: "Client & Trade Portals",
    description:
      "Arc gives every project a client portal and subcontractor portal for updates, approvals, documents, invoicing, and messaging in one place. Teams move faster with fewer status calls, less inbox churn, and clearer accountability.",
    image: "/client-portal.png",
    imageAlt: "Arc client and subcontractor portals showing project updates, approvals, and communication",
    aspect: "5/4",
  },
  {
    heading: "Financials, Fully Connected",
    description:
      "Track budgets, contracts, retainage, draw schedules, and invoicing in one financial workspace. Arc also handles subcontractor payables and QuickBooks Online sync, so field progress and financials stay aligned.",
    image: "/financials.png",
    imageAlt: "Arc financials workspace showing budgets, contracts, invoicing, and payables",
    aspect: "5/4",
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
          Built for every stage of the build
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
  reversed,
}: {
  heading: string
  description: string
  image: string
  imageAlt: string
  aspect?: "5/4" | "16/9"
  reversed: boolean
}) {
  const aspectClass = aspect === "16/9" ? "aspect-video" : "aspect-[5/4]"
  const cardRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 82%", "start 28%"],
  })

  const headingWords = heading.split(" ")
  const textDrift = useTransform(scrollYProgress, [0, 1], [24, 0])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.55, 0.15])

  return (
    <div
      ref={cardRef}
      className={`group relative grid items-start gap-8 py-16 md:grid-cols-[0.7fr_1.8fr] md:items-end md:gap-12 md:py-24 ${reversed ? "md:[direction:rtl]" : ""}`}
    >
      {/* Text */}
      <div
        className={`relative flex flex-col gap-4 ${reversed ? "md:[direction:ltr]" : ""}`}
      >
        <motion.div
          style={{ opacity: glowOpacity }}
          className="pointer-events-none absolute -inset-x-3 -top-2 h-28 rounded-xl bg-gradient-to-r from-arc-deep-slate/14 via-arc-sky-blue/12 to-transparent blur-2xl"
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
                hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
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
          style={{ y: textDrift }}
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px 0px -90px 0px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {description}
        </motion.p>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full overflow-hidden rounded-2xl ${reversed ? "md:[direction:ltr]" : ""}`}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={imageAlt}
          width={1600}
          height={1280}
          unoptimized
          className={`${aspectClass} w-full bg-slate-950 object-contain object-top`}
        />
      </motion.div>
    </div>
  )
}
