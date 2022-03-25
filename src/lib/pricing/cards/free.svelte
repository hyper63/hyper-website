<script>
  import CircleCheck from "$lib/svgs/circle-check.svelte";
</script>

<div class="w-1/4 px-2 h-100% shadow">
  <div class="rounded shadow border-white pb-4">
    <h3 class="mx-4 pt-8">Starter</h3>
    <p class="mx-4">Free</p>
  </div>
  <div class="bg-whitesmoke" style="height: 500px;">
    <ul class="px-4 py-4 space-y-4">
      <li class="flex items-center">
        <CircleCheck color="black" />
        <span class="ml-2">For Prototypes and students</span>
      </li>
      <li class="flex items-center">
        <CircleCheck color="black" />
        <span class="ml-2">Up to 3 hyper applications </span>
      </li>
      <li class="flex items-center">
        <CircleCheck color="black" />
        <span class="ml-2"> Basic service limits </span>
      </li>
      <li class="flex items-center">
        <CircleCheck color="black" />
        <span class="ml-2"> Community Support </span>
      </li>
    </ul>
  </div>
  <div class="bg-white flex items-center justify-center">
    <a
      href="https://dashboard.hyper.io"
      class="mx-8 my-16 bg-whitesmoke rounded flex items-center justify-center"
      style="padding-top: 0.75rem; padding-bottom: 0.75rem; padding-left: 1.5rem; padding-right: 1.5rem;"
    >
      <span class="pr-4">Sign Up</span>
      <svg
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 1L13 6M13 6L8 11M13 6H1"
          stroke="#4C6D93"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  </div>
</div>
