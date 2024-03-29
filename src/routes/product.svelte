<script context="module">
  export async function load({ fetch }) {
    async function readExample(name) {
      return fetch(`/examples/${name}`).then((res) => res.text());
    }

    const examples = await Promise.all([
      readExample("connect.js"),
      readExample("data.js"),
      readExample("cache.js"),
      readExample("storage.js"),
      readExample("search.js"),
      readExample("queue.js"),
    ]).then(([connect, data, cache, storage, search, queue]) => ({
      connect,
      data,
      cache,
      storage,
      search,
      queue,
    }));

    return {
      props: {
        examples,
      },
    };
  }
</script>

<script>
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import Section from "$lib/section.svelte";
  import Code from "$lib/code.svelte";
  import Bolt from "$lib/svgs/bolt.svelte";

  import { HelpURLs } from "$lib/constants.js";
  import Share from "$lib/svgs/share.svelte";

  export let examples = {};
</script>

<svelte:head>
  <title>hyper services</title>
</svelte:head>
<Header />

<main class="md:ml-24 md:mr-44 md:mb-40">
  <div>
    <section id="summary" class="md:flex md:relative">
      <div class="w-full md:w-1/2">
        <h1 class="text-3xl pl-4 mt-8 mb-4 md:pl-0 md:mt-24 md:text-6xl ">
          hyper <br /><b>services</b>
        </h1>
        <p class="text-base mx-4 text-darkgray md:mx-0 mb-4">
          Build any application by taking advantage of hyper's single API entry point and composable
          application services.
        </p>
        <div class="mx-2">
          <Code styles="h-[150px]" code={examples.connect} />
        </div>
        <div class="mt-4 w-full flex flex-col items-center gap-6 md:items-start">
          <a class="btn btn-primary gap-2" href={HelpURLs.GETTING_STARTED}>
            Get Started
            <Bolt />
          </a>
          <a class="btn btn-secondary gap-2" href={HelpURLs.REQUEST_A_CONSULTATION}>
            Consult an Architect
            <Bolt />
          </a>
          <a class="btn btn-accent gap-2" href={HelpURLs.REQUEST_A_DEMO}>
            Request A Demo
            <Bolt />
          </a>
        </div>
      </div>
      <img
        class="w-full md:w-2/3 "
        style="z-index: -100;right: 0; top: -200px;"
        src="/services.svg"
        alt="hyper services"
      />
    </section>
  </div>
</main>

<!-- Data -->
<Section id="data" image="right">
  <div class="max-w-full" slot="text">
    <div class="flex flex-col items-center">
      <div class="md:hidden m-auto text-center">
        <h2 class="text-2xl md:text-5xl text-green">Data Service</h2>
        <p class="text-base text-darkgray">API powered data access</p>
      </div>
      <div class="w-full mt-2 px-2">
        <Code code={examples.data} />
      </div>
    </div>
  </div>
  <div slot="image">
    <div class="relative flex justify-center items-center">
      <div class="z-10 md:ml-8">
        <h2 class="text-2xl mx-8 md:text-5xl">Data Service</h2>
        <p class="text-base mx-8 mt-4 text-green">API powered data access:</p>
        <p class="text-base mx-8 mt-4">
          A hyper data service is a document data store for storing JSON documents.
        </p>
        <p class="text-base mt-4 mx-8">
          Query, add, update, and delete these documents using the hyper REST API. You can also
          create indexes to improve query performance.
        </p>
        <div class="mt-4 mx-8">
          <a class="btn btn-primary gap-2" href={HelpURLs.DATA_API}>
            Data Api
            <Share />
          </a>
        </div>
      </div>
      <img src="data-lg.svg" alt="data" class="z-0 w-full" />
    </div>
  </div>
</Section>

