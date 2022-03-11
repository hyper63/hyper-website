<script>
  import CircleCheck from "$lib/svgs/circle-check.svelte";
</script>

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
<table class="table table-fixed border-3 border-black" style="width: 100%;">
  <tr>
    <th>Plans</th>
    <th>Free</th>
    <th>Pro</th>
    <th>Business</th>
    <th>Enterprise</th>
  </tr>
  <tr>
    <td class="border w-1/5 px-4">Auto-Scaling</td>
    <td class="border w-1/5">
      <div class="px-16 py-4 flex items-center justify-center">
        <CircleCheck />
      </div>
    </td>
    <td class="border w-1/5">
      <div class="px-16 py-4 flex items-center justify-center">
        <CircleCheck />
      </div>
    </td>
    <td class="border w-1/5">
      <div class="px-16 py-4 flex items-center justify-center">
        <CircleCheck />
      </div>
    </td>
    <td class="border w-1/5">
      <div class="px-16 py-4 flex items-center justify-center">
        <CircleCheck />
      </div>
    </td>
  </tr>
  <tr>
    <td class="border w-1/5 px-4 py-4"># of hyper apps</td>
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">3</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">10</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">20</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">50</div></td
    >
  </tr>
  <tr>
    <td class="border w-1/5 px-4 py-4">API Requests</td>
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">100K</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">500K</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">2M</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">Custom</div></td
    >
  </tr>
  <tr>
    <td class="border w-1/5 px-4 py-4">Bandwidth</td>
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">10GB</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">500GB</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">1TB</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">Custom</div></td
    >
  </tr>
  <tr>
    <td class="border w-1/5 px-4 py-4">Database Space</td>
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">500MB</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">15GB</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">32GB</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">Custom</div></td
    >
  </tr>
  <tr>
    <td class="border w-1/5 px-4 py-4">Storage</td>
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">500GB</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">1.5TB</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">5TB</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">Custom</div></td
    >
  </tr>
  <tr>
    <td class="border w-1/55 px-4 py-4">Logging</td>
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">Limited</div></td
    >
    <td class="border w-1/5"
      ><div class="px-16 py-4 flex items-center justify-center">
        <CircleCheck />
      </div></td
    >
    <td class="border w-1/5"
      ><div class="px-16 py-4 flex items-center justify-center">
        <CircleCheck />
      </div></td
    >
    <td class="border w-1/5"
      ><div class="px-16 py-4 flex items-center justify-center">
        <CircleCheck />
      </div></td
    >
  </tr>
  <tr>
    <td class="border w-1/55 px-4 py-4">Users</td>
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">1</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">5</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">15</div></td
    >
    <td class="border w-1/5"
      ><div class="flex items-center justify-center">Custom</div></td
    >
  </tr>
  <tr>
    <td class="border w-1/55 px-4 py-4">Teams</td>
    <td class="border w-1/5"
      ><div class="flex items-center justify-center" /></td
    >
    <td class="border w-1/5"
      ><div class="px-16 py-4 flex items-center justify-center">
        <CircleCheck />
      </div></td
    >
    <td class="border w-1/5"
      ><div class="px-16 py-4 flex items-center justify-center">
        <CircleCheck />
      </div></td
    >
    <td class="border w-1/5"
      ><div class="px-16 py-4 flex items-center justify-center">
        <CircleCheck />
      </div></td
    >
  </tr>
</table>
