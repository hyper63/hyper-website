<script>
  import FAQ from "$lib/faq.svelte";
  import { HelpURLs } from "$lib/constants.js";
  export let faqs;
</script>

<section
  class="flex flex-col bg-whitesmoke items-center mt-4 pt-8 md:mt-16 md:pt-8 md:pl-24 md:pr-24"
>
  <h2 class="text-2xl font-semibold md:text-5xl md:mt-16">FAQs</h2>
  <p class="px-4 my-4 text-base md:mt-16 md:mb-8">
    Can't find the answer you're looking for? Reach out to our <a
      href={HelpURLs.SLACK_SUPPORT}
      target="_blank"
      class="text-red underline">Slack support channel</a
    >.
  </p>
  <div class="flex flex-col space-y-4 w-3/4 md:w-2/3 md:mb-32 mb-8">
    {#each faqs as { question, answer }}
      <FAQ>
        <span slot="question">{question}</span>
        <span slot="answer">{@html answer}</span>
      </FAQ>
    {/each}
  </div>
</section>
