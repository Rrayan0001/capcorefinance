"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { Users, Award, TrendingUp, MapPin } from "lucide-react"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const founders = [
  {
    name: "Chandrashekhar Raju",
    role: "CEO, Capital Core Finance",
    experience: "20+ years",
    image: "/images/ceo-placeholder.jpg",
    initials: "CR",
    description:
      "A veteran in the finance industry with over two decades of experience, Mr. Chandrashekhar Raju brings unparalleled expertise in banking, lending, and financial management. His leadership and vision have been instrumental in shaping Capital Core Finance into a trusted name.",
  },
  {
    name: "Harshavardhan N",
    role: "Business & Project Finance Expert",
    experience: "3+ years",
    image: "/images/harsha.jpeg",
    initials: "HN",
    description:
      "With expertise in business lending, project financing, and financial strategy, Harshavardhan has guided numerous clients to secure life-changing loans. His deep understanding of bank relationships and loan structuring has earned trust across the industry.",
  },
  {
    name: "Hase Ashirwad",
    role: "Financial Advisory & Loan Solutions Specialist",
    experience: "3+ years",
    image: "/images/ashu-20h.jpg",
    initials: "HA",
    description:
      "Specializing in comprehensive financial advisory, housing finance, and banking relations. Hase has helped clients from diverse backgrounds achieve their financial aspirations through personalized loan solutions.",
  },
]

const milestones = [
  { icon: Users, value: "2500+", label: "Clients Helped" },
  { icon: TrendingUp, value: "₹4600Cr+", label: "Financing Facilitated" },
  { icon: Award, value: "18+", label: "Years Combined Experience" },
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
      {/* Hero Section - Bright */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
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
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900"
          >
            About Capital Core Finance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            18+ years of combined experience, 2500+ clients guided, one mission — providing accessible and transparent
            financing solutions for every dream.
          </motion.p>
        </div>
      </section>

      {/* Story Section - Different Background with Visual Separator */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative">
        {/* Decorative separator */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-section">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
                <div className="h-px w-4 sm:w-16 bg-accent/30" />
                <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-accent/60" />
                <span className="text-accent font-medium text-[9px] md:text-xs tracking-widest uppercase">Our Journey</span>
                <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-accent/60" />
                <div className="h-px w-4 sm:w-16 bg-accent/30" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            </div>

            {/* Content with better styling */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
              <div className="prose prose-lg text-gray-600 space-y-6 max-w-none">
                <p className="text-lg leading-relaxed">
                  Capital Core Finance was founded with a simple mission: to make financing accessible and transparent for
                  businesses, homebuyers, students, and entrepreneurs. We saw countless individuals struggling with
                  complex loan processes, rejections, and unclear guidance across multiple loan categories.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we've helped 2500+ clients secure funding across business loans, housing, education, machinery,
                  and project financing. Every client is treated as a partner, and their success is our success.
                </p>

                {/* Key highlights */}
                <div className="grid md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Founded on Trust</h4>
                      <p className="text-sm text-gray-600">Built relationships with 50+ banking partners</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Client-Centric Approach</h4>
                      <p className="text-sm text-gray-600">Personalized solutions for every financial need</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section - Dark */}
      <section className="py-16 bg-black relative overflow-hidden">
        {/* Background Image Layer - Same as Service Section */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/service-bg.png')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  className="bg-[#1c1c2e]/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl hover:border-accent/50 transition-all"
                >
                  <Icon className="mx-auto mb-4 text-accent" size={32} />
                  <div className="text-3xl font-bold text-white mb-1">{milestone.value}</div>
                  <p className="text-sm text-white/60">{milestone.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founders Section - Bright */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-section text-center mb-14">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-accent/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative w-24 h-24 mt-2 rounded-full overflow-hidden mb-6 border-4 border-accent/20 bg-gradient-to-br from-accent/20 to-accent/40">
                  {founder.image && !founder.image.includes('placeholder') ? (
                    <Image src={founder.image} alt={founder.name} fill className="object-cover object-[center_20%]" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4e]">
                      <span className="text-2xl font-bold text-white">{founder.initials}</span>
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-xl mb-1 group-hover:text-accent transition-colors text-gray-900">{founder.name}</h3>
                <p className="text-accent font-medium text-sm mb-2">{founder.role}</p>
                <p className="text-xs text-gray-500 mb-4 inline-flex items-center gap-1">
                  <Award size={14} />
                  {founder.experience} Experience
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">{founder.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background Image Layer - Same as Service Section */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/service-bg.png')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Work With Us?</h2>
            <p className="text-xl text-white/80 mb-8">Schedule a free consultation with our experts today.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-black rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-xl"
            >
              Book Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}