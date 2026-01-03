import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Palette, Code, Users, Search, MessageSquare, DollarSign, Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Home() {
  const services = [
    {
      title: "Social Media Marketing",
      description: "We help companies increase brand exposure and broaden customer reach by providing our social media marketing services that include, content creation, graphics design, creative directions, video and photo production including an outstanding social media look and design.",
      icon: BarChart3
    },
    {
      title: "Branding & Graphic Design",
      description: "A great brand identity is not only the one by which people recognize you but also something to which people can relate themselves. Your company logo, business card, a website all should tell the story about your brand. At Mida, get your high-quality branding needs fulfilled, which would create an everlasting image of your company in your customer's eyes.",
      icon: Palette
    },
    {
      title: "Web & App Development",
      description: "If you have an idea that can have a digital solution that can be realized by a web or a mobile application software, We provide custom website and app development for our clients that is backed with the latest cutting edge technologies and designed to your specific needs.",
      icon: Code
    },
    {
      title: "SEO",
      description: "With SEO, your business wants to increase its visibility in search results on search engines like Google and Bing. You specifically focus on search results related to your company, products, services, or industry. We give topnotch search engine optimization services for our clients.",
      icon: Search
    },
    {
      title: "Consultancy",
      description: "We advise businesses on how they should handle their online presence and give tips on different marketing methodologies.",
      icon: MessageSquare
    },
    {
      title: "Campaign Management",
      description: "At Mida we run top notch campaigns through the digital world and leverage the different tiktok and instagram influencers we manage. We provide the right influencer for your campaign with the set budget you have for your promotional needs.",
      icon: DollarSign
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(0 0 0 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(0 0 0 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative">
        <Header />
        
        {/* Home Section */}
        <section id="home" className="py-20 md:py-32 px-4 overflow-hidden">
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
                  <a href="#pricing">
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Who We Are</h2>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="prose prose-lg prose-gray max-w-none">
                  <p className="text-xl leading-relaxed mb-8">
                    MIDA is a software and digital marketing company designed to be a growth operating system for startups, SMEs, and enterprises. We combine lean experimentation, scalable systems, and strategic messaging to help businesses validate product‑market fit, accelerate growth, and expand with clarity.
                  </p>
                  
                  <div className="my-8">
                    <div className="bg-muted/30 rounded-xl p-8 max-w-2xl w-full border border-border">
                      <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                      <p className="leading-relaxed">
                        Our mission is to systematize growth, offering a modular framework that blends software, marketing, and strategy into one backbone for sustainable success. MIDA empowers founders and enterprises to achieve freedom of time, space, and capital while building enduring businesses.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xl leading-relaxed mt-8">
                    We are committed to helping businesses grow through innovative solutions and strategic thinking.
                  </p>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="w-full max-w-3xl mx-auto">
                  <img 
                    src="/images/Social Media.png" 
                    alt="Mida Company" 
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">Comprehensive digital solutions designed to transform your business and drive growth</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Join Waitlist</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">Be the first to know when we launch</p>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/2">
                <Card className="border-border bg-card h-full">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground">natnaelayele80@gmail.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-muted-foreground">+251935189776</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:w-1/2">
                <Card className="border-border bg-card">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="waitlist-name" className="block text-sm font-medium mb-2">
                          Name <span className="text-destructive">*</span>
                        </label>
                        <Input id="waitlist-name" type="text" placeholder="Enter your name" required />
                      </div>
                      
                      <div>
                        <label htmlFor="waitlist-phone" className="block text-sm font-medium mb-2">
                          Phone Number <span className="text-destructive">*</span>
                        </label>
                        <Input id="waitlist-phone" type="tel" placeholder="Enter your phone number" required />
                      </div>
                      
                      <div>
                        <label htmlFor="waitlist-address" className="block text-sm font-medium mb-2">
                          Address <span className="text-destructive">*</span>
                        </label>
                        <Input id="waitlist-address" type="text" placeholder="Enter your address" required />
                      </div>
                      
                      <div>
                        <label htmlFor="waitlist-email" className="block text-sm font-medium mb-2">
                          Email Address <span className="text-destructive">*</span>
                        </label>
                        <Input id="waitlist-email" type="email" placeholder="Enter your email" required />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Join Waitlist
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  )
}
