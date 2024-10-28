// pages/sitemap.xml.js

const Sitemap = () => {
    return null; // No need to render anything
  }
  
  export async function getServerSideProps({ res }) {
    // Set your base URL
    const baseUrl = "https://rizvidev.site";
  
    // Define the URLs to be included in the sitemap
    const urls = [
      { loc: `${baseUrl}/`, lastmod: new Date().toISOString() },
      { loc: `${baseUrl}/work`, lastmod: new Date().toISOString() },
      { loc: `${baseUrl}/contact`, lastmod: new Date().toISOString() },
    ];
  
    // Construct the sitemap XML
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
  
    // Set response headers
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  
    return {
      props: {}, // No props to return
    };
  }
  
  export default Sitemap;
  