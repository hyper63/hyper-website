<script context="module">
  export async function load({ page, session }) {
    if (/^\/admin\/(.*)/.test(page.path) && session.username === "") {
      return { redirect: "/admin", status: 302 };
    }
    return { props: {} };
  }
</script>

<script>
  import "../app.postcss";
</script>

<slot />
