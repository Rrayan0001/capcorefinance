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
    description: "26+ years of combined financial expertise across multiple loan categories",
  },
  {
    icon: Users,
    title: "Proven Results",
    description: "500+ clients successfully funded with 95% approval rate",
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
    <section ref={sectionRef} className="py-24 md:py-32 section-gradient-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/5 px-5 py-2.5 rounded-full border border-primary/10">
              <Sparkles className="w-4 h-4" />
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
              Why <span className="gradient-text">500+ Clients</span> Trust Capital Core
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our commitment to excellence and client success drives everything we do. We combine deep expertise with
              personalized service.
            </p>

            {/* Stats row */}
            <div className="flex gap-8">
              <div>
                <div className="text-4xl font-bold gradient-text">98%</div>
                <div className="text-sm text-muted-foreground mt-1">Approval Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">26+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Combined</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Reason Cards */}
          <div className="space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div key={index} className="reason-card premium-card p-6 rounded-2xl flex gap-5 items-start">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
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
