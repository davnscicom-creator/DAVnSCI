export default function HomePage() {
  return (
    <main>

      <HeroSection />

      {/* Core Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Transforming Research Data into Strategic Insight
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-xl font-semibold mb-2">Advanced Data Analysis</h3>
              <p className="mb-4">
                Rigorous analytical workflows for genomics, transcriptomics,
                metagenomics and complex biological datasets.
              </p>
              <a href="/services" className="text-primary font-medium">
                Explore Services →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Scientific Visualization</h3>
              <p className="mb-4">
                Publication-grade figures, dashboards and graphical narratives
                that clarify complex findings.
              </p>
              <a href="/services" className="text-primary font-medium">
                View Capabilities →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Research Communication</h3>
              <p className="mb-4">
                Strengthening institutional relevance through impactful
                dissemination strategies.
              </p>
              <a href="/about" className="text-primary font-medium">
                About DAVnSCI →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Elevate Your Research Impact?
          </h2>
          <a href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-lg">
            Get in Touch
          </a>
        </div>
      </section>

    </main>
  );
}
