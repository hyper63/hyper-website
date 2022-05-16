<script>
  import { HelpURLs } from "./constants";
</script>

<footer class="">
  <section class="hidden md:flex md:pl-24 md:pr-24">
    <div class="w-1/4 p-24 flex items-center justify-center">
      <img src="/logo.svg" alt="logo" />
    </div>
    <div class="p-14">
      <div class="mb-8 text-blue"><a href="/product">PRODUCT</a></div>
      <ul>
        <li><a href="/product#data">DATA</a></li>
        <li><a href="/product#cache">CACHE</a></li>
        <li><a href="/product#storage">STORAGE</a></li>
        <li><a href="/product#search">SEARCH</a></li>
        <li><a href="/product#queue">QUEUE</a></li>
      </ul>
    </div>
    <div class="p-14">
      <div class="mb-8 text-blue">RESOURCES</div>
      <ul>
        <li><a href="https://docs.hyper.io">API DOCS</a></li>
        <li><a href="https://blog.hyper.io">BLOG</a></li>
        <li><a href="/company">COMPANY</a></li>
        <li>
          <a
            href="https://join.slack.com/t/hyper-chat/shared_invite/zt-wefinvvb-EA7gchLaXKwKzJE_libKOw"
            >CHAT</a
          >
        </li>
        <li><a href="/faq">FAQS</a></li>
      </ul>
    </div>
    <div class="p-14">
      <div class="mb-8 text-blue">CONTACT</div>
      <ul>
        <li><a href={HelpURLs.REQUEST_A_DEMO}>REQUEST A DEMO</a></li>
        <li><a href={HelpURLs.REQUEST_A_CONSULTATION}>REQUEST A CONSULTATION</a></li>
        <li><a href="mailto:info@hyper.io">INFO@HYPER.IO</a></li>
        <li><a href="https://twitter.com/_hyper_io">TWITTER</a></li>
        <li><a href="https://github.com/hyper63/hyper">GITHUB</a></li>
      </ul>
    </div>
  </section>
  <section class="flex justify-center items-center mt-16 mb-16 mx-auto w-full">
    <p class="font-mono text-sm w-full text-center">
      &copy; 2022 HYPER63, LLC ALL RIGHTS RESERVED.
    </p>
  </section>
</footer>
