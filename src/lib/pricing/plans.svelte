<script>
  import Free from "./cards/free.svelte";
  import Pro from "./cards/pro.svelte";
  import Business from "./cards/business.svelte";
  import Enterprise from "./cards/enterprise.svelte";
</script>

<div class="md:mt-16 md:pl-24 md:pr-24">
  <section class="flex place-content-center">
    <Free />
    <Pro />
    <Business />
    <Enterprise />
  </section>
</div>
<p class="my-8 text-center text-blue">
  All plans must adhere to our <a class="underline" href="https://docs.hyper.io/terms-of-service"
    >Terms of Service</a
  >
  and
  <a class="underline" href="https://docs.hyper.io/acceptable-use-policy">Acceptable Use Policy</a>.
</p>
