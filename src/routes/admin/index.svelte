<script context="module">
  export async function load({ session }) {
    return {
      props: {
        session,
      },
    };
  }
</script>

<script>
  import Header from "$lib/admin/header.svelte";

  export let session;
</script>

<Header />
<section class="w-full flex justify-between mt-4 ml-4 md:mt-20 md:ml-24 md:mr-44">
  <h1>Welcome to the Admin Panel for hyper.io</h1>
</section>

{#if session.username}
  Logged in as: {session.username}
  <a class="btn btn-link btn-primary" href="/logout">Logout</a>
{:else}
  <a class="btn btn-link btn-primary" href="/login">Login to Admin</a>
{/if}
