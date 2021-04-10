<script>
  import LinkBtn from '$lib/link-button.svelte'
  let show = false
</script>
<main class="container m-20 flex flex-col items-center justify-center">
  <h1 class="mb-20">HyperIO Site Dev</h1>
  <LinkBtn href="/style">Style Guide</LinkBtn>
</main>
<footer>
  {#if show}
  <p>adding colors here so they do not get purged</p>
  <p class="text-black bg-white">Colors</p>
  <p class="text-darkgray bg-lightgray">Colors</p>
  <p class="text-gray bg-black">Colors</p>
  <p class="text-lightgray bg-darkgray">Colors</p>
  <p class="text-whitesmoke bg-gray">Colors</p>
  <p class="text-yellow bg-lightyellow hover:bg-yellow">Colors</p>
  <p class="text-orange bg-lightorange hover:bg-orange">Colors</p>
  <p class="text-red bg-lightred hover:bg-red">Colors</p>
  <p class="text-blue bg-lightblue hover:bg-blue">Colors</p>
  <p class="text-purple bg-lightpurple hover:bg-purple">Colors</p>
  <p class="text-green bg-lightgreen hover:bg-green">Colors</p>

  <p class="text-lightyellow bg-yellow hover:bg-lightyellow">Colors</p>
  <p class="text-lightorange bg-orange hover:bg-lightorange">Colors</p>
  <p class="text-lightred bg-red hover:bg-lightred">Colors</p>
  <p class="text-lightblue bg-blue hover:bg-lightblue">Colors</p>
  <p class="text-lightpurple bg-purple hover:bg-lightpurple">Colors</p>
  <p class="text-lightgreen bg-green hover:bg-lightgreen">Colors</p>
  {/if}
</footer>
