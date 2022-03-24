<script>
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import Section from "$lib/section.svelte";
  import Button from "$lib/button.svelte";
  import { HelpURLs } from "$lib/constants.js";
</script>

<svelte:head>
  <title>hyper services</title>
</svelte:head>
<Header />

<main class="md:ml-24 md:mr-44">
  <section id="summary" class="md:flex md:relative">
    <div class="md:w-1/2 md:h-96">
      <h1 class="text-3xl pl-4 mt-8 mb-4 md:pl-0 md:mt-24 md:text-6xl ">
        hyper <br /><b>services</b>
      </h1>
      <p class="text-base mx-4 text-darkgray md:mx-0 ">
        Build any application by taking advantage of hyper's single API entry point and composable
        application services.
      </p>
      <ul class="font-mono md:mt-8 bg-black text-white text-mono rounded-lg p-8">
        <li class="mt-2 md:mt-0">
          <span class="text-green">// connect to Hyper using Hyper-Connect </span>
          <br />
          <span>{"import {connect} from 'hyper-connect'"}</span>
          <br />
          <span>{"const hyper = connect(process.env.HYPER)"}</span>
        </li>
      </ul>
      <div class="mt-4">
        <a href={HelpURLs.HYPER_CONNECT}
          ><Button hyperBolt={true} styles="mt-4">LEARN MORE</Button></a
        >
      </div>

      <!-- <ul class="ml-4 md:ml-8 md:mt-8">
          <li><a class="text-blue" href="#data">Data</a></li>
          <li><a class="text-blue" href="#search">Search</a></li>
          <li><a class="text-blue" href="#storage">Storage</a></li>
          <li><a class="text-blue" href="#cache">Cache</a></li>
          <li><a class="text-blue" href="#queue">Queue</a></li>
        </ul>
        <Button styles="mx-4 mt-8 md:hidden">Get Started</Button> -->
    </div>
    <img
      class="w-full md:w-2/3 "
      style="z-index: -100;right: 0; top: -200px;"
      src="/services.svg"
      alt="hyper services"
    />
  </section>
</main>

<!-- Data -->
<Section id="data" styles="md:mt-80" image="right">
  <span slot="text">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl md:text-5xl md:hidden">Data Service</h2>
      <ul class="font-mono md:mt-8 md:ml-24 mx-4 bg-black text-white rounded-lg p-8">
        <li>
          <span class="text-green">// Add a Document</span><br
          />{"await hyper.data.add({ _id: 'game-1', type: 'game', name: 'Super Mario Bros 3', rating: 5})"}
        </li>
        <li>
          <span class="text-green">// Read a Document</span><br />
          {"await hyper.data.get('game-1')"}
        </li>
        <li>
          <span class="text-green">// Query</span><br />{"await hyper.data.query({type: 'game'})"}
        </li>
        <li>
          <span class="text-green">// Update</span><br
          />{"await hyper.data.update('game-1', { _id: 'game-1', type: 'game', name: 'Super Mario Bros 3', rating: 4})"}
        </li>
        <li>
          <span class="text-green">// Remove</span><br />{"await hyper.data.remove('game-1')"}
        </li>
      </ul>
    </div>
  </span>
  <span slot="image">
    <div class="relative flex justify-center items-center">
      <div class="z-10 md:ml-8">
        <h2 class="text-2xl mx-8 md:text-5xl">Data Service</h2>
        <p class="text-base mx-8 mt-4 text-darkgray">API powered data access:</p>
        <p class="text-base mx-8 mt-4">
          A hyper data service is a document data store for storing JSON documents.
        </p>
        <p class="text-base mt-4 mx-8">
          Query, add, update, and delete these documents using the hyper REST API. You can also
          create indexes to improve query performance.
        </p>
        <div class="mt-4 mx-8">
          <a href={HelpURLs.DATA_API}
            ><Button hyperBolt={false} styles="mt-4">
              <div class="flex flex-row items-center">
                DATA API
                <div class="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="currentColor"
                  >
                    <path
                      d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                    />
                  </svg>
                </div>
              </div>
            </Button></a
          >
        </div>
      </div>
      <img src="data-lg.svg" alt="data" class="z-0 w-full" />
    </div>
  </span>
