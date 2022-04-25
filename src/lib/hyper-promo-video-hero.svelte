<script>
  import PlayButton from "$lib/buttons/play-button.svelte";
  import { HelpURLs } from "$lib/constants.js";
</script>

<div class="hidden md:block">
  <div class="relative">
    <img
      class="h-auto w-full rounded shadow-lg hover:shadow-xl hover:shadow-active-yellow"
      src="getting-started-w-hyper.png"
      alt="youtube thumbnail"
    />
    <div class="btn">
      <PlayButton href={HelpURLs.VIDEO_PROMO} bgColor="yellow" />
    </div>
  </div>
</div>

<style>
  /* Style the button and place it in the middle of the container/image */
  .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
</style>
