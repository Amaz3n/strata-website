"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/product", label: "Product" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="relative bg-arc-primary text-white overflow-hidden">
      {/* Accent line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-arc-accent to-transparent" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative">
        {/* Large Typography Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              {/* Large Brand Text */}
              <div className="flex-1">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-white/40 text-xs uppercase tracking-[0.2em] mb-3"
                >
                  Project Management for Construction
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                    ARC
                  </span>
                </motion.h2>
              </div>

              {/* CTA - aligned to top */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:text-right md:pt-1"
              >
                <p className="text-white/50 text-sm mb-4 max-w-xs md:ml-auto">
                  Ready to build on solid ground?
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-arc-accent text-arc-primary px-6 py-3 font-semibold transition-all duration-300 hover:bg-arc-accent-light hover:gap-4"
                >
                  Schedule a Demo
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {footerLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="group relative text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-arc-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Legal + Copyright */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 text-xs text-white/40">
              <div className="flex items-center gap-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-white/60 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <span className="hidden md:inline text-white/20">·</span>
              <p>&copy; {new Date().getFullYear()} Arc</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
