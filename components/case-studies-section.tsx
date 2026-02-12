import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react"

const caseStudies = [
  {
    title: "Agricultural Research Institute Data Transformation",
    client: "Kerala Agricultural University",
    category: "Research Institute",
    challenge: "Complex crop yield data across 15 districts needed clear visualization for policy recommendations.",
    solution: "Created interactive dashboards showing yield patterns, weather correlations, and predictive models.",
    results: [
      { metric: "Data Processing Time", improvement: "75% reduction" },
      { metric: "Policy Adoption Rate", improvement: "60% increase" },
      { metric: "Stakeholder Engagement", improvement: "3x improvement" },
    ],
    technologies: ["R", "Tableau", "Python", "GIS Mapping"],
    duration: "3 months",
    teamSize: "5 researchers",
  },
  {
    title: "Pharmaceutical R&D Analytics Platform",
    client: "Leading Pharma Company",
    category: "Corporate R&D",
    challenge: "Drug trial data scattered across multiple systems, hindering decision-making processes.",
    solution: "Integrated data pipeline with real-time analytics and automated reporting for clinical trials.",
    results: [
      { metric: "Report Generation", improvement: "90% faster" },
      { metric: "Data Accuracy", improvement: "99.5% achieved" },
      { metric: "Decision Speed", improvement: "50% faster" },
    ],
    technologies: ["Python", "SQL", "Power BI", "Machine Learning"],
    duration: "6 months",
    teamSize: "12 researchers",
  },
  {
    title: "Government Policy Impact Assessment",
    client: "State Planning Board",
    category: "Government",
    challenge: "Measuring the effectiveness of rural development programs across multiple parameters.",
    solution: "Comprehensive analytics framework with public-facing dashboards and policy recommendations.",
    results: [
      { metric: "Program Efficiency", improvement: "40% increase" },
      { metric: "Public Transparency", improvement: "Complete visibility" },
      { metric: "Budget Optimization", improvement: "₹2.5Cr saved" },
    ],
    technologies: ["D3.js", "React", "PostgreSQL", "Statistical Analysis"],
    duration: "4 months",
    teamSize: "8 analysts",
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl text-balance">Success Stories</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Real projects, measurable results. See how we've helped organizations transform their data challenges into
            competitive advantages.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{study.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {study.teamSize}
                      </div>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{study.title}</CardTitle>
                    <CardDescription className="text-base">
                      <span className="font-medium">{study.client}</span>
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-destructive">Challenge</h4>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Solution</h4>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold mb-4 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                      Key Results
                    </h4>
                    <div className="space-y-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm font-medium">{result.metric}</span>
                          <span className="text-sm font-bold text-green-600">{result.improvement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-primary/5 border-primary/20">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Ready to Create Your Success Story?</h3>
              <p className="text-muted-foreground max-w-md">
                Join 50+ organizations that have transformed their data challenges into competitive advantages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Start Your Project</Button>
                <Button variant="outline" size="lg">
                  Download Case Studies
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
