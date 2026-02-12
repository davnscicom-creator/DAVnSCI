import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-16">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
            <p className="text-muted-foreground">Effective date: 16 October 2025</p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                <strong>Legal entity:</strong> DAVnSCI.COM LLP, registered in India
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a href="https://davnsci.co.in" className="text-primary hover:underline">
                  https://davnsci.co.in
                </a>
              </p>
              <p>
                <strong>Contact:</strong>{" "}
                <a href="mailto:info@davnsci.co.in" className="text-primary hover:underline">
                  info@davnsci.co.in
                </a>
              </p>
              <p>
                <strong>Registered address:</strong> First floor, Skyways Building, Pottakuzhy, Pattom,
                Thiruvananthapuram, Kerala - 673009, INDIA
              </p>
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. About these Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms govern your access to and use of our website, services, training, and digital products. By
                using the site you agree to these Terms and to the Privacy and Cookie Policies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Eligibility and accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must be at least 18 years old or have legal consent from a guardian.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you create an account, you are responsible for keeping your login safe and for all activity under it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Services and digital products</h2>
              <p className="text-muted-foreground leading-relaxed">
                Services include data analysis, visualisation, communication, publishing support, and training.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Digital products include online manuals, handbooks, templates, and e-books.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unless a separate contract is signed, deliverables are provided as described on the relevant service or
                product page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Orders, pricing, and taxes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prices are shown in the checkout currency and may change without notice before purchase.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Taxes and payment processor fees may apply as per law. A tax invoice will be issued where required.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. License for digital products</h2>
              <p className="text-muted-foreground leading-relaxed">
                On full payment, you receive a non-exclusive, non-transferable license for personal or organisational
                use within your team unless stated otherwise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You may not resell, repackage, or publicly distribute our digital products without written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Training and events</h2>
              <p className="text-muted-foreground leading-relaxed">
                Formats include live online, in-person, and hybrid.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We may record sessions for quality and participants may receive access to recordings subject to the plan
                purchased.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Refund and cancellation policy</h2>

              <h3 className="text-xl font-semibold mt-6">7.1 Digital products</h3>
              <p className="text-muted-foreground leading-relaxed">
                Instant digital downloads are generally not refundable once the download link is delivered.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If files are corrupted or you cannot access them, contact us within 7 days and we will replace the files
                or provide a refund if we cannot resolve the issue.
              </p>

              <h3 className="text-xl font-semibold mt-6">7.2 Public training cohorts</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Full refund if you cancel 7 or more calendar days before the start date.</li>
                <li>50 percent refund if you cancel 3 to 6 days before the start date.</li>
                <li>No refund if you cancel within 2 days of the start date or after the cohort begins.</li>
                <li>You may request a one-time seat transfer to a future cohort subject to availability.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">7.3 Corporate or custom training and services</h3>
              <p className="text-muted-foreground leading-relaxed">
                Refunds and cancellations follow the statement of work or purchase order.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unless agreed otherwise, a non-refundable advance of 30 to 50 percent is due at acceptance, with the
                balance on delivery milestones.
              </p>

              <h3 className="text-xl font-semibold mt-6">7.4 Event cancellation by us</h3>
              <p className="text-muted-foreground leading-relaxed">
                If we cancel or reschedule an event, you may choose a full refund or a transfer to a new date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Acceptable use</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to misuse the site, attempt to breach security, reverse engineer, or use the services to
                infringe any law or third-party rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Intellectual property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Site content, course materials, templates, and brand assets are owned by DAVnSCI.COM LLP or its
                licensors. You receive only the rights expressly granted.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">10. Third-party tools and links</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use trusted providers for hosting, analytics, video, and payments. Third-party terms may apply.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">11. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We keep non-public client data confidential and use it only to deliver the agreed services, except where
                disclosure is required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">12. Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Privacy Policy explains how we collect and use personal data. By using the site you consent to that
                Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">13. Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Services and content are provided on an as-is basis. We do not promise that the site will be
                uninterrupted or error free.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">14. Limitation of liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, DAVnSCI.COM LLP is not liable for indirect, incidental, special,
                or consequential damages. Our total liability for any claim is limited to the amount you paid for the
                service or product that gave rise to the claim.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">15. Indemnity</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold DAVnSCI.COM LLP harmless from claims arising from your misuse of the
                site or breach of these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">16. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may suspend or terminate access if you violate these Terms. Clauses on IP, confidentiality, limits of
                liability, and indemnity survive termination.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">17. Governing law and dispute resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of India. Courts at Thiruvananthapuram, Kerala shall have exclusive
                jurisdiction. Good-faith negotiation is encouraged before litigation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">18. Changes</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms at any time. The revised version will have a new effective date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">19. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms or refunds:{" "}
                <a href="mailto:info@davnsci.co.in" className="text-primary hover:underline">
                  info@davnsci.co.in
                </a>
              </p>
            </section>
          </div>

          <div className="pt-8 border-t">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
