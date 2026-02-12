import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Rocket } from "lucide-react"

export function TrainingCoursesSection() {
  return (
    <section id="training-courses" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2">
            <BookOpen className="h-3 w-3 mr-1" />
            Professional Development
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl text-balance">Training Courses</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Build your research capabilities with expert-led courses designed for academics, researchers, and data
            professionals.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="max-w-2xl w-full p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="space-y-6">
              <Rocket className="h-16 w-16 text-primary mx-auto" />
              <h3 className="text-3xl font-bold">Exciting Courses Coming Soon!</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're developing comprehensive training programs in data analysis, visualization, research
                communication, and more. Our expert-led courses will help you build essential research skills and
                advance your career.
              </p>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">Be the first to know when our courses launch</p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                  />
                  <Button>Notify Me</Button>
                </div>
              </div>
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-3">Need immediate training support?</p>
                <Button variant="outline" size="lg">
                  Request Custom Training
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
