<script>
  export let styles = "";
  let active = 0;
  const ports = [
    {
      index: 0,
      text: "Data Service",
      id: "01",
      description: "Store, Retrieve and index structured data",
      image: "/data-port.svg",
      target: "/product#data",
      color: "green",
    },
    {
      index: 1,
      text: "Search Service",
      id: "02",
      description: "Free-text search service",
      image: "/search-port.svg",
      target: "/product#search",
      color: "orange",
    },
    {
      index: 2,
      text: "Cache Service",
      id: "03",
      description: "Key-value data store with time to live capability",
      image: "/cache-port.svg",
      target: "/product#cache",
      color: "purple",
    },
    {
      index: 3,
      text: "Storage Service",
      id: "04",
      description: "File storage using a directory tree",
      image: "/storage-port.svg",
      target: "/product#storage",
      color: "blue",
    },
    {
      index: 4,
      text: "Queue Service",
      id: "05",
      description: "Add task to queue for distributing jobs",
      image: "/queue-port.svg",
      target: "/product#queue",
      color: "red",
    },
  ];

  function showPort(n) {
    return function () {
      active = n;
    };
  }
</script>

<section class="w-full px-4 space-y-4 mt-8 md:hidden">
  {#each ports as port}
    <button
      on:click={showPort(port.index)}
      class="w-full flex flex-col border border-{active === port.index
        ? port.color
        : 'gray'} bg-{active === port.index ? port.color : 'white'} text-{active === port.index
        ? 'white'
        : 'black'}"
    >
      <div class={active !== port.index ? "text-" + port.color : ""}>{port.id}</div>
      <div>{port.text}</div>
    </button>
    {#if active === port.index}
      <div
        class="border-0 border-{port.color} p-4 rounded-lg bg-gradient-to-br from-whitesmoke to-light{port.color}"
      >
        <h2 class="text-4xl">{port.text}</h2>
        <p class="mt-2 text-base">{port.description}</p>
        <a class="block mt-4 text-base text-{port.color}" href={port.target}>MORE INFO ></a>
      </div>
    {/if}
  {/each}
</section>
<section class="hidden md:flex z-0 space-x-16 mt-48 {styles}">
  <nav class="flex flex-col space-y-16 ml-16 w-1/4">
    <button
      on:click={showPort(0)}
      class="flex flex-col border border-{active === 0 ? 'green' : 'gray'} bg-{active === 0
        ? 'green'
        : 'white'} text-{active === 0 ? 'white' : 'black'}"
    >
      <div>01</div>
      <div>Data Service</div>
    </button>
    <button
      on:click={showPort(1)}
      class="flex flex-col border border-{active === 1 ? 'orange' : 'gray'} bg-{active === 1
        ? 'orange'
        : 'white'} text-{active === 1 ? 'white' : 'black'}"
    >
      <div>02</div>
      <div>Search Service</div>
    </button>
    <button
      on:click={showPort(2)}
      class="flex flex-col border border-{active === 2 ? 'purple' : 'gray'} bg-{active === 2
        ? 'purple'
        : 'white'} text-{active === 2 ? 'white' : 'black'}"
    >
      <div>03</div>
      <div>Cache Service</div>
    </button>
    <button
      on:click={showPort(3)}
      class="flex flex-col border border-{active === 3 ? 'blue' : 'gray'} bg-{active === 3
        ? 'blue'
        : 'white'} text-{active === 3 ? 'white' : 'black'}"
    >
      <div>04</div>
      <div>Storage Service</div>
    </button>
    <button
      on:click={showPort(4)}
      class="flex flex-col border border-{active === 4 ? 'red' : 'gray'} bg-{active === 4
        ? 'red'
        : 'white'} text-{active === 4 ? 'white' : 'black'}"
    >
      <div>05</div>
      <div>Queue Service</div>
    </button>
  </nav>
  <article
    class="border rounded-xl border-white w-3/4 p-16 bg-gradient-to-br from-whitesmoke to-blue-100"
  >
    <header>
      <h2 class="font-space">{ports[active].text}</h2>
    </header>
    <div class="content w-1/2 mt-16 mb-16">
      <p>{ports[active].description}</p>
    </div>
    <div class="flex">
      <div class="w-1/3">
        <a class="text-{ports[active].color}" href={ports[active].target}>MORE INFO ></a>
      </div>
      <div class="w-2/3 pl-16">
        <img src={ports[active].image} alt={ports[active].text} />
      </div>
    </div>
  </article>
</section>

<style lang="postcss">
</style>
