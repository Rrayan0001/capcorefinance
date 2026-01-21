"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle parallax on the background
      gsap.to(".hero-bg", {
        y: 50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen h-screen w-full max-w-[100vw] flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="hero-bg absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-[35%_top] md:bg-[center_top] bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
          }}
        />
        {/* Dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#1a1a2e]/90 via-[#1a1a2e]/60 to-[#1a1a2e]/20 md:to-transparent" />
      </div>

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:py-32">
        <div className="flex justify-center md:justify-end">
          <div className="max-w-2xl text-center md:text-right">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="flex items-center gap-2">
                <span className="w-8 h-[2px] rounded-full bg-white shrink-0" />
                <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
              </span>
              <span className="text-sm font-bold tracking-widest text-white uppercase whitespace-nowrap">
                Business Consultant
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                <span className="w-8 h-[2px] rounded-full bg-white shrink-0" />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white"
            >
              Complete Financing{" "}
              <span className="text-accent">Solutions</span>
              <br />
              for Every Dream
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-white/70 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto md:ml-auto md:mr-0"
            >
              18+ years of combined expertise helping 2500+ businesses and individuals achieve their
              financial goals
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-end mb-12"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 premium-btn-gold text-white rounded-full font-semibold text-base transition-all hover:scale-105 w-full sm:w-auto justify-center"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Get Pre-Qualified
              </Link>
              <Link
                href="/how-it-works"
                className="group inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-base transition-all hover:bg-white/20 hover:scale-105 w-full sm:w-auto justify-center"
              >
                Learn Our Process
              </Link>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/10 pt-8"
            >
              <div className="text-center md:text-right">
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">2500+</p>
                <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Clients Served</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">18+</p>
                <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">98%</p>
                <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Approval Rate</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">Bengaluru</p>
                <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Based</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
