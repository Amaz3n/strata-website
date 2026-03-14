import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/20 dark:border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.08)_100%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_100%)] bg-background/62 supports-[backdrop-filter]:backdrop-blur-2xl shadow-[0_-8px_30px_rgba(15,23,42,0.18)] transition-all duration-500">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Arc
          </p>

          <nav className="flex items-center gap-5 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors duration-300">
              Terms
            </Link>
            <a
              href="mailto:info@arcnaples.com"
              className="hover:text-foreground transition-colors duration-300"
            >
              Schedule a Demo
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
