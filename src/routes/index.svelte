<script context="module">
  import { filter, propEq } from 'ramda'

  export async function load({fetch}) {
    const faqs = await fetch('/admin/faqs.json').then(r => r.json())
      .then(filter(propEq('active', true)))
    return {
      props: {
        faqs
      }
    }

  }

</script>
<script>
  import Header from '$lib/header.svelte'  
  import Button from '$lib/button.svelte'
  import Play from '$lib/play-button.svelte'
  import Ports from '$lib/ports.svelte'
  import FAQ from '$lib/faq.svelte'
  import All from '$lib/all-n-one.svelte'
  import Testimonials from '$lib/testimonials.svelte'
  import Flow from '$lib/flow.svelte'
  import Footer from '$lib/footer.svelte'
  export let faqs

  let show = false
</script>
<svelte:head>
  <title>hyper - service for building hyperscale applications</title>
</svelte:head>
<Header />
<main class="ml-0 pl-0 pr-0 mr-0">
  <section class="splash bg-no-repeat pl-4 md:pl-24 md:pr-24">
    <div class="mt-8 md:mt-20 md:w-1/2">
      <h1 class="text-4xl font-semibold md:text-6xl width-full height-full">Build Your Web Applications at <b>hyper</b> Speed</h1>
      <p class="text-md mt-4 mr-8 md:mt-12 md:w-3/4">hyper provides a full suite of core backend services. Focus on what matters. Stop the bike-shedding. Start building scalable applications today.</p>
      <div class="mt-16 flex space-x-4 md:space-x-20">
       <a href="https://docs.hyper63.com/getting-started"><Button>Get Started</Button></a>
        


        <Play href="https://blog.hyper63.com/tour-of-hyper63-api/" >
          Watch
        </Play>
        

      </div>
    </div> 
  </section>
  <img class="md:hidden" src="/homepage-splash.svg" alt="homepage splash"/>
  <section class="flex w-full md:pt-44 pl-4 md:pl-24 md:pr-24 md:relative">
    <Flow />
    <div class="md:w-1/2 2xl:w-1/3">
      <h5 class="">THE PROBLEM</h5>
      <h2 class="text-3xl font-semibold md:text-5xl md:mt-16">Technical Debt</h2>
      <p class="mt-4 md:mt-16">What do developers hate the most about software development? Many will say technical debt, having to work
      through so much noise to implement a simple change request.</p>
    </div>
  </section>
  <img class="md:hidden" src="/flow1.svg" alt="flow"/>
  <section class="flex w-full pl-4 md:pt-44 md:pl-24 md:pr-24 md:mb-96">
    <div class="md:w-1/2 2xl:w-1/3">
      <h5>OUR SOLUTION</h5>
      <h2 class="text-3xl font-semibold md:text-5xl md:mt-8">
      hyper. A service framework.
      </h2>
      <p class="mt-12">
      hyper is a cloud-native service solution delivering a straightforward way to leverage APIs to create scalable performant services. Create features quickly into apps that scale, all while keeping <b>technical debt</b> at bay.  
      </p>
      <p class="mt-16">
      hyper provides APIs to core application services: data, cache, storage, queues, and search. 
      </p>
    </div>
  </section>
  <div class="mt-16 md:hidden flex items-center justify-center">
  <img class="" src="/hyper-box.svg" alt="hyper box"/>
  </div>
  <Ports styles="pl-24 pr-24" />
  <All styles="pl-24 pr-24" />
  <section class="flex flex-col bg-whitesmoke items-center mt-4 pt-8 md:mt-16 md:pt-8 md:pl-24 md:pr-24">
    <h1 class="text-3xl md:text-6xl">FAQs</h1>
    <p class="px-4 my-4 text-base md:mt-16 md:mb-8">Can't find the answer you're looking for? Reach out to our <a href="/contact" class="text-red underline">customer support team</a>.</p>
    <div class="flex flex-col w-3/4 md:w-2/3 md:mb-32">
    {#each faqs as {question, answer}}
    <FAQ>
      <span slot="question">{question}</span>
      <span slot="answer">{@html answer}</span>
    </FAQ>
    {/each}
    </div>
  </section>
  <Testimonials styles="pl-24 pr-24" />  
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
      background-image: url('/homepage-splash.svg');
      height: 950px;
    }
  }
  main {
    width: 100%;
  }

</style>