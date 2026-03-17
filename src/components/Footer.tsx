import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 dark:border-white/[0.06] bg-background/80 supports-[backdrop-filter]:backdrop-blur-2xl transition-all duration-500">
      {/* Top edge highlight — mirrors the hero treatment */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 dark:via-white/15 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-6 py-14 md:py-16">
        {/* Main row — vertically centered */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand column */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Arc logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <div>
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Arc
              </span>
              <p className="text-xs text-muted-foreground mt-0.5">
                Project Management for Construction
              </p>
            </div>
          </div>

          {/* Right column — contact + nav */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="mailto:info@arcnaples.com"
              className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-foreground"
            >
              info@arcnaples.com
              <svg
                className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <span className="text-white/15 dark:text-white/10 select-none">/</span>
            <Link
              href="/privacy"
              className="transition-colors duration-300 hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 dark:border-white/[0.06] pt-5">
          <p className="text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} Arc
          </p>
          <p className="text-xs text-muted-foreground/50 hidden sm:block">
            Ready to build on solid ground?
          </p>
        </div>
      </div>
    </footer>
  );
}
