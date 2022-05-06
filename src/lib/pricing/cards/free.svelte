<script>
  import { HelpURLs } from "$lib/constants";

  import CircleCheck from "$lib/svgs/circle-check.svelte";
</script>

<div class="">
  <div class="h-100% w-100% drop-shadow-md hover:drop-shadow-2xl">
    <div class="rounded-t pb-4 bg-white">
      <h3 class="mx-4 pt-8 pb-2">Starter</h3>
      <p class="mx-4 text-sm pb-4">Free</p>
    </div>
    <div class="bg-whitesmoke " style="height: 500px;">
      <ul class="px-4 py-4 space-y-4">
        <li class="flex items-center">
          <CircleCheck color="#5F82AB" />
          <span class="ml-2">For Prototypes and students</span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#5F82AB" />
          <span class="ml-2">Up to 3 hyper applications </span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#5F82AB" />
          <span class="ml-2"> Basic service limits </span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#5F82AB" />
          <span class="ml-2"> Community Support </span>
        </li>
      </ul>
    </div>
    <div
      class="bg-white border-t border-lightgray rounded-b flex items-center justify-center"
      style="padding-top: 0.75rem; padding-bottom: 0.75rem; padding-left: 1.5rem; padding-right: 1.5rem;"
    >
      <div class="my-12">
        <a href={HelpURLs.DASHBOARD} class="btn btn-neutral gap-2">
          Sign Up
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1L13 6M13 6L8 11M13 6H1"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
