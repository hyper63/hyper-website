<script>
  export let txtColor = "blue";
  export let bgColor = "lightblue";
  export let hoverTextColor = "white";
  export let hoverBackgroundColor = "white";
</script>

<button
  on:click
  class="text-{txtColor} bg-{bgColor} hover:bg-{hoverBackgroundColor} hover:text-{hoverTextColor}"
>
  <slot />
</button>

<style lang="postcss">
  button {
    @apply rounded-lg inline justify-center;
    font-size: 14px;
    height: 38px;
    width: 100px;
    margin: 0;
    padding: 4px;
  }
</style>
