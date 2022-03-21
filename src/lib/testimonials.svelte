<script>
  export let styles = "";
</script>

<section class="flex flex-col md:flex-row md:mt-24 {styles}">
  <div class="hidden md:flex md:w-1/2">
    <img src="/testimonials.svg" alt="testimonial graphic" />
  </div>
  <div class="w-full md:w-1/2">
    <h5 class="mt-4 text-center md:text-left">TESTIMONIALS</h5>
    <h1 class="mt-4 text-center text-4xl md:text-left md:text-6xl md:mt-8">Why use hyper?</h1>

    <blockquote class="text-base mt-4 md:text-2xl md:mt-16">
      hyper enables us to spend time on what matters. By providing a well-defined interface for
      things like data persistence, caching, and search, hyper allows us to avoid bike-shedding and
      reinventing logic that is common across the majority of our applications. Instead, we can
      spend our time working on the details that make each project unique and keep our focus on
      providing value to the customer.
    </blockquote>
    <p class="mt-4 md:mt-8">
      Travis Nesland, Senior Lead Developer at <a class="text-blue" href="https://sovereign.co"
        >Sovereign, co.</a
      >
    </p>
    <!--
    <Pagination styles="mt-4 justify-center md:justify-start md:mt-16" pages=3 />
    -->
  </div>
</section>
