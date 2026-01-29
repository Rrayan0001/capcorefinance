import type { Metadata } from "next"
import Link from "next/link"
import { HardHat, Landmark, Home, Hotel, Building2, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Project Loans - Capital Core Finance",
  description:
    "Construction loans, site purchase loans, flat purchase loans, resort development financing, and commercial infrastructure setup loans.",
}

const projectTypes = [
  {
    icon: Home,
    title: "Site & Flat Purchase Loans",
    description: "Finance your land or flat purchase with competitive rates and flexible repayment options.",
    features: ["Up to 80% of property value", "Tenure up to 20 years", "Quick property evaluation"],
  },
  {
    icon: HardHat,
    title: "Construction Loans",
    description: "Fund your residential or commercial construction projects from foundation to completion.",
    features: ["Phased disbursement", "Interest on utilized amount only", "Technical assistance available"],
  },
  {
    icon: Hotel,
    title: "Resort & Hotel Development",
    description: "Specialized financing for hospitality projects including resorts, hotels, and service apartments.",
    features: ["Higher loan amounts", "Industry-specific terms", "Extended moratorium periods"],
  },
  {
    icon: Building2,
    title: "Commercial Building Loans",
    description: "Finance office buildings, shopping complexes, warehouses, and industrial facilities.",
    features: ["Flexible collateral options", "Revenue-based repayment", "Expert project evaluation"],
  },
]

export default function ProjectLoans() {
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
            <Landmark size={18} />
            Project Financing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Project Loans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financing solutions for construction and development projects. From land purchase to project
            completion, we fund your vision.
          </p>
        </div>
      </section>

      {/* Project Types Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projectTypes.map((type, index) => {
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

          {/* Eligibility & Documentation */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Eligibility Requirements</h2>
              <ul className="space-y-3">
                {[
                  "Clear land title or property documents",
                  "Approved building plans and permits",
                  "Minimum 20-25% self-contribution",
                  "Income proof or business financials",
                  "CIBIL score 650+ preferred"
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
                <li className="flex gap-2"><span className="text-green-600">✓</span> Property documents and title deed</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Approved building plans and NOCs</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Project cost estimation and timeline</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Last 6-12 months bank statements</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> KYC documents (PAN, Aadhaar)</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Income proof or ITR for 2-3 years</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="p-10 bg-gradient-to-br from-accent to-accent/90 rounded-3xl text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-4 text-black">Ready to Start Your Project?</h3>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Our project finance experts will evaluate your plans and help secure the best funding options for your
              construction or development project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-black/90 transition-all duration-300"
            >
              Get Project Financing <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
