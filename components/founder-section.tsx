import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Linkedin,
  Mail,
  Award,
  GraduationCap,
  Users,
  TrendingUp,
  Database,
  Palette,
  FlaskConical,
  Brain,
} from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Santhosh J. Eapen",
    title: "Founder & Principal Consultant",
    image: "/images/dr-santhosh-profile.png",
    domains: ["Agriculture", "AI for Research", "Scholarly Publishing"],
    oneLiner: "Turns data and evidence into clear decisions and publishable outputs.",
    bio: "Santhosh guides teams across agri research, AI-enabled analysis, and publication strategy. He aligns problem framing, analytics, and communication, and mentors teams to deliver journals-ready manuscripts and policy briefs.",
    achievements: [
      { icon: GraduationCap, label: "Study Design", value: "Expert" },
      { icon: Brain, label: "AI-assisted Workflows", value: "Advanced" },
      { icon: Award, label: "Publication Strategy", value: "Specialist" },
      { icon: TrendingUp, label: "Research Mentoring", value: "Standard" },
    ],
    expertise: [
      "Study Design",
      "AI-assisted Workflows",
      "Publication Strategy",
      "Agriculture Research",
      "Policy Brief Development",
      "Team Mentoring",
    ],
    signatureOutputs: ["Decision Memo", "Submission-ready Manuscript"],
    quote: "Data tells a story, but it's our job to make sure that story is heard, understood, and acted upon.",
    linkedinUrl: "https://www.linkedin.com/in/santhosheapen/",
    googleScholarUrl: "https://scholar.google.com/citations?user=JIFGCKgAAAAJ&hl=en",
  },
  {
    name: "Dr. Anoop Ambikan",
    title: "Lead Bioinformatics",
    image: "/images/dr-anoop-ambikan.jpg",
    domains: ["NGS", "Transcriptomics", "RNA-seq"],
    oneLiner: "Turns raw reads into clean, reproducible insights.",
    bio: "Anoop specialises in NGS workflows from QC to differential expression and pathway analysis. He builds transparent, versioned pipelines, delivers methods-ready figures, and hands over fully documented reports. Focus areas include RNA-seq, amplicon studies, and functional enrichment for life science and agri projects.",
    achievements: [
      { icon: Database, label: "Pipeline Design", value: "Expert" },
      { icon: Brain, label: "DE Analysis", value: "Advanced" },
      { icon: Award, label: "Functional Annotation", value: "Specialist" },
      { icon: TrendingUp, label: "Reproducible Reports", value: "Standard" },
    ],
    expertise: [
      "Pipeline Design",
      "DE Analysis",
      "Functional Annotation",
      "NGS Workflows",
      "RNA-seq Analysis",
      "Amplicon Studies",
    ],
    signatureOutputs: ["Reproducible Report", "Publication-grade Figures"],
    quote: "Every dataset has patterns waiting to be discovered - our job is to find them and make them meaningful.",
    linkedinUrl: "https://www.linkedin.com/in/anoop-ambikan/",
  },
  {
    name: "Dr. Arun John",
    title: "Cheminformatics Lead",
    image: "/images/dr-arun-john.jpg",
    domains: ["QSAR", "Virtual Screening", "Ligand Design"],
    oneLiner: "Converts molecular data into shortlist-ready candidates.",
    bio: "Arun supports discovery teams with QSAR modelling, docking, and multi-parameter lead scoring. He standardises datasets, validates models, and presents clear go or no-go visuals for decision meetings. Comfortable working with proprietary or open data in regulated environments.",
    achievements: [
      { icon: FlaskConical, label: "QSAR", value: "Expert" },
      { icon: Award, label: "Docking", value: "Advanced" },
      { icon: Database, label: "ADMET Heuristics", value: "Specialist" },
      { icon: Users, label: "Lead Scoring", value: "Standard" },
    ],
    expertise: ["QSAR", "Docking", "ADMET Heuristics", "Virtual Screening", "Ligand Design", "Multi-parameter Scoring"],
    signatureOutputs: ["Ranked Hit List", "Method Brief"],
    quote: "Chemistry and computation together unlock new possibilities in molecular research and drug discovery.",
    linkedinUrl: "https://www.linkedin.com/in/dr-arun-john-a1051556/",
    googleScholarUrl: "https://scholar.google.com/citations?user=FTOn4vUAAAAJ&hl=en&oi=ao",
  },
  {
    name: "Mr. Sadeesh Joseph George",
    title: "Design Lead",
    image: "/images/mr-sadeesh-joseph-george.jpg",
    domains: ["Scientific Graphics", "Data Visualisation", "Brand"],
    oneLiner: "Makes complex science look simple and credible.",
    bio: "Sadeesh designs figures, posters, dashboards, and report layouts that meet journal and policy standards. He applies color-blind safe palettes, clean typography, and grid discipline, ensuring every chart tells a clear story.",
    achievements: [
      { icon: Palette, label: "Figure Systems", value: "Expert" },
      { icon: Award, label: "Infographics", value: "Advanced" },
      { icon: Database, label: "Report Design", value: "Specialist" },
      { icon: TrendingUp, label: "Visual Standards", value: "Standard" },
    ],
    expertise: [
      "Figure Systems",
      "Infographics",
      "Report Design",
      "Scientific Graphics",
      "Data Visualisation",
      "Brand Design",
    ],
    signatureOutputs: ["Figure Pack", "Report Template"],
    quote: "Great design makes complex science accessible and beautiful - that's where understanding meets impact.",
    linkedinUrl: "https://www.linkedin.com/in/sadeesh-joseph-89399517/?originalSubdomain=ae",
  },
  {
    name: "Dr. Sabrina Elsa Eapen",
    title: "Consultant, Life Sciences and Ayurveda",
    image: "/images/dr-sabrina-elsa-eapen.jpeg",
    domains: ["Life Science Writing", "Health Communication", "Ayurveda"],
    oneLiner: "Bridges lab evidence and public understanding.",
    bio: "Sabrina crafts evidence-based content for health and life sciences. She develops patient-friendly explainers, clinician briefs, and programme reports, aligning scientific accuracy with plain language.",
    achievements: [
      { icon: GraduationCap, label: "Plain-language Writing", value: "Expert" },
      { icon: Award, label: "Protocol Translation", value: "Advanced" },
      { icon: Users, label: "Health Briefs", value: "Specialist" },
      { icon: FlaskConical, label: "Evidence-based Content", value: "Standard" },
    ],
    expertise: [
      "Plain-language Writing",
      "Protocol Translation",
      "Health Briefs",
      "Life Science Writing",
      "Health Communication",
      "Ayurveda",
    ],
    signatureOutputs: ["Evidence Note", "Article Draft"],
    quote: "Clear communication transforms complex science into actionable knowledge that benefits everyone.",
    linkedinUrl: "https://www.linkedin.com/in/sabrina-elsa-eapen-4963bb160/",
  },
]

