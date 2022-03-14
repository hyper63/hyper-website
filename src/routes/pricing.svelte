<script>
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import Hero from "$lib/pricing/hero.svelte";
  import Plans from "$lib/pricing/plans.svelte";
  import Testimonial from "$lib/pricing/testimonial.svelte";
  import Compare from "$lib/pricing/compare.svelte";
  import MediaQuery from "$lib/media-query.svelte";
</script>

<svelte:head>
  <title>Pricing: hyper - service for building hyperscale applications</title>
</svelte:head>
<Header />
<main class="mx-0 px-0">
  <MediaQuery query="(max-width: 480px)" let:matches>
    {#if matches}
      <Hero />
      <section class="space-y-4">
        <article class="mx-4 border-3 border-lightgray px-4 py-4 rounded-lg">
          <header>
            <a
              class="px-4 py-2 rounded bg-darkgray text-white float-right"
              href="https://dashboard.hyper.io">Sign up</a
            >
            <h3 class="text-xl">Starter</h3>
            <h5 class="text-lg text-black font-bold">Free</h5>
          </header>
          <p class="mt-8 text-base text-darkgray">
            For prototyping and students, you get 3 hyper application services,
            and community support.
          </p>
        </article>
        <article class="mx-4 border-3 border-lightgray px-4 py-4 rounded-lg">
          <header>
            <a
              class="px-4 py-2 rounded bg-blue text-white float-right"
              href="https://dashboard.hyper.io/upgrade">Upgrade</a
            >
            <h3 class="text-xl">Pro</h3>
            <h5 class="text-lg text-black font-bold">$99/mo</h5>
          </header>
          <p class="mt-8 text-base text-darkgray">
            For startups, 10 hyper application services, 5 users, and email
            support.
          </p>
        </article>
        <article class="mx-4 border-3 border-lightgray px-4 py-4 rounded-lg">
          <header>
            <a
              class="px-4 py-2 rounded bg-green text-white float-right"
              href="https://dashboard.hyper.io/upgrade">Upgrade</a
            >
            <h3 class="text-xl">Business</h3>
            <h5 class="text-lg text-black font-bold">$949/mo</h5>
          </header>
          <p class="mt-8 text-base text-darkgray">
            For agencies, 20 hyper application services, 15 users, email
            support, 99.9% SLA uptime.
          </p>
        </article>
        <article class="mx-4 border-3 border-lightgray px-4 py-4 rounded-lg">
          <header>
            <a
              class="px-4 py-2 rounded bg-purple text-white float-right"
              href="#">Contact</a
            >
            <h3 class="text-xl">Enterprise</h3>
            <h5 class="text-lg text-black font-bold">Custom</h5>
          </header>
          <p class="mt-8 text-base text-darkgray">
            For agencies, 20 hyper application services, 15 users, email
            support, 99.9% SLA uptime.
          </p>
        </article>
      </section>
    {:else}
      <Hero />
      <Plans />
      <Testimonial />
      <Compare />
    {/if}
  </MediaQuery>
</main>
<Footer />
