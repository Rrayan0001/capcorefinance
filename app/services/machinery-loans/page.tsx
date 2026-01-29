import type { Metadata } from "next"
import Link from "next/link"
import { Truck, Cog, Tractor, Package, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Machinery & Equipment Loans - Capital Core Finance",
  description:
    "Finance industrial machinery, agricultural equipment, commercial vehicles, and inventory. Equipment-specific financing for business growth.",
}

const machineryTypes = [
  {
    icon: Cog,
    title: "Industrial Machinery Loan",
    description: "Finance manufacturing equipment, CNC machines, production lines, and factory machinery.",
    features: ["Up to 80% of equipment cost", "Tenure up to 7 years", "New & refurbished equipment"],
  },
  {
    icon: Tractor,
    title: "Agricultural Equipment Loan",
    description: "Tractors, harvesters, irrigation systems, and other farm equipment financing.",
    features: ["Special schemes for farmers", "Subsidy linkage available", "Seasonal repayment options"],
  },
  {
    icon: Truck,
    title: "Commercial Vehicle Loan",
    description: "Finance trucks, buses, construction vehicles, and fleet expansion.",
    features: ["New & used vehicles", "Quick disbursement", "Flexible EMI options"],
  },
  {
    icon: Package,
    title: "Inventory Funding",
    description: "Working capital for raw materials, finished goods, and stock purchases.",
    features: ["Revolving credit facility", "Quick turnaround", "Minimal documentation"],
  },
]

export default function MachineryLoans() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <Truck size={18} />
            Equipment Finance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Machinery & Equipment Loans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upgrade your business assets with specialized machinery and equipment financing. From industrial machinery
            to commercial vehicles, we have you covered.
          </p>
        </div>

        {/* Machinery Types Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {machineryTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <div
                key={index}
                className="p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:border-accent/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
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

        {/* Benefits */}
        <div className="mb-16 p-8 bg-primary/5 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Financing Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Tax Benefits", desc: "Claim depreciation and interest deductions" },
              { title: "Cash Flow Friendly", desc: "Preserve working capital for operations" },
              { title: "Quick Sanction", desc: "Approval within 7-10 business days" },
              { title: "Flexible Tenure", desc: "Up to 7 years repayment period" },
              { title: "Minimal Margin", desc: "As low as 15-20% down payment" },
              { title: "Asset Security", desc: "Equipment itself serves as collateral" },
            ].map((benefit, index) => (
              <div key={index} className="p-5 bg-card rounded-xl text-center border border-border">
                <h4 className="font-bold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
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
                Registered business entity (Pvt Ltd, LLP, Partnership, Proprietorship)
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Minimum 2 years in business
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Profitable operations for last 2 years
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                Clean credit history
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-accent font-bold">•</span>
                GST registered (for larger amounts)
              </li>
            </ul>
          </div>
          <div className="p-8 bg-card border border-border rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Documents Required</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Business registration documents</li>
              <li>✓ Last 2-3 years financials (audited)</li>
              <li>✓ Bank statements (12 months)</li>
              <li>✓ GST returns (12 months)</li>
              <li>✓ Proforma invoice/quotation</li>
              <li>✓ KYC of promoters/directors</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to Upgrade Your Equipment?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get expert assistance in financing your machinery and equipment needs. Competitive rates and quick
            processing guaranteed.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
          >
            Apply for Equipment Loan <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  )
}
