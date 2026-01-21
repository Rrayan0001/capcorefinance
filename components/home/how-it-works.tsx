"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, MessageSquare, FileSearch, Building2, CheckCircle2, Sparkles } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    description: "We understand your business needs and loan requirements through a detailed discussion",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Document Review",
    description: "We analyze your financial profile, documentation and determine eligibility",
  },
  {
    number: "03",
    icon: Building2,
    title: "Bank Coordination",
    description: "We manage your application and negotiate with banks on your behalf",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Approval & Funds",
    description: "You receive your loan approval and funds to achieve your goals",
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".step-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
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
    <section
      ref={sectionRef}
      className="py-16 md:py-32 bg-gradient-to-b from-primary via-primary/95 to-primary relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-white/10 px-5 py-2.5 rounded-full border border-white/10">
            <Sparkles className="w-4 h-4" />
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-primary-foreground">How It Works</h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Our simple 4-step process to get your financing approved quickly and efficiently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 md:mb-14">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="step-card relative">
                <div className="glass-dark p-8 rounded-3xl h-full relative overflow-hidden group hover:bg-white/15 transition-all duration-500">
                  {/* Step number badge */}
                  <div className="absolute top-4 right-4 text-5xl font-bold text-white/5 group-hover:text-accent/20 transition-colors">
                    {step.number}
                  </div>

                  <div className="relative">
                    <div className="mb-6 inline-flex p-4 bg-accent/20 rounded-2xl group-hover:bg-accent/30 transition-colors">
                      <Icon className="text-accent" size={28} />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-primary-foreground">{step.title}</h3>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/50 to-accent/20" />
                )}
              </div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-semibold hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 group"
          >
            Learn Our Detailed Process
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
