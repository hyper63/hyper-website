<script>
  import Header from '$lib/header.svelte'
  import Footer from '$lib/footer.svelte'
  import Button from '$lib/button.svelte'
</script>
<Header />
<main>
  <section class="w-full flex px-4 pt-8">
    <h1 class="text-5xl mt-8">About <br /><b>hyper</b></h1>
    <div class="w-full flex items-center justify-center">
    <img src="/company-bolt.svg" alt="company bolt logo" />
    </div>
  </section>
  <section>
    <p class="px-4 text-base text-darkgray">hyper, is a company focused on building products and services
    for developers and improving the development experience. As a result,
    development teams are able to grow into high performing teams and create 
    incredible products.
    </p>
    <Button styles="mx-4 mt-8">Get Started</Button>
  </section>
  <img class="mt-8 mx-auto" src="/swirl.svg" alt="swirl" />
  <section class="pt-8 px-4">
    <h2 class="text-3xl">Software is <br />eating the world</h2>
    <p class="mt-4 text-darkgray text-base">but one can argule that software can cause just as many problems as it is meant to solve.</p>
    <p class="mt-8 text-darkgray text-base">Building software is more than building a product and then selling it. It is a constant, fluid, process of discovery and refinement, a process that necessitates nurture and focus. Unfortunately, often times, the result leads to disappointment. As a software development community, can we do better? Can we create products that are a joy, to not only build, but to maintain, over time? Products that can migrate to new technologies and platforms, incrementally?</p>
  </section>
  <section class="px-4 pt-8">
    <h3 class="text-2xl text-center">To that end, all software applications should be built with the following requirements:</h3>
    <div class="mt-8 flex justify-center">
      <img src="/extensibility.svg" alt="extensibility image" />
    </div>
    <div class="mt-8 flex justify-center">
      <img src="/scalability.svg" alt="extensibility image" />
    </div>
    <div class="mt-8 flex justify-center">
      <img src="/flexibility.svg" alt="extensibility image" />
    </div>
  </section>
  <section class="px-4 pt-8">
    <h3 class="text-2xl">We're here <br /><b>to help</b></h3>
    <p class="mt-4 text-darkgray text-base">
We are building a new set of products and services that have the potential to transform the software community. These products and services provide development teams the guidance and capabilities to, not only, highly perform when building software, but to future proof their products, and create constant and consistent value over time.
    </p>
    <Button styles="mt-8">Get Started</Button>
  </section>
  <img class="mt-8" src="/hyper-connected.svg" alt="connected" />
</main>

<Footer />
