"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award, Users, Clock, Headphones, Sparkles } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const reasons = [
  {
    icon: Award,
    title: "Experience That Matters",
    description: "18+ years of combined financial expertise across multiple loan categories",
  },
  {
    icon: Users,
    title: "Proven Results",
    description: "2500+ clients successfully funded with 95% approval rate",
  },
  {
    icon: Clock,
    title: "Tailored Solutions",
    description: "Customized guidance designed for your unique financing needs",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    description: "From documentation to disbursement, we handle every step",
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reason-card",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-32 bg-[#f8f9fc] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent" />
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-accent font-bold text-xs md:text-sm tracking-widest uppercase">Why Choose Us</span>
            </div>

            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight text-[#1a1a2e]">
              Why <span className="gradient-text">2500+ Clients</span> Trust Capital Core
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              Our commitment to excellence and client success drives everything we do. We combine deep expertise with
              personalized service.
            </p>

            {/* Stats row */}
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="flex-shrink-0">
                <div className="text-3xl md:text-4xl font-bold gradient-text">98%</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Approval Rate</div>
              </div>
              <div className="flex-shrink-0">
                <div className="text-3xl md:text-4xl font-bold gradient-text">2500+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Happy Clients</div>
              </div>
              <div className="flex-shrink-0">
                <div className="text-3xl md:text-4xl font-bold gradient-text">18+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Years Combined</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Reason Cards */}
          <div className="space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div key={index} className="reason-card bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6 rounded-2xl flex gap-5 items-start border border-gray-100">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-[#1a1a2e]">{reason.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
