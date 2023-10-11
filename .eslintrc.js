module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb", "airbnb/hooks", "prettier"],
  plugins: ["react", "unused-imports", "prettier"],

  overrides: [
    {
      files: ["**/*.{test,spec}.{js,jsx,ts,tsx}"],
      plugins: ["jest"],
      extends: ["plugin:jest/all"],
      rules: {},
    },
    {
      files: ["**/*.js"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint", "prettier"],
      extends: [
        "airbnb-typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:react/jsx-runtime",
      ],
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/quotes": ["error", "double"],
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
      },
    },
    {
      files: ["**/*.stories.*", "**/*.story.*"],
      extends: ["plugin:storybook/recommended", "prettier"],
      rules: {
        "storybook/default-exports": "error",
      },
    },
  ],
  rules: {
    "react/no-array-index-key": "off",
    "react/require-default-props": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        semi: true,
      },
    ],
    "no-alert": "error",
    "arrow-body-style": "off",
    "comma-dangle": "off",
    camelcase: "off",

    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "import/prefer-default-export": "off",
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

    "no-restricted-exports": [
      "error",
      {
        restrictDefaultExports: {
          defaultFrom: false,
        },
      },
    ],
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
  },
};
