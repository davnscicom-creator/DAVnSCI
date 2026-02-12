import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BarChart3, TrendingUp, Users, Award, BookOpen, Share2 } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-32">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
                🧬 Research Excellence Through Three Core Strengths
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-balance lg:text-6xl">
                Data analysis for <span className="text-primary">Academia, Agriculture & Health</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                End-to-end workflows for genomics (RNA-seq, WGS, amplicon) and research/clinical analytics - QC to figures to submission. We also deliver data solutions for agriculture and food (traceability and safety analytics).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <a href="mailto:info@davnsci.co.in?subject=Start a Project">Start a project</a>
              </Button>
              <Button variant="outline" size="lg" className="text-base bg-transparent" asChild>
                <a href="#services">See workflows</a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-primary">X+</div>
                <div className="text-sm text-muted-foreground">Genomics datasets processed (RNA-seq/WGS/16S)</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-primary">≤7 days</div>
                <div className="text-sm text-muted-foreground">Median turnaround for analysis packs</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-primary">Y+</div>
                <div className="text-sm text-muted-foreground">Figures delivered ready for journals</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Integrated Research Impact</h3>
                  <div className="flex items-center space-x-1 text-sm text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span>Growing</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm flex items-center">
                      <BarChart3 className="h-4 w-4 mr-2 text-primary" />
                      Data Analysis Quality
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="w-16 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">Good</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-primary" />
                      Publication Success
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="w-18 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">Strong</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm flex items-center">
                      <Share2 className="h-4 w-4 mr-2 text-primary" />
                      Social Media Impact
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-muted rounded-full">
                        <div className="w-16 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">Active</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Current Projects</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">5 active projects</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Award className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
