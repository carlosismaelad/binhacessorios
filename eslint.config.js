import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import vueConfigPrettier from "@vue/eslint-config-prettier";
import parserVue from "vue-eslint-parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["node_modules/", ".nuxt/", ".output/", "dist/"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    extends: [pluginJs.configs.recommended],
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1, maxBOF: 0 }],
      "eol-last": ["warn", "always"],
    },
  },
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    extends: [pluginVue.configs["flat/recommended"], vueConfigPrettier],
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/attribute-hyphenation": "off",
      "vue/no-v-html": "off",
      "vue/v-on-event-hyphenation": "off",
      "prettier/prettier": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 1, maxBOF: 0 }],
      "eol-last": ["warn", "always"],
    },
  },
  prettierRecommended,
]);
