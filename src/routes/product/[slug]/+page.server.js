import { db } from '$lib/server/db';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { slug } = params;

    console.log("Slug:", slug); // DEBUG

    const [rows] = await db.query(
        "SELECT * FROM products WHERE slug = ?",
        [slug]
    );

    const product = rows[0];

    if (!product) {
        throw error(404, 'Produkt nicht gefunden');
    }

    return {
        product
    };
}