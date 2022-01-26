<script>
  import Header from '$lib/header.svelte'
  import Footer from '$lib/footer.svelte'
</script>
<svelte:head>
  <title>Pricing: hyper - service for building hyperscale applications</title>
</svelte:head>
<Header />
<main>
  <h1 class="text-3xl pl-4 mt-8 mb-8">Simple <b>Pricing</b></h1>
  <section class="space-y-4">
    <article class="mx-4 border-3 border-lightgray px-4 py-4 rounded-lg">
      <header>
        <button class="bg-blue text-white float-right">Go</button>
        <h3 class="text-xl">Developer</h3>
        <h5 class="text-lg text-black font-bold">Free</h5>
      </header>
      <p class="mt-8 text-base text-darkgray">Multi-Tenant Cloud with access to hyper slack channel</p>
    </article>
    <article class="mx-4 border-3 border-lightgray px-4 py-4 rounded-lg">
      <header>
        <button class="bg-blue text-white float-right">Go</button>
        <h3 class="text-xl">Startup</h3>
        <h5 class="text-lg text-black font-bold">$500/mo</h5>
      </header>
      <p class="mt-8 text-base text-darkgray">1 dedicated hyper cloud service</p>
    </article>
    <article class="mx-4 border-3 border-lightgray px-4 py-4 rounded-lg">
      <header>
        <button class="bg-blue text-white float-right">Go</button>
        <h3 class="text-xl">Agency</h3>
        <h5 class="text-lg text-black font-bold">$2000/mo</h5>
        <div class="my-4">
        <span class="p-2 border-3 border-blue text-blue rounded-full">
          Save $500
        </span>
        </div>
      </header>
      <p class="mt-8 text-base text-darkgray">5 dedicated hyper cloud services</p>
    </article>
    <article class="mx-4 border-3 border-lightgray px-4 py-4 rounded-lg">
      <header>
        <h3 class="text-xl">Enterprise</h3>
        <h5 class="text-lg text-black font-bold">Contact Us</h5>
      </header>
      <p class="mt-8 text-base text-darkgray">On premise hyper cloud service</p>
      <button class="my-4 bg-lightblue text-blue w-full flex items-center justify-center">Contact</button>
    </article>
  </section>
  <h5 class="mx-4 mt-8 mb-4 uppercase">All Paid Plans Include:</h5>
  <ul class="mx-4">
    <li class="flex items-center">
      <img src="/data-sm.svg" alt="data service" role="img"/>
      <p class="text-sm font-semibold">Data Service</p>
    </li>
    <li class="flex items-center">
      <img src="/search-sm.svg" alt="search service" role="img"/>
      <p class="text-sm font-semibold">Search Service</p>
    </li>
    <li class="flex items-center">
      <img src="/cache-sm.svg" alt="cache service" role="img"/>
      <p class="text-sm font-semibold">Cache Service</p>
    </li>
    <li class="flex items-center">
      <img src="/storage-sm.svg" alt="storage service" role="img" />
      <p class="text-sm font-semibold">Storage Service</p>
    </li>
    <li class="flex items-center">
      <img src="/queue-sm.svg" alt="queue service" role="img"/>
      <p class="text-sm font-semibold">Queue Service</p>
    </li>
  </ul>
  <hr class="mx-4 my-8 border-lightgray" />
  <section class="mx-4">
    <p class="flex space-x-4"><img src="/check.svg" alt="check" role="img"/><span>Daily backups</span></p>
    <p class="flex space-x-4"><img src="/check.svg" alt="check" role="img" /><span>24/7 Monitoring</span></p>
    <p class="flex space-x-4" ><img src="/check.svg" alt="check" role="img"/><span>Hosted or Managed Solution</span></p>
    <p class="flex space-x-4"><img src="/check.svg"  alt="check" role="img"/><span>Dedicated sub-domain name</span></p>
  </section>
</main>
<Footer />
