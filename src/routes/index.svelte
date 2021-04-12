<script>
  import Header from '$lib/header.svelte'  
  import LinkBtn from '$lib/link-button.svelte'
  import Button from '$lib/button.svelte'
  import Play from '$lib/play-button.svelte'
  let show = false
</script>
<Header />
<main class="ml-44 w-full bg-no-repeat">
  <div class="mt-20 w-1/2">
    <h1 class="width-full height-full">Build Your Web Applications at <b>hyper</b> Speed</h1>
    <p class="mt-12 w-3/4">Let your development team focus on creating applications that solve the problems of the business, 
    let hyper solve the problems of the cloud.</p>
    <div class="mt-16 flex space-x-20">
      <Button bgColor="blue" txtColor="white">Get Started</Button>
      <Play>Watch</Play>
    </div>
  </div> 

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
  
  <p class="text-active-yellow bg-active-yellow hover:bg-lightyellow">Colors</p>
  <p class="text-active-orange bg-active-orange hover:bg-lightorange">Colors</p>
  <p class="text-active-red bg-active-red hover:bg-lightred">Colors</p>
  <p class="text-active-blue bg-active-blue hover:bg-lightblue">Colors</p>
  <p class="text-active-purple bg-active-purple hover:bg-lightpurple">Colors</p>
  <p class="text-active-green bg-active-green hover:bg-lightgreen">Colors</p>
  <p class="border-3 text-white bg-white hover:bg-white">All White</p>
  {/if}
</footer>
<style>
  main {
    background-image: url('/homepage-splash.svg');
    height: 950px;
  }
</style>
