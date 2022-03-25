<script>
  import CircleCheck from "$lib/svgs/circle-check.svelte";

  var showBasicTip = false;
  var showExtTip = false;
  var showCTOTip = false;
</script>

<div class="mt-8 flex items-center">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.364 5.636L14.828 9.172L18.364 5.636ZM14.828 14.828L18.364 18.364L14.828 14.828ZM9.172 9.172L5.636 5.636L9.172 9.172ZM9.172 14.828L5.636 18.364L9.172 14.828ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12ZM16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12V12Z"
      stroke="#4C6D93"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect x="0.5" y="0.5" width="23" height="23" stroke="#494D51" />
  </svg>

  <div class="font-bold text-2xl" style="margin-left: 16px;">SUPPORT</div>
</div>

<div class="pt-4">
  <div class="table table-fixed border-t-[1px] border-lightgray" style="width: 100%;">
    <div class="table-header-group ">
      <div class="table-row">
        <div class="table-cell align-middle border-b-[1px] border-lightgray hover:border-b-3 h-14">
          <div class="flex">
            <div class="text-left px-4 text-darkgray text-sm">Basic Support</div>
            <span
              on:mouseenter={() => (showBasicTip = true)}
              on:mouseleave={() => (showBasicTip = false)}
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

          {#if showBasicTip}
            <div class="absolute z-40 bg-blue text-white p-4 rounded text-xs">
              Basic Support available business <br />hourse only, Monday through Friday <br />9 am
              to 5pm EST
            </div>
          {/if}
        </div>

        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        />
        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#138BF7" />
          </div>
        </div>
        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#3AC43F" />
          </div>
        </div>
        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#54056A" />
          </div>
        </div>
      </div>

      <div class="table-row">
        <div
          class="table-cell align-middle text-left px-4 text-darkgray text-sm border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          SLA for 99.9% uptime
        </div>

        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        />
        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        />
        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#3AC43F" />
          </div>
        </div>
        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm">
            <CircleCheck color="#54056A" />
          </div>
        </div>
      </div>

      <div class="table-row">
        <div class="table-cell align-middle border-b-[1px] border-lightgray hover:border-b-3 h-14">
          <div class="flex">
            <div class="text-left px-4 text-darkgray text-sm">Extended Support</div>
            <span
              on:mouseenter={() => (showExtTip = true)}
              on:mouseleave={() => (showExtTip = false)}
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

          {#if showExtTip}
            <div class="absolute z-40 bg-blue text-white p-4 rounded text-xs">
              Extended Support available via Zoom
              <br />
              business hours only, Monday through
              <br />
              Friday 9 am to 5 pm EST
            </div>
          {/if}
        </div>

        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm" />
        </div>
        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm" />
        </div>
        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          <div class="flex flex-col items-center justify-center">
            <CircleCheck color="#3AC43F" />
            <div class="text-xs pb-2">($500)</div>
          </div>
        </div>
        <div
          class="table-cell align-middle text-center text-darkgray text-sm px-4 border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          Custom
        </div>
      </div>

      <div class="table-row">
        <div class="table-cell align-middle border-b-[1px] border-lightgray hover:border-b-3 h-14">
          <div class="flex">
            <div class="text-left px-4 text-darkgray text-sm">Fractional CTO Service</div>
            <span
              on:mouseenter={() => (showCTOTip = true)}
              on:mouseleave={() => (showCTOTip = false)}
              class="-ml-3"
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

          {#if showCTOTip}
            <div class="absolute z-40 bg-blue text-white p-4 rounded text-xs">
              Our fractional CTO support provides
              <br />
              oversight, vision, and communication
              <br />
              to help your organization achieve
              <br />
              quality, security, productivity, and
              <br />
              accountability.
            </div>
          {/if}
        </div>

        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          <div class="px-16 py-4 flex items-center justify-center text-darkgray text-sm" />
        </div>
        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          <div class="flex flex-col items-center justify-center">
            <CircleCheck color="#138BF7" />
            <div class="text-xs pb-1">($4000)</div>
          </div>
        </div>
        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          <div class="flex flex-col items-center justify-center">
            <CircleCheck color="#3AC43F" />
            <div class="text-xs pb-1">($6000)</div>
          </div>
        </div>
        <div
          class="table-cell align-middle border-l-[1px] border-b-[1px] border-lightgray hover:border-b-3 h-14"
        >
          <div class="flex flex-col items-center justify-center">
            <CircleCheck color="#54056A" />
            <div class="text-xs pb-1">($8000)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
