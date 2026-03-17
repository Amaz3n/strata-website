export function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_8%_0%,rgba(5,7,82,0.14)_0%,rgba(5,7,82,0)_60%),radial-gradient(80%_120%_at_92%_100%,rgba(47,162,190,0.12)_0%,rgba(47,162,190,0)_58%),linear-gradient(135deg,rgba(5,7,82,0.1)_0%,rgba(47,162,190,0.1)_100%)]" />
      <div className="mx-auto max-w-screen-xl">
        <div className="relative">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Designed for builders who lead with craft
            </h2>
            <p className="mt-5 max-w-lg text-balance text-lg text-muted-foreground">
              Arc is optimized for custom builders and remodelers who prioritize quality over volume. Simple, connected project management made for the way you actually work.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <a
                href="mailto:info@arcnaples.com"
                className="group inline-flex items-center gap-2.5 bg-foreground text-background px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
              >
                Book a Demo
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
