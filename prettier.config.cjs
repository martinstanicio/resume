/** @type {import("prettier").Config} */
module.exports = {
  // i am just using the standard config, change if you need something else
  ...require("prettier-config-standard"),
  pluginSearchDirs: [__dirname],
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  useTabs: false,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 80,
}
