<script>
  import Arrow from "./svgs/arrow.svelte";
  import Bolt from "./svgs/bolt.svelte";

  export let styles = "";

  const resources = [
    {
      title: "Getting Started",
      description: "Build an Express API backed by hyper services in under 5 minutes",
      href: "https://docs.hyper.io/getting-started",
      imgComponent: Arrow,
    },
    {
      title: `Workshops`,
      description: "Follow video workshops that show how you can use hyper",
      href: "https://docs.hyper.io/workshops",
      imgComponent: Arrow,
    },
    {
      title: `Quickstarts`,
      description: "See examples on how you can leverage hyper services to create complex flows",
      href: "https://docs.hyper.io/nodejs-quickstarts",
      imgComponent: Arrow,
    },
    {
      title: `<pre><code>hyper-connect</code></pre>`,
      description:
        "Use the hyper-connect SDK to seamlessly connect to hyper services on Node or Deno",
      href: "https://docs.hyper.io/hyper-connect",
      imgComponent: Bolt,
    },
    {
      title: `Blog`,
      description: "Keep up with all of the news and info from the hyper team",
      href: "https://blog.hyper.io",
      imgComponent: Bolt,
    },
  ];
</script>

<section class="flex flex-col items-center py-16 md:py-12 w-full {styles}">
  <h2 class="text-2xl font-semibold md:text-5xl md:mt-16">
    Learn About <span class="text-yellow">hyper</span>
  </h2>
  <div class="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
    <div class="mt-6 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each resources as resource}
        <div class="w-full p-4">
          <div class="text-yellow">
            <a class="hover:underline" href={resource.href} target="_blank">
              <div class="h-4 mb-1">
                <svelte:component this={resource.imgComponent} />
              </div>
              <div>{@html resource.title}</div>
            </a>
          </div>
          <p>{resource.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
