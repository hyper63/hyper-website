<script>
  import CircleCheck from "$lib/svgs/circle-check.svelte";
  let autoScaleTip = false;
  let autoScaleLog = false;
</script>

<div class="flex items-center">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
<div class="pt-4">
  <div class="table table-fixed border-t-[1px] border-lightgray" style="width: 100%;">
    <div class="table-header-group ">
      <div class="table-row">
        <div class="table-cell border-b-[1px] border-lightgray hover:border-b-3">
          <div class="flex">
            <div class="text-left px-4 text-darkgray text-sm">Auto-Scaling</div>
            <span
              on:mouseenter={() => (autoScaleTip = true)}
              on:mouseleave={() => (autoScaleTip = false)}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5 6.5C12.5 8.0913 11.8679 9.61742 10.7426 10.7426C9.61742 11.8679 8.0913 12.5 6.5 12.5C4.9087 12.5 3.38258 11.8679 2.25736 10.7426C1.13214 9.61742 0.5 8.0913 0.5 6.5C0.5 4.9087 1.13214 3.38258 2.25736 2.25736C3.38258 1.13214 4.9087 0.5 6.5 0.5C8.0913 0.5 9.61742 1.13214 10.7426 2.25736C11.8679 3.38258 12.5 4.9087 12.5 6.5ZM7.25 3.5C7.25 3.69891 7.17098 3.88968 7.03033 4.03033C6.88968 4.17098 6.69891 4.25 6.5 4.25C6.30109 4.25 6.11032 4.17098 5.96967 4.03033C5.82902 3.88968 5.75 3.69891 5.75 3.5C5.75 3.30109 5.82902 3.11032 5.96967 2.96967C6.11032 2.82902 6.30109 2.75 6.5 2.75C6.69891 2.75 6.88968 2.82902 7.03033 2.96967C7.17098 3.11032 7.25 3.30109 7.25 3.5ZM5.75 5.75C5.55109 5.75 5.36032 5.82902 5.21967 5.96967C5.07902 6.11032 5 6.30109 5 6.5C5 6.69891 5.07902 6.88968 5.21967 7.03033C5.36032 7.17098 5.55109 7.25 5.75 7.25V9.5C5.75 9.69891 5.82902 9.88968 5.96967 10.0303C6.11032 10.171 6.30109 10.25 6.5 10.25H7.25C7.44891 10.25 7.63968 10.171 7.78033 10.0303C7.92098 9.88968 8 9.69891 8 9.5C8 9.30109 7.92098 9.11032 7.78033 8.96967C7.63968 8.82902 7.44891 8.75 7.25 8.75V6.5C7.25 6.30109 7.17098 6.11032 7.03033 5.96967C6.88968 5.82902 6.69891 5.75 6.5 5.75H5.75Z"
                  fill="#565657"
                />
              </svg>
            </span>
          </div>

          {#if autoScaleTip}
            <div class="absolute z-40 bg-blue text-white p-4 rounded text-xs">
              hyper services automatically scale in or out
              <br />
              based on your applications load
            </div>
          {/if}
        </div>

        <div class="table-cell border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3">
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck />
          </div>
        </div>
        <div class="table-cell border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3">
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#138BF7" />
          </div>
        </div>
        <div class="table-cell border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3">
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#3AC43F" />
          </div>
        </div>
        <div class="table-cell border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3">
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#54056A" />
          </div>
        </div>
      </div>

      <div class="table-row ">
        <div
          class="table-cell align-middle text-left px-4 text-darkgray text-sm border-b-[1px] border-lightgray hover:border-b-3"
        >
          # of hyper apps
        </div>

        <div
          class="table-cell align-middle text-center text-darkgray text-sm px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          3
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>10</div>
            <div class="text-xs pb-1">($25 / additional)</div>
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>20</div>
            <div class="text-xs pb-1">($25 / additional)</div>
          </div>
        </div>
        <div
          class="table-cell align-middle text-center text-darkgray px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>50</div>
          </div>
        </div>
      </div>

      <div class="table-row">
        <div
          class="table-cell align-middle text-left px-4 text-darkgray text-sm border-b-[1px] border-lightgray hover:border-b-3"
        >
          API Requests
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>100k</div>
            <div class="text-xs pb-1">($1 / 25k additional)</div>
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>500k</div>
            <div class="text-xs pb-1">($1 / 25k additional)</div>
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>2M</div>
            <div class="text-xs pb-1">($1 / 25k additional)</div>
          </div>
        </div>
        <div
          class="table-cell align-middle text-center text-darkgray text-sm px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          Custom
        </div>
      </div>

      <div class="table-row">
        <div
          class="table-cell align-middle text-left px-4 text-darkgray text-sm border-b-[1px] border-lightgray hover:border-b-3"
        >
          Bandwidth
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>10GB</div>
            <div class="text-xs pb-1">($1 / 5GB additional)</div>
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>500GB</div>
            <div class="text-xs pb-1">($1 / 5GB additional)</div>
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>1TB</div>
            <div class="text-xs pb-1">($1 / 5GB additional)</div>
          </div>
        </div>
        <div
          class="table-cell align-middle text-center text-darkgray text-sm px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          Custom
        </div>
      </div>

      <div class="table-row">
        <div
          class="table-cell align-middle text-left px-4 text-darkgray text-sm border-b-[1px] border-lightgray hover:border-b-3"
        >
          Database Space
        </div>
        <div
          class="ttable-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>500MB</div>
            <div class="text-xs pb-1">($0.125 / additional GB)</div>
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>15GB</div>
            <div class="text-xs pb-1">($0.125 / additional GB)</div>
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>32GB</div>
            <div class="text-xs pb-1">($0.125 / additional GB)</div>
          </div>
        </div>
        <div
          class="table-cell align-middle text-center text-darkgray text-sm px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          Custom
        </div>
      </div>

      <div class="table-row">
        <div
          class="table-cell align-middle text-left px-4 text-darkgray text-sm border-b-[1px] border-lightgray hover:border-b-3"
        >
          Storage
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>500GB</div>
            <div class="text-xs pb-1">($0.05 / additional GB)</div>
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>1.5TB</div>
            <div class="text-xs pb-1">($0.05 / additional GB)</div>
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>5TB</div>
            <div class="text-xs pb-1">($0.05 / additional GB)</div>
          </div>
        </div>
        <div
          class="table-cell align-middle text-center text-darkgray text-sm px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          Custom
        </div>
      </div>

      <div class="table-row">
        <div class="table-cell border-b-[1px] border-lightgray hover:border-b-3">
          <div class="flex">
            <div class="text-left px-4 text-darkgray text-sm">Logging</div>
            <span
              on:mouseenter={() => (autoScaleLog = true)}
              on:mouseleave={() => (autoScaleLog = false)}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5 6.5C12.5 8.0913 11.8679 9.61742 10.7426 10.7426C9.61742 11.8679 8.0913 12.5 6.5 12.5C4.9087 12.5 3.38258 11.8679 2.25736 10.7426C1.13214 9.61742 0.5 8.0913 0.5 6.5C0.5 4.9087 1.13214 3.38258 2.25736 2.25736C3.38258 1.13214 4.9087 0.5 6.5 0.5C8.0913 0.5 9.61742 1.13214 10.7426 2.25736C11.8679 3.38258 12.5 4.9087 12.5 6.5ZM7.25 3.5C7.25 3.69891 7.17098 3.88968 7.03033 4.03033C6.88968 4.17098 6.69891 4.25 6.5 4.25C6.30109 4.25 6.11032 4.17098 5.96967 4.03033C5.82902 3.88968 5.75 3.69891 5.75 3.5C5.75 3.30109 5.82902 3.11032 5.96967 2.96967C6.11032 2.82902 6.30109 2.75 6.5 2.75C6.69891 2.75 6.88968 2.82902 7.03033 2.96967C7.17098 3.11032 7.25 3.30109 7.25 3.5ZM5.75 5.75C5.55109 5.75 5.36032 5.82902 5.21967 5.96967C5.07902 6.11032 5 6.30109 5 6.5C5 6.69891 5.07902 6.88968 5.21967 7.03033C5.36032 7.17098 5.55109 7.25 5.75 7.25V9.5C5.75 9.69891 5.82902 9.88968 5.96967 10.0303C6.11032 10.171 6.30109 10.25 6.5 10.25H7.25C7.44891 10.25 7.63968 10.171 7.78033 10.0303C7.92098 9.88968 8 9.69891 8 9.5C8 9.30109 7.92098 9.11032 7.78033 8.96967C7.63968 8.82902 7.44891 8.75 7.25 8.75V6.5C7.25 6.30109 7.17098 6.11032 7.03033 5.96967C6.88968 5.82902 6.69891 5.75 6.5 5.75H5.75Z"
                  fill="#565657"
                />
              </svg>
            </span>
          </div>

          {#if autoScaleLog}
            <div class="absolute z-40 bg-blue text-white p-4 rounded text-xs">available v1.0</div>
          {/if}
        </div>

        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            Limited
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#138BF7" />
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#3AC43F" />
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#54056A" />
          </div>
        </div>
      </div>

      <div class="table-row">
        <div
          class="table-cell align-middle text-left px-4 text-darkgray text-sm border-b-[1px] border-lightgray hover:border-b-3"
        >
          Users
        </div>
        <div
          class="table-cell align-middle text-center text-darkgray text-sm px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          1
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>5</div>
            <div class="text-xs pb-1">($5 / additional)</div>
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="flex flex-col items-center justify-center text-darkgray text-sm">
            <div>15</div>
            <div class="text-xs pb-1">($10 / additional)</div>
          </div>
        </div>
        <div
          class="table-cell align-middle text-center text-darkgray text-sm px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          Custom
        </div>
      </div>

      <div class="table-row">
        <div
          class="table-cell align-middle text-left px-4 text-darkgray text-sm border-b-[1px] border-lightgray hover:border-b-3"
        >
          Teams
        </div>

        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm" />
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#138BF7" />
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#3AC43F" />
          </div>
        </div>
        <div
          class="table-cell text-center px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#54056A" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
