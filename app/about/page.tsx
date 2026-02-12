
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
}
