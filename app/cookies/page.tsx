import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiePolicyPage() {
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
          <div>
            <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
            <p className="text-muted-foreground">Effective date: 16 October 2025</p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. What cookies are</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small files stored on your device when you visit a website. They help the site work,
                remember preferences, and measure usage. We also use similar technologies such as local storage and
                pixels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How we use cookies</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Essential cookies:</strong> required for security, load balancing,
                  and basic functionality.
                </p>
                <p>
                  <strong className="text-foreground">Preference cookies:</strong> remember choices like language and
                  forms.
                </p>
                <p>
                  <strong className="text-foreground">Analytics cookies:</strong> help us understand how the site is
                  used so we can improve it.
                </p>
                <p>
                  <strong className="text-foreground">Marketing cookies:</strong> used only if we run campaigns to
                  measure performance or show relevant content.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Examples of cookies we may use</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>Hosting and performance cookies from our hosting provider to serve pages and measure uptime.</li>
                <li>Analytics cookies to understand page views and traffic sources.</li>
                <li>Session cookies that expire when you close the browser.</li>
                <li>Persistent cookies that last longer to remember preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Your choices</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>You can manage or block cookies in your browser settings.</li>
                <li>If we show a cookie banner, you can accept all, reject non-essential, or choose categories.</li>
                <li>Turning off some cookies may affect site features.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                Session cookies expire when you close the browser. Persistent cookies last for a defined period,
                typically 1 to 24 months, unless you delete them sooner.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Changes</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy. The effective date will be updated when changes are made.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For cookie questions:{" "}
                <a href="mailto:info@davnsci.co.in" className="text-primary hover:underline">
                  info@davnsci.co.in
                </a>
              </p>
            </section>
          </div>

          <div className="pt-8">
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
