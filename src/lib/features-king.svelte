<script>
  import Button from "$lib/buttons/button.svelte";
  import Services from "$lib/services.svelte";
  import { HelpURLs } from "$lib/constants.js";
</script>

<section class="flex flex-col items-center pl-4 md:pl-24 md:pr-24 w-full">
  <div class="flex">
    <div class="md:w-1/2 hidden md:block">
      <Services />
    </div>
    <div class="mt-8 md:mt-32 md:w-1/2">
      <h5 class="">Hyperfocus on features</h5>
      <h2 class="text-2xl font-semibold md:text-5xl md:mt-16">Features are King 👑</h2>
      <p class="mt-4 md:mt-16">
        Building the services that power your features is difficult to get right. We took what we've
        learned about building scalable, secure, and performant service tiers and crafted hyper
        cloud. With hyper cloud as your services tier, you can focus on building what matters most:
        features that delight your customers.
      </p>
      <p class="mt-4 md:mt-8">
        How much of your budget is focused on your backend service personnel? Minimize the human
        resources required to build and maintain your software product. Bypass the red tape,
        frustration, bureaucracy, and uncertainty around creating cloud-based backend services. Stop
        wasting precious resources 💸. Shift your personnel to the side of your solution that your
        customers need: features and business logic.
      </p>

      <p class="mt-4 md:mt-8">
        With a few clicks, you get robust and scalable backend cloud services including a document
        datastore, in-memory cache, search engine, storage buckets, and queues. Sign up for free 😀
        with your GitHub account and create backend services in seconds. When you're ready to step
        it up, we have plans starting at $99 a month.
      </p>
      <div class="mt-16 flex flex-col md:flex-row space-y-4 space-x-4 md:space-y-0 md:space-x-20">
        <a href={HelpURLs.PRICING}><Button styles="mt-4">View Pricing</Button></a>
      </div>
    </div>
  </div>
</section>
