<script>
  export let styles = "";
  export let id = "";
  export let image = "left";
</script>

<section {id} class="md:flex pb-16 {styles}">
  {#if image === "left"}
    <div class="hidden md:w-1/2 md:flex md:flex-col md:items-center md:justify-center">
      <div class="max-w-full">
        <slot name="image" />
      </div>
    </div>
  {/if}
  <div class="md:w-1/2 md:flex md:flex-col md:items-center md:justify-center">
    <div class="max-w-full">
      <slot name="text" />
    </div>
  </div>
  {#if image === "right"}
    <div class="hidden md:w-1/2 md:flex md:flex-col md:items-center md:justify-center">
      <div class="max-w-full">
        <slot name="image" />
      </div>
    </div>
  {/if}
</section>
