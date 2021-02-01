const plugins = [
  "@babel/plugin-transform-runtime",
  ["@babel/plugin-proposal-class-properties", { loose: true }],
  ["@babel/plugin-proposal-object-rest-spread", { loose: true }],
]
const productionPlugins = [
  "@babel/plugin-transform-react-constant-elements",
  ["babel-plugin-transform-react-remove-prop-types", { removeImport: true }],
]

if (process.env.NODE_ENV === "production") {
  plugins.push(...productionPlugins)
}

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        bugfixes: true,
      },
    ],
    "@babel/preset-react",
  ],
  plugins,
}

/* 
использовать:
date-fns вместо luxon
clsx вместо classnames, babel-plugin-optimize-clsx
alias вместо импорта напрямую
*/
