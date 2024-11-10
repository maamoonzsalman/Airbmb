import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // Enable parsing of JSX
      },
    },
    globals: {
      ...globals.browser,
      ...globals.node, // Adds Node.js globals, like `process`
    },
  },
  plugins: {
    js: pluginJs.configs.recommended,
    react: pluginReact.configs.recommended,
  },
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
};
