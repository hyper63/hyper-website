<script>
  import Header from '$lib/admin/header.svelte'
  import Faqform from '$lib/admin/faq-form.svelte'

  async function handleSubmit({details}) {
    const res = await fetch('/admin/faqs.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    })
    if (res.ok) {
      return await res.json()
    }
    // TODO: handle error
  }

</script>
<Header />
<Faqform on:submit={handleSubmit} />

