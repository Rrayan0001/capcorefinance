import type { Metadata } from "next"
import Link from "next/link"
import { Home, Key, Paintbrush, ArrowLeftRight, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Housing Loans - Capital Core Finance",
  description:
    "Make homeownership dreams a reality. Home purchase loans, renovation financing, and balance transfer options with competitive rates.",
}

const housingTypes = [
  {
    icon: Key,
    title: "Home Purchase Loan",
    description: "Buy your dream home with flexible financing options and competitive interest rates.",
    features: ["Up to 90% of property value", "Tenure up to 30 years", "Fixed & floating rates available"],
  },
  {
    icon: Paintbrush,
    title: "Home Renovation Loan",
    description: "Upgrade, renovate, or expand your existing home with dedicated financing.",
    features: ["Quick processing", "Minimal documentation", "Top-up on existing loans"],
  },
  {
    icon: ArrowLeftRight,
    title: "Balance Transfer",
    description: "Transfer your existing home loan to us for better rates and save on interest.",
    features: ["Lower interest rates", "Reduced EMI burden", "Top-up facility available"],
  },
  {
    icon: Home,
    title: "Plot + Construction",
    description: "Combined financing for land purchase and subsequent construction on it.",
    features: ["Single loan for both", "Phased disbursement", "Flexible repayment"],
  },
]

export default function HousingLoans() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 px-4 py-2 rounded-full">
            <Home size={18} />
            Housing Finance
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Housing Loans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your dream home is within reach. We offer comprehensive housing loan solutions with competitive rates and
            flexible terms to make homeownership affordable.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Housing Types Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {housingTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:border-accent/50 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="inline-flex p-4 bg-accent/10 rounded-2xl mb-6">
                    <Icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Why Choose Our Housing Loans?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Low Interest", desc: "Starting from 8.5% p.a." },
                { title: "Quick Approval", desc: "In-principle approval in 48 hours" },
                { title: "Tax Benefits", desc: "Save under Section 80C & 24" },
                { title: "Zero Prepayment", desc: "No charges on floating rate" },
              ].map((benefit, index) => (
                <div key={index} className="p-6 bg-accent/5 border border-accent/10 rounded-xl text-center">
                  <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Documentation */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Eligibility</h2>
              <ul className="space-y-3">
                {[
                  "Age: 21-65 years at loan maturity",
                  "Salaried or self-employed individuals",
                  "Minimum income: ₹25,000/month",
                  "CIBIL score: 700+ preferred",
                  "Employment stability: 2+ years"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-600">
                    <span className="text-accent font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Documents Required</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-2"><span className="text-green-600">✓</span> Identity & address proof (PAN, Aadhaar)</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Last 6 months salary slips (salaried)</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Last 6-12 months bank statements</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Form 16 / ITR for 2-3 years</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Property documents and agreement</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Processing fee cheque</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="p-10 bg-gradient-to-br from-accent to-accent/90 rounded-3xl text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-4 text-black">Ready to Own Your Dream Home?</h3>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Our housing loan experts will help you find the perfect financing solution. Get pre-approved today!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-black/90 transition-all duration-300"
            >
              Apply for Home Loan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
