<script>
  import { HelpURLs } from "$lib/constants";

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
          <div class="font-semibold text-2xl mb-2">Starter</div>
          <a href={HelpURLs.DASHBOARD} class="btn btn-neutral gap-2">
            It's Free
            <Arrow color="white" />
          </a>
        </div>
      </div>
    </td>
    <td class="">
      <div class="px-2 py-2  flex items-center justify-center">
        <div class="">
          <div class="font-semibold text-2xl mb-2">Pro</div>
          <a href={HelpURLs.UPGRADE} class="btn btn-primary gap-2">
            Upgrade
            <Arrow color="white" />
          </a>
        </div>
      </div>
    </td>

    <td class="">
      <div class="px-2 py-2  flex items-center justify-center">
        <div class="">
          <div class="font-semibold text-2xl mb-2">Business</div>
          <a href={HelpURLs.UPGRADE} class="btn btn-secondary gap-2">
            Upgrade
            <Arrow color="white" />
          </a>
        </div>
      </div>
    </td>
    <td class="">
      <div class="px-2 py-2  flex items-center justify-center">
        <div class="">
          <div class="font-semibold text-2xl mb-2">Enterprise</div>
          <a href={HelpURLs.UPGRADE} class="btn bg-purple gap-2">
            Upgrade
            <Arrow color="white" />
          </a>
        </div>
      </div>
    </td>
  </tr>
</table>
