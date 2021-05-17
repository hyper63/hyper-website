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
      <h1 class="text-3xl pl-4 mt-8 mb-4 md:pl-0 md:mt-24 md:text-6xl ">hyper <br /><b>services</b></h1>
      <p class="text-base mx-4 text-darkgray md:mx-0">hyper provides a single entry point to five core application services, these services can be composed to effectively build any application.</p>
      <ul class="ml-4 md:ml-8 md:mt-8">
        <li><a class="text-blue" href="#data">Data</a></li>
        <li><a class="text-blue" href="#search">Search</a></li>
        <li><a class="text-blue" href="#storage">Storage</a></li>
        <li><a class="text-blue" href="#cache">Cache</a></li>
        <li><a class="text-blue" href="#queue">Queue</a></li>
      </ul>
      <Button styles="mx-4 mt-8 md:hidden">Get Started</Button>
    </div>
    <img class="w-full md:w-2/3 md:absolute" style="z-index: -100;right: 0; top: -200px;" src="/services.svg" alt="hyper services" />
  </section>
</main>
  <Section id="data" styles="md:mt-96" image="right">
    <span slot="text">
      <div class="flex flex-col items-center">
        <h2 class="text-2xl px-4 md:text-center md:text-5xl">Data Service</h2>
        <p class="text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">
          hyper provides a robust data service to 
          support your structured data needs, with the
          hyper data service, you can perform all the
          necessary CRUD (create, read, update, delete)
          operations, as well as use a simple and 
          intuitive query syntax to efficiently manage
          your structured data.
        </p>
      </div>
    </span>
    <span slot="image">
      <img src="data-lg.svg" />
    </span>
  </Section>
  <Section id="search" image="left">
    <span slot="image">
     <img src="search-lg.svg" />
    </span>
    <span slot="text">
      <div class="flex flex-col items-center">
        <h2 class="text-2xl px-4 md:text-5xl">Search Service</h2>
        <p class="text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">hyper provides a robust data service to 
        support your structured data needs, with the
        hyper data service, you can perform all the
        necessary CRUD (create, read, update, delete)
        operations, as well as use a simple and 
        intuitive query syntax to efficiently manage
        your structured data.</p>
      </div>
    </span>
      
  </Section> 
  <Section id="storage" image="right">
    <span slot="text">
      <div class="flex flex-col items-center">
        <h2 class="text-2xl px-4 md:text-5xl">Storage Service</h2>
        <p class="text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">
          Store files using a REST Interface, not only provides the ability to stream large files
          to your storage container.
        </p>
        <!--
        <pre class="rounded-lg bg-black text-white p-8 my-8 w-1/2 mx-16"><code>
  PUT /storage/app/:name

  GET /storage/app/:name

        </code></pre>
        -->
      </div>
    </span>
    <span slot="image">
      <img src="storage-lg.svg" />
    </span>
  </Section> 
  <Section id="cache" image="left">
    <span slot="image">
      <img src="cache-lg.svg" />
    </span>
    <span slot="text">
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
  <Section id="queue" image="right">
    <span slot="text">
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
    <span slot="image">
      <img src="queue-lg.svg" />
    </span>    
  </Section>
<Footer />
