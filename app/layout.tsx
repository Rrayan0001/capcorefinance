import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ChatbotWidget from "@/components/chatbot-widget"
import GSAPProvider from "@/components/gsap-provider"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Capital Core Finance - Complete Financing Solutions",
  description:
    "Expert financing consultants for business loans, project loans, housing, education, machinery. 38+ years combined experience, 500+ clients. Get pre-qualified today.",
  keywords:
    "business loans, project loans, MSME loans, SME loans, housing loans, construction loans, education loans, machinery loans, loan consultants, Bengaluru, financial advisory",
  authors: [{ name: "Capital Core Finance" }],
  openGraph: {
    title: "Capital Core Finance - Complete Financing Solutions",
    description: "Expert financing solutions for every dream. 38+ years combined experience, 500+ clients served.",
    type: "website",
    locale: "en_IN",
  },
  robots: "index, follow",
  canonical: "https://capitalcorefinance.com",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Capital Core Finance",
              description:
                "Complete financing solutions for business, project, housing, education, and machinery loans",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Singanayakanahalli",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560064",
                addressCountry: "IN",
              },
              telephone: "+91-XXXXXXXXXX",
              areaServed: "IN",
              priceRange: "$$",
              foundingDate: "2020",
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} font-sans antialiased bg-background text-foreground`}>
        <GSAPProvider>
          <Navigation />
          {children}
          <ChatbotWidget />
          <Footer />
        </GSAPProvider>
        <Analytics />
      </body>
    </html>
  )
}
