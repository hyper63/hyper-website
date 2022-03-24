<script>
  import Arrow from "$lib/svgs/arrow.svelte";
</script>

<h2 class="text-2xl md:text-5xl text-center pl-4 mt-16 mb-16">Compare Plans</h2>

<div class="flex flex-row justify-between">
  <div class="bg-white w-1/3" />

  <div class="bg-white" />
</div>

<table class="table table-fixed" style="width: 100%;">
  <tr>
    <th />
    <th />
    <th />
    <th />
    <th />
  </tr>
  <tr>
    <td class="">
      <div class="flex" />
    </td>
    <td class="">
      <div class="px-2 py-2 flex items-center justify-center">
        <div class="">
          <div class="font-semibold text-2xl">Starter</div>
          <a
            href="https://dashboard.hyper.io"
            class="bg-black text-white flex items-center rounded"
            style="padding-left: 1rem; padding-right: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem;"
          >
            <span class="font-light" style="margin-right: 32px;">It's Free</span>
            <Arrow color="white" />
          </a>
        </div>
      </div>
    </td>
    <td class="">
      <div class="px-2 py-2  flex items-center justify-center">
        <div class="">
          <div class="font-semibold text-2xl">Pro</div>
          <a
            href="https://dashboard.hyper.io/upgrade"
            class="bg-blue text-white flex items-center rounded"
            style="padding-left: 1rem; padding-right: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem;"
          >
            <span class="font-light" style="margin-right: 32px;">Upgrade</span>
            <Arrow color="white" />
          </a>
        </div>
      </div>
    </td>

    <td class="">
      <div class="px-2 py-2  flex items-center justify-center">
        <div class="">
          <div class="font-semibold text-2xl">Business</div>
          <a
            href="https://dashboard.hyper.io/upgrade"
            class="bg-green text-white flex items-center rounded"
            style="padding-left: 1rem; padding-right: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem;"
          >
            <span class="font-light" style="margin-right: 32px;">Upgrade</span>
            <Arrow color="white" />
          </a>
        </div>
      </div>
    </td>
    <td class="">
      <div class="px-2 py-2  flex items-center justify-center">
        <div class="">
          <div class="font-semibold text-2xl">Enterprise</div>
          <a
            href="https://dashboard.hyper.io/upgrade"
            class="bg-purple text-white flex items-center rounded"
            style="padding-left: 1rem; padding-right: 1rem; padding-top: 0.5rem; padding-bottom: 0.5rem;"
          >
            <span class="font-light" style="margin-right: 32px;">Contact Sales</span>
            <Arrow color="white" />
          </a>
        </div>
      </div>
    </td>
  </tr>
</table>
