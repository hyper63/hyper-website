<script>
  import Header from '$lib/admin/header.svelte'
  import Faqform from '$lib/admin/faq-form.svelte'
  import { goto } from '$app/navigation'

  let submitStatus = null 
  let error = false

  async function handleSubmit({detail}) {

    console.log("newsvelte", {detail})
    const res = await fetch('/admin/faqs.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(detail)
    })
    if (res.ok) {
      const response = await res.json()
      submitStatus = 'Successfully saved FAQ'  
      setTimeout(() => goto('/admin/cms/faqs'), 1000)

    } else {
      error = true
      submitStatus = 'Error occured saving FAQ'
    }
  }

</script>
<Header />
{#if submitStatus}
  <div class="border rounded-lg border-{error ? 'red' : 'green'} p-4 m-16 relative">
    <button class="absolute top-2 right-0" on:click={() => submitStatus = null}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <div class="w-3/4">
      <p>{submitStatus}</p>
    </div>
  </div>

{/if}
<Faqform on:submit={handleSubmit} />

