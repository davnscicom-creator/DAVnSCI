import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search, FileText, Wrench, Eye, Rocket } from 'lucide-react'

export function HowWeWorkSection() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Understand your research question and data"
    },
    {
      icon: FileText,
      title: "Scope & quote",
      description: "Clear timeline and deliverables"
    },
    {
      icon: Wrench,
      title: "Build",
      description: "Execute analysis and create outputs"
    },
    {
      icon: Eye,
      title: "Review",
      description: "Quality check and feedback"
    },
    {
      icon: Rocket,
      title: "Deliver",
      description: "+10-day support included"
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined process from discovery to delivery, with continued support to ensure your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card className="p-6 text-center h-full flex flex-col items-center justify-center">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/20 z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <a href="/start">Start a project</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
