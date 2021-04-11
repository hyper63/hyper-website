<script>
  export let styles = ''
  let toggle = false;
</script>
<div class="faq-container rounded-large {styles}">
  <div class="flex">
    <span class="w-full">
    <slot name="question"></slot>
    </span>
    <div class="toggle">
    {#if toggle}
      <button on:click={() => toggle = !toggle}>
      <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13.813L12.9667 1.81299L24.9334 13.813" stroke="#1286F6" stroke-width="2"/>
</svg>
      </button>

    {:else}
      <button on:click={() => toggle = !toggle}>
      <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.812988L12.9667 12.813L24.9334 0.812988" stroke="#7C7F86" stroke-width="2"/>
</svg>
      </button>

    {/if}
    </div>
  </div>
  {#if toggle}
    <div class="mt-8 text-gray">
      <slot name="answer"></slot>
    </div>
  {/if}
</div>
<style lang="postcss">
  button {
    margin: 0;
    padding: 0;
  }
  .faq-container {
    @apply border p-5 border-lightgray font-space;
  }
  .toggle {
    @apply flex p-3 items-center justify-center;
    height: 100%;
    
  }
</style>
