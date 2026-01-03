import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Complete business solutions for growing SMEs
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Transform your business with integrated marketing and software services. From social media campaigns to
            custom ERP systems, we deliver everything you need to scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href="#pricing">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-border hover:bg-secondary bg-transparent"
              asChild
            >
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
