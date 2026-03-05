export async function load({ fetch }) {

    const res = await fetch('/api/products');
    const products = await res.json();

    return { products };
}





