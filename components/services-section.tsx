import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Code, Check } from "lucide-react"

const digitalMarketingServices = [
  "Social Media Marketing",
  "Email Marketing Campaigns",
  "SEO (Search Engine Optimization)",
  "Content Marketing",
  "Pay-Per-Click (PPC) Advertising",
  "Google Ads Management",
  "Social Media Advertising",
  "Influencer Marketing",
  "Brand Strategy & Development",
  "Marketing Analytics & Reporting",
]

const softwareServices = [
  "Website Development",
  "Web Application Development",
  "Mobile App Development",
  "UI/UX Design",
  "ERP System Development",
  "Custom Software Solutions",
  "E-commerce Development",
  "API Development & Integration",
  "Database Design & Management",
  "Software Maintenance & Support",
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Comprehensive digital solutions designed to transform your business and drive growth in the modern web
            landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Digital Marketing</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Comprehensive digital marketing solutions to grow your online presence and reach your target audience effectively.
              </p>
              <ul className="space-y-3">
                {digitalMarketingServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Software Services</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Custom software development and technology solutions tailored to your business needs and objectives.
              </p>
              <ul className="space-y-3">
                {softwareServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
