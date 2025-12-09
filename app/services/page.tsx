"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowRight,
  Building2,
  Landmark,
  Home,
  GraduationCap,
  Truck,
  TrendingUp,
  Store,
  Factory,
  HardHat,
  Hotel,
} from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const loanCategories = [
  {
    slug: "business-loans",
    icon: Building2,
    title: "Business Loans",
    shortDesc: "Funding for your business growth",
    description:
      "Comprehensive financing for MSME, SME, companies, shops, retail stores, and commercial enterprises. Working capital, expansion loans, and more.",
    subTypes: [
      { icon: Store, label: "MSME & SME Loans" },
      { icon: Building2, label: "Corporate Financing" },
      { icon: Factory, label: "Shops & Retail" },
    ],
  },
  {
    slug: "project-loans",
    icon: Landmark,
    title: "Project Loans",
    shortDesc: "Construction & development financing",
    description:
      "Site purchase loans, flat purchase loans, construction financing, resort development, commercial building, and business infrastructure setup loans.",
    subTypes: [
      { icon: HardHat, label: "Site & Flat Purchase" },
      { icon: Landmark, label: "Construction Loans" },
      { icon: Hotel, label: "Resort & Commercial Setup" },
    ],
  },
  {
    slug: "housing-loans",
    icon: Home,
    title: "Housing Loans",
    shortDesc: "Your dream home affordable",
    description:
      "Make homeownership dreams a reality with flexible housing loan solutions. Home purchases, property improvements, and refinancing options.",
    subTypes: [
      { icon: Home, label: "Home Purchase" },
      { icon: Home, label: "Renovation" },
      { icon: Home, label: "Balance Transfer" },
    ],
  },
  {
    slug: "education-loans",
    icon: GraduationCap,
    title: "Education Loans",
    shortDesc: "Invest in your future",
    description:
      "Pursue higher education without financial stress. Covers tuition fees, accommodation, books, and living expenses for domestic and international studies.",
    subTypes: [
      { icon: GraduationCap, label: "Domestic Studies" },
      { icon: GraduationCap, label: "International" },
      { icon: GraduationCap, label: "Professional Courses" },
    ],
  },
  {
    slug: "machinery-loans",
    icon: Truck,
    title: "Machinery & Equipment Loans",
    shortDesc: "Upgrade your assets",
    description:
      "Finance industrial machinery, agricultural equipment, commercial vehicles, and inventory. Equipment-specific financing solutions for growth.",
    subTypes: [
      { icon: Truck, label: "Industrial Machinery" },
      { icon: Truck, label: "Equipment" },
      { icon: Truck, label: "Inventory Funding" },
    ],
  },
  {
    slug: "restructuring",
    icon: TrendingUp,
    title: "Loan Restructuring",
    shortDesc: "Fix existing loan challenges",
    description:
      "Facing loan issues, NPA cases, or rejections? We restructure loans, improve credit scores, and resolve banking problems through expert negotiations.",
    subTypes: [
      { icon: TrendingUp, label: "NPA Resolution" },
      { icon: TrendingUp, label: "Credit Improvement" },
      { icon: TrendingUp, label: "Debt Consolidation" },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Services() {
  const heroRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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

      // Cards scroll animation
      gsap.fromTo(
        cardsRef.current?.querySelectorAll(".service-card"),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
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
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="hero-animate inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
            Our Services
          </span>
          <h1 className="hero-animate text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
            Our Loan Products & Services
          </h1>
          <p className="hero-animate text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Complete financing solutions tailored to your unique needs. Whether you're growing a business, buying a
            home, pursuing education, or upgrading equipment — we have the perfect loan solution for you.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={cardsRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {loanCategories.map((service) => {
              const Icon = service.icon
              return (
                <motion.div key={service.slug} variants={cardVariants} className="service-card">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative block p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="text-primary" size={28} />
                      </div>

                      <h2 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-sm text-primary/80 font-medium mb-3">{service.shortDesc}</p>
                      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.description}</p>

                      {/* Sub-types */}
                      <div className="space-y-2 mb-6">
                        {service.subTypes.map((sub, idx) => {
                          const SubIcon = sub.icon
                          return (
                            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <SubIcon size={14} className="text-primary/60" />
                              <span>{sub.label}</span>
                            </div>
                          )
                        })}
                      </div>

                      <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                        Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Not Sure Which Loan You Need?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experts will analyze your requirements and recommend the best financing solution. Get a free
              consultation today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              Book Free Consultation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
