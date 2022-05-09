<script>
  import Code from "./code.svelte";

  export let styles = "";
  export let examples = {};

  let active = 0;
  $: ports = [
    {
      id: "data",
      text: "Data Service",
      ordinate: "01",
      description: "Store, retrieve, and index structured data",
      image: "/data-port.svg",
      target: "/product#data",
      color: "green",
    },
    {
      id: "cache",
      text: "Cache Service",
      ordinate: "02",
      description: "Key-value data store with time to live capability",
      image: "/cache-port.svg",
      target: "/product#cache",
      color: "purple",
    },
    {
      id: "search",
      text: "Search Service",
      ordinate: "03",
      description: "Free-text search service",
      image: "/search-port.svg",
      target: "/product#search",
      color: "orange",
    },
    {
      id: "storage",
      text: "Storage Service",
      ordinate: "04",
      description: "File storage using a directory tree",
      image: "/storage-port.svg",
      target: "/product#storage",
      color: "blue",
    },
    {
      id: "queue",
      text: "Queue Service",
      ordinate: "05",
      description: "Add tasks to a queue for distributing jobs",
      image: "/queue-port.svg",
      target: "/product#queue",
      color: "red",
    },
  ].map((port) => ({
    ...port,
    example: examples[port.id] || "",
  }));

  function showPort(n) {
    return function () {
      active = n;
    };
  }
</script>

<!-- Mobile -->
<section class="w-full px-4 space-y-4 md:hidden">
  <div class="mt-16 md:hidden flex items-center justify-center">
    <img class="" src="/hyper-box.svg" alt="hyper box" />
  </div>
  {#each ports as port, index}
    <button
      on:click={showPort(index)}
      class="w-full flex flex-col rounded-md px-6 py-3 border border-{active === index
        ? port.color
        : 'gray'} bg-{active === index ? port.color : 'white'} text-{active === index
        ? 'white'
        : 'black'}"
    >
      <div class={active !== index ? "text-" + port.color : ""}>{port.ordinate}</div>
      <div>{port.text}</div>
    </button>
    <div class="p-4 rounded-lg bg-whitesmoke {active === index ? '' : 'hidden'}">
      <h2 class="text-4xl">{port.text}</h2>
      <p class="mt-2 text-base">{port.description}</p>
      <a class="block mt-4 text-base text-{port.color}" href={port.target}>MORE INFO ></a>
      <Code styles="w-[800px]" code={port.example} />
    </div>
  {/each}
</section>

<!-- Desktop -->
<section class="hidden md:flex z-0 space-x-8 w-full {styles}">
  <nav class="flex flex-col space-y-8 m-auto w-1/4">
    <img class="hidden w-1/2 m-auto md:block" src="/hyper-box.svg" alt="hyper box" />
    {#each ports as port, index}
      <button
        on:click={showPort(index)}
        class="flex flex-col rounded-md px-6 py-3 border border-{active === index
          ? port.color
          : 'gray'} bg-{active === index ? port.color : 'white'} text-{active === index
          ? 'white'
          : 'black'}"
      >
        <div>{port.ordinate}</div>
        <div>{port.text}</div>
      </button>
    {/each}
  </nav>
  <div class="w-3/4">
    {#each ports as port, index}
      <article
        class="rounded-xl border-white p-12 bg-whitesmoke {active === index ? '' : 'hidden'}"
      >
        <header>
          <h2 class="font-space">{port.text}</h2>
        </header>
        <div class="content">
          <p>{port.description}</p>
        </div>
        <div class="w-full">
          <a class="text-{port.color}" href={port.target}>MORE INFO ></a>
        </div>
        <div class="flex my-4 items-center">
          <div class="w-1/4 hidden 2xl:block">
            <img src={port.image} alt={port.text} />
          </div>
          <Code styles="h-[700px] w-[800px]" code={port.example} />
        </div>
      </article>
    {/each}
  </div>
</section>
