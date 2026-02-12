import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-muted-foreground">Effective date: 16 October 2025</p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Who we are</h2>
              <p className="text-muted-foreground leading-relaxed">
                DAVnSCI.COM LLP operates the site https://davnsci.co.in and provides analytics, visualisation,
                communication, publishing support, and training services. We act as the data controller for personal
                data we collect through the site and as a processor when we handle client data under a contract.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. What we collect</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  <strong>Contact data:</strong> name, email, phone, organisation, role.
                </p>
                <p>
                  <strong>Transaction data:</strong> products or services purchased, invoices, payment confirmation from
                  processors.
                </p>
                <p>
                  <strong>Usage data:</strong> pages visited, clicks, device and browser information, cookies and
                  similar technologies.
                </p>
                <p>
                  <strong>Training data:</strong> attendance, feedback, assessments, certificate status.
                </p>
                <p>
                  <strong>Support data:</strong> messages and attachments you send us.
                </p>
                <p>
                  <strong>Optional marketing data:</strong> preferences and subscription status.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. How we collect it</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>Directly from you through forms, checkout, email, or chat.</li>
                <li>Automatically through cookies and analytics.</li>
                <li>
                  From third parties where you give permission, for example payment processors or video platforms.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Why we use your data</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>To provide and improve the site and services.</li>
                <li>To process orders, deliver digital products, and issue invoices.</li>
                <li>To communicate about service updates, training schedules, and support.</li>
                <li>To run analytics, security, and fraud prevention.</li>
                <li>To comply with legal obligations and enforce agreements.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Legal bases include consent, contract performance, legitimate interests, and compliance with law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We share data with trusted service providers that help us operate the site, deliver training, process
                payments, host files, send emails, and run analytics. Providers only use data under our instructions. We
                do not sell personal data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. International transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Data may be processed outside your country. We use reasonable safeguards such as contractual clauses and
                provider certifications.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We keep personal data only as long as needed for the purpose collected, plus any period required by law
                or to resolve disputes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Your rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your region, you may have the right to access, correct, delete, restrict, object, and port
                your data.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>EU and UK users may contact us to exercise GDPR rights.</li>
                <li>
                  California users may request information about personal data collected and request deletion where
                  applicable.
                </li>
                <li>Indian users may write to us for correction and grievance redressal.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Contact: info@davnsci.co.in. We will verify your request before action.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Marketing choices</h2>
              <p className="text-muted-foreground leading-relaxed">
                You can opt out of marketing emails at any time using the unsubscribe link. Transactional emails will
                still be sent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">10. Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We apply reasonable technical and organisational measures, including access controls, encryption at rest
                where supported by providers, and regular review of permissions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">11. Children</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our site is not directed to children under 13. If you believe a child has provided personal data,
                contact us to delete it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">12. Third-party links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Links to other sites are provided for convenience. Their privacy practices are their own.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">13. Changes</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Policy. Significant changes will be posted on this page with a new effective date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">14. Contact and grievance</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy questions or grievances: info@davnsci.co.in
              </p>
            </section>
          </div>

          <div className="pt-8 border-t">
            <Link href="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