</Section>

<!-- Cache -->
<Section id="cache" image="left">
  <span slot="text">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl md:text-5xl md:hidden">Cache Service</h2>
      <ul class="font-mono md:mt-8 md:mr-4 bg-black text-white text-mono rounded-lg p-8">
        <li>
          <span class="text-purple">// Add a value</span><br
          />{"await hyper.cache.add('game-1', { _id: 'game-1', type: 'game', name: 'Super Mario Bros 3' })"}
        </li>
        <li>
          <span class="text-purple">// Read a value</span><br />
          {"await hyper.cache.get('game-1')"}
        </li>
        <li>
          <span class="text-purple">// Query the cache</span><br
          />{"await hyper.cache.query('game-*')"}
        </li>
        <li>
          <span class="text-purple">// Update a value</span><br
          />{"await hyper.cache.set('game-1', { _id: 'game-1', type: 'game', name: 'Super Mario Bros 3' })"}
        </li>
        <li>
          <span class="text-purple">// Remove a value</span><br
          />{"await hyper.cache.remove('game-1')"}
        </li>
      </ul>
    </div>
  </span>
  <span slot="image">
    <div class="relative flex justify-center items-center">
      <img src="cache-lg.svg" alt="cache" class="z-0 w-full" />
      <div class="z-10">
        <h2 class="text-2xl px-4 md:text-5xl">Cache Service</h2>
        <p class="text-base mx-4 mt-4 text-darkgray">API powered cache:</p>
        <p class="text-sm mx-4 mt-4">
          A hyper cache service is a powerful, in-memory key-value store.
        </p>
        <p class="text-sm mx-4 mt-4">
          Add values to the cache. Then retrieve by key, or query values across keys
        </p>
        <div class="mt-4 mx-4">
          <a href={HelpURLs.CACHE_API}
            ><Button hyperBolt={false} styles="mt-4">
              <div class="flex flex-row items-center">
                CACHE API
                <div class="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="currentColor"
                  >
                    <path
                      d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                    />
                  </svg>
                </div>
              </div>
            </Button></a
          >
        </div>
      </div>
    </div>
  </span>
</Section>

<!-- Storage -->
<Section id="storage" image="right">
  <span slot="text">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl md:text-5xl md:hidden">Storage Service</h2>
      <ul class="font-mono md:mt-4 bg-black text-white text-mono rounded-lg p-8">
        <li>
          <span class="text-blue">// Upload a file</span>
          <br />
          {"await hyper.storage.upload('foo.jpg', Buffer.from(...))"}
        </li>
        <li>
          <span class="text-blue">// Retrieve a file</span>
          <br />
          {"await hyper.storage.download('foo.jpg')"}
        </li>
        <li>
          <span class="text-blue">// Or via url</span>
          <br />
          {"GET /storage/mybucket/foo.jpg"}
        </li>
        <li>
          <span class="text-blue">// Delete a file</span>
          <br />
          {"await hyper.storage.remove('foo.jpg')"}
        </li>
      </ul>
    </div>
  </span>
  <span slot="image">
    <div class="relative flex justify-center items-center">
      <div class="z-10 mr-4">
        <h2 class="text-2xl px-4 md:text-5xl">Storage Service</h2>
        <p class="text-base mx-4 mt-4 text-darkgray">API powered buckets:</p>
        <p class="text-sm mx-4 mt-4">A hyper storage service is an object storage bucket.</p>
        <p class="text-sm mx-4 mt-4">Upload, download and remove files.</p>
        <div class="mt-2 mx-4">
          <a href={HelpURLs.STORAGE_API}
            ><Button hyperBolt={false} styles="mt-4">
              <div class="flex flex-row items-center ">
                STORAGE API

                <div class="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="currentColor"
                  >
                    <path
                      d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                    />
                  </svg>
                </div>
              </div>
            </Button></a
          >
        </div>
      </div>
      <img src="storage-lg.svg" alt="storage" class="z-0 w-full" />
    </div>
  </span>
