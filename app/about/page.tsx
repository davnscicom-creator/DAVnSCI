
"use client";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About DAVnSCI</h1>

      <p className="mb-6">
        DAVnSCI (Data Analysis, Visualization and Communication in Science) is a
        research support initiative that helps institutions convert complex data into
        reliable insights and communicate them with clarity and impact.
      </p>

      <h2 className="text-2xl font-semibold mb-3">What we do</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Research-grade data analysis for biology and allied domains</li>
        <li>Publication-ready data visualization and scientific graphics</li>
        <li>Research communication across reports, presentations and media</li>
        <li>Training programs for teams and students</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Why it matters</h2>
      <p>
        Better analysis and better communication reduce time-to-insight, strengthen
        credibility, and improve the real-world visibility of research outcomes.
      </p>
    </main>
  );
}"use client";export default function ServicesPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Data Analysis</h2>
        <p>
          Advanced statistical modelling, genomics analytics, bioinformatics
          pipelines, and research-grade data interpretation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Data Visualization</h2>
        <p>
          Scientific graphics, publication-ready figures, dashboards,
          and interactive visual communication.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Science Communication</h2>
        <p>
          Manuscript support, research dissemination, strategic communication,
          and institutional visibility enhancement.
        </p>
      </section>
    </main>
  );
}

