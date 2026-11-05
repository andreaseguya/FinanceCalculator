const { resolve } = require("node:path");
const { defineConfig } = require("vite");

const pages = [
  "index",
  "futureValue",
  "help",
  "loans",
  "login",
  "npvcards",
  "npvcalc",
  "roi",
];

module.exports = defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page, resolve(__dirname, `${page}.html`)]),
      ),
    },
  },
});
