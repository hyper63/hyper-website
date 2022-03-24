<script>
  import Button from "./button.svelte";

  export let styles = "";
</script>

<section class="flex flex-col items-center mt-16 md:mt-32 w-full {styles}">
  <h5>HYPER POWER</h5>
  <h2 class="text-2xl font-semibold md:text-5xl md:mt-16">All-in-one</h2>
  <p class="mt-4 md:mt-16 md:mt-12 md:w-1/2 text-center">
    hyper contains all of the services primitives to build applications without having to deal with
    servers, services or clouds.
  </p>
  <a href="https://docs.hyper.io/getting-started"
    ><Button styles="mt-16 mb-24">Get Started</Button></a
  >
  <img src="/all.svg" alt="hyper framework" />
</section>
