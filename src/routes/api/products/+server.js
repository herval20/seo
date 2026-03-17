import { db } from '$lib/server/db';
import { json } from '@sveltejs/kit';

export async function GET() {

    const [products] = await db.query("SELECT * FROM products");

    return json(products);
}



