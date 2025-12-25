import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    style: "src/styles/index.scss",
  },

  // treat SVGs as files
  loader: {
    ".svg": "file",
  },

  // files into a 'flags' subfolder
  esbuildOptions(options) {
    options.assetNames = "flags/[name]-[hash]";
  },

  esbuildPlugins: [sassPlugin()],

  format: ["esm", "cjs", "iife"],
  globalName: "NofiniteLocale", // For CDN (window.NofiniteLocale)
  dts: {
    entry: "src/index.ts", // Only generate types for the TS file, not SCSS
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  injectStyle: false,
});
