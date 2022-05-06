<script>
  import { HelpURLs } from "$lib/constants";

  import CircleCheck from "$lib/svgs/circle-check.svelte";
</script>

<div class="pl-4">
  <div class="h-100% w-100% drop-shadow-md hover:drop-shadow-2xl">
    <div class="rounded-t bg-green pb-4">
      <h3 class="mx-4 pt-8 text-white pb-2">Business</h3>
      <p class="mx-4 text-white text-sm pb-4">$949/mo</p>
    </div>
    <div class="bg-whitesmoke border-b-[0.5px] border-lightgray" style="height: 500px;">
      <ul class="px-4 py-4 space-y-4">
        <li class="flex items-center">
          <CircleCheck color="#3AC43F" />

          <span class="ml-2">For Software Agencies</span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#3AC43F" />

          <span class="ml-2">Up to 20 hyper applications</span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#3AC43F" />

          <span class="ml-2">15 users</span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#3AC43F" />

          <span class="ml-2">Higher service limits</span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#3AC43F" />

          <span class="ml-2">Logging</span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#3AC43F" />

          <span class="ml-2">Email Support</span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#3AC43F" />

          <span class="ml-2">99.9% SLA uptime</span>
        </li>
        <li class="flex items-center">
          <CircleCheck color="#3AC43F" />

          <span class="ml-2">Extended Support ($500/mo)</span>
        </li>
      </ul>
    </div>
    <div
      class="bg-white border-t border-lightgray rounded-b flex items-center justify-center"
      style="padding-top: 0.75rem; padding-bottom: 0.75rem; padding-left: 1.5rem; padding-right: 1.5rem;"
    >
      <div class="my-12">
        <a href={HelpURLs.DASHBOARD} class="btn btn-secondary gap-2">
          Upgrade
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
