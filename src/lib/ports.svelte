<script>
  export let styles = ''
  let active = 0 
  const ports = [
    { 
        text: 'Data Port', 
        id: '01', 
        description: 'The data port provides common operations that any application will need to save structured data. The interface is document based and can manage complex structures of data without having to specify the data schema to the data persistence store.',
        image: '/data-port.svg',
        target: '/product?port=data',
        color: 'blue'
    },
    { 
        text: 'Search Port', 
        id: '02', 
        description: 'A common service that all applications need to provide is the ability to search for data. While leveraging indexes for structured data can serve some search capabilities, the implementation of a full text search feature can make it easier for users to use the product. Therefore having a search port for a service framework is necessary',
        image: '/search-port.svg',
        target: '/product?port=search',
        color: 'orange'
    },
    {
        text: 'Cache Port',
        id: '03',
        description: 'A common service that all applications need to provide is the ability to search for data. While leveraging indexes for structured data can serve some search capabilities, the implementation of a full text search feature can make it easier for users to use the product. Therefore having a search port for a service framework is necessary',
        image: '/cache-port.svg',
        target: '/product?port=cache',
        color: 'purple'
    },
    {
        text: 'Storage Port',
        id: '04',
        description: 'A common service that all applications need to provide is the ability to search for data. While leveraging indexes for structured data can serve some search capabilities, the implementation of a full text search feature can make it easier for users to use the product. Therefore having a search port for a service framework is necessary',
        image: '/storage-port.svg',
        target: '/product?port=storage',
        color: 'blue'
      },
    {
        text: 'Queue Port',
        id: '04',
        description: 'A common service that all applications need to provide is the ability to search for data. While leveraging indexes for structured data can serve some search capabilities, the implementation of a full text search feature can make it easier for users to use the product. Therefore having a search port for a service framework is necessary',
        image: '/queue-port.svg',
        target: '/product?port=queue',
        color: 'red'
      }
    ]

  function showPort(n) {
    return function () {
      active = n
    }
  }


</script>
<section class="z-0 flex space-x-16 mt-48 {styles}">
  <nav class="flex flex-col space-y-16 ml-16 w-1/4">
    <button on:click={showPort(0)} class="flex flex-col border border-{active === 0 ? 'green' : 'gray'} bg-{active === 0 ? 'green' : 'white'} text-{active === 0 ? 'white' : 'black'}">
      <div>01</div>
      <div>Data Port</div>
    </button>
    <button on:click={showPort(1)} class="flex flex-col border border-{active === 1 ? 'orange' : 'gray'} bg-{active === 1 ? 'orange' : 'white'} text-{active === 1 ? 'white' : 'black'}">
      <div>02</div>
      <div>Search Port</div>
    </button>
    <button on:click={showPort(2)} class="flex flex-col border border-{active === 2 ? 'purple' : 'gray'} bg-{active === 2 ? 'purple' : 'white'} text-{active === 2 ? 'white' : 'black'}">
      <div>03</div>
      <div>Cache Port</div>
    </button>
    <button on:click={showPort(3)} class="flex flex-col border border-{active === 3 ? 'blue' : 'gray'} bg-{active === 3 ? 'blue' : 'white'} text-{active === 3 ? 'white' : 'black'}">
      <div>04</div>
      <div>Storage Port</div>
    </button>
    <button on:click={showPort(4)} class="flex flex-col border border-{active === 4 ? 'red' : 'gray'} bg-{active === 4 ? 'red' : 'white'} text-{active === 4 ? 'white' : 'black'}">
      <div>05</div>
      <div>Queue Port</div>
    </button>
  </nav>
  <article class="border rounded-xl border-white w-3/4 p-16 bg-gradient-to-br from-whitesmoke to-blue-100">
    <header>
      <h2 class="font-space">{ports[active].text}</h2>
    </header>
    <div class="content w-1/2 mt-16 mb-16">
      <p>{ports[active].description}</p>
    </div>
    <div class="flex">
      <div class="w-1/3">
        <a class="text-{ports[active].color}" href="{ports[active].target}">MORE INFO ></a>
      </div>
      <div class="w-2/3 pl-16">
        <img src="{ports[active].image}" alt="{ports[active].text}" />
      </div>
    </div>

  </article>

</section>
<style lang="postcss">

</style>
