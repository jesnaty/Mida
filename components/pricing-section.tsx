import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { DemoRequestDialog } from "@/components/demo-request-dialog"

const tiers = [
  {
    name: "Ask for Demo",
    price: "",
    period: "",
    description: "See our services in action",
    features: [
      "Live demonstration of our platform",
      "Personalized consultation",
      "See how we can help your business",
      "No commitment required",
    ],
    cta: "Request Demo",
    highlighted: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">See Our Services in Action</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Request a personalized demo to see how we can help transform your business
          </p>
        </div>

        <div className="flex justify-center max-w-2xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col bg-card w-full ${
                tier.highlighted ? "border-primary shadow-lg shadow-primary/20" : "border-border"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <DemoRequestDialog>
                  <Button
                    className={`w-full ${tier.highlighted ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}
                    variant={tier.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </DemoRequestDialog>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
