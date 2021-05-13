<script>
import Header from '$lib/header.svelte'
import Footer from '$lib/footer.svelte'
import Button from '$lib/button.svelte'
</script>
<Header />
<main class="md:ml-24 md:mr-44" >
  <section id="summary" class="md:flex md:relative" >
    <div class="md:w-1/3 md:h-96">
      <h1 class="text-3xl pl-4 mt-8 mb-4 md:pl-0 md:mt-24 md:text-6xl ">hyper <br /><b>Products</b></h1>
      <p class="text-base mx-4 text-darkgray md:mx-0">hyper provides a single entry point to five core application services, these services can be composed to effectively build any application.</p>
      <Button styles="mx-4 mt-8 md:hidden">Get Started</Button>
    </div>
    <img class="w-full md:w-2/3 md:absolute" style="z-index: -100;right: 0; top: -200px;" src="/services.svg" alt="hyper services" />
  </section>
  <section id="data" class="md:mt-96 relative h-96" >
    <img src="data-lg.svg" class="absolute md:w-2/3 md:-top-96" style="right: 0;z-index: -200;" />
    <h2 class="text-2xl px-4 md:text-center md:text-5xl">Data Service</h2>
    <div class="flex justify-center">
    <p class="z-10 text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">hyper provides a robust data service to 
    support your structured data needs, with the
    hyper data service, you can perform all the
    necessary CRUD (create, read, update, delete)
    operations, as well as use a simple and 
    intuitive query syntax to efficiently manage
    your structured data.</p>
    </div>
  </section>
  <section id="search" class="mt-16 relative h-96 md:mt-96">
    <img src="search-lg.svg" class="absolute md:w-2/3 md:-top-48" style="left: 0;z-index: -200;" />
    <div class="md:pt-24 md:flex md:flex-col md:items-end">
      <h2 class="text-2xl px-4 md:text-5xl md:text-center">Search Service</h2>
      <p class="z-10 text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">hyper provides a robust data service to 
      support your structured data needs, with the
      hyper data service, you can perform all the
      necessary CRUD (create, read, update, delete)
      operations, as well as use a simple and 
      intuitive query syntax to efficiently manage
      your structured data.</p>
      </div>
  </section>
  <section id="storage" class="mt-16 relative h-96 md:mt-96 md:pt-96">
    <img src="storage-lg.svg" class="absolute md:w-2/3 md:-top-4" style="right:0;z-index: -200;" />
    <div class="md:flex md:flex-col md:items-start">
      <h2 class="text-2xl px-4 md:text-5xl">Storage Service</h2>
      <p class="z-10 text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">hyper provides a robust data service to 
      support your structured data needs, with the
      hyper data service, you can perform all the
      necessary CRUD (create, read, update, delete)
      operations, as well as use a simple and 
      intuitive query syntax to efficiently manage
      your structured data.</p>
    </div>
  </section>
  <section id="cache" class="mt-16 relative h-96 md:mt-96 md:pt-96">
    <img src="cache-lg.svg" class="absolute md:w-2/3 md:-top-8" style="z-index: -200;" />
    <div class="md:flex md:flex-col md:items-end">
      <h2 class="text-2xl px-4 md:text-5xl md:text-center">Cache Service</h2>
      <p class="z-10 text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">hyper provides a robust data service to 
      support your structured data needs, with the
      hyper data service, you can perform all the
      necessary CRUD (create, read, update, delete)
      operations, as well as use a simple and 
      intuitive query syntax to efficiently manage
      your structured data.</p>
    </div>
  </section>
  <section id="queue" class="mt-16 relative h-96 md:mt-96 md:pt-96 md:pb-96 md:mb-96">
    <img src="queue-lg.svg" class="absolute md:w-2/3 md:left-1/3 md:-top-24" style="z-index: -200;" />
    <div class="md:flex md:flex-col md:items-center">
      <h2 class="text-2xl px-4 md:text-5xl md:text-center">Queue Service</h2>
      <p class="z-10 text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">hyper provides a robust data service to 
      support your structured data needs, with the
      hyper data service, you can perform all the
      necessary CRUD (create, read, update, delete)
      operations, as well as use a simple and 
      intuitive query syntax to efficiently manage
      your structured data.</p>
    </div>
  </section>

</main>
<Footer />
<style lang="postcss">
  #data {
    @apply bg-no-repeat;
    /*
    background-image: url(/data-lg.svg);
    height: 450px;
    */
  }
  #search {
    @apply bg-no-repeat;
    /*
    background-image: url(/search-lg.svg);
    height: 450px;
    */
  }
  #cache {
    @apply bg-no-repeat;
    /*
    background-image: url(/cache-lg.svg);
    height: 450px;
    */
  }
  #storage {
    @apply bg-no-repeat bg-right;
    /*
    background-image: url(/storage-lg.svg);
    height: 650px;
    */
  }
  #queue {
    @apply bg-no-repeat bg-right;
    /*
    background-image: url(/queue-lg.svg);
    height: 650px;
    */
  }
</style>
