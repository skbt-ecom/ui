module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier", "react", "@typescript-eslint", "unused-imports"],
  rules: {
    "react/no-array-index-key": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-uses-react": "off",
    "prettier/prettier": "error",
    "no-console": "warn",
    "no-alert": "error",
    "arrow-body-style": "off",
    "comma-dangle": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "unused-imports/no-unused-imports": "warn",
    "import/prefer-default-export": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    camelcase: "off",
    "@typescript-eslint/naming-convention": [
      "error",
      // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
      },
      // Allow camelCase functions (23.2), and PascalCase functions (23.8)
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "no-restricted-exports": [
      "error",
      {
        restrictDefaultExports: {
          defaultFrom: false,
        },
      },
    ],
  },
};
