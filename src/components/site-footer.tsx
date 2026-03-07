import Link from "next/link"

const footerLinks = {
  Product: ["Overview", "Pricing", "Updates"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Terms of Use", "Privacy Policy", "Cookie Policy"],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-foreground">{category}</h4>
              <nav className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground transition-all duration-300">
                ARC
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of use
            </Link>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy policy
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Arc</p>
        </div>
      </div>
    </footer>
  )
}