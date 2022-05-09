<script>
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import FeaturesKing from "$lib/features-king.svelte";
  import Bolt from "$lib/svgs/bolt.svelte";

  import { HelpURLs } from "$lib/constants.js";
</script>

<svelte:head>
  <title>About hyper</title>
</svelte:head>
<Header />
<main>
  <section class="w-full flex flex-col flex-col-reverse md:flex-row px-4 pt-8 md:px-24">
    <div class="w-full md:w-1/2">
      <h1 class="text-5xl md:mt-8 md:text-6xl">About <br /><b>hyper</b></h1>
      <p class="text-base text-darkgray md:block md:px-0 mt-4">
        hyper is a company focused on building products and services for developers and improving
        the development experience. As a result, development teams are able to grow into high
        performing teams and create incredible products.
      </p>
      <div class="flex justify-center md:justify-start">
        <a class="btn btn-primary gap-2 mt-8" href={HelpURLs.GETTING_STARTED}>
          Get Started
          <Bolt color="white" />
        </a>
      </div>
    </div>
    <div class="w-full md:w-1/2 flex items-center justify-center">
      <img src="/company-bolt.svg" class="w-full" alt="company bolt logo" />
    </div>
  </section>
  <section class="w-full pt-8 px-4 md:flex md:space-x-8 md:px-24">
    <img class="mt-8 mx-auto md:w-1/2" src="/swirl.svg" alt="swirl" />
    <div class="w-full md:w-1/2 md:pl-12">
      <h2 class="text-3xl md:mt-48 md:text-5xl">
        Software is eating <br />the world
      </h2>
      <p class="mt-8 text-darkgray text-base">
        Building software is more than "setting it and forgetting it". Software change is a
        constant, fluid, process of discovery and refinement. The process that necessitates nurture
        and focus. With hyper you can avoid techinical debt and create exchangable interfaces.
      </p>
    </div>
  </section>
  <FeaturesKing />
  <section class="px-4 pt-8 md:mt-24 md:px-24">
    <h3 class="text-2xl text-center">
      hyper ensures your backend services support the right 'ilities:
    </h3>
    <div class="w-full max-w-3xl m-auto px-12 flex items-center justify-between">
      <div class="mt-8 flex justify-center">
        <img src="/extensibility.svg" alt="extensibility" />
      </div>
      <div class="mt-8 flex justify-center">
        <img src="/scalability.svg" alt="scalability" />
      </div>
      <div class="mt-8 flex justify-center">
        <img src="/flexibility.svg" alt="flexibility" />
      </div>
    </div>
  </section>
  <section class="px-4 pt-8 md:mt-24 md:flex md:px-24">
    <div class="w-full md:w-1/3 mr-12">
      <h3 class="text-2xl md:text-5xl">We're here <br /><b>to help</b></h3>
      <p class="mt-4 text-darkgray text-base">
        As your code base expands, hyper increases productivity while discouraging technical debt
        and coupling. At hyper, we build tools that require a different mindset; tools that provide
        a hyper focus on your problem domain.
      </p>
      <div class="flex justify-center md:justify-start">
        <div class="mt-8">
          <a class="btn btn-primary gap-2" href={HelpURLs.GETTING_STARTED}>
            Get Started
            <Bolt color="white" />
          </a>
        </div>
      </div>
    </div>
    <img class="mt-8 w-full md:w-2/3" src="/hyper-connected.svg" alt="connected" />
  </section>
</main>

<Footer />
