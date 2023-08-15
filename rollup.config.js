// https://www.youtube.com/watch?v=CROGZ0sSt6Y&t=713s&ab_channel=MaximFilanovich
/* eslint-disable import/no-extraneous-dependencies */

const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const url = require("@rollup/plugin-url");
const svgr = require("@svgr/rollup");
const terser = require("@rollup/plugin-terser");
const dts = require("rollup-plugin-dts");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const autoprefixer = require("autoprefixer");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const alias = require("@rollup/plugin-alias");
const json = require("@rollup/plugin-json");
const progress = require("rollup-plugin-progress");
const sizes = require("rollup-plugin-sizes");
const filesize = require("rollup-plugin-filesize");

const simplevars = require("postcss-simple-vars");
const nested = require("postcss-nested");
const presetenv = require("postcss-preset-env");
const cssnano = require("cssnano");

const packageJson = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      // common js
      {
        file: `lib/${packageJson.main}`,
        format: "cjs",
        sourcemap: true,
      },
      // es module
      {
        file: `lib/${packageJson.module}`,
        format: "esm",
        sourcemap: true,
      },
    ],
    // external deps
    external: ["react", "react-dom"],
    onwarn(warning, warn) {
      // for hide 'use client' warning
      if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
        return;
      }
      warn(warning);
    },
    plugins: [
      // progress bar
      progress(),
      // for peerDeps
      peerDepsExternal(),
      // for aliases
      alias({
        entries: {
          "@src/": "src/",
        },
      }),
      // json
      json(),
      // Resolving third-party dependencies in node_modules
      resolve(),
      // Bundling to CommonJS format (module.exports/require())
      commonjs(),
      // ts
      typescript({
        tsconfig: "./tsconfig.lib.json",
      }),
      // scss
      postcss({
        plugins: [autoprefixer, simplevars(), nested(), presetenv(), cssnano()],
        modules: true,
        sourceMap: true,
        extract: false,
        minimize: true,
      }),
      // for icons and svg
      url(),
      svgr({ icon: true }),
      // min js bundle
      terser(),
      sizes(),
      filesize(),
    ],
  },
  // for types
  {
    input: "src/index.ts",
    output: [{ file: `lib/${packageJson.types}`, format: "esm" }],
    // exclude css/scss files from this bundle (this is only for global types)
    external: [/\.(css|scss)$/],
    plugins: [dts.default()],
  },
];

// TODO:: testing

// "babel-loader": "^8.3.0",
// rollup-plugin-babel
// process.env is working?
// svg with sb?
