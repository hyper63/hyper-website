<script>
  import CircleCheck from "$lib/svgs/circle-check.svelte";
</script>

<div class="w-1/4 px-2 shadow">
  <div class="rounded bg-blue pb-4">
    <h3 class="mx-4 pt-8 text-white">Pro</h3>
    <p class="mx-4  text-white">$99/mo</p>
  </div>
  <div class="bg-whitesmoke">
    <ul class="px-4 py-4 space-y-4" style="height: 500px;">
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
      class="mx-8 my-16 bg-blue rounded flex items-center justify-center text-white"
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
