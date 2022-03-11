<script>
  import Arrow from "$lib/svgs/arrow.svelte";
  import CircleCheck from "$lib/svgs/circle-check.svelte";
</script>

<section class="pl-24 pr-24">
  <h1 class="mt-24 mb-16 text-center">Compare Plans</h1>
  <div class="flex flex-row justify-between">
    <div class="bg-white" />
    <div class="">
      <div class="font-bold text-2xl">Starter</div>
      <a
        href="https://dashboard.hyper.io"
        class="bg-black text-white flex items-center rounded"
        style="padding-left: 1rem; padding-right: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem;"
      >
        <span style="margin-right: 32px;">It's Free</span>
        <Arrow color="white" />
      </a>
    </div>
    <div class="">
      <div class="font-bold text-2xl">Pro</div>
      <a
        href="https://dashboard.hyper.io/upgrade"
        class="bg-blue text-white flex items-center rounded"
        style="padding-left: 1rem; padding-right: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem;"
      >
        <span style="margin-right: 32px;">Upgrade</span>
        <Arrow color="white" />
      </a>
    </div>
    <div class="">
      <div class="font-bold text-2xl">Business</div>
      <a
        href="https://dashboard.hyper.io/upgrade"
        class="bg-green text-white flex items-center rounded"
        style="padding-left: 1rem; padding-right: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem;"
      >
        <span style="margin-right: 32px;">Upgrade</span>
        <Arrow color="white" />
      </a>
    </div>
    <div class="">
      <div class="font-bold text-2xl">Enterprise</div>
      <a
        href="https://dashboard.hyper.io/upgrade"
        class="bg-purple text-white flex items-center rounded"
        style="padding-left: 1rem; padding-right: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem;"
      >
        <span style="margin-right: 32px;">Contact Sales</span>
        <Arrow color="white" />
      </a>
    </div>
    <div class="bg-white" />
  </div>
  <hr class="border-black mt-8 mb-8" />
  <div class="flex items-center">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 20H16M4 8V4V8ZM4 4H8H4ZM4 4L9 9L4 4ZM20 8V4V8ZM20 4H16H20ZM20 4L15 9L20 4ZM4 16V20V16ZM4 20H8H4ZM4 20L9 15L4 20ZM20 20L15 15L20 20ZM20 20V16V20Z"
        stroke="#4C6D93"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect x="0.5" y="0.5" width="23" height="23" stroke="#494D51" />
    </svg>

    <div class="font-bold text-2xl" style="margin-left: 16px;">SCALE</div>
  </div>
  <table class="border-2 border-black">
    <tr>
      <td>Auto-Scaling</td>
      <td><CircleCheck /></td>
      <td><CircleCheck /></td>
      <td><CircleCheck /></td>
      <td><CircleCheck /></td>
    </tr>
  </table>
</section>
