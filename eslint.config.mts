import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tseslint.parser,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "class",
          format: ["PascalCase"],
          filter: {
            regex: "^[\\p{ASCII}]*$",
            match: true,
          },
        },
        {
          selector: "variable",
          format: ["camelCase"],
          filter: {
            regex: "^[\\p{ASCII}]*$",
            match: true,
          },
        },
        {
          selector: "method",
          format: ["camelCase"],
          filter: {
            regex: "^[\\p{ASCII}]*$",
            match: true,
          },
        },
      ],
    },
  },
  tseslint.configs.recommended,
]);
