"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Palette, Code, Users, Search, MessageSquare, Lightbulb, Target, TrendingUp } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

const ServiceIcon = ({ iconName }: { iconName: string }) => {
  const iconProps = { className: "h-6 w-6 sm:h-7 sm:w-7 text-primary" };
  
  switch (iconName) {
    case "BarChart3": return <BarChart3 {...iconProps} />;
    case "Palette": return <Palette {...iconProps} />;
    case "Code": return <Code {...iconProps} />;
    case "Users": return <Users {...iconProps} />;
    case "Search": return <Search {...iconProps} />;
    case "MessageSquare": return <MessageSquare {...iconProps} />;
    default: return <BarChart3 {...iconProps} />;
  }
};

const ValueIcon = ({ iconName }: { iconName: string }) => {
  const iconProps = { className: "h-8 w-8 sm:h-10 sm:w-10 text-primary" };
  
  switch (iconName) {
    case "Lightbulb": return <Lightbulb {...iconProps} />;
    case "TrendingUp": return <TrendingUp {...iconProps} />;
    case "BarChart3": return <BarChart3 {...iconProps} />;
    case "Target": return <Target {...iconProps} />;
    default: return <Lightbulb {...iconProps} />;
  }
};

export function AnimatedSections({ services, valueProps }: { services: Service[]; valueProps: ValueProp[] }) {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground mb-6">
                Theday Digital is your full-service growth partner, helping SMEs and startups scale smarter and market louder. 
                We combine cutting-edge technology with creative marketing strategies to deliver results that matter.
              </p>
              <p className="text-lg text-muted-foreground">
                From social media campaigns to custom software solutions, we provide everything you need to transform 
                your business and stand out in today's competitive digital landscape.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BarChart3 className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">Marketing</h3>
              </motion.div>
              <motion.div 
                className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Palette className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">Branding</h3>
              </motion.div>
              <motion.div 
                className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">Software</h3>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="border-border hover:shadow-xl transition-all duration-300 hover:border-primary/50 h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="p-2 sm:p-3 rounded-lg bg-primary/10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-center justify-center">
                          <ServiceIcon iconName={service.icon} />
                        </div>
                      </motion.div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Theday Digital?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="inline-flex p-3 sm:p-4 rounded-full bg-primary/10 mb-4"
                  whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-center">
                    <ValueIcon iconName={prop.icon} />
                  </div>
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold mb-2"
                  whileHover={{ color: "#8b5cf6" }}
                >
                  {prop.title}
                </motion.h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}