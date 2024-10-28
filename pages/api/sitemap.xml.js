// pages/api/sitemap.xml.js
export default function handler(req, res) {
  const baseUrl = "https://rizvidev.site"; // Your site URL

  const urls = [
    { loc: `${baseUrl}/`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/work`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/contact`, lastmod: new Date().toISOString() },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        ({ loc, lastmod }) => `
      <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  // Set the content type to XML
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}
