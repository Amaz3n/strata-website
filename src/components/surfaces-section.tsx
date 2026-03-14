const features = [
  {
    title: "Drawings & Markups",
    description: "Coordinate sheets, markups, and revisions with full project context.",
  },
  {
    title: "Daily Logs",
    description: "Capture field activity with timestamped photo timelines and structured reports.",
  },
  {
    title: "RFIs & Submittals",
    description: "Route RFIs and submittals through clear, accountable review workflows.",
  },
  {
    title: "Selections",
    description: "Manage client selections with approvals connected to budget and change orders.",
  },
  {
    title: "Change Orders",
    description: "Create, price, and approve change orders with direct links to contracts and billing.",
  },
  {
    title: "Online Payments",
    description: "Send invoices with payment links and collect online via Stripe.",
  },
  {
    title: "Documents & Files",
    description: "Centralized files with version history, accessible in every workflow.",
  },
  {
    title: "Reporting Suite",
    description: "Track AR, AP, draws, forecasts, schedule health, and payment ledgers.",
  },
  {
    title: "Warranty & Closeout",
    description: "Manage closeout checklists and warranty items without losing project history.",
  },
  {
    title: "AI-Powered Search",
    description: "Ask questions across projects and get answers from files, logs, and records.",
  },
]

export function SurfacesSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl">
        {/* Section heading */}
        <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          Everything else, already connected
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-lg text-muted-foreground">
          From first drawing to final warranty, every workflow works together.
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
