import sveltePreprocess from "svelte-preprocess";
import node from "@sveltejs/adapter-node";
/*
const sveltePreprocess = require("svelte-preprocess");
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');
*/
/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: [
    sveltePreprocess({
      defaults: {
        style: "postcss",
      },
      postcss: true,
    }),
  ],
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    vite: {
      ssr: {
        noExternal: "", // (pkg.dependencies || {})
      },
    },
  },
};
