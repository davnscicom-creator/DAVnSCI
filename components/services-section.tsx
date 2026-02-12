import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dna, LineChart, BarChart3, FileText, Sprout, ArrowRight } from 'lucide-react'

const deliverables = [
  {
    id: "bioinformatics-genomics",
    icon: Dna,
    title: "Bioinformatics & Genomics",
    description:
      "QC → alignment/assembly → variant calling → differential expression → enrichment/pathways → SRA/GEO submission.",
    deliverables: "Reproducible pipeline, methods & parameters, figure pack, submission files.",
  },
  {
    id: "research-health-analysis",
    icon: LineChart,
    title: "Research & Health Data Analysis",
    description:
      "Study design, statistical modelling, cohort/outcomes analysis, observational RWD pipelines, evidence briefs.",
    deliverables: "Analysis notebook, tables/figures, executive summary for PIs/clinicians.",
  },
  {
    id: "visualization-dashboards",
    icon: BarChart3,
    title: "Visualisation & Decision Dashboards",
    description:
      "Interactive dashboards and publication-grade figures; color-blind-safe palettes; export to PNG/SVG/PDF.",
    deliverables: "Live dashboard link, figure system, data dictionary.",
  },
  {
    id: "reporting-publication",
    icon: FileText,
    title: "Reporting & Publication Support",
    description:
      "Report writing, manuscript preparation, journal targeting, peer-review response, compliance formatting.",
    deliverables: "Submission-ready draft, cover letter, response matrix, checklist.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl text-balance">What we deliver</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            End-to-end workflows for genomics, research analytics, visualization, and publication support—delivering
            reproducible pipelines and submission-ready outputs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {deliverables.map((service, index) => (
            <Card
              key={index}
              id={service.id}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 scroll-mt-20"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>

                <div className="space-y-2 bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm">Deliverables:</h4>
                  <p className="text-sm text-muted-foreground">{service.deliverables}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary/5 border-2 border-primary/30 mb-12">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/20">
                <Sprout className="h-7 w-7 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">Also: Agriculture & Food Data Solutions</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription className="text-base leading-relaxed">
              Traceability/lot genealogy, food-safety surveillance (MRL/mycotoxin) and compliance reporting for
              boards/processors.
            </CardDescription>

            <div className="space-y-2 bg-background p-4 rounded-lg">
              <h4 className="font-semibold text-sm">Deliverables:</h4>
              <p className="text-sm text-muted-foreground">
                Chain-of-custody graphs, exceedance heatmaps, COA/SOP bundle.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8">
            Explore services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
