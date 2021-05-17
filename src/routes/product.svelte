<script>
import Header from '$lib/header.svelte'
import Footer from '$lib/footer.svelte'
import Button from '$lib/button.svelte'
import Section from '$lib/section.svelte'
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
</main>
  <Section id="data" styles="mt-96">
    <span slot="left">
      <h2 class="text-2xl px-4 md:text-center md:text-5xl">Data Service</h2>
      <div class="flex justify-center">
        <p class="text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">
          hyper provides a robust data service to 
          support your structured data needs, with the
          hyper data service, you can perform all the
          necessary CRUD (create, read, update, delete)
          operations, as well as use a simple and 
          intuitive query syntax to efficiently manage
          your structured data.
	</p>

    </span>
    <span slot="right">
      <img src="data-lg.svg" />
    </span>
  </Section>
  <Section id="search">
    <span slot="left">
     <img src="search-lg.svg" />
    </span>
    <span slot="right">
      <h2 class="text-2xl px-4 md:text-5xl">Search Service</h2>
      <p class="text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">hyper provides a robust data service to 
      support your structured data needs, with the
      hyper data service, you can perform all the
      necessary CRUD (create, read, update, delete)
      operations, as well as use a simple and 
      intuitive query syntax to efficiently manage
      your structured data.</p>
    </span>
      
  </Section> 
  <Section id="storage">
    <span slot="left">
      <div class="flex flex-col items-center">
      <h2 class="text-2xl px-4 md:text-5xl">Storage Service</h2>
      <p class="text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">
        Store files using a REST Interface, not only provides the ability to stream large files
        to your storage container.
      </p>
      <pre class="rounded-lg bg-black text-white p-8 my-8 w-1/2 mx-16"><code>
PUT /storage/app/:name

GET /storage/app/:name

      </code></pre>
      </div>
    </span>
    <span slot="right">
      <img src="storage-lg.svg" />
    </span>
  </Section> 
  <Section id="cache">
    <span slot="left">
      <img src="cache-lg.svg" />
    </span>
    <span slot="right">
      <div class="flex flex-col items-center">
      <h2 class="text-2xl px-4 md:text-5xl md:text-center">Cache Service</h2>
      <p class="z-10 text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">hyper provides a robust data service to 
      support your structured data needs, with the
      hyper data service, you can perform all the
      necessary CRUD (create, read, update, delete)
      operations, as well as use a simple and 
      intuitive query syntax to efficiently manage
      your structured data.</p>
      </div>
    </span>

  </Section>
  <Section id="queue">
    <span slot="left">
      <div class="flex flex-col items-center">
        <h2 class="text-2xl px-4 md:text-5xl md:text-center">Queue Service</h2>
        <p class="z-10 text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">hyper provides a robust data service to 
        support your structured data needs, with the
        hyper data service, you can perform all the
        necessary CRUD (create, read, update, delete)
        operations, as well as use a simple and 
        intuitive query syntax to efficiently manage
        your structured data.</p>
      </div>
    </span>
    <span slot="right">
      <img src="queue-lg.svg" />
    </span>    
  </Section>

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
