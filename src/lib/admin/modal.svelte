<script>
  import { createEventDispatcher } from "svelte";
  import { scale } from "svelte/transition";
  import Button from "$lib/button.svelte";
  export let deleteModelOpen = false;

  const dispatch = createEventDispatcher();

  function handleCancelClick() {
    dispatch("cancel");
  }

  function handleDeleteClick() {
    dispatch("delete");
  }

  // action

  function modalAction() {
    let fns = [];
    if (document.body.style.overflow !== "hidden") {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      fns = [...fns, () => (document.body.style.overflow = original)];
    }
    return {
      destroy: () => fns.map((fn) => fn()),
    };
  }
</script>

{#if deleteModelOpen}
  <div use:modalAction on:click={handleCancelClick}>
    <section>
      <aside class="px-8 py-6" in:scale out:scale={{ duration: 500 }}>
        <slot />
        <br />

        <Button
          class="border-darkgray px-4"
          txtColor="black"
          bgColor="lightgray"
          hyperBolt={false}
          on:click={handleCancelClick}>Cancel</Button
        >
        <Button txtColor="white" bgColor="red" on:click={handleDeleteClick}>Delete</Button>

        <!-- <button on:click|preventDefault={handleDeleteClick}>Delete</button> -->
      </aside>
    </section>
  </div>
{/if}

<style>
  section {
    height: 100%;
    display: grid;
    place-items: center;
  }
  aside {
    background-color: white;
  }
  div {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
</style>
