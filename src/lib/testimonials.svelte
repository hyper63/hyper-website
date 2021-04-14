<script>
import Pagination from './pagination.svelte'

export let styles = ''
</script>
<section class="flex mt-24 {styles}">
  <div class="w-1/2">
    <img src="/testimonials.svg" alt="testimonial graphic" />
  </div>
  <div class="w-1/2">
    <h5>TESTIMONIALS</h5>
    <h1 class="mt-8">What Makes<br />Us Different?</h1>
    <blockquote class="mt-16">
    // Software development is the constant embracement
    of change as you discover and refine applications to 
    improve the workflow and effectiveness of users.
    Sofware should empower users to get their stuff
    done leveraging technology, no driven by technology.
    </blockquote>
    <p class="mt-8">Tom Wilson <a class="ml-4 text-blue" href="https://linkedin.com/ln/twilson63">CEO at hyper</a></p>
    <Pagination styles="mt-16" pages=3 />
  </div>
  
</section>
