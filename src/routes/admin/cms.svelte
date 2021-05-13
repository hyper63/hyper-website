<script>
  import Header from '$lib/admin/header.svelte'

</script>
<Header />
<main class="ml-24 mr-44">
  <section class="w-full flex">
    <a class="card" href="/admin/cms/faqs">FAQS</a>
    <a class="card inactive" href="/admin/cms/testimonials">Testimonials</a>
    <a class="card inactive" href="/admin/cms/info">Site Info</a>
  </section>
  <section class="w-full flex">
    <a class="card inactive" href="/admin/cms/priceplans">Price Plans</a>
    <a class="card inactive" href="/admin/cms/ports">Ports</a>
    <a class="card inactive" href="/admin/cms/flags">Flags</a>
  </section>
</main>
<style>

  .card {
    @apply w-1/4 m-16 p-24 border rounded-lg bg-yellow text-white text-3xl font-space;
  }
  
  .inactive {
    @apply bg-darkgray
  }
</style>
