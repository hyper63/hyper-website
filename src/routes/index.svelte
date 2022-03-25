<script context="module">
  import { filter, propEq } from "ramda";

  export async function load({ fetch }) {
    const faqs = await fetch("/admin/faqs.json")
      .then((r) => r.json())
      .then(filter(propEq("active", true)));
    return {
      props: {
        faqs,
      },
    };
  }
</script>

<script>
  import Header from "$lib/header.svelte";
  import Button from "$lib/button.svelte";
  import Ports from "$lib/ports.svelte";

  import FeaturesAreKing from "$lib/features-king.svelte";
  import Flow from "$lib/flow.svelte";
  import All from "$lib/all-n-one.svelte";
  import FAQs from "$lib/faqs.svelte";
  import Testimonials from "$lib/testimonials.svelte";
  import YouTubePromo from "$lib/hyper-promo-video-hero.svelte";

  import Footer from "$lib/footer.svelte";
  import { HelpURLs } from "$lib/constants.js";

  export let faqs;
</script>

<svelte:head>
  <title>hyper - service for building hyperscale applications</title>
</svelte:head>
<Header />
<main class="ml-0 pl-0 pr-0 mr-0">
  <section class="splash bg-no-repeat pl-4 md:pl-24 md:pr-24">
    <div class="flex">
      <div class="mt-8 md:mt-20 md:w-1/2">
        <h1 class="text-base font-semibold md:text-xl width-full height-full text-gray">
          hyper - service for building hyperscale applications
        </h1>
        <h2 class="text-3xl font-semibold md:text-5xl pt-4 width-full height-full">
          One <b>API</b>... many services...
        </h2>
        <p class="text-md mt-4 mr-8 md:mt-12 md:w-3/4">
          hyper is a dev-ops team wrapped in a single API. One consistent, frictionless API to
          manage data, cache, storage, search, and queue services. hyper promotes clean architecture
          application development.
        </p>
        <div class="mt-16 flex flex-col md:flex-row space-y-4 space-x-4 md:space-y-0 md:space-x-20">
          <a href={HelpURLs.GETTING_STARTED}><Button>Get Started</Button></a>

          <!--
        <Play href="https://blog.hyper.io/tour-of-hyper63-api/" >
          Watch
        </Play>
        -->
        </div>
      </div>

      <YouTubePromo />

      <!-- <div class="md:w-1/2 hidden md:block">
        <img class="md:w-100%" src="/hyper-connect-screenshot.png" alt="hyper-connect screenshot" />
      </div> -->
    </div>
  </section>
  <img class="md:hidden" src="/homepage-splash.svg" alt="homepage splash" />
  <!--  -->
  <!-- <section class="pl-4 md:pl-24 md:pr-24"> -->

  <section class="flex w-full md:pt-44 pl-4 md:pl-24 md:pr-24 md:relative">
    <Flow />
    <div class="md:w-1/2 2xl:w-1/3">
      <h5 class="">THE PROBLEM</h5>
      <h2 class="text-2xl font-semibold md:text-5xl md:mt-8">Technical Debt</h2>
      <p class="mt-4 md:mt-16">
        What do developers hate the most about software development? Many will say technical debt,
        having to work through so much noise to implement a simple change request.
      </p>
    </div>
  </section>

  <img class="md:hidden" src="/flow1.svg" alt="flow" />
  <section class="flex w-full pl-4 md:pt-44 md:pl-24 md:pr-24 md:mb-96">
    <div class="md:w-1/2 2xl:w-1/3">
      <h5>OUR SOLUTION</h5>
      <h2 class="text-3xl font-semibold md:text-5xl md:mt-8">hyper. A service framework.</h2>
      <p class="mt-12">
        hyper is a cloud-native service solution delivering a straightforward way to leverage APIs
        to create scalable performant services. Create features quickly into apps that scale, all
        while keeping <b>technical debt</b> at bay.
      </p>
      <p class="mt-8">
        hyper provides APIs to core application services: data, cache, storage, queues, and search.
      </p>
    </div>
  </section>
  <div class="mt-16 md:hidden flex items-center justify-center">
    <img class="" src="/hyper-box.svg" alt="hyper box" />
  </div>
  <Ports styles="pl-24 pr-24" />
  <FeaturesAreKing />
  <All styles="md:pl-24 md:pr-24" />

  <FAQs {faqs} />

  <Testimonials styles="pl-4 pr-4 md:pl-24 md:pr-24" />
</main>
<Footer />

<!-- .flow {
  @apply sm:hidden md:block absolute opacity-90;
} 

 .connectors {
    @apply absolute;
    left: 965px;
    top: 2065px;

  }
 .circle {
    @apply absolute;
    /*right: 325px;*/
    left: 1045px;
    top: 2385px;
  }
  .line {
    @apply absolute;
    left: 278px;
    top: 2450px;
  }
-->
<style lang="postcss">
  @media (min-width: 768px) {
    .splash {
      background-position: top right;
      background-image: url("/homepage-splash.svg");
      height: 950px;
    }
  }
  main {
    width: 100%;
  }
</style>
