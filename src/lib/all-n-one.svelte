<script>
  import Button from './button.svelte'

  export let styles = ''
</script>
<section class="flex flex-col items-center mt-8 md:mt-24 w-full {styles}">
  <h5>HYPER POWER</h5>
  <h1 class="text-4xl mt-4 md:text-6xl md:mt-16">All-In-One</h1>
  <p class="mt-4 text-base md:text-2xl md:mt-12 md:w-1/2 text-center">hyper contains all of the services primitives to build applications without having to deal with servers, services or clouds.</p>
  <a href="https://docs.hyper.io/getting-started"><Button styles="mt-16 mb-24">Get Started</Button></a>
  <img src="/all.svg" alt="hyper framework" />
</section>

