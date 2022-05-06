<script>
  import Bolt from "./svgs/bolt.svelte";

  import { HelpURLs } from "./constants.js";

  export let styles = "";
</script>

<section class="flex flex-col items-center mt-16 md:mt-12 w-full {styles}">
  <h5>HYPER POWER</h5>
  <h2 class="text-2xl font-semibold md:text-5xl md:mt-16">All-in-one</h2>
  <p class="w-full mt-4 md:mt-16 md:mt-12 lg:w-1/2 text-center">
    hyper contains all of the services primitives to build applications without having to deal with
    servers, services or clouds.
  </p>
  <div class="flex flex-wrap justify-center gap-8 w-full mt-8 mb-16 md:flex-row">
    <a class="btn btn-primary gap-2" href={HelpURLs.GETTING_STARTED}>
      Get Started
      <Bolt color="white" />
    </a>
    <a class="btn btn-secondary gap-2" href={HelpURLs.REQUEST_A_CONSULTATION}>
      Consult an Architect
      <Bolt color="white" />
    </a>
    <a class="btn btn-accent gap-2" href={HelpURLs.REQUEST_A_DEMO}>
      Request A Demo
      <Bolt color="white" />
    </a>
  </div>
  <img src="/all.svg" alt="hyper framework" />
</section>
