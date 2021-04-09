<script>
  import { goto } from '$app/navigation'
  import Button from '$lib/button.svelte'

</script>
<main class="container m-20 flex flex-col items-center justify-center">
  <h1 class="mb-20">HyperIO Site Dev</h1>
  <Button on:click={() => goto('/style')}>Style Guide</Button>
</main>
