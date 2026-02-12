import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { IndustriesSection } from "@/components/industries-section"
import { WorkflowsSection } from "@/components/workflows-section"
import { HowWeWorkSection } from "@/components/how-we-work-section"
import { PublicationsSection } from "@/components/publications-section"
import { TrainingCoursesSection } from "@/components/training-courses-section"
import { BlogSection } from "@/components/blog-section"
import { AboutSection } from "@/components/about-section"
import { FounderSection } from "@/components/founder-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <IndustriesSection />
        <WorkflowsSection />
        <HowWeWorkSection />
        <PublicationsSection />
        <TrainingCoursesSection />
        <BlogSection />
        <AboutSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
