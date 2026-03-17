import Image from "next/image"
import { DownloadButton } from "./download-button"

export function HeroSection() {
  return (
    <section className="relative isolate flex flex-col items-center px-6 pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Stack */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none hero-bg-fade">
        {/* 1. Abstract gradient background with theme crossfade */}
        <div className="absolute inset-0 z-0 hero-abstract-gradient-light opacity-100 dark:opacity-0 transition-opacity duration-700 ease-out" />
        <div className="absolute inset-0 z-0 hero-abstract-gradient-dark opacity-0 dark:opacity-100 transition-opacity duration-700 ease-out" />

        {/* 2. Grid Pattern - subtle texture on top of the image but below the rays */}
        <div
          className="absolute inset-0 z-20 grid-pattern opacity-55"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 28% 13% at 50% 21%, transparent 0%, transparent 58%, black 100%)",
            maskImage:
              "radial-gradient(ellipse 28% 13% at 50% 21%, transparent 0%, transparent 58%, black 100%)",
          }}
        />
      </div>

      <h1 className="relative z-10 text-balance text-center text-6xl font-semibold tracking-tight text-foreground md:text-8xl lg:text-9xl drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] font-geist">
        Arc
      </h1>

      <p className="relative z-10 mt-6 max-w-xl text-balance text-center text-lg text-muted-foreground md:text-xl font-geist">
        Lead tracking, scheduling, contracts, and warranty management in a single, unhurried workspace.
      </p>

      <div className="relative z-10 mt-8">
        <DownloadButton />
      </div>

      {/* Hero Image */}
      <div className="relative z-10 mt-16 w-full max-w-7xl">
        {/* Glow effect behind the image */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-xl animate-glow-pulse" />

        {/* Image container with shine effect */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-white/5 bg-black/50 backdrop-blur-sm">
          {/* Shine overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <div className="absolute -inset-full w-[200%] h-[200%] animate-shine bg-gradient-to-r from-transparent via-white/8 to-transparent" />
          </div>

          {/* Top edge highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />

          <Image
            src="/controltower.png"
            alt="Arc interface showing unified construction operations"
            width={1920}
            height={1080}
            className="w-full relative"
            priority
          />
        </div>
      </div>
    </section>
  )
}
