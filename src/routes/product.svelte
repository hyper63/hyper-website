<script>
  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import Button from "$lib/button.svelte";
  import Section from "$lib/section.svelte";
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
      <p class="text-base mx-4 text-darkgray md:mx-0">
        Build any application by taking advantage of hyper's single API entry
        point and composable application services.
      </p>
      <ul
        class="font-mono md:mt-8 bg-black text-white text-mono rounded-lg p-8"
        role="list"
      >
        <li role="listitem" class="mt-2 md:mt-0">
          <span class="text-green"
            >// connect to Hyper using Hyper-Connect
          </span>
          <br />
          <span>{"import {connect} from 'hyper-connect'"}</span>
          <br />
          <span>{"const hyper = connect(process.env.HYPER)"}</span>
        </li>
      </ul>

      <!-- <ul class="ml-4 md:ml-8 md:mt-8" role="list">
          <li role="listitem"><a class="text-blue" href="#data">Data</a></li>
          <li role="listitem"><a class="text-blue" href="#search">Search</a></li>
          <li role="listitem"><a class="text-blue" href="#storage">Storage</a></li>
          <li role="listitem"><a class="text-blue" href="#cache">Cache</a></li>
          <li role="listitem"><a class="text-blue" href="#queue">Queue</a></li>
        </ul>
        <Button styles="mx-4 mt-8 md:hidden">Get Started</Button> -->
    </div>
    <img
      class="w-full md:w-2/3 md:absolute"
      style="z-index: -100;right: 0; top: -200px;"
      src="/services.svg"
      alt="hyper services"
      role="img"
    />
  </section>
</main>
<Section id="data" styles="md:mt-96" image="right">
  <span slot="text">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl md:text-5xl md:hidden">Data Service</h2>
      <ul
        class="font-mono md:mt-8 md:ml-24 bg-black text-white rounded-lg p-8"
        role="list"
      >
        <li role="listitem">
          <span class="text-green">// Add Document</span><br
          />{"await hyper.data.add({ _id: 'game-1', type: 'game', name: 'Super Mario Bros 3', rating: 5})"}
        </li>
        <li role="listitem">
          <span class="text-green">// Read Document</span><br />
          {"await hyper.data.get('game-1')"}
        </li>
        <li role="listitem">
          <span class="text-green">// Query</span><br
          />{"await hyper.data.query({type: 'game'})"}
        </li>
        <li role="listitem">
          <span class="text-green">// Update</span><br
          />{"await hyper.data.update('game-1', { _id: 'game-1', type: 'game', name: 'Super Mario Bros 3', rating: 4})"}
        </li>
        <li role="listitem">
          <span class="text-green">// Remove</span><br
          />{"await hyper.data.remove('game-1')"}
        </li>
      </ul>
    </div>
  </span>
  <span slot="image">
    <div class="relative h-screen flex justify-center items-center">
      <div class="z-10 md:ml-8">
        <h2 class="text-2xl mx-8 md:text-5xl">Data Service</h2>
        <p class="text-base mx-8 mt-8 text-darkgray">
          API powered data access:
        </p>
        <p class="text-base mx-8 mt-8">
          The hyper data service is a document data store model that encourages
          the single table design pattern.
        </p>
        <p class="text-base mx-8">
          Leveraging attributes like `type` or `doc_type` to differentiate
          document schemas you can store multiple documents of different `types`
          or `tables` in a single data store. This pattern provides efficient
          horizontal scalability.
        </p>
      </div>
      <img src="data-lg.svg" alt="data" role="img" class="z-0 w-full" />
    </div>
  </span>
