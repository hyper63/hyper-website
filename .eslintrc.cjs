module.exports =  {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: ["eslint:recommended", "plugin:import/recommended"],
    /* for svelte components - import/no-unresolved linter had issues with '$lib/...' */
    overrides: [
      {
        files: ["**/*.svelte"],
        processor: "svelte3/svelte3",
        rules : {
          "import/no-unresolved": "off"
        }
      },
      {
        files: ["src/routes/**/*.js", "src/hooks.js"],
        rules: {
          "import/no-unresolved": "off"
        }
      }
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module"
    },
    plugins: ["import", "svelte3"],
  }