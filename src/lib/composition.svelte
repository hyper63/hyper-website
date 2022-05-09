<script>
  import Code from "./code.svelte";

  export let styles = "";
  export let example = "";
</script>

<section class="w-full h-[1210px] hyper-5 bg-whitesmoke pt-8 mt-8 {styles}">
  <div class="mt-16 w-full m-auto text-center">
    <h2 class="text-2xl font-semibold md:text-5xl">Compose Hyper Services Seamlessly 🧪</h2>
    <p class="text-base mt-4">Compose your Hyper services to create complex flows</p>
  </div>
  <div class="flex h-4/5">
    <div class="w-full mt-8">
      <Code code={example} styles="w-[985px] h-[650px]" />
    </div>
  </div>
</section>

<style>
  .hyper-5 {
    background-position: bottom -80px center;
    background-image: url("/services.svg");
    background-repeat: no-repeat;
  }
</style>
