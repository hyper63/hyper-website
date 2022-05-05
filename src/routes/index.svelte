<script context="module">
  import { filter, propEq, __ } from "ramda";

  export async function load({ fetch }) {
    const faqs = await fetch("/admin/faqs.json")
      .then((r) => r.json())
      .then(filter(propEq("active", true)));

    async function readExample(name) {
      return fetch(`/examples/${name}`).then((res) => res.text());
    }

    const examples = await Promise.all([
      readExample("composition.js"),
      readExample("data.js"),
      readExample("cache.js"),
      readExample("storage.js"),
      readExample("search.js"),
      readExample("queue.js"),
    ]).then(([composition, data, cache, storage, search, queue]) => ({
      composition,
      data,
      cache,
      storage,
      search,
      queue,
    }));

    return {
      props: {
        faqs,
        examples,
      },
    };
  }
</script>

<script>
  import Header from "$lib/header.svelte";
  import Button from "$lib/buttons/button.svelte";
  import Ports from "$lib/ports.svelte";

  import All from "$lib/all-n-one.svelte";
  import FAQs from "$lib/faqs.svelte";
  import Testimonials from "$lib/testimonials.svelte";
  import YouTubePromo from "$lib/hyper-promo-video-hero.svelte";

  import Footer from "$lib/footer.svelte";
  import Composition from "$lib/composition.svelte";
  import { HelpURLs } from "$lib/constants.js";

  export let faqs;
  export let examples;
</script>

<svelte:head>
  <title>hyper - build hyperscale applications</title>
</svelte:head>
<Header />
<main class="ml-0 pl-0 pr-0 mr-0">
  <section class="splash bg-no-repeat pl-4 md:pl-24 md:pr-24">
    <div class="flex space-x-2">
      <div class="mt-8 md:mt-20 md:w-1/2">
        <h1 class="text-base font-semibold md:text-xl text-gray text-center md:text-left">
          hyper - a service for building hyperscale applications
        </h1>
        <h2 class="text-5xl font-semibold pt-4 text-center text-gray md:text-left">
          <span class="text-blue">Create</span>. <span class="text-yellow">Connect</span>.
          <span class="text-green">Build</span>.
        </h2>
        <div class="mt-4 mr-8 md:mt-8 md:w-5/6">
          <p class="text-md text-center md:text-left">
            Create your services. Connect using an consistent, clean API. Build and focus on your
            application's features, not its cloud plumbing.
          </p>
          <div class="mt-16 flex flex-col space-y-2 w-full">
            <div class="flex items-center">
              <div class="m-auto md:m-0">
                <a href={HelpURLs.GETTING_STARTED}><Button>Get Started</Button></a>
              </div>
            </div>
            <div class="flex items-center">
              <div class="m-auto md:m-0">
                <a href={HelpURLs.REQUEST_A_DEMO}
                  ><Button bgColor="yellow">Request A Demo</Button></a
                >
              </div>
            </div>
            <div class="flex items-center">
              <div class="m-auto md:m-0">
                <a href={HelpURLs.REQUEST_A_CONSULTATION}>
                  <Button bgColor="green">Consult An Architect</Button>
                </a>
              </div>
            </div>
            <!--
              <Play href="https://blog.hyper.io/tour-of-hyper63-api/" >
                Watch
              </Play>
            -->
          </div>
        </div>
      </div>
      <div class="md:w-1/2 md:mt-40">
        <YouTubePromo />
      </div>

      <!-- <div class="md:w-1/2 hidden md:block">
        <img class="md:w-100%" src="/hyper-connect-screenshot.png" alt="hyper-connect screenshot" />
      </div> -->
    </div>
  </section>
  <img class="md:hidden" src="/homepage-splash.svg" alt="homepage splash" />

  <div class="flex flex-row md:mb-40 mx-4">
    <div class="flex-col md:w-1/2">
      <section class="flex w-full md:pt-10 px-4 md:pl-24 md:pr-24 md:relative">
        <div>
          <h5 class="">THE PROBLEM</h5>
          <h2 class="text-2xl font-semibold md:text-5xl md:mt-8">Cloud services are complex.</h2>
          <p class="mt-4 md:mt-16">
            Choosing the correct cloud service and provider while ensuring scalability, security, and minimizing downtime is 
            a huge challenge that distracts from your overall goal: building features that solves your customer's problems.
          </p>
        </div>
      </section>

      <img class="w-4/5 m-auto md:hidden" src="/flow1.svg" alt="flow" />
      <section class="flex w-full px-4 md:pt-44 md:pl-24 md:pr-24">
        <div>
          <h5>OUR SOLUTION</h5>
          <h2 class="text-3xl font-semibold md:text-5xl md:mt-8">hyper. A service framework.</h2>
          <p class="mt-12">
            Hyper delivers straightforward and secure access to reliable and scalable services using clear and easy-to-use APIs. 
            Create features quickly into apps that scale while keeping <b>cloud complexity and frustrations</b> at bay.
          </p>
          <p class="mt-8">
            hyper provides APIs to core application services: data, cache, storage, queues, and
            search.
          </p>
        </div>
      </section>
    </div>
    <div class="hidden md:block w-1/2 m-auto">
      <img class="w-4/5 m-auto" src="/flow1.svg" alt="flow" />
    </div>
  </div>
  <Ports {examples} styles="pl-12 pr-12" />
  <Composition example={examples.composition} styles="pl-12 pr-12" />
  <All styles="px-4 md:pl-24 md:pr-24" />
  <FAQs {faqs} />
  <Testimonials styles="px-4 md:pl-24 md:pr-24" />
</main>
<Footer />

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
