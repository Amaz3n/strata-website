"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"
import { ContactPopover } from "./contact-dialog"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.08)_100%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_100%)] bg-background/62 supports-[backdrop-filter]:backdrop-blur-2xl border-b border-white/20 dark:border-white/10 shadow-[0_8px_30px_rgba(15,23,42,0.18)] transition-all duration-500"
      >
        {/* Animated gradient line at top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 0.35 : 0.85 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="h-full w-full bg-gradient-to-r from-transparent via-arc-sky-blue/50 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:grid md:h-20 md:grid-cols-[1fr_auto_1fr]">
          {/* Logo */}
          <Link href="/" aria-label="Arc home" className="group relative z-10 justify-self-start">
            <motion.div
              className="relative overflow-hidden rounded-xl px-1 py-0.5"
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              variants={{
                rest: { scale: 1, y: 0 },
                hover: { scale: 1.03, y: -1 },
              }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="pointer-events-none absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(91,155,213,0.32)_0%,rgba(91,155,213,0)_70%)] blur-lg"
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="pointer-events-none absolute inset-y-0 -left-16 w-14 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                variants={{
                  rest: { x: 0, opacity: 0 },
                  hover: { x: 132, opacity: [0, 1, 0] },
                }}
                transition={{ duration: 0.65, ease: "easeInOut" }}
              />
              <div className="relative flex items-center gap-2">
                <motion.div
                  variants={{
                    rest: { rotate: 0, scale: 1 },
                    hover: { rotate: -8, scale: 1.08 },
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                >
                  <Image
                    src="/logo.svg"
                    alt="Arc"
                    width={40}
                    height={40}
                    priority
                    className="h-9 w-9 md:h-10 md:w-10"
                  />
                </motion.div>
                <motion.span
                  className="relative text-xl md:text-2xl font-bold tracking-tight text-foreground"
                  variants={{
                    rest: { letterSpacing: "-0.01em" },
                    hover: { letterSpacing: "0.01em" },
                  }}
                  transition={{ duration: 0.25 }}
                >
                  Arc
                  <motion.span
                    className="absolute left-0 right-0 -bottom-1 h-0.5 origin-left rounded-full bg-gradient-to-r from-arc-sky-blue via-white/80 to-arc-ink-blue"
                    variants={{
                      rest: { scaleX: 0, opacity: 0 },
                      hover: { scaleX: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.span>
              </div>
            </motion.div>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-3 justify-self-end md:col-start-3">
            <ThemeToggle />

            {/* Desktop Contact Button */}
            <ContactPopover>
              <motion.button
                type="button"
                className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground rounded-lg hover:bg-foreground/5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact
              </motion.button>
            </ContactPopover>

            {/* Desktop Login Button */}
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="https://app.arcnaples.com"
                className="btn-cta group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg overflow-hidden bg-arc-sky-blue text-white shadow-[0_8px_24px_-16px_rgba(47,111,237,0.9)] hover:shadow-[0_14px_30px_-18px_rgba(47,111,237,0.95)]"
              >
                <span className="relative z-10">Log in</span>
                <svg
                  className="btn-cta-icon relative z-10 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden hover:bg-foreground/5 transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <motion.span
                  className="block h-0.5 w-full bg-current rounded-full origin-center"
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-current rounded-full"
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 w-full bg-current rounded-full origin-center"
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Scroll progress indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-arc-ink-blue via-arc-sky-blue to-arc-ink-blue"
          style={{
            scaleX: useScroll().scrollYProgress,
            transformOrigin: "left",
          }}
        />
      </motion.header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Background layers with staggered reveal */}
            <motion.div
              className="absolute inset-0 bg-arc-deep-slate"
              variants={{
                closed: { clipPath: "circle(0% at calc(100% - 40px) 32px)" },
                open: { clipPath: "circle(150% at calc(100% - 40px) 32px)" },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Blueprint grid background */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                backgroundImage: `
                  linear-gradient(rgba(91, 155, 213, 0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(91, 155, 213, 0.08) 1px, transparent 1px),
                  linear-gradient(rgba(91, 155, 213, 0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(91, 155, 213, 0.04) 1px, transparent 1px)
                `,
                backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
              }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col text-white">
              {/* Header */}
              <div className="flex items-center justify-between p-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="Arc" width={40} height={40} className="h-10 w-10" />
                    <span className="text-2xl font-bold tracking-tight text-white">Arc</span>
                  </div>
                </motion.div>
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className="relative w-10 h-10 flex items-center justify-center"
                  aria-label="Close menu"
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Animated close button */}
                  <motion.div
                    className="absolute inset-0 border border-white/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center px-6">
                <div className="space-y-2">
                  {/* Contact in mobile menu */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <a
                      href="mailto:info@arcnaples.com"
                      onClick={() => setMenuOpen(false)}
                      className="group relative flex items-center py-4"
                    >
                      <span className="text-xs font-mono text-arc-sky-blue/80 w-8">
                        01
                      </span>
                      <motion.span
                        className="w-8 h-[1px] bg-white/20 mr-4 origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                      />
                      <span className="text-4xl font-bold tracking-tight group-hover:text-arc-sky-blue transition-colors duration-300">
                        Contact
                      </span>
                      <motion.svg
                        className="w-6 h-6 ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                      <motion.div
                        className="absolute inset-0 -z-10 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </motion.div>
                </div>
              </nav>

              {/* Bottom section */}
              <div className="p-6 space-y-6">
                {/* Login button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href="https://app.arcnaples.com"
                    onClick={() => setMenuOpen(false)}
                    className="group relative flex items-center justify-center gap-3 w-full px-6 py-4 bg-arc-sky-blue text-white font-medium rounded-lg overflow-hidden"
                  >
                    {/* Animated border */}
                    <motion.span
                      className="absolute inset-0 border border-white/20 rounded-lg"
                      animate={{ opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Shimmer */}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />

                    <span className="relative text-lg">Log in</span>
                    <motion.svg
                      className="relative w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </Link>
                </motion.div>

                {/* Decorative footer */}
                <motion.div
                  className="flex items-center justify-center text-xs text-white/40 font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <span>Built for Builders</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
