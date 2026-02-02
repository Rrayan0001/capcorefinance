"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2 } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    loanType: "",
    message: "",
    agree: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, type } = e.target
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      })
    } else {
      setFormData({
        ...formData,
        [name]: e.target.value,
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        { label: "+91 99759 85314", href: "tel:+919975985314" },
        { label: "+91 99025 45483", href: "tel:+919902545483" },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [{ label: "business@capitalcorefinance.com", href: "mailto:business@capitalcorefinance.com" }],
    },
    {
      icon: MapPin,
      title: "Office",
      details: [{ label: "Yelahanka, Bengaluru, Karnataka", href: "https://maps.google.com/?q=Yelahanka,Bengaluru" }],
    },
  ]

  const whyContactUs = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get a response within 24 hours from our expert team",
    },
    {
      icon: CheckCircle2,
      title: "Free Consultation",
      description: "No obligation consultation to understand your needs",
    },
    {
      icon: Send,
      title: "Personalized Solutions",
      description: "Tailored financing options based on your requirements",
    },
  ]

  return (
    <main>
      {/* Hero Section - Bright */}
      <section ref={heroRef} className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="hero-animate inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 px-4 py-2 rounded-full">
              Get In Touch
            </span>
            <h1 className="hero-animate text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">
              Contact Us
            </h1>
            <p className="hero-animate text-xl text-gray-600 leading-relaxed">
              Let's discuss your loan needs and find the perfect financing solution for your dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form - Bright */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Reach Out to Us</h2>
                <p className="text-gray-600">We're here to help you with all your financing needs</p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-xl">
                        <Icon className="text-accent" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, i) => (
                            <a
                              key={i}
                              href={detail.href}
                              className="block text-gray-600 hover:text-accent transition-colors"
                            >
                              {detail.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Form */}
            <div ref={formRef} className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-accent to-accent/90 text-black p-12 rounded-2xl text-center shadow-2xl"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="text-black" size={28} />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Thank You!</h3>
                  <p className="text-black/80">
                    We've received your inquiry. Our team will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-white p-8 md:p-10 rounded-2xl border-2 border-gray-200 shadow-xl"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you shortly</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Enter company name"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Loan Type *</label>
                    <select
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-gray-900"
                    >
                      <option value="" disabled>
                        Select Loan Type
                      </option>
                      <option value="business-loan">Business Loan</option>
                      <option value="project-loan">Project Loan</option>
                      <option value="housing-loan">Housing Loan</option>
                      <option value="education-loan">Education Loan</option>
                      <option value="machinery-loan">Machinery & Equipment Loan</option>
                      <option value="restructuring">Loan Restructuring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your financing needs..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none text-gray-900"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="agree"
                      id="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 accent-accent"
                    />
                    <label htmlFor="agree" className="text-sm text-gray-600">
                      I agree to be contacted by Capital Core Finance for discussing my loan needs.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-accent text-black font-bold rounded-xl hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
                  >
                    Submit Inquiry
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us - Dark */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/service-bg.png')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Contact Us?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Experience professional service and personalized attention for all your financing needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyContactUs.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Map Section - Bright */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Visit Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in Yelahanka, Bengaluru - We're here to serve you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124423.4489326!2d77.4647!3d13.1007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23ac16a1b2e9%3A0x7009e0d0d6b0c10!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>

            {/* Address Details */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Office Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Yelahanka, Bengaluru<br />
                      Karnataka - 560064
                    </p>
                    <p className="text-sm text-accent font-medium mt-3">
                      📞 Please call us to schedule an appointment before visiting
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Business Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent to-accent/90 p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-black mb-2 text-lg">Need Directions?</h3>
                <p className="text-black/80 text-sm mb-4">
                  Get directions to our office directly from Google Maps
                </p>
                <a
                  href="https://www.google.com/maps/dir//Yelahanka,+Bengaluru,+Karnataka/@13.1007,77.4647,12z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl font-semibold hover:bg-black/90 transition-all duration-300 text-sm"
                >
                  Get Directions
                  <MapPin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
