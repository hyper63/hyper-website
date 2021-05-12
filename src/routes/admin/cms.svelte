<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
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
  export let faqs;

</script>
<Header />
<pre>
{JSON.stringify(faqs, null, 2)}
</pre>