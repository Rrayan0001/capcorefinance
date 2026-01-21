import Link from "next/link"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Tech Startup India",
    service: "Business Loan",
    content:
      "Capital Core helped us secure a 50L business loan in just 3 weeks. The process was smooth and transparent. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Manufacturing Ltd",
    service: "Loan Restructuring",
    content:
      "We were struggling with NPA issues. Their team restructured our loan and improved our financial position significantly.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    company: "Consulting Group",
    service: "Corporate Advisory",
    content:
      "25+ years of experience really shows. They provided strategic guidance that transformed our business approach.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from our satisfied business clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-lg bg-background hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">{testimonial.content}</p>
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                <p className="text-sm text-accent font-medium mt-1">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Read More Testimonials
          </Link>
        </div>
      </div>
    </section>
  )
}
