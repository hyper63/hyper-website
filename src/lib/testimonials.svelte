<script>
import Pagination from './pagination.svelte'

export let styles = ''
</script>
<section class="flex flex-col md:flex-row md:mt-24 {styles}">
  <div class="hidden md:flex md:w-1/2">
    <img src="/testimonials.svg" alt="testimonial graphic" />
  </div>
  <div class="w-full md:w-1/2">
    <h5 class="mt-4 text-center md:text-left">TESTIMONIALS</h5>
    <h1 class="mt-4 text-center text-4xl md:text-left md:text-6xl md:mt-8">What Makes Us <br /> Different?</h1>

    <blockquote class="text-base mt-4 md:text-2xl md:mt-16">
    // Software development is the constant embracement
    of change as you discover and refine applications to 
    improve the workflow and effectiveness of users.
    Sofware should empower users to get their stuff
    done leveraging technology, no driven by technology.
    </blockquote>
    <p class="mt-4 md:mt-8">Tom Wilson <a class="ml-4 text-blue" href="https://linkedin.com/ln/twilson63">CEO at hyper</a></p>
    <Pagination styles="mt-4 justify-center md:justify-start md:mt-16" pages=3 />
  </div>
  
</section>
