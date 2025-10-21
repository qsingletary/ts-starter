// @ts-check
import eslintJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // Ignore folders
  {
    ignores: ["dist", "node_modules", ".yarn"]
  },

  // Base JavaScript recommended rules
  eslintJs.configs.recommended,

  // TypeScript recommended rules (using modern flat config style)
  ...tseslint.configs.recommendedTypeChecked,

  // Project-aware parser options
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      "no-console": "off"
    }
  },

  // Integrate Prettier (disables conflicting ESLint formatting rules)
  eslintConfigPrettier
];