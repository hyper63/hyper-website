<script>
  import { HelpURLs } from "$lib/constants.js";
</script>

<div class="hidden md:block">
  <div class="relative">
    <img
      class="h-auto w-full rounded shadow-lg hover:shadow-xl hover:shadow-active-yellow"
      src="getting-started-w-hyper.png"
      alt="youtube thumbnail"
    />
    <div class="play">
      <a class="btn btn-square btn-lg bg-lightgray hover:bg-accent" href={HelpURLs.VIDEO_PROMO}>
        <svg
          class="ml-2"
          width="25"
          height="25"
          viewBox="0 0 19 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 22.813V0.812988L19 11.313L0 22.813Z" fill="white" />
        </svg>
      </a>
    </div>
  </div>
</div>

<style>
  /* Style the button and place it in the middle of the container/image */
  .play {
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
