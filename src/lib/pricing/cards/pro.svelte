<script>
  import CircleCheck from "$lib/svgs/circle-check.svelte";
</script>

<div class="pl-4">
  <div class="h-100% w-100% drop-shadow-md hover:drop-shadow-2xl">
    <div class="rounded-t bg-blue pb-4">
      <h3 class="mx-4 pt-8 text-white pb-2">Pro</h3>
      <p class="mx-4 text-white text-sm pb-4">$99/mo</p>
    </div>
    <div class="bg-whitesmoke border-b-[0.5px] border-lightgray" style="height: 500px;">
      <ul class="px-4 py-4 space-y-4">
        <li class="flex items-center">
          <CircleCheck color="#138BF7" />
          <span class="ml-2">For Startups</span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#138BF7" />
          <span class="ml-2">Up to 10 hyper applications</span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#138BF7" />
          <span class="ml-2">5 users</span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#138BF7" />
          <span class="ml-2">Enhanced service limits</span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#138BF7" />
          <span class="ml-2">Logging</span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#138BF7" />
          <span class="ml-2">Email Support</span>
        </li>
      </ul>
    </div>
    <div class="bg-white flex items-center justify-center">
      <a
        href="https://dashboard.hyper.io/upgrade"
        class="mx-4 my-16 bg-blue rounded flex items-center justify-center text-white"
        style="padding-top: 0.75rem; padding-bottom: 0.75rem; padding-left: 1.5rem; padding-right: 1.5rem;"
      >
        <span class="pr-4">Upgrade</span>
        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1L13 6M13 6L8 11M13 6H1"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  </div>
</div>
