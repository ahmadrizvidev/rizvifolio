const fs = require('fs'); // Importing the built-in fs module
const path = require('path');

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

// Write the sitemap to public/sitemap.xml
fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log("Sitemap generated: /public/sitemap.xml");
