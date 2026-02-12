"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText, Users, TrendingUp, CheckCircle2, Mail } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

function ProductCard({ pub }: { pub: any }) {
  const [currency, setCurrency] = useState<"india" | "international">("international")

  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 ${pub.featured ? "ring-2 ring-primary/20 bg-primary/5" : ""}`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <Badge variant={pub.featured ? "default" : "secondary"} className="text-xs">
            {pub.category}
          </Badge>
          {pub.featured && (
            <Badge variant="outline" className="text-xs">
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">{pub.title}</CardTitle>
        <CardDescription className="text-sm">{pub.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <FileText className="h-3 w-3" />
              {pub.type}
            </span>
            {pub.size !== "N/A" && <span>{pub.size}</span>}
          </div>
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {pub.downloads}
          </span>
        </div>

        {pub.price !== "Free" && pub.priceIndia && pub.priceInternational && (
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-lg font-bold">{pub.priceIndia}</span>
                <span className="text-sm text-muted-foreground ml-1">(India)</span>
              </div>
              <div>
                <span className="text-lg font-bold">{pub.priceInternational}</span>
                <span className="text-sm text-muted-foreground ml-1">(International)</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Choose your payment currency. Product content is identical.
            </p>

            <Tabs
              value={currency}
              onValueChange={(value) => setCurrency(value as "india" | "international")}
              className="w-full mt-3"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="india" className="text-xs">
                  India (₹ / UPI, Cards)
                </TabsTrigger>
                <TabsTrigger value="international" className="text-xs">
                  International ($ / Cards)
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Button
              className="w-full mt-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              variant="default"
              asChild
            >
              <a
                href={currency === "india" ? pub.instamojoUrl : pub.gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                {currency === "india" ? "Buy in India (₹ via UPI/Card)" : "Buy International ($ via Card)"}
              </a>
            </Button>

            <div className="mt-3 space-y-1">
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-600" />
                Instant access after payment. Invoice by the payment provider.
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Mail className="h-3 w-3" />
                Need help?{" "}
                <a href="mailto:info@davnsci.co.in" className="underline hover:text-primary">
                  info@davnsci.co.in
                </a>
              </p>
            </div>
          </div>
        )}

        {(pub.price === "Free" || !pub.priceIndia || !pub.priceInternational) && (
          <Button
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            variant={pub.featured ? "default" : "outline"}
            asChild
          >
            <a href={pub.gumroadUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              {pub.price === "Free" ? "Download Free" : "View on Gumroad"}
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export function PublicationsSection() {
  const publications = [
    {
      title: "The Researcher's ChatGPT Handbook",
      description: "Practical Hands-on Guide for Smarter, Faster, Publishable Research Using GPT-5.",
      category: "Handbook",
      type: "PDF",
      size: "4.69 MB",
      downloads: "1.2K",
      price: "$5",
      priceIndia: "₹400",
      priceInternational: "$5",
      featured: true,
      gumroadUrl: "https://davnsci.gumroad.com/l/chatgptresearch",
      instamojoUrl: "https://davnscicom.myinstamojo.com/product/the-researcher-s-chatgpt-handbook/",
    },
    {
      title: "Accelerating Research with NotebookLM: A Strategic Handbook",
      description:
        "A practical, no-nonsense handbook that shows researchers how to turn Google's NotebookLM into a powerful, source-grounded research engine. Learn workflows for literature review, synthesis, qualitative analysis, manuscript drafting, presentations, and project reporting—all with rigorous, citation-based AI methods.",
      category: "Handbook",
      type: "PDF",
      size: "8.62 MB",
      downloads: "New",
      price: "$5",
      priceIndia: "₹400",
      priceInternational: "$5",
      featured: false,
      gumroadUrl: "https://davnsci.gumroad.com/l/NotebookLM",
      instamojoUrl: "https://davnscicom.myinstamojo.com/product/accelerating-research-with-notebooklm-a-stra/",
    },
    {
      title: "Statistical Analysis Framework for Agricultural Research Data",
      description: "Standardized approaches to analyzing crop yield, soil health, and climate impact data.",
      category: "Methodology",
      type: "PDF",
      size: "1.8 MB",
      downloads: "890",
      price: "$24",
      gumroadUrl: "#",
    },
    {
      title: "Effective Research Communication Templates",
      description: "Ready-to-use templates for research presentations, grant proposals, and policy briefs.",
      category: "Templates",
      type: "ZIP",
      size: "5.1 MB",
      downloads: "2.1K",
      price: "$19",
      gumroadUrl: "#",
    },
    {
      title: "Data Management Protocols for Life Sciences",
      description: "FAIR data principles implementation guide with practical workflows and checklists.",
      category: "Protocol",
      type: "PDF",
      size: "1.5 MB",
      downloads: "756",
      price: "$22",
      gumroadUrl: "#",
    },
    {
      title: "R & Python Code Libraries for Biostatistics",
      description: "Open-source code repository for common bioinformatics and statistical analysis tasks.",
      category: "Code Library",
      type: "GitHub",
      size: "N/A",
      downloads: "3.4K",
      price: "Free",
      gumroadUrl: "#",
    },
    {
      title: "Grant Writing Success: Data-Driven Proposals",
      description: "Evidence-based strategies for incorporating compelling data visualizations in research proposals.",
      category: "Guide",
      type: "PDF",
      size: "2.7 MB",
      downloads: "1.5K",
      price: "$27",
      gumroadUrl: "#",
    },
  ]

  return (
    <section id="publications" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Knowledge Resources
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-balance">Access Our Research Publications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore our collection of research guides, templates, and methodologies available on Gumroad. Professional
            resources to enhance your data analysis and communication capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {publications.map((pub, index) => (
            <ProductCard key={index} pub={pub} />
          ))}
        </div>

        <div className="text-center">
          <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Stay Updated with Latest Research</h3>
            <p className="text-muted-foreground mb-6">
              Get notified when we publish new research guides, case studies, and methodology papers on Gumroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Join 500+ researchers receiving our monthly updates</p>
          </div>
        </div>
      </div>
    </section>
  )
}
