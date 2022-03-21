<script>
  import { goto } from "$app/navigation";
  import NavButton from "$lib/nav-button.svelte";

  let mobileMenu = false;

  function mobile() {
    mobileMenu = !mobileMenu;
  }

  function isCurrentPage(ref) {
    return window.location.pathname === ref ? "active" : "link";
  }
</script>

<header class="w-full flex justify-between mt-4 ml-4 md:mt-20 md:ml-24 md:mr-44">
  <section class="flex items-center width-full">
    <!-- logo -->
    <a href="/admin">
      <img src="/logo.svg" alt="hyper logo" />
    </a>
    <!-- name -->
    <h3 class="ml-3">hyper admin</h3>
  </section>
  <section class="md:hidden">
    <button class="border-0 mr-4 focus:outline-none" on:click={() => mobile()}>
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
  <nav class="hidden w-1/2 md:block flex items-center space-x-4">
    <!-- product -->
    <a class="font-space uppercase text-sm" href="/admin/cms">cms</a>
  </nav>
</header>
{#if mobileMenu}
  <div class="sm:hidden mx-4" id="mobile-menu">
    <div class="pt-2 pb-3 space-y-1">
      <a href="/" class={isCurrentPage("/admin")} aria-current="page">Admin</a>
      <a href="/admin/cms" class={isCurrentPage("/admin/cms")}>CMS</a>
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
