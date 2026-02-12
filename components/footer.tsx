import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-16">
        <div className="mb-12 p-6 bg-background/60 border rounded-lg">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Standards & good practices we align with:</span>{" "}
            FAIR data, GEO/SRA, CONSORT/PRISMA (as applicable), GS1, ISO 22000.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 3v18h18" />
                  <path d="M7 12l3-3 3 3 5-5" />
                  <circle cx="7" cy="12" r="1" />
                  <circle cx="10" cy="9" r="1" />
                  <circle cx="13" cy="12" r="1" />
                  <circle cx="18" cy="7" r="1" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold">DAVnSCI</span>
                <div className="text-xs text-muted-foreground -mt-1">Data • Analysis • Visualization</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming complex research data into clear insights, impactful visualizations, and confident decisions
              through expert analysis and practical training.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Data Analysis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Data Visualization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Data Communication
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Consulting Services
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="font-semibold">Industries</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Research Institutes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Universities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Government Bodies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Corporate R&D
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Startups & FPOs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get insights on data analysis trends and research methodologies.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="text-sm" />
              <Button size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span>+919495982747</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span>+919567982747</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <span>info@davnsci.co.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3" />
                <span>
                  First floor, Skyways Building, Pottakuzhy, Pattom, Thiruvananthapuram, Kerala - 673009, INDIA
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">© 2025 DAVnSCI.COM LLP. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="/cookies" className="hover:text-primary transition-colors">
              Cookies
            </a>
            <a href="/start" className="hover:text-primary transition-colors font-medium">
              Start a project
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
