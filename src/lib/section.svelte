<script>
  export let styles = ''
  export let id = ''
</script>
<section {id} class="flex {styles}">
  <div class="w-1/2 flex flex-col items-center justify-center">
    <slot name="left"></slot>
  </div>
  <div class="w-1/2 flex flex-col items-center justify-center">
    <slot name="right"></slot>
  </div>
</section>
