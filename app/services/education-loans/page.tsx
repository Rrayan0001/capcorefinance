import type { Metadata } from "next"
import Link from "next/link"
import { GraduationCap, Globe, BookOpen, Award, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Education Loans - Capital Core Finance",
  description:
    "Invest in your future with education loans for domestic and international studies. Cover tuition, accommodation, and living expenses.",
}

const educationTypes = [
  {
    icon: BookOpen,
    title: "Domestic Education Loan",
    description: "Fund your higher education at premier Indian institutions - IITs, IIMs, AIIMS, and more.",
    features: ["Up to ₹75 lakhs", "No collateral up to ₹7.5L", "Covers all course expenses"],
  },
  {
    icon: Globe,
    title: "International Education Loan",
    description: "Study abroad at top universities worldwide with comprehensive financing.",
    features: ["Up to ₹1.5 Crore", "Covers tuition + living", "Forex facility available"],
  },
  {
    icon: Award,
    title: "Professional Course Loans",
    description: "Finance specialized courses like MBA, Medical, Engineering, Law, and certifications.",
    features: ["Course-specific terms", "Merit-based concessions", "Flexible moratorium"],
  },
  {
    icon: GraduationCap,
    title: "Skill Development Loans",
    description: "Short-term loans for skill enhancement, certifications, and vocational training.",
    features: ["Quick disbursement", "Lower loan amounts", "Shorter tenure options"],
  },
]

const coveredExpenses = [
  "Tuition & college fees",
  "Hostel & accommodation",
  "Books & equipment",
  "Travel expenses",
  "Laptop & study materials",
  "Exam & library fees",
  "Caution deposit",
  "Health insurance",
]

export default function EducationLoans() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 px-4 py-2 rounded-full">
            <GraduationCap size={18} />
            Education Finance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Education Loans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't let finances hold back your academic dreams. Our education loans cover everything from tuition to
            living expenses for domestic and international studies.
          </p>
        </div>

        {/* Education Types Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {educationTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <div
                key={index}
                className="p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:border-accent/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Covered Expenses */}
        <div className="mb-16 p-8 bg-primary/5 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Expenses Covered</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coveredExpenses.map((expense, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-card rounded-lg">
                <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm text-foreground">{expense}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility & Documentation */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-card border border-border rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Eligibility</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Indian citizen with valid admission
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Secured admission in recognized institution
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Co-applicant (parent/guardian) required
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Age: 16-35 years at application
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Good academic record preferred
              </li>
            </ul>
          </div>
          <div className="p-8 bg-card border border-border rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Documents Required</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Admission letter from institution</li>
              <li>✓ Fee structure and cost estimate</li>
              <li>✓ Academic mark sheets (10th, 12th, UG)</li>
              <li>✓ KYC of student and co-applicant</li>
              <li>✓ Income proof of co-applicant</li>
              <li>✓ Collateral documents (if applicable)</li>
            </ul>
          </div>
        </div>

        {/* Special Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Special Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Moratorium Period", desc: "Course duration + 6-12 months" },
              { title: "Interest Subsidy", desc: "For eligible students under govt. schemes" },
              { title: "Quick Processing", desc: "Sanction within 7-10 days" },
              { title: "No Prepayment Penalty", desc: "Pay off early without charges" },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-accent/10 rounded-xl text-center border border-accent/20">
                <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to Invest in Your Future?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let financial constraints stop your educational aspirations. Get expert guidance on education loans
            today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
          >
            Apply for Education Loan <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  )
}
