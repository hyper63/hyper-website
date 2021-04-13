<script>
  import Header from '$lib/header.svelte'  
  import LinkBtn from '$lib/link-button.svelte'
  import Button from '$lib/button.svelte'
  import Play from '$lib/play-button.svelte'
  import LinkButton from '$lib/link-button.svelte'
  import Ports from '$lib/ports.svelte'
  import FAQ from '$lib/faq.svelte'
  import Testimonials from '$lib/testimonials.svelte'

  let show = false
</script>
<svelte:head>
  <title>hyper.io - the service framework</title>
</svelte:head>
<Header />
<main class="ml-24">
  <section class="splash bg-no-repeat">
    <div class="mt-20 w-1/2">
      <h1 class="width-full height-full">Build Your Web Applications at <b>hyper</b> Speed</h1>
      <p class="mt-12 w-3/4">Let your development team focus on creating applications that solve the problems of the business, 
      let hyper solve the problems of the cloud.</p>
      <div class="mt-16 flex space-x-20">
        <Button bgColor="blue" txtColor="white">Get Started</Button>
        <Play>Watch</Play>
      </div>
    </div> 
  </section>
  <section class="flex w-full">
    <div class="w-1/2">
    <h5 class="mt-72">THE PROBLEM</h5>
    <h2 class="mt-16">Software can cause just as many problems as it solves</h2>
    <p class="mt-16">
    Unfortunately, often times, the result leads to disappointment, As a software development community, can we do better? Can we create products that are a joy, to not only build, but to maintain, over time? Product that can migrate to new technologies and platforms incrementally?
    </p>
    </div>
  </section>
  <section class="flex w-full mt-72">
    <div class="w-1/2">
      <h5>OUR SOLUTION</h5>
      <h2 class="mt-8">
      Don't re-invent the wheel
      <br />
      Use a service framework.
      </h2>
      <p class="mt-12">
      hyper allows your development team to focus on the logic that makes your application special, not the necessary cloud service boilier plate.
      </p>
      <div class="mt-16">
      <LinkButton styles="w-max" bgColor="lightblue" txtColor="blue" href="/company">Learn More About Us</LinkButton>
      </div>
    </div>
  </section>
  <Ports />
  <img class="flow" src="/flow.svg" alt="flow" />
  <section class="flex flex-col items-center mt-24">
    <h5>HYPER POWER</h5>
    <h1 class="mt-16">All-In-One</h1>
    <p class="mt-12 w-1/2 text-center">hyper contains all of the services primitives to build applications without having to deal with servers, services or clouds.</p>
    <Button styles="mt-16 mb-24">Get Started</Button>
    <img src="/all.svg" alt="hyper framework" />
  </section>
  <section class="flex flex-col bg-whitesmoke items-center mt-16 pt-8">
    <h1>FAQs</h1>
    <p class="mt-16 mb-8">Can't find the answer you're looking for? Reach out to our <a href="/contact" class="text-red underline">customer support team</a>.</p>
    <div class="flex flex-col w-2/3">
    <FAQ styles="w-full mb-8 bg-white">
      <span slot="question">What is hyper?</span>
      <span slot="answer">A service framework</span>
    </FAQ>
    <FAQ styles="w-full mb-8 bg-white">
      <span slot="question">What is hyper?</span>
      <span slot="answer">A service framework</span>
    </FAQ>
    <FAQ styles="w-full mb-8 bg-white">
      <span slot="question">What is hyper?</span>
      <span slot="answer">A service framework</span>
    </FAQ>
    <FAQ styles="w-full mb-8 bg-white">
      <span slot="question">What is hyper?</span>
      <span slot="answer">A service framework</span>
    </FAQ>
    <FAQ styles="w-full mb-8 bg-white">
      <span slot="question">What is hyper?</span>
      <span slot="answer">A service framework</span>
    </FAQ>
    </div>
  </section>
  <Testimonials />  
</main>
<style lang="postcss">
  main {
    min-width: 1440px;
    width: 1440px;
  }
  .flow {
    @apply absolute opacity-90;
    top: 1400px;
    left: 500px;
  }
  .splash {
    background-image: url('/homepage-splash.svg');
    height: 950px;
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
</style>
