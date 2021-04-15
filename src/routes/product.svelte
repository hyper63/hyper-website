<script>
import Header from '$lib/header.svelte'
import Footer from '$lib/footer.svelte'
import Button from '$lib/button.svelte'
</script>
<Header />
<main>
  <section id="summary">
    <h1 class="text-3xl pl-4 mt-8 mb-4">hyper <br /><b>Products</b></h1>
    <p class="text-base mx-4 text-darkgray">hyper provides a single entry point to five core application services, these services can be composed to effectively build any application.</p>
    <Button styles="mx-4 mt-8">Get Started</Button>
    <img class="w-full" src="/services.svg" alt="hyper services" />
  </section>
  <section id="data">
    <h2 class="text-2xl px-4">Data Service</h2>
    <p class="z-10 text-base mx-4 mt-4 text-darkgray">hyper provides a robust data service to 
    support your structured data needs, with the
    hyper data service, you can perform all the
    necessary CRUD (create, read, update, delete)
    operations, as well as use a simple and 
    intuitive query syntax to efficiently manage
    your structured data.</p>
  </section>
  <section id="search">
    <h2 class="text-2xl px-4">Search Service</h2>
    <p class="z-10 text-base mx-4 mt-4 text-darkgray">hyper provides a robust data service to 
    support your structured data needs, with the
    hyper data service, you can perform all the
    necessary CRUD (create, read, update, delete)
    operations, as well as use a simple and 
    intuitive query syntax to efficiently manage
    your structured data.</p>
  </section>
  <section id="cache">
    <h2 class="text-2xl px-4">Cache Service</h2>
    <p class="z-10 text-base mx-4 mt-4 text-darkgray">hyper provides a robust data service to 
    support your structured data needs, with the
    hyper data service, you can perform all the
    necessary CRUD (create, read, update, delete)
    operations, as well as use a simple and 
    intuitive query syntax to efficiently manage
    your structured data.</p>
  </section>
  <section id="storage">
    <h2 class="text-2xl px-4">Storage Service</h2>
    <p class="z-10 text-base mx-4 mt-4 text-darkgray">hyper provides a robust data service to 
    support your structured data needs, with the
    hyper data service, you can perform all the
    necessary CRUD (create, read, update, delete)
    operations, as well as use a simple and 
    intuitive query syntax to efficiently manage
    your structured data.</p>
  </section>
  <section id="queue">
    <h2 class="text-2xl px-4">Queue Service</h2>
    <p class="z-10 text-base mx-4 mt-4 text-darkgray">hyper provides a robust data service to 
    support your structured data needs, with the
    hyper data service, you can perform all the
    necessary CRUD (create, read, update, delete)
    operations, as well as use a simple and 
    intuitive query syntax to efficiently manage
    your structured data.</p>
  </section>

</main>
<Footer />
<style lang="postcss">
  #data {
    @apply bg-no-repeat;
    background-image: url(/data-lg.svg);
    height: 450px;
  }
  #search {
    @apply bg-no-repeat;
    background-image: url(/search-lg.svg);
    height: 450px;
  }
  #cache {
    @apply bg-no-repeat;
    background-image: url(/cache-lg.svg);
    height: 450px;
  }
  #storage {
    @apply bg-no-repeat bg-right;
    background-image: url(/storage-lg.svg);
    height: 650px;
  }
  #queue {
    @apply bg-no-repeat bg-right;
    background-image: url(/queue-lg.svg);
    height: 650px;
  }
</style>
