import { destinations } from './client/src/lib/destinations.ts';
import fs from 'fs';
import path from 'path';

// Ajuste para o domínio real do seu site (ou passe via SITE_URL=https://seudominio.com node generate-sitemap.mjs)
const baseUrl = process.env.SITE_URL || 'https://explore-sampa-joy.vercel.app';
const today = new Date().toISOString().split('T')[0];

// Generate sitemap
const sitemapEntries = [
  {
    loc: baseUrl,
    lastmod: today,
    changefreq: 'weekly',
    priority: '1.0'
  },
  ...destinations.map(dest => ({
    loc: `${baseUrl}/destino/${dest.id}`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.8'
  }))
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(entry => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write to public folder
const publicPath = path.join(process.cwd(), 'client/public/sitemap.xml');
fs.writeFileSync(publicPath, sitemapXml);
console.log(`✅ Sitemap gerado com ${sitemapEntries.length} URLs`);
