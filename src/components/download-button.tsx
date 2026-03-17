export function DownloadButton({ variant = "default" }: { variant?: "default" | "outline" }) {
  if (variant === "outline") {
    return (
      <a
        href="mailto:hello@arc.build"
        className="btn-cta inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
      >
        Book a Demo
      </a>
    )
  }

  return (
    <a
      href="mailto:hello@arc.build"
      className="btn-cta btn-cta-light inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
    >
      Book a Demo
      <svg className="btn-cta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  )
}
