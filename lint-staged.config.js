module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint"],
  "*.{js,ts,tsx,scss,json}": "pretty-quick --staged",
  "**/*.ts?(x)": () => "npm run ts-check",
};
