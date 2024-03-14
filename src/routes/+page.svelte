<script>
	import Hero from '../components/Hero.svelte';
	import Clients from '../components/Clients.svelte';
	import Introduction from '../components/Introduction.svelte';
	import Features from '../components/Features.svelte';
	import Pricing from '../components/Pricing.svelte';
	import Newsletter from '../components/Newsletter.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<!-- HERO Section -->
<section class="h-auto w-full flex flex-col items-center pt-20 gap-10 mb-4 md:mb-30">
	<Hero />
</section>

<!-- Clients Section -->
<section class=" flex-col h-auto w-full mb-18">
	<Clients />
</section>

<!-- Introduction Section -->
<section class="flex flex-col h-auto w-full">
	<Introduction />
</section>

<!-- Features Section -->
<section class="flex flex-col h-auto w-full">
	<Features />
</section>

<!-- Pricing Section -->
<section class="flex flex-col h-auto w-full">
	<Pricing />
</section>

<!-- Newsletter Section -->
<section class="flex flex-col h-auto w-full">
	<Newsletter />
</section>

<!-- Footer Section -->
<section class="flex flex-col h-auto w-full">
	<Footer />
</section>
