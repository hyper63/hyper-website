<script>
  import Input from '$lib/input.svelte'
  import { createEventDispatcher } from 'svelte';
  import { compose, map, trim, split } from 'ramda';
  import ActiveToggle from '$lib/toggle.svelte'
import Faq from '$lib/faq.svelte';
  export let faq = { tags: [], active: 'false' }
  
  let tagString = faq.tags.join(', ')
  const dispatch = createEventDispatcher();

  function handleToggle ({detail}) {
    faq = {...faq, active: detail.active}
  }
  
  function submit(e) {
    //  active: faq.active === 'false' || faq.active === false ? false : true,
    const data = {
      question: faq.question,
      answer: faq.answer,
      active: faq.active,
      tags: compose(
        map(trim),
        split(',')
      )(tagString)
    }

    console.log({data})

     dispatch('submit', data)
  }

</script>
<div class="ml-24 mr-44 mt-24">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Faq</h3>
        <p class="mt-1 text-sm text-gray-600">
          This information will be displayed publicly so be careful what you share.
          
        </p>
        <p>
          <a href="/faq" class="text-yellow bg-black px-4 py-2 mt-8">live faqs ⚡️</a>
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form on:submit|preventDefault={submit}>
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="grid gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="question" class="block text-sm font-medium text-gray-700">
                  Question
                </label>
                <div class="mt-1 flex rounded-md shadow-sm w-full">
                  <Input bind:value={faq.question} styles="w-full" name="question" id="question" />
                </div>
                
              </div>
            </div>

            <div>
              <label for="answer" class="block text-sm font-medium text-gray-700">
                Answer
              </label>
              <div class="mt-1">
                <textarea bind:value={faq.answer} id="answer" name="answer" rows="10" class="shadow-sm focus:ring-black focus:border-blue mt-1 block w-full sm:text-sm border-lightgray p-4 border-3 rounded-lg"></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Brief answer to the question, if longer than 10 rows, it should be linked to a blog post for more information.
              </p>
            </div>
            
            <div class="grid gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="tags" class="block text-sm font-medium text-gray-700">
                  Tags <span class="text-red">*</span>
                </label>
                <div class="mt-1 flex rounded-md shadow-sm w-full">
                  <Input bind:value={tagString} styles="w-full" id="tags" name="tags" />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Add categories separated by a comma.
                </p>
              </div>
            </div>
            <div class="grid gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="active" class="block text-sm font-medium text-gray-700">
                  Published
                </label>
                <div class="mt-1 flex rounded-md shadow-sm w-full">
                  <!-- <input type="checkbox" bind:checked={faq.active} /> -->
                  <ActiveToggle data={faq} on:toggleSave={handleToggle} toggleEnabled={faq.active} enabledColor={"blue"} disabledColor={"whitesmoke"}/>
                
                </div>
              </div>
            </div>

          </div>
         
          <div class="px-4 py-3 bg-gray-50 sm:px-6 flex justify-between items-center">
            <a href="/admin/cms/faqs">Cancel</a>
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Create/Update 
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

