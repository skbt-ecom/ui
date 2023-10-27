/* eslint-disable import/no-extraneous-dependencies */
// general
const path = require("path");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const json = require("@rollup/plugin-json");
const resolve = require("@rollup/plugin-node-resolve");
const babel = require("@rollup/plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const image = require("@rollup/plugin-image");
const alias = require("@rollup/plugin-alias");

// styles
const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const simplevars = require("postcss-simple-vars");
const nested = require("postcss-nested");
const presetenv = require("postcss-preset-env");
const cssnano = require("cssnano");

// static
const url = require("@rollup/plugin-url");
const svgr = require("@svgr/rollup");

// devtools
const progress = require("rollup-plugin-progress");

const { getFiles } = require("./src/utils/getFiles");

const extensions = [".js", ".ts", ".jsx", ".tsx"];
const ignoreExtensions = [
  ".stories.jsx",
  ".stories.tsx",
  ".stories.js",
  ".stories.ts",
  ".test.jsx",
  ".test.tsx",
  ".test.js",
  ".test.ts",
  ".spec.jsx",
  ".spec.tsx",
  ".spec.js",
  ".spec.ts",
];

const isDev = process.env.NODE_ENV === "development";

module.exports = [
  {
    input: ["./src/index.ts", ...getFiles("./src/components", extensions, ignoreExtensions)],
    output: {
      dir: "lib",
      // code-splitting
      preserveModules: true,
      preserveModulesRoot: "src",
      // resolve node_modules error
      // (preserveModules add node_modules folder to the final bundle,
      // but flatten node_modules structure during the publish stage )
      entryFileNames: (chunkInfo) => {
        if (chunkInfo.name.includes("node_modules")) {
          return `${chunkInfo.name.replace("node_modules", "external")}.js`;
        }

        return "[name].js";
      },
      sourcemap: isDev,
    },
    // external deps
    external: ["react", "react-dom"],
    // resolve unnecassary warnings
    onwarn(warning, warn) {
      // for hide 'use client' warning
      if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
        return;
      }
      warn(warning);
    },
    plugins: [
      // Resolving third-party dependencies in node_modules
      resolve(),
      // images
      image(),
      // progress bar
      progress(),
      // for peerDeps
      peerDepsExternal(),
      // for aliases
      alias({
        entries: {
          "@src": path.resolve(__dirname, "./src"),
        },
      }),
      // json support
      json(),
      // Babel support
      babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
      // Bundling to CommonJS format (module.exports/require())
      commonjs(),
      // ts
      typescript({
        tsconfig: "./tsconfig.lib.json",
        declaration: true,
        declarationDir: "lib",
        sourceMap: isDev,
      }),
      // scss
      postcss({
        plugins: [autoprefixer, simplevars(), nested(), presetenv(), cssnano()],
        modules: true,
        sourceMap: isDev,
        minimize: true,
      }),
      // for icons and svg
      url(),
      svgr({ icon: true }),
    ],
  },
];