</Section>
<Section id="search" image="left">
  <span slot="image">
    <div class="relative h-screen flex justify-center items-center">
      <img src="search-lg.svg" alt="search" role="img" class="z-0 w-full" />
      <div class="z-10">
        <h2 class="text-2xl md:text-5xl">Search Service</h2>
        <p class="text-base mt-4 text-darkgray">API powered search:</p>
        <p class="text-sm mt-8">
          high powered search API that is easy to use, with a single API call,
          your app can load multiple documents.
        </p>
        <p class="text-sm mt-8">
          To query, simply provide a text string and any match will be returned
          in milliseconds.
        </p>
      </div>
    </div>
  </span>
  <span slot="text">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl md:text-5xl md:hidden">Search Service</h2>
      <ul
        class="md:mt-8 bg-black text-white text-mono rounded-lg p-8"
        role="list"
      >
        <li role="listitem">
          <span class="text-orange">// add document to search index</span><br
          />{"await hyper.search.add({ id: 'game-1', type: 'game', name: 'Super Mario Bros 3' })"}
        </li>
        <li role="listitem">
          <span class="text-orange"
            >// search for games that contain 'Super'</span
          ><br />{"await hyper.search.query('Super')"}
        </li>
        <li role="listitem">
          <span class="text-orange">// load multiple search documents</span><br
          />
          {"await hyper.search.load(games)"}
        </li>
        <li role="listitem">
          <span class="text-orange">// remove search document</span><br
          />{"await hyper.search.remove('game-1')"}
        </li>
        <!--
        <li role="listitem">
          <span class="text-orange"># Delete</span><br
          />{"DELETE /search/{app}/:id"}
        </li>
      -->
      </ul>
    </div>
  </span>
</Section>
<Section id="storage" image="right">
  <span slot="text">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl px-4 md:text-5xl">Storage Service</h2>
      <p class="text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">
        Store files using a REST API
      </p>
      <ul
        class="md:mt-8 bg-black text-white text-mono rounded-lg p-8"
        role="list"
      >
        <li role="listitem">
          <span class="text-blue"># Store</span><br
          />{"POST /storage/{app} -d {...}"}
        </li>
        <li role="listitem">
          <span class="text-blue"># Retrieve</span><br
          />{"GET /storage/{app}/:id"}
        </li>
        <li role="listitem">
          <span class="text-blue"># Update</span><br
          />{"PUT /storage/{app}/:id -d {...}"}
        </li>
        <li role="listitem">
          <span class="text-blue"># Delete</span><br
          />{"DELETE /storage/{app}/:id"}
        </li>
      </ul>
    </div>
  </span>
  <span slot="image">
    <img src="storage-lg.svg" alt="storage" role="img" />
  </span>
</Section>
<Section id="cache" image="left">
  <span slot="image">
    <img src="cache-lg.svg" alt="cache" role="img" />
  </span>
  <span slot="text">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl px-4 md:text-5xl md:text-center">Cache Service</h2>
      <p class="z-10 text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">
        JSON Key Value Store:
      </p>
      <ul
        class="md:mt-8 bg-black text-white text-mono rounded-lg p-8"
        role="list"
      >
        <li role="listitem">
          <span class="text-purple"># Store</span><br
          />{"POST /cache/{app} -d {key, value, ttl}"}
        </li>
        <li role="listitem">
          <span class="text-purple"># Retrieve</span><br
          />{"GET /cache/{app}/:key"}
        </li>
        <li role="listitem">
          <span class="text-purple"># Update</span><br
          />{"PUT /cache/{app}/:key -d {...}"}
        </li>
        <li role="listitem">
          <span class="text-purple"># Delete</span><br
          />{"DELETE /cache/{app}/:key"}
        </li>
        <li role="listitem">
          <span class="text-purple"># Query</span><br
          />{'POST /cache/{app}/_query?pattern="ABC*"'}
        </li>
      </ul>
    </div>
  </span>
</Section>
<Section id="queue" image="right">
  <span slot="text">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl px-4 md:text-5xl md:text-center">Queue Service</h2>
      <p class="z-10 text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">
        A RESTful web hook queue service:
      </p>
      <ul
        class="md:mt-8 bg-black text-white text-mono rounded-lg p-8"
        role="listitem"
      >
        <li role="listitem">
          <span class="text-red"># Create Queue</span><br
          />{"PUT /queue/{app}/:name -d {target}"}
        </li>
        <li role="listitem">
          <span class="text-red"># Post Task</span><br
          />{"POST /queue/{app}/:name -d {job}"}
        </li>
        <li role="listitem">
          <span class="text-red"># Get Tasks</span><br
          />{"GET /queue/{app}/:name?status=READY"}
        </li>
        <li role="listitem">
          <span class="text-red"># Delete Queue</span><br
          />{"DELETE /queue/{app}/:name"}
        </li>
      </ul>
    </div>
  </span>
  <span slot="image">
    <img src="queue-lg.svg" alt="queue" role="img" />
  </span>
</Section>
<Footer />
