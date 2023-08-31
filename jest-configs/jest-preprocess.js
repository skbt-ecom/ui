const babelOptions = {
  presets: [["@babel/preset-react", { runtime: "automatic" }], "@babel/preset-typescript"],
};

module.exports = require("babel-jest").createTransformer(babelOptions);
