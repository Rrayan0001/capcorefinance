"use client"

import { Building2, Landmark, Home, GraduationCap, Truck, TrendingUp } from "lucide-react"
import { Carousel3D } from "@/components/ui/carousel-3d"

const services = [
  {
    icon: Building2,
    title: "Business Loans",
    description:
      "Comprehensive financing solutions for MSME, SME, companies, shops, retail stores, and commercial enterprises",
    href: "/services/business-loans",
    highlights: ["MSME & SME", "Companies & Corporates", "Shops & Retail", "Working Capital"],
    image: "/assets/business-loans.png",
  },
  {
    icon: Landmark,
    title: "Project Loans",
    description:
      "Site purchase, flat purchase, construction, resort development, and business infrastructure financing",
    href: "/services/project-loans",
    highlights: ["Site Purchase", "Flat Purchase", "Construction", "Resort & Commercial"],
    image: "/assets/project-loans.png",
  },
  {
    icon: Home,
    title: "Housing Loans",
    description: "Your dream home made affordable with flexible financing and competitive interest rates",
    href: "/services/housing-loans",
    highlights: ["Home Purchase", "Renovation", "Balance Transfer"],
    image: "/assets/housing-loans.png",
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    description: "Hassle-free education financing for domestic and international academic aspirations",
    href: "/services/education-loans",
    highlights: ["Domestic", "International", "Professional Courses"],
    image: "/assets/education-loans.png",
  },
  {
    icon: Truck,
    title: "Machinery & Equipment",
    description: "Industrial machinery, agricultural equipment, commercial vehicles, and inventory financing",
    href: "/services/machinery-loans",
    highlights: ["Industrial", "Equipment", "Inventory"],
    image: "/assets/machinery-loans.png",
  },
  {
    icon: Building2,
    title: "MSME Funding",
    description: "Government-backed MSME schemes including Mudra, CGTMSE, and specialized micro-enterprise financing",
    href: "/services/business-loans",
    highlights: ["Mudra Loans", "CGTMSE", "Collateral-Free", "Quick Approval"],
    image: "/assets/business-loans.png",
  },
  {
    icon: Landmark,
    title: "Government Schemes",
    description: "Access various government schemes like PMEGP, Stand-up India, and state-specific financing programs",
    href: "/services/business-loans",
    highlights: ["PMEGP", "Stand-up India", "State Schemes", "Subsidized Rates"],
    image: "/assets/project-loans.png",
  },
  {
    icon: TrendingUp,
    title: "AIF & Private Equity",
    description: "Alternative Investment Fund and Private Equity solutions for large-scale business expansion and growth",
    href: "/services/project-loans",
    highlights: ["AIF Category I/II", "Private Equity", "Venture Capital", "Growth Funding"],
    image: "/assets/project-loans.png",
  },
]

export default function ServiceCards() {
  // Transform services data for carousel
  const carouselSlides = services.map((service) => ({
    title: service.title,
    button: "Learn More",
    src: service.image,
    description: service.description,
    href: service.href,
  }))

  return (
    <section className="py-8 md:py-12 relative overflow-hidden rounded-t-[40px] md:rounded-t-[100px] mt-0 z-20 flex flex-col bg-black">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/service-bg.png')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
            <div className="h-px w-4 sm:w-16 bg-white/30" />
            <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/60" />
            <span className="text-white/80 font-medium text-[9px] md:text-xs tracking-widest uppercase">Our Services</span>
            <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/60" />
            <div className="h-px w-4 sm:w-16 bg-white/30" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight px-4">
            Our Core <span className="text-accent italic">Loan Products</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base px-4 leading-relaxed">
            Comprehensive financing solutions across multiple categories
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="py-8 md:py-12">
          <Carousel3D slides={carouselSlides} />
        </div>
      </div>
    </section>
  )
}
