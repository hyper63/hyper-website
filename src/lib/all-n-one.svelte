<script>
  import Button from "./buttons/button.svelte";

  export let styles = "";
</script>

<section class="flex flex-col items-center mt-16 md:mt-12 w-full {styles}">
  <h5>HYPER POWER</h5>
  <h2 class="text-2xl font-semibold md:text-5xl md:mt-16">All-in-one</h2>
  <p class="w-full mt-4 md:mt-16 md:mt-12 lg:w-1/2 text-center">
    hyper contains all of the services primitives to build applications without having to deal with
    servers, services or clouds.
  </p>
  <a href="https://docs.hyper.io/getting-started"
    ><Button styles="mt-8 mb-16">Get Started</Button></a
  >
  <img src="/all.svg" alt="hyper framework" />
</section>
