<script>
  // RE: https://svelte.dev/repl/26eb44932920421da01e2e21539494cd?version=3.46.4
  import { onMount } from "svelte";

  export let query;

  let mql;
  let mqlListener;
  let wasMounted = false;
  let matches = false;

  onMount(() => {
    wasMounted = true;
    return () => {
      removeActiveListener();
    };
  });

  $: {
    if (wasMounted) {
      removeActiveListener();
      addNewListener(query);
    }
  }

  function addNewListener(query) {
    mql = window.matchMedia(query);
    mqlListener = (v) => (matches = v.matches);
    mql.addListener(mqlListener);
    matches = mql.matches;
  }

  function removeActiveListener() {
    if (mql && mqlListener) {
      mql.removeListener(mqlListener);
    }
  }
</script>

<slot {matches} />