<!-- Cache -->
<Section id="cache" image="left">
  <div slot="text">
    <div class="flex flex-col items-center">
      <div class="md:hidden m-auto text-center">
        <h2 class="text-2xl md:text-5xl text-purple">Cache Service</h2>
        <p class="text-base text-darkgray">API powered cache</p>
      </div>
      <div class="w-full mt-2 px-2">
        <Code code={examples.data} />
      </div>
    </div>
  </div>
  <div slot="image">
    <div class="relative flex justify-center items-center">
      <img src="cache-lg.svg" alt="cache" class="z-0 w-full" />
      <div class="z-10">
        <h2 class="text-2xl px-4 md:text-5xl">Cache Service</h2>
        <p class="text-base mx-4 mt-4 text-purple">API powered cache:</p>
        <p class="text-base mx-4 mt-4">
          A hyper cache service is a powerful, in-memory key-value store.
        </p>
        <p class="text-base mx-4 mt-4">
          Add values to the cache. Then retrieve by key, or query values across keys
        </p>
        <div class="mt-4 mx-4">
          <a class="btn btn-primary gap-2" href={HelpURLs.CACHE_API}>
            Cache Api
            <Share />
          </a>
        </div>
      </div>
    </div>
  </div>
</Section>

<!-- Storage -->
<Section id="storage" image="right">
  <div slot="text">
    <div class="flex flex-col items-center">
      <div class="md:hidden m-auto text-center">
        <h2 class="text-2xl md:text-5xl text-blue">Storage Service</h2>
        <p class="text-base text-darkgray">API powered buckets</p>
      </div>
      <div class="w-full mt-2 px-2">
        <Code code={examples.storage} />
      </div>
    </div>
  </div>
  <div slot="image">
    <div class="relative flex justify-center items-center">
      <div class="z-10 mx-4">
        <h2 class="text-2xl md:text-5xl">Storage Service</h2>
        <p class="text-base mt-4 text-blue">API powered buckets:</p>
        <p class="text-base mt-4">A hyper storage service is an object storage bucket.</p>
        <p class="text-base mt-4">Upload, download and remove files.</p>
        <div class="mt-2">
          <a class="btn btn-primary gap-2" href={HelpURLs.STORAGE_API}>
            Storage Api
            <Share />
          </a>
        </div>
      </div>
      <img src="storage-lg.svg" alt="storage" class="z-0 w-full" />
    </div>
  </div>
</Section>

<!-- Search -->
<Section id="search" image="left">
  <div slot="image">
    <div class="relative flex justify-center items-center mr-4">
      <img src="search-lg.svg" alt="search" class="z-0 w-full" />
      <div class="z-10">
        <h2 class="text-2xl md:text-5xl">Search Service</h2>
        <p class="text-base mt-4 text-orange">API powered search:</p>
        <p class="text-base mt-4">A hyper search service is a powerful search index.</p>
        <p class="text-base mt-4">
          Index JSON documents by adding them to your search service. Then query to perform a full
          text search.
        </p>
        <div class="mt-4">
          <a class="btn btn-primary gap-2" href={HelpURLs.SEARCH_API}>
            Search Api
            <Share />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div slot="text">
    <div class="flex flex-col items-center">
      <div class="md:hidden m-auto text-center">
        <h2 class="text-2xl md:text-5xl text-orange">Search Service</h2>
        <p class="text-base text-darkgray">API powered search indexes</p>
      </div>
      <div class="w-full mt-2 px-2">
        <Code code={examples.search} />
      </div>
    </div>
  </div>
</Section>

<!-- Queue -->
<Section id="queue" image="right">
  <div slot="text">
    <div class="flex flex-col items-center">
      <div class="md:hidden m-auto text-center">
        <h2 class="text-2xl md:text-5xl text-red">Queue Service</h2>
        <p class="text-base text-darkgray">API powered persistent queues</p>
      </div>
      <div class="w-full mt-2 px-2">
        <Code code={examples.queue} />
      </div>
    </div>
  </div>
  <div slot="image">
    <div class="relative flex justify-center items-center">
      <div class="z-10 mx-4">
        <h2 class="text-2xl md:text-5xl">Queue Service</h2>
        <p class="text-base mt-4 text-red">API powered persistent queues:</p>
        <p class="text-base mt-4">
          A hyper queue service is a powerful persistent queue, great for event driven, serverless,
          or asynchronous workloads
        </p>
        <p class="text-base mt-4">
          Create a queue and provide a worker url to send your jobs to, for processing, and then
          start enqueuing jobs. hyper queue then sends these jobs to your worker url
        </p>
        <div class="mt-4">
          <a class="btn btn-primary gap-2" href={HelpURLs.QUEUE_API}>
            Queue Api
            <Share />
          </a>
        </div>
      </div>
      <img src="queue-lg.svg" alt="queue" class="z-0 w-full" />
    </div>
  </div>
</Section>

<Footer />