</Section>

<!-- Search -->
<Section id="search" image="left">
  <span slot="image">
    <div class="relative flex justify-center items-center mr-4">
      <img src="search-lg.svg" alt="search" class="z-0 w-full" />
      <div class="z-10">
        <h2 class="text-2xl md:text-5xl">Search Service</h2>
        <p class="text-base mt-4 text-darkgray">API powered search:</p>
        <p class="text-sm mt-4">A hyper search service is a powerful search index.</p>
        <p class="text-sm mt-4">
          Index JSON documents by adding them to your search service. Then query to perform a full
          text search.
        </p>
        <div class="mt-4">
          <a href={HelpURLs.SEARCH_API}
            ><Button hyperBolt={false} styles="mt-4">
              <div class="flex flex-row items-center">
                SEARCH API
                <div class="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="currentColor"
                  >
                    <path
                      d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                    />
                  </svg>
                </div>
              </div>
            </Button></a
          >
        </div>
      </div>
    </div>
  </span>
  <span slot="text">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl md:text-5xl md:hidden">Search Service</h2>
      <ul class="font-mono md:mt-8 md:mr-24 bg-black text-white text-mono rounded-lg p-8">
        <li>
          <span class="text-orange">// Index a document</span><br
          />{"await hyper.search.add({ id: 'game-1', type: 'game', name: 'Super Mario Bros 3' })"}
        </li>
        <li>
          <span class="text-orange">// search for games that contain 'Super'</span><br
          />{"await hyper.search.query('Super')"}
        </li>
        <li>
          <span class="text-orange">// or index multiple documents</span><br />
          {"await hyper.search.load(games)"}
        </li>
        <li>
          <span class="text-orange">// remove a search document</span><br
          />{"await hyper.search.remove('game-1')"}
        </li>
        <!--
        <li>
          <span class="text-orange"># Delete</span><br
          />{"DELETE /search/{app}/:id"}
        </li>
      -->
      </ul>
    </div>
  </span>
</Section>

<!-- Queue -->
<Section id="queue" image="right">
  <span slot="text">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl md:text-5xl md:hidden">Queue Service</h2>
      <ul class="font-mono md:mt-4 bg-black text-white text-mono rounded-lg p-8">
        <li>
          <span class="text-red">// Enqueue a job</span>
          <br />
          {"await hyper.queue.enqueue({ type: 'SEND_EMAIL', id: '123' })"}
        </li>
        <li>
          <span class="text-red">// Retrieve queued jobs</span>
          <br />
          {"await hyper.queue.queued()"}
        </li>
        <li>
          <span class="text-red">// Retrieve failed jobs</span>
          <br />
          {"await hyper.queue.errors()"}
        </li>
      </ul>
    </div>
  </span>
  <span slot="image">
    <div class="relative flex justify-center items-center">
      <div class="z-10 mr-4">
        <h2 class="text-2xl px-4 md:text-5xl">Queue Service</h2>
        <p class="text-base mx-4 mt-4 text-darkgray">API powered persistent queues:</p>
        <p class="text-sm mx-4 mt-4">
          A hyper queue service is a powerful persistent queue, great for event driven, serverless,
          or asynchronous workloads
        </p>
        <p class="text-sm mx-4 mt-4">
          Create a queue and provide a worker url to send your jobs to, for processing, and then
          start enqueuing jobs. hyper queue then sends these jobs to your worker url
        </p>
        <div class="mt-2 mx-4">
          <a href={HelpURLs.QUEUE}
            ><Button hyperBolt={false} styles="mt-4">
              <div class="flex flex-row items-center ">
                QUEUE API

                <div class="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="currentColor"
                  >
                    <path
                      d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                    />
                  </svg>
                </div>
              </div>
            </Button></a
          >
        </div>
      </div>
      <img src="queue-lg.svg" alt="queue" class="z-0 w-full" />
    </div>
  </span>
</Section>

<Footer />
