"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const taglines = ["Empowering Dreams", "Building Futures", "Funding Growth", "Enabling Success"]

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // GSAP animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.fromTo(headlineRef.current, { opacity: 0, y: 60, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.2 })
        .fromTo(subtextRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          badgesRef.current?.children || [],
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.5 },
          "-=0.3",
        )

      // Parallax effect on scroll
      gsap.to(".hero-bg-circle", {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-gradient-to-br from-primary via-primary/95 to-primary/85 text-primary-foreground overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-bg-circle absolute -top-20 -left-20 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="hero-bg-circle absolute top-1/2 -right-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
        <div className="hero-bg-circle absolute -bottom-32 left-1/3 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-primary-foreground/20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTagline}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-sm font-semibold tracking-wide"
              >
                {taglines[currentTagline]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight text-balance"
          >
            Complete Financing Solutions for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">Every Dream</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-3 bg-accent/30 rounded-full -z-0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subtextRef}
            className="text-lg md:text-xl lg:text-2xl opacity-90 mb-10 leading-relaxed max-w-3xl mx-auto text-balance font-light"
          >
            38+ years of combined expertise helping 500+ businesses and individuals achieve their financial goals
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent/25"
            >
              <span className="relative z-10">Get Pre-Qualified</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/how-it-works"
              className="group px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-xl font-semibold border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              Learn Our Process
            </Link>
          </div>

          {/* Trust Badges */}
          <div ref={badgesRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "500+", label: "Clients Served" },
              { value: "38+", label: "Years Experience" },
              { value: "95%", label: "Approval Rate" },
              { value: "Bengaluru", label: "Based" },
            ].map((badge, i) => (
              <motion.div
                key={badge.label}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative bg-primary-foreground/5 backdrop-blur-md p-5 rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-300"
              >
                <div className="font-bold text-2xl md:text-3xl mb-1">{badge.value}</div>
                <div className="text-sm opacity-70">{badge.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
