export default function sitemap() {
  const baseUrl = "https://davnsci.co.in";
  const now = new Date();

  const routes = ["", "/privacy", "/terms", "/cookies"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
  }));
}
