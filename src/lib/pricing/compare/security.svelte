<script>
  import CircleCheck from "$lib/svgs/circle-check.svelte";
</script>

<div class="mt-8 flex items-center">
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.6604 5.98434C16.8499 6.15225 14.0949 5.05895 12 2.94434C9.90513 5.05895 7.15013 6.15225 4.33956 5.98434C4.11337 6.96945 3.99927 7.98289 4 9.00034C4 14.5913 7.39911 19.2903 12 20.6223C16.6009 19.2903 20 14.5923 20 9.00034C20 7.95834 19.8818 6.94834 19.6604 5.98434Z"
      stroke="#4C6D93"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect x="0.5" y="0.5" width="23" height="23" stroke="#494D51" />
  </svg>

  <div class="font-bold text-2xl" style="margin-left: 16px;">SECURITY</div>
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
    <td class="border px-4">HTTPS/SSL by default</td>
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
    <td class="border w-1/5 px-4">DDoS mitigation</td>
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
    <td class="border w-1/5 px-4">App key protection</td>
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
    <td class="border w-1/5 px-4">Automated VPC</td>
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
    <td class="border w-1/5 px-4">Payload limits</td>
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
</table>
