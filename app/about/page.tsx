"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { Users, Award, TrendingUp, MapPin } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const founders = [
  {
    name: "Harshavardhan N",
    role: "Business & Project Finance Expert",
    experience: "3+ years",
    description:
      "With expertise in business lending, project financing, and financial strategy, Harshavardhan has guided numerous clients to secure life-changing loans. His deep understanding of bank relationships and loan structuring has earned trust across the industry.",
  },
  {
    name: "Hase Ashirwad",
    role: "Financial Advisory & Loan Solutions Specialist",
    experience: "3+ years",
    description:
      "Specializing in comprehensive financial advisory, housing finance, and banking relations. Hase has helped clients from diverse backgrounds achieve their financial aspirations through personalized loan solutions.",
  },
  {
    name: "Chandrashekhar Raju",
    role: "CEO, Capital Core Finance",
    experience: "35+ years",
    description:
      "A veteran in the finance industry with over three decades of experience, Mr. Chandrashekhar Raju brings unparalleled expertise in banking, lending, and financial management. His leadership and vision have been instrumental in shaping Capital Core Finance into a trusted name.",
  },
]

const milestones = [
  { icon: Users, value: "500+", label: "Clients Helped" },
  { icon: TrendingUp, value: "₹1000Cr+", label: "Financing Facilitated" },
  { icon: Award, value: "38+", label: "Years Combined Experience" },
  { icon: MapPin, value: "Pan India", label: "Service Coverage" },
]

export default function About() {
  const pageRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered animations for sections
      gsap.utils.toArray<HTMLElement>(".animate-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={pageRef}>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            About Capital Core Finance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90 leading-relaxed"
          >
            38+ years of combined experience, 500+ clients guided, one mission — providing accessible and transparent
            financing solutions for every dream.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-section">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                Capital Core Finance was founded with a simple mission: to make financing accessible and transparent for
                businesses, homebuyers, students, and entrepreneurs. We saw countless individuals struggling with
                complex loan processes, rejections, and unclear guidance across multiple loan categories.
              </p>
              <p className="leading-relaxed">
                Today, we've helped 500+ clients secure funding across business loans, housing, education, machinery,
                and project financing. Every client is treated as a partner, and their success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <motion.div
                  key={milestone.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card p-6 rounded-2xl border border-border text-center shadow-sm hover:shadow-lg transition-all"
                >
                  <Icon className="mx-auto mb-4 text-accent" size={32} />
                  <div className="text-3xl font-bold text-foreground mb-1">{milestone.value}</div>
                  <p className="text-sm text-muted-foreground">{milestone.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-section text-center mb-14">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to helping you achieve your financial goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground text-2xl font-bold mb-6">
                  {founder.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-bold text-xl mb-1 group-hover:text-accent transition-colors">{founder.name}</h3>
                <p className="text-accent font-medium text-sm mb-2">{founder.role}</p>
                <p className="text-xs text-muted-foreground mb-4 inline-flex items-center gap-1">
                  <Award size={14} />
                  {founder.experience} Experience
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{founder.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl opacity-90 mb-8">Schedule a free consultation with our experts today.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-xl"
            >
              Book Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
