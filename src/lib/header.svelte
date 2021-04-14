<script>
import { goto } from '$app/navigation'
import NavButton from '$lib/nav-button.svelte'
</script>
<header class="w-full flex justify-between mt-4 ml-4 md:mt-20 md:ml-24 md:mr-44">
  <section class="flex items-center width-full">
    <!-- logo -->
    <img src="/logo.svg" alt="hyper logo" />
    <!-- name -->
    <h3 class="ml-3">hyper</h3>
  </section>
  <button class="md:hidden border-0 mr-4">
    <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 1H30M30 8.5H0M0 16H30" stroke="#1286F6" stroke-width="2"/>
    </svg>
  </button>
  <nav class="hidden md:block flex items-center space-x-4">
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
