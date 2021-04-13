<script>
  import Header from '$lib/header.svelte'  
  import LinkBtn from '$lib/link-button.svelte'
  import Button from '$lib/button.svelte'
  import Play from '$lib/play-button.svelte'
  import LinkButton from '$lib/link-button.svelte'
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
  <img class="flow" src="/flow.svg" alt="flow" />
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
</main>
<style lang="postcss">
  main {
    min-width: 1440px;
    width: 1440px;
  }
  .flow {
    @apply absolute;
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
