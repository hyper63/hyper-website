<script>
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import Hero from "$lib/pricing/hero.svelte";
  import Plans from "$lib/pricing/plans.svelte";
  import Testimonial from "$lib/pricing/testimonial.svelte";
  import Compare from "$lib/pricing/compare.svelte";
</script>

<svelte:head>
  <title>Pricing: hyper - service for building hyperscale applications</title>
</svelte:head>
<Header />
<main class="mx-0 px-0">
  <Hero />
  <Plans />
  <Testimonial />
  <Compare />
</main>
<Footer />
