<script context="module">
//import { goto } from '$app/navigation'
  export async function load({ page, fetch, session, context }) {
		const url = `/admin/faqs.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
				  faqs: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}

</script>
<script>
  import Header from '$lib/admin/header.svelte'
  import ActiveToggle from '$lib/toggle.svelte'
  export let faqs

  let submitStatus = null 
  let error = false
  // destructuring event
  async function saveToggle({detail}) {
    // put /api/faqs/:id detail
    console.log(detail)
    const res = await fetch(`/api/faqs/${detail.id}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(detail)
    })
    if (res.ok) {
      const response = await res.json()

      submitStatus = 'Successfully saved FAQ'  
      //setTimeout(() => goto('/admin/cms/faqs'), 1000)

    } else {
      error = true
      submitStatus = 'Error occured saving FAQ'
    }
  }




</script>
<Header />
<main class="ml-24 mr-44">
  <a class="float-right button" href="/admin/cms/faqs/new">Create FAQ</a>
  <div class="flex flex-col space-y-8">
  <h1 class="mt-16">FAQs</h1>
  <div>
    <a href="/faq" class="text-yellow bg-black px-4 py-2">live faqs ⚡️</a>
  </div>
  </div>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="flex flex-col mt-8">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Question
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tags
              </th>
              <th scope="col" class="px-6 py-3 text-lect text-xs font-medium text-gray-500 uppercase tracking-wider">
                Updated
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Published
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {#each faqs as faq}
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {faq.question}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {faq.tags.join(', ')}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {faq.updated}
              </td>

             
             <td class="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex justify-center">
               <!-- {faq.active ? '⚡️' : ''} -->
               <ActiveToggle data={faq} on:toggleSave={saveToggle} toggleEnabled={faq.active} enabledColor={"yellow"} disabledColor={"lightgray"}/>
                
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="/admin/cms/faqs/{faq.id}/del" class="delete-button">Delete</a>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="/admin/cms/faqs/{faq.id}/edit" class="button background-color">Edit</a>
              </td>
            </tr>
          </tbody>
          {/each}
        </table>
      </div>
    </div>
  </div>
</div>
</main>
<style>
 .delete-button {
    @apply border-3 px-4 py-2 rounded-lg bg-red font-space text-white;
  }

  .button {
    @apply border-3 px-4 py-2 rounded-lg bg-yellow font-space text-white;
  }
</style>
