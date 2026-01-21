"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if we should show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide navbar
        setHidden(true)
      } else {
        // Scrolling up or at top - show navbar
        setHidden(false)
      }

      setScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 w-full max-w-[100vw]`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? "py-0" : "py-2"}`}>
        <div className={`rounded-2xl border bg-black/20 backdrop-blur-xl shadow-lg transition-all duration-500 ${scrolled ? "bg-black/40 shadow-black/10 border-white/5" : "bg-black/20 border-white/10"
          }`}>
          <div className="flex justify-between items-center h-20 px-6">
            {/* Mobile Menu Button - Left on mobile */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-white/10 transition-colors order-first"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <div className="flex flex-col gap-[5px] items-center justify-center w-6 h-6">
                  <span className="w-6 h-[2.5px] bg-white rounded-full"></span>
                  <span className="w-4 h-[2.5px] bg-accent rounded-full"></span>
                  <span className="w-6 h-[2.5px] bg-white rounded-full"></span>
                </div>
              )}
            </motion.button>

            {/* Left Side: Logo - Hidden on mobile, shown on desktop */}
            <Link href="/" className="hidden lg:flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative w-12 h-12 flex-shrink-0"
              >
                <Image
                  src="/images/logo.jpg"
                  alt="Capital Core Finance Logo"
                  width={48}
                  height={48}
                  className="rounded-xl border border-white/10"
                />
              </motion.div>
              <div className="hidden sm:block text-left">
                <span className="font-bold text-xl tracking-tight text-white transition-colors">
                  Capital Core
                </span>
                <span className="block text-xs -mt-0.5 tracking-wide text-white/70 transition-colors">
                  Finance Consultants
                </span>
              </div>
            </Link>

            {/* Center: Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href + link.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full group-hover:w-4/5 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Side: CTA Button - Desktop only */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="premium-btn-gold px-6 py-2.5 text-white rounded-full font-semibold text-sm inline-flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right Side: Logo - Mobile only */}
            <Link href="/" className="flex lg:hidden items-center gap-2 group order-last">
              <div className="text-right">
                <span className="font-bold text-lg tracking-tight text-white transition-colors">
                  Capital Core
                </span>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative w-10 h-10 flex-shrink-0"
              >
                <Image
                  src="/images/logo.jpg"
                  alt="Capital Core Finance Logo"
                  width={40}
                  height={40}
                  className="rounded-xl border border-white/10"
                />
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 mt-2 mx-auto"
            >
              <div className="py-4 space-y-1 px-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href + link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-4 py-3 hover:bg-white/10 rounded-xl transition-colors text-white font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="pt-2 px-2"
                >
                  <Link
                    href="/contact"
                    className="block px-4 py-3 premium-btn-gold text-white rounded-xl font-semibold text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="inline-flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
