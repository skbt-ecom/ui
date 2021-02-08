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
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-exponentiation-operator",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-object-rest-spread", { loose: true }],
    "@babel/plugin-transform-react-constant-elements",
    ["babel-plugin-transform-react-remove-prop-types", { removeImport: true }],
  ],
}

/* 
использовать:
date-fns вместо luxon
clsx вместо classnames, babel-plugin-optimize-clsx
HeaderNew static={false} -> sticky={true}
*/
