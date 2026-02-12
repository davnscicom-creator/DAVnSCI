import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Download, FileText } from 'lucide-react'

export function WorkflowsSection() {
  const workflows = [
    {
      title: "Genomics Sprint",
      duration: "7–10 days",
      inputs: "FASTQ/metadata",
      outputs: "QC, DE/VCF, enrichment, figure pack, SRA/GEO files",
      primaryCTA: {
        label: "View sample report",
        href: "#publications"
      },
      secondaryCTA: {
        label: "Start a project",
        href: "/start"
      },
      icon: FileText
    },
    {
      title: "Health Outcomes Briefing",
      duration: "2–4 weeks",
      inputs: "Cohort extract",
      outputs: "Cleaned dataset, model summary, charts, 2-page brief",
      primaryCTA: {
        label: "See method",
        href: "#services"
      },
      secondaryCTA: {
        label: "Start a project",
        href: "/start"
      },
      icon: FileText
    },
    {
      title: "Traceability Starter",
      duration: "4–6 weeks",
      inputs: "Purchase/lab/dispatch records",
      outputs: "Lot genealogy, exception alerts, COA bundle",
      primaryCTA: {
        label: "Download scope",
        href: "#services"
      },
      secondaryCTA: {
        label: "Start a project",
        href: "/start"
      },
      icon: Download
    }
  ]

  return (
    <section id="workflows" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Workflows</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready-to-go service packages designed for common research and industry needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {workflows.map((workflow, index) => {
            const Icon = workflow.icon
            return (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {workflow.duration}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{workflow.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Inputs:</p>
                    <p className="text-sm">{workflow.inputs}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Outputs:</p>
                    <p className="text-sm">{workflow.outputs}</p>
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col gap-2">
                  <Button asChild variant="outline" className="w-full">
                    <a href={workflow.primaryCTA.href}>
                      {workflow.primaryCTA.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild className="w-full">
                    <a href={workflow.secondaryCTA.href}>
                      {workflow.secondaryCTA.label}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
