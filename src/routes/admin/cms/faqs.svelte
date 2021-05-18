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
  import {reject} from 'ramda'
  import Header from '$lib/admin/header.svelte'
  import ActiveToggle from '$lib/toggle.svelte'
  import Button from '$lib/button.svelte'
  import Modal from '$lib/admin/modal.svelte'
  //import { goto } from '$app/navigation'
import { identical, identity } from 'ramda';
  let deleteModelOpen = false
  let deleteFaq = {}
  export let faqs

  let submitStatus = null 
  let error = false
  // destructuring event
  async function handleSaveToggle({detail}) {
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

  
    


  const handleDeleteModalOpenClick = (faq) => _ => {
    
    console.log('handleDeleteModalOpenClick', {faq})
    deleteModelOpen = true
    deleteFaq = faq
  }


  // destructuring event
  async function handleDelete() {
      
      // put /api/faqs/:id detail
      console.log('handleDelete', {deleteFaq})
      const res = await fetch(`/api/faqs/${deleteFaq.id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        const response = await res.json()
  
        submitStatus = 'Successfully deleted FAQ.'  

        faqs = reject(faq => faq.id === deleteFaq.id, faqs)
        //setTimeout(() => goto('/admin/cms/faqs'), 1000)
  
      } else {
        error = true
        deleteStatus = 'Error occured deleting FAQ.'
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
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Updated
              </th>
              <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
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

             
             <td class="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900 flex justify-center">
               <!-- {faq.active ? '⚡️' : ''} -->
               <ActiveToggle data={faq} on:toggleSave={handleSaveToggle} toggleEnabled={faq.active} enabledColor={"blue"} disabledColor={"whitesmoke"}/>
                
              </td>
              <td class="">
                <!-- <a href="/admin/cms/faqs/{faq.id}/del" class="delete-button">Delete</a> -->
                <Button on:click={handleDeleteModalOpenClick(faq)} txtColor="white" bgColor="red">Delete</Button>
              </td>

              <td class="">
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
<Modal {deleteModelOpen} on:cancel={_ => deleteModelOpen = false} on:delete={handleDelete}>
      <div class="">
        <h2 class="text-lg font-medium leading-6 text-gray-900">Delete FAQ?</h2>
        <p class="mt-1 text-md text-gray-600">
          The following FAQ will be deleted permanantly. 
        </p>
        <p class="mt-3 ml-2 text-sm text-gray-700">Question: {deleteFaq.question}</p>
        <p class="mt-3 ml-2 text-sm text-gray-700">Currently Published?: {deleteFaq.active ? "Yes": "No"}</p>
      </div>
</Modal>

<!-- .delete-button {
  @apply border-3 px-4 py-2 rounded-lg bg-red font-space text-white;
}  -->
<style>
 
 
  .button {
    @apply border-3 px-4 py-2 rounded-lg bg-yellow font-space text-white;
  }
</style>

