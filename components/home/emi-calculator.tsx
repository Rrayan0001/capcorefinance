"use client"

import type React from "react"
import { useState, useMemo, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Calculator } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const MIN_LOAN = 100_000 // 1 Lakh
const MAX_LOAN = 10_000_000_000 // 1000 Crore

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(100_000)
  const [interestRate, setInterestRate] = useState(0)
  const [tenureMonths, setTenureMonths] = useState(60)
  const [loanAmountError, setLoanAmountError] = useState(false)
  const [interestRateError, setInterestRateError] = useState(false)
  const [loanAmountInput, setLoanAmountInput] = useState("1,00,000")
  const sectionRef = useRef<HTMLElement>(null)

  const tenureYears = Math.floor(tenureMonths / 12)
  const tenureRemainingMonths = tenureMonths % 12

  const loanProgress = ((loanAmount - MIN_LOAN) / (MAX_LOAN - MIN_LOAN)) * 100
  const interestProgress = Math.min( 100, Math.max(0, (interestRate / 30) * 100))
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

  const chartData = [
    { name: "Principal", value: calculations.principal, color: "#002D62" },
    { name: "Interest", value: calculations.totalInterest, color: "#D4A853" },
  ]

  const formatCurrency = (value: number) => `₹${value.toLocaleString("en-IN")}`

  const handleLoanAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, "")
    setLoanAmountInput(e.target.value)

    // Allow empty input
    if (value === "") {
      setLoanAmountError(true)
      return
    }

    const numValue = Number.parseInt(value)

    // Check if it's a valid number
    if (isNaN(numValue)) {
      setLoanAmountError(true)
      return
    }

    // Validate range
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

    if (value < 0 || value > 30) {
      setInterestRateError(true)
    } else {
      setInterestRateError(false)
      setInterestRate(value)
    }
  }

  const handleTenureYearsInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const years = Number.parseInt(e.target.value) || 0
    if (years >= 0 && years <= 30) {
      setTenureMonths(years * 12 + tenureRemainingMonths)
    }
  }

  const handleTenureMonthsInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const months = Number.parseInt(e.target.value) || 0
    if (months >= 0 && months < 12) {
      setTenureMonths(tenureYears * 12 + months)
    }
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
    <section ref={sectionRef} className="py-24 md:py-32 section-gradient-alt relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/5 px-5 py-2.5 rounded-full border border-primary/10">
            <Calculator size={18} />
            Financial Tool
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
            EMI <span className="gradient-text">Calculator</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Calculate your monthly EMI instantly with our smart calculator
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Calculator Controls */}
          <div className="premium-card p-8 lg:p-10 rounded-3xl space-y-8">
            {/* Loan Amount */}
            <div>
              <label className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-foreground">Loan Amount</span>
                <div
                  className={`flex items-center gap-1 px-4 py-2.5 rounded-xl border transition-colors ${
                    loanAmountError
                      ? "bg-red-50 border-red-300"
                      : "bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20"
                  }`}
                >
                  <span className={`font-semibold ${loanAmountError ? "text-red-600" : "text-accent"}`}>₹</span>
                  <input
                    type="text"
                    value={loanAmountInput}
                    onChange={handleLoanAmountInput}
                    onBlur={handleLoanAmountBlur}
                    placeholder="1,00,000"
                    className={`w-28 bg-transparent font-bold text-lg text-right focus:outline-none ${
                      loanAmountError ? "text-red-600" : "text-accent"
                    }`}
                  />
                </div>
              </label>
              <div className="relative h-3 bg-muted rounded-full overflow-visible">
                <div
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-200"
                  style={{
                    width: `${loanProgress}%`,
                    background: "linear-gradient(90deg, #D4A853, #E8C078)",
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
                  className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-gradient-to-br from-accent to-accent/90 rounded-full shadow-xl shadow-accent/40 border-4 border-white pointer-events-none transition-all duration-200 hover:scale-110"
                  style={{ left: `calc(${loanProgress}% - 14px)` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-3 font-medium">
                <span>₹1 Lakh</span>
                <span>₹1000 Crore</span>
              </div>
              {loanAmountError && (
                <p className="text-xs text-red-600 mt-2">Amount must be between ₹1 Lakh and ₹1000 Crore</p>
              )}
            </div>

            {/* Interest Rate */}
            <div>
              <label className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-foreground">Rate of Interest (p.a)</span>
                <div
                  className={`flex items-center gap-1 px-4 py-2.5 rounded-xl border transition-colors ${
                    interestRateError
                      ? "bg-red-50 border-red-300"
                      : "bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20"
                  }`}
                >
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={handleInterestInput}
                    className={`w-16 bg-transparent font-bold text-lg text-right focus:outline-none ${
                      interestRateError ? "text-red-600" : "text-accent"
                    }`}
                  />
                  <span className={`font-semibold ${interestRateError ? "text-red-600" : "text-accent"}`}>%</span>
                </div>
              </label>
              <div className="relative h-3 bg-muted rounded-full overflow-visible">
                <div
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-200"
                  style={{
                    width: `${interestProgress}%`,
                    background: "linear-gradient(90deg, #D4A853, #E8C078)",
                  }}
                />
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => {
                    setInterestRate(Number(e.target.value))
                    setInterestRateError(false)
                  }}
                  className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-gradient-to-br from-accent to-accent/90 rounded-full shadow-xl shadow-accent/40 border-4 border-white pointer-events-none transition-all duration-200 hover:scale-110"
                  style={{ left: `calc(${interestProgress}% - 14px)` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-3 font-medium">
                <span>0%</span>
                <span>30%</span>
              </div>
              {interestRateError && (
                <p className="text-xs text-red-600 mt-2">Interest rate must be between 0% and 30%</p>
              )}
            </div>

            {/* Loan Tenure */}
            <div>
              <label className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-foreground">Loan Tenure</span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-accent/10 to-accent/5 px-3 py-2.5 rounded-xl border border-accent/20">
                    <input
                      type="number"
                      min="0"
                      max="30"
                      value={tenureYears}
                      onChange={handleTenureYearsInput}
                      className="w-10 bg-transparent text-accent font-bold text-lg text-right focus:outline-none"
                    />
                    <span className="text-accent font-semibold text-sm">Yr</span>
                  </div>
                  <div className="flex items-center gap-1 bg-gradient-to-r from-accent/10 to-accent/5 px-3 py-2.5 rounded-xl border border-accent/20">
                    <input
                      type="number"
                      min="0"
                      max="11"
                      value={tenureRemainingMonths}
                      onChange={handleTenureMonthsInput}
                      className="w-10 bg-transparent text-accent font-bold text-lg text-right focus:outline-none"
                    />
                    <span className="text-accent font-semibold text-sm">Mo</span>
                  </div>
                </div>
              </label>
              <div className="relative h-3 bg-muted rounded-full overflow-visible">
                <div
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-200"
                  style={{
                    width: `${tenureProgress}%`,
                    background: "linear-gradient(90deg, #D4A853, #E8C078)",
                  }}
                />
                <input
                  type="range"
                  min="12"
                  max="360"
                  step="1"
                  value={tenureMonths}
                  onChange={(e) => setTenureMonths(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-gradient-to-br from-accent to-accent/90 rounded-full shadow-xl shadow-accent/40 border-4 border-white pointer-events-none transition-all duration-200 hover:scale-110"
                  style={{ left: `calc(${tenureProgress}% - 14px)` }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-3 font-medium">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4 pt-6 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Monthly EMI</span>
                <motion.span
                  key={calculations.monthlyEMI}
                  initial={{ scale: 1.1, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="font-bold text-2xl gradient-text"
                >
                  {formatCurrency(calculations.monthlyEMI)}
                </motion.span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Principal Amount</span>
                <span className="font-semibold text-foreground">{formatCurrency(calculations.principal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Interest</span>
                <span className="font-semibold text-accent">{formatCurrency(calculations.totalInterest)}</span>
              </div>
              <div className="flex justify-between items-center pt-4 mt-4 bg-gradient-to-r from-primary/5 to-accent/5 -mx-8 lg:-mx-10 px-8 lg:px-10 py-5 -mb-8 lg:-mb-10 rounded-b-3xl border-t border-primary/10">
                <span className="font-semibold text-foreground">Total Amount Payable</span>
                <span className="font-bold text-xl text-primary">{formatCurrency(calculations.totalAmount)}</span>
              </div>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="premium-card p-8 lg:p-10 rounded-3xl flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[320px] mx-auto h-[280px]">
              {/* Chart */}
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={140}
                    paddingAngle={4}
                    dataKey="value"
                    strokeWidth={0}
                    isAnimationActive={false}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="text-sm text-muted-foreground mb-1">Total Payable</p>
                <p className="text-xl md:text-2xl font-bold gradient-text text-center leading-tight px-4">
                  {formatCurrency(calculations.totalAmount)}
                </p>
              </div>
            </div>

            <div className="flex gap-10 justify-center">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30" />
                <div>
                  <p className="text-sm text-muted-foreground">Principal</p>
                  <p className="font-semibold text-foreground">{formatCurrency(calculations.principal)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/30" />
                <div>
                  <p className="text-sm text-muted-foreground">Interest</p>
                  <p className="font-semibold text-foreground">{formatCurrency(calculations.totalInterest)}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
