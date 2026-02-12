import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Pencil, TrendingUp } from "lucide-react"

export function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2">
            <Lightbulb className="h-3 w-3 mr-1" />
            Knowledge Hub
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl text-balance">Blog & Insights</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Expert perspectives on data analysis, research communication, and scientific innovation.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="max-w-2xl w-full p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="space-y-6">
              <Pencil className="h-16 w-16 text-primary mx-auto" />
              <h3 className="text-3xl font-bold">Insights & Articles Coming Soon!</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're preparing valuable content on data analysis techniques, research best practices, and industry
                insights. Our blog will feature expert perspectives from our team of experienced researchers and data
                scientists.
              </p>
              <div className="pt-4">
                <div className="inline-block p-6 bg-background rounded-lg border border-border/50 mb-6">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Subscribe to Our Newsletter</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get notified when we publish new articles and research insights
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                    />
                    <Button>Subscribe</Button>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-3">Have a topic you'd like us to cover?</p>
                <Button variant="outline" size="lg">
                  Suggest a Topic
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
