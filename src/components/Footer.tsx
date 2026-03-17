import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/20 dark:border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.08)_100%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_100%)] bg-background/62 supports-[backdrop-filter]:backdrop-blur-2xl shadow-[0_-8px_30px_rgba(15,23,42,0.18)] transition-all duration-500">
      <div className="max-w-screen-xl mx-auto px-6 py-10 md:py-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Arc logo"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="text-2xl font-semibold tracking-tight text-foreground">
                Arc
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              &quot;Project Management for Construction&quot;
            </p>
            <p className="text-base text-foreground">
              Ready to build on solid ground?
            </p>
          </div>

          <a
            href="mailto:info@arcnaples.com"
            className="group inline-flex items-center gap-2.5 bg-foreground text-background px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Schedule a Demo
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

        <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Arc</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors duration-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
