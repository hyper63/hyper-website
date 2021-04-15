<script>
  import Header from '$lib/header.svelte'
  import Footer from '$lib/footer.svelte'
  import Search from '$lib/search.svelte'
  import FAQ from '$lib/faq.svelte'
</script>
<Header />
<main>
  <h1 class="mt-8 mx-auto text-5xl text-center">FAQs</h1> 
  <p class="mt-4 px-4 text-base text-darkgray">
  Can’t find the answer you’re looking for? Reach out to our 
  <a href="/contact" class="text-red underline">customer support team</a>.
  </p>
  <section class="mt-4 mx-4">
    <Search />
  </section>
  <section>
    <h4 class="my-4 text-2xl text-center">Filter By</h4>
    <div class="mx-4 w-full flex space-x-2 justify-center">
      <button class="active">All Types</button>
      <button class="filter">Products</button>
      <button class="filter">Company</button>
      <button class="filter">Help</button>
    </div>
  </section>
  <section class="mx-4 mt-8 py-8 px-4 rounded bg-whitesmoke space-y-4 bg-white">
    <FAQ>
      <span slot="question">What is hyper?</span>
      <span slot="answer">Add awesome answer here</span>
    </FAQ>
    <FAQ>
      <span slot="question">What is hyper?</span>
      <span slot="answer">Add awesome answer here</span>
    </FAQ>
    <FAQ>
      <span slot="question">What is hyper?</span>
      <span slot="answer">Add awesome answer here</span>
    </FAQ>
    <FAQ>
      <span slot="question">What is hyper?</span>
      <span slot="answer">Add awesome answer here</span>
    </FAQ>
    <FAQ>
      <span slot="question">What is hyper?</span>
      <span slot="answer">Add awesome answer here</span>
    </FAQ>
    <FAQ>
      <span slot="question">What is hyper?</span>
      <span slot="answer">Add awesome answer here</span>
    </FAQ>
  </section>
</main>
<hr class="mx-4 border-lightgray" />
<Footer />
<style lang="postcss">
  .filter {
    @apply font-space border-2 rounded border-gray text-sm bg-whitesmoke text-gray;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 8px;
    padding-right: 8px;
  }
  .active {
    @apply font-space border-2 rounded border-blue text-sm bg-lightblue text-blue;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 8px;
    padding-right: 8px;
  }

</style>

