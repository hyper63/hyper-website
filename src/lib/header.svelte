<script>
  import BetaBadge from "$lib/badge-beta.svelte";

  import { isBetaEnabled } from "$lib/feature-flags.js";
  import { HelpURLs } from "./constants.js";

  let mobileMenu = false;

  function mobile() {
    mobileMenu = !mobileMenu;
  }

  function isCurrentPage(ref) {
    return window.location.pathname === ref ? "active" : "link";
  }
</script>

<header
  class="w-full flex items-center px-4 justify-between md:justify-around mt-4 md:mt-20 md:px-0"
>
  <a href="/">
    <section class="flex items-center width-full">
      <!-- logo -->
      <img src="/logo.svg" alt="hyper logo" />
      <!-- name -->
      <h2 class="ml-3 text-xl md:text-5xl">hyper&nbsp;</h2>
      {#if isBetaEnabled}
        <BetaBadge />
      {/if}
    </section>
  </a>
  <section class="md:hidden">
    <button
      aria-expanded={mobileMenu ? "true" : "false"}
      aria-label="mobile-menu"
      class="border-0 p-0 focus:outline-none"
      on:click={() => mobile()}
    >
      <svg
        width="30"
        height="17"
        viewBox="0 0 30 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 1H30M30 8.5H0M0 16H30" stroke="#1286F6" stroke-width="2" />
      </svg>
    </button>
  </section>
  <nav class="hidden my-auto md:block w-1/2">
    <div class="flex items-center justify-around">
      <!-- product -->
      <a
        class="font-space uppercase text-sm hover:text-active-blue active:text-active-purple"
        href="/product">product</a
      >
      <!-- pricing -->
      <a
        class="font-space uppercase text-sm hover:text-active-blue active:text-active-purple"
        href="/pricing">pricing</a
      >
      <!-- faq -->
      <a
        class="font-space uppercase text-sm hover:text-active-blue active:text-active-purple"
        href="/faq">faq</a
      >
      <!-- company -->
      <a
        class="font-space uppercase text-sm hover:text-active-blue active:text-active-purple"
        href="/company">company</a
      >
      <!-- blog -->
      <a
        class="font-space uppercase text-sm hover:text-active-blue active:text-active-purple"
        href="https://blog.hyper.io">blog</a
      >
      <!-- get started
        <a class="font-space uppercase text-sm" href="/get-started">get started</a>
        -->
      <!-- api docs button -->
      <a
        class="font-space uppercase text-sm hover:text-active-blue active:text-active-purple"
        href={HelpURLs.DOCS}>Docs</a
      >

      <a class="btn btn-primary btn-sm" href={HelpURLs.DASHBOARD}> Dashboard </a>
    </div>
  </nav>
</header>
{#if mobileMenu}
  <div class="mx-4" id="mobile-menu">
    <div class="pt-2 pb-3 space-y-1">
      <a href="/" class={isCurrentPage("/")} aria-current="page">Home</a>
      <a href="/product" class={isCurrentPage("/product")}>Product</a>
      <a href="/pricing" class={isCurrentPage("/pricing")}>Pricing</a>
      <a href="/faq" class={isCurrentPage("/faq")}>FAQ</a>
      <a href="/company" class={isCurrentPage("/company")}>Company</a>
      <a href="https://blog.hyper.io" class="link">Blog</a>
      <!-- <a href="/get-started" class="{isCurrentPage('/get-started')}">Get Started</a> -->
      <hr />
      <a class="btn btn-link btn-primary" href={HelpURLs.DOCS}>API DOCS</a>
    </div>
  </div>
{/if}

<style lang="postcss">
  .active {
    @apply bg-lightgreen border-green text-green block pl-3 pr-4 py-2 border-l-4 text-base font-medium;
  }
  .link {
    @apply border-transparent text-gray hover:bg-whitesmoke hover:border-gray hover:text-darkgray block pl-3 pr-4 py-2 border-l-4 text-base font-medium;
  }
</style>