export function FounderSection() {
  return (
    <section id="experts" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-5xl text-balance">Meet Our Expert Team</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Our multidisciplinary team combines deep scientific expertise with cutting-edge technology to deliver
            exceptional research insights and data solutions.
          </p>
        </div>

        <div className="grid gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0">
                <div className="md:col-span-1 bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground mb-2">{member.title}</p>
                  {member.domains && (
                    <div className="flex flex-wrap gap-1 mb-2 justify-center">
                      {member.domains.map((domain, domainIndex) => (
                        <Badge key={domainIndex} variant="outline" className="text-xs">
                          {domain}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {member.oneLiner && <p className="text-sm text-muted-foreground italic mb-4">{member.oneLiner}</p>}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.name === "Dr. Santhosh J. Eapen" ? (
                      <>
                        <Button variant="outline" size="sm" asChild>
                          <a href="mailto:info@davnsci.co.in?subject=Book a 30-minute Consultation">
                            Book a 30-minute Consult
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={member.googleScholarUrl} target="_blank" rel="noopener noreferrer">
                            <GraduationCap className="h-4 w-4 mr-2" />
                            Scholar
                          </a>
                        </Button>
                      </>
                    ) : member.name === "Dr. Anoop Ambikan" ? (
                      <>
                        <Button variant="outline" size="sm" asChild>
                          <a href="mailto:info@davnsci.co.in?subject=Book a Consultation">Book a Consult</a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                      </>
                    ) : member.name === "Dr. Arun John" ? (
                      <>
                        <Button variant="outline" size="sm" asChild>
                          <a href="mailto:info@davnsci.co.in?subject=Book a Consultation">Book a Consult</a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={member.googleScholarUrl} target="_blank" rel="noopener noreferrer">
                            <GraduationCap className="h-4 w-4 mr-2" />
                            Scholar
                          </a>
                        </Button>
                      </>
                    ) : member.name === "Mr. Sadeesh Joseph George" ? (
                      <>
                        <Button variant="outline" size="sm">
                          Start a Design Brief
                        </Button>
                        <Button variant="outline" size="sm">
                          Portfolio
                        </Button>
                        <Button variant="outline" size="sm" asChild={!!member.linkedinUrl}>
                          {member.linkedinUrl ? (
                            <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4 mr-2" />
                              LinkedIn
                            </a>
                          ) : (
                            <>
                              <Linkedin className="h-4 w-4 mr-2" />
                              LinkedIn
                            </>
                          )}
                        </Button>
                      </>
                    ) : member.name === "Dr. Sabrina Elsa Eapen" ? (
                      <>
                        <Button variant="outline" size="sm" asChild>
                          <a href="mailto:info@davnsci.co.in?subject=Book a Consultation">Book a Consult</a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline" size="sm" asChild={!!member.linkedinUrl}>
                          {member.linkedinUrl ? (
                            <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-4 w-4 mr-2" />
                              LinkedIn
                            </a>
                          ) : (
                            <>
                              <Linkedin className="h-4 w-4 mr-2" />
                              LinkedIn
                            </>
                          )}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                      </>
                    )}
                  </div>
                </div>

                <div className="md:col-span-2 p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">About</h4>
                      <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {member.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center space-x-3">
                            <achievement.icon className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-semibold text-sm">{achievement.value}</div>
                              <div className="text-xs text-muted-foreground">{achievement.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Core Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {member.signatureOutputs && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Signature Outputs</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.signatureOutputs.map((output, outputIndex) => (
                            <Badge key={outputIndex} variant="default" className="text-xs">
                              {output}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <p className="text-sm italic text-muted-foreground">"{member.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
