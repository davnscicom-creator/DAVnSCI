import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Award, Users, Calendar } from "lucide-react"

const teamStats = [
  { label: "Years of Experience", value: "3+", icon: Calendar },
  { label: "Team Members", value: "10+", icon: Users },
  { label: "Certifications", value: "25+", icon: Award },
  { label: "Based in", value: "Kerala, India", icon: MapPin },
]

const expertise = [
  "Data Analysis & Bioinformatics",
  "Research Publication Support",
  "Social Media Strategy",
  "Scientific Visualization",
  "Research Communication",
  "Artificial Intelligence",
  "Training & Capacity Building",
]

const values = [
  {
    title: "Scientific Rigor",
    description: "We apply the highest standards of scientific methodology to every analysis and recommendation.",
  },
  {
    title: "Clear Communication",
    description: "Complex insights become actionable knowledge through our strategic communication approach.",
  },
  {
    title: "Collaborative Partnership",
    description: "We work alongside your team, building internal capabilities while delivering immediate results.",
  },
  {
    title: "Continuous Innovation",
    description: "We stay at the forefront of data science tools and techniques to provide cutting-edge solutions.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl text-balance">About DAVnSCI</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            We are a specialized LLP based in Thiruvananthapuram, India, dedicated to transforming complex research data
            into clear insights and confident decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Maximize research impact through three integrated pillars: expert data analysis, strategic publication
                  support, and amplified social media presence. We transform research potential into measurable academic
                  success across all channels of scholarly communication.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Our Approach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We combine deep technical expertise with strategic thinking to solve the most pressing data challenges
                  facing researchers and organizations today.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {teamStats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <stat.icon className="h-4 w-4 text-primary" />
                      <div>
                        <div className="font-semibold text-sm">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Core Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {expertise.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Why Choose DAVnSCI?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      Integrated Approach
                    </Badge>
                    <span className="text-sm">Data analysis + Publications + Social media impact</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      Proven Results
                    </Badge>
                    <span className="text-sm">75+ publications, 50K+ social reach, 100+ scholars</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      End-to-End Service
                    </Badge>
                    <span className="text-sm">From raw data to published impact</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Our Values</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
