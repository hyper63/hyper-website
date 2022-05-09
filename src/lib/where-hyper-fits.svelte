<script>
  import { onMount } from "svelte";

  export let styles = "";

  let img;
  const src = "/hyper-stack.gif";

  /**
   * The src gif is fairly large
   * so we defer loading it until after the page has loaded
   * to prevent blocking
   */
  onMount(() => {
    img.setAttribute("src", src);
  });
</script>

<section class="flex flex-col items-center py-16 md:py-12 w-full bg-white {styles}">
  <h2 class="text-2xl font-semibold md:text-5xl md:mt-16">Where does hyper fit?</h2>
  <p class="w-full max-w-3xl mt-4 text-center">
    hyper services power your backend business services. Hyper's consistent API makes it simple to
    consume cloud native services, and without coupling. Focus on your business services, not
    plubming in the cloud.
  </p>
  <div class="hidden mt-8 md:block md:w-full max-w-5xl">
    <img bind:this={img} data-src={src} alt="where does hyper fit graphic" />
  </div>
</section>
