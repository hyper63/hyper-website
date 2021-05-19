<script>
  import Button from '$lib/button.svelte'

  export let styles = ''
</script>
<section class="flex flex-col items-center mt-8 md:mt-24 w-full {styles}">
  <h5>HYPER POWER</h5>
  <h1 class="text-4xl mt-4 md:text-6xl md:mt-16">All-In-One</h1>
  <p class="mt-4 text-base md:text-2xl md:mt-12 md:w-1/2 text-center">hyper contains all of the services primitives to build applications without having to deal with servers, services or clouds.</p>
  <!-- <Button styles="mt-16 mb-24">Get Started</Button> -->
  <Button styles="mt-12 mb-24"><a href="https://docs.hyper63.com/getting-started" target="_blank">Get Started</a></Button>

  
  <img src="/all.svg" alt="hyper framework" />
</section>

