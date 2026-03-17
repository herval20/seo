// src/routes/sitemap.xml/+server.js
import { db } from '$lib/server/db';

export async function GET() {
    const baseUrl = 'https://example.com'; // passe an

    // Produkte aus der DB
    const [products] = await db.query(`
        SELECT slug
        FROM products
        WHERE slug IS NOT NULL
    `);

    // Statische URLs
    const staticUrls = [{ loc: `${baseUrl}/` }];

    // Produkt URLs
    const productUrls = products.map(product => ({
        loc: `${baseUrl}/product/${product.slug}`
    }));

    const allUrls = [...staticUrls, ...productUrls];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `<url><loc>${url.loc}</loc></url>`).join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: { 'Content-Type': 'application/xml' }
    });
}