const features = [
  {
    title: "Drawings & Markups",
    description: "Upload sets, pin issues, mark up sheets, and track revisions — all inside the project.",
  },
  {
    title: "Daily Logs",
    description: "Capture field activity with timestamped photo timelines and structured daily reports.",
  },
  {
    title: "RFIs & Submittals",
    description: "Route requests for information and submittal packages through structured review workflows.",
  },
  {
    title: "Selections",
    description: "Manage client selections with approval flows that connect directly to budgets and change orders.",
  },
  {
    title: "Change Orders",
    description: "Create, price, and route change orders through client approval — linked to contracts and billing.",
  },
  {
    title: "Online Payments",
    description: "Send invoices with payment links. Clients pay online via Stripe — no phone calls required.",
  },
  {
    title: "Documents & Files",
    description: "Centralized file management with version history. Attach documents across any workflow.",
  },
  {
    title: "Reporting Suite",
    description: "AR aging, AP aging, draw status, forecast, schedule, payments ledger, and change-order logs.",
  },
  {
    title: "Warranty & Closeout",
    description: "Track warranty items and manage closeout checklists after the build is complete.",
  },
  {
    title: "AI-Powered Search",
    description: "Ask questions across your projects. Arc surfaces answers from documents, logs, and history.",
  },
]

export function SurfacesSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl">
        {/* Section heading */}
        <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          And everything else you need
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-lg text-muted-foreground">
          Arc covers the full build lifecycle — from first drawing to final warranty item.
        </p>

        {/* Feature grid */}
        <div className="mt-16 grid gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-background p-6 transition-colors duration-300 hover:bg-muted/50"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
