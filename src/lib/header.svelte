<script>
import { goto } from '$app/navigation'
import NavButton from '$lib/nav-button.svelte'
</script>
<header class="flex justify-between mt-20 ml-24 mr-44">
  <section class="flex items-center width-full">
    <!-- logo -->
    <img src="/logo.svg" alt="hyper logo" />
    <!-- name -->
    <h3 class="ml-3">hyper</h3>
  </section>
  <nav class="flex items-center space-x-4">
    <!-- product -->
    <a class="font-space uppercase text-sm" href="/product">product</a>
    <!-- faq -->
    <a class="font-space uppercase text-sm" href="/faq">faq</a>
    <!-- company -->
    <a class="font-space uppercase text-sm" href="/company">company</a>
    <!-- blog -->
    <a class="font-space uppercase text-sm" href="https://blog.hyper63.com">blog</a>
    <!-- get started -->
    <a class="font-space uppercase text-sm" href="/get-started">get started</a>
    <!-- api docs button -->
    <NavButton on:click={() => goto('https://docs.hyper63.com')}>API DOCS</NavButton>
  </nav>
</header>
