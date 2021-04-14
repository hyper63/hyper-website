<script>
  import Header from '$lib/header.svelte'  
  import LinkBtn from '$lib/link-button.svelte'
  import Button from '$lib/button.svelte'
  import Play from '$lib/play-button.svelte'
  import LinkButton from '$lib/link-button.svelte'
  import Ports from '$lib/ports.svelte'
  import FAQ from '$lib/faq.svelte'
  import Testimonials from '$lib/testimonials.svelte'
  import Flow from '$lib/flow.svelte'

  let show = false
</script>
<svelte:head>
  <title>hyper.io - the service framework</title>
</svelte:head>
<Header />
<main class="ml-0 pl-0 pr-0 mr-0">
  <Flow />
  <section class="splash bg-no-repeat pl-24 pr-24">
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
  <section class="flex w-full pt-44 pl-24 pr-24">
    <div class="w-1/2">
    <h5 class="">THE PROBLEM</h5>
    <h2 class="mt-16">Software can cause just as many problems as it solves</h2>
    <p class="mt-16">
    Unfortunately, often times, the result leads to disappointment, As a software development community, can we do better? Can we create products that are a joy, to not only build, but to maintain, over time? Product that can migrate to new technologies and platforms incrementally?
    </p>
    </div>
  </section>
  <section class="flex w-full pt-44 pl-24 pr-24">
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
  <Ports styles="pl-24 pr-24" />
  <section class="flex flex-col items-center mt-24 pl-24 pr-24 w-full">
    <h5>HYPER POWER</h5>
    <h1 class="mt-16">All-In-One</h1>
    <p class="mt-12 w-1/2 text-center">hyper contains all of the services primitives to build applications without having to deal with servers, services or clouds.</p>
    <Button styles="mt-16 mb-24">Get Started</Button>
    <img src="/all.svg" alt="hyper framework" />
  </section>
  <section class="flex flex-col bg-whitesmoke items-center mt-16 pt-8 pl-24 pr-24">
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
  <Testimonials styles="pl-24 pr-24" />  
</main>
<footer class="">
  <section class="flex pl-24 pr-24">
    <div class="w-1/4 p-24 flex items-center justify-center"><img src="/logo.svg" /></div>
    <div class="p-16">
      <div class="mb-8 text-blue"><a href="/product">PRODUCT</a></div>
      <ul>
        <li><a href="/product?port=data">DATA</a></li>
        <li><a href="/product?port=search">SEARCH</a></li>
        <li><a href="/product?port=cache">CACHE</a></li>
        <li><a href="/product?port=storage">STORAGE</a></li>
        <li><a href="/product?port=queue">QUEUE</a></li>
      </ul>
    </div>
    <div class="p-16">
      <div class="mb-8 text-blue"><a href="https://docs.hyper63.com">API DOCS</a></div>
      <ul>
        <li><a class="uppercase" href="https://docs.hyper63.com/introduction">Introduction</a></li>
        <li><a class="uppercase" href="https://docs.hyper63.com/authentication">Authentication</a></li>
        <li><a class="uppercase" href="https://docs.hyper63.com/">CONFIGURATION</a></li>
        <li><a class="uppercase" href="https://docs.hyper63.com">HOOKS</a></li>
        <li><a class="uppercase" href="https://docs.hyper63.com">DEPLOYING</a></li>
      </ul>
    </div>
    <div class="p-16">
      <div class="mb-8 text-blue"><a href="https://blog.hyper63.com">BLOG</a></div>
      <ul>
        <li><a href="/product?port=data">COMPANY</a></li>
        <li><a href="/product?port=search">GET STARTED</a></li>
        <li><a href="/product?port=cache">FAQS</a></li>
      </ul>
    </div>
    <div class="p-16">
      <div class="mb-8 text-blue"><a href="/contact">CONTACT</a></div>
      <ul>
        <li><a href="/product?port=data">INFO@HYPER63.COM</a></li>
        <li><a href="/product?port=search">SUPPORT@HYPER63.COM</a></li>
        <li><a href="/product?port=cache">TWITTER</a></li>
        <li><a href="/product?port=storage">GITHUB</a></li>
      </ul>
    </div>
  </section>
  <section class="flex justify-center mt-16 mb-16">
    <p class="font-mono text-sm">&copy; 2021 HYPER63, LLC ALL RIGHTS RESERVED.</p>
  </section>
</footer>
<style lang="postcss">
  main {
    width: 100%;
  }
  .flow {
    @apply sm:hidden md:block absolute opacity-90;
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
