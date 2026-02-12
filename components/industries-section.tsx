import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Heart, Wheat, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

const industries = [
  {
    icon: GraduationCap,
    title: "Academia & Research",
    description: "Bioinformatics, analysis, figures, manuscripts.",
  },
  {
    icon: Heart,
    title: "Health & Life Sciences",
    description: "Cohort/outcomes analytics, dashboards, plain-language reports.",
  },
  {
    icon: Wheat,
    title: "Agriculture & Food",
    description: "Traceability graphs, safety analytics, regulator-ready packs.",
  },
  {
    icon: TrendingUp,
    title: "Startups/MSMEs",
    description: "Lean evidence packs, investor dashboards.",
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl text-balance">Industries</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            We serve diverse sectors with specialized data analysis and research solutions tailored to industry-specific
            needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {React.createElement(industry.icon, { className: "h-8 w-8 text-primary" })}
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{industry.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{industry.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <a href="#services">See solutions in your sector</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
