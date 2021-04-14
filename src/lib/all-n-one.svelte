<script>
  import Button from './button.svelte'

  export let styles = ''
</script>
<section class="flex flex-col items-center mt-24 w-full {styles}">
  <h5>HYPER POWER</h5>
  <h1 class="mt-16">All-In-One</h1>
  <p class="mt-12 w-1/2 text-center">hyper contains all of the services primitives to build applications without having to deal with servers, services or clouds.</p>
  <Button styles="mt-16 mb-24">Get Started</Button>
  <img src="/all.svg" alt="hyper framework" />
</section>

