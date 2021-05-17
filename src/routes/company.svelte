<script>
  import Header from '$lib/header.svelte'
  import Footer from '$lib/footer.svelte'
  import Button from '$lib/button.svelte'
</script>
<Header />
<main>
  <section class="w-full flex px-4 pt-8 md:pl-24">
    <div class="md:w-1/2">
      <h1 class="text-5xl mt-8 md:text-6xl">About <br /><b>hyper</b></h1>
      <p class="hidden px-4 text-base text-darkgray md:block md:px-0 md:mt-8">hyper, is a company focused on building products and services
      for developers and improving the development experience. As a result,
      development teams are able to grow into high performing teams and create 
      incredible products.
      </p>
      <Button styles="mx-4 mt-8 hidden md:block md:mx-0">Get Started</Button>

    </div>
    <div class="w-full flex items-center justify-center">
      <img src="/company-bolt.svg" class="w-full" alt="company bolt logo" />
    </div>
  </section>
  <section class="md:hidden">
    <p class="px-4 text-base text-darkgray">hyper, is a company focused on building products and services
    for developers and improving the development experience. As a result,
    development teams are able to grow into high performing teams and create 
    incredible products.
    </p>
    <Button styles="mx-4 mt-8">Get Started</Button>
  </section>
  <section class="pt-8 px-4 md:flex md:ml-24 md:mr-44">
    <img class="mt-8 mx-auto md:w-1/2" src="/swirl.svg" alt="swirl" />
    <div class="md:w-1/2 md:px-36">
      <h2 class="text-3xl md:mt-48 md:text-5xl">Software is eating <br />the world</h2>
      <p class="mt-8 text-darkgray text-base">Building software is more than "setting it and forgetting it". Software change is a constant, fluid, process of discovery and refinement. The process that necessitates nurture and focus. With hyper you can avoid techinical debt and create exchangable interfaces.</p>
    </div>
  </section>
  <section class="px-4 pt-8 md:mt-24 md:ml-24 md:mr-44">
    <h3 class="text-2xl text-center">All software applications should be built with the following requirements:</h3>
    <div class="md:mt-24 md:flex md:justify-around md:mx-48 ">
      <div class="mt-8 flex justify-center">
        <img src="/extensibility.svg" alt="extensibility image" />
      </div>
      <div class="mt-8 flex justify-center">
        <img src="/scalability.svg" alt="extensibility image" />
      </div>
      <div class="mt-8 flex justify-center">
        <img src="/flexibility.svg" alt="extensibility image" />
      </div>
    </div>
  </section>
  <section class="px-4 pt-8 md:mt-24 md:ml-24 md:mr-44 md:flex">
    <div class="md:w-1/3">
      <h3 class="text-2xl md:text-5xl">We're here <br /><b>to help</b></h3>
      <p class="mt-4 text-darkgray text-base">
  We are building a new set of products and services that will transform the software development. Don't partner with a framework or service that decreases your productivity over time and creates a mountain of technical debt. At hyper, we are building tools that require a different mindset and can give you a hyper focus on your problem domain.
      </p>
      <Button styles="mt-8">Get Started</Button>
    </div>
    <img class="mt-8 md:w-2/3" src="/hyper-connected.svg" alt="connected" />
  </section>
</main>

<Footer />
