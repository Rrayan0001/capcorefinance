"use client"

import Link from "next/link"
import { useRef, useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Building2, Landmark, Home, GraduationCap, Truck, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

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
]

export default function ServiceCards() {
  const sectionRef = useRef<HTMLElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", duration: 40 })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
      className="min-h-auto md:min-h-screen py-8 md:py-20 relative overflow-hidden rounded-t-[40px] md:rounded-t-[100px] mt-0 z-20 flex flex-col bg-black"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/service-bg.png')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12 pt-2 md:pt-4">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
            <div className="h-px w-4 sm:w-16 bg-white/30" />
            <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/60" />
            <span className="text-white/80 font-medium text-[9px] md:text-xs tracking-widest uppercase">Our Services</span>
            <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/60" />
            <div className="h-px w-4 sm:w-16 bg-white/30" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight px-2">
            Our Core <span className="text-accent italic">Loan Products</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-xs md:text-base px-6 md:px-4 leading-relaxed">
            Comprehensive financing solutions across multiple categories — tailored to your unique needs
          </p>
        </div>

        {/* Carousel - Flex grow to fill space */}
        <div className="relative flex-1 flex flex-col">
          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6 h-full">
              {services.map((service, index) => {
                const Icon = service.icon
                const isActive = selectedIndex === index || hoveredIndex === index

                return (
                  <div
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-6"
                    key={service.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link href={service.href} className="block group h-full service-card">
                      <div className={`bg-[#1c1c2e]/90 backdrop-blur-md border rounded-[20px] md:rounded-[24px] p-4 md:p-6 h-full min-h-auto md:min-h-[480px] transition-all duration-500 flex flex-col ${isActive
                        ? "border-accent/50 shadow-[0_0_50px_-10px_rgba(212,168,83,0.3)]"
                        : "border-white/10 opacity-80"
                        }`}>

                        {/* Card Header: Icon + Title - Vertical on mobile */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-5 gap-3 md:gap-0">
                          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center border transition-all duration-300 ${isActive
                            ? "bg-accent/10 border-accent/30 shadow-[0_0_15px_-3px_rgba(212,168,83,0.3)]"
                            : "bg-white/5 border-white/10"
                            }`}>
                            <Icon className={`transition-colors duration-300 ${isActive ? "text-accent" : "text-white/80"}`} size={24} />
                          </div>
                          <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-white/90"}`}>
                            {service.title}
                          </h3>
                        </div>

                        {/* Divider Line */}
                        <div className="w-full h-px bg-white/10 mb-4 md:mb-5" />

                        {/* Description - Left on mobile, right on desktop */}
                        <p className={`text-sm leading-relaxed mb-4 md:mb-6 transition-colors duration-300 text-left md:text-right md:px-2 ${isActive ? "text-white/80" : "text-white/50"
                          }`}>
                          {service.description}
                        </p>

                        {/* Image Area - Smaller on mobile */}
                        <div className="mt-auto rounded-[12px] md:rounded-[16px] relative overflow-hidden flex-1 min-h-[160px] md:min-h-[220px]">
                          <img
                            src={service.image}
                            alt={service.title}
                            className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out ${isActive ? "scale-105" : "scale-100"
                              }`}
                          />
                          {/* Subtle overlay */}
                          <div className={`absolute inset-0 transition-opacity duration-300 ${isActive
                            ? "bg-gradient-to-t from-[#1c1c2e]/50 via-transparent to-transparent"
                            : "bg-black/20"
                            }`} />

                          {/* Learn More on hover */}
                          <div className={`absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 transition-all duration-300 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}>
                            <div className="flex items-center gap-2 text-white font-semibold text-xs md:text-sm">
                              Learn More <ArrowRight size={14} className="md:w-4 md:h-4" />
                            </div>
                          </div>
                        </div>

                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Buttons - Bottom center on mobile, sides on desktop */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="w-12 h-12 rounded-full border border-white/20 bg-black/60 backdrop-blur-sm text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent hover:border-accent hover:text-black transition-all duration-300"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="w-12 h-12 rounded-full border border-white/20 bg-black/60 backdrop-blur-sm text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent hover:border-accent hover:text-black transition-all duration-300"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Desktop Navigation - Sides */}
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="hidden md:flex absolute top-1/2 -left-2 lg:-left-14 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-white/20 bg-black/60 backdrop-blur-sm text-white items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent hover:border-accent hover:text-black transition-all duration-300 z-20"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="hidden md:flex absolute top-1/2 -right-2 lg:-right-14 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-white/20 bg-black/60 backdrop-blur-sm text-white items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent hover:border-accent hover:text-black transition-all duration-300 z-20"
          >
            <ChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  )
}
