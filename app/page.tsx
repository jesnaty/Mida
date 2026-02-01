import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Palette, Code, Users, Search, MessageSquare, Mail, MapPin, Phone, ArrowRight, Lightbulb, Target, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedHero } from "@/components/animated-hero"
import { AnimatedSections } from "@/components/animated-sections"
import { AnimatedContact } from "@/components/animated-contact"

export default function Home() {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Boost your brand presence across all social platforms with strategic content and targeted campaigns.",
      icon: "BarChart3"
    },
    {
      title: "Branding & Graphic Design",
      description: "Create a memorable brand identity with professional logo design and visual assets.",
      icon: "Palette"
    },
    {
      title: "Web & App Development",
      description: "Custom websites and mobile applications built with cutting-edge technology.",
      icon: "Code"
    },
    {
      title: "SEO & Search Visibility",
      description: "Improve your search rankings and drive organic traffic to your business.",
      icon: "Search"
    },
    {
      title: "Consultancy",
      description: "Strategic guidance to help you make smart business decisions and optimize growth.",
      icon: "Users"
    },
    {
      title: "Campaign Management",
      description: "Strategic campaign planning and execution for maximum advertising impact.",
      icon: "MessageSquare"
    }
  ];

  const valueProps = [
    {
      title: "Targeted Advertising",
      description: "Precision targeting to reach your ideal audience",
      icon: "Target"
    },
    {
      title: "Maximum ROI",
      description: "Optimized campaigns that deliver the highest return on investment",
      icon: "BarChart3"
    },
    {
      title: "Data-Driven Results",
      description: "Real-time analytics and performance tracking",
      icon: "Lightbulb"
    },
    {
      title: "Expert Management",
      description: "Professional campaign handling from strategy to execution",
      icon: "TrendingUp"
    }
  ];

  return (
    <main className="min-h-screen bg-background relative">
      {/* Clean background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/10 z-0" />
      <div className="relative z-20">
        <Header />
        
        {/* Hero Section */}
        <AnimatedHero />
        
        {/* Animated Sections */}
        <AnimatedSections services={services} valueProps={valueProps} />
                
        {/* Mid-page CTA */}
        <section className="py-20 md:py-32 px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Smarter and Market Louder?</h2>
            <p className="text-lg mb-8 opacity-90">Join hundreds of businesses already growing with Theday Digital</p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="#waitlist">
                Join Our Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
        
        {/* Contact Section */}
        <AnimatedContact />
        
        <Footer />
      </div>
    </main>
  )
}
