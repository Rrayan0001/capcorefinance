import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business Loans - Capital Core Finance",
  description: "Expert business loan consulting. Help securing loans up to ₹5Cr for SMEs and corporations.",
}

export default function BusinessLoans() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 px-4 py-2 rounded-full">
            Business Finance
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Business Loans</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get your loan approved quickly with expert guidance. We help SMEs and corporates secure the best loan deals
            with minimal hassle.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">What We Offer</h2>
              <ul className="space-y-4">
                {[
                  "Working Capital Loans up to ₹2Cr",
                  "Term Loans for equipment and machinery",
                  "Expansion Loans for business growth",
                  "Trade Finance and invoice discounting"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-accent font-bold text-lg">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Eligibility Requirements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                  <h3 className="font-bold text-gray-900 mb-4">Business Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Business registration/GST</li>
                    <li>• Minimum 2 years turnover</li>
                    <li>• GST returns filed</li>
                    <li>• Bank statements available</li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                  <h3 className="font-bold text-gray-900 mb-4">Credit Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• CIBIL score 550+ preferred</li>
                    <li>• Clear credit history</li>
                    <li>• No recent defaults</li>
                    <li>• Current on existing EMIs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Documentation Needed</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-2"><span className="text-green-600">✓</span> Last 12-24 months GST returns and bank statements</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Business financials and profit & loss statements</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> PAN and Aadhaar of promoters/directors</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Current liabilities and existing loan details</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span> Collateral details if applicable</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Choose Our Business Loan Service?</h2>
              <ul className="space-y-4">
                {[
                  "Fast approval process - loans sanctioned in 15-21 days",
                  "Access to 15+ national and regional banks",
                  "Better interest rates through our bank relationships",
                  "End-to-end support from application to disbursement"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-accent to-accent/90 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-black">Ready to Secure Your Business Loan?</h3>
              <p className="text-black/80 mb-6">
                Let our experts guide you through the process and get your business the funding it deserves.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-black/90 transition-all"
              >
                Start Your Application
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
