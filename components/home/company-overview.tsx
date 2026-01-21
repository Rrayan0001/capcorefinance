"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CompanyOverview() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".overview-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-28 mt-8 md:mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - About Us Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overview-card relative w-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-accent aspect-[3/4] max-w-[400px] mx-auto">
              <Image
                src="/images/img2.jpg"
                alt="About Capital Core Finance"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Loan Types Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overview-card relative w-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-accent aspect-[3/4] max-w-[400px] mx-auto">
              <Image
                src="/images/img1.jpg"
                alt="Loan Solutions by Capital Core Finance"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Key Points Below Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            "End-to-end guidance",
            "Best banks & NBFC partners",
            "Documentation assistance",
            "High approval chances",
          ].map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent/50 transition-all"
            >
              <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
              <span className="text-sm font-medium text-foreground">{point}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
