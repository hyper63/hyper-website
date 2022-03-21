<script context="module">
  export async function load({ page, session }) {
    return {
      props: {
        session,
      },
    };
  }
</script>

<script>
  import Header from "$lib/admin/header.svelte";
  import LinkButton from "$lib/link-button.svelte";
  export let session;
</script>

<Header />
<section class="w-full flex justify-between mt-4 ml-4 md:mt-20 md:ml-24 md:mr-44">
  <h1>Welcome to the Admin Panel for hyper.io</h1>
</section>

{#if session.username}
  Logged in as: {session.username}
  <LinkButton href="/logout">Logout</LinkButton>
{:else}
  <LinkButton href="/login">Login to Admin</LinkButton>
{/if}
