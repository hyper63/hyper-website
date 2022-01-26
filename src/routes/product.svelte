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
        <li role="listitem">
          <span class="text-green"># Single API Entry Point </span><br
          />{"VERB /:service/:app/[:identifier | :action]"}
        </li>
      </ul>

      <!-- <ul class="ml-4 md:ml-8 md:mt-8">
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
      <h2 class="text-2xl px-4 md:text-center md:text-5xl">Data Service</h2>
      <p class="text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">
        API powered data access:
      </p>
      <ul class="font-mono md:mt-8 bg-black text-white rounded-lg p-8" role="list">
        <li role="listitem">
          <span class="text-green"># Create </span><br
          />{"POST /data/{app} -d {...}"}
        </li>
        <li role="listitem">
          <span class="text-green"># Read </span><br />{"GET /data/{app}/:id"}
        </li>
        <li role="listitem">
          <span class="text-green"># Update </span><br
          />{"PUT /data/{app}/:id -d {...}"}
        </li>
        <li role="listitem">
          <span class="text-green"># Delete </span><br
          />{"DELETE /data/{app}/:id"}
        </li>
        <li role="listitem">
          <span class="text-green"># Query </span><br
          />{"POST /data/{app}/_query -d { selector }"}
        </li>
      </ul>
    </div>
  </span>
  <span slot="image">
    <img src="data-lg.svg" alt="data" role="img" />
  </span>
</Section>
<Section id="search" image="left">
  <span slot="image">
    <img src="search-lg.svg" alt="search" role="img"/>
  </span>
  <span slot="text">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl px-4 md:text-5xl">Search Service</h2>
      <p class="text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">
        API powered search:
      </p>
      <ul class="md:mt-8 bg-black text-white text-mono rounded-lg p-8" role="list">
        <li role="listitem">
          <span class="text-orange"># Index</span><br
          />{"POST /search/{app} -d {...}"}
        </li>
        <li role="listitem">
          <span class="text-orange"># Find</span><br
          />{"POST /search/{app}/_query -d { query, filter }"}
        </li>
        <li role="listitem">
          <span class="text-orange"># Read</span><br />{"GET /search/{app}/:id"}
        </li>
        <li role="listitem">
          <span class="text-orange"># Update</span><br
          />{"PUT /search/{app}/:id -d {...}"}
        </li>
        <li role="listitem">
          <span class="text-orange"># Delete</span><br
          />{"DELETE /search/{app}/:id"}
        </li>
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
      <ul class="md:mt-8 bg-black text-white text-mono rounded-lg p-8" role="list">
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
    <img src="storage-lg.svg" alt="storage" role="img"/>
  </span>
</Section>
<Section id="cache" image="left">
  <span slot="image">
    <img src="cache-lg.svg" alt="cache" role="img"/>
  </span>
  <span slot="text">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl px-4 md:text-5xl md:text-center">Cache Service</h2>
      <p class="z-10 text-base mx-4 mt-4 text-darkgray md:w-1/2 md:text-center">
        JSON Key Value Store:
      </p>
      <ul class="md:mt-8 bg-black text-white text-mono rounded-lg p-8" role="list">
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
      <ul class="md:mt-8 bg-black text-white text-mono rounded-lg p-8" role="listitem">
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
    <img src="queue-lg.svg" alt="queue" role="img"/>
  </span>
</Section>
<Footer />
