<script>
  import Prism from "prismjs";
  import { onMount } from "svelte";

  export let styles = "";
  export let code = "";

  let node;

  /**
   * I tried a bunch of different ways to
   * get Prism to highlight things. This seemed to be the only way that worked.
   */
  onMount(() => {
    Prism.highlightAllUnder(node);
  });
</script>

<div bind:this={node} class="mockup-code bg-[#272822] max-w-full m-auto {styles}">
  <pre class="h-full w-full overflow-scroll"><code class="language-js">{code}</code></pre>
</div>

<style lang="postcss">
  .mockup-code pre::before {
    margin-right: initial;
  }
</style>
