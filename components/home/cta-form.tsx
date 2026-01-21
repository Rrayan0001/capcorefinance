"use client"

import type React from "react"

import { useState } from "react"

export default function CTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    loanType: "",
    loanAmount: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Funded?</h2>
          <p className="text-lg opacity-90">Fill out this quick form and our team will contact you within 24 hours.</p>
        </div>

        {submitted ? (
          <div className="bg-accent text-accent-foreground p-6 rounded-lg text-center">
            <h3 className="font-semibold text-lg mb-2">Thank You!</h3>
            <p>Our team will get back to you within 24 hours with personalized guidance for your loan needs.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/60 border border-primary-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="px-4 py-3 bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/60 border border-primary-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/60 border border-primary-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/60 border border-primary-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="" disabled>
                  Select Loan Type
                </option>
                <option value="business-loan">Business Loan</option>
                <option value="working-capital">Working Capital</option>
                <option value="restructuring">Loan Restructuring</option>
                <option value="advisory">Corporate Advisory</option>
              </select>
              <input
                type="text"
                name="loanAmount"
                placeholder="Loan Amount Needed (₹)"
                value={formData.loanAmount}
                onChange={handleChange}
                className="px-4 py-3 bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/60 border border-primary-foreground/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:scale-105 transition-transform"
            >
              Get Pre-Qualified
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
