<script>
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import Select from "svelte-select";

  let items = [
    { value: "developer", label: "Developer" },
    { value: "startup", label: "Startup" },
    { value: "agency", label: "Agency" },
  ];

  let selectedValue = { value: "developer", label: "Developer" };

  function handleSelect(event) {
    console.log("selected item", event.detail);
    // .. do something here 🙂
  }
</script>
<svelte:head>
  <title>Getting Started: hyper - service for building hyperscale applications</title>
</svelte:head>
<Header />
<main>
  <h1 class="mx-4 my-8 text-center text-5xl">Get <b>Started</b></h1>
  <section class="mx-4 bg-whitesmoke rounded-lg p-4">
    <p>Step 1 of 4: Choose your pricing plan</p>
    <div class="select">
      <Select {items} {selectedValue} on:select={handleSelect} />
    </div>
    <div class="mt-4 p-8 rounded-lg border-3 border-lightgray">
      <h3>Developer</h3>
      <h4 class="font-semibold">Free</h4>
      <p class="text-darkgray">1 hyper app service</p>
      <div class="mt-8 space-y-4">
        <article class="flex items-center">
          <img src="/data-sm.svg" />
          <span>Data Service</span>
        </article>
        <article class="flex items-center">
          <img src="/search-sm.svg" />
          <span>Search Service</span>
        </article>
        <article class="flex items-center">
          <img src="/cache-sm.svg" />
          <span>Cache Service</span>
        </article>
        <article class="flex items-center">
          <img src="/storage-sm.svg" />
          <span>Storage Service</span>
        </article>
        <article class="flex items-center">
          <img src="/queue-sm.svg" />
          <span>Queue Service</span>
        </article>
      </div>
    </div>
    <div class="mt-4 p-8 space-y-2">
      <div class="flex items-center">
        <img src="/check.svg" />
        <span class="ml-4">Multi-Tenant Service</span>
      </div>
      <div class="flex items-center">
        <img src="/check.svg" />
        <span class="ml-4">Daily Backups</span>
      </div>
      <div class="flex items-center">
        <img src="/check.svg" />
        <span class="ml-4">Community Chat Support</span>
      </div>
    </div>
  </section>
</main>
<Footer />
<style lang="postcss">
  .select {
    --border: 3px solid #c6cad3;
    --borderRadius: 12px;
    --placeholderColor: #1286f6;
    @apply font-space text-xl;
    margin: 0;
    padding: 0;
    border: none;
  }
</style>

