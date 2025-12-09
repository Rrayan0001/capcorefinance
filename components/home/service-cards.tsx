"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Building2, Landmark, Home, GraduationCap, Truck } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    icon: Building2,
    title: "Business Loans",
    description:
      "Comprehensive financing solutions for MSME, SME, companies, shops, retail stores, and commercial enterprises of all sizes",
    href: "/services/business-loans",
    highlights: ["MSME & SME", "Companies & Corporates", "Shops & Retail", "Working Capital"],
  },
  {
    icon: Landmark,
    title: "Project Loans",
    description:
      "Site purchase, flat purchase, construction, resort development, commercial building, and business infrastructure setup financing",
    href: "/services/project-loans",
    highlights: ["Site Purchase", "Flat Purchase", "Construction", "Resort & Commercial"],
  },
  {
    icon: Home,
    title: "Housing Loans",
    description:
      "Your dream home made affordable with flexible financing and competitive interest rates for purchase and renovation",
    href: "/services/housing-loans",
    highlights: ["Home Purchase", "Renovation", "Balance Transfer"],
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    description:
      "Hassle-free education financing for domestic and international academic aspirations at top institutions",
    href: "/services/education-loans",
    highlights: ["Domestic", "International", "Professional Courses"],
  },
  {
    icon: Truck,
    title: "Machinery & Equipment",
    description:
      "Industrial machinery, agricultural equipment, commercial vehicles, and inventory financing for business growth",
    href: "/services/machinery-loans",
    highlights: ["Industrial", "Equipment", "Inventory"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function ServiceCards() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={headingRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full"
          >
            Our Services
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">Our Core Loan Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive financing solutions across multiple categories — tailored to your unique needs and aspirations
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.href} variants={cardVariants}>
                <Link
                  href={service.href}
                  className="group relative block p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                      Learn More{" "}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
          >
            View All Loan Products
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
