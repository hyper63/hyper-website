<script>
  import PlayButton from "$lib/play-button.svelte";
  import { HelpURLs } from "$lib/constants.js";
</script>

<div class="md:w-1/2 hidden md:block ">
  <div class="container ">
    <img
      class="rounded shadow-lg hover:shadow-xl hover:shadow-active-yellow"
      src="youtube-thumbnail-lady.png"
      alt="youtube thumbnail"
    />
    <div class="btn">
      <PlayButton href={HelpURLs.VIDEO_PROMO} bgColor="yellow" />
    </div>
  </div>
</div>

<style>
  /* Container needed to position the button. Adjust the width as needed */
  .container {
    display: block;
    position: absolute;
    right: 5%;
    top: 25%;
    width: 50%;
  }

  /* Make the image responsive */
  .container img {
    width: 100%;
    height: auto;
  }

  /* Style the button and place it in the middle of the container/image */
  .container .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    /* background-color: #555; */
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
</style>
