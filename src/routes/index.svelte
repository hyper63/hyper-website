<script>
  import Header from '$lib/header.svelte'  
  import LinkBtn from '$lib/link-button.svelte'
  import Button from '$lib/button.svelte'
  import Play from '$lib/play-button.svelte'
  import LinkButton from '$lib/link-button.svelte'
  import Ports from '$lib/ports.svelte'
  import FAQ from '$lib/faq.svelte'
  import All from '$lib/all-n-one.svelte'
  import Testimonials from '$lib/testimonials.svelte'
  import Flow from '$lib/flow.svelte'
  import Footer from '$lib/footer.svelte'

  let show = false
</script>
<svelte:head>
  <title>hyper.io - the service framework</title>
</svelte:head>
<Header />
<main class="ml-0 pl-0 pr-0 mr-0">
  <section class="splash bg-no-repeat pl-4 md:pl-24 md:pr-24">
    <div class="mt-8 md:mt-20 md:w-1/2">
      <h1 class="text-4xl font-semibold md:text-6xl width-full height-full">Build Your Web Applications at <b>hyper</b> Speed</h1>
      <p class="text-md mt-4 mr-8 md:mt-12 md:w-3/4">Let your development team focus on creating applications that solve the problems of the business, 
      let hyper solve the problems of the cloud.</p>
      <div class="mt-16 flex space-x-4 md:space-x-20">
        <Button bgColor="blue" txtColor="white">Get Started</Button>
        <Play>Watch</Play>
      </div>
    </div> 
  </section>
  <img class="md:hidden" src="/homepage-splash.svg" />
  <section class="flex w-full md:pt-44 pl-4 md:pl-24 md:pr-24 md:relative">
    <Flow />
    <div class="md:w-1/2 2xl:w-1/3">
      <h5 class="">THE PROBLEM</h5>
      <h2 class="text-3xl font-semibold md:text-5xl md:mt-16">Software can cause just as many problems as it solves</h2>
      <p class="mt-4 md:mt-16">
      Unfortunately, often times, the result leads to disappointment, As a software development community, can we do better? Can we create products that are a joy, to not only build, but to maintain, over time? Product that can migrate to new technologies and platforms incrementally?
      </p>
    </div>
  </section>
  <img class="md:hidden" src="/flow1.svg" />
  <section class="flex w-full pl-4 md:pt-44 md:pl-24 md:pr-24">
    <div class="md:w-1/2 2xl:w-1/3">
      <h5>OUR SOLUTION</h5>
      <h2 class="text-3xl font-semibold md:text-5xl md:mt-8">
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
  <div class="mt-16 md:hidden flex items-center justify-center">
  <img class="" src="/hyper-box.svg" />
  </div>
  <Ports styles="pl-24 pr-24" />
  <All styles="pl-24 pr-24" />
  <section class="flex flex-col bg-whitesmoke items-center mt-4 pt-8 md:mt-16 md:pt-8 md:pl-24 md:pr-24">
    <h1 class="text-3xl md:text-6xl">FAQs</h1>
    <p class="px-4 my-4 text-base md:mt-16 md:mb-8">Can't find the answer you're looking for? Reach out to our <a href="/contact" class="text-red underline">customer support team</a>.</p>
    <div class="flex flex-col w-3/4 md:w-2/3">
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
  <Testimonials styles="pl-24 pr-24" />  
</main>
<Footer />
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
  .flow {
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
</style>
