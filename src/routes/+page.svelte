```svelte
<script>
import background from '$lib/assets/phone.jpg'

export let data;
</script>

<svelte:head>

<title>Hera Electronics – Tech Starts Here</title>

<meta name="description" content="Hera Electronics sells high-quality smartphones, new and used, at affordable prices. Shop online for the latest phones and technology." />

<meta name="keywords" content="phones, smartphones, electronics, iphone, samsung, buy phones online" />

<meta name="author" content="Hera Electronics" />

<meta property="og:title" content="Hera Electronics – Tech Starts Here" />
<meta property="og:description" content="Best quality smartphones available online. Discover the latest devices at Hera Electronics." />
<meta property="og:image" content={background} />
<meta property="og:type" content="website" />

</svelte:head>


<header class="h-[500px] bg-center bg-cover flex items-center justify-center"
style="background-image: url('https://res.cloudinary.com/dhan9lxoe/image/upload/v1772711522/jonas-leupe-wK-elt11pF0-unsplash_ch7umq.jpg')">

<div class="text-center">

<h1 class="text-5xl text-blue-600 font-bold">
Electronic Devices
</h1>

<p class="text-white text-xl mt-4">
Discover the latest smartphones and technology
</p>

</div>

</header>


<main>

<section class="max-w-6xl mx-auto p-8">

<header>
<h2 class="text-3xl font-semibold mb-6">
Our Phones
</h2>
</header>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

{#each data.products as product}

<div class="border rounded-lg shadow bg-white overflow-hidden">

<!-- PRODUCT IMAGE -->
<img
src={product.image_url}
alt={product.name}
class="w-full h-56 object-cover"
/>

<div class="p-4">

<h3 class="text-xl font-semibold">
{product.name}
</h3>

<p class="text-gray-600 mt-2">
{product.description}
</p>

<p class="text-blue-600 font-bold mt-4">
${product.price}
</p>

</div>

</div>

{/each}

</div>

</section>

</main>


<footer class="h-[300px] bg-blue-800 text-white flex items-center justify-center">

<section class="text-center">

<h2 class="text-2xl font-semibold mb-2">
Hera Electronics
</h2>

<p>
Online smartphone shop – quality devices at great prices.
</p>

</section>

</footer>
