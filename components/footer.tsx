"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Send, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)

  const quickLinks = [
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Contact", href: "/contact" },
    { label: "Resources", href: "/resources" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "About Us", href: "/about" },
  ]

  const aboutLinks = [
    { label: "Our Story", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Business Loans", href: "/services/business-loans" },
    { label: "Project Loans", href: "/services/project-loans" },
    { label: "Client Testimonials", href: "/testimonials" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ]

  const supportLinks = [
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Resources", href: "/resources" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && agreed) {
      console.log("Email submitted:", email)
      setEmail("")
      setAgreed(false)
    }
  }

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Background Image Layer - Same as Service Section */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/service-bg.png')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        {/* Top Section - Newsletter & Logo */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 pb-12 border-b border-white/10">
          {/* Newsletter */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Register For Our<br />Updates
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative flex gap-2">
                <div className="flex-1 relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <Send size={16} className="text-black" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-16 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-accent transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={!email || !agreed}
                  className="px-6 py-3 bg-accent text-black font-semibold rounded-xl hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="hidden sm:inline">Subscribe</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-white/10 text-accent focus:ring-accent"
                  required
                />
                <span className="text-xs text-white/60">
                  I acknowledge all the Terms & Conditions
                </span>
              </label>
            </form>
          </div>

          {/* Logo & Description */}
          <div className="flex flex-col justify-center">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Capital Core Finance Logo"
                  width={48}
                  height={48}
                  className="rounded-xl"
                />
              </div>
              <div>
                <span className="font-bold text-2xl text-white tracking-tight">Capital Core</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Your trusted partner for comprehensive financial solutions. We specialize in business loans, project financing, and strategic financial consulting.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-white mb-6">About</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a href="mailto:business@capitalcorefinance.com" className="text-white/60 hover:text-white transition-colors text-sm break-all">
                  business@capitalcorefinance.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919975985314" className="text-white/60 hover:text-white transition-colors text-sm">
                    +91 99759 85314
                  </a>
                  <a href="tel:+919902545483" className="text-white/60 hover:text-white transition-colors text-sm">
                    +91 99025 45483
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Yelahanka, Bengaluru,<br />Karnataka
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 order-2 md:order-1">
            <Link
              href="/terms"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Terms & Condition
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm text-white/60 order-1 md:order-2">
            Capital Core Finance. All Rights Reserved {currentYear} ©
          </p>
        </div>
      </div>
    </footer>
  )
}
