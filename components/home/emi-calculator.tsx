"use client"

import type React from "react"
import { useState, useMemo, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts"
import { Calculator, Phone, CheckCircle, ArrowRight } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const MIN_LOAN = 100_000 // 1 Lakh
const MAX_LOAN = 10_000_000_000 // 1000 Crore

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(330_800_000) // 33.08 Cr default for visual match
  const [interestRate, setInterestRate] = useState(9.5)
  const [tenureMonths, setTenureMonths] = useState(60) // 5 years
  const [loanAmountError, setLoanAmountError] = useState(false)
  const [interestRateError, setInterestRateError] = useState(false)
  const [loanAmountInput, setLoanAmountInput] = useState("33,08,00,000")
  const sectionRef = useRef<HTMLElement>(null)

  const tenureYears = Math.floor(tenureMonths / 12)
  const tenureRemainingMonths = tenureMonths % 12

  const loanProgress = ((loanAmount - MIN_LOAN) / (MAX_LOAN - MIN_LOAN)) * 100
  const interestProgress = Math.min(100, Math.max(0, (interestRate / 15) * 100)) // Max 15% for slider
  const tenureProgress = ((tenureMonths - 12) / (360 - 12)) * 100

  const calculations = useMemo(() => {
    const principal = loanAmount
    const monthlyRate = interestRate / 12 / 100
    const months = tenureMonths

    let monthlyEMI = 0
    if (monthlyRate > 0) {
      monthlyEMI =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    } else {
      monthlyEMI = principal / months
    }

    const totalAmount = monthlyEMI * months
    const totalInterest = totalAmount - principal

    return {
      monthlyEMI: Math.round(monthlyEMI),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
      principal: Math.round(principal),
    }
  }, [loanAmount, interestRate, tenureMonths])

  // Generate bar chart data for interest breakdown over years
  const barChartData = useMemo(() => {
    const years = Math.min(tenureYears, 5) // Show up to 5 years
    const data = []
    const monthlyRate = interestRate / 12 / 100

    for (let year = 1; year <= years; year++) {
      const monthsElapsed = year * 12
      let totalInterestPaid = 0
      let remainingPrincipal = loanAmount

      for (let month = 1; month <= monthsElapsed; month++) {
        const interestForMonth = remainingPrincipal * monthlyRate
        const principalForMonth = calculations.monthlyEMI - interestForMonth
        totalInterestPaid += interestForMonth
        remainingPrincipal -= principalForMonth
      }

      data.push({
        year: year === 1 ? "1 yr" : `${year} yrs`,
        interest: Math.round(totalInterestPaid),
        fill: `hsl(210, 100%, ${65 - year * 8}%)`, // Gradient blue colors
      })
    }

    return data
  }, [loanAmount, interestRate, tenureYears, calculations.monthlyEMI])

  const formatCurrency = (value: number) => `₹${value.toLocaleString("en-IN")}`
  const formatCurrencyShort = (value: number) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)}Cr`
    if (value >= 100000) return `₹${(value / 100000).toFixed(2)}L`
    return `₹${value.toLocaleString("en-IN")}`
  }

  const handleLoanAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, "")
    setLoanAmountInput(e.target.value)

    if (value === "") {
      setLoanAmountError(true)
      return
    }

    const numValue = Number.parseInt(value)

    if (isNaN(numValue)) {
      setLoanAmountError(true)
      return
    }

    if (numValue < MIN_LOAN || numValue > MAX_LOAN) {
      setLoanAmountError(true)
    } else {
      setLoanAmountError(false)
      setLoanAmount(numValue)
    }
  }

  const handleLoanAmountBlur = () => {
    if (!loanAmountError && loanAmount >= MIN_LOAN && loanAmount <= MAX_LOAN) {
      setLoanAmountInput(loanAmount.toLocaleString("en-IN"))
    }
  }

  const handleInterestInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value) || 0

    if (value < 0 || value > 15) {
      setInterestRateError(true)
    } else {
      setInterestRateError(false)
      setInterestRate(value)
    }
  }

  const handleTenureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const months = Number(e.target.value)
    setTenureMonths(months)
  }

  useEffect(() => {
    setLoanAmountInput(loanAmount.toLocaleString("en-IN"))
  }, [loanAmount])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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
    <section ref={sectionRef} className="min-h-screen py-12 md:py-20 bg-white relative overflow-hidden rounded-t-[50px] md:rounded-t-[80px] -mt-10 z-10 flex flex-col justify-center">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-8 sm:w-16 bg-[#1a1a2e]" />
            <div className="w-2 h-2 rounded-full bg-[#1a1a2e]" />
            <span className="text-[#1a1a2e] font-semibold text-xs tracking-widest uppercase flex items-center gap-2">
              <Calculator size={14} />
              Financial Tool
            </span>
            <div className="w-2 h-2 rounded-full bg-[#1a1a2e]" />
            <div className="h-px w-8 sm:w-16 bg-[#1a1a2e]" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight text-[#1a1a2e]">
            EMI <span className="text-accent">Calculator</span>
          </h2>
          <p className="text-base text-slate-600">
            Calculate your monthly EMI instantly with our smart calculator
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Left Column - Calculator Controls */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 space-y-6">
            {/* Large EMI Display */}
            <div className="mb-6">
              <p className="text-slate-600 text-sm mb-2">Your estimated monthly EMI</p>
              <motion.p
                key={calculations.monthlyEMI}
                initial={{ scale: 1.05, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-3xl md:text-4xl font-bold text-accent"
              >
                {formatCurrency(calculations.monthlyEMI)}<span className="text-lg font-normal text-slate-500">/month</span>
              </motion.p>

              {/* Summary Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1.5 bg-slate-100 rounded-full text-xs font-semibold text-[#1a1a2e]">
                  {formatCurrencyShort(loanAmount)}
                </span>
                <span className="px-3 py-1.5 bg-slate-100 rounded-full text-xs font-semibold text-[#1a1a2e]">
                  {tenureYears} years
                </span>
                <span className="px-3 py-1.5 bg-slate-100 rounded-full text-xs font-semibold text-[#1a1a2e]">
                  {interestRate}% p.a
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-3">Indicative EMI • Final terms may vary</p>
            </div>

            {/* Loan Amount */}
            <div>
              <label className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-[#1a1a2e]">Loan Amount</span>
                <div
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-colors ${loanAmountError
                    ? "bg-red-50 border-red-300"
                    : "bg-slate-50 border-slate-200"
                    }`}
                >
                  <span className={`font-semibold text-sm ${loanAmountError ? "text-red-600" : "text-[#1a1a2e]"}`}>₹</span>
                  <input
                    type="text"
                    value={loanAmountInput}
                    onChange={handleLoanAmountInput}
                    onBlur={handleLoanAmountBlur}
                    placeholder="1,00,000"
                    className={`w-28 bg-transparent font-bold text-base text-right focus:outline-none ${loanAmountError ? "text-red-600" : "text-[#1a1a2e]"
                      }`}
                  />
                </div>
              </label>
              <div className="relative h-2 bg-slate-100 rounded-full overflow-visible">
                <div
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-200"
                  style={{
                    width: `${loanProgress}%`,
                    background: "linear-gradient(to right, #3b82f6, #1d4ed8)",
                  }}
                />
                <input
                  type="range"
                  min={MIN_LOAN}
                  max={MAX_LOAN}
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => {
                    setLoanAmount(Number(e.target.value))
                    setLoanAmountError(false)
                  }}
                  className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-blue-600 pointer-events-none transition-all duration-200"
                  style={{ left: `calc(${loanProgress}% - 10px)` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-medium">
                <span>₹1 Lakh</span>
                <span>₹1000 Crore</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Typical approvals range ₹50L – ₹500Cr</p>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-[#1a1a2e]">Interest Rate</span>
                <div
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-colors ${interestRateError
                    ? "bg-red-50 border-red-300"
                    : "bg-slate-50 border-slate-200"
                    }`}
                >
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={handleInterestInput}
                    className={`w-14 bg-transparent font-bold text-base text-right focus:outline-none ${interestRateError ? "text-red-600" : "text-[#1a1a2e]"
                      }`}
                  />
                  <span className={`font-semibold text-sm ${interestRateError ? "text-red-600" : "text-[#1a1a2e]"}`}>%</span>
                  <ArrowRight size={14} className="text-slate-400" />
                </div>
              </label>
              <div className="relative h-2 bg-slate-100 rounded-full overflow-visible">
                <div
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-200"
                  style={{
                    width: `${interestProgress}%`,
                    background: "linear-gradient(to right, #3b82f6, #1d4ed8)",
                  }}
                />
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => {
                    setInterestRate(Number(e.target.value))
                    setInterestRateError(false)
                  }}
                  className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-blue-600 pointer-events-none transition-all duration-200"
                  style={{ left: `calc(${interestProgress}% - 10px)` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-medium">
                <span>0%</span>
                <span>15%</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Market average: 9.0% – 13.5%</p>
              <p className="text-xs text-blue-600 mt-2 font-medium">Shorter tenure = lower interest burden</p>
            </div>

            {/* Loan Tenure Slider */}
            <div>
              <label className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-[#1a1a2e]">Loan Tenure</span>
                <div className="flex items-center gap-1 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <span className="font-bold text-base text-[#1a1a2e]">{tenureYears}</span>
                  <span className="text-[#1a1a2e] font-semibold text-sm">Years</span>
                  {tenureRemainingMonths > 0 && (
                    <>
                      <span className="font-bold text-base text-[#1a1a2e] ml-2">{tenureRemainingMonths}</span>
                      <span className="text-[#1a1a2e] font-semibold text-sm">Mo</span>
                    </>
                  )}
                </div>
              </label>
              <div className="relative h-2 bg-slate-100 rounded-full overflow-visible">
                <div
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-200"
                  style={{
                    width: `${tenureProgress}%`,
                    background: "linear-gradient(to right, #3b82f6, #1d4ed8)",
                  }}
                />
                <input
                  type="range"
                  min="12"
                  max="360"
                  step="12"
                  value={tenureMonths}
                  onChange={handleTenureChange}
                  className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-blue-600 pointer-events-none transition-all duration-200"
                  style={{ left: `calc(${tenureProgress}% - 10px)` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-medium">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {/* Interest Breakdown Card */}
            <div className="bg-[#1a1a2e] p-6 md:p-8 rounded-3xl text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold">Interest Breakdown</h3>
                  <p className="text-white/60 text-sm">Total Interest</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-accent">{formatCurrency(calculations.totalInterest)}</p>
                  <p className="text-white/60 text-sm">Total Repayment: {formatCurrency(calculations.totalAmount)}</p>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="h-48 mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis
                      dataKey="year"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 11 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10 }}
                      tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
                    />
                    <Bar dataKey="interest" radius={[6, 6, 0, 0]}>
                      {barChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <p className="text-white/50 text-xs text-center mt-4">
                Tip: You can reduce total interest by increasing your EMI or choosing a shorter tenure
              </p>
            </div>

            {/* Plan with Confidence Card */}
            <div className="bg-[#1a1a2e] p-6 rounded-3xl text-white">
              <h3 className="text-lg font-bold mb-2">Plan with confidence</h3>
              <p className="text-white/60 text-sm mb-4">Talk to an advisor with this calculation →</p>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-accent" />
                  <span className="text-sm font-semibold">Trusted by 500+ borrowers</span>
                </div>
                <button className="flex items-center gap-2 bg-accent text-[#1a1a2e] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors">
                  <Phone size={16} />
                  Get Expert Advice
                </button>
              </div>

              <div className="flex items-center gap-2 mt-4 text-white/60 text-xs">
                <CheckCircle size={14} className="text-green-400" />
                <span>Trusted by 500+ borrowers & reviewed by Capital Core Finance Consultants</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
