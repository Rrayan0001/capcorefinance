"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle, Clock, FileText, CreditCard, ArrowRight } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    number: "01",
    icon: Clock,
    title: "Free Consultation",
    description:
      "We begin with an in-depth consultation to understand your business, financing needs, and goals. This helps us determine the best loan options for your situation.",
    details: [
      "Business overview and revenue details",
      "Loan amount and purpose",
      "Timeline requirements",
      "Previous loan experience",
    ],
  },
  {
    number: "02",
    icon: FileText,
    title: "Document Review & Eligibility",
    description:
      "Our team thoroughly reviews your financial documents and assesses your eligibility across multiple lending options.",
    details: [
      "Financial statement analysis",
      "CIBIL score review",
      "Collateral evaluation",
      "Eligibility determination",
    ],
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Bank Match & Application",
    description:
      "We identify the best-matched banks and lenders for your profile, prepare your application, and manage the entire submission process.",
    details: ["Bank identification", "Application preparation", "Document compilation", "Bank coordination"],
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Approval & Disbursement",
    description:
      "Once approved, we coordinate with the bank to ensure smooth disbursement of your loan and provide post-approval support.",
    details: ["Approval tracking", "Disbursement coordination", "Post-approval support", "Ongoing relationship"],
  },
]

export default function HowItWorks() {
  const heroRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        heroRef.current?.querySelectorAll(".hero-animate"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        },
      )

      // Steps animation
      gsap.fromTo(
        stepsRef.current?.querySelectorAll(".step-item"),
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="hero-animate inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
            Our Process
          </span>
          <h1 className="hero-animate text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
            How It Works
          </h1>
          <p className="hero-animate text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Our proven 4-step process ensures a smooth journey from consultation to loan approval and disbursement.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={stepsRef} className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  className="step-item flex flex-col md:flex-row gap-8 md:gap-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="flex items-center justify-center h-24 w-24 rounded-2xl bg-primary text-primary-foreground text-3xl font-bold shadow-xl shadow-primary/20">
                        {step.number}
                      </div>
                      {/* Connecting line */}
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent mt-4" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-xl">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{step.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <CheckCircle size={16} className="text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-gradient-to-br from-primary to-primary/80 rounded-3xl text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Ready to Get Started?</h3>
              <p className="text-primary-foreground/80 mb-8 text-lg max-w-xl mx-auto">
                Schedule your free consultation with our experts today and take the first step towards funding your
                dreams.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-xl font-semibold hover:bg-background/90 transition-all duration-300 shadow-xl"
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
